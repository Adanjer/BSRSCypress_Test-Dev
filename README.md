# UIC ONLINE BOOKSTORE RESERVATION SYSTEM tests and setup or installation directions.

-Create new Folder for storing the files

Downloading Node.js
1. Official Website:
- Visit the official Node.js website.
- Navigate to the download section.
2. Select Your Operating System:
- Choose the appropriate installer for your operating system (Windows, macOS, or Linux).
3. Download and Install:
- Click on the download link to start the download.
- Once downloaded, run the installer and follow the on-screen instructions to install Node.js on your system.
4. Verify Installation:
- After installation, open a terminal or command prompt.
- Type node --version and npm --version and press Enter.
- If Node.js and npm are installed properly, you should see the installed versions displayed.

Downloading Git
1. Official Website:
- Visit the official Git website.
- Navigate to the download section.
2. Select Your Operating System:
- Choose the appropriate installer for your operating system (Windows, macOS, or Linux).
3. Download and Install:
- Click on the download link to start the download.
- Once downloaded, run the installer and follow the on-screen instructions to install Git on your system.
4. Verify Installation:
- After installation, open a terminal or command prompt.
- Type git --version and press Enter.
- If Git is installed properly, you should see the installed version displayed.

Next Steps:

Git Clone:
Git clone is a more efficient way to obtain the repository as it retrieves the entire history and content with just one command.
- Clone the Cypress GitHub repository to our local machine.
- Use git clone https://github.com/cypress-io/cypress.git.

Below is the main scripts of our system repository
- Open new terminal in the desired folder.
- git clone https://github.com/Lemwelll/with-reservation-page-main.git


To start the Automating the test suites for frontend and backend of our System: 
We need these links below to navigate frontend and backend environment.
(http://localhost:8000/), (https://bookstore-backend-api.vercel.app/docs) or (uicbookstore.netlify.app) 

FOR LOCALHOST: 
- I copy the path of the vue components or pages (cd and then COPIED PATH link)
- Then npm run dev then wait until all are complied.

Installing Cypress via npm
Installation:

Install locally as a dev dependency for our project.
- Open new terminal
- Use npm install cypress --save-dev.

After installation, open the app and start testing!

To Open Cypress through via VScode: 

- Open terminal and use npx cypress open
- After cypress is open, enter e2e test
- then choose a browser to use for automation testing (Highly recommended browser: Google Chrome)
- Enter new spec and name it as what suites for the test automation
- Then back to the vscode and start the test scripts for running the automation
  
