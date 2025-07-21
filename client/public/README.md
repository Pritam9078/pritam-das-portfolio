# Resume Setup Instructions

## How to Add Your Resume

1. **Replace the sample resume**: 
   - Delete the `resume-sample.pdf` file in this directory
   - Add your actual resume PDF file
   - Rename it to `Pritam_Das_Resume.pdf` (or update the filename in the hero component)

2. **Update the file path** (if you use a different filename):
   - Open `client/src/components/sections/hero.tsx`
   - Update the `link.href` path in both functions:
     - `handleResumeDownload()`: Change `/resume-sample.pdf`
     - `handleResumeView()`: Change `/resume-sample.pdf`

3. **File requirements**:
   - Format: PDF (recommended for compatibility)
   - Size: Keep under 2MB for fast loading
   - Name: Use underscores instead of spaces for web compatibility

## Current Features

✅ **View Resume**: Opens your resume in a new tab for quick viewing  
✅ **Download Resume**: Downloads the file with a custom filename  
✅ **Mobile Responsive**: Works on all device sizes  
✅ **Cyberpunk Styling**: Matches your portfolio theme  

## Files Served from this Directory

All files in the `client/public/` directory are served directly by the web server and can be accessed via URL paths like:
- `https://yoursite.com/your-resume.pdf`
- `https://yoursite.com/any-other-file.txt`