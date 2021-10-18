<h1 align="center">Task 1</h1>

<img align="left" src="https://user-images.githubusercontent.com/65415371/124740290-8e048b80-df12-11eb-9c29-654c9cb4561b.png" width="50px" />

## Problem Statement

The document contains exploratory test cases for the monefy android application. The charters are based on the main features of the application.Monefy is a money management app where you can add your expenses in a dedicated category and track your spendings. You can review your expenses in detailed charts.

#### Exploratory testing charters to document your testing. You can use simple format of:

- Format Used: Explore target, with resources, to discover information
- Findings from your charters. Did everything work as expected? What bugs were discovered?
- Prioritisation of those charters - which area of the app or testing would you explore first and why?
- How much time you have planned for each charter?
- What kind of risks you need to mitigate for this type of application?

---

<img align="left" src="https://user-images.githubusercontent.com/65415371/124740340-9eb50180-df12-11eb-9295-e33ac2752c57.png" width="50px" />

## Solution

### :gear: Device Used

- :computer: Platform and OS: ![android](https://img.shields.io/badge/android-11-brightgreen)
- :iphone: Device Used: Samsung Galaxy Note20 Ultra
- :microscope: Scope of Testing: Whole app needs to be tested for functionality, UI and usability

### :mag: Cases

<blockquote>
<details>
  <summary>Case ID_01</summary>
  <br/>
  <blockquote>
    
- Explore the main bugdet management screen with cherry picked options to check the usability, UI and functionality works as expected. Functionality includes swiping the screen should go to correct backward and forward dates and the expenses and income added should give correct calculation.
  
>This is chosen to be first as it is showing the main business logic and this screen will be used the most by the user. The main functionality tested here is the expense and income amounts once added should follow the logic: income - (expense1 + expense2 + expense3...) = total balance amount.

<br />
    
##### :triangular_flag_on_post: Issue_1: `Main Screen > Tooltips`
Tool tips are generated randomly and their location is not exact. Expected behavior should be to have the tooltips on the exact position.
- Priority: Low 
- Severity: Low
  </blockquote>
---
<br/>
</details>

<details>
  <summary>Case ID_02</summary>
<br/>
  <blockquote>
    
- Explore the left menu with different payment and time period features to check the usability, UI and functionality works as expected.
> As per user experience and other apps that are in market, mostly the menu on left are used more than the ones on right, so it'll be checked on second priority.
    
<br/>
    
##### :triangular_flag_on_post: Issue_2: `Left Menu > Choose date > Edit date`
For date edited and added as 16/10/000, the format shown to user is `dd/mm/y`. Expected result should be the format `dd/mm/yyyy`.
- Priority: Low 
- Severity: Low 
- Type: Content
  </blockquote>
---
<br/>
</details>

<details>
  <summary>Case ID_03</summary>
<br/>
  <blockquote>
    
- Explore the main header with search and trasnfer features to check the usability, UI and functionality works as expected.

##### :triangular_flag_on_post: Issue_3: `Header > Transfer`

Transfer any amount say, 1000 from empty cash account to empty card payment account, the one with deficit would show red round ring on main screen which opens a balance sheet on tap, but the one to which the money reached would have grey ring, and tapping on it doesnot redirect user to balance sheet.

##### _Steps to reproduce:_

1. Open freshly installed app
2. Go to transfer
3. Transfer 1000 from card payment to cash account
4. Select card payment from left menu, check the ring color, it'll be red and tapping on it will open balance sheet
5. Now select cash option from left menu, check the ring color, it'll be grey and tapping on it will give no output.

- Priority: Medium
- Severity: Medium
- Type: Functional
  </blockquote>

---

<br/>
</details>

<details>
  <summary>Case ID_04</summary>
<br/>
<blockquote>
  
- Explore the right menu category option with expenses and income features to check the usability, UI and functionality works as expected.

</blockquote>
  
---
<br/>
</details>

<details>
  <summary>Case ID_05</summary>
<br/>

<blockquote>
  
- Explore the right menu accounts option with cash and payment card options to check the usability, UI and functionality works as expected.
  
</blockquote>
  
---
<br/>
</details>

<details>
  <summary>Case ID_06</summary>
<br/>

<blockquote>
  
- Explore the right menu currencies option with pro features to check the usability, UI and functionality works as expected. Also, the limited usage for non-pro users.

</blockquote>
  
---
<br/>
</details>

<details>
  <summary>Case ID_07</summary>
<br/>
<blockquote>
  
- Explore the right menu settings option with balance, general settings, synchronization, and data back-up features to check usability, UI and functionality works as expected.

</blockquote>
  
---
<br/>
</details>
</blockquote>

### :watch: Time to Test

Each charter point would require approximately 10 to 15 minutes and no more than 20 minutes.

### :balance_scale: Risks to be Mitigated

- Such applications are numbers related, meaning money related; they are somehow sensitive and so the calculations need to be tested carefully.
- Check for online and offline both as offline should work fine.
