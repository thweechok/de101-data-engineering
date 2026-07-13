import sys
sys.stdout.reconfigure(encoding="utf-8")

files_errs = [
    ("data/courses/sw-javascript-advanced.js", 54, 1269),
    ("data/courses/sw-linux-k8s.js", 7, 7144),
    ("data/courses/sw-nextjs.js", 7, 8030),
]

for filepath, err_line, err_pos in files_errs:
    print(f"\n=== {filepath} line {err_line} pos {err_pos} ===")
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
    if err_line <= len(lines):
        line = lines[err_line - 1]
        ctx = line[max(0, err_pos-40):min(len(line), err_pos+60)]
        print(f"Context: {repr(ctx)}")
