import os
import shutil
import glob

brain_dir = r"C:\Users\THWEECHOK\.gemini\antigravity\brain\3dd1951d-ae4f-46a0-afde-1adcb172062d"
target_dir = r"d:\AI\ขาย\de-course\public\images"

mappings = {
    'sw_auth_security_cover': 'sw-auth-security',
    'sw_aws_cover': 'sw-aws',
    'sw_cicd_cover': 'sw-cicd',
    'sw_coding_interview_cover': 'sw-coding-interview',
    'sw_docker_cover': 'sw-docker',
    'sw_dsa_cover': 'sw-dsa',
    'sw_fastapi_cover': 'sw-fastapi',
    'sw_flutter_cover': 'sw-flutter',
    'sw_flutter_state_cover': 'sw-flutter-state',
    'sw_fundamentals_cover': 'sw-fundamentals',
    'sw_git_cover': 'sw-git',
    'sw_html_css_cover': 'sw-html-css',
    'sw_htmlcss_cover': 'sw-html-css', # fallback
    'sw_interview_cover': 'sw-coding-interview',
    'sw_javascript_cover': 'sw-javascript',
    'sw_javascript_advanced_cover': 'sw-javascript-advanced',
    'sw_clean_code_cover': 'sw-clean-code',
    'sw_microservices_cover': 'sw-microservices',
    'sw_junior_roadmap_cover': 'sw-junior-roadmap',
    'sw_linux_k8s_cover': 'sw-linux-k8s',
    'sw_nextjs_cover': 'sw-nextjs',
    'sw_nodejs_cover': 'sw-nodejs',
    'sw_nosql_cache_cover': 'sw-nosql-cache',
    'sw_python_cover': 'sw-python-backend',
    'sw_react_cover': 'sw-react',
    'sw_sql_cover': 'sw-sql',
    'sw_system_design_cover': 'sw-system-design',
    'sw_testing_cover': 'sw-testing',
    'sw_thinking_cover': 'sw-thinking',
    'sw_typescript_cover': 'sw-typescript',
}

files = glob.glob(os.path.join(brain_dir, "sw_*cover*.png"))

for file_path in files:
    filename = os.path.basename(file_path)
    # Extract the prefix before the timestamp (e.g. sw_auth_security_cover_12345.png -> sw_auth_security_cover)
    prefix = filename.rsplit('_', 1)[0]
    
    if prefix in mappings:
        course_id = mappings[prefix]
        course_dir = os.path.join(target_dir, course_id)
        
        if not os.path.exists(course_dir):
            os.makedirs(course_dir)
            
        target_path = os.path.join(course_dir, "cover.png")
        shutil.copy2(file_path, target_path)
        print(f"Copied {filename} to {course_id}/cover.png")
    else:
        print(f"Skipped {filename} (No mapping found for prefix {prefix})")

print("Done moving covers.")
