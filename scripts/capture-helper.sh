#!/usr/bin/env bash
# Capture helper for the HorneroOS website shot list (docs/CAPTURE-SHOT-LIST.md).
#
# Run it on the capture machine (a Hyprland session with grim). It never edits
# your shell or Hyprland configuration; the only compositor change it can make is
# the throw-away headless output you ask for with `headless create`.
#
#   scripts/capture-helper.sh check                       preflight (tools, outputs, lock state)
#   scripts/capture-helper.sh list [--session S01] [--priority P0] [--all]
#   scripts/capture-helper.sh info CAP-HERO-01            brief, spec and setup steps for a slot
#   scripts/capture-helper.sh headless create|remove      a 1920x1080 scale-1 output for staging
#   scripts/capture-helper.sh shot [--delay 3] [--output NAME] CAP-HERO-01
#   scripts/capture-helper.sh window [--delay 3] CAP-CC-03   the focused window, resized to the slot
#   scripts/capture-helper.sh region CAP-JAVI-02             pick a region with slurp
#   scripts/capture-helper.sh clip [--seconds 8] [--output NAME] CAP-CLIP-01
#   scripts/capture-helper.sh crop CAP-DESKTOP-03 file.png WxH+X+Y
#   scripts/capture-helper.sh verify CAP-HERO-01 file.png
#   scripts/capture-helper.sh ingest CAP-HERO-01 file.png [ingest options]
#
# Files go to ${HORNERO_CAPTURE_DIR:-$HOME/Pictures/hornero-captures}.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DATA="$ROOT/src/data/capture-slots.json"
OUT="${HORNERO_CAPTURE_DIR:-$HOME/Pictures/hornero-captures}"
HEADLESS_NAME="${HORNERO_CAPTURE_OUTPUT:-HEADLESS-CAP}"

die() { printf 'capture-helper: %s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "missing tool: $1 ($2)"; }
slot_field() { jq -er --arg id "$1" ".slots[] | select(.id == \$id) | $2" "$DATA" 2>/dev/null || die "unknown slot $1"; }
require_slot() { [[ "${1:-}" =~ ^CAP-[A-Z]+-[0-9]{2}$ ]] || die "pass a slot id such as CAP-HERO-01"; slot_field "$1" '.id' >/dev/null; }

cmd_check() {
  local ok=1
  for t in jq grim hyprctl ffmpeg node; do
    if command -v "$t" >/dev/null 2>&1; then printf '  ok       %s\n' "$t"; else printf '  MISSING  %s\n' "$t"; ok=0; fi
  done
  for t in slurp wf-recorder qs; do
    if command -v "$t" >/dev/null 2>&1; then printf '  ok       %s\n' "$t"; else printf '  optional %s (region picks, clips, lock check)\n' "$t"; fi
  done
  if command -v hyprctl >/dev/null 2>&1; then
    echo "Outputs:"
    hyprctl monitors -j | jq -r '.[] | "  \(.name)  \(.width)x\(.height)@\(.refreshRate | floor)  scale \(.scale)  focused=\(.focused)"'
  fi
  if command -v qs >/dev/null 2>&1; then
    printf 'Lock state: %s\n' "$(qs ipc call lock isLocked 2>/dev/null || echo unknown)"
  fi
  printf 'Capture dir: %s\n' "$OUT"
  [[ $ok -eq 1 ]] || die "install the missing tools"
  cat <<'TXT'
Before you shoot: demo user only, released pins, shipped wallpaper, do-not-disturb on,
no personal windows or notifications, cursor parked. Rules: docs/CAPTURE-SHOT-LIST.md.
TXT
}

cmd_list() {
  local session="" priority="" all=0
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --session) session="$2"; shift 2 ;;
      --priority) priority="$2"; shift 2 ;;
      --all) all=1; shift ;;
      *) die "unknown option $1" ;;
    esac
  done
  jq -r --arg s "$session" --arg p "$priority" --argjson all "$all" '
    .slots[] | select(($s == "" or .session == $s) and ($p == "" or .priority == $p) and ($all == 1 or .status == "pending"))
    | [.id, .priority, .session, .kind, "\(.width)x\(.height)", .status, .title.en] | @tsv' "$DATA" | column -t -s $'\t'
}

