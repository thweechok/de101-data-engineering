import sys
sys.stdout.reconfigure(encoding="utf-8")

for filepath, err_line, err_pos in [
    ("data/courses/sw-linux-k8s.js", 7, 7144),
    ("data/courses/sw-nextjs.js", 7, 8030),
    ("data/courses/sw-system-design.js", 7, 7765),
]:
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
    print(f"\n=== {filepath.split('/')[-1]} line {err_line} pos {err_pos} ===")
    if err_line <= len(lines):
        line = lines[err_line - 1]
        print(f"Line length: {len(line)}")
        ctx = line[max(0, err_pos-50):min(len(line), err_pos+50)]
        print(f"Context: {repr(ctx)}")
        
        # Count quote pairs
        in_str = False
        escape = False
        quote_opens = []
        quote_closes = []
        for j, c in enumerate(line):
            if escape:
                escape = False
                continue
            if c == chr(92):
                escape = True
                continue
            if c == chr(39):
                if not in_str:
                    in_str = True
                    quote_opens.append(j)
                else:
                    in_str = False
                    quote_closes.append(j)
        
        print(f"String pairs: {len(quote_closes)}")
        # Show closes near error position
        for qc in quote_closes:
            if abs(qc - err_pos) < 200:
                print(f"  Quote close at pos {qc}")
