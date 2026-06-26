#!/usr/bin/env python3

from __future__ import annotations

import re
import shutil
from datetime import datetime
from pathlib import Path


ROOT = Path(".").resolve()
STAMP = datetime.now().strftime("%Y%m%d-%H%M%S")
BACKUP = ROOT / f".white-background-backup-{STAMP}"

EXTENSIONS = {
    ".svelte",
    ".css",
    ".scss",
    ".html",
    ".js",
    ".mjs",
    ".cjs",
    ".ts",
}

EXCLUDED = {
    "node_modules",
    ".svelte-kit",
    ".git",
    "build",
    "dist",
}


EXACT_REPLACEMENTS = {
    # Large section backgrounds
    "bg-[#edf8f4]": "bg-white",
    "bg-[#f4faf7]": "bg-white",
    "bg-[#eef9f5]": "bg-white",
    "bg-[#f2f8f5]": "bg-white",

    # Large card gradients
    (
        "bg-[linear-gradient(145deg,"
        "#ffffff_0%,#fff9f2_48%,#edf8f4_100%)]"
    ): "bg-white",

    # Feature-card gradients
    (
        "bg-[linear-gradient(145deg,"
        "#eef9f5_0%,#fff7ed_55%,#ffe4e6_100%)]"
    ): "bg-white",

    # Services section decorative background
    (
        "bg-[radial-gradient("
        "circle_at_8%_10%,rgba(20,184,166,0.13),transparent_30%"
        "),radial-gradient("
        "circle_at_92%_85%,rgba(249,115,22,0.13),transparent_32%"
        "),#edf8f4]"
    ): "bg-white",

    # Hero decorative background
    (
        "bg-[radial-gradient("
        "circle_at_18%_15%,rgba(20,184,166,0.18),transparent_30%"
        "),radial-gradient("
        "circle_at_85%_20%,rgba(255,90,95,0.14),transparent_28%"
        "),linear-gradient("
        "180deg,#edf8f4_-20%,#fff9f2_55%,transparent_92%)]"
    ): "bg-white",

    # Navigation surface
    (
        "linear-gradient(rgb(255, 255, 255) 0%, "
        "rgb(242, 248, 245) 52%, "
        "rgb(255, 243, 232) 100%)"
    ): "rgba(255, 255, 255, 0.96)",
}


def should_skip(path: Path) -> bool:
    parts = path.relative_to(ROOT).parts

    return any(
        part in EXCLUDED or "backup-" in part
        for part in parts
    )


BACKUP.mkdir(parents=True, exist_ok=True)

sources = sorted(
    EXACT_REPLACEMENTS,
    key=len,
    reverse=True,
)

pattern = re.compile(
    "|".join(re.escape(value) for value in sources)
)


def replace_exact(match: re.Match[str]) -> str:
    return EXACT_REPLACEMENTS[match.group(0)]


changed_files = 0
changes = 0

for path in ROOT.rglob("*"):
    if not path.is_file():
        continue

    if should_skip(path):
        continue

    if path.suffix.lower() not in EXTENSIONS:
        continue

    try:
        original = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        continue

    updated, count = pattern.subn(
        replace_exact,
        original,
    )

    # Normalize Tailwind theme surfaces.
    updated, theme_count = re.subn(
        r"--color-clean\s*:\s*#[0-9a-fA-F]{3,8}\s*;",
        "--color-clean: #ffffff;",
        updated,
    )

    updated, bg_count = re.subn(
        r"--color-bg\s*:\s*#[0-9a-fA-F]{3,8}\s*;",
        "--color-bg: #ffffff;",
        updated,
    )

    count += theme_count + bg_count

    if updated == original:
        continue

    relative = path.relative_to(ROOT)
    backup_path = BACKUP / relative

    backup_path.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    shutil.copy2(path, backup_path)
    path.write_text(updated, encoding="utf-8")

    changed_files += 1
    changes += count

    print(f"Updated: {relative} ({count} corrections)")


for generated in (
    ROOT / ".svelte-kit",
    ROOT / "build",
    ROOT / "dist",
):
    if generated.exists():
        shutil.rmtree(generated)


print()
print("White background cleanup completed.")
print(f"Changed files: {changed_files}")
print(f"Corrections:   {changes}")
print(f"Backup:       {BACKUP}")