cmd_info() {
  require_slot "${1:-}"
  jq -r --arg id "$1" '.slots[] | select(.id == $id) |
    "\(.id)  \(.priority)  \(.kind)  session \(.session)\n\(.title.en)\n\nOn screen: \(.description.en)\nSpec: \(.aspect) \(.width)x\(.height)\(if .scale2x then " (+2x master)" else "" end), \(.format)\nState: theme \(.theme), mode \(.mode), layout \(.layout), wallpaper \(.wallpaper)\nPrivacy: \(.privacy)\n\nSetup:\n\(.setup | to_entries | map("  \(.key + 1). \(.value)") | join("\n"))"' "$DATA"
}

cmd_headless() {
  need hyprctl "Hyprland"
  case "${1:-}" in
    create)
      hyprctl output create headless "$HEADLESS_NAME" >/dev/null
      hyprctl keyword monitor "$HEADLESS_NAME,1920x1080@60,auto,1" >/dev/null
      echo "Created $HEADLESS_NAME (1920x1080, scale 1). Move windows with: hyprctl dispatch movewindow mon:$HEADLESS_NAME"
      echo "For a 2x master: hyprctl keyword monitor $HEADLESS_NAME,3840x2160@60,auto,2"
      ;;
    remove)
      hyprctl output remove "$HEADLESS_NAME" >/dev/null && echo "Removed $HEADLESS_NAME"
      ;;
    *) die "headless create|remove" ;;
  esac
}

countdown() { local n="${1:-0}"; while (( n > 0 )); do printf '\r%s s...' "$n" >&2; sleep 1; n=$((n - 1)); done; printf '\r         \r' >&2; }

cmd_shot() {
  need grim grim; need hyprctl Hyprland
  local delay=0 output=""
  while [[ "${1:-}" == --* ]]; do
    case "$1" in
      --delay) delay="$2"; shift 2 ;;
      --output) output="$2"; shift 2 ;;
      --all) output="__all__"; shift ;;
      *) die "unknown option $1" ;;
    esac
  done
  local id="${1:-}"; require_slot "$id"
  mkdir -p "$OUT"
  if [[ -z "$output" ]]; then output="$(hyprctl monitors -j | jq -r '.[] | select(.focused) | .name')"; fi
  countdown "$delay"
  local file="$OUT/$id.png"
  if [[ "$output" == "__all__" ]]; then grim "$file"; else grim -o "$output" "$file"; fi
  printf 'wrote %s\n' "$file"
  cmd_verify "$id" "$file" || true
}

cmd_window() {
  need grim grim; need hyprctl Hyprland
  local delay=0
  [[ "${1:-}" == --delay ]] && { delay="$2"; shift 2; }
  local id="${1:-}"; require_slot "$id"
  local w h
  w="$(slot_field "$id" .width)"; h="$(slot_field "$id" .height)"
  hyprctl dispatch resizewindowpixel "exact $w $h,activewindow" >/dev/null
  countdown "$delay"
  local geometry
  geometry="$(hyprctl activewindow -j | jq -r '"\(.at[0]),\(.at[1]) \(.size[0])x\(.size[1])"')"
  mkdir -p "$OUT"
  grim -g "$geometry" "$OUT/$id.png"
  printf 'wrote %s (window %s)\n' "$OUT/$id.png" "$geometry"
  cmd_verify "$id" "$OUT/$id.png" || true
}

cmd_region() {
  need grim grim; need slurp slurp
  local id="${1:-}"; require_slot "$id"
  mkdir -p "$OUT"
  grim -g "$(slurp)" "$OUT/$id.png"
  printf 'wrote %s\n' "$OUT/$id.png"
  cmd_verify "$id" "$OUT/$id.png" || true
}

