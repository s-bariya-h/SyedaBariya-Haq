<h1 align="center">Task 2</h1>

<img align="left" src="https://user-images.githubusercontent.com/65415371/124740290-8e048b80-df12-11eb-9c29-654c9cb4561b.png" width="50px" />

### Problem Statement

<br>
As Software Quality Engineer you are given a task of writing a set of automated tests for Monefy Android application used in Task 1.

#### Automated test cases for the Monefy app

- A list of ideas/bullet points you would test for. Focus on good coverage, rather than complete test cases.
- A prioritization of such test cases according to their possible business impact in case of failure.
- Outline the possibilities of automating proposed test cases on different levels, together with a short summary of pros and cons of each of them.
- Please automate proposed test cases.
- A short explanation of the provided solution inside the README file.

---

<img align="left" src="https://user-images.githubusercontent.com/65415371/124740340-9eb50180-df12-11eb-9295-e33ac2752c57.png" width="50px" />

## Solution

<br>

### ⚙️ Device Used

- 💻 **Platform and OS:** ![android](https://img.shields.io/badge/android-11-brightgreen)
- 📱 **Device Used:** Samsung Galaxy Note20 Ultra (Physical Device in Debug Mode)
  > Physical Device in debug mode with `Vysor` as a screen simulator
- 🔬**Scope of Testing:** Test cases for the main functionality as per the below listed use cases
  <br>

### 📦 Tech Stack

[![Made with Katalon Studio](https://img.shields.io/badge/Made%20with-Katalon%20Studio-058a5e?style=for-the-badge&logo=kotlin&logoColor=058a5e)](https://www.katalon.com/)
[![Made with Vysor](https://img.shields.io/badge/Made%20with-Vysor-blue?style=for-the-badge&logo=Vaadin&logoColor=blue)](https://www.vysor.io/)
[![Made with Nodejs](https://img.shields.io/badge/Made%20with-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=339933)](https://www.nodejs.org/)
[![Made with Nodejs](https://img.shields.io/badge/Made%20with-Appium%20drivers-339933?style=for-the-badge&logo=vercel&logoColor=white)](https://www.appium.io/)
<br>

<blockquote>
  
#### 💡 Philosophy
The reason for using this technology is that, Katalon Studio set-up is very easy and straightforward. It has a lot of options for automation, and I am currently using it in my company. It uses the appium drivers and nodeJS package.

The reason for using physical device is because android studio set-up was very heavy for my laptop and I was unable to continue with it. So instead, I used Vysor simulator and my real device for getting better testing results.

In my opinion, testing should always be performed in real devices so the device specific issues can be found as well which are mostly prominent in real devices.
<br>

</blockquote>
<br>

### 📋 Test Cases

#### Budget management main screen (Priority as mostly users will use it) :

> 1. The main functionality tested here is the expense and income amounts once added should follow the logic: income - (expense1 + expense2 + expense3...) = total balance amount.

#### Left hamburger menu

> 1. Payment selection can be done using the drop down. Test passes if the payment method is changed to the one selected.
> 2. Time period selection, test passes if the time selected is the same as showing on the main screen.

#### Header having search and transfer feature

> 1. Test passes if the search funtionality works as expected and shows `No results found` in case entered search has no data.
> 2. Test passes if the trasnfer amount is set and done successfully and the correct amount can be scene.

#### Right hamburger menu having categories, accounts, currencies, and settings.

> 1. Test passes if the options in the hamburger menu result in expected outputs.

_**Note:** Main functionalities are automated for the above test cases but not every option is dealt because of lack of time. The ones which are chosen results in monkey testing of the full application. The test cases also add that the user is directed to correct screen once any option is selected as an input. Also, the test cases can be made more result oriented too if it is automated through any other IDE to visualize the pass/failed results but as in this case, it is Katalon Studio so it does that by it self._

<br/>

### :wrench: Usage

- Clone the project from git to local machine
- Install Katalon Studio (Free Version)
- Install Appium and NodeJS
- Connect the device in debug mode with the laptop
- Install Vysor if needed
- Install the provided apk file in the challenge to local machine
- Open Katalon Studio
- Open the project inside Katalon Studio
- Expand `Test Cases` accordion from the left menu
- Change the path of the apk file from `</>Script` option below the code
- Run the script using `Play` button and choose `Android` as device option
- Check the logs below in the `Log Viewer`
