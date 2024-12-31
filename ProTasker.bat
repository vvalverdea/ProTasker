@echo off
echo Starting development environment...

rem Navigate to frontend directory
echo Moving to frontend directory...
cd .\frontend\client

rem Build frontend
echo Building frontend...
call npm run build-dev
IF %ERRORLEVEL% NEQ 0 (
    echo Frontend build failed!
    exit /b %ERRORLEVEL%
)

rem Return to root and start backend
echo Moving to backend directory...
cd ..\..\backend

rem Start backend server
echo Starting backend server...
start http://localhost:8081
node server.js

IF %ERRORLEVEL% NEQ 0 (
    echo Backend server failed to start!
    exit /b %ERRORLEVEL%
)

pause