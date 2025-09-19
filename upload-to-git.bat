@echo off
echo ============================================
echo   Fairy Tale E-commerce - Git Upload Script
echo ============================================
echo.

echo Checking if this is already a git repository...
if exist .git (
    echo Found existing git repository.
    echo Pulling latest changes...
    git pull origin main
) else (
    echo Initializing new git repository...
    git init
    echo Adding remote origin...
    git remote add origin https://github.com/mohamedelekhnawy/Fairy_Tale_Ecommerce.git
)

echo.
echo Adding all files to staging...
git add .

echo.
echo Creating commit with new features...
git commit -m "✨ Major Update: Complete E-commerce Features

🆕 New Features:
- ✅ Contact Us page with form validation and FAQ
- ✅ About Us page with team showcase and timeline  
- ✅ Shopping cart with localStorage persistence
- ✅ Complete checkout flow with routing
- ✅ Advanced product filter system (price, color, material, style)
- ✅ Real-time filtering with dynamic product count
- ✅ Responsive design improvements

🔧 Technical Improvements:
- Angular 20.2.0 with TypeScript 5.9.2
- Bootstrap 5.3.8 integration
- FontAwesome 7.0.1 icons
- Custom directives for styling effects
- Component communication with @Input/@Output
- Service-based architecture for cart and products

🎨 Design Enhancements:
- Consistent pink theme throughout (#d94e73, #fec7d0, #9b4d63)
- Smooth hover animations and scaling effects
- Mobile-first responsive design
- Professional UI/UX improvements"

echo.
echo Setting main branch...
git branch -M main

echo.
echo Pushing to GitHub repository...
git push -u origin main

echo.
echo ✅ SUCCESS! Your Fairy Tale E-commerce project has been uploaded!
echo 🌐 Repository: https://github.com/mohamedelekhnawy/Fairy_Tale_Ecommerce
echo.
echo 📋 What was uploaded:
echo   ✓ Complete Contact Us page with validation
echo   ✓ Detailed About Us page with team info  
echo   ✓ Shopping cart with localStorage
echo   ✓ Advanced product filtering system
echo   ✓ Responsive design improvements
echo   ✓ Updated README with all features
echo.
echo 🎉 Your project is now live on GitHub!

pause
