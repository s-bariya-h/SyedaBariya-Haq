import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.startApplication('/Users/syedabariyahaq/Documents/Personal/N26/com.monefy.app.lite_2021-09-27.apk', true)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.TextView'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.TextView - Accounts'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.ImageView'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.EditText - Name'), 0)

Mobile.setText(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.EditText - Name (1)'), 'UAE', 0)

Mobile.hideKeyboard()

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.FrameLayout'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.TextView - ADD'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.TextView'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.ImageButton'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.ImageView (1)'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.TextView - 0'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.Button - 2'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.Button - 0'), 0)

Mobile.tap(findTestObject('Object Repository/ObjectRepo_Accounts/android.widget.Button - ADD TRANSFER'), 0)

Mobile.closeApplication()