cmd_clip() {
  need wf-recorder wf-recorder; need ffmpeg ffmpeg; need hyprctl Hyprland
  local seconds=8 output=""
  while [[ "${1:-}" == --* ]]; do
    case "$1" in
      --seconds) seconds="$2"; shift 2 ;;
      --output) output="$2"; shift 2 ;;
      *) die "unknown option $1" ;;
    esac
  done
  local id="${1:-}"; require_slot "$id"
  [[ -n "$output" ]] || output="$(hyprctl monitors -j | jq -r '.[] | select(.focused) | .name')"
  mkdir -p "$OUT"
  local raw="$OUT/$id.raw.mp4"
  printf 'Recording %s s from %s. Perform the steps now.\n' "$seconds" "$output" >&2
  timeout "$seconds" wf-recorder -o "$output" -f "$raw" >/dev/null 2>&1 || true
  ffmpeg -loglevel error -y -i "$raw" -an -vf "scale=1280:720:flags=lanczos,fps=30" -c:v libx264 -crf 22 -pix_fmt yuv420p -movflags +faststart "$OUT/$id.mp4"
  ffmpeg -loglevel error -y -i "$raw" -an -vf "scale=1280:720:flags=lanczos,fps=30" -c:v libvpx-vp9 -crf 34 -b:v 0 "$OUT/$id.webm"
  ffmpeg -loglevel error -y -ss "$((seconds / 2))" -i "$raw" -frames:v 1 -vf "scale=1280:720" "$OUT/$id-poster.png"
  rm -f "$raw"
  ls -lh "$OUT/$id".mp4 "$OUT/$id".webm "$OUT/$id-poster.png"
  echo "Each video should be under 2.5 MB; re-record shorter if not."
  echo "Ingest: node scripts/capture-ingest.mjs $id --mp4 $OUT/$id.mp4 --webm $OUT/$id.webm --poster $OUT/$id-poster.png"
}

cmd_crop() {
  need ffmpeg ffmpeg
  local id="${1:-}" file="${2:-}" geo="${3:-}"; require_slot "$id"
  [[ -f "$file" ]] || die "no such file: $file"
  [[ "$geo" =~ ^([0-9]+)x([0-9]+)\+([0-9]+)\+([0-9]+)$ ]] || die "geometry must be WxH+X+Y"
  mkdir -p "$OUT"
  ffmpeg -loglevel error -y -i "$file" -vf "crop=${BASH_REMATCH[1]}:${BASH_REMATCH[2]}:${BASH_REMATCH[3]}:${BASH_REMATCH[4]}" "$OUT/$id.png"
  printf 'wrote %s\n' "$OUT/$id.png"
  cmd_verify "$id" "$OUT/$id.png"
}

cmd_verify() {
  need ffprobe ffmpeg
  local id="${1:-}" file="${2:-}"; require_slot "$id"
  [[ -f "$file" ]] || die "no such file: $file"
  local want_w want_h got
  want_w="$(slot_field "$id" .width)"; want_h="$(slot_field "$id" .height)"
  got="$(ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:s=x "$file")"
  local gw="${got%x*}" gh="${got#*x}"
  if (( gw < want_w || gh < want_h )); then printf 'FAIL %s: %sx%s is smaller than %sx%s\n' "$id" "$gw" "$gh" "$want_w" "$want_h" >&2; return 1; fi
  if ! awk -v a="$gw" -v b="$gh" -v c="$want_w" -v d="$want_h" 'BEGIN { r1 = a / b; r2 = c / d; diff = (r1 > r2 ? r1 - r2 : r2 - r1); exit (diff / r2 > 0.01) }'; then
    printf 'FAIL %s: aspect %sx%s differs from %sx%s\n' "$id" "$gw" "$gh" "$want_w" "$want_h" >&2; return 1
  fi
  printf 'ok   %s: %sx%s matches %sx%s (%s)\n' "$id" "$gw" "$gh" "$want_w" "$want_h" "$(slot_field "$id" .aspect)"
}

cmd_ingest() {
  need node node
  local id="${1:-}"; require_slot "$id"; shift
  (cd "$ROOT" && node scripts/capture-ingest.mjs "$id" "$@")
}

main() {
  need jq jq
  local sub="${1:-}"; shift || true
  case "$sub" in
    check) cmd_check ;;
    list) cmd_list "$@" ;;
    info) cmd_info "$@" ;;
    headless) cmd_headless "$@" ;;
    shot) cmd_shot "$@" ;;
    window) cmd_window "$@" ;;
    region) cmd_region "$@" ;;
    clip) cmd_clip "$@" ;;
    crop) cmd_crop "$@" ;;
    verify) cmd_verify "$@" ;;
    ingest) cmd_ingest "$@" ;;
    ''|-h|--help|help) sed -n '2,24p' "${BASH_SOURCE[0]}" ;;
    *) die "unknown command $sub (try --help)" ;;
  esac
}
main "$@"
