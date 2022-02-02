import { FastlaneBase } from "@fastlanejs/base";

/** Shape for [[adb]] options argument
 */

type AdbOptions = {
  /**
   * Android serial of the device to use for this command
   */
  serial: string;
  /**
   * All commands you want to pass to the adb command, e.g. `kill-server`
   */
  command?: string;
  /**
   * The path to your `adb` binary (can be left blank if the ANDROID_SDK_ROOT, ANDROID_HOME or ANDROID_SDK environment variable is set)
   */
  adbPath?: string;
};

/** Shape for [[adbDevices]] options argument
 */

type AdbDevicesOptions = {
  /**
   * The path to your `adb` binary (can be left blank if the ANDROID_SDK_ROOT environment variable is set)
   */
  adbPath?: string;
};

/** Shape for [[addExtraPlatforms]] options argument
 */

type AddExtraPlatformsOptions = {
  /**
   * The optional extra platforms to support
   */
  platforms: string[];
};

/** Shape for [[addGitTag]] options argument
 */

type AddGitTagOptions = {
  /**
   * Define your own tag text. This will replace all other parameters
   */
  tag?: string;
  /**
   * Is used to keep your tags organised under one 'folder'
   */
  grouping: string;
  /**
   * Whether the current lane should be included in the tag and message composition, e.g. '<grouping>/<lane>/<prefix><build_number><postfix>'
   */
  includesLane: boolean;
  /**
   * Anything you want to put in front of the version number (e.g. 'v')
   */
  prefix: string;
  /**
   * Anything you want to put at the end of the version number (e.g. '-RC1')
   */
  postfix: string;
  /**
   * The build number. Defaults to the result of increment_build_number if you're using it
   */
  buildNumber?: string;
  /**
   * The tag message. Defaults to the tag's name
   */
  message?: string;
  /**
   * The commit or object where the tag will be set. Defaults to the current HEAD
   */
  commit?: string;
  /**
   * Force adding the tag
   */
  force?: boolean;
  /**
   * Make a GPG-signed tag, using the default e-mail address's key
   */
  sign?: boolean;
};

/** Shape for [[appStoreBuildNumber]] options argument
 */

type AppStoreBuildNumberOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * sets the build number to given value if no build is in current train
   */
  initialBuildNumber: string;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * Query the live version (ready-for-sale)
   */
  live?: boolean;
  /**
   * The version number whose latest build number we want
   */
  version?: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
};

/** Shape for [[appStoreConnectApiKey]] options argument
 */

type AppStoreConnectApiKeyOptions = {
  /**
   * The key ID
   */
  keyId: string;
  /**
   * The issuer ID
   */
  issuerId: string;
  /**
   * The path to the key p8 file
   */
  keyFilepath?: string;
  /**
   * The content of the key p8 file
   */
  keyContent?: string;
  /**
   * Whether :key_content is Base64 encoded or not
   */
  isKeyContentBase64: boolean;
  /**
   * The token session duration
   */
  duration?: any;
  /**
   * Is App Store or Enterprise (in house) team? App Store Connect API cannot determine this on its own (yet)
   */
  inHouse: boolean;
  /**
   * Authorizes all Spaceship::ConnectAPI requests by automatically setting Spaceship::ConnectAPI.token
   */
  setSpaceshipToken: boolean;
};

/** Shape for [[appaloosa]] options argument
 */

type AppaloosaOptions = {
  /**
   * Binary path. Optional for ipa if you use the `ipa` or `xcodebuild` action
   */
  binary: string;
  /**
   * Your API token
   */
  apiToken: string;
  /**
   * Your Store id
   */
  storeId: string;
  /**
   * Your app is limited to special users? Give us the group ids
   */
  groupIds?: string;
  /**
   * Add some screenshots application to your store or hit [enter]
   */
  screenshots: string;
  /**
   * Select the folder locale for your screenshots
   */
  locale?: string;
  /**
   * Select the device format for your screenshots
   */
  device?: string;
  /**
   * Your app description
   */
  description?: string;
  /**
   * Your app changelog
   */
  changelog?: string;
};

/** Shape for [[appetize]] options argument
 */

type AppetizeOptions = {
  /**
   * Appetize API host
   */
  apiHost: string;
  /**
   * Appetize.io API Token
   */
  apiToken: string;
  /**
   * URL from which the ipa file can be fetched. Alternative to :path
   */
  url?: string;
  /**
   * Platform. Either `ios` or `android`
   */
  platform: string;
  /**
   * Path to zipped build on the local filesystem. Either this or `url` must be specified
   */
  path?: string;
  /**
   * If not provided, a new app will be created. If provided, the existing build will be overwritten
   */
  publicKey?: string;
  /**
   * Notes you wish to add to the uploaded app
   */
  note?: string;
  /**
   * The number of seconds to wait until automatically ending the session due to user inactivity. Must be 30, 60, 90, 120, 180, 300, 600, 1800, 3600 or 7200. Default is 120
   */
  timeout?: any;
};

/** Shape for [[appetizeViewingUrlGenerator]] options argument
 */

type AppetizeViewingUrlGeneratorOptions = {
  /**
   * Public key of the app you wish to update
   */
  publicKey: string;
  /**
   * Base URL of Appetize service
   */
  baseUrl?: string;
  /**
   * Device type: iphone4s, iphone5s, iphone6, iphone6plus, ipadair, iphone6s, iphone6splus, ipadair2, nexus5, nexus7 or nexus9
   */
  device: string;
  /**
   * Scale of the simulator
   */
  scale?: string;
  /**
   * Device orientation
   */
  orientation: string;
  /**
   * Device language in ISO 639-1 language code, e.g. 'de'
   */
  language?: string;
  /**
   * Color of the device
   */
  color: string;
  /**
   * Specify a deep link to open when your app is launched
   */
  launchUrl?: string;
  /**
   * The operating system version on which to run your app, e.g. 10.3, 8.0
   */
  osVersion?: string;
  /**
   * Specify params value to be passed to Appetize
   */
  params?: string;
  /**
   * Specify a HTTP proxy to be passed to Appetize
   */
  proxy?: string;
};

/** Shape for [[appium]] options argument
 */

type AppiumOptions = {
  /**
   * Appium platform name
   */
  platform: string;
  /**
   * Path to Appium spec directory
   */
  specPath: string;
  /**
   * Path to Appium target app file
   */
  appPath: string;
  /**
   * Use local Appium server with invoke automatically
   */
  invokeAppiumServer?: boolean;
  /**
   * Hostname of Appium server
   */
  host?: string;
  /**
   * HTTP port of Appium server
   */
  port?: any;
  /**
   * Path to Appium executable
   */
  appiumPath?: string;
  /**
   * Hash of caps for Appium::Driver
   */
  caps?: { string: string };
  /**
   * Hash of appium_lib for Appium::Driver
   */
  appiumLib?: { string: string };
};

/** Shape for [[appledoc]] options argument
 */

type AppledocOptions = {
  /**
   * Path(s) to source file directories or individual source files. Accepts a single path or an array of paths
   */
  input: string[];
  /**
   * Output path
   */
  output?: string;
  /**
   * Template files path
   */
  templates?: string;
  /**
   * DocSet installation path
   */
  docsetInstallPath?: string;
  /**
   * Include static doc(s) at path
   */
  include?: string;
  /**
   * Ignore given path
   */
  ignore?: string[];
  /**
   * Exclude given path from output
   */
  excludeOutput?: string[];
  /**
   * File including main index description
   */
  indexDesc?: string;
  /**
   * Project name
   */
  projectName: string;
  /**
   * Project version
   */
  projectVersion?: string;
  /**
   * Project company
   */
  projectCompany: string;
  /**
   * Company UTI (i.e. reverse DNS name)
   */
  companyId?: string;
  /**
   * Create HTML
   */
  createHtml: boolean;
  /**
   * Create documentation set
   */
  createDocset: boolean;
  /**
   * Install documentation set to Xcode
   */
  installDocset: boolean;
  /**
   * Prepare DocSet for publishing
   */
  publishDocset: boolean;
  /**
   * Create HTML and skip creating a DocSet
   */
  noCreateDocset: boolean;
  /**
   * The html anchor format to use in DocSet HTML
   */
  htmlAnchors?: string;
  /**
   * Remove contents of output path before starting
   */
  cleanOutput: boolean;
  /**
   * DocSet bundle identifier
   */
  docsetBundleId?: string;
  /**
   * DocSet bundle name
   */
  docsetBundleName?: string;
  /**
   * DocSet description
   */
  docsetDesc?: string;
  /**
   * DocSet copyright message
   */
  docsetCopyright?: string;
  /**
   * DocSet feed name
   */
  docsetFeedName?: string;
  /**
   * DocSet feed URL
   */
  docsetFeedUrl?: string;
  /**
   * DocSet feed formats. Separated by a comma [atom,xml]
   */
  docsetFeedFormats?: string;
  /**
   * DocSet package (.xar) URL
   */
  docsetPackageUrl?: string;
  /**
   * DocSet fallback URL
   */
  docsetFallbackUrl?: string;
  /**
   * DocSet publisher identifier
   */
  docsetPublisherId?: string;
  /**
   * DocSet publisher name
   */
  docsetPublisherName?: string;
  /**
   * DocSet min. Xcode version
   */
  docsetMinXcodeVersion?: string;
  /**
   * DocSet platform family
   */
  docsetPlatformFamily?: string;
  /**
   * DocSet certificate issuer
   */
  docsetCertIssuer?: string;
  /**
   * DocSet certificate signer
   */
  docsetCertSigner?: string;
  /**
   * DocSet bundle filename
   */
  docsetBundleFilename?: string;
  /**
   * DocSet atom feed filename
   */
  docsetAtomFilename?: string;
  /**
   * DocSet xml feed filename
   */
  docsetXmlFilename?: string;
  /**
   * DocSet package (.xar,.tgz) filename
   */
  docsetPackageFilename?: string;
  /**
   * Documentation generation options
   */
  options?: string;
  /**
   * Cross reference template regex
   */
  crossrefFormat?: string;
  /**
   * Exit code threshold below which 0 is returned
   */
  exitThreshold?: any;
  /**
   * Title of the documentation section (defaults to "Programming Guides"
   */
  docsSectionTitle?: string;
  /**
   * Documentation generation warnings
   */
  warnings?: string;
  /**
   * Log format [0-3]
   */
  logformat?: any;
  /**
   * Log verbosity level [0-6,xcode]
   */
  verbose?: string;
};

/** Shape for [[appstore]] options argument
 */

type AppstoreOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The bundle identifier of your app
   */
  appIdentifier?: string;
  /**
   * The version that should be edited or created
   */
  appVersion?: string;
  /**
   * Path to your ipa file
   */
  ipa?: string;
  /**
   * Path to your pkg file
   */
  pkg?: string;
  /**
   * If set the given build number (already uploaded to iTC) will be used instead of the current built one
   */
  buildNumber?: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * Modify live metadata, this option disables ipa upload and screenshot upload
   */
  editLive?: boolean;
  /**
   * Force usage of live version rather than edit version
   */
  useLiveVersion: boolean;
  /**
   * Path to the folder containing the metadata files
   */
  metadataPath?: string;
  /**
   * Path to the folder containing the screenshots
   */
  screenshotsPath?: string;
  /**
   * Skip uploading an ipa or pkg to App Store Connect
   */
  skipBinaryUpload: boolean;
  /**
   * Don't upload the screenshots
   */
  skipScreenshots: boolean;
  /**
   * Don't upload the metadata (e.g. title, description). This will still upload screenshots
   */
  skipMetadata: boolean;
  /**
   * Don’t create or update the app version that is being prepared for submission
   */
  skipAppVersionUpdate: boolean;
  /**
   * Skip verification of HTML preview file
   */
  force: boolean;
  /**
   * Clear all previously uploaded screenshots before uploading the new ones
   */
  overwriteScreenshots: boolean;
  /**
   * Sync screenshots with local ones. This is currently beta optionso set true to 'FASTLANE_ENABLE_BETA_DELIVER_SYNC_SCREENSHOTS' environment variable as well
   */
  syncScreenshots: boolean;
  /**
   * Submit the new version for Review after uploading everything
   */
  submitForReview: boolean;
  /**
   * Rejects the previously submitted build if it's in a state where it's possible
   */
  rejectIfPossible: boolean;
  /**
   * Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
   */
  automaticRelease?: boolean;
  /**
   * Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
   */
  autoReleaseDate?: any;
  /**
   * Enable the phased release feature of iTC
   */
  phasedRelease?: boolean;
  /**
   * Reset the summary rating when you release a new version of the application
   */
  resetRatings?: boolean;
  /**
   * The price tier of this application
   */
  priceTier?: any;
  /**
   * Path to the app rating's config
   */
  appRatingConfigPath?: string;
  /**
   * Extra information for the submission (e.g. compliance specifications, IDFA settings)
   */
  submissionInformation?: { string: string };
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
   */
  devPortalTeamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  devPortalTeamName?: string;
  /**
   * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
   */
  itcProvider?: string;
  /**
   * Run precheck before submitting to app review
   */
  runPrecheckBeforeSubmit: boolean;
  /**
   * The default precheck rule level unless otherwise configured
   */
  precheckDefaultRuleLevel: any;
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
   */
  individualMetadataItems?: string[];
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - Metadata: The path to the app icon
   */
  appIcon?: string;
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - Metadata: The path to the Apple Watch app icon
   */
  appleWatchAppIcon?: string;
  /**
   * Metadata: The copyright notice
   */
  copyright?: string;
  /**
   * Metadata: The english name of the primary category (e.g. `Business`, `Books`)
   */
  primaryCategory?: string;
  /**
   * Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
   */
  secondaryCategory?: string;
  /**
   * Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
   */
  primaryFirstSubCategory?: string;
  /**
   * Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
   */
  primarySecondSubCategory?: string;
  /**
   * Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
   */
  secondaryFirstSubCategory?: string;
  /**
   * Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
   */
  secondarySecondSubCategory?: string;
  /**
   * **DEPRECATED!** This is no longer used by App Store Connect - Metadata: A hash containing the trade representative contact information
   */
  tradeRepresentativeContactInformation?: { string: string };
  /**
   * Metadata: A hash containing the review information
   */
  appReviewInformation?: { string: string };
  /**
   * Metadata: Path to the app review attachment file
   */
  appReviewAttachmentFile?: string;
  /**
   * Metadata: The localised app description
   */
  description?: { string: string };
  /**
   * Metadata: The localised app name
   */
  name?: { string: string };
  /**
   * Metadata: The localised app subtitle
   */
  subtitle?: { string: string };
  /**
   * Metadata: An array of localised keywords
   */
  keywords?: { string: string };
  /**
   * Metadata: An array of localised promotional texts
   */
  promotionalText?: { string: string };
  /**
   * Metadata: Localised release notes for this version
   */
  releaseNotes?: { string: string };
  /**
   * Metadata: Localised privacy url
   */
  privacyUrl?: { string: string };
  /**
   * Metadata: Localised Apple TV privacy policy text
   */
  appleTvPrivacyPolicy?: { string: string };
  /**
   * Metadata: Localised support url
   */
  supportUrl?: { string: string };
  /**
   * Metadata: Localised marketing url
   */
  marketingUrl?: { string: string };
  /**
   * Metadata: List of languages to activate
   */
  languages?: string[];
  /**
   * Ignore errors when invalid languages are found in metadata and screenshot directories
   */
  ignoreLanguageDirectoryValidation: boolean;
  /**
   * Should precheck check in-app purchases?
   */
  precheckIncludeInAppPurchases?: boolean;
  /**
   * The (spaceship) app ID of the app you want to use/modify
   */
  app?: any;
};

/** Shape for [[apteligent]] options argument
 */

type ApteligentOptions = {
  /**
   * dSYM.zip file to upload to Apteligent
   */
  dsym?: string;
  /**
   * Apteligent App ID key e.g. 569f5c87cb99e10e00c7xxxx
   */
  appId: string;
  /**
   * Apteligent App API key e.g. IXPQIi8yCbHaLliqzRoo065tH0lxxxxx
   */
  apiKey: string;
};

/** Shape for [[artifactory]] options argument
 */

type ArtifactoryOptions = {
  /**
   * File to be uploaded to artifactory
   */
  file: string;
  /**
   * Artifactory repo to put the file in
   */
  repo: string;
  /**
   * Path to deploy within the repo, including filename
   */
  repoPath: string;
  /**
   * Artifactory endpoint
   */
  endpoint: string;
  /**
   * Artifactory username
   */
  username?: string;
  /**
   * Artifactory password
   */
  password?: string;
  /**
   * Artifactory API key
   */
  apiKey?: string;
  /**
   * Artifact properties hash
   */
  properties?: { string: string };
  /**
   * Location of pem file to use for ssl verification
   */
  sslPemFile?: string;
  /**
   * Verify SSL
   */
  sslVerify?: boolean;
  /**
   * Proxy username
   */
  proxyUsername?: string;
  /**
   * Proxy password
   */
  proxyPassword?: string;
  /**
   * Proxy address
   */
  proxyAddress?: string;
  /**
   * Proxy port
   */
  proxyPort?: string;
  /**
   * Read timeout
   */
  readTimeout?: string;
};

/** Shape for [[automaticCodeSigning]] options argument
 */

type AutomaticCodeSigningOptions = {
  /**
   * Path to your Xcode project
   */
  path: string;
  /**
   * Defines if project should use automatic signing
   */
  useAutomaticSigning: boolean;
  /**
   * Team ID, is used when upgrading project
   */
  teamId?: string;
  /**
   * Specify targets you want to toggle the signing mech. (default to all targets)
   */
  targets?: string[];
  /**
   * Code signing identity type (iPhone Developer, iPhone Distribution)
   */
  codeSignIdentity?: string;
  /**
   * Provisioning profile name to use for code signing
   */
  profileName?: string;
  /**
   * Provisioning profile UUID to use for code signing
   */
  profileUuid?: string;
  /**
   * Application Product Bundle Identifier
   */
  bundleIdentifier?: string;
};

/** Shape for [[backupFile]] options argument
 */

type BackupFileOptions = {
  /**
   * Path to the file you want to backup
   */
  path: string;
};

/** Shape for [[backupXcarchive]] options argument
 */

type BackupXcarchiveOptions = {
  /**
   * Path to your xcarchive file. Optional if you use the `xcodebuild` action
   */
  xcarchive: string;
  /**
   * Where your archive will be placed
   */
  destination: string;
  /**
   * Enable compression of the archive
   */
  zip?: boolean;
  /**
   * Filename of the compressed archive. Will be appended by `.xcarchive.zip`. Default value is the output xcarchive filename
   */
  zipFilename?: string;
  /**
   * Create a versioned (date and app version) subfolder where to put the archive
   */
  versioned?: boolean;
};

/** Shape for [[badge]] options argument
 */

type BadgeOptions = {
  /**
   * Adds a dark flavored badge ontop of your icon
   */
  dark?: boolean;
  /**
   * Add your custom overlay/badge image
   */
  custom?: string;
  /**
   * Hides the beta badge
   */
  noBadge?: boolean;
  /**
   * Add a shield to your app icon from shields.io
   */
  shield?: string;
  /**
   * Adds and alpha badge instead of the default beta one
   */
  alpha?: boolean;
  /**
   * Sets the root path to look for AppIcons
   */
  path?: string;
  /**
   * Set custom duration for the timeout of the shields.io request in seconds
   */
  shieldIoTimeout?: any;
  /**
   * Glob pattern for finding image files
   */
  glob?: string;
  /**
   * Keeps/adds an alpha channel to the icon (useful for android icons)
   */
  alphaChannel?: boolean;
  /**
   * Position of shield on icon. Default: North - Choices include: NorthWest, North, NorthEast, West, Center, East, SouthWest, South, SouthEast
   */
  shieldGravity?: string;
  /**
   * Shield image will no longer be resized to aspect fill the full icon. Instead it will only be shrunk to not exceed the icon graphic
   */
  shieldNoResize?: boolean;
};

/** Shape for [[buildAndUploadToAppetize]] options argument
 */

type BuildAndUploadToAppetizeOptions = {
  /**
   * Parameters that are passed to the xcodebuild action
   */
  xcodebuild?: { string: string };
  /**
   * The scheme to build. Can also be passed using the `xcodebuild` parameter
   */
  scheme?: string;
  /**
   * Appetize.io API Token
   */
  apiToken: string;
  /**
   * If not provided, a new app will be created. If provided, the existing build will be overwritten
   */
  publicKey?: string;
  /**
   * Notes you wish to add to the uploaded app
   */
  note?: string;
  /**
   * The number of seconds to wait until automatically ending the session due to user inactivity. Must be 30, 60, 90, 120, 180, 300, 600, 1800, 3600 or 7200. Default is 120
   */
  timeout?: any;
};

/** Shape for [[buildAndroidApp]] options argument
 */

type BuildAndroidAppOptions = {
  /**
   * The gradle task you want to execute, e.g. `assemble`, `bundle` or `test`. For tasks such as `assembleMyFlavorRelease` you should use gradle(task: 'assemble', flavor: 'Myflavor', build_type: 'Release')
   */
  task?: string;
  /**
   * The flavor that you want the task for, e.g. `MyFlavor`. If you are running the `assemble` task in a multi-flavor project, and you rely on Actions.lane_context[SharedValues::GRADLE_APK_OUTPUT_PATH] then you must specify a flavor here or else this value will be undefined
   */
  flavor?: string;
  /**
   * The build type that you want the task for, e.g. `Release`. Useful for some tasks such as `assemble`
   */
  buildType?: string;
  /**
   * The multiple gradle tasks that you want to execute, e.g. `[assembleDebug, bundleDebug]`
   */
  tasks?: string[];
  /**
   * All parameter flags you want to pass to the gradle command, e.g. `--exitcode --xml file.xml`
   */
  flags?: string;
  /**
   * The root directory of the gradle project
   */
  projectDir: string;
  /**
   * The path to your `gradlew`. If you specify a relative path, it is assumed to be relative to the `project_dir`
   */
  gradlePath?: string;
  /**
   * Gradle properties to be exposed to the gradle script
   */
  properties?: { string: string };
  /**
   * Gradle system properties to be exposed to the gradle script
   */
  systemProperties?: { string: string };
  /**
   * Android serial, which device should be used for this command
   */
  serial: string;
  /**
   * Control whether the generated Gradle command is printed as output before running it (true/false)
   */
  printCommand: boolean;
  /**
   * Control whether the output produced by given Gradle command is printed while running (true/false)
   */
  printCommandOutput: boolean;
};

/** Shape for [[buildApp]] options argument
 */

type BuildAppOptions = {
  /**
   * Path to the workspace file
   */
  workspace?: string;
  /**
   * Path to the project file
   */
  project?: string;
  /**
   * The project's scheme. Make sure it's marked as `Shared`
   */
  scheme?: string;
  /**
   * Should the project be cleaned before building it?
   */
  clean: boolean;
  /**
   * The directory in which the ipa file should be stored in
   */
  outputDirectory: string;
  /**
   * The name of the resulting ipa file
   */
  outputName?: string;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * Hide all information that's not necessary while building
   */
  silent: boolean;
  /**
   * The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
   */
  codesigningIdentity?: string;
  /**
   * Should we skip packaging the ipa?
   */
  skipPackageIpa: boolean;
  /**
   * Should we skip packaging the pkg?
   */
  skipPackagePkg: boolean;
  /**
   * Should the ipa file include symbols?
   */
  includeSymbols?: boolean;
  /**
   * Should the ipa file include bitcode?
   */
  includeBitcode?: boolean;
  /**
   * Method used to export the archive. Valid values are: app-store, validation, ad-hoc, package, enterprise, development, developer-id and mac-application
   */
  exportMethod?: string;
  /**
   * Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
   */
  exportOptions?: { string: string };
  /**
   * Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  exportXcargs?: string;
  /**
   * Export ipa from previously built xcarchive. Uses archive_path as source
   */
  skipBuildArchive?: boolean;
  /**
   * After building, don't archive, effectively not including -archivePath param
   */
  skipArchive?: boolean;
  /**
   * Build without codesigning
   */
  skipCodesigning?: boolean;
  /**
   * Platform to build when using a Catalyst enabled app. Valid values are: ios, macos
   */
  catalystPlatform?: string;
  /**
   * Full name of 3rd Party Mac Developer Installer or Developer ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
   */
  installerCertName?: string;
  /**
   * The directory in which the archive should be stored in
   */
  buildPath?: string;
  /**
   * The path to the created archive
   */
  archivePath?: string;
  /**
   * The directory where built products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: boolean;
  /**
   * Path to the result bundle directory to create. Ignored if `result_bundle` if false
   */
  resultBundlePath?: string;
  /**
   * The directory where to store the build log
   */
  buildlogPath: string;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
   */
  toolchain?: string;
  /**
   * Use a custom destination for building the app
   */
  destination?: string;
  /**
   * Optional: Sometimes you need to specify a team id when exporting the ipa file
   */
  exportTeamId?: string;
  /**
   * Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * **DEPRECATED!** Use `xcodebuild_formatter: ''` instead - Disable xcpretty formatting of build output
   */
  disableXcpretty?: boolean;
  /**
   * Use the test (RSpec style) format for build output
   */
  xcprettyTestFormat?: boolean;
  /**
   * A custom xcpretty formatter to use
   */
  xcprettyFormatter?: string;
  /**
   * Have xcpretty create a JUnit-style XML report at the provided path
   */
  xcprettyReportJunit?: string;
  /**
   * Have xcpretty create a simple HTML report at the provided path
   */
  xcprettyReportHtml?: string;
  /**
   * Have xcpretty create a JSON compilation database at the provided path
   */
  xcprettyReportJson?: string;
  /**
   * Have xcpretty use unicode encoding when reporting builds
   */
  xcprettyUtf?: boolean;
  /**
   * Analyze the project build time and store the output in 'culprits.txt' file
   */
  analyzeBuildTime?: boolean;
  /**
   * Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
   */
  skipProfileDetection?: boolean;
  /**
   * Allows for override of the default `xcodebuild` command
   */
  xcodebuildCommand?: string;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm?: boolean;
};

/** Shape for [[buildIosApp]] options argument
 */

type BuildIosAppOptions = {
  /**
   * Path to the workspace file
   */
  workspace?: string;
  /**
   * Path to the project file
   */
  project?: string;
  /**
   * The project's scheme. Make sure it's marked as `Shared`
   */
  scheme?: string;
  /**
   * Should the project be cleaned before building it?
   */
  clean: boolean;
  /**
   * The directory in which the ipa file should be stored in
   */
  outputDirectory: string;
  /**
   * The name of the resulting ipa file
   */
  outputName?: string;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * Hide all information that's not necessary while building
   */
  silent: boolean;
  /**
   * The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
   */
  codesigningIdentity?: string;
  /**
   * Should we skip packaging the ipa?
   */
  skipPackageIpa: boolean;
  /**
   * Should the ipa file include symbols?
   */
  includeSymbols?: boolean;
  /**
   * Should the ipa file include bitcode?
   */
  includeBitcode?: boolean;
  /**
   * Method used to export the archive. Valid values are: app-store, validation, ad-hoc, package, enterprise, development, developer-id and mac-application
   */
  exportMethod?: string;
  /**
   * Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
   */
  exportOptions?: { string: string };
  /**
   * Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  exportXcargs?: string;
  /**
   * Export ipa from previously built xcarchive. Uses archive_path as source
   */
  skipBuildArchive?: boolean;
  /**
   * After building, don't archive, effectively not including -archivePath param
   */
  skipArchive?: boolean;
  /**
   * Build without codesigning
   */
  skipCodesigning?: boolean;
  /**
   * The directory in which the archive should be stored in
   */
  buildPath?: string;
  /**
   * The path to the created archive
   */
  archivePath?: string;
  /**
   * The directory where built products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: boolean;
  /**
   * Path to the result bundle directory to create. Ignored if `result_bundle` if false
   */
  resultBundlePath?: string;
  /**
   * The directory where to store the build log
   */
  buildlogPath: string;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
   */
  toolchain?: string;
  /**
   * Use a custom destination for building the app
   */
  destination?: string;
  /**
   * Optional: Sometimes you need to specify a team id when exporting the ipa file
   */
  exportTeamId?: string;
  /**
   * Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * **DEPRECATED!** Use `xcodebuild_formatter: ''` instead - Disable xcpretty formatting of build output
   */
  disableXcpretty?: boolean;
  /**
   * Use the test (RSpec style) format for build output
   */
  xcprettyTestFormat?: boolean;
  /**
   * A custom xcpretty formatter to use
   */
  xcprettyFormatter?: string;
  /**
   * Have xcpretty create a JUnit-style XML report at the provided path
   */
  xcprettyReportJunit?: string;
  /**
   * Have xcpretty create a simple HTML report at the provided path
   */
  xcprettyReportHtml?: string;
  /**
   * Have xcpretty create a JSON compilation database at the provided path
   */
  xcprettyReportJson?: string;
  /**
   * Have xcpretty use unicode encoding when reporting builds
   */
  xcprettyUtf?: boolean;
  /**
   * Analyze the project build time and store the output in 'culprits.txt' file
   */
  analyzeBuildTime?: boolean;
  /**
   * Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
   */
  skipProfileDetection?: boolean;
  /**
   * Allows for override of the default `xcodebuild` command
   */
  xcodebuildCommand?: string;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm?: boolean;
};

/** Shape for [[buildMacApp]] options argument
 */

type BuildMacAppOptions = {
  /**
   * Path to the workspace file
   */
  workspace?: string;
  /**
   * Path to the project file
   */
  project?: string;
  /**
   * The project's scheme. Make sure it's marked as `Shared`
   */
  scheme?: string;
  /**
   * Should the project be cleaned before building it?
   */
  clean: boolean;
  /**
   * The directory in which the ipa file should be stored in
   */
  outputDirectory: string;
  /**
   * The name of the resulting ipa file
   */
  outputName?: string;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * Hide all information that's not necessary while building
   */
  silent: boolean;
  /**
   * The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
   */
  codesigningIdentity?: string;
  /**
   * Should we skip packaging the pkg?
   */
  skipPackagePkg: boolean;
  /**
   * Should the ipa file include symbols?
   */
  includeSymbols?: boolean;
  /**
   * Should the ipa file include bitcode?
   */
  includeBitcode?: boolean;
  /**
   * Method used to export the archive. Valid values are: app-store, validation, ad-hoc, package, enterprise, development, developer-id and mac-application
   */
  exportMethod?: string;
  /**
   * Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
   */
  exportOptions?: { string: string };
  /**
   * Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  exportXcargs?: string;
  /**
   * Export ipa from previously built xcarchive. Uses archive_path as source
   */
  skipBuildArchive?: boolean;
  /**
   * After building, don't archive, effectively not including -archivePath param
   */
  skipArchive?: boolean;
  /**
   * Build without codesigning
   */
  skipCodesigning?: boolean;
  /**
   * Full name of 3rd Party Mac Developer Installer or Developer ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
   */
  installerCertName?: string;
  /**
   * The directory in which the archive should be stored in
   */
  buildPath?: string;
  /**
   * The path to the created archive
   */
  archivePath?: string;
  /**
   * The directory where built products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: boolean;
  /**
   * Path to the result bundle directory to create. Ignored if `result_bundle` if false
   */
  resultBundlePath?: string;
  /**
   * The directory where to store the build log
   */
  buildlogPath: string;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
   */
  toolchain?: string;
  /**
   * Use a custom destination for building the app
   */
  destination?: string;
  /**
   * Optional: Sometimes you need to specify a team id when exporting the ipa file
   */
  exportTeamId?: string;
  /**
   * Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * **DEPRECATED!** Use `xcodebuild_formatter: ''` instead - Disable xcpretty formatting of build output
   */
  disableXcpretty?: boolean;
  /**
   * Use the test (RSpec style) format for build output
   */
  xcprettyTestFormat?: boolean;
  /**
   * A custom xcpretty formatter to use
   */
  xcprettyFormatter?: string;
  /**
   * Have xcpretty create a JUnit-style XML report at the provided path
   */
  xcprettyReportJunit?: string;
  /**
   * Have xcpretty create a simple HTML report at the provided path
   */
  xcprettyReportHtml?: string;
  /**
   * Have xcpretty create a JSON compilation database at the provided path
   */
  xcprettyReportJson?: string;
  /**
   * Have xcpretty use unicode encoding when reporting builds
   */
  xcprettyUtf?: boolean;
  /**
   * Analyze the project build time and store the output in 'culprits.txt' file
   */
  analyzeBuildTime?: boolean;
  /**
   * Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
   */
  skipProfileDetection?: boolean;
  /**
   * Allows for override of the default `xcodebuild` command
   */
  xcodebuildCommand?: string;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm?: boolean;
};

/** Shape for [[bundleInstall]] options argument
 */

type BundleInstallOptions = {
  /**
   * Generate bin stubs for bundled gems to ./bin
   */
  binstubs?: string;
  /**
   * Run bundle clean automatically after install
   */
  clean: boolean;
  /**
   * Use the rubygems modern index instead of the API endpoint
   */
  fullIndex: boolean;
  /**
   * Use the specified gemfile instead of Gemfile
   */
  gemfile?: string;
  /**
   * Install gems using parallel workers
   */
  jobs?: boolean;
  /**
   * Do not attempt to fetch gems remotely and use the gem cache instead
   */
  local: boolean;
  /**
   * Install using defaults tuned for deployment and CI environments
   */
  deployment: boolean;
  /**
   * Don't update the existing gem cache
   */
  noCache: boolean;
  /**
   * Don't remove stale gems from the cache
   */
  noPrune: boolean;
  /**
   * Specify a different path than the system default ($BUNDLE_PATH or $GEM_HOME). Bundler will remember this value for future installs on this machine
   */
  path?: string;
  /**
   * Install to the system location ($BUNDLE_PATH or $GEM_HOME) even if the bundle was previously installed somewhere else for this application
   */
  system: boolean;
  /**
   * Only output warnings and errors
   */
  quiet: boolean;
  /**
   * Retry network and git requests that have failed
   */
  retry?: boolean;
  /**
   * Specify a different shebang executable name than the default (usually 'ruby')
   */
  shebang?: string;
  /**
   * Make a bundle that can work without the Bundler runtime
   */
  standalone?: string;
  /**
   * Sets level of security when dealing with signed gems. Accepts `LowSecurity`, `MediumSecurity` and `HighSecurity` as values
   */
  trustPolicy?: string;
  /**
   * Exclude gems that are part of the specified named group
   */
  without?: string;
  /**
   * Include gems that are part of the specified named group
   */
  with?: string;
  /**
   * Don't allow the Gemfile.lock to be updated after install
   */
  frozen: boolean;
  /**
   * Force download every gem, even if the required versions are already available locally
   */
  redownload: boolean;
};

/** Shape for [[captureAndroidScreenshots]] options argument
 */

type CaptureAndroidScreenshotsOptions = {
  /**
   * Path to the root of your Android SDK installation, e.g. ~/tools/android-sdk-macosx
   */
  androidHome?: string;
  /**
   * **DEPRECATED!** The Android build tools version to use, e.g. '23.0.2'
   */
  buildToolsVersion?: string;
  /**
   * A list of locales which should be used
   */
  locales: string[];
  /**
   * Enabling this option will automatically clear previously generated screenshots before running screengrab
   */
  clearPreviousScreenshots: boolean;
  /**
   * The directory where to store the screenshots
   */
  outputDirectory: string;
  /**
   * Don't open the summary after running _screengrab_
   */
  skipOpenSummary: boolean;
  /**
   * The package name of the app under test (e.g. com.yourcompany.yourapp)
   */
  appPackageName: string;
  /**
   * The package name of the tests bundle (e.g. com.yourcompany.yourapp.test)
   */
  testsPackageName?: string;
  /**
   * Only run tests in these Java packages
   */
  useTestsInPackages?: string[];
  /**
   * Only run tests in these Java classes
   */
  useTestsInClasses?: string[];
  /**
   * Additional launch arguments
   */
  launchArguments?: string[];
  /**
   * The fully qualified class name of your test instrumentation runner
   */
  testInstrumentationRunner?: string;
  /**
   * **DEPRECATED!** Return the device to this locale after running tests
   */
  endingLocale?: string;
  /**
   * **DEPRECATED!** Restarts the adb daemon using `adb root` to allow access to screenshots directories on device. Use if getting 'Permission denied' errors
   */
  useAdbRoot?: boolean;
  /**
   * The path to the APK for the app under test
   */
  appApkPath?: string;
  /**
   * The path to the APK for the tests bundle
   */
  testsApkPath?: string;
  /**
   * Use the device or emulator with the given serial number or qualifier
   */
  specificDevice?: string;
  /**
   * Type of device used for screenshots. Matches Google Play Types (phone, sevenInch, tenInch, tv, wear)
   */
  deviceType: string;
  /**
   * Whether or not to exit Screengrab on test failure. Exiting on failure will not copy screenshots to local machine nor open screenshots summary
   */
  exitOnTestFailure: boolean;
  /**
   * Enabling this option will automatically uninstall the application before running it
   */
  reinstallApp: boolean;
  /**
   * Add timestamp suffix to screenshot filename
   */
  useTimestampSuffix: boolean;
  /**
   * Configure the host used by adb to connect, allows running on remote devices farm
   */
  adbHost?: string;
};

/** Shape for [[captureIosScreenshots]] options argument
 */

type CaptureIosScreenshotsOptions = {
  /**
   * Path the workspace file
   */
  workspace?: string;
  /**
   * Path the project file
   */
  project?: string;
  /**
   * Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * A list of devices you want to take the screenshots from
   */
  devices?: string[];
  /**
   * A list of languages which should be used
   */
  languages: string[];
  /**
   * A list of launch arguments which should be used
   */
  launchArguments: string[];
  /**
   * The directory where to store the screenshots
   */
  outputDirectory: string;
  /**
   * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
   */
  outputSimulatorLogs?: boolean;
  /**
   * By default, the latest version should be used automatically. If you want to change it, do it here
   */
  iosVersion?: string;
  /**
   * Don't open the HTML summary after running _snapshot_
   */
  skipOpenSummary: any;
  /**
   * Do not check for most recent SnapshotHelper code
   */
  skipHelperVersionCheck: any;
  /**
   * Enabling this option will automatically clear previously generated screenshots before running snapshot
   */
  clearPreviousScreenshots: any;
  /**
   * Enabling this option will automatically uninstall the application before running it
   */
  reinstallApp: any;
  /**
   * Enabling this option will automatically erase the simulator before running the application
   */
  eraseSimulator: any;
  /**
   * Enabling this option will prevent displaying the simulator window
   */
  headless: boolean;
  /**
   * Enabling this option will automatically override the status bar to show 9:41 AM, full battery, and full reception (Adjust 'SNAPSHOT_SIMULATOR_WAIT_FOR_BOOT_TIMEOUT' environment variable if override status bar is not working. Might be because simulator is not fully booted. Defaults to 10 seconds)
   */
  overrideStatusBar: any;
  /**
   * Fully customize the status bar by setting each option here. See `xcrun simctl status_bar --help`
   */
  overrideStatusBarArguments?: string;
  /**
   * Enabling this option will configure the Simulator's system language
   */
  localizeSimulator: any;
  /**
   * Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
   */
  darkMode?: boolean;
  /**
   * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
   */
  appIdentifier?: string;
  /**
   * A list of photos that should be added to the simulator before running the application
   */
  addPhotos?: string[];
  /**
   * A list of videos that should be added to the simulator before running the application
   */
  addVideos?: string[];
  /**
   * A path to screenshots.html template
   */
  htmlTemplate?: string;
  /**
   * The directory where to store the build log
   */
  buildlogPath: string;
  /**
   * Should the project be cleaned before building it?
   */
  clean: any;
  /**
   * Test without building, requires a derived data path
   */
  testWithoutBuilding?: boolean;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The scheme you want to use, this must be the scheme for the UI Tests
   */
  scheme?: string;
  /**
   * The number of times a test can fail before snapshot should stop retrying
   */
  numberOfRetries: any;
  /**
   * Should snapshot stop immediately after the tests completely failed on one device?
   */
  stopAfterFirstError: any;
  /**
   * The directory where build products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: any;
  /**
   * The name of the target you want to test (if you desire to override the Target Application from Xcode)
   */
  testTargetName?: string;
  /**
   * Separate the log files per device and per language
   */
  namespaceLogFiles?: any;
  /**
   * Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
   */
  concurrentSimulators: any;
  /**
   * Disable the simulator from showing the 'Slide to type' prompt
   */
  disableSlideToType?: any;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * The testplan associated with the scheme that should be used for testing
   */
  testplan?: string;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to run
   */
  onlyTesting?: any;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
   */
  skipTesting?: any;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * **DEPRECATED!** Use `xcodebuild_formatter: ''` instead - Additional xcpretty arguments
   */
  xcprettyArgs?: string;
  /**
   * Disable xcpretty formatting of build
   */
  disableXcpretty?: boolean;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm: boolean;
};

/** Shape for [[captureScreenshots]] options argument
 */

type CaptureScreenshotsOptions = {
  /**
   * Path the workspace file
   */
  workspace?: string;
  /**
   * Path the project file
   */
  project?: string;
  /**
   * Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * A list of devices you want to take the screenshots from
   */
  devices?: string[];
  /**
   * A list of languages which should be used
   */
  languages: string[];
  /**
   * A list of launch arguments which should be used
   */
  launchArguments: string[];
  /**
   * The directory where to store the screenshots
   */
  outputDirectory: string;
  /**
   * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
   */
  outputSimulatorLogs?: boolean;
  /**
   * By default, the latest version should be used automatically. If you want to change it, do it here
   */
  iosVersion?: string;
  /**
   * Don't open the HTML summary after running _snapshot_
   */
  skipOpenSummary: any;
  /**
   * Do not check for most recent SnapshotHelper code
   */
  skipHelperVersionCheck: any;
  /**
   * Enabling this option will automatically clear previously generated screenshots before running snapshot
   */
  clearPreviousScreenshots: any;
  /**
   * Enabling this option will automatically uninstall the application before running it
   */
  reinstallApp: any;
  /**
   * Enabling this option will automatically erase the simulator before running the application
   */
  eraseSimulator: any;
  /**
   * Enabling this option will prevent displaying the simulator window
   */
  headless: boolean;
  /**
   * Enabling this option will automatically override the status bar to show 9:41 AM, full battery, and full reception (Adjust 'SNAPSHOT_SIMULATOR_WAIT_FOR_BOOT_TIMEOUT' environment variable if override status bar is not working. Might be because simulator is not fully booted. Defaults to 10 seconds)
   */
  overrideStatusBar: any;
  /**
   * Fully customize the status bar by setting each option here. See `xcrun simctl status_bar --help`
   */
  overrideStatusBarArguments?: string;
  /**
   * Enabling this option will configure the Simulator's system language
   */
  localizeSimulator: any;
  /**
   * Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
   */
  darkMode?: boolean;
  /**
   * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
   */
  appIdentifier?: string;
  /**
   * A list of photos that should be added to the simulator before running the application
   */
  addPhotos?: string[];
  /**
   * A list of videos that should be added to the simulator before running the application
   */
  addVideos?: string[];
  /**
   * A path to screenshots.html template
   */
  htmlTemplate?: string;
  /**
   * The directory where to store the build log
   */
  buildlogPath: string;
  /**
   * Should the project be cleaned before building it?
   */
  clean: any;
  /**
   * Test without building, requires a derived data path
   */
  testWithoutBuilding?: boolean;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The scheme you want to use, this must be the scheme for the UI Tests
   */
  scheme?: string;
  /**
   * The number of times a test can fail before snapshot should stop retrying
   */
  numberOfRetries: any;
  /**
   * Should snapshot stop immediately after the tests completely failed on one device?
   */
  stopAfterFirstError: any;
  /**
   * The directory where build products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: any;
  /**
   * The name of the target you want to test (if you desire to override the Target Application from Xcode)
   */
  testTargetName?: string;
  /**
   * Separate the log files per device and per language
   */
  namespaceLogFiles?: any;
  /**
   * Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
   */
  concurrentSimulators: any;
  /**
   * Disable the simulator from showing the 'Slide to type' prompt
   */
  disableSlideToType?: any;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * The testplan associated with the scheme that should be used for testing
   */
  testplan?: string;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to run
   */
  onlyTesting?: any;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
   */
  skipTesting?: any;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * **DEPRECATED!** Use `xcodebuild_formatter: ''` instead - Additional xcpretty arguments
   */
  xcprettyArgs?: string;
  /**
   * Disable xcpretty formatting of build
   */
  disableXcpretty?: boolean;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm: boolean;
};

/** Shape for [[carthage]] options argument
 */

type CarthageOptions = {
  /**
   * Carthage command (one of: build, bootstrap, update, archive)
   */
  command: string;
  /**
   * Carthage dependencies to update, build or bootstrap
   */
  dependencies: string[];
  /**
   * Use SSH for downloading GitHub repositories
   */
  useSsh?: boolean;
  /**
   * Add dependencies as Git submodules
   */
  useSubmodules?: boolean;
  /**
   * Use .netrc for downloading frameworks
   */
  useNetrc?: boolean;
  /**
   * Check out dependency repositories even when prebuilt frameworks exist
   */
  useBinaries?: boolean;
  /**
   * When bootstrapping Carthage do not checkout
   */
  noCheckout?: boolean;
  /**
   * When bootstrapping Carthage do not build
   */
  noBuild?: boolean;
  /**
   * Don't skip building the Carthage project (in addition to its dependencies)
   */
  noSkipCurrent?: boolean;
  /**
   * Use derived data folder at path
   */
  derivedData?: string;
  /**
   * Print xcodebuild output inline
   */
  verbose?: boolean;
  /**
   * Define which platform to build for
   */
  platform?: string;
  /**
   * By default Carthage will rebuild a dependency regardless of whether it's the same resolved version as before. Passing the --cache-builds will cause carthage to avoid rebuilding a dependency if it can
   */
  cacheBuilds: boolean;
  /**
   * Framework name or names to archive, could be applied only along with the archive command
   */
  frameworks: string[];
  /**
   * Output name for the archive, could be applied only along with the archive command. Use following format *.framework.zip
   */
  output?: string;
  /**
   * Define which build configuration to use when building
   */
  configuration?: string;
  /**
   * Define which xcodebuild toolchain to use when building
   */
  toolchain?: string;
  /**
   * Define the directory containing the Carthage project
   */
  projectDirectory?: string;
  /**
   * Use new resolver when resolving dependency graph
   */
  newResolver?: boolean;
  /**
   * Path to the xcode build output
   */
  logPath?: string;
  /**
   * Create xcframework bundles instead of one framework per platform (requires Xcode 12+)
   */
  useXcframeworks: boolean;
  /**
   * Archive built frameworks from the current project
   */
  archive: boolean;
  /**
   * Path to the `carthage` executable on your machine
   */
  executable: string;
};

/** Shape for [[cert]] options argument
 */

type CertOptions = {
  /**
   * Create a development certificate instead of a distribution one
   */
  development: boolean;
  /**
   * Create specific certificate type (takes precedence over :development)
   */
  type?: string;
  /**
   * Create a certificate even if an existing certificate exists
   */
  force: boolean;
  /**
   * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
   */
  generateAppleCerts: boolean;
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The filename of certificate to store
   */
  filename?: string;
  /**
   * The path to a directory in which all certificates and private keys should be stored
   */
  outputPath: string;
  /**
   * Path to a custom keychain
   */
  keychainPath: string;
  /**
   * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your macOS account password
   */
  keychainPassword?: string;
  /**
   * Skips setting the partition list (which can sometimes take a long time). Setting the partition list is usually needed to prevent Xcode from prompting to allow a cert to be used for signing
   */
  skipSetPartitionList: boolean;
  /**
   * Set the provisioning profile's platform (ios, macos, tvos)
   */
  platform: string;
};

/** Shape for [[changelogFromGitCommits]] options argument
 */

type ChangelogFromGitCommitsOptions = {
  /**
   * Array containing two Git revision values between which to collect messages, you mustn't use it with :commits_count key at the same time
   */
  between?: string[];
  /**
   * Number of commits to include in changelog, you mustn't use it with :between key at the same time
   */
  commitsCount?: any;
  /**
   * Path of the git repository
   */
  path?: string;
  /**
   * The format applied to each commit while generating the collected value
   */
  pretty?: string;
  /**
   * The date format applied to each commit while generating the collected value
   */
  dateFormat?: string;
  /**
   * Whether or not to use ancestry-path param
   */
  ancestryPath?: boolean;
  /**
   * A glob(7) pattern to match against when finding the last git tag
   */
  tagMatchPattern?: string;
  /**
   * Whether or not to match a lightweight tag when searching for the last one
   */
  matchLightweightTag?: boolean;
  /**
   * Whether or not to disable changelog output
   */
  quiet?: boolean;
  /**
   * **DEPRECATED!** Use `:merge_commit_filtering` instead - Whether or not to include any commits that are merges
   */
  includeMerges?: boolean;
  /**
   * Controls inclusion of merge commits when collecting the changelog. Valid values: `:include_merges`, `:exclude_merges`, `:only_include_merges`
   */
  mergeCommitFiltering?: string;
};

/** Shape for [[chatwork]] options argument
 */

type ChatworkOptions = {
  /**
   * ChatWork API Token
   */
  apiToken: string;
  /**
   * The message to post on ChatWork
   */
  message: string;
  /**
   * The room ID
   */
  roomid: any;
  /**
   * Was this build successful? (true/false)
   */
  success?: boolean;
};

/** Shape for [[checkAppStoreMetadata]] options argument
 */

type CheckAppStoreMetadataOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * The default rule level unless otherwise configured
   */
  defaultRuleLevel: any;
  /**
   * Should check in-app purchases?
   */
  includeInAppPurchases?: boolean;
  /**
   * Should force check live app?
   */
  useLive: boolean;
  /**
   * mentioning  in a way that could be considered negative
   */
  negativeAppleSentiment?: any;
  /**
   * using placeholder text (e.g.:"lorem ipsum", "text here", etc...)
   */
  placeholderText?: any;
  /**
   * mentioning other platforms, like Android or Blackberry
   */
  otherPlatforms?: any;
  /**
   * mentioning features or content that is not currently available in your app
   */
  futureFunctionality?: any;
  /**
   * using text indicating this release is a test
   */
  testWords?: any;
  /**
   * including words that might be considered objectionable
   */
  curseWords?: any;
  /**
   * using text indicating that your IAP is free
   */
  freeStuffInIap?: any;
  /**
   * mentioning any of the user-specified words passed to custom_text(data: [words])
   */
  customText?: any;
  /**
   * using a copyright date that is any different from this current year, or missing a date
   */
  copyrightDate?: any;
  /**
   * unreachable URLs in app metadata
   */
  unreachableUrls?: any;
};

/** Shape for [[cleanBuildArtifacts]] options argument
 */

type CleanBuildArtifactsOptions = {
  /**
   * Exclude all files from clearing that match the given Regex pattern: e.g. '.*.mobileprovision'
   */
  excludePattern?: string;
};

/** Shape for [[cleanCocoapodsCache]] options argument
 */

type CleanCocoapodsCacheOptions = {
  /**
   * Pod name to be removed from cache
   */
  name?: string;
  /**
   * Show output without ANSI codes
   */
  noAnsi: boolean;
  /**
   * Show more debugging information
   */
  verbose: boolean;
  /**
   * Show nothing
   */
  silent: boolean;
  /**
   * Allows CocoaPods to run as root
   */
  allowRoot: boolean;
};

/** Shape for [[clearDerivedData]] options argument
 */

type ClearDerivedDataOptions = {
  /**
   * Custom path for derivedData
   */
  derivedDataPath: string;
};

/** Shape for [[clipboard]] options argument
 */

type ClipboardOptions = {
  /**
   * The string that should be copied into the clipboard
   */
  value: string;
};

/** Shape for [[cloc]] options argument
 */

type ClocOptions = {
  /**
   * Where the cloc binary lives on your system (full path including 'cloc')
   */
  binaryPath?: string;
  /**
   * Comma separated list of directories to exclude
   */
  excludeDir?: string;
  /**
   * Where to put the generated report file
   */
  outputDirectory: string;
  /**
   * Where to look for the source code (relative to the project root folder)
   */
  sourceDirectory: string;
  /**
   * Should we generate an XML File (if false, it will generate a plain text file)?
   */
  xml: boolean;
};

/** Shape for [[cocoapods]] options argument
 */

type CocoapodsOptions = {
  /**
   * Add `--repo-update` flag to `pod install` command
   */
  repoUpdate: boolean;
  /**
   * Execute a full pod installation ignoring the content of the project cache
   */
  cleanInstall: boolean;
  /**
   * Execute command without logging output
   */
  silent: boolean;
  /**
   * Show more debugging information
   */
  verbose: boolean;
  /**
   * Show output with ANSI codes
   */
  ansi: boolean;
  /**
   * Use bundle exec when there is a Gemfile presented
   */
  useBundleExec: boolean;
  /**
   * Explicitly specify the path to the Cocoapods' Podfile. You can either set it to the Podfile's path or to the folder containing the Podfile file
   */
  podfile?: string;
  /**
   * A callback invoked with the command output if there is a non-zero exit status
   */
  errorCallback?: any;
  /**
   * Retry with --repo-update if action was finished with error
   */
  tryRepoUpdateOnError?: boolean;
  /**
   * Disallow any changes to the Podfile or the Podfile.lock during installation
   */
  deployment?: boolean;
  /**
   * Allows CocoaPods to run as root
   */
  allowRoot?: boolean;
  /**
   * **DEPRECATED!** (Option renamed as clean_install) Remove SCM directories
   */
  clean?: boolean;
  /**
   * **DEPRECATED!** (Option removed from cocoapods) Integrate the Pods libraries into the Xcode project(s)
   */
  integrate?: boolean;
};

/** Shape for [[commitGithubFile]] options argument
 */

type CommitGithubFileOptions = {
  /**
   * The path to your repo, e.g. 'fastlane/fastlane'
   */
  repositoryName: string;
  /**
   * The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
   */
  serverUrl?: string;
  /**
   * Personal API Token for GitHub - generate one at https://github.com/settings/tokens
   */
  apiToken?: string;
  /**
   * Use a Bearer authorization token. Usually generated by Github Apps, e.g. GitHub Actions GITHUB_TOKEN environment variable
   */
  apiBearer?: string;
  /**
   * The branch that the file should be committed on (default: master)
   */
  branch?: string;
  /**
   * The relative path to your file from project root e.g. assets/my_app.xcarchive
   */
  path: string;
  /**
   * The commit message. Defaults to the file name
   */
  message?: string;
  /**
   * Optionally disable secure requests (ssl_verify_peer)
   */
  secure?: boolean;
};

/** Shape for [[commitVersionBump]] options argument
 */

type CommitVersionBumpOptions = {
  /**
   * The commit message when committing the version bump
   */
  message?: string;
  /**
   * The path to your project file (Not the workspace). If you have only one, this is optional
   */
  xcodeproj?: string;
  /**
   * Forces the commit, even if other files than the ones containing the version number have been modified
   */
  force?: boolean;
  /**
   * Include Settings.bundle/Root.plist with version bump
   */
  settings?: string;
  /**
   * A regular expression used to filter matched plist files to be modified
   */
  ignore?: string;
  /**
   * A list of extra files to be included in the version bump (string array or comma-separated string)
   */
  include?: string[];
  /**
   * Whether or not to use --no-verify
   */
  noVerify: boolean;
};

/** Shape for [[copyArtifacts]] options argument
 */

type CopyArtifactsOptions = {
  /**
   * Set this to false if you want move, rather than copy, the found artifacts
   */
  keepOriginal?: boolean;
  /**
   * The directory in which you want your artifacts placed
   */
  targetPath: string;
  /**
   * An array of file patterns of the files/folders you want to preserve
   */
  artifacts: string[];
  /**
   * Fail when a source file isn't found
   */
  failOnMissing?: boolean;
};

/** Shape for [[createAppOnManagedPlayStore]] options argument
 */

type CreateAppOnManagedPlayStoreOptions = {
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
  /**
   * The ID of your Google Play Console account. Can be obtained from the URL when you log in (`https://play.google.com/apps/publish/?account=...` or when you 'Obtain private app publishing rights' (https://developers.google.com/android/work/play/custom-app-api/get-started#retrieve_the_developer_account_id)
   */
  developerAccountId: string;
  /**
   * Path to the APK file to upload
   */
  apk: string;
  /**
   * App Title
   */
  appTitle: string;
  /**
   * Default app language (e.g. 'en_US')
   */
  language: string;
  /**
   * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
   */
  rootUrl?: string;
  /**
   * Timeout for read, open, and send (in seconds)
   */
  timeout?: any;
};

/** Shape for [[createAppOnline]] options argument
 */

type CreateAppOnlineOptions = {
  /**
   * Your Apple ID Username
   */
  username: string;
  /**
   * App Identifier (Bundle ID, e.g. com.krausefx.app)
   */
  appIdentifier: string;
  /**
   * App Identifier Suffix (Ignored if App Identifier does not end with .*)
   */
  bundleIdentifierSuffix?: string;
  /**
   * App Name
   */
  appName: string;
  /**
   * Initial version number (e.g. '1.0')
   */
  appVersion?: string;
  /**
   * SKU Number (e.g. '1234')
   */
  sku: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * The platforms to use (optional)
   */
  platforms?: string[];
  /**
   * Primary Language (e.g. 'en-US', 'fr-FR')
   */
  language: string;
  /**
   * The name of your company. It's used to set company name on App Store Connect team's app pages. Only required if it's the first app you create
   */
  companyName?: string;
  /**
   * Skip the creation of the app on App Store Connect
   */
  skipItc: any;
  /**
   * Array of App Store Connect users. If provided, you can limit access to this newly created app for users with the App Manager, Developer, Marketer or Sales roles
   */
  itcUsers?: string[];
  /**
   * **DEPRECATED!** Please use `enable_services` instead - Array with Spaceship App Services
   */
  enabledFeatures?: any;
  /**
   * Array with Spaceship App Services (e.g. access_wifi: (on|off), app_attest: (on|off), app_group: (on|off), apple_pay: (on|off), associated_domains: (on|off), auto_fill_credential: (on|off), class_kit: (on|off), icloud: (legacy|cloudkit), custom_network_protocol: (on|off), data_protection: (complete|unlessopen|untilfirstauth), extended_virtual_address_space: (on|off), family_controls: (on|off), file_provider_testing_mode: (on|off), fonts: (on|off), game_center: (ios|mac), health_kit: (on|off), hls_interstitial_preview: (on|off), home_kit: (on|off), hotspot: (on|off), in_app_purchase: (on|off), inter_app_audio: (on|off), low_latency_hls: (on|off), managed_associated_domains: (on|off), maps: (on|off), multipath: (on|off), network_extension: (on|off), nfc_tag_reading: (on|off), personal_vpn: (on|off), passbook: (on|off), push_notification: (on|off), sign_in_with_apple: (on), siri_kit: (on|off), system_extension: (on|off), user_management: (on|off), vpn_configuration: (on|off), wallet: (on|off), wireless_accessory: (on|off), car_play_audio_app: (on|off), car_play_messaging_app: (on|off), car_play_navigation_app: (on|off), car_play_voip_calling_app: (on|off), critical_alerts: (on|off), hotspot_helper: (on|off), driver_kit: (on|off), driver_kit_endpoint_security: (on|off), driver_kit_family_hid_device: (on|off), driver_kit_family_networking: (on|off), driver_kit_family_serial: (on|off), driver_kit_hid_event_service: (on|off), driver_kit_transport_hid: (on|off), multitasking_camera_access: (on|off), sf_universal_link_api: (on|off), vp9_decoder: (on|off), music_kit: (on|off), shazam_kit: (on|off), communication_notifications: (on|off), group_activities: (on|off), health_kit_estimate_recalibration: (on|off), time_sensitive_notifications: (on|off))
   */
  enableServices: any;
  /**
   * Skip the creation of the app on the Apple Developer Portal
   */
  skipDevcenter: any;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  itcTeamId?: any;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  itcTeamName?: string;
};

/** Shape for [[createKeychain]] options argument
 */

type CreateKeychainOptions = {
  /**
   * Keychain name
   */
  name?: string;
  /**
   * Path to keychain
   */
  path?: string;
  /**
   * Password for the keychain
   */
  password: string;
  /**
   * Should the newly created Keychain be the new system default keychain
   */
  defaultKeychain: boolean;
  /**
   * Unlock keychain after create
   */
  unlock: boolean;
  /**
   * timeout interval in seconds. Set `0` if you want to specify "no time-out"
   */
  timeout: any;
  /**
   * Lock keychain when the system sleeps
   */
  lockWhenSleeps: boolean;
  /**
   * Lock keychain after timeout interval
   */
  lockAfterTimeout: boolean;
  /**
   * Add keychain to search list
   */
  addToSearchList: boolean;
  /**
   * Fail the action if the Keychain already exists
   */
  requireCreate: boolean;
};

/** Shape for [[createPullRequest]] options argument
 */

type CreatePullRequestOptions = {
  /**
   * Personal API Token for GitHub - generate one at https://github.com/settings/tokens
   */
  apiToken?: string;
  /**
   * Use a Bearer authorization token. Usually generated by Github Apps, e.g. GitHub Actions GITHUB_TOKEN environment variable
   */
  apiBearer?: string;
  /**
   * The name of the repository you want to submit the pull request to
   */
  repo: string;
  /**
   * The title of the pull request
   */
  title: string;
  /**
   * The contents of the pull request
   */
  body?: string;
  /**
   * Indicates whether the pull request is a draft
   */
  draft?: boolean;
  /**
   * The labels for the pull request
   */
  labels?: string[];
  /**
   * The milestone ID (Integer) for the pull request
   */
  milestone?: any;
  /**
   * The name of the branch where your changes are implemented (defaults to the current branch name)
   */
  head?: string;
  /**
   * The name of the branch you want your changes pulled into (defaults to `master`)
   */
  base?: string;
  /**
   * The URL of GitHub API - used when the Enterprise (default to `https://api.github.com`)
   */
  apiUrl?: string;
  /**
   * The assignees for the pull request
   */
  assignees?: string[];
  /**
   * The reviewers (slug) for the pull request
   */
  reviewers?: string[];
  /**
   * The team reviewers (slug) for the pull request
   */
  teamReviewers?: string[];
};

/** Shape for [[createXcframework]] options argument
 */

type CreateXcframeworkOptions = {
  /**
   * Frameworks (without dSYMs) to add to the target xcframework
   */
  frameworks?: string[];
  /**
   * Frameworks (with dSYMs) to add to the target xcframework
   */
  frameworksWithDsyms?: { string: string };
  /**
   * Libraries (without headers or dSYMs) to add to the target xcframework
   */
  libraries?: string[];
  /**
   * Libraries (with headers or dSYMs) to add to the target xcframework
   */
  librariesWithHeadersOrDsyms?: { string: string };
  /**
   * The path to write the xcframework to
   */
  output: string;
  /**
   * Specifies that the created xcframework contains information not suitable for public distribution
   */
  allowInternalDistribution?: boolean;
};

/** Shape for [[danger]] options argument
 */

type DangerOptions = {
  /**
   * Use bundle exec when there is a Gemfile presented
   */
  useBundleExec: boolean;
  /**
   * Show more debugging information
   */
  verbose: boolean;
  /**
   * The identifier of this Danger instance
   */
  dangerId?: string;
  /**
   * The location of your Dangerfile
   */
  dangerfile?: string;
  /**
   * GitHub API token for danger
   */
  githubApiToken?: string;
  /**
   * Should always fail the build process, defaults to false
   */
  failOnErrors?: boolean;
  /**
   * Makes Danger post a new comment instead of editing its previous one
   */
  newComment?: boolean;
  /**
   * Makes Danger remove all previous comment and create a new one in the end of the list
   */
  removePreviousComments?: boolean;
  /**
   * A branch/tag/commit to use as the base of the diff. [master|dev|stable]
   */
  base?: string;
  /**
   * A branch/tag/commit to use as the head. [master|dev|stable]
   */
  head?: string;
  /**
   * Run danger on a specific pull request. e.g. "https://github.com/danger/danger/pull/518"
   */
  pr?: string;
  /**
   * Fail Danger execution if no PR is found
   */
  failIfNoPr: boolean;
};

/** Shape for [[debug]] options argument
 */

type DebugOptions = {};

/** Shape for [[defaultPlatform]] options argument
 */

type DefaultPlatformOptions = {};

/** Shape for [[deleteKeychain]] options argument
 */

type DeleteKeychainOptions = {
  /**
   * Keychain name
   */
  name?: string;
  /**
   * Keychain path
   */
  keychainPath?: string;
};

/** Shape for [[deliver]] options argument
 */

type DeliverOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The bundle identifier of your app
   */
  appIdentifier?: string;
  /**
   * The version that should be edited or created
   */
  appVersion?: string;
  /**
   * Path to your ipa file
   */
  ipa?: string;
  /**
   * Path to your pkg file
   */
  pkg?: string;
  /**
   * If set the given build number (already uploaded to iTC) will be used instead of the current built one
   */
  buildNumber?: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * Modify live metadata, this option disables ipa upload and screenshot upload
   */
  editLive?: boolean;
  /**
   * Force usage of live version rather than edit version
   */
  useLiveVersion: boolean;
  /**
   * Path to the folder containing the metadata files
   */
  metadataPath?: string;
  /**
   * Path to the folder containing the screenshots
   */
  screenshotsPath?: string;
  /**
   * Skip uploading an ipa or pkg to App Store Connect
   */
  skipBinaryUpload: boolean;
  /**
   * Don't upload the screenshots
   */
  skipScreenshots: boolean;
  /**
   * Don't upload the metadata (e.g. title, description). This will still upload screenshots
   */
  skipMetadata: boolean;
  /**
   * Don’t create or update the app version that is being prepared for submission
   */
  skipAppVersionUpdate: boolean;
  /**
   * Skip verification of HTML preview file
   */
  force: boolean;
  /**
   * Clear all previously uploaded screenshots before uploading the new ones
   */
  overwriteScreenshots: boolean;
  /**
   * Sync screenshots with local ones. This is currently beta optionso set true to 'FASTLANE_ENABLE_BETA_DELIVER_SYNC_SCREENSHOTS' environment variable as well
   */
  syncScreenshots: boolean;
  /**
   * Submit the new version for Review after uploading everything
   */
  submitForReview: boolean;
  /**
   * Rejects the previously submitted build if it's in a state where it's possible
   */
  rejectIfPossible: boolean;
  /**
   * Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
   */
  automaticRelease?: boolean;
  /**
   * Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
   */
  autoReleaseDate?: any;
  /**
   * Enable the phased release feature of iTC
   */
  phasedRelease?: boolean;
  /**
   * Reset the summary rating when you release a new version of the application
   */
  resetRatings?: boolean;
  /**
   * The price tier of this application
   */
  priceTier?: any;
  /**
   * Path to the app rating's config
   */
  appRatingConfigPath?: string;
  /**
   * Extra information for the submission (e.g. compliance specifications, IDFA settings)
   */
  submissionInformation?: { string: string };
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
   */
  devPortalTeamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  devPortalTeamName?: string;
  /**
   * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
   */
  itcProvider?: string;
  /**
   * Run precheck before submitting to app review
   */
  runPrecheckBeforeSubmit: boolean;
  /**
   * The default precheck rule level unless otherwise configured
   */
  precheckDefaultRuleLevel: any;
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
   */
  individualMetadataItems?: string[];
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - Metadata: The path to the app icon
   */
  appIcon?: string;
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - Metadata: The path to the Apple Watch app icon
   */
  appleWatchAppIcon?: string;
  /**
   * Metadata: The copyright notice
   */
  copyright?: string;
  /**
   * Metadata: The english name of the primary category (e.g. `Business`, `Books`)
   */
  primaryCategory?: string;
  /**
   * Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
   */
  secondaryCategory?: string;
  /**
   * Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
   */
  primaryFirstSubCategory?: string;
  /**
   * Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
   */
  primarySecondSubCategory?: string;
  /**
   * Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
   */
  secondaryFirstSubCategory?: string;
  /**
   * Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
   */
  secondarySecondSubCategory?: string;
  /**
   * **DEPRECATED!** This is no longer used by App Store Connect - Metadata: A hash containing the trade representative contact information
   */
  tradeRepresentativeContactInformation?: { string: string };
  /**
   * Metadata: A hash containing the review information
   */
  appReviewInformation?: { string: string };
  /**
   * Metadata: Path to the app review attachment file
   */
  appReviewAttachmentFile?: string;
  /**
   * Metadata: The localised app description
   */
  description?: { string: string };
  /**
   * Metadata: The localised app name
   */
  name?: { string: string };
  /**
   * Metadata: The localised app subtitle
   */
  subtitle?: { string: string };
  /**
   * Metadata: An array of localised keywords
   */
  keywords?: { string: string };
  /**
   * Metadata: An array of localised promotional texts
   */
  promotionalText?: { string: string };
  /**
   * Metadata: Localised release notes for this version
   */
  releaseNotes?: { string: string };
  /**
   * Metadata: Localised privacy url
   */
  privacyUrl?: { string: string };
  /**
   * Metadata: Localised Apple TV privacy policy text
   */
  appleTvPrivacyPolicy?: { string: string };
  /**
   * Metadata: Localised support url
   */
  supportUrl?: { string: string };
  /**
   * Metadata: Localised marketing url
   */
  marketingUrl?: { string: string };
  /**
   * Metadata: List of languages to activate
   */
  languages?: string[];
  /**
   * Ignore errors when invalid languages are found in metadata and screenshot directories
   */
  ignoreLanguageDirectoryValidation: boolean;
  /**
   * Should precheck check in-app purchases?
   */
  precheckIncludeInAppPurchases?: boolean;
  /**
   * The (spaceship) app ID of the app you want to use/modify
   */
  app?: any;
};

/** Shape for [[deploygate]] options argument
 */

type DeploygateOptions = {
  /**
   * Deploygate API Token
   */
  apiToken: string;
  /**
   * Target username or organization name
   */
  user: string;
  /**
   * Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action
   */
  ipa?: string;
  /**
   * Path to your APK file
   */
  apk?: string;
  /**
   * Release Notes
   */
  message: string;
  /**
   * Target Distribution Key
   */
  distributionKey?: string;
  /**
   * Release note for distribution page
   */
  releaseNote?: string;
  /**
   * Disables Push notification emails
   */
  disableNotify?: boolean;
  /**
   * Target Distribution Name
   */
  distributionName?: string;
};

/** Shape for [[dotgpgEnvironment]] options argument
 */

type DotgpgEnvironmentOptions = {
  /**
   * Path to your gpg file
   */
  dotgpgFile: string;
};

/** Shape for [[download]] options argument
 */

type DownloadOptions = {
  /**
   * The URL that should be downloaded
   */
  url: string;
};

/** Shape for [[downloadAppPrivacyDetailsFromAppStore]] options argument
 */

type DownloadAppPrivacyDetailsFromAppStoreOptions = {
  /**
   * Your Apple ID Username for App Store Connect
   */
  username: string;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * Path to the app usage data JSON file generated by interactive questions
   */
  outputJsonPath: string;
};

/** Shape for [[downloadDsyms]] options argument
 */

type DownloadDsymsOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#use-return-value-and-pass-in-as-an-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username for App Store Connect
   */
  username: string;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The app platform for dSYMs you wish to download (ios, appletvos)
   */
  platform: string;
  /**
   * The app version for dSYMs you wish to download, pass in 'latest' to download only the latest build's dSYMs or 'live' to download only the live version dSYMs
   */
  version?: string;
  /**
   * The app build_number for dSYMs you wish to download
   */
  buildNumber?: string;
  /**
   * The minimum app version for dSYMs you wish to download
   */
  minVersion?: string;
  /**
   * The uploaded date after which you wish to download dSYMs
   */
  afterUploadedDate?: string;
  /**
   * Where to save the download dSYMs, defaults to the current path
   */
  outputDirectory?: string;
  /**
   * Wait for dSYMs to process
   */
  waitForDsymProcessing?: boolean;
  /**
   * Number of seconds to wait for dSYMs to process
   */
  waitTimeout?: any;
};

/** Shape for [[downloadFromPlayStore]] options argument
 */

type DownloadFromPlayStoreOptions = {
  /**
   * The package name of the application to use
   */
  packageName: string;
  /**
   * Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
   */
  versionName?: string;
  /**
   * The track of the application to use. The default available tracks are: production, beta, alpha, internal
   */
  track: string;
  /**
   * Path to the directory containing the metadata files
   */
  metadataPath?: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
   */
  key?: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
   */
  issuer?: string;
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
  /**
   * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
   */
  rootUrl?: string;
  /**
   * Timeout for read, open, and send (in seconds)
   */
  timeout?: any;
};

/** Shape for [[dsymZip]] options argument
 */

type DsymZipOptions = {
  /**
   * Path to your xcarchive file. Optional if you use the `xcodebuild` action
   */
  archivePath?: string;
  /**
   * Path for generated dsym. Optional, default is your apps root directory
   */
  dsymPath?: string;
  /**
   * Whether or not all dSYM files are to be included. Optional, default is false in which only your app dSYM is included
   */
  all?: boolean;
};

/** Shape for [[echo]] options argument
 */

type EchoOptions = {
  /**
   * Message to be printed out
   */
  message?: string;
};

/** Shape for [[ensureBundleExec]] options argument
 */

type EnsureBundleExecOptions = {};

/** Shape for [[ensureEnvVars]] options argument
 */

type EnsureEnvVarsOptions = {
  /**
   * The environment variables names that should be checked
   */
  envVars: string[];
};

/** Shape for [[ensureGitBranch]] options argument
 */

type EnsureGitBranchOptions = {
  /**
   * The branch that should be checked for. String that can be either the full name of the branch or a regex e.g. `^feature/.*$` to match
   */
  branch: string;
};

/** Shape for [[ensureGitStatusClean]] options argument
 */

type EnsureGitStatusCleanOptions = {
  /**
   * The flag whether to show uncommitted changes if the repo is dirty
   */
  showUncommittedChanges?: boolean;
  /**
   * The flag whether to show the git diff if the repo is dirty
   */
  showDiff?: boolean;
  /**
   * The flag whether to ignore file the git status if the repo is dirty
   */
  ignored?: string;
};

/** Shape for [[ensureNoDebugCode]] options argument
 */

type EnsureNoDebugCodeOptions = {
  /**
   * The text that must not be in the code base
   */
  text: string;
  /**
   * The directory containing all the source files
   */
  path: string;
  /**
   * The extension that should be searched for
   */
  extension?: string;
  /**
   * An array of file extensions that should be searched for
   */
  extensions?: string[];
  /**
   * Exclude a certain pattern from the search
   */
  exclude?: string;
  /**
   * An array of dirs that should not be included in the search
   */
  excludeDirs?: string[];
};

/** Shape for [[ensureXcodeVersion]] options argument
 */

type EnsureXcodeVersionOptions = {
  /**
   * Xcode version to verify that is selected
   */
  version?: string;
  /**
   * Should the version be verified strictly (all 3 version numbers), or matching only the given version numbers (i.e. `11.3` == `11.3.x`)
   */
  strict: boolean;
};

/** Shape for [[environmentVariable]] options argument
 */

type EnvironmentVariableOptions = {
  /**
   * Set the environment variables named
   */
  set?: { string: string };
  /**
   * Get the environment variable named
   */
  get?: string;
  /**
   * Remove the environment variable named
   */
  remove?: string;
};

/** Shape for [[erb]] options argument
 */

type ErbOptions = {
  /**
   * ERB Template File
   */
  template: string;
  /**
   * Destination file
   */
  destination?: string;
  /**
   * Placeholders given as a hash
   */
  placeholders: { string: string };
  /**
   * Trim mode applied to the ERB
   */
  trimMode?: string;
};

/** Shape for [[fastlaneVersion]] options argument
 */

type FastlaneVersionOptions = {};

/** Shape for [[flock]] options argument
 */

type FlockOptions = {
  /**
   * Message text
   */
  message: string;
  /**
   * Token for the Flock incoming webhook
   */
  token: string;
  /**
   * Base URL of the Flock incoming message webhook
   */
  baseUrl?: string;
};

/** Shape for [[frameScreenshots]] options argument
 */

type FrameScreenshotsOptions = {
  /**
   * Use white device frames
   */
  white?: boolean;
  /**
   * Use white device frames. Alias for :white
   */
  silver?: boolean;
  /**
   * Use rose gold device frames. Alias for :rose_gold
   */
  roseGold?: boolean;
  /**
   * Use gold device frames. Alias for :gold
   */
  gold?: boolean;
  /**
   * Forces a given device type, useful for Mac screenshots, as their sizes vary
   */
  forceDeviceType?: string;
  /**
   * Use iPhone 5s instead of iPhone SE frames
   */
  useLegacyIphone5s: boolean;
  /**
   * Use iPhone 6s frames instead of iPhone 7 frames
   */
  useLegacyIphone6s: boolean;
  /**
   * Use iPhone 7 frames instead of iPhone 8 frames
   */
  useLegacyIphone7: boolean;
  /**
   * Use iPhone X instead of iPhone XS frames
   */
  useLegacyIphonex: boolean;
  /**
   * Use iPhone XR instead of iPhone 11 frames
   */
  useLegacyIphonexr: boolean;
  /**
   * Use iPhone XS instead of iPhone 11 Pro frames
   */
  useLegacyIphonexs: boolean;
  /**
   * Use iPhone XS Max instead of iPhone 11 Pro Max frames
   */
  useLegacyIphonexsmax: boolean;
  /**
   * [Advanced] A block to customize your screenshots' device orientation
   */
  forceOrientationBlock?: any;
  /**
   * Output debug information in framed screenshots
   */
  debugMode: boolean;
  /**
   * Resume frameit instead of reprocessing all screenshots
   */
  resume: boolean;
  /**
   * Choose a platform, the valid options are IOS, ANDROID and ANY (default is either general platform defined in the fastfile or IOS to ensure backward compatibility)
   */
  usePlatform?: string;
  /**
   * The path to the directory containing the screenshots
   */
  path: string;
};

/** Shape for [[frameit]] options argument
 */

type FrameitOptions = {
  /**
   * Use white device frames
   */
  white?: boolean;
  /**
   * Use white device frames. Alias for :white
   */
  silver?: boolean;
  /**
   * Use rose gold device frames. Alias for :rose_gold
   */
  roseGold?: boolean;
  /**
   * Use gold device frames. Alias for :gold
   */
  gold?: boolean;
  /**
   * Forces a given device type, useful for Mac screenshots, as their sizes vary
   */
  forceDeviceType?: string;
  /**
   * Use iPhone 5s instead of iPhone SE frames
   */
  useLegacyIphone5s: boolean;
  /**
   * Use iPhone 6s frames instead of iPhone 7 frames
   */
  useLegacyIphone6s: boolean;
  /**
   * Use iPhone 7 frames instead of iPhone 8 frames
   */
  useLegacyIphone7: boolean;
  /**
   * Use iPhone X instead of iPhone XS frames
   */
  useLegacyIphonex: boolean;
  /**
   * Use iPhone XR instead of iPhone 11 frames
   */
  useLegacyIphonexr: boolean;
  /**
   * Use iPhone XS instead of iPhone 11 Pro frames
   */
  useLegacyIphonexs: boolean;
  /**
   * Use iPhone XS Max instead of iPhone 11 Pro Max frames
   */
  useLegacyIphonexsmax: boolean;
  /**
   * [Advanced] A block to customize your screenshots' device orientation
   */
  forceOrientationBlock?: any;
  /**
   * Output debug information in framed screenshots
   */
  debugMode: boolean;
  /**
   * Resume frameit instead of reprocessing all screenshots
   */
  resume: boolean;
  /**
   * Choose a platform, the valid options are IOS, ANDROID and ANY (default is either general platform defined in the fastfile or IOS to ensure backward compatibility)
   */
  usePlatform?: string;
  /**
   * The path to the directory containing the screenshots
   */
  path: string;
};

/** Shape for [[gcovr]] options argument
 */

type GcovrOptions = {};

/** Shape for [[getBuildNumber]] options argument
 */

type GetBuildNumberOptions = {
  /**
   * optional, you must specify the path to your main Xcode project if it is not in the project root directory
   */
  xcodeproj?: string;
  /**
   * Used during `fastlane init` to hide the error message
   */
  hideErrorWhenVersioningDisabled: boolean;
};

/** Shape for [[getBuildNumberRepository]] options argument
 */

type GetBuildNumberRepositoryOptions = {
  /**
   * Use hg revision number instead of hash (ignored for non-hg repos)
   */
  useHgRevisionNumber?: boolean;
};

/** Shape for [[getCertificates]] options argument
 */

type GetCertificatesOptions = {
  /**
   * Create a development certificate instead of a distribution one
   */
  development: boolean;
  /**
   * Create specific certificate type (takes precedence over :development)
   */
  type?: string;
  /**
   * Create a certificate even if an existing certificate exists
   */
  force: boolean;
  /**
   * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
   */
  generateAppleCerts: boolean;
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The filename of certificate to store
   */
  filename?: string;
  /**
   * The path to a directory in which all certificates and private keys should be stored
   */
  outputPath: string;
  /**
   * Path to a custom keychain
   */
  keychainPath: string;
  /**
   * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your macOS account password
   */
  keychainPassword?: string;
  /**
   * Skips setting the partition list (which can sometimes take a long time). Setting the partition list is usually needed to prevent Xcode from prompting to allow a cert to be used for signing
   */
  skipSetPartitionList: boolean;
  /**
   * Set the provisioning profile's platform (ios, macos, tvos)
   */
  platform: string;
};

/** Shape for [[getGithubRelease]] options argument
 */

type GetGithubReleaseOptions = {
  /**
   * The path to your repo, e.g. 'KrauseFx/fastlane'
   */
  url: string;
  /**
   * The server url. e.g. 'https://your.github.server/api/v3' (Default: 'https://api.github.com')
   */
  serverUrl?: string;
  /**
   * The version tag of the release to check
   */
  version: string;
  /**
   * GitHub Personal Token (required for private repositories)
   */
  apiToken?: string;
  /**
   * Use a Bearer authorization token. Usually generated by Github Apps, e.g. GitHub Actions GITHUB_TOKEN environment variable
   */
  apiBearer?: string;
};

/** Shape for [[getInfoPlistValue]] options argument
 */

type GetInfoPlistValueOptions = {
  /**
   * Name of parameter
   */
  key: string;
  /**
   * Path to plist file you want to read
   */
  path: string;
};

/** Shape for [[getIpaInfoPlistValue]] options argument
 */

type GetIpaInfoPlistValueOptions = {
  /**
   * Name of parameter
   */
  key: string;
  /**
   * Path to IPA
   */
  ipa: string;
};

/** Shape for [[getManagedPlayStorePublishingRights]] options argument
 */

type GetManagedPlayStorePublishingRightsOptions = {
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
};

/** Shape for [[getProvisioningProfile]] options argument
 */

type GetProvisioningProfileOptions = {
  /**
   * Setting this flag will generate AdHoc profiles instead of App Store Profiles
   */
  adhoc: any;
  /**
   * Setting this flag will generate Developer ID profiles instead of App Store Profiles
   */
  developerId: any;
  /**
   * Renew the development certificate instead of the production one
   */
  development: any;
  /**
   * By default, the certificate will be added to your local machine. Setting this flag will skip this action
   */
  skipInstall: any;
  /**
   * Renew provisioning profiles regardless of its state - to automatically add all devices for ad hoc profiles
   */
  force: any;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The name of the profile that is used on the Apple Developer Portal
   */
  provisioningName?: string;
  /**
   * Use in combination with :provisioning_name - when true only profiles matching this exact name will be downloaded
   */
  ignoreProfilesWithDifferentName?: any;
  /**
   * Directory in which the profile should be stored
   */
  outputPath: string;
  /**
   * The ID of the code signing certificate to use (e.g. 78ADL6LVAA)
   */
  certId?: string;
  /**
   * The certificate name to use for new profiles, or to renew with. (e.g. "Felix Krause")
   */
  certOwnerName?: string;
  /**
   * Filename to use for the generated provisioning profile (must include .mobileprovision)
   */
  filename?: string;
  /**
   * Skips the verification of existing profiles which is useful if you have thousands of profiles
   */
  skipFetchProfiles: any;
  /**
   * Include all matching certificates in the provisioning profile. Works only for the 'development' provisioning profile type
   */
  includeAllCertificates: any;
  /**
   * Skips the verification of the certificates for every existing profiles. This will make sure the provisioning profile can be used on the local machine
   */
  skipCertificateVerification: any;
  /**
   * Set the provisioning profile's platform (i.e. ios, tvos, macos, catalyst)
   */
  platform: any;
  /**
   * Only fetch existing profile, don't generate new ones
   */
  readonly?: any;
  /**
   * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
   */
  templateName?: string;
  /**
   * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
   */
  failOnNameTaken?: any;
};

/** Shape for [[getPushCertificate]] options argument
 */

type GetPushCertificateOptions = {
  /**
   * Set certificate's platform. Used for creation of production & development certificates. Supported platforms: ios, macos
   */
  platform: string;
  /**
   * Renew the development push certificate instead of the production one
   */
  development: any;
  /**
   * Create a Website Push certificate
   */
  websitePush: any;
  /**
   * Generate a p12 file additionally to a PEM file
   */
  generateP12: any;
  /**
   * If the current certificate is active for less than this number of days, generate a new one
   */
  activeDaysLimit: any;
  /**
   * Create a new push certificate, even if the current one is active for 30 (or PEM_ACTIVE_DAYS_LIMIT) more days
   */
  force: any;
  /**
   * Set to save the private RSA key
   */
  savePrivateKey: any;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Your Apple ID Username
   */
  username: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The password that is used for your p12 file
   */
  p12Password?: string;
  /**
   * The file name of the generated .pem file
   */
  pemName?: string;
  /**
   * The path to a directory in which all certificates and private keys should be stored
   */
  outputPath: string;
  /**
   * Block that is called if there is a new profile
   */
  newProfile?: any;
};

/** Shape for [[getVersionNumber]] options argument
 */

type GetVersionNumberOptions = {
  /**
   * Path to the Xcode project to read version number from, or its containing directory, optional. If ommitted, or if a directory is passed instead, it will use the first Xcode project found within the given directory, or the project root directory if none is passed
   */
  xcodeproj?: string;
  /**
   * Target name, optional. Will be needed if you have more than one non-test target to avoid being prompted to select one
   */
  target?: string;
  /**
   * Configuration name, optional. Will be needed if you have altered the configurations from the default or your version number depends on the configuration selected
   */
  configuration?: string;
};

/** Shape for [[gitAdd]] options argument
 */

type GitAddOptions = {
  /**
   * The file(s) and path(s) you want to add
   */
  path?: string[];
  /**
   * Shell escapes paths (set to false if using wildcards or manually escaping spaces in :path)
   */
  shellEscape?: boolean;
  /**
   * **DEPRECATED!** Use `--path` instead - The pathspec you want to add files from
   */
  pathspec?: string;
};

/** Shape for [[gitBranch]] options argument
 */

type GitBranchOptions = {};

/** Shape for [[gitCommit]] options argument
 */

type GitCommitOptions = {
  /**
   * The file(s) or directory(ies) you want to commit. You can pass an array of multiple file-paths or fileglobs "*.txt" to commit all matching files. The files already staged but not specified and untracked files won't be committed
   */
  path: string[];
  /**
   * The commit message that should be used
   */
  message: string;
  /**
   * Set to true to pass `--no-verify` to git
   */
  skipGitHooks?: boolean;
  /**
   * Set to true to allow commit without any git changes in the files you want to commit
   */
  allowNothingToCommit?: boolean;
};

/** Shape for [[gitPull]] options argument
 */

type GitPullOptions = {
  /**
   * Simply pull the tags, and not bring new commits to the current branch from the remote
   */
  onlyTags?: boolean;
  /**
   * Rebase on top of the remote branch instead of merge
   */
  rebase?: boolean;
};

/** Shape for [[gitRemoteBranch]] options argument
 */

type GitRemoteBranchOptions = {
  /**
   * The remote repository to check
   */
  remoteName?: string;
};

/** Shape for [[gitSubmoduleUpdate]] options argument
 */

type GitSubmoduleUpdateOptions = {
  /**
   * Should the submodules be updated recursively?
   */
  recursive: boolean;
  /**
   * Should the submodules be initiated before update?
   */
  init: boolean;
};

/** Shape for [[gitTagExists]] options argument
 */

type GitTagExistsOptions = {
  /**
   * The tag name that should be checked
   */
  tag: string;
  /**
   * Whether to check remote. Defaults to `false`
   */
  remote?: boolean;
  /**
   * The remote to check. Defaults to `origin`
   */
  remoteName?: string;
};

/** Shape for [[githubApi]] options argument
 */

type GithubApiOptions = {
  /**
   * The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
   */
  serverUrl?: string;
  /**
   * Personal API Token for GitHub - generate one at https://github.com/settings/tokens
   */
  apiToken?: string;
  /**
   * Use a Bearer authorization token. Usually generated by Github Apps, e.g. GitHub Actions GITHUB_TOKEN environment variable
   */
  apiBearer?: string;
  /**
   * The HTTP method. e.g. GET / POST
   */
  httpMethod?: string;
  /**
   * The request body in JSON or hash format
   */
  body?: string;
  /**
   * The request body taken verbatim instead of as JSON, useful for file uploads
   */
  rawBody?: string;
  /**
   * The endpoint path. e.g. '/repos/:owner/:repo/readme'
   */
  path?: string;
  /**
   * The complete full url - used instead of path. e.g. 'https://uploads.github.com/repos/fastlane...'
   */
  url?: string;
  /**
   * Optional error handling hash based on status code, or pass '*' to handle all errors
   */
  errorHandlers?: { string: string };
  /**
   * Optional headers to apply
   */
  headers?: { string: string };
  /**
   * Optionally disable secure requests (ssl_verify_peer)
   */
  secure?: boolean;
};

/** Shape for [[googlePlayTrackReleaseNames]] options argument
 */

type GooglePlayTrackReleaseNamesOptions = {
  /**
   * The package name of the application to use
   */
  packageName: string;
  /**
   * The track of the application to use. The default available tracks are: production, beta, alpha, internal
   */
  track: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
   */
  key?: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
   */
  issuer?: string;
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
  /**
   * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
   */
  rootUrl?: string;
  /**
   * Timeout for read, open, and send (in seconds)
   */
  timeout?: any;
};

/** Shape for [[googlePlayTrackVersionCodes]] options argument
 */

type GooglePlayTrackVersionCodesOptions = {
  /**
   * The package name of the application to use
   */
  packageName: string;
  /**
   * The track of the application to use. The default available tracks are: production, beta, alpha, internal
   */
  track: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
   */
  key?: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
   */
  issuer?: string;
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
  /**
   * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
   */
  rootUrl?: string;
  /**
   * Timeout for read, open, and send (in seconds)
   */
  timeout?: any;
};

/** Shape for [[gradle]] options argument
 */

type GradleOptions = {
  /**
   * The gradle task you want to execute, e.g. `assemble`, `bundle` or `test`. For tasks such as `assembleMyFlavorRelease` you should use gradle(task: 'assemble', flavor: 'Myflavor', build_type: 'Release')
   */
  task?: string;
  /**
   * The flavor that you want the task for, e.g. `MyFlavor`. If you are running the `assemble` task in a multi-flavor project, and you rely on Actions.lane_context[SharedValues::GRADLE_APK_OUTPUT_PATH] then you must specify a flavor here or else this value will be undefined
   */
  flavor?: string;
  /**
   * The build type that you want the task for, e.g. `Release`. Useful for some tasks such as `assemble`
   */
  buildType?: string;
  /**
   * The multiple gradle tasks that you want to execute, e.g. `[assembleDebug, bundleDebug]`
   */
  tasks?: string[];
  /**
   * All parameter flags you want to pass to the gradle command, e.g. `--exitcode --xml file.xml`
   */
  flags?: string;
  /**
   * The root directory of the gradle project
   */
  projectDir: string;
  /**
   * The path to your `gradlew`. If you specify a relative path, it is assumed to be relative to the `project_dir`
   */
  gradlePath?: string;
  /**
   * Gradle properties to be exposed to the gradle script
   */
  properties?: { string: string };
  /**
   * Gradle system properties to be exposed to the gradle script
   */
  systemProperties?: { string: string };
  /**
   * Android serial, which device should be used for this command
   */
  serial: string;
  /**
   * Control whether the generated Gradle command is printed as output before running it (true/false)
   */
  printCommand: boolean;
  /**
   * Control whether the output produced by given Gradle command is printed while running (true/false)
   */
  printCommandOutput: boolean;
};

/** Shape for [[gym]] options argument
 */

type GymOptions = {
  /**
   * Path to the workspace file
   */
  workspace?: string;
  /**
   * Path to the project file
   */
  project?: string;
  /**
   * The project's scheme. Make sure it's marked as `Shared`
   */
  scheme?: string;
  /**
   * Should the project be cleaned before building it?
   */
  clean: boolean;
  /**
   * The directory in which the ipa file should be stored in
   */
  outputDirectory: string;
  /**
   * The name of the resulting ipa file
   */
  outputName?: string;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * Hide all information that's not necessary while building
   */
  silent: boolean;
  /**
   * The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
   */
  codesigningIdentity?: string;
  /**
   * Should we skip packaging the ipa?
   */
  skipPackageIpa: boolean;
  /**
   * Should we skip packaging the pkg?
   */
  skipPackagePkg: boolean;
  /**
   * Should the ipa file include symbols?
   */
  includeSymbols?: boolean;
  /**
   * Should the ipa file include bitcode?
   */
  includeBitcode?: boolean;
  /**
   * Method used to export the archive. Valid values are: app-store, validation, ad-hoc, package, enterprise, development, developer-id and mac-application
   */
  exportMethod?: string;
  /**
   * Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
   */
  exportOptions?: { string: string };
  /**
   * Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  exportXcargs?: string;
  /**
   * Export ipa from previously built xcarchive. Uses archive_path as source
   */
  skipBuildArchive?: boolean;
  /**
   * After building, don't archive, effectively not including -archivePath param
   */
  skipArchive?: boolean;
  /**
   * Build without codesigning
   */
  skipCodesigning?: boolean;
  /**
   * Platform to build when using a Catalyst enabled app. Valid values are: ios, macos
   */
  catalystPlatform?: string;
  /**
   * Full name of 3rd Party Mac Developer Installer or Developer ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
   */
  installerCertName?: string;
  /**
   * The directory in which the archive should be stored in
   */
  buildPath?: string;
  /**
   * The path to the created archive
   */
  archivePath?: string;
  /**
   * The directory where built products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: boolean;
  /**
   * Path to the result bundle directory to create. Ignored if `result_bundle` if false
   */
  resultBundlePath?: string;
  /**
   * The directory where to store the build log
   */
  buildlogPath: string;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
   */
  toolchain?: string;
  /**
   * Use a custom destination for building the app
   */
  destination?: string;
  /**
   * Optional: Sometimes you need to specify a team id when exporting the ipa file
   */
  exportTeamId?: string;
  /**
   * Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * **DEPRECATED!** Use `xcodebuild_formatter: ''` instead - Disable xcpretty formatting of build output
   */
  disableXcpretty?: boolean;
  /**
   * Use the test (RSpec style) format for build output
   */
  xcprettyTestFormat?: boolean;
  /**
   * A custom xcpretty formatter to use
   */
  xcprettyFormatter?: string;
  /**
   * Have xcpretty create a JUnit-style XML report at the provided path
   */
  xcprettyReportJunit?: string;
  /**
   * Have xcpretty create a simple HTML report at the provided path
   */
  xcprettyReportHtml?: string;
  /**
   * Have xcpretty create a JSON compilation database at the provided path
   */
  xcprettyReportJson?: string;
  /**
   * Have xcpretty use unicode encoding when reporting builds
   */
  xcprettyUtf?: boolean;
  /**
   * Analyze the project build time and store the output in 'culprits.txt' file
   */
  analyzeBuildTime?: boolean;
  /**
   * Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
   */
  skipProfileDetection?: boolean;
  /**
   * Allows for override of the default `xcodebuild` command
   */
  xcodebuildCommand?: string;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm?: boolean;
};

/** Shape for [[hgAddTag]] options argument
 */

type HgAddTagOptions = {
  /**
   * Tag to create
   */
  tag: string;
};

/** Shape for [[hgCommitVersionBump]] options argument
 */

type HgCommitVersionBumpOptions = {
  /**
   * The commit message when committing the version bump
   */
  message: string;
  /**
   * The path to your project file (Not the workspace). If you have only one, this is optional
   */
  xcodeproj?: string;
  /**
   * Forces the commit, even if other files than the ones containing the version number have been modified
   */
  force?: boolean;
  /**
   * A list of dirty files passed in for testing
   */
  testDirtyFiles?: string;
  /**
   * A list of expected changed files passed in for testing
   */
  testExpectedFiles?: string;
};

/** Shape for [[hgEnsureCleanStatus]] options argument
 */

type HgEnsureCleanStatusOptions = {};

/** Shape for [[hgPush]] options argument
 */

type HgPushOptions = {
  /**
   * Force push to remote
   */
  force: boolean;
  /**
   * The destination to push to
   */
  destination?: string;
};

/** Shape for [[hipchat]] options argument
 */

type HipchatOptions = {
  /**
   * The message to post on HipChat
   */
  message: string;
  /**
   * The room or @username
   */
  channel: string;
  /**
   * Hipchat API Token
   */
  apiToken: string;
  /**
   * Specify a custom color, this overrides the success boolean. Can be one of 'yellow', 'red', 'green', 'purple', 'gray', or 'random'
   */
  customColor?: string;
  /**
   * Was this build successful? (true/false)
   */
  success?: boolean;
  /**
   * Version of the Hipchat API. Must be 1 or 2
   */
  version: string;
  /**
   * Should the people in the room be notified? (true/false)
   */
  notifyRoom?: boolean;
  /**
   * The host of the HipChat-Server API
   */
  apiHost?: string;
  /**
   * Format of the message to post. Must be either 'html' or 'text'
   */
  messageFormat?: string;
  /**
   * Should html formatted messages include a preformatted header? (true/false)
   */
  includeHtmlHeader?: boolean;
  /**
   * Name the message will appear to be sent from
   */
  from?: string;
};

/** Shape for [[hockey]] options argument
 */

type HockeyOptions = {
  /**
   * Path to your APK file
   */
  apk?: string;
  /**
   * API Token for Hockey Access
   */
  apiToken: string;
  /**
   * Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action. For Mac zip the .app. For Android provide path to .apk file. In addition you could use this to upload .msi, .zip, .pkg, etc if you use the 'create_update' mechanism
   */
  ipa?: string;
  /**
   * Path to your symbols file. For iOS and Mac provide path to app.dSYM.zip. For Android provide path to mappings.txt file
   */
  dsym?: string;
  /**
   * Set true if you want to create then update your app as opposed to just upload it. You will need the 'public_identifier', 'bundle_version' and 'bundle_short_version'
   */
  createUpdate: boolean;
  /**
   * Beta Notes
   */
  notes: string;
  /**
   * Notify testers? "1" for yes
   */
  notify: string;
  /**
   * Download status: "1" = No user can download; "2" = Available for download (only possible with full-access token)
   */
  status: string;
  /**
   * Download status for initial version creation when create_update is true: "1" = No user can download; "2" = Available for download (only possible with full-access token)
   */
  createStatus: string;
  /**
   * Notes type for your :notes, "0" = Textile, "1" = Markdown (default)
   */
  notesType: string;
  /**
   * Release type of the app: "0" = Beta (default), "1" = Store, "2" = Alpha, "3" = Enterprise
   */
  releaseType: string;
  /**
   * Set to "1" to make this update mandatory
   */
  mandatory: string;
  /**
   * Comma separated list of team ID numbers to which this build will be restricted
   */
  teams?: string;
  /**
   * Comma separated list of user ID numbers to which this build will be restricted
   */
  users?: string;
  /**
   * Comma separated list of tags which will receive access to the build
   */
  tags?: string;
  /**
   * The bundle_short_version of your application, required when using `create_update`
   */
  bundleShortVersion?: string;
  /**
   * The bundle_version of your application, required when using `create_update`
   */
  bundleVersion?: string;
  /**
   * App id of the app you are targeting, usually you won't need this value. Required, if `upload_dsym_only` set to `true`
   */
  publicIdentifier?: string;
  /**
   * The Git commit SHA for this build
   */
  commitSha?: string;
  /**
   * The URL of your source repository
   */
  repositoryUrl?: string;
  /**
   * The URL of the build job on your build server
   */
  buildServerUrl?: string;
  /**
   * Flag to upload only the dSYM file to hockey app
   */
  uploadDsymOnly: boolean;
  /**
   * ID for the owner of the app
   */
  ownerId?: string;
  /**
   * Strategy: 'add' = to add the build as a new build even if it has the same build number (default); 'replace' = to replace a build with the same build number
   */
  strategy: string;
  /**
   * Request timeout in seconds
   */
  timeout?: any;
  /**
   * Flag to bypass Hockey CDN when it uploads successfully but reports error
   */
  bypassCdn: boolean;
  /**
   * DSA signature for sparkle updates for macOS
   */
  dsaSignature?: string;
};

/** Shape for [[ifttt]] options argument
 */

type IftttOptions = {
  /**
   * API key
   */
  apiKey: string;
  /**
   * The name of the event that will be triggered
   */
  eventName: string;
  /**
   * Extra data sent with the event
   */
  value1?: string;
  /**
   * Extra data sent with the event
   */
  value2?: string;
  /**
   * Extra data sent with the event
   */
  value3?: string;
};

/** Shape for [[import]] options argument
 */

type ImportOptions = {};

/** Shape for [[importCertificate]] options argument
 */

type ImportCertificateOptions = {
  /**
   * Path to certificate
   */
  certificatePath: string;
  /**
   * Certificate password
   */
  certificatePassword?: string;
  /**
   * Keychain the items should be imported to
   */
  keychainName: string;
  /**
   * Path to the Keychain file to which the items should be imported
   */
  keychainPath?: string;
  /**
   * The password for the keychain. Note that for the login keychain this is your user's password
   */
  keychainPassword?: string;
  /**
   * If output should be logged to the console
   */
  logOutput?: boolean;
};

/** Shape for [[importFromGit]] options argument
 */

type ImportFromGitOptions = {
  /**
   * The URL of the repository to import the Fastfile from
   */
  url?: string;
  /**
   * The branch or tag to check-out on the repository
   */
  branch?: string;
  /**
   * The array of additional Fastfiles in the repository
   */
  dependencies?: string;
  /**
   * The path of the Fastfile in the repository
   */
  path?: string;
  /**
   * The version to checkout on the repository. Optimistic match operator or multiple conditions can be used to select the latest version within constraints
   */
  version?: string[];
  /**
   * The path to a directory where the repository should be cloned into. Defaults to `nil`, which causes the repository to be cloned on every call, to a temporary directory
   */
  cachePath?: string;
};

/** Shape for [[incrementBuildNumber]] options argument
 */

type IncrementBuildNumberOptions = {
  /**
   * Change to a specific version. When you provide this parameter, Apple Generic Versioning does not have to be enabled
   */
  buildNumber?: string;
  /**
   * Don't update Info.plist files when updating the build version
   */
  skipInfoPlist: boolean;
  /**
   * optional, you must specify the path to your main Xcode project if it is not in the project root directory
   */
  xcodeproj?: string;
};

/** Shape for [[incrementVersionNumber]] options argument
 */

type IncrementVersionNumberOptions = {
  /**
   * The type of this version bump. Available: patch, minor, major
   */
  bumpType: string;
  /**
   * Change to a specific version. This will replace the bump type value
   */
  versionNumber?: string;
  /**
   * optional, you must specify the path to your main Xcode project if it is not in the project root directory
   */
  xcodeproj?: string;
};

/** Shape for [[installOnDevice]] options argument
 */

type InstallOnDeviceOptions = {
  /**
   * Extra Commandline arguments passed to ios-deploy
   */
  extra?: string;
  /**
   * id of the device / if not set defaults to first found device
   */
  deviceId?: string;
  /**
   * Do not search for devices via WiFi
   */
  skipWifi?: boolean;
  /**
   * The IPA file to put on the device
   */
  ipa?: string;
};

/** Shape for [[installProvisioningProfile]] options argument
 */

type InstallProvisioningProfileOptions = {
  /**
   * Path to provisioning profile
   */
  path: string;
};

/** Shape for [[installXcodePlugin]] options argument
 */

type InstallXcodePluginOptions = {
  /**
   * URL for Xcode plugin ZIP file
   */
  url: string;
  /**
   * GitHub repository URL for Xcode plugin
   */
  github?: string;
};

/** Shape for [[installr]] options argument
 */

type InstallrOptions = {
  /**
   * API Token for Installr Access
   */
  apiToken: string;
  /**
   * Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action
   */
  ipa: string;
  /**
   * Release notes
   */
  notes?: string;
  /**
   * Groups to notify (e.g. 'dev,qa')
   */
  notify?: string;
  /**
   * Groups to add (e.g. 'exec,ops')
   */
  add?: string;
};

/** Shape for [[ipa]] options argument
 */

type IpaOptions = {
  /**
   * WORKSPACE Workspace (.xcworkspace) file to use to build app (automatically detected in current directory)
   */
  workspace?: string;
  /**
   * Project (.xcodeproj) file to use to build app (automatically detected in current directory, overridden by --workspace option, if passed)
   */
  project?: string;
  /**
   * Configuration used to build
   */
  configuration?: string;
  /**
   * Scheme used to build app
   */
  scheme?: string;
  /**
   * Clean project before building
   */
  clean?: boolean;
  /**
   * Archive project after building
   */
  archive?: boolean;
  /**
   * Build destination. Defaults to current directory
   */
  destination?: string;
  /**
   * Sign .ipa file with .mobileprovision
   */
  embed?: string;
  /**
   * Identity to be used along with --embed
   */
  identity?: string;
  /**
   * Use SDK as the name or path of the base SDK when building the project
   */
  sdk?: string;
  /**
   * Specify the name of the .ipa file to generate (including file extension)
   */
  ipa?: string;
  /**
   * Use an extra XCCONFIG file to build the app
   */
  xcconfig?: string;
  /**
   * Pass additional arguments to xcodebuild when building the app. Be sure to quote multiple args
   */
  xcargs?: string;
};

/** Shape for [[isCi]] options argument
 */

type IsCiOptions = {};

/** Shape for [[jazzy]] options argument
 */

type JazzyOptions = {
  /**
   * Path to jazzy config file
   */
  config?: string;
  /**
   * Version string to use as part of the the default docs title and inside the docset
   */
  moduleVersion?: string;
};

/** Shape for [[jira]] options argument
 */

type JiraOptions = {
  /**
   * URL for Jira instance
   */
  url: string;
  /**
   * Appends to the url (ex: "/jira")
   */
  contextPath?: string;
  /**
   * Username for Jira instance
   */
  username: string;
  /**
   * Password or API token for Jira
   */
  password: string;
  /**
   * Ticket ID for Jira, i.e. IOS-123
   */
  ticketId: string;
  /**
   * Text to add to the ticket as a comment
   */
  commentText: string;
  /**
   * Should an error adding the Jira comment cause a failure?
   */
  failOnError?: boolean;
};

/** Shape for [[laneContext]] options argument
 */

type LaneContextOptions = {};

/** Shape for [[lastGitCommit]] options argument
 */

type LastGitCommitOptions = {};

/** Shape for [[lastGitTag]] options argument
 */

type LastGitTagOptions = {
  /**
   * Pattern to filter tags when looking for last one. Limit tags to ones matching given shell glob. If pattern lacks ?, *, or [, * at the end is implied
   */
  pattern?: string;
};

/** Shape for [[latestTestflightBuildNumber]] options argument
 */

type LatestTestflightBuildNumberOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Query the live version (ready-for-sale)
   */
  live?: boolean;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The version number whose latest build number we want
   */
  version?: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * sets the build number to given value if no build is in current train
   */
  initialBuildNumber: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
};

/** Shape for [[lcov]] options argument
 */

type LcovOptions = {
  /**
   * Name of the project
   */
  projectName: string;
  /**
   * Scheme of the project
   */
  scheme: string;
  /**
   * The build arch where will search .gcda files
   */
  arch: string;
  /**
   * The output directory that coverage data will be stored. If not passed will use coverage_reports as default value
   */
  outputDir?: string;
};

/** Shape for [[mailgun]] options argument
 */

type MailgunOptions = {
  /**
   * Mailgun sandbox domain postmaster for your mail. Please use postmaster instead
   */
  mailgunSandboxDomain?: string;
  /**
   * Mailgun sandbox domain postmaster for your mail. Please use postmaster instead
   */
  mailgunSandboxPostmaster?: string;
  /**
   * Mailgun apikey for your mail. Please use postmaster instead
   */
  mailgunApikey?: string;
  /**
   * Mailgun sandbox domain postmaster for your mail
   */
  postmaster: string;
  /**
   * Mailgun apikey for your mail
   */
  apikey: string;
  /**
   * Destination of your mail
   */
  to: string;
  /**
   * Mailgun sender name
   */
  from?: string;
  /**
   * Message of your mail
   */
  message: string;
  /**
   * Subject of your mail
   */
  subject?: string;
  /**
   * Was this build successful? (true/false)
   */
  success?: boolean;
  /**
   * App Release link
   */
  appLink: string;
  /**
   * CI Build Link
   */
  ciBuildLink?: string;
  /**
   * Mail HTML template
   */
  templatePath?: string;
  /**
   * Mail Reply to
   */
  replyTo?: string;
  /**
   * Mail Attachment filenames, either an array or just one string
   */
  attachment?: string[];
  /**
   * Placeholders for template given as a hash
   */
  customPlaceholders: { string: string };
};

/** Shape for [[makeChangelogFromJenkins]] options argument
 */

type MakeChangelogFromJenkinsOptions = {
  /**
   * Fallback changelog if there is not one on Jenkins, or it couldn't be read
   */
  fallbackChangelog?: string;
  /**
   * Include the commit body along with the summary
   */
  includeCommitBody?: boolean;
};

/** Shape for [[match]] options argument
 */

type MatchOptions = {
  /**
   * Define the profile type, can be appstore, adhoc, development, enterprise, developer_id, mac_installer_distribution
   */
  type: string;
  /**
   * Create additional cert types needed for macOS installers (valid values: mac_installer_distribution, developer_id_installer)
   */
  additionalCertTypes?: string[];
  /**
   * Only fetch existing certificates and profiles, don't generate new ones
   */
  readonly: boolean;
  /**
   * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
   */
  generateAppleCerts: boolean;
  /**
   * Skip syncing provisioning profiles
   */
  skipProvisioningProfiles: boolean;
  /**
   * The bundle identifier(s) of your app (comma-separated string or array of strings)
   */
  appIdentifier: string[];
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * Define where you want to store your certificates
   */
  storageMode: string;
  /**
   * URL to the git repo containing all the certificates
   */
  gitUrl: string;
  /**
   * Specific git branch to use
   */
  gitBranch: string;
  /**
   * git user full name to commit
   */
  gitFullName?: string;
  /**
   * git user email to commit
   */
  gitUserEmail?: string;
  /**
   * Make a shallow clone of the repository (truncate the history to 1 revision)
   */
  shallowClone: boolean;
  /**
   * Clone just the branch specified, instead of the whole repo. This requires that the branch already exists. Otherwise the command will fail
   */
  cloneBranchDirectly: boolean;
  /**
   * Use a basic authorization header to access the git repo (e.g.: access via HTTPS, GitHub Actions, etc), usually a string in Base64
   */
  gitBasicAuthorization?: string;
  /**
   * Use a bearer authorization header to access the git repo (e.g.: access to an Azure DevOps repository), usually a string in Base64
   */
  gitBearerAuthorization?: string;
  /**
   * Use a private key to access the git repo (e.g.: access to GitHub repository via Deploy keys), usually a id_rsa named file or the contents hereof
   */
  gitPrivateKey?: string;
  /**
   * Name of the Google Cloud Storage bucket to use
   */
  googleCloudBucketName?: string;
  /**
   * Path to the gc_keys.json file
   */
  googleCloudKeysFile?: string;
  /**
   * ID of the Google Cloud project to use for authentication
   */
  googleCloudProjectId?: string;
  /**
   * Name of the S3 region
   */
  s3Region?: string;
  /**
   * S3 access key
   */
  s3AccessKey?: string;
  /**
   * S3 secret access key
   */
  s3SecretAccessKey?: string;
  /**
   * Name of the S3 bucket
   */
  s3Bucket?: string;
  /**
   * Prefix to be used on all objects uploaded to S3
   */
  s3ObjectPrefix?: string;
  /**
   * Keychain the items should be imported to
   */
  keychainName: string;
  /**
   * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your macOS account password
   */
  keychainPassword?: string;
  /**
   * Renew the provisioning profiles every time you run match
   */
  force: boolean;
  /**
   * Renew the provisioning profiles if the device count on the developer portal has changed. Ignored for profile types 'appstore' and 'developer_id'
   */
  forceForNewDevices: boolean;
  /**
   * Include all matching certificates in the provisioning profile. Works only for the 'development' provisioning profile type
   */
  includeAllCertificates: boolean;
  /**
   * Renew the provisioning profiles if the device count on the developer portal has changed. Works only for the 'development' provisioning profile type. Requires 'include_all_certificates' option to be 'true'
   */
  forceForNewCertificates: boolean;
  /**
   * Disables confirmation prompts during nuke, answering them with yes
   */
  skipConfirmation: boolean;
  /**
   * Remove certs from repository during nuke without revoking them on the developer portal
   */
  safeRemoveCerts: boolean;
  /**
   * Skip generation of a README.md for the created git repository
   */
  skipDocs: boolean;
  /**
   * Set the provisioning profile's platform to work with (i.e. ios, tvos, macos, catalyst)
   */
  platform: string;
  /**
   * Enable this if you have the Mac Catalyst capability enabled and your project was created with Xcode 11.3 or earlier. Prepends 'maccatalyst.' to the app identifier for the provisioning profile mapping
   */
  deriveCatalystAppIdentifier: boolean;
  /**
   * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
   */
  templateName?: string;
  /**
   * A custom name for the provisioning profile. This will replace the default provisioning profile name if specified
   */
  profileName?: string;
  /**
   * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
   */
  failOnNameTaken?: boolean;
  /**
   * Set to true if there is no access to Apple developer portal but there are certificates, keys and profiles provided. Only works with match import action
   */
  skipCertificateMatching?: boolean;
  /**
   * Path in which to export certificates, key and profile
   */
  outputPath?: string;
  /**
   * Skips setting the partition list (which can sometimes take a long time). Setting the partition list is usually needed to prevent Xcode from prompting to allow a cert to be used for signing
   */
  skipSetPartitionList: boolean;
  /**
   * Print out extra information and all commands
   */
  verbose: boolean;
};

/** Shape for [[matchNuke]] options argument
 */

type MatchNukeOptions = {
  /**
   * Define the profile type, can be appstore, adhoc, development, enterprise, developer_id, mac_installer_distribution
   */
  type: string;
  /**
   * Create additional cert types needed for macOS installers (valid values: mac_installer_distribution, developer_id_installer)
   */
  additionalCertTypes?: string[];
  /**
   * Only fetch existing certificates and profiles, don't generate new ones
   */
  readonly: boolean;
  /**
   * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
   */
  generateAppleCerts: boolean;
  /**
   * Skip syncing provisioning profiles
   */
  skipProvisioningProfiles: boolean;
  /**
   * The bundle identifier(s) of your app (comma-separated string or array of strings)
   */
  appIdentifier: string[];
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * Define where you want to store your certificates
   */
  storageMode: string;
  /**
   * URL to the git repo containing all the certificates
   */
  gitUrl: string;
  /**
   * Specific git branch to use
   */
  gitBranch: string;
  /**
   * git user full name to commit
   */
  gitFullName?: string;
  /**
   * git user email to commit
   */
  gitUserEmail?: string;
  /**
   * Make a shallow clone of the repository (truncate the history to 1 revision)
   */
  shallowClone: boolean;
  /**
   * Clone just the branch specified, instead of the whole repo. This requires that the branch already exists. Otherwise the command will fail
   */
  cloneBranchDirectly: boolean;
  /**
   * Use a basic authorization header to access the git repo (e.g.: access via HTTPS, GitHub Actions, etc), usually a string in Base64
   */
  gitBasicAuthorization?: string;
  /**
   * Use a bearer authorization header to access the git repo (e.g.: access to an Azure DevOps repository), usually a string in Base64
   */
  gitBearerAuthorization?: string;
  /**
   * Use a private key to access the git repo (e.g.: access to GitHub repository via Deploy keys), usually a id_rsa named file or the contents hereof
   */
  gitPrivateKey?: string;
  /**
   * Name of the Google Cloud Storage bucket to use
   */
  googleCloudBucketName?: string;
  /**
   * Path to the gc_keys.json file
   */
  googleCloudKeysFile?: string;
  /**
   * ID of the Google Cloud project to use for authentication
   */
  googleCloudProjectId?: string;
  /**
   * Name of the S3 region
   */
  s3Region?: string;
  /**
   * S3 access key
   */
  s3AccessKey?: string;
  /**
   * S3 secret access key
   */
  s3SecretAccessKey?: string;
  /**
   * Name of the S3 bucket
   */
  s3Bucket?: string;
  /**
   * Prefix to be used on all objects uploaded to S3
   */
  s3ObjectPrefix?: string;
  /**
   * Keychain the items should be imported to
   */
  keychainName: string;
  /**
   * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your macOS account password
   */
  keychainPassword?: string;
  /**
   * Renew the provisioning profiles every time you run match
   */
  force: boolean;
  /**
   * Renew the provisioning profiles if the device count on the developer portal has changed. Ignored for profile types 'appstore' and 'developer_id'
   */
  forceForNewDevices: boolean;
  /**
   * Include all matching certificates in the provisioning profile. Works only for the 'development' provisioning profile type
   */
  includeAllCertificates: boolean;
  /**
   * Renew the provisioning profiles if the device count on the developer portal has changed. Works only for the 'development' provisioning profile type. Requires 'include_all_certificates' option to be 'true'
   */
  forceForNewCertificates: boolean;
  /**
   * Disables confirmation prompts during nuke, answering them with yes
   */
  skipConfirmation: boolean;
  /**
   * Remove certs from repository during nuke without revoking them on the developer portal
   */
  safeRemoveCerts: boolean;
  /**
   * Skip generation of a README.md for the created git repository
   */
  skipDocs: boolean;
  /**
   * Set the provisioning profile's platform to work with (i.e. ios, tvos, macos, catalyst)
   */
  platform: string;
  /**
   * Enable this if you have the Mac Catalyst capability enabled and your project was created with Xcode 11.3 or earlier. Prepends 'maccatalyst.' to the app identifier for the provisioning profile mapping
   */
  deriveCatalystAppIdentifier: boolean;
  /**
   * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
   */
  templateName?: string;
  /**
   * A custom name for the provisioning profile. This will replace the default provisioning profile name if specified
   */
  profileName?: string;
  /**
   * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
   */
  failOnNameTaken?: boolean;
  /**
   * Set to true if there is no access to Apple developer portal but there are certificates, keys and profiles provided. Only works with match import action
   */
  skipCertificateMatching?: boolean;
  /**
   * Path in which to export certificates, key and profile
   */
  outputPath?: string;
  /**
   * Skips setting the partition list (which can sometimes take a long time). Setting the partition list is usually needed to prevent Xcode from prompting to allow a cert to be used for signing
   */
  skipSetPartitionList: boolean;
  /**
   * Print out extra information and all commands
   */
  verbose: boolean;
};

/** Shape for [[minFastlaneVersion]] options argument
 */

type MinFastlaneVersionOptions = {};

/** Shape for [[modifyServices]] options argument
 */

type ModifyServicesOptions = {
  /**
   * Your Apple ID Username
   */
  username: string;
  /**
   * App Identifier (Bundle ID, e.g. com.krausefx.app)
   */
  appIdentifier: string;
  /**
   * Array with Spaceship App Services (e.g. access_wifi: (on|off)(:on|:off)(true|false), app_attest: (on|off)(:on|:off)(true|false), app_group: (on|off)(:on|:off)(true|false), apple_pay: (on|off)(:on|:off)(true|false), associated_domains: (on|off)(:on|:off)(true|false), auto_fill_credential: (on|off)(:on|:off)(true|false), class_kit: (on|off)(:on|:off)(true|false), icloud: (legacy|cloudkit)(:on|:off)(true|false), custom_network_protocol: (on|off)(:on|:off)(true|false), data_protection: (complete|unlessopen|untilfirstauth)(:on|:off)(true|false), extended_virtual_address_space: (on|off)(:on|:off)(true|false), family_controls: (on|off)(:on|:off)(true|false), file_provider_testing_mode: (on|off)(:on|:off)(true|false), fonts: (on|off)(:on|:off)(true|false), game_center: (ios|mac)(:on|:off)(true|false), health_kit: (on|off)(:on|:off)(true|false), hls_interstitial_preview: (on|off)(:on|:off)(true|false), home_kit: (on|off)(:on|:off)(true|false), hotspot: (on|off)(:on|:off)(true|false), in_app_purchase: (on|off)(:on|:off)(true|false), inter_app_audio: (on|off)(:on|:off)(true|false), low_latency_hls: (on|off)(:on|:off)(true|false), managed_associated_domains: (on|off)(:on|:off)(true|false), maps: (on|off)(:on|:off)(true|false), multipath: (on|off)(:on|:off)(true|false), network_extension: (on|off)(:on|:off)(true|false), nfc_tag_reading: (on|off)(:on|:off)(true|false), personal_vpn: (on|off)(:on|:off)(true|false), passbook: (on|off)(:on|:off)(true|false), push_notification: (on|off)(:on|:off)(true|false), sign_in_with_apple: (on)(:on|:off)(true|false), siri_kit: (on|off)(:on|:off)(true|false), system_extension: (on|off)(:on|:off)(true|false), user_management: (on|off)(:on|:off)(true|false), vpn_configuration: (on|off)(:on|:off)(true|false), wallet: (on|off)(:on|:off)(true|false), wireless_accessory: (on|off)(:on|:off)(true|false), car_play_audio_app: (on|off)(:on|:off)(true|false), car_play_messaging_app: (on|off)(:on|:off)(true|false), car_play_navigation_app: (on|off)(:on|:off)(true|false), car_play_voip_calling_app: (on|off)(:on|:off)(true|false), critical_alerts: (on|off)(:on|:off)(true|false), hotspot_helper: (on|off)(:on|:off)(true|false), driver_kit: (on|off)(:on|:off)(true|false), driver_kit_endpoint_security: (on|off)(:on|:off)(true|false), driver_kit_family_hid_device: (on|off)(:on|:off)(true|false), driver_kit_family_networking: (on|off)(:on|:off)(true|false), driver_kit_family_serial: (on|off)(:on|:off)(true|false), driver_kit_hid_event_service: (on|off)(:on|:off)(true|false), driver_kit_transport_hid: (on|off)(:on|:off)(true|false), multitasking_camera_access: (on|off)(:on|:off)(true|false), sf_universal_link_api: (on|off)(:on|:off)(true|false), vp9_decoder: (on|off)(:on|:off)(true|false), music_kit: (on|off)(:on|:off)(true|false), shazam_kit: (on|off)(:on|:off)(true|false), communication_notifications: (on|off)(:on|:off)(true|false), group_activities: (on|off)(:on|:off)(true|false), health_kit_estimate_recalibration: (on|off)(:on|:off)(true|false), time_sensitive_notifications: (on|off)(:on|:off)(true|false))
   */
  services: { string: string };
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
};

/** Shape for [[nexusUpload]] options argument
 */

type NexusUploadOptions = {
  /**
   * File to be uploaded to Nexus
   */
  file: string;
  /**
   * Nexus repository id e.g. artefacts
   */
  repoId: string;
  /**
   * Nexus repository group id e.g. com.company
   */
  repoGroupId: string;
  /**
   * Nexus repository commandect name. Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed
   */
  repoProjectName: string;
  /**
   * Nexus repository commandect version
   */
  repoProjectVersion: string;
  /**
   * Nexus repository artifact classifier (optional)
   */
  repoClassifier?: string;
  /**
   * Nexus endpoint e.g. http://nexus:8081
   */
  endpoint: string;
  /**
   * Nexus mount path (Nexus 3 instances have this configured as empty by default)
   */
  mountPath?: string;
  /**
   * Nexus username
   */
  username: string;
  /**
   * Nexus password
   */
  password: string;
  /**
   * Verify SSL
   */
  sslVerify?: boolean;
  /**
   * Nexus major version
   */
  nexusVersion?: any;
  /**
   * Make detailed output
   */
  verbose?: boolean;
  /**
   * Proxy username
   */
  proxyUsername?: string;
  /**
   * Proxy password
   */
  proxyPassword?: string;
  /**
   * Proxy address
   */
  proxyAddress?: string;
  /**
   * Proxy port
   */
  proxyPort?: string;
};

/** Shape for [[notarize]] options argument
 */

type NotarizeOptions = {
  /**
   * Path to package to notarize, e.g. .app bundle or disk image
   */
  package: string;
  /**
   * Whether to `xcrun notarytool` or `xcrun altool`
   */
  useNotarytool: boolean;
  /**
   * Whether to try early stapling while the notarization request is in progress
   */
  tryEarlyStapling?: boolean;
  /**
   * Do not staple the notarization ticket to the artifact; useful for single file executables and ZIP archives
   */
  skipStapling?: boolean;
  /**
   * Bundle identifier to uniquely identify the package
   */
  bundleId?: string;
  /**
   * Apple ID username
   */
  username?: string;
  /**
   * Provider short name for accounts associated with multiple providers
   */
  ascProvider?: string;
  /**
   * Whether to print notarization log file, listing issues on failure and warnings on success
   */
  printLog?: boolean;
  /**
   * Whether to log requests
   */
  verbose?: boolean;
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
};

/** Shape for [[notification]] options argument
 */

type NotificationOptions = {
  /**
   * The title to display in the notification
   */
  title: string;
  /**
   * A subtitle to display in the notification
   */
  subtitle?: string;
  /**
   * The message to display in the notification
   */
  message: string;
  /**
   * The name of a sound to play when the notification appears (names are listed in Sound Preferences)
   */
  sound?: string;
  /**
   * Bundle identifier of application to be opened when the notification is clicked
   */
  activate?: string;
  /**
   * The URL of an image to display instead of the application icon (Mavericks+ only)
   */
  appIcon?: string;
  /**
   * The URL of an image to display attached to the notification (Mavericks+ only)
   */
  contentImage?: string;
  /**
   * URL of the resource to be opened when the notification is clicked
   */
  open?: string;
  /**
   * Shell command to run when the notification is clicked
   */
  execute?: string;
};

/** Shape for [[notify]] options argument
 */

type NotifyOptions = {};

/** Shape for [[numberOfCommits]] options argument
 */

type NumberOfCommitsOptions = {
  /**
   * Returns number of all commits instead of current branch
   */
  all?: boolean;
};

/** Shape for [[oclint]] options argument
 */

type OclintOptions = {
  /**
   * The path to oclint binary
   */
  oclintPath?: string;
  /**
   * The json compilation database, use xctool reporter 'json-compilation-database'
   */
  compileCommands?: string;
  /**
   * **DEPRECATED!** Use `:select_regex` instead - Select all files matching this reqex
   */
  selectReqex?: string;
  /**
   * Select all files matching this regex
   */
  selectRegex?: string;
  /**
   * Exclude all files matching this regex
   */
  excludeRegex?: string;
  /**
   * The type of the report (default: html)
   */
  reportType?: string;
  /**
   * The reports file path
   */
  reportPath?: string;
  /**
   * List enabled rules
   */
  listEnabledRules: boolean;
  /**
   * Override the default behavior of rules
   */
  rc?: string;
  /**
   * List of rule thresholds to override the default behavior of rules
   */
  thresholds?: string[];
  /**
   * List of rules to pick explicitly
   */
  enableRules?: string[];
  /**
   * List of rules to disable
   */
  disableRules?: string[];
  /**
   * The max allowed number of priority 1 violations
   */
  maxPriority1?: any;
  /**
   * The max allowed number of priority 2 violations
   */
  maxPriority2?: any;
  /**
   * The max allowed number of priority 3 violations
   */
  maxPriority3?: any;
  /**
   * Enable Clang Static Analyzer, and integrate results into OCLint report
   */
  enableClangStaticAnalyzer: boolean;
  /**
   * Compile every source, and analyze across global contexts (depends on number of source files, could results in high memory load)
   */
  enableGlobalAnalysis: boolean;
  /**
   * Allow duplicated violations in the OCLint report
   */
  allowDuplicatedViolations: boolean;
  /**
   * Additional argument to append to the compiler command line
   */
  extraArg?: string;
};

/** Shape for [[onesignal]] options argument
 */

type OnesignalOptions = {
  /**
   * OneSignal App ID. Setting this updates an existing app
   */
  appId?: string;
  /**
   * OneSignal Authorization Key
   */
  authToken: string;
  /**
   * OneSignal App Name. This is required when creating an app (in other words, when `:app_id` is not set, and optional when updating an app
   */
  appName?: string;
  /**
   * ANDROID GCM KEY
   */
  androidToken?: string;
  /**
   * GCM SENDER ID
   */
  androidGcmSenderId?: string;
  /**
   * APNS P12 File (in .p12 format)
   */
  apnsP12?: string;
  /**
   * APNS P12 password
   */
  apnsP12Password?: string;
  /**
   * APNS environment
   */
  apnsEnv?: string;
  /**
   * OneSignal Organization ID
   */
  organizationId?: string;
};

/** Shape for [[optOutCrashReporting]] options argument
 */

type OptOutCrashReportingOptions = {};

/** Shape for [[optOutUsage]] options argument
 */

type OptOutUsageOptions = {};

/** Shape for [[pem]] options argument
 */

type PemOptions = {
  /**
   * Set certificate's platform. Used for creation of production & development certificates. Supported platforms: ios, macos
   */
  platform: string;
  /**
   * Renew the development push certificate instead of the production one
   */
  development: any;
  /**
   * Create a Website Push certificate
   */
  websitePush: any;
  /**
   * Generate a p12 file additionally to a PEM file
   */
  generateP12: any;
  /**
   * If the current certificate is active for less than this number of days, generate a new one
   */
  activeDaysLimit: any;
  /**
   * Create a new push certificate, even if the current one is active for 30 (or PEM_ACTIVE_DAYS_LIMIT) more days
   */
  force: any;
  /**
   * Set to save the private RSA key
   */
  savePrivateKey: any;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Your Apple ID Username
   */
  username: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The password that is used for your p12 file
   */
  p12Password?: string;
  /**
   * The file name of the generated .pem file
   */
  pemName?: string;
  /**
   * The path to a directory in which all certificates and private keys should be stored
   */
  outputPath: string;
  /**
   * Block that is called if there is a new profile
   */
  newProfile?: any;
};

/** Shape for [[pilot]] options argument
 */

type PilotOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The bundle identifier of the app to upload or manage testers (optional)
   */
  appIdentifier?: string;
  /**
   * The platform to use (optional)
   */
  appPlatform?: string;
  /**
   * Apple ID property in the App Information section in App Store Connect
   */
  appleId?: string;
  /**
   * Path to the ipa file to upload
   */
  ipa?: string;
  /**
   * Path to your pkg file
   */
  pkg?: string;
  /**
   * Do you need a demo account when Apple does review?
   */
  demoAccountRequired?: boolean;
  /**
   * Beta app review information for contact info and demo account
   */
  betaAppReviewInfo?: { string: string };
  /**
   * Localized beta app test info for description, feedback email, marketing url, and privacy policy
   */
  localizedAppInfo?: { string: string };
  /**
   * Provide the 'Beta App Description' when uploading a new build
   */
  betaAppDescription?: string;
  /**
   * Provide the beta app email when uploading a new build
   */
  betaAppFeedbackEmail?: string;
  /**
   * Localized beta app test info for what's new
   */
  localizedBuildInfo?: { string: string };
  /**
   * Provide the 'What to Test' text when uploading a new build
   */
  changelog?: string;
  /**
   * Skip the distributing action of pilot and only upload the ipa file
   */
  skipSubmission: any;
  /**
   * If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
   */
  skipWaitingForBuildProcessing: any;
  /**
   * **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
   */
  updateBuildInfoOnUpload?: any;
  /**
   * Distribute a previously uploaded build (equivalent to the `fastlane pilot distribute` command)
   */
  distributeOnly: boolean;
  /**
   * Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
   */
  usesNonExemptEncryption: boolean;
  /**
   * Should the build be distributed to external testers? If set to true, use of `groups` option is required
   */
  distributeExternal: any;
  /**
   * Should notify external testers? (Not setting a value will use App Store Connect's default which is to notify)
   */
  notifyExternalTesters?: any;
  /**
   * The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
   */
  appVersion?: string;
  /**
   * The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
   */
  buildNumber?: string;
  /**
   * Should expire previous builds?
   */
  expirePreviousBuilds: any;
  /**
   * The tester's first name
   */
  firstName?: string;
  /**
   * The tester's last name
   */
  lastName?: string;
  /**
   * The tester's email
   */
  email?: string;
  /**
   * Path to a CSV file of testers
   */
  testersFilePath?: string;
  /**
   * Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"` This is required when `distribute_external` option is set to true or when we want to add a tester to one or more external testing groups
   */
  groups?: string[];
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: any;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
   */
  devPortalTeamId?: string;
  /**
   * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
   */
  itcProvider?: string;
  /**
   * Interval in seconds to wait for App Store Connect processing
   */
  waitProcessingInterval: any;
  /**
   * Timeout duration in seconds to wait for App Store Connect processing. If set, after exceeding timeout duration, this will `force stop` to wait for App Store Connect processing and exit with exception
   */
  waitProcessingTimeoutDuration?: any;
  /**
   * **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
   */
  waitForUploadedBuild?: any;
  /**
   * Expire previous if it's 'waiting for review'
   */
  rejectBuildWaitingForReview: any;
  /**
   * Send the build for a beta review
   */
  submitBetaReview: boolean;
};

/** Shape for [[podLibLint]] options argument
 */

type PodLibLintOptions = {
  /**
   * Use bundle exec when there is a Gemfile presented
   */
  useBundleExec: boolean;
  /**
   * Path of spec to lint
   */
  podspec?: string;
  /**
   * Allow output detail in console
   */
  verbose?: boolean;
  /**
   * Allow warnings during pod lint
   */
  allowWarnings?: boolean;
  /**
   * The sources of repos you want the pod spec to lint with, separated by commas
   */
  sources?: string[];
  /**
   * A specific subspec to lint instead of the entire spec
   */
  subspec?: string;
  /**
   * A Glob of additional ancillary podspecs which are used for linting via :path (available since cocoapods >= 1.7)
   */
  includePodspecs?: string;
  /**
   * A Glob of additional ancillary podspecs which are used for linting via :podspec. If there are --include-podspecs, then these are removed from them (available since cocoapods >= 1.7)
   */
  externalPodspecs?: string;
  /**
   * The SWIFT_VERSION that should be used to lint the spec. This takes precedence over a .swift-version file
   */
  swiftVersion?: string;
  /**
   * Lint uses static libraries to install the spec
   */
  useLibraries: boolean;
  /**
   * Lint using modular libraries (available since cocoapods >= 1.6)
   */
  useModularHeaders: boolean;
  /**
   * Lint stops on the first failing platform or subspec
   */
  failFast: boolean;
  /**
   * Lint skips checks that apply only to public specs
   */
  private: boolean;
  /**
   * Lint skips checks that would require to download and build the spec
   */
  quick: boolean;
  /**
   * Lint leaves the build directory intact for inspection
   */
  noClean: boolean;
  /**
   * Lint skips validation of subspecs
   */
  noSubspecs: boolean;
  /**
   * Lint against specific platforms (defaults to all platforms supported by the podspec). Multiple platforms must be comma-delimited (available since cocoapods >= 1.6)
   */
  platforms?: string;
  /**
   * Lint skips validating that the pod can be imported (available since cocoapods >= 1.3)
   */
  skipImportValidation: boolean;
  /**
   * Lint skips building and running tests during validation (available since cocoapods >= 1.3)
   */
  skipTests: boolean;
  /**
   * Validate with the Xcode Static Analysis tool (available since cocoapods >= 1.6.1)
   */
  analyze: boolean;
};

/** Shape for [[podPush]] options argument
 */

type PodPushOptions = {
  /**
   * Use bundle exec when there is a Gemfile presented
   */
  useBundleExec: boolean;
  /**
   * The Podspec you want to push
   */
  path?: string;
  /**
   * The repo you want to push. Pushes to Trunk by default
   */
  repo?: string;
  /**
   * Allow warnings during pod push
   */
  allowWarnings?: boolean;
  /**
   * Allow lint to use static libraries to install the spec
   */
  useLibraries?: boolean;
  /**
   * The sources of repos you want the pod spec to lint with, separated by commas
   */
  sources?: string[];
  /**
   * The SWIFT_VERSION that should be used to lint the spec. This takes precedence over a .swift-version file
   */
  swiftVersion?: string;
  /**
   * Lint skips validating that the pod can be imported
   */
  skipImportValidation?: boolean;
  /**
   * Lint skips building and running tests during validation
   */
  skipTests?: boolean;
  /**
   * Convert the podspec to JSON before pushing it to the repo
   */
  useJson?: boolean;
  /**
   * Show more debugging information
   */
  verbose?: boolean;
  /**
   * Use modular headers option during validation
   */
  useModularHeaders?: boolean;
  /**
   * If validation depends on other recently pushed pods, synchronize
   */
  synchronous?: boolean;
};

/** Shape for [[podioItem]] options argument
 */

type PodioItemOptions = {
  /**
   * Client ID for Podio API (see https://developers.podio.com/api-key)
   */
  clientId: string;
  /**
   * Client secret for Podio API (see https://developers.podio.com/api-key)
   */
  clientSecret: string;
  /**
   * App ID of the app you intend to authenticate with (see https://developers.podio.com/authentication/app_auth)
   */
  appId: string;
  /**
   * App token of the app you intend to authenticate with (see https://developers.podio.com/authentication/app_auth)
   */
  appToken: string;
  /**
   * String specifying the field key used for identification of an item
   */
  identifyingField: string;
  /**
   * String uniquely specifying an item within the app
   */
  identifyingValue: string;
  /**
   * Dictionary of your app fields. Podio supports several field types, see https://developers.podio.com/doc/items
   */
  otherFields?: { string: string };
};

/** Shape for [[precheck]] options argument
 */

type PrecheckOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * The default rule level unless otherwise configured
   */
  defaultRuleLevel: any;
  /**
   * Should check in-app purchases?
   */
  includeInAppPurchases?: boolean;
  /**
   * Should force check live app?
   */
  useLive: boolean;
  /**
   * mentioning  in a way that could be considered negative
   */
  negativeAppleSentiment?: any;
  /**
   * using placeholder text (e.g.:"lorem ipsum", "text here", etc...)
   */
  placeholderText?: any;
  /**
   * mentioning other platforms, like Android or Blackberry
   */
  otherPlatforms?: any;
  /**
   * mentioning features or content that is not currently available in your app
   */
  futureFunctionality?: any;
  /**
   * using text indicating this release is a test
   */
  testWords?: any;
  /**
   * including words that might be considered objectionable
   */
  curseWords?: any;
  /**
   * using text indicating that your IAP is free
   */
  freeStuffInIap?: any;
  /**
   * mentioning any of the user-specified words passed to custom_text(data: [words])
   */
  customText?: any;
  /**
   * using a copyright date that is any different from this current year, or missing a date
   */
  copyrightDate?: any;
  /**
   * unreachable URLs in app metadata
   */
  unreachableUrls?: any;
};

/** Shape for [[println]] options argument
 */

type PrintlnOptions = {
  /**
   * Message to be printed out
   */
  message?: string;
};

/** Shape for [[produce]] options argument
 */

type ProduceOptions = {
  /**
   * Your Apple ID Username
   */
  username: string;
  /**
   * App Identifier (Bundle ID, e.g. com.krausefx.app)
   */
  appIdentifier: string;
  /**
   * App Identifier Suffix (Ignored if App Identifier does not end with .*)
   */
  bundleIdentifierSuffix?: string;
  /**
   * App Name
   */
  appName: string;
  /**
   * Initial version number (e.g. '1.0')
   */
  appVersion?: string;
  /**
   * SKU Number (e.g. '1234')
   */
  sku: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * The platforms to use (optional)
   */
  platforms?: string[];
  /**
   * Primary Language (e.g. 'en-US', 'fr-FR')
   */
  language: string;
  /**
   * The name of your company. It's used to set company name on App Store Connect team's app pages. Only required if it's the first app you create
   */
  companyName?: string;
  /**
   * Skip the creation of the app on App Store Connect
   */
  skipItc: any;
  /**
   * Array of App Store Connect users. If provided, you can limit access to this newly created app for users with the App Manager, Developer, Marketer or Sales roles
   */
  itcUsers?: string[];
  /**
   * **DEPRECATED!** Please use `enable_services` instead - Array with Spaceship App Services
   */
  enabledFeatures?: any;
  /**
   * Array with Spaceship App Services (e.g. access_wifi: (on|off), app_attest: (on|off), app_group: (on|off), apple_pay: (on|off), associated_domains: (on|off), auto_fill_credential: (on|off), class_kit: (on|off), icloud: (legacy|cloudkit), custom_network_protocol: (on|off), data_protection: (complete|unlessopen|untilfirstauth), extended_virtual_address_space: (on|off), family_controls: (on|off), file_provider_testing_mode: (on|off), fonts: (on|off), game_center: (ios|mac), health_kit: (on|off), hls_interstitial_preview: (on|off), home_kit: (on|off), hotspot: (on|off), in_app_purchase: (on|off), inter_app_audio: (on|off), low_latency_hls: (on|off), managed_associated_domains: (on|off), maps: (on|off), multipath: (on|off), network_extension: (on|off), nfc_tag_reading: (on|off), personal_vpn: (on|off), passbook: (on|off), push_notification: (on|off), sign_in_with_apple: (on), siri_kit: (on|off), system_extension: (on|off), user_management: (on|off), vpn_configuration: (on|off), wallet: (on|off), wireless_accessory: (on|off), car_play_audio_app: (on|off), car_play_messaging_app: (on|off), car_play_navigation_app: (on|off), car_play_voip_calling_app: (on|off), critical_alerts: (on|off), hotspot_helper: (on|off), driver_kit: (on|off), driver_kit_endpoint_security: (on|off), driver_kit_family_hid_device: (on|off), driver_kit_family_networking: (on|off), driver_kit_family_serial: (on|off), driver_kit_hid_event_service: (on|off), driver_kit_transport_hid: (on|off), multitasking_camera_access: (on|off), sf_universal_link_api: (on|off), vp9_decoder: (on|off), music_kit: (on|off), shazam_kit: (on|off), communication_notifications: (on|off), group_activities: (on|off), health_kit_estimate_recalibration: (on|off), time_sensitive_notifications: (on|off))
   */
  enableServices: any;
  /**
   * Skip the creation of the app on the Apple Developer Portal
   */
  skipDevcenter: any;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  itcTeamId?: any;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  itcTeamName?: string;
};

/** Shape for [[prompt]] options argument
 */

type PromptOptions = {
  /**
   * The text that will be displayed to the user
   */
  text: string;
  /**
   * The default text that will be used when being executed on a CI service
   */
  ciInput: string;
  /**
   * Is that a boolean question (yes/no)? This will add (y/n) at the end
   */
  boolean: boolean;
  /**
   * Is that a secure text (yes/no)?
   */
  secureText: boolean;
  /**
   * Enable multi-line inputs by providing an end text (e.g. 'END') which will stop the user input
   */
  multiLineEndKeyword?: string;
};

/** Shape for [[pushGitTags]] options argument
 */

type PushGitTagsOptions = {
  /**
   * Force push to remote
   */
  force?: boolean;
  /**
   * The remote to push tags to
   */
  remote?: string;
  /**
   * The tag to push to remote
   */
  tag?: string;
};

/** Shape for [[pushToGitRemote]] options argument
 */

type PushToGitRemoteOptions = {
  /**
   * The local branch to push from. Defaults to the current branch
   */
  localBranch?: string;
  /**
   * The remote branch to push to. Defaults to the local branch
   */
  remoteBranch?: string;
  /**
   * Force push to remote
   */
  force: boolean;
  /**
   * Force push with lease to remote
   */
  forceWithLease: boolean;
  /**
   * Whether tags are pushed to remote
   */
  tags: boolean;
  /**
   * The remote to push to
   */
  remote: string;
  /**
   * Whether or not to use --no-verify
   */
  noVerify: boolean;
  /**
   * Whether or not to use --set-upstream
   */
  setUpstream: boolean;
  /**
   * Array of strings to be passed using the '--push-option' option
   */
  pushOptions: string[];
};

/** Shape for [[puts]] options argument
 */

type PutsOptions = {
  /**
   * Message to be printed out
   */
  message?: string;
};

/** Shape for [[readPodspec]] options argument
 */

type ReadPodspecOptions = {
  /**
   * Path to the podspec to be read
   */
  path: string;
};

/** Shape for [[recreateSchemes]] options argument
 */

type RecreateSchemesOptions = {
  /**
   * The Xcode project
   */
  project: string;
};

/** Shape for [[registerDevice]] options argument
 */

type RegisterDeviceOptions = {
  /**
   * Provide the name of the device to register as
   */
  name: string;
  /**
   * Provide the platform of the device to register as (ios, mac)
   */
  platform?: string;
  /**
   * Provide the UDID of the device to register as
   */
  udid: string;
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * Optional: Your Apple ID
   */
  username?: string;
};

/** Shape for [[registerDevices]] options argument
 */

type RegisterDevicesOptions = {
  /**
   * A hash of devices, with the name as key and the UDID as value
   */
  devices?: { string: string };
  /**
   * Provide a path to a file with the devices to register. For the format of the file see the examples
   */
  devicesFile?: string;
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * Optional: Your Apple ID
   */
  username?: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
};

/** Shape for [[resetGitRepo]] options argument
 */

type ResetGitRepoOptions = {
  /**
   * Array of files the changes should be discarded. If not given, all files will be discarded
   */
  files?: string[];
  /**
   * Skip verifying of previously clean state of repo. Only recommended in combination with `files` option
   */
  force: boolean;
  /**
   * Skip 'git clean' to avoid removing untracked files like `.env`
   */
  skipClean: boolean;
  /**
   * Setting this to true will clean the whole repository, ignoring anything in your local .gitignore. Set this to true if you want the equivalent of a fresh clone, and for all untracked and ignore files to also be removed
   */
  disregardGitignore?: boolean;
  /**
   * You can pass a string, or array of, file pattern(s) here which you want to have survive the cleaning process, and remain on disk, e.g. to leave the `artifacts` directory you would specify `exclude: 'artifacts'`. Make sure this pattern is also in your gitignore! See the gitignore documentation for info on patterns
   */
  exclude?: string;
};

/** Shape for [[resetSimulatorContents]] options argument
 */

type ResetSimulatorContentsOptions = {
  /**
   * **DEPRECATED!** Use `:os_versions` instead - Which OS versions of Simulators you want to reset content and settings, this does not remove/recreate the simulators
   */
  ios?: string[];
  /**
   * Which OS versions of Simulators you want to reset content and settings, this does not remove/recreate the simulators
   */
  osVersions?: string[];
};

/** Shape for [[resign]] options argument
 */

type ResignOptions = {
  /**
   * Path to the ipa file to resign. Optional if you use the _gym_ or _xcodebuild_ action
   */
  ipa: string;
  /**
   * Code signing identity to use. e.g. `iPhone Distribution: Luka Mirosevic (0123456789)`
   */
  signingIdentity: string;
  /**
   * Path to the entitlement file to use, e.g. `myApp/MyApp.entitlements`
   */
  entitlements?: string;
  /**
   * Path to your provisioning_profile. Optional if you use _sigh_
   */
  provisioningProfile: string;
  /**
   * Version number to force resigned ipa to use. Updates both `CFBundleShortVersionString` and `CFBundleVersion` values in `Info.plist`. Applies for main app and all nested apps or extensions
   */
  version?: string;
  /**
   * Display name to force resigned ipa to use
   */
  displayName?: string;
  /**
   * Short version string to force resigned ipa to use (`CFBundleShortVersionString`)
   */
  shortVersion?: string;
  /**
   * Bundle version to force resigned ipa to use (`CFBundleVersion`)
   */
  bundleVersion?: string;
  /**
   * Set new bundle ID during resign (`CFBundleIdentifier`)
   */
  bundleId?: string;
  /**
   * Extract app bundle codesigning entitlements and combine with entitlements from new provisioning profile
   */
  useAppEntitlements?: boolean;
  /**
   * Provide a path to a keychain file that should be used by `/usr/bin/codesign`
   */
  keychainPath?: string;
};

/** Shape for [[restoreFile]] options argument
 */

type RestoreFileOptions = {
  /**
   * Original file name you want to restore
   */
  path: string;
};

/** Shape for [[rocket]] options argument
 */

type RocketOptions = {};

/** Shape for [[rsync]] options argument
 */

type RsyncOptions = {
  /**
   * Port
   */
  extra?: string;
  /**
   * source file/folder
   */
  source: string;
  /**
   * destination file/folder
   */
  destination: string;
};

/** Shape for [[rubyVersion]] options argument
 */

type RubyVersionOptions = {};

/** Shape for [[runTests]] options argument
 */

type RunTestsOptions = {
  /**
   * Path to the workspace file
   */
  workspace?: string;
  /**
   * Path to the project file
   */
  project?: string;
  /**
   * Path to the Swift Package
   */
  packagePath?: string;
  /**
   * The project's scheme. Make sure it's marked as `Shared`
   */
  scheme?: string;
  /**
   * The name of the simulator type you want to run tests on (e.g. 'iPhone 6' or 'iPhone SE (2nd generation) (14.5)')
   */
  device?: string;
  /**
   * Array of devices to run the tests on (e.g. ['iPhone 6', 'iPad Air', 'iPhone SE (2nd generation) (14.5)'])
   */
  devices?: string[];
  /**
   * Should skip auto detecting of devices if none were specified
   */
  skipDetectDevices?: boolean;
  /**
   * Should fail if devices not found
   */
  ensureDevicesFound?: boolean;
  /**
   * Enabling this option will automatically killall Simulator processes before the run
   */
  forceQuitSimulator: boolean;
  /**
   * Enabling this option will automatically erase the simulator before running the application
   */
  resetSimulator: boolean;
  /**
   * Enabling this option will disable the simulator from showing the 'Slide to type' prompt
   */
  disableSlideToType: boolean;
  /**
   * Enabling this option will launch the first simulator prior to calling any xcodebuild command
   */
  prelaunchSimulator?: boolean;
  /**
   * Enabling this option will automatically uninstall the application before running it
   */
  reinstallApp: boolean;
  /**
   * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
   */
  appIdentifier?: string;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to run
   */
  onlyTesting?: any;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
   */
  skipTesting?: any;
  /**
   * The testplan associated with the scheme that should be used for testing
   */
  testplan?: string;
  /**
   * Array of strings matching test plan configurations to run
   */
  onlyTestConfigurations?: any;
  /**
   * Array of strings matching test plan configurations to skip
   */
  skipTestConfigurations?: any;
  /**
   * Run tests using the provided `.xctestrun` file
   */
  xctestrun?: string;
  /**
   * The toolchain that should be used for building the application (e.g. `com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a`)
   */
  toolchain?: any;
  /**
   * Should the project be cleaned before building it?
   */
  clean: any;
  /**
   * Should code coverage be generated? (Xcode 7 and up)
   */
  codeCoverage?: boolean;
  /**
   * Should the address sanitizer be turned on?
   */
  addressSanitizer?: boolean;
  /**
   * Should the thread sanitizer be turned on?
   */
  threadSanitizer?: boolean;
  /**
   * Should the HTML report be opened when tests are completed?
   */
  openReport: any;
  /**
   * The directory in which all reports will be stored
   */
  outputDirectory: string;
  /**
   * Define how the output should look like. Valid values are: standard, basic, rspec, or raw (disables xcpretty during xcodebuild)
   */
  outputStyle?: string;
  /**
   * Comma separated list of the output types (e.g. html, junit, json-compilation-database)
   */
  outputTypes: string;
  /**
   * Comma separated list of the output files, corresponding to the types provided by :output_types (order should match). If specifying an output type of json-compilation-database with :use_clang_report_name enabled, that option will take precedence
   */
  outputFiles?: string;
  /**
   * The directory where to store the raw log
   */
  buildlogPath: string;
  /**
   * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
   */
  includeSimulatorLogs?: boolean;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * Remove retry attempts from test results table and the JUnit report (if not using xcpretty)
   */
  outputRemoveRetryAttempts: boolean;
  /**
   * **DEPRECATED!** Use `output_style: 'raw'` instead - Disable xcpretty formatting of build, similar to `output_style='raw'` but this will also skip the test results table
   */
  disableXcpretty?: boolean;
  /**
   * **DEPRECATED!** Use 'xcpretty_formatter' instead - A custom xcpretty formatter to use
   */
  formatter?: string;
  /**
   * A custom xcpretty formatter to use
   */
  xcprettyFormatter?: string;
  /**
   * Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf')
   */
  xcprettyArgs?: string;
  /**
   * The directory where build products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should zip the derived data build products and place in output path?
   */
  shouldZipBuildProducts?: any;
  /**
   * Should provide additional copy of .xctestrun file (settings.xctestrun) and place in output path?
   */
  outputXctestrun: boolean;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: any;
  /**
   * Generate the json compilation database with clang naming convention (compile_commands.json)
   */
  useClangReportName: any;
  /**
   * Optionally override the per-target setting in the scheme for running tests in parallel. Equivalent to -parallel-testing-enabled
   */
  parallelTesting?: boolean;
  /**
   * Specify the exact number of test runners that will be spawned during parallel testing. Equivalent to -parallel-testing-worker-count
   */
  concurrentWorkers?: any;
  /**
   * Constrain the number of simulator devices on which to test concurrently. Equivalent to -maximum-concurrent-test-simulator-destinations
   */
  maxConcurrentSimulators?: any;
  /**
   * Do not run test bundles in parallel on the specified destinations. Testing will occur on each destination serially. Equivalent to -disable-concurrent-testing
   */
  disableConcurrentTesting?: boolean;
  /**
   * Should debug build be skipped before test build?
   */
  skipBuild: boolean;
  /**
   * Test without building, requires a derived data path
   */
  testWithoutBuilding?: boolean;
  /**
   * Build for testing only, does not run tests
   */
  buildForTesting?: boolean;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * Pass additional arguments to xcodebuild. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * App name to use in slack message and logfile name
   */
  appName?: string;
  /**
   * Target version of the app being build or tested. Used to filter out simulator version
   */
  deploymentTargetVersion?: string;
  /**
   * Create an Incoming WebHook for your Slack group to post results there
   */
  slackUrl?: string;
  /**
   * #channel or @username
   */
  slackChannel?: string;
  /**
   * The message included with each message posted to slack
   */
  slackMessage?: string;
  /**
   * Use webhook's default username and icon settings? (true/false)
   */
  slackUseWebhookConfiguredUsernameAndIcon?: boolean;
  /**
   * Overrides the webhook's username property if slack_use_webhook_configured_username_and_icon is false
   */
  slackUsername?: string;
  /**
   * Overrides the webhook's image property if slack_use_webhook_configured_username_and_icon is false
   */
  slackIconUrl?: string;
  /**
   * Don't publish to slack, even when an URL is given
   */
  skipSlack: any;
  /**
   * Only post on Slack if the tests fail
   */
  slackOnlyOnFailure: any;
  /**
   * Specifies default payloads to include in Slack messages. For more info visit https://docs.fastlane.tools/actions/slack
   */
  slackDefaultPayloads?: string[];
  /**
   * Use only if you're a pro, use the other options instead
   */
  destination?: any;
  /**
   * Platform to build when using a Catalyst enabled app. Valid values are: ios, macos
   */
  catalystPlatform?: string;
  /**
   * **DEPRECATED!** Use `--output_files` instead - Sets custom full report file name when generating a single report
   */
  customReportFileName?: string;
  /**
   * Allows for override of the default `xcodebuild` command
   */
  xcodebuildCommand?: string;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm?: boolean;
  /**
   * The number of times a test can fail
   */
  numberOfRetries: any;
  /**
   * Should this step stop the build if the tests fail? Set this to false if you're using trainer
   */
  failBuild: boolean;
};

/** Shape for [[s3]] options argument
 */

type S3Options = {
  /**
   * .ipa file for the build
   */
  ipa?: string;
  /**
   * zipped .dsym package for the build
   */
  dsym?: string;
  /**
   * Upload relevant metadata for this build
   */
  uploadMetadata?: boolean;
  /**
   * plist template path
   */
  plistTemplatePath?: string;
  /**
   * uploaded plist filename
   */
  plistFileName?: string;
  /**
   * html erb template path
   */
  htmlTemplatePath?: string;
  /**
   * uploaded html filename
   */
  htmlFileName?: string;
  /**
   * version erb template path
   */
  versionTemplatePath?: string;
  /**
   * uploaded version filename
   */
  versionFileName?: string;
  /**
   * AWS Access Key ID
   */
  accessKey?: string;
  /**
   * AWS Secret Access Key
   */
  secretAccessKey?: string;
  /**
   * AWS bucket name
   */
  bucket?: string;
  /**
   * AWS region (for bucket creation)
   */
  region?: string;
  /**
   * S3 'path'. Values from Info.plist will be substituted for keys wrapped in {}
   */
  path?: string;
  /**
   * Optional source directory e.g. ./build
   */
  source?: string;
  /**
   * Uploaded object permissions e.g public_read (default), private, public_read_write, authenticated_read
   */
  acl?: string;
};

/** Shape for [[say]] options argument
 */

type SayOptions = {
  /**
   * Text to be spoken out loud (as string or array of strings)
   */
  text: string[];
  /**
   * If say should be muted with text printed out
   */
  mute: boolean;
};

/** Shape for [[scan]] options argument
 */

type ScanOptions = {
  /**
   * Path to the workspace file
   */
  workspace?: string;
  /**
   * Path to the project file
   */
  project?: string;
  /**
   * Path to the Swift Package
   */
  packagePath?: string;
  /**
   * The project's scheme. Make sure it's marked as `Shared`
   */
  scheme?: string;
  /**
   * The name of the simulator type you want to run tests on (e.g. 'iPhone 6' or 'iPhone SE (2nd generation) (14.5)')
   */
  device?: string;
  /**
   * Array of devices to run the tests on (e.g. ['iPhone 6', 'iPad Air', 'iPhone SE (2nd generation) (14.5)'])
   */
  devices?: string[];
  /**
   * Should skip auto detecting of devices if none were specified
   */
  skipDetectDevices?: boolean;
  /**
   * Should fail if devices not found
   */
  ensureDevicesFound?: boolean;
  /**
   * Enabling this option will automatically killall Simulator processes before the run
   */
  forceQuitSimulator: boolean;
  /**
   * Enabling this option will automatically erase the simulator before running the application
   */
  resetSimulator: boolean;
  /**
   * Enabling this option will disable the simulator from showing the 'Slide to type' prompt
   */
  disableSlideToType: boolean;
  /**
   * Enabling this option will launch the first simulator prior to calling any xcodebuild command
   */
  prelaunchSimulator?: boolean;
  /**
   * Enabling this option will automatically uninstall the application before running it
   */
  reinstallApp: boolean;
  /**
   * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
   */
  appIdentifier?: string;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to run
   */
  onlyTesting?: any;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
   */
  skipTesting?: any;
  /**
   * The testplan associated with the scheme that should be used for testing
   */
  testplan?: string;
  /**
   * Array of strings matching test plan configurations to run
   */
  onlyTestConfigurations?: any;
  /**
   * Array of strings matching test plan configurations to skip
   */
  skipTestConfigurations?: any;
  /**
   * Run tests using the provided `.xctestrun` file
   */
  xctestrun?: string;
  /**
   * The toolchain that should be used for building the application (e.g. `com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a`)
   */
  toolchain?: any;
  /**
   * Should the project be cleaned before building it?
   */
  clean: any;
  /**
   * Should code coverage be generated? (Xcode 7 and up)
   */
  codeCoverage?: boolean;
  /**
   * Should the address sanitizer be turned on?
   */
  addressSanitizer?: boolean;
  /**
   * Should the thread sanitizer be turned on?
   */
  threadSanitizer?: boolean;
  /**
   * Should the HTML report be opened when tests are completed?
   */
  openReport: any;
  /**
   * The directory in which all reports will be stored
   */
  outputDirectory: string;
  /**
   * Define how the output should look like. Valid values are: standard, basic, rspec, or raw (disables xcpretty during xcodebuild)
   */
  outputStyle?: string;
  /**
   * Comma separated list of the output types (e.g. html, junit, json-compilation-database)
   */
  outputTypes: string;
  /**
   * Comma separated list of the output files, corresponding to the types provided by :output_types (order should match). If specifying an output type of json-compilation-database with :use_clang_report_name enabled, that option will take precedence
   */
  outputFiles?: string;
  /**
   * The directory where to store the raw log
   */
  buildlogPath: string;
  /**
   * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
   */
  includeSimulatorLogs?: boolean;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * Remove retry attempts from test results table and the JUnit report (if not using xcpretty)
   */
  outputRemoveRetryAttempts: boolean;
  /**
   * **DEPRECATED!** Use `output_style: 'raw'` instead - Disable xcpretty formatting of build, similar to `output_style='raw'` but this will also skip the test results table
   */
  disableXcpretty?: boolean;
  /**
   * **DEPRECATED!** Use 'xcpretty_formatter' instead - A custom xcpretty formatter to use
   */
  formatter?: string;
  /**
   * A custom xcpretty formatter to use
   */
  xcprettyFormatter?: string;
  /**
   * Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf')
   */
  xcprettyArgs?: string;
  /**
   * The directory where build products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should zip the derived data build products and place in output path?
   */
  shouldZipBuildProducts?: any;
  /**
   * Should provide additional copy of .xctestrun file (settings.xctestrun) and place in output path?
   */
  outputXctestrun: boolean;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: any;
  /**
   * Generate the json compilation database with clang naming convention (compile_commands.json)
   */
  useClangReportName: any;
  /**
   * Optionally override the per-target setting in the scheme for running tests in parallel. Equivalent to -parallel-testing-enabled
   */
  parallelTesting?: boolean;
  /**
   * Specify the exact number of test runners that will be spawned during parallel testing. Equivalent to -parallel-testing-worker-count
   */
  concurrentWorkers?: any;
  /**
   * Constrain the number of simulator devices on which to test concurrently. Equivalent to -maximum-concurrent-test-simulator-destinations
   */
  maxConcurrentSimulators?: any;
  /**
   * Do not run test bundles in parallel on the specified destinations. Testing will occur on each destination serially. Equivalent to -disable-concurrent-testing
   */
  disableConcurrentTesting?: boolean;
  /**
   * Should debug build be skipped before test build?
   */
  skipBuild: boolean;
  /**
   * Test without building, requires a derived data path
   */
  testWithoutBuilding?: boolean;
  /**
   * Build for testing only, does not run tests
   */
  buildForTesting?: boolean;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * Pass additional arguments to xcodebuild. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * App name to use in slack message and logfile name
   */
  appName?: string;
  /**
   * Target version of the app being build or tested. Used to filter out simulator version
   */
  deploymentTargetVersion?: string;
  /**
   * Create an Incoming WebHook for your Slack group to post results there
   */
  slackUrl?: string;
  /**
   * #channel or @username
   */
  slackChannel?: string;
  /**
   * The message included with each message posted to slack
   */
  slackMessage?: string;
  /**
   * Use webhook's default username and icon settings? (true/false)
   */
  slackUseWebhookConfiguredUsernameAndIcon?: boolean;
  /**
   * Overrides the webhook's username property if slack_use_webhook_configured_username_and_icon is false
   */
  slackUsername?: string;
  /**
   * Overrides the webhook's image property if slack_use_webhook_configured_username_and_icon is false
   */
  slackIconUrl?: string;
  /**
   * Don't publish to slack, even when an URL is given
   */
  skipSlack: any;
  /**
   * Only post on Slack if the tests fail
   */
  slackOnlyOnFailure: any;
  /**
   * Specifies default payloads to include in Slack messages. For more info visit https://docs.fastlane.tools/actions/slack
   */
  slackDefaultPayloads?: string[];
  /**
   * Use only if you're a pro, use the other options instead
   */
  destination?: any;
  /**
   * Platform to build when using a Catalyst enabled app. Valid values are: ios, macos
   */
  catalystPlatform?: string;
  /**
   * **DEPRECATED!** Use `--output_files` instead - Sets custom full report file name when generating a single report
   */
  customReportFileName?: string;
  /**
   * Allows for override of the default `xcodebuild` command
   */
  xcodebuildCommand?: string;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm?: boolean;
  /**
   * The number of times a test can fail
   */
  numberOfRetries: any;
  /**
   * Should this step stop the build if the tests fail? Set this to false if you're using trainer
   */
  failBuild: boolean;
};

/** Shape for [[scp]] options argument
 */

type ScpOptions = {
  /**
   * Username
   */
  username: string;
  /**
   * Password
   */
  password?: string;
  /**
   * Hostname
   */
  host: string;
  /**
   * Port
   */
  port?: string;
  /**
   * Upload
   */
  upload?: { string: string };
  /**
   * Download
   */
  download?: { string: string };
};

/** Shape for [[screengrab]] options argument
 */

type ScreengrabOptions = {
  /**
   * Path to the root of your Android SDK installation, e.g. ~/tools/android-sdk-macosx
   */
  androidHome?: string;
  /**
   * **DEPRECATED!** The Android build tools version to use, e.g. '23.0.2'
   */
  buildToolsVersion?: string;
  /**
   * A list of locales which should be used
   */
  locales: string[];
  /**
   * Enabling this option will automatically clear previously generated screenshots before running screengrab
   */
  clearPreviousScreenshots: boolean;
  /**
   * The directory where to store the screenshots
   */
  outputDirectory: string;
  /**
   * Don't open the summary after running _screengrab_
   */
  skipOpenSummary: boolean;
  /**
   * The package name of the app under test (e.g. com.yourcompany.yourapp)
   */
  appPackageName: string;
  /**
   * The package name of the tests bundle (e.g. com.yourcompany.yourapp.test)
   */
  testsPackageName?: string;
  /**
   * Only run tests in these Java packages
   */
  useTestsInPackages?: string[];
  /**
   * Only run tests in these Java classes
   */
  useTestsInClasses?: string[];
  /**
   * Additional launch arguments
   */
  launchArguments?: string[];
  /**
   * The fully qualified class name of your test instrumentation runner
   */
  testInstrumentationRunner?: string;
  /**
   * **DEPRECATED!** Return the device to this locale after running tests
   */
  endingLocale?: string;
  /**
   * **DEPRECATED!** Restarts the adb daemon using `adb root` to allow access to screenshots directories on device. Use if getting 'Permission denied' errors
   */
  useAdbRoot?: boolean;
  /**
   * The path to the APK for the app under test
   */
  appApkPath?: string;
  /**
   * The path to the APK for the tests bundle
   */
  testsApkPath?: string;
  /**
   * Use the device or emulator with the given serial number or qualifier
   */
  specificDevice?: string;
  /**
   * Type of device used for screenshots. Matches Google Play Types (phone, sevenInch, tenInch, tv, wear)
   */
  deviceType: string;
  /**
   * Whether or not to exit Screengrab on test failure. Exiting on failure will not copy screenshots to local machine nor open screenshots summary
   */
  exitOnTestFailure: boolean;
  /**
   * Enabling this option will automatically uninstall the application before running it
   */
  reinstallApp: boolean;
  /**
   * Add timestamp suffix to screenshot filename
   */
  useTimestampSuffix: boolean;
  /**
   * Configure the host used by adb to connect, allows running on remote devices farm
   */
  adbHost?: string;
};

/** Shape for [[setBuildNumberRepository]] options argument
 */

type SetBuildNumberRepositoryOptions = {
  /**
   * Use hg revision number instead of hash (ignored for non-hg repos)
   */
  useHgRevisionNumber?: boolean;
  /**
   * explicitly specify which xcodeproj to use
   */
  xcodeproj?: string;
};

/** Shape for [[setChangelog]] options argument
 */

type SetChangelogOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The version number to create/update
   */
  version?: string;
  /**
   * Changelog text that should be uploaded to App Store Connect
   */
  changelog?: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The platform of the app (ios, appletvos, mac)
   */
  platform: string;
};

/** Shape for [[setGithubRelease]] options argument
 */

type SetGithubReleaseOptions = {
  /**
   * The path to your repo, e.g. 'fastlane/fastlane'
   */
  repositoryName: string;
  /**
   * The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
   */
  serverUrl?: string;
  /**
   * Personal API Token for GitHub - generate one at https://github.com/settings/tokens
   */
  apiToken?: string;
  /**
   * Use a Bearer authorization token. Usually generated by Github Apps, e.g. GitHub Actions GITHUB_TOKEN environment variable
   */
  apiBearer?: string;
  /**
   * Pass in the tag name
   */
  tagName: string;
  /**
   * Name of this release
   */
  name?: string;
  /**
   * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master)
   */
  commitish?: string;
  /**
   * Description of this release
   */
  description?: string;
  /**
   * Whether the release should be marked as draft
   */
  isDraft?: boolean;
  /**
   * Whether the release should be marked as prerelease
   */
  isPrerelease?: boolean;
  /**
   * Whether the name and body of this release should be generated automatically
   */
  isGenerateReleaseNotes?: boolean;
  /**
   * Path to assets to be uploaded with the release
   */
  uploadAssets?: string[];
};

/** Shape for [[setInfoPlistValue]] options argument
 */

type SetInfoPlistValueOptions = {
  /**
   * Name of key in plist
   */
  key: string;
  /**
   * Name of subkey in plist
   */
  subkey?: string;
  /**
   * Value to setup
   */
  value: string;
  /**
   * Path to plist file you want to update
   */
  path: string;
  /**
   * Path to the output file you want to generate
   */
  outputFileName?: string;
};

/** Shape for [[setPodKey]] options argument
 */

type SetPodKeyOptions = {
  /**
   * Use bundle exec when there is a Gemfile presented
   */
  useBundleExec: boolean;
  /**
   * The key to be saved with cocoapods-keys
   */
  key: string;
  /**
   * The value to be saved with cocoapods-keys
   */
  value: string;
  /**
   * The project name
   */
  project?: string;
};

/** Shape for [[setupCi]] options argument
 */

type SetupCiOptions = {
  /**
   * Force setup, even if not executed by CI
   */
  force: boolean;
  /**
   * CI provider. If none is set, the provider is detected automatically
   */
  provider?: string;
};

/** Shape for [[setupCircleCi]] options argument
 */

type SetupCircleCiOptions = {
  /**
   * Force setup, even if not executed by CircleCI
   */
  force: boolean;
};

/** Shape for [[setupJenkins]] options argument
 */

type SetupJenkinsOptions = {
  /**
   * Force setup, even if not executed by Jenkins
   */
  force: boolean;
  /**
   * Unlocks keychain
   */
  unlockKeychain: boolean;
  /**
   * Add to keychain search list, valid values are true, false, :add, and :replace
   */
  addKeychainToSearchList: string;
  /**
   * Set keychain as default
   */
  setDefaultKeychain: boolean;
  /**
   * Path to keychain
   */
  keychainPath?: string;
  /**
   * Keychain password
   */
  keychainPassword: string;
  /**
   * Set code signing identity from CODE_SIGNING_IDENTITY environment
   */
  setCodeSigningIdentity: boolean;
  /**
   * Code signing identity
   */
  codeSigningIdentity?: string;
  /**
   * The directory in which the ipa file should be stored in
   */
  outputDirectory: string;
  /**
   * The directory where built products and other derived data will go
   */
  derivedDataPath: string;
  /**
   * Produce the result bundle describing what occurred will be placed
   */
  resultBundle: boolean;
};

/** Shape for [[setupTravis]] options argument
 */

type SetupTravisOptions = {
  /**
   * Force setup, even if not executed by travis
   */
  force: boolean;
};

/** Shape for [[sh]] options argument
 */

type ShOptions = {
  /**
   * Shell command to be executed
   */
  command: string;
  /**
   * Determines whether fastlane should print out the executed command itself and output of the executed command. If command line option --troubleshoot is used, then it overrides this option to true
   */
  log?: boolean;
  /**
   * A callback invoked with the command output if there is a non-zero exit status
   */
  errorCallback?: any;
};

/** Shape for [[sigh]] options argument
 */

type SighOptions = {
  /**
   * Setting this flag will generate AdHoc profiles instead of App Store Profiles
   */
  adhoc: any;
  /**
   * Setting this flag will generate Developer ID profiles instead of App Store Profiles
   */
  developerId: any;
  /**
   * Renew the development certificate instead of the production one
   */
  development: any;
  /**
   * By default, the certificate will be added to your local machine. Setting this flag will skip this action
   */
  skipInstall: any;
  /**
   * Renew provisioning profiles regardless of its state - to automatically add all devices for ad hoc profiles
   */
  force: any;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The name of the profile that is used on the Apple Developer Portal
   */
  provisioningName?: string;
  /**
   * Use in combination with :provisioning_name - when true only profiles matching this exact name will be downloaded
   */
  ignoreProfilesWithDifferentName?: any;
  /**
   * Directory in which the profile should be stored
   */
  outputPath: string;
  /**
   * The ID of the code signing certificate to use (e.g. 78ADL6LVAA)
   */
  certId?: string;
  /**
   * The certificate name to use for new profiles, or to renew with. (e.g. "Felix Krause")
   */
  certOwnerName?: string;
  /**
   * Filename to use for the generated provisioning profile (must include .mobileprovision)
   */
  filename?: string;
  /**
   * Skips the verification of existing profiles which is useful if you have thousands of profiles
   */
  skipFetchProfiles: any;
  /**
   * Include all matching certificates in the provisioning profile. Works only for the 'development' provisioning profile type
   */
  includeAllCertificates: any;
  /**
   * Skips the verification of the certificates for every existing profiles. This will make sure the provisioning profile can be used on the local machine
   */
  skipCertificateVerification: any;
  /**
   * Set the provisioning profile's platform (i.e. ios, tvos, macos, catalyst)
   */
  platform: any;
  /**
   * Only fetch existing profile, don't generate new ones
   */
  readonly?: any;
  /**
   * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
   */
  templateName?: string;
  /**
   * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
   */
  failOnNameTaken?: any;
};

/** Shape for [[skipDocs]] options argument
 */

type SkipDocsOptions = {};

/** Shape for [[slack]] options argument
 */

type SlackOptions = {
  /**
   * The message that should be displayed on Slack. This supports the standard Slack markup language
   */
  message?: string;
  /**
   * This is optional text that appears above the message attachment block. This supports the standard Slack markup language
   */
  pretext?: string;
  /**
   * #channel or @username
   */
  channel?: string;
  /**
   * Use webhook's default username and icon settings? (true/false)
   */
  useWebhookConfiguredUsernameAndIcon?: boolean;
  /**
   * Create an Incoming WebHook for your Slack group
   */
  slackUrl: string;
  /**
   * Overrides the webhook's username property if use_webhook_configured_username_and_icon is false
   */
  username?: string;
  /**
   * Overrides the webhook's image property if use_webhook_configured_username_and_icon is false
   */
  iconUrl?: string;
  /**
   * Add additional information to this post. payload must be a hash containing any key with any value
   */
  payload: { string: string };
  /**
   * Specifies default payloads to include. Pass an empty array to suppress all the default payloads
   */
  defaultPayloads: string[];
  /**
   * Merge additional properties in the slack attachment, see https://api.slack.com/docs/attachments
   */
  attachmentProperties: { string: string };
  /**
   * Was this build successful? (true/false)
   */
  success?: boolean;
  /**
   * Should an error sending the slack notification cause a failure? (true/false)
   */
  failOnError?: boolean;
  /**
   * Find and link channel names and usernames (true/false)
   */
  linkNames?: boolean;
};

/** Shape for [[slather]] options argument
 */

type SlatherOptions = {
  /**
   * The location of the build output
   */
  buildDirectory?: string;
  /**
   * The project file that slather looks at
   */
  proj?: string;
  /**
   * The workspace that slather looks at
   */
  workspace?: string;
  /**
   * Scheme to use when calling slather
   */
  scheme?: string;
  /**
   * Configuration to use when calling slather (since slather-2.4.1)
   */
  configuration?: string;
  /**
   * The input format that slather should look for
   */
  inputFormat?: string;
  /**
   * Tell slather that it is running on Github Actions
   */
  github?: boolean;
  /**
   * Tell slather that it is running on Buildkite
   */
  buildkite?: boolean;
  /**
   * Tell slather that it is running on TeamCity
   */
  teamcity?: boolean;
  /**
   * Tell slather that it is running on Jenkins
   */
  jenkins?: boolean;
  /**
   * Tell slather that it is running on TravisCI
   */
  travis?: boolean;
  /**
   * Tell slather that it is running on TravisCI Pro
   */
  travisPro?: boolean;
  /**
   * Tell slather that it is running on CircleCI
   */
  circleci?: boolean;
  /**
   * Tell slather that it should post data to Coveralls
   */
  coveralls?: boolean;
  /**
   * Tell slather that it should output results to the terminal
   */
  simpleOutput?: boolean;
  /**
   * Tell slather that it should output results as Gutter JSON format
   */
  gutterJson?: boolean;
  /**
   * Tell slather that it should output results as Cobertura XML format
   */
  coberturaXml?: boolean;
  /**
   * Tell slather that it should output results as SonarQube Generic XML format
   */
  sonarqubeXml?: boolean;
  /**
   * Tell slather that it should output results as llvm-cov show format
   */
  llvmCov?: boolean;
  /**
   * Tell slather that it should output results as static JSON report
   */
  json?: boolean;
  /**
   * Tell slather that it should output results as static HTML pages
   */
  html?: boolean;
  /**
   * Tell slather that it should open static html pages automatically
   */
  show: boolean;
  /**
   * Tell slather the location of your source files
   */
  sourceDirectory?: string;
  /**
   * Tell slather the location of for your output files
   */
  outputDirectory?: string;
  /**
   * Tell slather to ignore files matching a path or any path from an array of paths
   */
  ignore?: string[];
  /**
   * Tell slather to enable verbose mode
   */
  verbose?: boolean;
  /**
   * Use bundle exec to execute slather. Make sure it is in the Gemfile
   */
  useBundleExec: boolean;
  /**
   * Basename of the binary file, this should match the name of your bundle excluding its extension (i.e. YourApp [for YourApp.app bundle])
   */
  binaryBasename?: string[];
  /**
   * Binary file name to be used for code coverage
   */
  binaryFile?: string[];
  /**
   * Specify which architecture the binary file is in. Needed for universal binaries
   */
  arch?: string;
  /**
   * A Dir.glob compatible pattern used to limit the lookup to specific source files. Ignored in gcov mode
   */
  sourceFiles?: string;
  /**
   * The amount of decimals to use for % coverage reporting
   */
  decimals?: string;
};

/** Shape for [[snapshot]] options argument
 */

type SnapshotOptions = {
  /**
   * Path the workspace file
   */
  workspace?: string;
  /**
   * Path the project file
   */
  project?: string;
  /**
   * Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
   */
  xcargs?: string;
  /**
   * Use an extra XCCONFIG file to build your app
   */
  xcconfig?: string;
  /**
   * A list of devices you want to take the screenshots from
   */
  devices?: string[];
  /**
   * A list of languages which should be used
   */
  languages: string[];
  /**
   * A list of launch arguments which should be used
   */
  launchArguments: string[];
  /**
   * The directory where to store the screenshots
   */
  outputDirectory: string;
  /**
   * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
   */
  outputSimulatorLogs?: boolean;
  /**
   * By default, the latest version should be used automatically. If you want to change it, do it here
   */
  iosVersion?: string;
  /**
   * Don't open the HTML summary after running _snapshot_
   */
  skipOpenSummary: any;
  /**
   * Do not check for most recent SnapshotHelper code
   */
  skipHelperVersionCheck: any;
  /**
   * Enabling this option will automatically clear previously generated screenshots before running snapshot
   */
  clearPreviousScreenshots: any;
  /**
   * Enabling this option will automatically uninstall the application before running it
   */
  reinstallApp: any;
  /**
   * Enabling this option will automatically erase the simulator before running the application
   */
  eraseSimulator: any;
  /**
   * Enabling this option will prevent displaying the simulator window
   */
  headless: boolean;
  /**
   * Enabling this option will automatically override the status bar to show 9:41 AM, full battery, and full reception (Adjust 'SNAPSHOT_SIMULATOR_WAIT_FOR_BOOT_TIMEOUT' environment variable if override status bar is not working. Might be because simulator is not fully booted. Defaults to 10 seconds)
   */
  overrideStatusBar: any;
  /**
   * Fully customize the status bar by setting each option here. See `xcrun simctl status_bar --help`
   */
  overrideStatusBarArguments?: string;
  /**
   * Enabling this option will configure the Simulator's system language
   */
  localizeSimulator: any;
  /**
   * Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
   */
  darkMode?: boolean;
  /**
   * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
   */
  appIdentifier?: string;
  /**
   * A list of photos that should be added to the simulator before running the application
   */
  addPhotos?: string[];
  /**
   * A list of videos that should be added to the simulator before running the application
   */
  addVideos?: string[];
  /**
   * A path to screenshots.html template
   */
  htmlTemplate?: string;
  /**
   * The directory where to store the build log
   */
  buildlogPath: string;
  /**
   * Should the project be cleaned before building it?
   */
  clean: any;
  /**
   * Test without building, requires a derived data path
   */
  testWithoutBuilding?: boolean;
  /**
   * The configuration to use when building the app. Defaults to 'Release'
   */
  configuration?: string;
  /**
   * The SDK that should be used for building the application
   */
  sdk?: string;
  /**
   * The scheme you want to use, this must be the scheme for the UI Tests
   */
  scheme?: string;
  /**
   * The number of times a test can fail before snapshot should stop retrying
   */
  numberOfRetries: any;
  /**
   * Should snapshot stop immediately after the tests completely failed on one device?
   */
  stopAfterFirstError: any;
  /**
   * The directory where build products and other derived data will go
   */
  derivedDataPath?: string;
  /**
   * Should an Xcode result bundle be generated in the output directory
   */
  resultBundle?: any;
  /**
   * The name of the target you want to test (if you desire to override the Target Application from Xcode)
   */
  testTargetName?: string;
  /**
   * Separate the log files per device and per language
   */
  namespaceLogFiles?: any;
  /**
   * Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
   */
  concurrentSimulators: any;
  /**
   * Disable the simulator from showing the 'Slide to type' prompt
   */
  disableSlideToType?: any;
  /**
   * Sets a custom path for Swift Package Manager dependencies
   */
  clonedSourcePackagesPath?: string;
  /**
   * Skips resolution of Swift Package Manager dependencies
   */
  skipPackageDependenciesResolution: boolean;
  /**
   * Prevents packages from automatically being resolved to versions other than those recorded in the `Package.resolved` file
   */
  disablePackageAutomaticUpdates: boolean;
  /**
   * The testplan associated with the scheme that should be used for testing
   */
  testplan?: string;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to run
   */
  onlyTesting?: any;
  /**
   * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
   */
  skipTesting?: any;
  /**
   * xcodebuild formatter to use (ex: 'xcbeautify', 'xcbeautify --quieter', 'xcpretty', 'xcpretty -test'). Use empty string (ex: '') to disable any formatter (More information: https://docs.fastlane.tools/best-practices/xcodebuild-formatters/)
   */
  xcodebuildFormatter: string;
  /**
   * **DEPRECATED!** Use `xcodebuild_formatter: ''` instead - Additional xcpretty arguments
   */
  xcprettyArgs?: string;
  /**
   * Disable xcpretty formatting of build
   */
  disableXcpretty?: boolean;
  /**
   * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
   */
  suppressXcodeOutput?: boolean;
  /**
   * Lets xcodebuild use system's scm configuration
   */
  useSystemScm: boolean;
};

/** Shape for [[sonar]] options argument
 */

type SonarOptions = {
  /**
   * The path to your sonar project configuration file; defaults to `sonar-project.properties`
   */
  projectConfigurationPath?: string;
  /**
   * The key sonar uses to identify the project, e.g. `name.gretzki.awesomeApp`. Must either be specified here or inside the sonar project configuration file
   */
  projectKey?: string;
  /**
   * The name of the project that gets displayed on the sonar report page. Must either be specified here or inside the sonar project configuration file
   */
  projectName?: string;
  /**
   * The project's version that gets displayed on the sonar report page. Must either be specified here or inside the sonar project configuration file
   */
  projectVersion?: string;
  /**
   * Comma-separated paths to directories containing source files. Must either be specified here or inside the sonar project configuration file
   */
  sourcesPath?: string;
  /**
   * Comma-separated paths to directories to be excluded from the analysis
   */
  exclusions?: string;
  /**
   * Language key, e.g. objc
   */
  projectLanguage?: string;
  /**
   * Used encoding of source files, e.g., UTF-8
   */
  sourceEncoding?: string;
  /**
   * Pass additional arguments to sonar-scanner. Be sure to provide the arguments with a leading `-D` e.g. FL_SONAR_RUNNER_ARGS="-Dsonar.verbose=true"
   */
  sonarRunnerArgs?: string;
  /**
   * Pass the Sonar Login token (e.g: xxxxxxprivate_token_XXXXbXX7e)
   */
  sonarLogin?: string;
  /**
   * Pass the url of the Sonar server
   */
  sonarUrl?: string;
  /**
   * Key of the organization on SonarCloud
   */
  sonarOrganization?: string;
  /**
   * Pass the branch name which is getting scanned
   */
  branchName?: string;
  /**
   * The name of the branch that contains the changes to be merged
   */
  pullRequestBranch?: string;
  /**
   * The long-lived branch into which the PR will be merged
   */
  pullRequestBase?: string;
  /**
   * Unique identifier of your PR. Must correspond to the key of the PR in GitHub or TFS
   */
  pullRequestKey?: string;
};

/** Shape for [[sourcedocs]] options argument
 */

type SourcedocsOptions = {
  /**
   * Generate documentation for all modules in a Swift package
   */
  allModules?: boolean;
  /**
   * Generate documentation for Swift Package Manager module
   */
  spmModule?: string;
  /**
   * Generate documentation for a Swift module
   */
  moduleName?: string;
  /**
   * The text to begin links with
   */
  linkBeginning?: string;
  /**
   * The text to end links with (default: .md)
   */
  linkEnding?: string;
  /**
   * Output directory to clean (default: Documentation/Reference)
   */
  outputFolder: string;
  /**
   * Access level to include in documentation [private, fileprivate, internal, public, open] (default: public)
   */
  minAcl?: string;
  /**
   * Include the module name as part of the output folder path
   */
  moduleNamePath?: boolean;
  /**
   * Delete output folder before generating documentation
   */
  clean?: boolean;
  /**
   * Put methods, properties and enum cases inside collapsible blocks
   */
  collapsible?: boolean;
  /**
   * Generate a table of contents with properties and methods for each type
   */
  tableOfContents?: boolean;
  /**
   * Generate documentation that is reproducible: only depends on the sources
   */
  reproducible?: boolean;
  /**
   * Create documentation for specific scheme
   */
  scheme?: string;
  /**
   * Create documentation for specific sdk platform
   */
  sdkPlatform?: string;
};

/** Shape for [[spaceshipLogs]] options argument
 */

type SpaceshipLogsOptions = {
  /**
   * Finds only the latest Spaceshop log file if set to true, otherwise returns all
   */
  latest: boolean;
  /**
   * Prints the contents of the found Spaceship log file(s)
   */
  printContents: boolean;
  /**
   * Prints the paths of the found Spaceship log file(s)
   */
  printPaths: boolean;
  /**
   * Copies the found Spaceship log file(s) to a directory
   */
  copyToPath?: string;
  /**
   * Copies the contents of the found Spaceship log file(s) to the clipboard
   */
  copyToClipboard: boolean;
};

/** Shape for [[spaceshipStats]] options argument
 */

type SpaceshipStatsOptions = {
  /**
   * Print all URLs requested
   */
  printRequestLogs: boolean;
};

/** Shape for [[splunkmint]] options argument
 */

type SplunkmintOptions = {
  /**
   * dSYM.zip file to upload to Splunk MINT
   */
  dsym?: string;
  /**
   * Splunk MINT App API key e.g. f57a57ca
   */
  apiKey: string;
  /**
   * Splunk MINT API token e.g. e05ba40754c4869fb7e0b61
   */
  apiToken: string;
  /**
   * Make detailed output
   */
  verbose?: boolean;
  /**
   * Show upload progress
   */
  uploadProgress?: boolean;
  /**
   * Proxy username
   */
  proxyUsername?: string;
  /**
   * Proxy password
   */
  proxyPassword?: string;
  /**
   * Proxy address
   */
  proxyAddress?: string;
  /**
   * Proxy port
   */
  proxyPort?: string;
};

/** Shape for [[spm]] options argument
 */

type SpmOptions = {
  /**
   * The swift command (one of: build, test, clean, reset, update, resolve, generate-xcodeproj, init)
   */
  command: string;
  /**
   * Enables code coverage for the generated Xcode project when using the 'generate-xcodeproj' and the 'test' command
   */
  enableCodeCoverage?: boolean;
  /**
   * Specify build/cache directory [default: ./.build]
   */
  buildPath?: string;
  /**
   * Change working directory before any other operation
   */
  packagePath?: string;
  /**
   * Use xcconfig file to override swift package generate-xcodeproj defaults
   */
  xcconfig?: string;
  /**
   * Build with configuration (debug|release) [default: debug]
   */
  configuration?: string;
  /**
   * Disable using the sandbox when executing subprocesses
   */
  disableSandbox?: boolean;
  /**
   * Specifies the output type for xcpretty. eg. 'test', or 'simple'
   */
  xcprettyOutput?: string;
  /**
   * Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf'), requires xcpretty_output to be specified also
   */
  xcprettyArgs?: string;
  /**
   * Increase verbosity of informational output
   */
  verbose: boolean;
};

/** Shape for [[ssh]] options argument
 */

type SshOptions = {
  /**
   * Username
   */
  username: string;
  /**
   * Password
   */
  password?: string;
  /**
   * Hostname
   */
  host: string;
  /**
   * Port
   */
  port?: string;
  /**
   * Commands
   */
  commands?: string[];
  /**
   * Log commands and output
   */
  log?: boolean;
};

/** Shape for [[supply]] options argument
 */

type SupplyOptions = {
  /**
   * The package name of the application to use
   */
  packageName: string;
  /**
   * Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
   */
  versionName?: string;
  /**
   * Version code (used when updating rollout or promoting specific versions)
   */
  versionCode?: any;
  /**
   * Release status (used when uploading new apks/aabs) - valid values are completed, draft, halted, inProgress
   */
  releaseStatus?: string;
  /**
   * The track of the application to use. The default available tracks are: production, beta, alpha, internal
   */
  track: string;
  /**
   * The percentage of the user fraction when uploading to the rollout track (setting to 1 will complete the rollout)
   */
  rollout?: string;
  /**
   * Path to the directory containing the metadata files
   */
  metadataPath?: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
   */
  key?: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
   */
  issuer?: string;
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
  /**
   * Path to the APK file to upload
   */
  apk?: string;
  /**
   * An array of paths to APK files to upload
   */
  apkPaths?: string[];
  /**
   * Path to the AAB file to upload
   */
  aab?: string;
  /**
   * An array of paths to AAB files to upload
   */
  aabPaths?: string[];
  /**
   * Whether to skip uploading APK
   */
  skipUploadApk?: boolean;
  /**
   * Whether to skip uploading AAB
   */
  skipUploadAab?: boolean;
  /**
   * Whether to skip uploading metadata, changelogs not included
   */
  skipUploadMetadata?: boolean;
  /**
   * Whether to skip uploading changelogs
   */
  skipUploadChangelogs?: boolean;
  /**
   * Whether to skip uploading images, screenshots not included
   */
  skipUploadImages?: boolean;
  /**
   * Whether to skip uploading SCREENSHOTS
   */
  skipUploadScreenshots?: boolean;
  /**
   * The track to promote to. The default available tracks are: production, beta, alpha, internal
   */
  trackPromoteTo?: string;
  /**
   * Promoted track release status (used when promoting a track) - valid values are completed, draft, halted, inProgress
   */
  trackPromoteReleaseStatus?: string;
  /**
   * Only validate changes with Google Play rather than actually publish
   */
  validateOnly?: boolean;
  /**
   * Path to the mapping file to upload (mapping.txt or native-debug-symbols.zip alike)
   */
  mapping?: string;
  /**
   * An array of paths to mapping files to upload (mapping.txt or native-debug-symbols.zip alike)
   */
  mappingPaths?: string[];
  /**
   * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
   */
  rootUrl?: string;
  /**
   * **DEPRECATED!** Google Play does this automatically now - Check the other tracks for superseded versions and disable them
   */
  checkSupersededTracks?: boolean;
  /**
   * Timeout for read, open, and send (in seconds)
   */
  timeout?: any;
  /**
   * **DEPRECATED!** Google Play does this automatically now - When promoting to a new track, deactivate the binary in the origin track
   */
  deactivateOnPromote?: boolean;
  /**
   * An array of version codes to retain when publishing a new APK
   */
  versionCodesToRetain?: string[];
  /**
   * Indicates that the changes in this edit will not be reviewed until they are explicitly sent for review from the Google Play Console UI
   */
  changesNotSentForReview: boolean;
  /**
   * Catches changes_not_sent_for_review errors when an edit is committed and retries with the configuration that the error message recommended
   */
  rescueChangesNotSentForReview: boolean;
  /**
   * In-app update priority for all the newly added apks in the release. Can take values between [0,5]
   */
  inAppUpdatePriority?: any;
  /**
   * References version of 'main' expansion file
   */
  obbMainReferencesVersion?: any;
  /**
   * Size of 'main' expansion file in bytes
   */
  obbMainFileSize?: any;
  /**
   * References version of 'patch' expansion file
   */
  obbPatchReferencesVersion?: any;
  /**
   * Size of 'patch' expansion file in bytes
   */
  obbPatchFileSize?: any;
  /**
   * Must be set to true if the bundle installation may trigger a warning on user devices (e.g can only be downloaded over wifi). Typically this is required for bundles over 150MB
   */
  ackBundleInstallationWarning?: boolean;
};

/** Shape for [[swiftlint]] options argument
 */

type SwiftlintOptions = {
  /**
   * SwiftLint mode: :lint, :fix, :autocorrect or :analyze
   */
  mode?: any;
  /**
   * Specify path to lint
   */
  path?: string;
  /**
   * Path to output SwiftLint result
   */
  outputFile?: string;
  /**
   * Custom configuration file of SwiftLint
   */
  configFile?: string;
  /**
   * Fail on warnings? (true/false)
   */
  strict?: boolean;
  /**
   * List of files to process
   */
  files?: string[];
  /**
   * Ignore the exit status of the SwiftLint command, so that serious violations                                                     don't fail the build (true/false)
   */
  ignoreExitStatus?: boolean;
  /**
   * Raises an error if swiftlint fails, so you can fail CI/CD jobs if necessary                                                     (true/false)
   */
  raiseIfSwiftlintError?: boolean;
  /**
   * Choose output reporter. Available: xcode, json, csv, checkstyle, codeclimate,                                                      junit, html, emoji, sonarqube, markdown, github-actions-logging
   */
  reporter?: string;
  /**
   * Don't print status logs like 'Linting <file>' & 'Done linting'
   */
  quiet?: boolean;
  /**
   * Path to the `swiftlint` executable on your machine
   */
  executable?: string;
  /**
   * Format code when mode is :autocorrect
   */
  format?: boolean;
  /**
   * Ignore the cache when mode is :autocorrect or :lint
   */
  noCache?: boolean;
  /**
   * Compiler log path when mode is :analyze
   */
  compilerLogPath?: string;
};

/** Shape for [[syncCodeSigning]] options argument
 */

type SyncCodeSigningOptions = {
  /**
   * Define the profile type, can be appstore, adhoc, development, enterprise, developer_id, mac_installer_distribution
   */
  type: string;
  /**
   * Create additional cert types needed for macOS installers (valid values: mac_installer_distribution, developer_id_installer)
   */
  additionalCertTypes?: string[];
  /**
   * Only fetch existing certificates and profiles, don't generate new ones
   */
  readonly: boolean;
  /**
   * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
   */
  generateAppleCerts: boolean;
  /**
   * Skip syncing provisioning profiles
   */
  skipProvisioningProfiles: boolean;
  /**
   * The bundle identifier(s) of your app (comma-separated string or array of strings)
   */
  appIdentifier: string[];
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The ID of your Developer Portal team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  teamName?: string;
  /**
   * Define where you want to store your certificates
   */
  storageMode: string;
  /**
   * URL to the git repo containing all the certificates
   */
  gitUrl: string;
  /**
   * Specific git branch to use
   */
  gitBranch: string;
  /**
   * git user full name to commit
   */
  gitFullName?: string;
  /**
   * git user email to commit
   */
  gitUserEmail?: string;
  /**
   * Make a shallow clone of the repository (truncate the history to 1 revision)
   */
  shallowClone: boolean;
  /**
   * Clone just the branch specified, instead of the whole repo. This requires that the branch already exists. Otherwise the command will fail
   */
  cloneBranchDirectly: boolean;
  /**
   * Use a basic authorization header to access the git repo (e.g.: access via HTTPS, GitHub Actions, etc), usually a string in Base64
   */
  gitBasicAuthorization?: string;
  /**
   * Use a bearer authorization header to access the git repo (e.g.: access to an Azure DevOps repository), usually a string in Base64
   */
  gitBearerAuthorization?: string;
  /**
   * Use a private key to access the git repo (e.g.: access to GitHub repository via Deploy keys), usually a id_rsa named file or the contents hereof
   */
  gitPrivateKey?: string;
  /**
   * Name of the Google Cloud Storage bucket to use
   */
  googleCloudBucketName?: string;
  /**
   * Path to the gc_keys.json file
   */
  googleCloudKeysFile?: string;
  /**
   * ID of the Google Cloud project to use for authentication
   */
  googleCloudProjectId?: string;
  /**
   * Name of the S3 region
   */
  s3Region?: string;
  /**
   * S3 access key
   */
  s3AccessKey?: string;
  /**
   * S3 secret access key
   */
  s3SecretAccessKey?: string;
  /**
   * Name of the S3 bucket
   */
  s3Bucket?: string;
  /**
   * Prefix to be used on all objects uploaded to S3
   */
  s3ObjectPrefix?: string;
  /**
   * Keychain the items should be imported to
   */
  keychainName: string;
  /**
   * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your macOS account password
   */
  keychainPassword?: string;
  /**
   * Renew the provisioning profiles every time you run match
   */
  force: boolean;
  /**
   * Renew the provisioning profiles if the device count on the developer portal has changed. Ignored for profile types 'appstore' and 'developer_id'
   */
  forceForNewDevices: boolean;
  /**
   * Include all matching certificates in the provisioning profile. Works only for the 'development' provisioning profile type
   */
  includeAllCertificates: boolean;
  /**
   * Renew the provisioning profiles if the device count on the developer portal has changed. Works only for the 'development' provisioning profile type. Requires 'include_all_certificates' option to be 'true'
   */
  forceForNewCertificates: boolean;
  /**
   * Disables confirmation prompts during nuke, answering them with yes
   */
  skipConfirmation: boolean;
  /**
   * Remove certs from repository during nuke without revoking them on the developer portal
   */
  safeRemoveCerts: boolean;
  /**
   * Skip generation of a README.md for the created git repository
   */
  skipDocs: boolean;
  /**
   * Set the provisioning profile's platform to work with (i.e. ios, tvos, macos, catalyst)
   */
  platform: string;
  /**
   * Enable this if you have the Mac Catalyst capability enabled and your project was created with Xcode 11.3 or earlier. Prepends 'maccatalyst.' to the app identifier for the provisioning profile mapping
   */
  deriveCatalystAppIdentifier: boolean;
  /**
   * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
   */
  templateName?: string;
  /**
   * A custom name for the provisioning profile. This will replace the default provisioning profile name if specified
   */
  profileName?: string;
  /**
   * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
   */
  failOnNameTaken?: boolean;
  /**
   * Set to true if there is no access to Apple developer portal but there are certificates, keys and profiles provided. Only works with match import action
   */
  skipCertificateMatching?: boolean;
  /**
   * Path in which to export certificates, key and profile
   */
  outputPath?: string;
  /**
   * Skips setting the partition list (which can sometimes take a long time). Setting the partition list is usually needed to prevent Xcode from prompting to allow a cert to be used for signing
   */
  skipSetPartitionList: boolean;
  /**
   * Print out extra information and all commands
   */
  verbose: boolean;
};

/** Shape for [[teamId]] options argument
 */

type TeamIdOptions = {};

/** Shape for [[teamName]] options argument
 */

type TeamNameOptions = {};

/** Shape for [[testfairy]] options argument
 */

type TestfairyOptions = {
  /**
   * API Key for TestFairy
   */
  apiKey: string;
  /**
   * Path to your IPA file for iOS
   */
  ipa?: string;
  /**
   * Path to your APK file for Android
   */
  apk?: string;
  /**
   * Symbols mapping file
   */
  symbolsFile?: string;
  /**
   * API URL for TestFairy
   */
  uploadUrl?: string;
  /**
   * Array of tester groups to be notified
   */
  testersGroups?: string[];
  /**
   * Array of metrics to record (cpu,memory,network,phone_signal,gps,battery,mic,wifi)
   */
  metrics?: string[];
  /**
   * Additional release notes for this upload. This text will be added to email notifications
   */
  comment?: string;
  /**
   * Allows an easy upgrade of all users to the current version. To enable set to 'on'
   */
  autoUpdate?: string;
  /**
   * Send email to testers
   */
  notify?: string;
  /**
   * Array of options (shake,video_only_wifi,anonymous)
   */
  options?: string[];
  /**
   * Array of custom options. Contact support@testfairy.com for more information
   */
  custom?: string;
  /**
   * Request timeout in seconds
   */
  timeout?: any;
};

/** Shape for [[testflight]] options argument
 */

type TestflightOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The bundle identifier of the app to upload or manage testers (optional)
   */
  appIdentifier?: string;
  /**
   * The platform to use (optional)
   */
  appPlatform?: string;
  /**
   * Apple ID property in the App Information section in App Store Connect
   */
  appleId?: string;
  /**
   * Path to the ipa file to upload
   */
  ipa?: string;
  /**
   * Path to your pkg file
   */
  pkg?: string;
  /**
   * Do you need a demo account when Apple does review?
   */
  demoAccountRequired?: boolean;
  /**
   * Beta app review information for contact info and demo account
   */
  betaAppReviewInfo?: { string: string };
  /**
   * Localized beta app test info for description, feedback email, marketing url, and privacy policy
   */
  localizedAppInfo?: { string: string };
  /**
   * Provide the 'Beta App Description' when uploading a new build
   */
  betaAppDescription?: string;
  /**
   * Provide the beta app email when uploading a new build
   */
  betaAppFeedbackEmail?: string;
  /**
   * Localized beta app test info for what's new
   */
  localizedBuildInfo?: { string: string };
  /**
   * Provide the 'What to Test' text when uploading a new build
   */
  changelog?: string;
  /**
   * Skip the distributing action of pilot and only upload the ipa file
   */
  skipSubmission: any;
  /**
   * If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
   */
  skipWaitingForBuildProcessing: any;
  /**
   * **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
   */
  updateBuildInfoOnUpload?: any;
  /**
   * Distribute a previously uploaded build (equivalent to the `fastlane pilot distribute` command)
   */
  distributeOnly: boolean;
  /**
   * Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
   */
  usesNonExemptEncryption: boolean;
  /**
   * Should the build be distributed to external testers? If set to true, use of `groups` option is required
   */
  distributeExternal: any;
  /**
   * Should notify external testers? (Not setting a value will use App Store Connect's default which is to notify)
   */
  notifyExternalTesters?: any;
  /**
   * The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
   */
  appVersion?: string;
  /**
   * The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
   */
  buildNumber?: string;
  /**
   * Should expire previous builds?
   */
  expirePreviousBuilds: any;
  /**
   * The tester's first name
   */
  firstName?: string;
  /**
   * The tester's last name
   */
  lastName?: string;
  /**
   * The tester's email
   */
  email?: string;
  /**
   * Path to a CSV file of testers
   */
  testersFilePath?: string;
  /**
   * Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"` This is required when `distribute_external` option is set to true or when we want to add a tester to one or more external testing groups
   */
  groups?: string[];
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: any;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
   */
  devPortalTeamId?: string;
  /**
   * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
   */
  itcProvider?: string;
  /**
   * Interval in seconds to wait for App Store Connect processing
   */
  waitProcessingInterval: any;
  /**
   * Timeout duration in seconds to wait for App Store Connect processing. If set, after exceeding timeout duration, this will `force stop` to wait for App Store Connect processing and exit with exception
   */
  waitProcessingTimeoutDuration?: any;
  /**
   * **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
   */
  waitForUploadedBuild?: any;
  /**
   * Expire previous if it's 'waiting for review'
   */
  rejectBuildWaitingForReview: any;
  /**
   * Send the build for a beta review
   */
  submitBetaReview: boolean;
};

/** Shape for [[trainer]] options argument
 */

type TrainerOptions = {
  /**
   * Path to the directory that should be converted
   */
  path: string;
  /**
   * The extension for the newly created file. Usually .xml or .junit
   */
  extension: string;
  /**
   * Directoy in which the xml files should be written to. Same directory as source by default
   */
  outputDirectory?: string;
  /**
   * Filename the xml file should be written to. Defaults to name of input file. (Only works if one input file is used)
   */
  outputFilename?: string;
  /**
   * Should this step stop the build if the tests fail? Set this to false if you're handling this with a test reporter
   */
  failBuild: any;
  /**
   * Produces class name and test name identical to xcpretty naming in junit file
   */
  xcprettyNaming: any;
  /**
   * Silences all output
   */
  silent: any;
  /**
   * Doesn't include retry attempts in the output
   */
  outputRemoveRetryAttempts: any;
};

/** Shape for [[tryouts]] options argument
 */

type TryoutsOptions = {
  /**
   * Tryouts application hash
   */
  appId: string;
  /**
   * API Token (api_key:api_secret) for Tryouts Access
   */
  apiToken: string;
  /**
   * Path to your IPA or APK file. Optional if you use the _gym_ or _xcodebuild_ action
   */
  buildFile: string;
  /**
   * Release notes
   */
  notes?: string;
  /**
   * Release notes text file path. Overrides the :notes parameter
   */
  notesPath?: string;
  /**
   * Notify testers? 0 for no
   */
  notify: any;
  /**
   * 2 to make your release public. Release will be distributed to available testers. 1 to make your release private. Release won't be distributed to testers. This also prevents release from showing up for SDK update
   */
  status: any;
};

/** Shape for [[twitter]] options argument
 */

type TwitterOptions = {
  /**
   * Consumer Key
   */
  consumerKey: string;
  /**
   * Consumer Secret
   */
  consumerSecret: string;
  /**
   * Access Token
   */
  accessToken: string;
  /**
   * Access Token Secret
   */
  accessTokenSecret: string;
  /**
   * The tweet
   */
  message: string;
};

/** Shape for [[typetalk]] options argument
 */

type TypetalkOptions = {};

/** Shape for [[unlockKeychain]] options argument
 */

type UnlockKeychainOptions = {
  /**
   * Path to the keychain file
   */
  path: string;
  /**
   * Keychain password
   */
  password: string;
  /**
   * Add to keychain search list, valid values are true, false, :add, and :replace
   */
  addToSearchList: string;
  /**
   * Set as default keychain
   */
  setDefault: boolean;
};

/** Shape for [[updateAppGroupIdentifiers]] options argument
 */

type UpdateAppGroupIdentifiersOptions = {
  /**
   * The path to the entitlement file which contains the app group identifiers
   */
  entitlementsFile: string;
  /**
   * An Array of unique identifiers for the app groups. Eg. ['group.com.test.testapp']
   */
  appGroupIdentifiers: string[];
};

/** Shape for [[updateAppIdentifier]] options argument
 */

type UpdateAppIdentifierOptions = {
  /**
   * Path to your Xcode project
   */
  xcodeproj: string;
  /**
   * Path to info plist, relative to your Xcode project
   */
  plistPath: string;
  /**
   * The app Identifier you want to set
   */
  appIdentifier: string;
};

/** Shape for [[updateCodeSigningSettings]] options argument
 */

type UpdateCodeSigningSettingsOptions = {
  /**
   * Path to your Xcode project
   */
  path: string;
  /**
   * Defines if project should use automatic signing
   */
  useAutomaticSigning: boolean;
  /**
   * Team ID, is used when upgrading project
   */
  teamId?: string;
  /**
   * Specify targets you want to toggle the signing mech. (default to all targets)
   */
  targets?: string[];
  /**
   * Specify build_configurations you want to toggle the signing mech. (default to all configurations)
   */
  buildConfigurations?: string[];
  /**
   * Code signing identity type (iPhone Developer, iPhone Distribution)
   */
  codeSignIdentity?: string;
  /**
   * Path to your entitlements file
   */
  entitlementsFilePath?: string;
  /**
   * Provisioning profile name to use for code signing
   */
  profileName?: string;
  /**
   * Provisioning profile UUID to use for code signing
   */
  profileUuid?: string;
  /**
   * Application Product Bundle Identifier
   */
  bundleIdentifier?: string;
};

/** Shape for [[updateFastlane]] options argument
 */

type UpdateFastlaneOptions = {
  /**
   * Don't update during this run. This is used internally
   */
  noUpdate: boolean;
  /**
   * **DEPRECATED!** Nightly builds are no longer being made available - Opt-in to install and use nightly fastlane builds
   */
  nightly?: boolean;
};

/** Shape for [[updateIcloudContainerIdentifiers]] options argument
 */

type UpdateIcloudContainerIdentifiersOptions = {
  /**
   * The path to the entitlement file which contains the iCloud container identifiers
   */
  entitlementsFile: string;
  /**
   * An Array of unique identifiers for the iCloud containers. Eg. ['iCloud.com.test.testapp']
   */
  icloudContainerIdentifiers: string[];
};

/** Shape for [[updateInfoPlist]] options argument
 */

type UpdateInfoPlistOptions = {
  /**
   * Path to your Xcode project
   */
  xcodeproj?: string;
  /**
   * Path to info plist
   */
  plistPath?: string;
  /**
   * Scheme of info plist
   */
  scheme?: string;
  /**
   * The App Identifier of your app
   */
  appIdentifier?: string;
  /**
   * The Display Name of your app
   */
  displayName?: string;
  /**
   * A block to process plist with custom logic
   */
  block?: any;
};

/** Shape for [[updateKeychainAccessGroups]] options argument
 */

type UpdateKeychainAccessGroupsOptions = {
  /**
   * The path to the entitlement file which contains the keychain access groups
   */
  entitlementsFile: string;
  /**
   * An Array of unique identifiers for the keychain access groups. Eg. ['your.keychain.access.groups.identifiers']
   */
  identifiers: string[];
};

/** Shape for [[updatePlist]] options argument
 */

type UpdatePlistOptions = {
  /**
   * Path to plist file
   */
  plistPath?: string;
  /**
   * A block to process plist with custom logic
   */
  block: any;
};

/** Shape for [[updateProjectCodeSigning]] options argument
 */

type UpdateProjectCodeSigningOptions = {
  /**
   * Path to your Xcode project
   */
  path: string;
  /**
   * **DEPRECATED!** Use `:uuid` instead
   */
  udid?: string;
  /**
   * The UUID of the provisioning profile you want to use
   */
  uuid: string;
};

/** Shape for [[updateProjectProvisioning]] options argument
 */

type UpdateProjectProvisioningOptions = {
  /**
   * Path to your Xcode project
   */
  xcodeproj?: string;
  /**
   * Path to provisioning profile (.mobileprovision)
   */
  profile: string;
  /**
   * A filter for the target name. Use a standard regex
   */
  targetFilter?: string;
  /**
   * Legacy option, use 'target_filter' instead
   */
  buildConfigurationFilter?: string;
  /**
   * A filter for the build configuration name. Use a standard regex. Applied to all configurations if not specified
   */
  buildConfiguration?: string;
  /**
   * Path to apple root certificate
   */
  certificate: string;
  /**
   * Code sign identity for build configuration
   */
  codeSigningIdentity?: string;
};

/** Shape for [[updateProjectTeam]] options argument
 */

type UpdateProjectTeamOptions = {
  /**
   * Path to your Xcode project
   */
  path: string;
  /**
   * Name of the targets you want to update
   */
  targets?: string[];
  /**
   * The Team ID you want to use
   */
  teamid: string;
};

/** Shape for [[updateUrbanAirshipConfiguration]] options argument
 */

type UpdateUrbanAirshipConfigurationOptions = {
  /**
   * Path to Urban Airship configuration Plist
   */
  plistPath: string;
  /**
   * The development app key
   */
  developmentAppKey?: string;
  /**
   * The development app secret
   */
  developmentAppSecret?: string;
  /**
   * The production app key
   */
  productionAppKey?: string;
  /**
   * The production app secret
   */
  productionAppSecret?: string;
  /**
   * Automatically detect provisioning mode
   */
  detectProvisioningMode?: boolean;
};

/** Shape for [[updateUrlSchemes]] options argument
 */

type UpdateUrlSchemesOptions = {
  /**
   * The Plist file's path
   */
  path: string;
  /**
   * The new URL schemes
   */
  urlSchemes?: string[];
  /**
   * Block that is called to update schemes with current schemes passed in as parameter
   */
  updateUrlSchemes?: any;
};

/** Shape for [[uploadAppPrivacyDetailsToAppStore]] options argument
 */

type UploadAppPrivacyDetailsToAppStoreOptions = {
  /**
   * Your Apple ID Username for App Store Connect
   */
  username: string;
  /**
   * The bundle identifier of your app
   */
  appIdentifier: string;
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * Path to the app usage data JSON
   */
  jsonPath?: string;
  /**
   * Path to the app usage data JSON file generated by interactive questions
   */
  outputJsonPath: string;
  /**
   * Whether to skip the saving of the JSON file
   */
  skipJsonFileSaving: boolean;
  /**
   * Whether to skip the upload and only create the JSON file with interactive questions
   */
  skipUpload: boolean;
  /**
   * Whether to skip the publishing
   */
  skipPublish: boolean;
};

/** Shape for [[uploadSymbolsToCrashlytics]] options argument
 */

type UploadSymbolsToCrashlyticsOptions = {
  /**
   * Path to the DSYM file or zip to upload
   */
  dsymPath?: string;
  /**
   * Paths to the DSYM files or zips to upload
   */
  dsymPaths?: string[];
  /**
   * Crashlytics API Key
   */
  apiToken?: string;
  /**
   * Path to GoogleService-Info.plist
   */
  gspPath?: string;
  /**
   * Firebase Crashlytics APP ID
   */
  appId?: string;
  /**
   * The path to the upload-symbols file of the Fabric app
   */
  binaryPath?: string;
  /**
   * The platform of the app (ios, appletvos, mac)
   */
  platform: string;
  /**
   * The number of threads to use for simultaneous dSYM upload
   */
  dsymWorkerThreads?: any;
  /**
   * Enable debug mode for upload-symbols
   */
  debug: boolean;
};

/** Shape for [[uploadSymbolsToSentry]] options argument
 */

type UploadSymbolsToSentryOptions = {
  /**
   * API host url for Sentry
   */
  apiHost?: string;
  /**
   * API key for Sentry
   */
  apiKey?: string;
  /**
   * Authentication token for Sentry
   */
  authToken?: string;
  /**
   * Organization slug for Sentry project
   */
  orgSlug: string;
  /**
   * Project slug for Sentry
   */
  projectSlug: string;
  /**
   * Path to your symbols file. For iOS and Mac provide path to app.dSYM.zip
   */
  dsymPath?: string;
  /**
   * Path to an array of your symbols file. For iOS and Mac provide path to app.dSYM.zip
   */
  dsymPaths?: string[];
};

/** Shape for [[uploadToAppStore]] options argument
 */

type UploadToAppStoreOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The bundle identifier of your app
   */
  appIdentifier?: string;
  /**
   * The version that should be edited or created
   */
  appVersion?: string;
  /**
   * Path to your ipa file
   */
  ipa?: string;
  /**
   * Path to your pkg file
   */
  pkg?: string;
  /**
   * If set the given build number (already uploaded to iTC) will be used instead of the current built one
   */
  buildNumber?: string;
  /**
   * The platform to use (optional)
   */
  platform?: string;
  /**
   * Modify live metadata, this option disables ipa upload and screenshot upload
   */
  editLive?: boolean;
  /**
   * Force usage of live version rather than edit version
   */
  useLiveVersion: boolean;
  /**
   * Path to the folder containing the metadata files
   */
  metadataPath?: string;
  /**
   * Path to the folder containing the screenshots
   */
  screenshotsPath?: string;
  /**
   * Skip uploading an ipa or pkg to App Store Connect
   */
  skipBinaryUpload: boolean;
  /**
   * Don't upload the screenshots
   */
  skipScreenshots: boolean;
  /**
   * Don't upload the metadata (e.g. title, description). This will still upload screenshots
   */
  skipMetadata: boolean;
  /**
   * Don’t create or update the app version that is being prepared for submission
   */
  skipAppVersionUpdate: boolean;
  /**
   * Skip verification of HTML preview file
   */
  force: boolean;
  /**
   * Clear all previously uploaded screenshots before uploading the new ones
   */
  overwriteScreenshots: boolean;
  /**
   * Sync screenshots with local ones. This is currently beta optionso set true to 'FASTLANE_ENABLE_BETA_DELIVER_SYNC_SCREENSHOTS' environment variable as well
   */
  syncScreenshots: boolean;
  /**
   * Submit the new version for Review after uploading everything
   */
  submitForReview: boolean;
  /**
   * Rejects the previously submitted build if it's in a state where it's possible
   */
  rejectIfPossible: boolean;
  /**
   * Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
   */
  automaticRelease?: boolean;
  /**
   * Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
   */
  autoReleaseDate?: any;
  /**
   * Enable the phased release feature of iTC
   */
  phasedRelease?: boolean;
  /**
   * Reset the summary rating when you release a new version of the application
   */
  resetRatings?: boolean;
  /**
   * The price tier of this application
   */
  priceTier?: any;
  /**
   * Path to the app rating's config
   */
  appRatingConfigPath?: string;
  /**
   * Extra information for the submission (e.g. compliance specifications, IDFA settings)
   */
  submissionInformation?: { string: string };
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: string;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
   */
  devPortalTeamId?: string;
  /**
   * The name of your Developer Portal team if you're in multiple teams
   */
  devPortalTeamName?: string;
  /**
   * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
   */
  itcProvider?: string;
  /**
   * Run precheck before submitting to app review
   */
  runPrecheckBeforeSubmit: boolean;
  /**
   * The default precheck rule level unless otherwise configured
   */
  precheckDefaultRuleLevel: any;
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
   */
  individualMetadataItems?: string[];
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - Metadata: The path to the app icon
   */
  appIcon?: string;
  /**
   * **DEPRECATED!** Removed after the migration to the new App Store Connect API in June 2020 - Metadata: The path to the Apple Watch app icon
   */
  appleWatchAppIcon?: string;
  /**
   * Metadata: The copyright notice
   */
  copyright?: string;
  /**
   * Metadata: The english name of the primary category (e.g. `Business`, `Books`)
   */
  primaryCategory?: string;
  /**
   * Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
   */
  secondaryCategory?: string;
  /**
   * Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
   */
  primaryFirstSubCategory?: string;
  /**
   * Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
   */
  primarySecondSubCategory?: string;
  /**
   * Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
   */
  secondaryFirstSubCategory?: string;
  /**
   * Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
   */
  secondarySecondSubCategory?: string;
  /**
   * **DEPRECATED!** This is no longer used by App Store Connect - Metadata: A hash containing the trade representative contact information
   */
  tradeRepresentativeContactInformation?: { string: string };
  /**
   * Metadata: A hash containing the review information
   */
  appReviewInformation?: { string: string };
  /**
   * Metadata: Path to the app review attachment file
   */
  appReviewAttachmentFile?: string;
  /**
   * Metadata: The localised app description
   */
  description?: { string: string };
  /**
   * Metadata: The localised app name
   */
  name?: { string: string };
  /**
   * Metadata: The localised app subtitle
   */
  subtitle?: { string: string };
  /**
   * Metadata: An array of localised keywords
   */
  keywords?: { string: string };
  /**
   * Metadata: An array of localised promotional texts
   */
  promotionalText?: { string: string };
  /**
   * Metadata: Localised release notes for this version
   */
  releaseNotes?: { string: string };
  /**
   * Metadata: Localised privacy url
   */
  privacyUrl?: { string: string };
  /**
   * Metadata: Localised Apple TV privacy policy text
   */
  appleTvPrivacyPolicy?: { string: string };
  /**
   * Metadata: Localised support url
   */
  supportUrl?: { string: string };
  /**
   * Metadata: Localised marketing url
   */
  marketingUrl?: { string: string };
  /**
   * Metadata: List of languages to activate
   */
  languages?: string[];
  /**
   * Ignore errors when invalid languages are found in metadata and screenshot directories
   */
  ignoreLanguageDirectoryValidation: boolean;
  /**
   * Should precheck check in-app purchases?
   */
  precheckIncludeInAppPurchases?: boolean;
  /**
   * The (spaceship) app ID of the app you want to use/modify
   */
  app?: any;
};

/** Shape for [[uploadToPlayStore]] options argument
 */

type UploadToPlayStoreOptions = {
  /**
   * The package name of the application to use
   */
  packageName: string;
  /**
   * Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
   */
  versionName?: string;
  /**
   * Version code (used when updating rollout or promoting specific versions)
   */
  versionCode?: any;
  /**
   * Release status (used when uploading new apks/aabs) - valid values are completed, draft, halted, inProgress
   */
  releaseStatus?: string;
  /**
   * The track of the application to use. The default available tracks are: production, beta, alpha, internal
   */
  track: string;
  /**
   * The percentage of the user fraction when uploading to the rollout track (setting to 1 will complete the rollout)
   */
  rollout?: string;
  /**
   * Path to the directory containing the metadata files
   */
  metadataPath?: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
   */
  key?: string;
  /**
   * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
   */
  issuer?: string;
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
  /**
   * Path to the APK file to upload
   */
  apk?: string;
  /**
   * An array of paths to APK files to upload
   */
  apkPaths?: string[];
  /**
   * Path to the AAB file to upload
   */
  aab?: string;
  /**
   * An array of paths to AAB files to upload
   */
  aabPaths?: string[];
  /**
   * Whether to skip uploading APK
   */
  skipUploadApk?: boolean;
  /**
   * Whether to skip uploading AAB
   */
  skipUploadAab?: boolean;
  /**
   * Whether to skip uploading metadata, changelogs not included
   */
  skipUploadMetadata?: boolean;
  /**
   * Whether to skip uploading changelogs
   */
  skipUploadChangelogs?: boolean;
  /**
   * Whether to skip uploading images, screenshots not included
   */
  skipUploadImages?: boolean;
  /**
   * Whether to skip uploading SCREENSHOTS
   */
  skipUploadScreenshots?: boolean;
  /**
   * The track to promote to. The default available tracks are: production, beta, alpha, internal
   */
  trackPromoteTo?: string;
  /**
   * Promoted track release status (used when promoting a track) - valid values are completed, draft, halted, inProgress
   */
  trackPromoteReleaseStatus?: string;
  /**
   * Only validate changes with Google Play rather than actually publish
   */
  validateOnly?: boolean;
  /**
   * Path to the mapping file to upload (mapping.txt or native-debug-symbols.zip alike)
   */
  mapping?: string;
  /**
   * An array of paths to mapping files to upload (mapping.txt or native-debug-symbols.zip alike)
   */
  mappingPaths?: string[];
  /**
   * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
   */
  rootUrl?: string;
  /**
   * **DEPRECATED!** Google Play does this automatically now - Check the other tracks for superseded versions and disable them
   */
  checkSupersededTracks?: boolean;
  /**
   * Timeout for read, open, and send (in seconds)
   */
  timeout?: any;
  /**
   * **DEPRECATED!** Google Play does this automatically now - When promoting to a new track, deactivate the binary in the origin track
   */
  deactivateOnPromote?: boolean;
  /**
   * An array of version codes to retain when publishing a new APK
   */
  versionCodesToRetain?: string[];
  /**
   * Indicates that the changes in this edit will not be reviewed until they are explicitly sent for review from the Google Play Console UI
   */
  changesNotSentForReview: boolean;
  /**
   * Catches changes_not_sent_for_review errors when an edit is committed and retries with the configuration that the error message recommended
   */
  rescueChangesNotSentForReview: boolean;
  /**
   * In-app update priority for all the newly added apks in the release. Can take values between [0,5]
   */
  inAppUpdatePriority?: any;
  /**
   * References version of 'main' expansion file
   */
  obbMainReferencesVersion?: any;
  /**
   * Size of 'main' expansion file in bytes
   */
  obbMainFileSize?: any;
  /**
   * References version of 'patch' expansion file
   */
  obbPatchReferencesVersion?: any;
  /**
   * Size of 'patch' expansion file in bytes
   */
  obbPatchFileSize?: any;
  /**
   * Must be set to true if the bundle installation may trigger a warning on user devices (e.g can only be downloaded over wifi). Typically this is required for bundles over 150MB
   */
  ackBundleInstallationWarning?: boolean;
};

/** Shape for [[uploadToPlayStoreInternalAppSharing]] options argument
 */

type UploadToPlayStoreInternalAppSharingOptions = {
  /**
   * The package name of the application to use
   */
  packageName: string;
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
  /**
   * Path to the APK file to upload
   */
  apk?: string;
  /**
   * An array of paths to APK files to upload
   */
  apkPaths?: string[];
  /**
   * Path to the AAB file to upload
   */
  aab?: string;
  /**
   * An array of paths to AAB files to upload
   */
  aabPaths?: string[];
  /**
   * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
   */
  rootUrl?: string;
  /**
   * Timeout for read, open, and send (in seconds)
   */
  timeout?: any;
};

/** Shape for [[uploadToTestflight]] options argument
 */

type UploadToTestflightOptions = {
  /**
   * Path to your App Store Connect API Key JSON file (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)
   */
  apiKeyPath?: string;
  /**
   * Your App Store Connect API Key information (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-hash-option)
   */
  apiKey?: { string: string };
  /**
   * Your Apple ID Username
   */
  username?: string;
  /**
   * The bundle identifier of the app to upload or manage testers (optional)
   */
  appIdentifier?: string;
  /**
   * The platform to use (optional)
   */
  appPlatform?: string;
  /**
   * Apple ID property in the App Information section in App Store Connect
   */
  appleId?: string;
  /**
   * Path to the ipa file to upload
   */
  ipa?: string;
  /**
   * Path to your pkg file
   */
  pkg?: string;
  /**
   * Do you need a demo account when Apple does review?
   */
  demoAccountRequired?: boolean;
  /**
   * Beta app review information for contact info and demo account
   */
  betaAppReviewInfo?: { string: string };
  /**
   * Localized beta app test info for description, feedback email, marketing url, and privacy policy
   */
  localizedAppInfo?: { string: string };
  /**
   * Provide the 'Beta App Description' when uploading a new build
   */
  betaAppDescription?: string;
  /**
   * Provide the beta app email when uploading a new build
   */
  betaAppFeedbackEmail?: string;
  /**
   * Localized beta app test info for what's new
   */
  localizedBuildInfo?: { string: string };
  /**
   * Provide the 'What to Test' text when uploading a new build
   */
  changelog?: string;
  /**
   * Skip the distributing action of pilot and only upload the ipa file
   */
  skipSubmission: any;
  /**
   * If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
   */
  skipWaitingForBuildProcessing: any;
  /**
   * **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
   */
  updateBuildInfoOnUpload?: any;
  /**
   * Distribute a previously uploaded build (equivalent to the `fastlane pilot distribute` command)
   */
  distributeOnly: boolean;
  /**
   * Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
   */
  usesNonExemptEncryption: boolean;
  /**
   * Should the build be distributed to external testers? If set to true, use of `groups` option is required
   */
  distributeExternal: any;
  /**
   * Should notify external testers? (Not setting a value will use App Store Connect's default which is to notify)
   */
  notifyExternalTesters?: any;
  /**
   * The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
   */
  appVersion?: string;
  /**
   * The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
   */
  buildNumber?: string;
  /**
   * Should expire previous builds?
   */
  expirePreviousBuilds: any;
  /**
   * The tester's first name
   */
  firstName?: string;
  /**
   * The tester's last name
   */
  lastName?: string;
  /**
   * The tester's email
   */
  email?: string;
  /**
   * Path to a CSV file of testers
   */
  testersFilePath?: string;
  /**
   * Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"` This is required when `distribute_external` option is set to true or when we want to add a tester to one or more external testing groups
   */
  groups?: string[];
  /**
   * The ID of your App Store Connect team if you're in multiple teams
   */
  teamId?: any;
  /**
   * The name of your App Store Connect team if you're in multiple teams
   */
  teamName?: string;
  /**
   * The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
   */
  devPortalTeamId?: string;
  /**
   * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
   */
  itcProvider?: string;
  /**
   * Interval in seconds to wait for App Store Connect processing
   */
  waitProcessingInterval: any;
  /**
   * Timeout duration in seconds to wait for App Store Connect processing. If set, after exceeding timeout duration, this will `force stop` to wait for App Store Connect processing and exit with exception
   */
  waitProcessingTimeoutDuration?: any;
  /**
   * **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
   */
  waitForUploadedBuild?: any;
  /**
   * Expire previous if it's 'waiting for review'
   */
  rejectBuildWaitingForReview: any;
  /**
   * Send the build for a beta review
   */
  submitBetaReview: boolean;
};

/** Shape for [[validatePlayStoreJsonKey]] options argument
 */

type ValidatePlayStoreJsonKeyOptions = {
  /**
   * The path to a file containing service account JSON, used to authenticate with Google
   */
  jsonKey?: string;
  /**
   * The raw service account JSON data used to authenticate with Google
   */
  jsonKeyData?: string;
  /**
   * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
   */
  rootUrl?: string;
  /**
   * Timeout for read, open, and send (in seconds)
   */
  timeout?: any;
};

/** Shape for [[verifyBuild]] options argument
 */

type VerifyBuildOptions = {
  /**
   * Required type of provisioning
   */
  provisioningType?: string;
  /**
   * Required UUID of provisioning profile
   */
  provisioningUuid?: string;
  /**
   * Required team identifier
   */
  teamIdentifier?: string;
  /**
   * Required team name
   */
  teamName?: string;
  /**
   * Required app name
   */
  appName?: string;
  /**
   * Required bundle identifier
   */
  bundleIdentifier?: string;
  /**
   * Explicitly set the ipa path
   */
  ipaPath?: string;
  /**
   * Explicitly set the ipa, app or xcarchive path
   */
  buildPath?: string;
};

/** Shape for [[verifyPodKeys]] options argument
 */

type VerifyPodKeysOptions = {};

/** Shape for [[verifyXcode]] options argument
 */

type VerifyXcodeOptions = {
  /**
   * The path to the Xcode installation to test
   */
  xcodePath: string;
};

/** Shape for [[versionBumpPodspec]] options argument
 */

type VersionBumpPodspecOptions = {
  /**
   * You must specify the path to the podspec file to update
   */
  path: string;
  /**
   * The type of this version bump. Available: patch, minor, major
   */
  bumpType: string;
  /**
   * Change to a specific version. This will replace the bump type value
   */
  versionNumber?: string;
  /**
   * Change version appendix to a specific value. For example 1.4.14.4.1 -> 1.4.14.5
   */
  versionAppendix?: string;
  /**
   * true by default, this is used for non CocoaPods version bumps only
   */
  requireVariablePrefix: boolean;
};

/** Shape for [[versionGetPodspec]] options argument
 */

type VersionGetPodspecOptions = {
  /**
   * You must specify the path to the podspec file
   */
  path: string;
  /**
   * true by default, this is used for non CocoaPods version bumps only
   */
  requireVariablePrefix: boolean;
};

/** Shape for [[xcarchive]] options argument
 */

type XcarchiveOptions = {};

/** Shape for [[xcbuild]] options argument
 */

type XcbuildOptions = {};

/** Shape for [[xcclean]] options argument
 */

type XccleanOptions = {};

/** Shape for [[xcexport]] options argument
 */

type XcexportOptions = {};

/** Shape for [[xcodeInstall]] options argument
 */

type XcodeInstallOptions = {
  /**
   * The version number of the version of Xcode to install
   */
  version: string;
  /**
   * Your Apple ID Username
   */
  username: string;
  /**
   * The ID of your team if you're in multiple teams
   */
  teamId?: string;
  /**
   * Number of times the download will be retried in case of failure
   */
  downloadRetryAttempts: any;
};

/** Shape for [[xcodeSelect]] options argument
 */

type XcodeSelectOptions = {};

/** Shape for [[xcodeServerGetAssets]] options argument
 */

type XcodeServerGetAssetsOptions = {
  /**
   * IP Address/Hostname of Xcode Server
   */
  host: string;
  /**
   * Name of the Bot to pull assets from
   */
  botName: string;
  /**
   * Optionally you can override which integration's assets should be downloaded. If not provided, the latest integration is used
   */
  integrationNumber?: any;
  /**
   * Username for your Xcode Server
   */
  username?: string;
  /**
   * Password for your Xcode Server
   */
  password?: string;
  /**
   * Relative path to a folder into which to download assets
   */
  targetFolder?: string;
  /**
   * Whether to keep all assets or let the script delete everything except for the .xcarchive
   */
  keepAllAssets?: boolean;
  /**
   * Whether to trust self-signed certs on your Xcode Server
   */
  trustSelfSignedCerts?: boolean;
};

/** Shape for [[xcodebuild]] options argument
 */

type XcodebuildOptions = {};

/** Shape for [[xcov]] options argument
 */

type XcovOptions = {};

/** Shape for [[xctest]] options argument
 */

type XctestOptions = {};

/** Shape for [[xctool]] options argument
 */

type XctoolOptions = {};

/** Shape for [[xcversion]] options argument
 */

type XcversionOptions = {
  /**
   * The version of Xcode to select specified as a Gem::Version requirement string (e.g. '~> 7.1.0')
   */
  version: string;
};

/** Shape for [[zip]] options argument
 */

type ZipOptions = {
  /**
   * Path to the directory or file to be zipped
   */
  path: string;
  /**
   * The name of the resulting zip file
   */
  outputPath?: string;
  /**
   * Enable verbose output of zipped file
   */
  verbose?: boolean;
  /**
   * Encrypt the contents of the zip archive using a password
   */
  password?: string;
  /**
   * Store symbolic links as such in the zip archive
   */
  symlinks?: boolean;
  /**
   * Array of paths or patterns to include
   */
  include?: string[];
  /**
   * Array of paths or patterns to exclude
   */
  exclude?: string[];
};

/** @ignore */
type convertedAdbOptions = {
  serial: string;
  command?: string;
  adb_path?: string;
};
/** @ignore Convert AdbOptions to the shape used by the Fastlane service
 */
function convertAdbOptions(options: AdbOptions): convertedAdbOptions {
  const temp: convertedAdbOptions = {
    serial: options.serial,
  };
  if (typeof options.command !== "undefined") temp["command"] = options.command;
  if (typeof options.adbPath !== "undefined")
    temp["adb_path"] = options.adbPath;
  return temp;
}

/** @ignore */
type convertedAdbDevicesOptions = {
  adb_path?: string;
};
/** @ignore Convert AdbDevicesOptions to the shape used by the Fastlane service
 */
function convertAdbDevicesOptions(
  options: AdbDevicesOptions
): convertedAdbDevicesOptions {
  const temp: convertedAdbDevicesOptions = {};
  if (typeof options.adbPath !== "undefined")
    temp["adb_path"] = options.adbPath;
  return temp;
}

/** @ignore */
type convertedAddExtraPlatformsOptions = {
  platforms: string[];
};
/** @ignore Convert AddExtraPlatformsOptions to the shape used by the Fastlane service
 */
function convertAddExtraPlatformsOptions(
  options: AddExtraPlatformsOptions
): convertedAddExtraPlatformsOptions {
  const temp: convertedAddExtraPlatformsOptions = {
    platforms: options.platforms,
  };

  return temp;
}

/** @ignore */
type convertedAddGitTagOptions = {
  tag?: string;
  grouping: string;
  includes_lane: boolean;
  prefix: string;
  postfix: string;
  build_number?: string;
  message?: string;
  commit?: string;
  force?: boolean;
  sign?: boolean;
};
/** @ignore Convert AddGitTagOptions to the shape used by the Fastlane service
 */
function convertAddGitTagOptions(
  options: AddGitTagOptions
): convertedAddGitTagOptions {
  const temp: convertedAddGitTagOptions = {
    grouping: options.grouping,
    includes_lane: options.includesLane,
    prefix: options.prefix,
    postfix: options.postfix,
  };
  if (typeof options.tag !== "undefined") temp["tag"] = options.tag;
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.message !== "undefined") temp["message"] = options.message;
  if (typeof options.commit !== "undefined") temp["commit"] = options.commit;
  if (typeof options.force !== "undefined") temp["force"] = options.force;
  if (typeof options.sign !== "undefined") temp["sign"] = options.sign;
  return temp;
}

/** @ignore */
type convertedAppStoreBuildNumberOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  initial_build_number: string;
  app_identifier: string;
  username?: string;
  team_id?: string;
  live?: boolean;
  version?: string;
  platform?: string;
  team_name?: string;
};
/** @ignore Convert AppStoreBuildNumberOptions to the shape used by the Fastlane service
 */
function convertAppStoreBuildNumberOptions(
  options: AppStoreBuildNumberOptions
): convertedAppStoreBuildNumberOptions {
  const temp: convertedAppStoreBuildNumberOptions = {
    initial_build_number: options.initialBuildNumber,
    app_identifier: options.appIdentifier,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.live !== "undefined") temp["live"] = options.live;
  if (typeof options.version !== "undefined") temp["version"] = options.version;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  return temp;
}

/** @ignore */
type convertedAppStoreConnectApiKeyOptions = {
  key_id: string;
  issuer_id: string;
  key_filepath?: string;
  key_content?: string;
  is_key_content_base64: boolean;
  duration?: any;
  in_house: boolean;
  set_spaceship_token: boolean;
};
/** @ignore Convert AppStoreConnectApiKeyOptions to the shape used by the Fastlane service
 */
function convertAppStoreConnectApiKeyOptions(
  options: AppStoreConnectApiKeyOptions
): convertedAppStoreConnectApiKeyOptions {
  const temp: convertedAppStoreConnectApiKeyOptions = {
    key_id: options.keyId,
    issuer_id: options.issuerId,
    is_key_content_base64: options.isKeyContentBase64,
    in_house: options.inHouse,
    set_spaceship_token: options.setSpaceshipToken,
  };
  if (typeof options.keyFilepath !== "undefined")
    temp["key_filepath"] = options.keyFilepath;
  if (typeof options.keyContent !== "undefined")
    temp["key_content"] = options.keyContent;
  if (typeof options.duration !== "undefined")
    temp["duration"] = options.duration;
  return temp;
}

/** @ignore */
type convertedAppaloosaOptions = {
  binary: string;
  api_token: string;
  store_id: string;
  group_ids?: string;
  screenshots: string;
  locale?: string;
  device?: string;
  description?: string;
  changelog?: string;
};
/** @ignore Convert AppaloosaOptions to the shape used by the Fastlane service
 */
function convertAppaloosaOptions(
  options: AppaloosaOptions
): convertedAppaloosaOptions {
  const temp: convertedAppaloosaOptions = {
    binary: options.binary,
    api_token: options.apiToken,
    store_id: options.storeId,
    screenshots: options.screenshots,
  };
  if (typeof options.groupIds !== "undefined")
    temp["group_ids"] = options.groupIds;
  if (typeof options.locale !== "undefined") temp["locale"] = options.locale;
  if (typeof options.device !== "undefined") temp["device"] = options.device;
  if (typeof options.description !== "undefined")
    temp["description"] = options.description;
  if (typeof options.changelog !== "undefined")
    temp["changelog"] = options.changelog;
  return temp;
}

/** @ignore */
type convertedAppetizeOptions = {
  api_host: string;
  api_token: string;
  url?: string;
  platform: string;
  path?: string;
  public_key?: string;
  note?: string;
  timeout?: any;
};
/** @ignore Convert AppetizeOptions to the shape used by the Fastlane service
 */
function convertAppetizeOptions(
  options: AppetizeOptions
): convertedAppetizeOptions {
  const temp: convertedAppetizeOptions = {
    api_host: options.apiHost,
    api_token: options.apiToken,
    platform: options.platform,
  };
  if (typeof options.url !== "undefined") temp["url"] = options.url;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.publicKey !== "undefined")
    temp["public_key"] = options.publicKey;
  if (typeof options.note !== "undefined") temp["note"] = options.note;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedAppetizeViewingUrlGeneratorOptions = {
  public_key: string;
  base_url?: string;
  device: string;
  scale?: string;
  orientation: string;
  language?: string;
  color: string;
  launch_url?: string;
  os_version?: string;
  params?: string;
  proxy?: string;
};
/** @ignore Convert AppetizeViewingUrlGeneratorOptions to the shape used by the Fastlane service
 */
function convertAppetizeViewingUrlGeneratorOptions(
  options: AppetizeViewingUrlGeneratorOptions
): convertedAppetizeViewingUrlGeneratorOptions {
  const temp: convertedAppetizeViewingUrlGeneratorOptions = {
    public_key: options.publicKey,
    device: options.device,
    orientation: options.orientation,
    color: options.color,
  };
  if (typeof options.baseUrl !== "undefined")
    temp["base_url"] = options.baseUrl;
  if (typeof options.scale !== "undefined") temp["scale"] = options.scale;
  if (typeof options.language !== "undefined")
    temp["language"] = options.language;
  if (typeof options.launchUrl !== "undefined")
    temp["launch_url"] = options.launchUrl;
  if (typeof options.osVersion !== "undefined")
    temp["os_version"] = options.osVersion;
  if (typeof options.params !== "undefined") temp["params"] = options.params;
  if (typeof options.proxy !== "undefined") temp["proxy"] = options.proxy;
  return temp;
}

/** @ignore */
type convertedAppiumOptions = {
  platform: string;
  spec_path: string;
  app_path: string;
  invoke_appium_server?: boolean;
  host?: string;
  port?: any;
  appium_path?: string;
  caps?: { string: string };
  appium_lib?: { string: string };
};
/** @ignore Convert AppiumOptions to the shape used by the Fastlane service
 */
function convertAppiumOptions(options: AppiumOptions): convertedAppiumOptions {
  const temp: convertedAppiumOptions = {
    platform: options.platform,
    spec_path: options.specPath,
    app_path: options.appPath,
  };
  if (typeof options.invokeAppiumServer !== "undefined")
    temp["invoke_appium_server"] = options.invokeAppiumServer;
  if (typeof options.host !== "undefined") temp["host"] = options.host;
  if (typeof options.port !== "undefined") temp["port"] = options.port;
  if (typeof options.appiumPath !== "undefined")
    temp["appium_path"] = options.appiumPath;
  if (typeof options.caps !== "undefined") temp["caps"] = options.caps;
  if (typeof options.appiumLib !== "undefined")
    temp["appium_lib"] = options.appiumLib;
  return temp;
}

/** @ignore */
type convertedAppledocOptions = {
  input: string[];
  output?: string;
  templates?: string;
  docset_install_path?: string;
  include?: string;
  ignore?: string[];
  exclude_output?: string[];
  index_desc?: string;
  project_name: string;
  project_version?: string;
  project_company: string;
  company_id?: string;
  create_html: boolean;
  create_docset: boolean;
  install_docset: boolean;
  publish_docset: boolean;
  no_create_docset: boolean;
  html_anchors?: string;
  clean_output: boolean;
  docset_bundle_id?: string;
  docset_bundle_name?: string;
  docset_desc?: string;
  docset_copyright?: string;
  docset_feed_name?: string;
  docset_feed_url?: string;
  docset_feed_formats?: string;
  docset_package_url?: string;
  docset_fallback_url?: string;
  docset_publisher_id?: string;
  docset_publisher_name?: string;
  docset_min_xcode_version?: string;
  docset_platform_family?: string;
  docset_cert_issuer?: string;
  docset_cert_signer?: string;
  docset_bundle_filename?: string;
  docset_atom_filename?: string;
  docset_xml_filename?: string;
  docset_package_filename?: string;
  options?: string;
  crossref_format?: string;
  exit_threshold?: any;
  docs_section_title?: string;
  warnings?: string;
  logformat?: any;
  verbose?: string;
};
/** @ignore Convert AppledocOptions to the shape used by the Fastlane service
 */
function convertAppledocOptions(
  options: AppledocOptions
): convertedAppledocOptions {
  const temp: convertedAppledocOptions = {
    input: options.input,
    project_name: options.projectName,
    project_company: options.projectCompany,
    create_html: options.createHtml,
    create_docset: options.createDocset,
    install_docset: options.installDocset,
    publish_docset: options.publishDocset,
    no_create_docset: options.noCreateDocset,
    clean_output: options.cleanOutput,
  };
  if (typeof options.output !== "undefined") temp["output"] = options.output;
  if (typeof options.templates !== "undefined")
    temp["templates"] = options.templates;
  if (typeof options.docsetInstallPath !== "undefined")
    temp["docset_install_path"] = options.docsetInstallPath;
  if (typeof options.include !== "undefined") temp["include"] = options.include;
  if (typeof options.ignore !== "undefined") temp["ignore"] = options.ignore;
  if (typeof options.excludeOutput !== "undefined")
    temp["exclude_output"] = options.excludeOutput;
  if (typeof options.indexDesc !== "undefined")
    temp["index_desc"] = options.indexDesc;
  if (typeof options.projectVersion !== "undefined")
    temp["project_version"] = options.projectVersion;
  if (typeof options.companyId !== "undefined")
    temp["company_id"] = options.companyId;
  if (typeof options.htmlAnchors !== "undefined")
    temp["html_anchors"] = options.htmlAnchors;
  if (typeof options.docsetBundleId !== "undefined")
    temp["docset_bundle_id"] = options.docsetBundleId;
  if (typeof options.docsetBundleName !== "undefined")
    temp["docset_bundle_name"] = options.docsetBundleName;
  if (typeof options.docsetDesc !== "undefined")
    temp["docset_desc"] = options.docsetDesc;
  if (typeof options.docsetCopyright !== "undefined")
    temp["docset_copyright"] = options.docsetCopyright;
  if (typeof options.docsetFeedName !== "undefined")
    temp["docset_feed_name"] = options.docsetFeedName;
  if (typeof options.docsetFeedUrl !== "undefined")
    temp["docset_feed_url"] = options.docsetFeedUrl;
  if (typeof options.docsetFeedFormats !== "undefined")
    temp["docset_feed_formats"] = options.docsetFeedFormats;
  if (typeof options.docsetPackageUrl !== "undefined")
    temp["docset_package_url"] = options.docsetPackageUrl;
  if (typeof options.docsetFallbackUrl !== "undefined")
    temp["docset_fallback_url"] = options.docsetFallbackUrl;
  if (typeof options.docsetPublisherId !== "undefined")
    temp["docset_publisher_id"] = options.docsetPublisherId;
  if (typeof options.docsetPublisherName !== "undefined")
    temp["docset_publisher_name"] = options.docsetPublisherName;
  if (typeof options.docsetMinXcodeVersion !== "undefined")
    temp["docset_min_xcode_version"] = options.docsetMinXcodeVersion;
  if (typeof options.docsetPlatformFamily !== "undefined")
    temp["docset_platform_family"] = options.docsetPlatformFamily;
  if (typeof options.docsetCertIssuer !== "undefined")
    temp["docset_cert_issuer"] = options.docsetCertIssuer;
  if (typeof options.docsetCertSigner !== "undefined")
    temp["docset_cert_signer"] = options.docsetCertSigner;
  if (typeof options.docsetBundleFilename !== "undefined")
    temp["docset_bundle_filename"] = options.docsetBundleFilename;
  if (typeof options.docsetAtomFilename !== "undefined")
    temp["docset_atom_filename"] = options.docsetAtomFilename;
  if (typeof options.docsetXmlFilename !== "undefined")
    temp["docset_xml_filename"] = options.docsetXmlFilename;
  if (typeof options.docsetPackageFilename !== "undefined")
    temp["docset_package_filename"] = options.docsetPackageFilename;
  if (typeof options.options !== "undefined") temp["options"] = options.options;
  if (typeof options.crossrefFormat !== "undefined")
    temp["crossref_format"] = options.crossrefFormat;
  if (typeof options.exitThreshold !== "undefined")
    temp["exit_threshold"] = options.exitThreshold;
  if (typeof options.docsSectionTitle !== "undefined")
    temp["docs_section_title"] = options.docsSectionTitle;
  if (typeof options.warnings !== "undefined")
    temp["warnings"] = options.warnings;
  if (typeof options.logformat !== "undefined")
    temp["logformat"] = options.logformat;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  return temp;
}

/** @ignore */
type convertedAppstoreOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  app_identifier?: string;
  app_version?: string;
  ipa?: string;
  pkg?: string;
  build_number?: string;
  platform?: string;
  edit_live?: boolean;
  use_live_version: boolean;
  metadata_path?: string;
  screenshots_path?: string;
  skip_binary_upload: boolean;
  skip_screenshots: boolean;
  skip_metadata: boolean;
  skip_app_version_update: boolean;
  force: boolean;
  overwrite_screenshots: boolean;
  sync_screenshots: boolean;
  submit_for_review: boolean;
  reject_if_possible: boolean;
  automatic_release?: boolean;
  auto_release_date?: any;
  phased_release?: boolean;
  reset_ratings?: boolean;
  price_tier?: any;
  app_rating_config_path?: string;
  submission_information?: { string: string };
  team_id?: string;
  team_name?: string;
  dev_portal_team_id?: string;
  dev_portal_team_name?: string;
  itc_provider?: string;
  run_precheck_before_submit: boolean;
  precheck_default_rule_level: any;
  individual_metadata_items?: string[];
  app_icon?: string;
  apple_watch_app_icon?: string;
  copyright?: string;
  primary_category?: string;
  secondary_category?: string;
  primary_first_sub_category?: string;
  primary_second_sub_category?: string;
  secondary_first_sub_category?: string;
  secondary_second_sub_category?: string;
  trade_representative_contact_information?: { string: string };
  app_review_information?: { string: string };
  app_review_attachment_file?: string;
  description?: { string: string };
  name?: { string: string };
  subtitle?: { string: string };
  keywords?: { string: string };
  promotional_text?: { string: string };
  release_notes?: { string: string };
  privacy_url?: { string: string };
  apple_tv_privacy_policy?: { string: string };
  support_url?: { string: string };
  marketing_url?: { string: string };
  languages?: string[];
  ignore_language_directory_validation: boolean;
  precheck_include_in_app_purchases?: boolean;
  app?: any;
};
/** @ignore Convert AppstoreOptions to the shape used by the Fastlane service
 */
function convertAppstoreOptions(
  options: AppstoreOptions
): convertedAppstoreOptions {
  const temp: convertedAppstoreOptions = {
    use_live_version: options.useLiveVersion,
    skip_binary_upload: options.skipBinaryUpload,
    skip_screenshots: options.skipScreenshots,
    skip_metadata: options.skipMetadata,
    skip_app_version_update: options.skipAppVersionUpdate,
    force: options.force,
    overwrite_screenshots: options.overwriteScreenshots,
    sync_screenshots: options.syncScreenshots,
    submit_for_review: options.submitForReview,
    reject_if_possible: options.rejectIfPossible,
    run_precheck_before_submit: options.runPrecheckBeforeSubmit,
    precheck_default_rule_level: options.precheckDefaultRuleLevel,
    ignore_language_directory_validation:
      options.ignoreLanguageDirectoryValidation,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.appVersion !== "undefined")
    temp["app_version"] = options.appVersion;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.pkg !== "undefined") temp["pkg"] = options.pkg;
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.editLive !== "undefined")
    temp["edit_live"] = options.editLive;
  if (typeof options.metadataPath !== "undefined")
    temp["metadata_path"] = options.metadataPath;
  if (typeof options.screenshotsPath !== "undefined")
    temp["screenshots_path"] = options.screenshotsPath;
  if (typeof options.automaticRelease !== "undefined")
    temp["automatic_release"] = options.automaticRelease;
  if (typeof options.autoReleaseDate !== "undefined")
    temp["auto_release_date"] = options.autoReleaseDate;
  if (typeof options.phasedRelease !== "undefined")
    temp["phased_release"] = options.phasedRelease;
  if (typeof options.resetRatings !== "undefined")
    temp["reset_ratings"] = options.resetRatings;
  if (typeof options.priceTier !== "undefined")
    temp["price_tier"] = options.priceTier;
  if (typeof options.appRatingConfigPath !== "undefined")
    temp["app_rating_config_path"] = options.appRatingConfigPath;
  if (typeof options.submissionInformation !== "undefined")
    temp["submission_information"] = options.submissionInformation;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.devPortalTeamId !== "undefined")
    temp["dev_portal_team_id"] = options.devPortalTeamId;
  if (typeof options.devPortalTeamName !== "undefined")
    temp["dev_portal_team_name"] = options.devPortalTeamName;
  if (typeof options.itcProvider !== "undefined")
    temp["itc_provider"] = options.itcProvider;
  if (typeof options.individualMetadataItems !== "undefined")
    temp["individual_metadata_items"] = options.individualMetadataItems;
  if (typeof options.appIcon !== "undefined")
    temp["app_icon"] = options.appIcon;
  if (typeof options.appleWatchAppIcon !== "undefined")
    temp["apple_watch_app_icon"] = options.appleWatchAppIcon;
  if (typeof options.copyright !== "undefined")
    temp["copyright"] = options.copyright;
  if (typeof options.primaryCategory !== "undefined")
    temp["primary_category"] = options.primaryCategory;
  if (typeof options.secondaryCategory !== "undefined")
    temp["secondary_category"] = options.secondaryCategory;
  if (typeof options.primaryFirstSubCategory !== "undefined")
    temp["primary_first_sub_category"] = options.primaryFirstSubCategory;
  if (typeof options.primarySecondSubCategory !== "undefined")
    temp["primary_second_sub_category"] = options.primarySecondSubCategory;
  if (typeof options.secondaryFirstSubCategory !== "undefined")
    temp["secondary_first_sub_category"] = options.secondaryFirstSubCategory;
  if (typeof options.secondarySecondSubCategory !== "undefined")
    temp["secondary_second_sub_category"] = options.secondarySecondSubCategory;
  if (typeof options.tradeRepresentativeContactInformation !== "undefined")
    temp["trade_representative_contact_information"] =
      options.tradeRepresentativeContactInformation;
  if (typeof options.appReviewInformation !== "undefined")
    temp["app_review_information"] = options.appReviewInformation;
  if (typeof options.appReviewAttachmentFile !== "undefined")
    temp["app_review_attachment_file"] = options.appReviewAttachmentFile;
  if (typeof options.description !== "undefined")
    temp["description"] = options.description;
  if (typeof options.name !== "undefined") temp["name"] = options.name;
  if (typeof options.subtitle !== "undefined")
    temp["subtitle"] = options.subtitle;
  if (typeof options.keywords !== "undefined")
    temp["keywords"] = options.keywords;
  if (typeof options.promotionalText !== "undefined")
    temp["promotional_text"] = options.promotionalText;
  if (typeof options.releaseNotes !== "undefined")
    temp["release_notes"] = options.releaseNotes;
  if (typeof options.privacyUrl !== "undefined")
    temp["privacy_url"] = options.privacyUrl;
  if (typeof options.appleTvPrivacyPolicy !== "undefined")
    temp["apple_tv_privacy_policy"] = options.appleTvPrivacyPolicy;
  if (typeof options.supportUrl !== "undefined")
    temp["support_url"] = options.supportUrl;
  if (typeof options.marketingUrl !== "undefined")
    temp["marketing_url"] = options.marketingUrl;
  if (typeof options.languages !== "undefined")
    temp["languages"] = options.languages;
  if (typeof options.precheckIncludeInAppPurchases !== "undefined")
    temp["precheck_include_in_app_purchases"] =
      options.precheckIncludeInAppPurchases;
  if (typeof options.app !== "undefined") temp["app"] = options.app;
  return temp;
}

/** @ignore */
type convertedApteligentOptions = {
  dsym?: string;
  app_id: string;
  api_key: string;
};
/** @ignore Convert ApteligentOptions to the shape used by the Fastlane service
 */
function convertApteligentOptions(
  options: ApteligentOptions
): convertedApteligentOptions {
  const temp: convertedApteligentOptions = {
    app_id: options.appId,
    api_key: options.apiKey,
  };
  if (typeof options.dsym !== "undefined") temp["dsym"] = options.dsym;
  return temp;
}

/** @ignore */
type convertedArtifactoryOptions = {
  file: string;
  repo: string;
  repo_path: string;
  endpoint: string;
  username?: string;
  password?: string;
  api_key?: string;
  properties?: { string: string };
  ssl_pem_file?: string;
  ssl_verify?: boolean;
  proxy_username?: string;
  proxy_password?: string;
  proxy_address?: string;
  proxy_port?: string;
  read_timeout?: string;
};
/** @ignore Convert ArtifactoryOptions to the shape used by the Fastlane service
 */
function convertArtifactoryOptions(
  options: ArtifactoryOptions
): convertedArtifactoryOptions {
  const temp: convertedArtifactoryOptions = {
    file: options.file,
    repo: options.repo,
    repo_path: options.repoPath,
    endpoint: options.endpoint,
  };
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.password !== "undefined")
    temp["password"] = options.password;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.properties !== "undefined")
    temp["properties"] = options.properties;
  if (typeof options.sslPemFile !== "undefined")
    temp["ssl_pem_file"] = options.sslPemFile;
  if (typeof options.sslVerify !== "undefined")
    temp["ssl_verify"] = options.sslVerify;
  if (typeof options.proxyUsername !== "undefined")
    temp["proxy_username"] = options.proxyUsername;
  if (typeof options.proxyPassword !== "undefined")
    temp["proxy_password"] = options.proxyPassword;
  if (typeof options.proxyAddress !== "undefined")
    temp["proxy_address"] = options.proxyAddress;
  if (typeof options.proxyPort !== "undefined")
    temp["proxy_port"] = options.proxyPort;
  if (typeof options.readTimeout !== "undefined")
    temp["read_timeout"] = options.readTimeout;
  return temp;
}

/** @ignore */
type convertedAutomaticCodeSigningOptions = {
  path: string;
  use_automatic_signing: boolean;
  team_id?: string;
  targets?: string[];
  code_sign_identity?: string;
  profile_name?: string;
  profile_uuid?: string;
  bundle_identifier?: string;
};
/** @ignore Convert AutomaticCodeSigningOptions to the shape used by the Fastlane service
 */
function convertAutomaticCodeSigningOptions(
  options: AutomaticCodeSigningOptions
): convertedAutomaticCodeSigningOptions {
  const temp: convertedAutomaticCodeSigningOptions = {
    path: options.path,
    use_automatic_signing: options.useAutomaticSigning,
  };
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.targets !== "undefined") temp["targets"] = options.targets;
  if (typeof options.codeSignIdentity !== "undefined")
    temp["code_sign_identity"] = options.codeSignIdentity;
  if (typeof options.profileName !== "undefined")
    temp["profile_name"] = options.profileName;
  if (typeof options.profileUuid !== "undefined")
    temp["profile_uuid"] = options.profileUuid;
  if (typeof options.bundleIdentifier !== "undefined")
    temp["bundle_identifier"] = options.bundleIdentifier;
  return temp;
}

/** @ignore */
type convertedBackupFileOptions = {
  path: string;
};
/** @ignore Convert BackupFileOptions to the shape used by the Fastlane service
 */
function convertBackupFileOptions(
  options: BackupFileOptions
): convertedBackupFileOptions {
  const temp: convertedBackupFileOptions = {
    path: options.path,
  };

  return temp;
}

/** @ignore */
type convertedBackupXcarchiveOptions = {
  xcarchive: string;
  destination: string;
  zip?: boolean;
  zip_filename?: string;
  versioned?: boolean;
};
/** @ignore Convert BackupXcarchiveOptions to the shape used by the Fastlane service
 */
function convertBackupXcarchiveOptions(
  options: BackupXcarchiveOptions
): convertedBackupXcarchiveOptions {
  const temp: convertedBackupXcarchiveOptions = {
    xcarchive: options.xcarchive,
    destination: options.destination,
  };
  if (typeof options.zip !== "undefined") temp["zip"] = options.zip;
  if (typeof options.zipFilename !== "undefined")
    temp["zip_filename"] = options.zipFilename;
  if (typeof options.versioned !== "undefined")
    temp["versioned"] = options.versioned;
  return temp;
}

/** @ignore */
type convertedBadgeOptions = {
  dark?: boolean;
  custom?: string;
  no_badge?: boolean;
  shield?: string;
  alpha?: boolean;
  path?: string;
  shield_io_timeout?: any;
  glob?: string;
  alpha_channel?: boolean;
  shield_gravity?: string;
  shield_no_resize?: boolean;
};
/** @ignore Convert BadgeOptions to the shape used by the Fastlane service
 */
function convertBadgeOptions(options: BadgeOptions): convertedBadgeOptions {
  const temp: convertedBadgeOptions = {};
  if (typeof options.dark !== "undefined") temp["dark"] = options.dark;
  if (typeof options.custom !== "undefined") temp["custom"] = options.custom;
  if (typeof options.noBadge !== "undefined")
    temp["no_badge"] = options.noBadge;
  if (typeof options.shield !== "undefined") temp["shield"] = options.shield;
  if (typeof options.alpha !== "undefined") temp["alpha"] = options.alpha;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.shieldIoTimeout !== "undefined")
    temp["shield_io_timeout"] = options.shieldIoTimeout;
  if (typeof options.glob !== "undefined") temp["glob"] = options.glob;
  if (typeof options.alphaChannel !== "undefined")
    temp["alpha_channel"] = options.alphaChannel;
  if (typeof options.shieldGravity !== "undefined")
    temp["shield_gravity"] = options.shieldGravity;
  if (typeof options.shieldNoResize !== "undefined")
    temp["shield_no_resize"] = options.shieldNoResize;
  return temp;
}

/** @ignore */
type convertedBuildAndUploadToAppetizeOptions = {
  xcodebuild?: { string: string };
  scheme?: string;
  api_token: string;
  public_key?: string;
  note?: string;
  timeout?: any;
};
/** @ignore Convert BuildAndUploadToAppetizeOptions to the shape used by the Fastlane service
 */
function convertBuildAndUploadToAppetizeOptions(
  options: BuildAndUploadToAppetizeOptions
): convertedBuildAndUploadToAppetizeOptions {
  const temp: convertedBuildAndUploadToAppetizeOptions = {
    api_token: options.apiToken,
  };
  if (typeof options.xcodebuild !== "undefined")
    temp["xcodebuild"] = options.xcodebuild;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.publicKey !== "undefined")
    temp["public_key"] = options.publicKey;
  if (typeof options.note !== "undefined") temp["note"] = options.note;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedBuildAndroidAppOptions = {
  task?: string;
  flavor?: string;
  build_type?: string;
  tasks?: string[];
  flags?: string;
  project_dir: string;
  gradle_path?: string;
  properties?: { string: string };
  system_properties?: { string: string };
  serial: string;
  print_command: boolean;
  print_command_output: boolean;
};
/** @ignore Convert BuildAndroidAppOptions to the shape used by the Fastlane service
 */
function convertBuildAndroidAppOptions(
  options: BuildAndroidAppOptions
): convertedBuildAndroidAppOptions {
  const temp: convertedBuildAndroidAppOptions = {
    project_dir: options.projectDir,
    serial: options.serial,
    print_command: options.printCommand,
    print_command_output: options.printCommandOutput,
  };
  if (typeof options.task !== "undefined") temp["task"] = options.task;
  if (typeof options.flavor !== "undefined") temp["flavor"] = options.flavor;
  if (typeof options.buildType !== "undefined")
    temp["build_type"] = options.buildType;
  if (typeof options.tasks !== "undefined") temp["tasks"] = options.tasks;
  if (typeof options.flags !== "undefined") temp["flags"] = options.flags;
  if (typeof options.gradlePath !== "undefined")
    temp["gradle_path"] = options.gradlePath;
  if (typeof options.properties !== "undefined")
    temp["properties"] = options.properties;
  if (typeof options.systemProperties !== "undefined")
    temp["system_properties"] = options.systemProperties;
  return temp;
}

/** @ignore */
type convertedBuildAppOptions = {
  workspace?: string;
  project?: string;
  scheme?: string;
  clean: boolean;
  output_directory: string;
  output_name?: string;
  configuration?: string;
  silent: boolean;
  codesigning_identity?: string;
  skip_package_ipa: boolean;
  skip_package_pkg: boolean;
  include_symbols?: boolean;
  include_bitcode?: boolean;
  export_method?: string;
  export_options?: { string: string };
  export_xcargs?: string;
  skip_build_archive?: boolean;
  skip_archive?: boolean;
  skip_codesigning?: boolean;
  catalyst_platform?: string;
  installer_cert_name?: string;
  build_path?: string;
  archive_path?: string;
  derived_data_path?: string;
  result_bundle?: boolean;
  result_bundle_path?: string;
  buildlog_path: string;
  sdk?: string;
  toolchain?: string;
  destination?: string;
  export_team_id?: string;
  xcargs?: string;
  xcconfig?: string;
  suppress_xcode_output?: boolean;
  xcodebuild_formatter: string;
  disable_xcpretty?: boolean;
  xcpretty_test_format?: boolean;
  xcpretty_formatter?: string;
  xcpretty_report_junit?: string;
  xcpretty_report_html?: string;
  xcpretty_report_json?: string;
  xcpretty_utf?: boolean;
  analyze_build_time?: boolean;
  skip_profile_detection?: boolean;
  xcodebuild_command?: string;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  use_system_scm?: boolean;
};
/** @ignore Convert BuildAppOptions to the shape used by the Fastlane service
 */
function convertBuildAppOptions(
  options: BuildAppOptions
): convertedBuildAppOptions {
  const temp: convertedBuildAppOptions = {
    clean: options.clean,
    output_directory: options.outputDirectory,
    silent: options.silent,
    skip_package_ipa: options.skipPackageIpa,
    skip_package_pkg: options.skipPackagePkg,
    buildlog_path: options.buildlogPath,
    xcodebuild_formatter: options.xcodebuildFormatter,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.outputName !== "undefined")
    temp["output_name"] = options.outputName;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.codesigningIdentity !== "undefined")
    temp["codesigning_identity"] = options.codesigningIdentity;
  if (typeof options.includeSymbols !== "undefined")
    temp["include_symbols"] = options.includeSymbols;
  if (typeof options.includeBitcode !== "undefined")
    temp["include_bitcode"] = options.includeBitcode;
  if (typeof options.exportMethod !== "undefined")
    temp["export_method"] = options.exportMethod;
  if (typeof options.exportOptions !== "undefined")
    temp["export_options"] = options.exportOptions;
  if (typeof options.exportXcargs !== "undefined")
    temp["export_xcargs"] = options.exportXcargs;
  if (typeof options.skipBuildArchive !== "undefined")
    temp["skip_build_archive"] = options.skipBuildArchive;
  if (typeof options.skipArchive !== "undefined")
    temp["skip_archive"] = options.skipArchive;
  if (typeof options.skipCodesigning !== "undefined")
    temp["skip_codesigning"] = options.skipCodesigning;
  if (typeof options.catalystPlatform !== "undefined")
    temp["catalyst_platform"] = options.catalystPlatform;
  if (typeof options.installerCertName !== "undefined")
    temp["installer_cert_name"] = options.installerCertName;
  if (typeof options.buildPath !== "undefined")
    temp["build_path"] = options.buildPath;
  if (typeof options.archivePath !== "undefined")
    temp["archive_path"] = options.archivePath;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.resultBundlePath !== "undefined")
    temp["result_bundle_path"] = options.resultBundlePath;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.toolchain !== "undefined")
    temp["toolchain"] = options.toolchain;
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  if (typeof options.exportTeamId !== "undefined")
    temp["export_team_id"] = options.exportTeamId;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.xcprettyTestFormat !== "undefined")
    temp["xcpretty_test_format"] = options.xcprettyTestFormat;
  if (typeof options.xcprettyFormatter !== "undefined")
    temp["xcpretty_formatter"] = options.xcprettyFormatter;
  if (typeof options.xcprettyReportJunit !== "undefined")
    temp["xcpretty_report_junit"] = options.xcprettyReportJunit;
  if (typeof options.xcprettyReportHtml !== "undefined")
    temp["xcpretty_report_html"] = options.xcprettyReportHtml;
  if (typeof options.xcprettyReportJson !== "undefined")
    temp["xcpretty_report_json"] = options.xcprettyReportJson;
  if (typeof options.xcprettyUtf !== "undefined")
    temp["xcpretty_utf"] = options.xcprettyUtf;
  if (typeof options.analyzeBuildTime !== "undefined")
    temp["analyze_build_time"] = options.analyzeBuildTime;
  if (typeof options.skipProfileDetection !== "undefined")
    temp["skip_profile_detection"] = options.skipProfileDetection;
  if (typeof options.xcodebuildCommand !== "undefined")
    temp["xcodebuild_command"] = options.xcodebuildCommand;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.useSystemScm !== "undefined")
    temp["use_system_scm"] = options.useSystemScm;
  return temp;
}

/** @ignore */
type convertedBuildIosAppOptions = {
  workspace?: string;
  project?: string;
  scheme?: string;
  clean: boolean;
  output_directory: string;
  output_name?: string;
  configuration?: string;
  silent: boolean;
  codesigning_identity?: string;
  skip_package_ipa: boolean;
  include_symbols?: boolean;
  include_bitcode?: boolean;
  export_method?: string;
  export_options?: { string: string };
  export_xcargs?: string;
  skip_build_archive?: boolean;
  skip_archive?: boolean;
  skip_codesigning?: boolean;
  build_path?: string;
  archive_path?: string;
  derived_data_path?: string;
  result_bundle?: boolean;
  result_bundle_path?: string;
  buildlog_path: string;
  sdk?: string;
  toolchain?: string;
  destination?: string;
  export_team_id?: string;
  xcargs?: string;
  xcconfig?: string;
  suppress_xcode_output?: boolean;
  xcodebuild_formatter: string;
  disable_xcpretty?: boolean;
  xcpretty_test_format?: boolean;
  xcpretty_formatter?: string;
  xcpretty_report_junit?: string;
  xcpretty_report_html?: string;
  xcpretty_report_json?: string;
  xcpretty_utf?: boolean;
  analyze_build_time?: boolean;
  skip_profile_detection?: boolean;
  xcodebuild_command?: string;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  use_system_scm?: boolean;
};
/** @ignore Convert BuildIosAppOptions to the shape used by the Fastlane service
 */
function convertBuildIosAppOptions(
  options: BuildIosAppOptions
): convertedBuildIosAppOptions {
  const temp: convertedBuildIosAppOptions = {
    clean: options.clean,
    output_directory: options.outputDirectory,
    silent: options.silent,
    skip_package_ipa: options.skipPackageIpa,
    buildlog_path: options.buildlogPath,
    xcodebuild_formatter: options.xcodebuildFormatter,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.outputName !== "undefined")
    temp["output_name"] = options.outputName;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.codesigningIdentity !== "undefined")
    temp["codesigning_identity"] = options.codesigningIdentity;
  if (typeof options.includeSymbols !== "undefined")
    temp["include_symbols"] = options.includeSymbols;
  if (typeof options.includeBitcode !== "undefined")
    temp["include_bitcode"] = options.includeBitcode;
  if (typeof options.exportMethod !== "undefined")
    temp["export_method"] = options.exportMethod;
  if (typeof options.exportOptions !== "undefined")
    temp["export_options"] = options.exportOptions;
  if (typeof options.exportXcargs !== "undefined")
    temp["export_xcargs"] = options.exportXcargs;
  if (typeof options.skipBuildArchive !== "undefined")
    temp["skip_build_archive"] = options.skipBuildArchive;
  if (typeof options.skipArchive !== "undefined")
    temp["skip_archive"] = options.skipArchive;
  if (typeof options.skipCodesigning !== "undefined")
    temp["skip_codesigning"] = options.skipCodesigning;
  if (typeof options.buildPath !== "undefined")
    temp["build_path"] = options.buildPath;
  if (typeof options.archivePath !== "undefined")
    temp["archive_path"] = options.archivePath;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.resultBundlePath !== "undefined")
    temp["result_bundle_path"] = options.resultBundlePath;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.toolchain !== "undefined")
    temp["toolchain"] = options.toolchain;
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  if (typeof options.exportTeamId !== "undefined")
    temp["export_team_id"] = options.exportTeamId;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.xcprettyTestFormat !== "undefined")
    temp["xcpretty_test_format"] = options.xcprettyTestFormat;
  if (typeof options.xcprettyFormatter !== "undefined")
    temp["xcpretty_formatter"] = options.xcprettyFormatter;
  if (typeof options.xcprettyReportJunit !== "undefined")
    temp["xcpretty_report_junit"] = options.xcprettyReportJunit;
  if (typeof options.xcprettyReportHtml !== "undefined")
    temp["xcpretty_report_html"] = options.xcprettyReportHtml;
  if (typeof options.xcprettyReportJson !== "undefined")
    temp["xcpretty_report_json"] = options.xcprettyReportJson;
  if (typeof options.xcprettyUtf !== "undefined")
    temp["xcpretty_utf"] = options.xcprettyUtf;
  if (typeof options.analyzeBuildTime !== "undefined")
    temp["analyze_build_time"] = options.analyzeBuildTime;
  if (typeof options.skipProfileDetection !== "undefined")
    temp["skip_profile_detection"] = options.skipProfileDetection;
  if (typeof options.xcodebuildCommand !== "undefined")
    temp["xcodebuild_command"] = options.xcodebuildCommand;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.useSystemScm !== "undefined")
    temp["use_system_scm"] = options.useSystemScm;
  return temp;
}

/** @ignore */
type convertedBuildMacAppOptions = {
  workspace?: string;
  project?: string;
  scheme?: string;
  clean: boolean;
  output_directory: string;
  output_name?: string;
  configuration?: string;
  silent: boolean;
  codesigning_identity?: string;
  skip_package_pkg: boolean;
  include_symbols?: boolean;
  include_bitcode?: boolean;
  export_method?: string;
  export_options?: { string: string };
  export_xcargs?: string;
  skip_build_archive?: boolean;
  skip_archive?: boolean;
  skip_codesigning?: boolean;
  installer_cert_name?: string;
  build_path?: string;
  archive_path?: string;
  derived_data_path?: string;
  result_bundle?: boolean;
  result_bundle_path?: string;
  buildlog_path: string;
  sdk?: string;
  toolchain?: string;
  destination?: string;
  export_team_id?: string;
  xcargs?: string;
  xcconfig?: string;
  suppress_xcode_output?: boolean;
  xcodebuild_formatter: string;
  disable_xcpretty?: boolean;
  xcpretty_test_format?: boolean;
  xcpretty_formatter?: string;
  xcpretty_report_junit?: string;
  xcpretty_report_html?: string;
  xcpretty_report_json?: string;
  xcpretty_utf?: boolean;
  analyze_build_time?: boolean;
  skip_profile_detection?: boolean;
  xcodebuild_command?: string;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  use_system_scm?: boolean;
};
/** @ignore Convert BuildMacAppOptions to the shape used by the Fastlane service
 */
function convertBuildMacAppOptions(
  options: BuildMacAppOptions
): convertedBuildMacAppOptions {
  const temp: convertedBuildMacAppOptions = {
    clean: options.clean,
    output_directory: options.outputDirectory,
    silent: options.silent,
    skip_package_pkg: options.skipPackagePkg,
    buildlog_path: options.buildlogPath,
    xcodebuild_formatter: options.xcodebuildFormatter,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.outputName !== "undefined")
    temp["output_name"] = options.outputName;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.codesigningIdentity !== "undefined")
    temp["codesigning_identity"] = options.codesigningIdentity;
  if (typeof options.includeSymbols !== "undefined")
    temp["include_symbols"] = options.includeSymbols;
  if (typeof options.includeBitcode !== "undefined")
    temp["include_bitcode"] = options.includeBitcode;
  if (typeof options.exportMethod !== "undefined")
    temp["export_method"] = options.exportMethod;
  if (typeof options.exportOptions !== "undefined")
    temp["export_options"] = options.exportOptions;
  if (typeof options.exportXcargs !== "undefined")
    temp["export_xcargs"] = options.exportXcargs;
  if (typeof options.skipBuildArchive !== "undefined")
    temp["skip_build_archive"] = options.skipBuildArchive;
  if (typeof options.skipArchive !== "undefined")
    temp["skip_archive"] = options.skipArchive;
  if (typeof options.skipCodesigning !== "undefined")
    temp["skip_codesigning"] = options.skipCodesigning;
  if (typeof options.installerCertName !== "undefined")
    temp["installer_cert_name"] = options.installerCertName;
  if (typeof options.buildPath !== "undefined")
    temp["build_path"] = options.buildPath;
  if (typeof options.archivePath !== "undefined")
    temp["archive_path"] = options.archivePath;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.resultBundlePath !== "undefined")
    temp["result_bundle_path"] = options.resultBundlePath;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.toolchain !== "undefined")
    temp["toolchain"] = options.toolchain;
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  if (typeof options.exportTeamId !== "undefined")
    temp["export_team_id"] = options.exportTeamId;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.xcprettyTestFormat !== "undefined")
    temp["xcpretty_test_format"] = options.xcprettyTestFormat;
  if (typeof options.xcprettyFormatter !== "undefined")
    temp["xcpretty_formatter"] = options.xcprettyFormatter;
  if (typeof options.xcprettyReportJunit !== "undefined")
    temp["xcpretty_report_junit"] = options.xcprettyReportJunit;
  if (typeof options.xcprettyReportHtml !== "undefined")
    temp["xcpretty_report_html"] = options.xcprettyReportHtml;
  if (typeof options.xcprettyReportJson !== "undefined")
    temp["xcpretty_report_json"] = options.xcprettyReportJson;
  if (typeof options.xcprettyUtf !== "undefined")
    temp["xcpretty_utf"] = options.xcprettyUtf;
  if (typeof options.analyzeBuildTime !== "undefined")
    temp["analyze_build_time"] = options.analyzeBuildTime;
  if (typeof options.skipProfileDetection !== "undefined")
    temp["skip_profile_detection"] = options.skipProfileDetection;
  if (typeof options.xcodebuildCommand !== "undefined")
    temp["xcodebuild_command"] = options.xcodebuildCommand;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.useSystemScm !== "undefined")
    temp["use_system_scm"] = options.useSystemScm;
  return temp;
}

/** @ignore */
type convertedBundleInstallOptions = {
  binstubs?: string;
  clean: boolean;
  full_index: boolean;
  gemfile?: string;
  jobs?: boolean;
  local: boolean;
  deployment: boolean;
  no_cache: boolean;
  no_prune: boolean;
  path?: string;
  system: boolean;
  quiet: boolean;
  retry?: boolean;
  shebang?: string;
  standalone?: string;
  trust_policy?: string;
  without?: string;
  with?: string;
  frozen: boolean;
  redownload: boolean;
};
/** @ignore Convert BundleInstallOptions to the shape used by the Fastlane service
 */
function convertBundleInstallOptions(
  options: BundleInstallOptions
): convertedBundleInstallOptions {
  const temp: convertedBundleInstallOptions = {
    clean: options.clean,
    full_index: options.fullIndex,
    local: options.local,
    deployment: options.deployment,
    no_cache: options.noCache,
    no_prune: options.noPrune,
    system: options.system,
    quiet: options.quiet,
    frozen: options.frozen,
    redownload: options.redownload,
  };
  if (typeof options.binstubs !== "undefined")
    temp["binstubs"] = options.binstubs;
  if (typeof options.gemfile !== "undefined") temp["gemfile"] = options.gemfile;
  if (typeof options.jobs !== "undefined") temp["jobs"] = options.jobs;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.retry !== "undefined") temp["retry"] = options.retry;
  if (typeof options.shebang !== "undefined") temp["shebang"] = options.shebang;
  if (typeof options.standalone !== "undefined")
    temp["standalone"] = options.standalone;
  if (typeof options.trustPolicy !== "undefined")
    temp["trust_policy"] = options.trustPolicy;
  if (typeof options.without !== "undefined") temp["without"] = options.without;
  if (typeof options.with !== "undefined") temp["with"] = options.with;
  return temp;
}

/** @ignore */
type convertedCaptureAndroidScreenshotsOptions = {
  android_home?: string;
  build_tools_version?: string;
  locales: string[];
  clear_previous_screenshots: boolean;
  output_directory: string;
  skip_open_summary: boolean;
  app_package_name: string;
  tests_package_name?: string;
  use_tests_in_packages?: string[];
  use_tests_in_classes?: string[];
  launch_arguments?: string[];
  test_instrumentation_runner?: string;
  ending_locale?: string;
  use_adb_root?: boolean;
  app_apk_path?: string;
  tests_apk_path?: string;
  specific_device?: string;
  device_type: string;
  exit_on_test_failure: boolean;
  reinstall_app: boolean;
  use_timestamp_suffix: boolean;
  adb_host?: string;
};
/** @ignore Convert CaptureAndroidScreenshotsOptions to the shape used by the Fastlane service
 */
function convertCaptureAndroidScreenshotsOptions(
  options: CaptureAndroidScreenshotsOptions
): convertedCaptureAndroidScreenshotsOptions {
  const temp: convertedCaptureAndroidScreenshotsOptions = {
    locales: options.locales,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    output_directory: options.outputDirectory,
    skip_open_summary: options.skipOpenSummary,
    app_package_name: options.appPackageName,
    device_type: options.deviceType,
    exit_on_test_failure: options.exitOnTestFailure,
    reinstall_app: options.reinstallApp,
    use_timestamp_suffix: options.useTimestampSuffix,
  };
  if (typeof options.androidHome !== "undefined")
    temp["android_home"] = options.androidHome;
  if (typeof options.buildToolsVersion !== "undefined")
    temp["build_tools_version"] = options.buildToolsVersion;
  if (typeof options.testsPackageName !== "undefined")
    temp["tests_package_name"] = options.testsPackageName;
  if (typeof options.useTestsInPackages !== "undefined")
    temp["use_tests_in_packages"] = options.useTestsInPackages;
  if (typeof options.useTestsInClasses !== "undefined")
    temp["use_tests_in_classes"] = options.useTestsInClasses;
  if (typeof options.launchArguments !== "undefined")
    temp["launch_arguments"] = options.launchArguments;
  if (typeof options.testInstrumentationRunner !== "undefined")
    temp["test_instrumentation_runner"] = options.testInstrumentationRunner;
  if (typeof options.endingLocale !== "undefined")
    temp["ending_locale"] = options.endingLocale;
  if (typeof options.useAdbRoot !== "undefined")
    temp["use_adb_root"] = options.useAdbRoot;
  if (typeof options.appApkPath !== "undefined")
    temp["app_apk_path"] = options.appApkPath;
  if (typeof options.testsApkPath !== "undefined")
    temp["tests_apk_path"] = options.testsApkPath;
  if (typeof options.specificDevice !== "undefined")
    temp["specific_device"] = options.specificDevice;
  if (typeof options.adbHost !== "undefined")
    temp["adb_host"] = options.adbHost;
  return temp;
}

/** @ignore */
type convertedCaptureIosScreenshotsOptions = {
  workspace?: string;
  project?: string;
  xcargs?: string;
  xcconfig?: string;
  devices?: string[];
  languages: string[];
  launch_arguments: string[];
  output_directory: string;
  output_simulator_logs?: boolean;
  ios_version?: string;
  skip_open_summary: any;
  skip_helper_version_check: any;
  clear_previous_screenshots: any;
  reinstall_app: any;
  erase_simulator: any;
  headless: boolean;
  override_status_bar: any;
  override_status_bar_arguments?: string;
  localize_simulator: any;
  dark_mode?: boolean;
  app_identifier?: string;
  add_photos?: string[];
  add_videos?: string[];
  html_template?: string;
  buildlog_path: string;
  clean: any;
  test_without_building?: boolean;
  configuration?: string;
  sdk?: string;
  scheme?: string;
  number_of_retries: any;
  stop_after_first_error: any;
  derived_data_path?: string;
  result_bundle?: any;
  test_target_name?: string;
  namespace_log_files?: any;
  concurrent_simulators: any;
  disable_slide_to_type?: any;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  testplan?: string;
  only_testing?: any;
  skip_testing?: any;
  xcodebuild_formatter: string;
  xcpretty_args?: string;
  disable_xcpretty?: boolean;
  suppress_xcode_output?: boolean;
  use_system_scm: boolean;
};
/** @ignore Convert CaptureIosScreenshotsOptions to the shape used by the Fastlane service
 */
function convertCaptureIosScreenshotsOptions(
  options: CaptureIosScreenshotsOptions
): convertedCaptureIosScreenshotsOptions {
  const temp: convertedCaptureIosScreenshotsOptions = {
    languages: options.languages,
    launch_arguments: options.launchArguments,
    output_directory: options.outputDirectory,
    skip_open_summary: options.skipOpenSummary,
    skip_helper_version_check: options.skipHelperVersionCheck,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    reinstall_app: options.reinstallApp,
    erase_simulator: options.eraseSimulator,
    headless: options.headless,
    override_status_bar: options.overrideStatusBar,
    localize_simulator: options.localizeSimulator,
    buildlog_path: options.buildlogPath,
    clean: options.clean,
    number_of_retries: options.numberOfRetries,
    stop_after_first_error: options.stopAfterFirstError,
    concurrent_simulators: options.concurrentSimulators,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
    xcodebuild_formatter: options.xcodebuildFormatter,
    use_system_scm: options.useSystemScm,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.devices !== "undefined") temp["devices"] = options.devices;
  if (typeof options.outputSimulatorLogs !== "undefined")
    temp["output_simulator_logs"] = options.outputSimulatorLogs;
  if (typeof options.iosVersion !== "undefined")
    temp["ios_version"] = options.iosVersion;
  if (typeof options.overrideStatusBarArguments !== "undefined")
    temp["override_status_bar_arguments"] = options.overrideStatusBarArguments;
  if (typeof options.darkMode !== "undefined")
    temp["dark_mode"] = options.darkMode;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.addPhotos !== "undefined")
    temp["add_photos"] = options.addPhotos;
  if (typeof options.addVideos !== "undefined")
    temp["add_videos"] = options.addVideos;
  if (typeof options.htmlTemplate !== "undefined")
    temp["html_template"] = options.htmlTemplate;
  if (typeof options.testWithoutBuilding !== "undefined")
    temp["test_without_building"] = options.testWithoutBuilding;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.testTargetName !== "undefined")
    temp["test_target_name"] = options.testTargetName;
  if (typeof options.namespaceLogFiles !== "undefined")
    temp["namespace_log_files"] = options.namespaceLogFiles;
  if (typeof options.disableSlideToType !== "undefined")
    temp["disable_slide_to_type"] = options.disableSlideToType;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.testplan !== "undefined")
    temp["testplan"] = options.testplan;
  if (typeof options.onlyTesting !== "undefined")
    temp["only_testing"] = options.onlyTesting;
  if (typeof options.skipTesting !== "undefined")
    temp["skip_testing"] = options.skipTesting;
  if (typeof options.xcprettyArgs !== "undefined")
    temp["xcpretty_args"] = options.xcprettyArgs;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  return temp;
}

/** @ignore */
type convertedCaptureScreenshotsOptions = {
  workspace?: string;
  project?: string;
  xcargs?: string;
  xcconfig?: string;
  devices?: string[];
  languages: string[];
  launch_arguments: string[];
  output_directory: string;
  output_simulator_logs?: boolean;
  ios_version?: string;
  skip_open_summary: any;
  skip_helper_version_check: any;
  clear_previous_screenshots: any;
  reinstall_app: any;
  erase_simulator: any;
  headless: boolean;
  override_status_bar: any;
  override_status_bar_arguments?: string;
  localize_simulator: any;
  dark_mode?: boolean;
  app_identifier?: string;
  add_photos?: string[];
  add_videos?: string[];
  html_template?: string;
  buildlog_path: string;
  clean: any;
  test_without_building?: boolean;
  configuration?: string;
  sdk?: string;
  scheme?: string;
  number_of_retries: any;
  stop_after_first_error: any;
  derived_data_path?: string;
  result_bundle?: any;
  test_target_name?: string;
  namespace_log_files?: any;
  concurrent_simulators: any;
  disable_slide_to_type?: any;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  testplan?: string;
  only_testing?: any;
  skip_testing?: any;
  xcodebuild_formatter: string;
  xcpretty_args?: string;
  disable_xcpretty?: boolean;
  suppress_xcode_output?: boolean;
  use_system_scm: boolean;
};
/** @ignore Convert CaptureScreenshotsOptions to the shape used by the Fastlane service
 */
function convertCaptureScreenshotsOptions(
  options: CaptureScreenshotsOptions
): convertedCaptureScreenshotsOptions {
  const temp: convertedCaptureScreenshotsOptions = {
    languages: options.languages,
    launch_arguments: options.launchArguments,
    output_directory: options.outputDirectory,
    skip_open_summary: options.skipOpenSummary,
    skip_helper_version_check: options.skipHelperVersionCheck,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    reinstall_app: options.reinstallApp,
    erase_simulator: options.eraseSimulator,
    headless: options.headless,
    override_status_bar: options.overrideStatusBar,
    localize_simulator: options.localizeSimulator,
    buildlog_path: options.buildlogPath,
    clean: options.clean,
    number_of_retries: options.numberOfRetries,
    stop_after_first_error: options.stopAfterFirstError,
    concurrent_simulators: options.concurrentSimulators,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
    xcodebuild_formatter: options.xcodebuildFormatter,
    use_system_scm: options.useSystemScm,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.devices !== "undefined") temp["devices"] = options.devices;
  if (typeof options.outputSimulatorLogs !== "undefined")
    temp["output_simulator_logs"] = options.outputSimulatorLogs;
  if (typeof options.iosVersion !== "undefined")
    temp["ios_version"] = options.iosVersion;
  if (typeof options.overrideStatusBarArguments !== "undefined")
    temp["override_status_bar_arguments"] = options.overrideStatusBarArguments;
  if (typeof options.darkMode !== "undefined")
    temp["dark_mode"] = options.darkMode;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.addPhotos !== "undefined")
    temp["add_photos"] = options.addPhotos;
  if (typeof options.addVideos !== "undefined")
    temp["add_videos"] = options.addVideos;
  if (typeof options.htmlTemplate !== "undefined")
    temp["html_template"] = options.htmlTemplate;
  if (typeof options.testWithoutBuilding !== "undefined")
    temp["test_without_building"] = options.testWithoutBuilding;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.testTargetName !== "undefined")
    temp["test_target_name"] = options.testTargetName;
  if (typeof options.namespaceLogFiles !== "undefined")
    temp["namespace_log_files"] = options.namespaceLogFiles;
  if (typeof options.disableSlideToType !== "undefined")
    temp["disable_slide_to_type"] = options.disableSlideToType;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.testplan !== "undefined")
    temp["testplan"] = options.testplan;
  if (typeof options.onlyTesting !== "undefined")
    temp["only_testing"] = options.onlyTesting;
  if (typeof options.skipTesting !== "undefined")
    temp["skip_testing"] = options.skipTesting;
  if (typeof options.xcprettyArgs !== "undefined")
    temp["xcpretty_args"] = options.xcprettyArgs;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  return temp;
}

/** @ignore */
type convertedCarthageOptions = {
  command: string;
  dependencies: string[];
  use_ssh?: boolean;
  use_submodules?: boolean;
  use_netrc?: boolean;
  use_binaries?: boolean;
  no_checkout?: boolean;
  no_build?: boolean;
  no_skip_current?: boolean;
  derived_data?: string;
  verbose?: boolean;
  platform?: string;
  cache_builds: boolean;
  frameworks: string[];
  output?: string;
  configuration?: string;
  toolchain?: string;
  project_directory?: string;
  new_resolver?: boolean;
  log_path?: string;
  use_xcframeworks: boolean;
  archive: boolean;
  executable: string;
};
/** @ignore Convert CarthageOptions to the shape used by the Fastlane service
 */
function convertCarthageOptions(
  options: CarthageOptions
): convertedCarthageOptions {
  const temp: convertedCarthageOptions = {
    command: options.command,
    dependencies: options.dependencies,
    cache_builds: options.cacheBuilds,
    frameworks: options.frameworks,
    use_xcframeworks: options.useXcframeworks,
    archive: options.archive,
    executable: options.executable,
  };
  if (typeof options.useSsh !== "undefined") temp["use_ssh"] = options.useSsh;
  if (typeof options.useSubmodules !== "undefined")
    temp["use_submodules"] = options.useSubmodules;
  if (typeof options.useNetrc !== "undefined")
    temp["use_netrc"] = options.useNetrc;
  if (typeof options.useBinaries !== "undefined")
    temp["use_binaries"] = options.useBinaries;
  if (typeof options.noCheckout !== "undefined")
    temp["no_checkout"] = options.noCheckout;
  if (typeof options.noBuild !== "undefined")
    temp["no_build"] = options.noBuild;
  if (typeof options.noSkipCurrent !== "undefined")
    temp["no_skip_current"] = options.noSkipCurrent;
  if (typeof options.derivedData !== "undefined")
    temp["derived_data"] = options.derivedData;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.output !== "undefined") temp["output"] = options.output;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.toolchain !== "undefined")
    temp["toolchain"] = options.toolchain;
  if (typeof options.projectDirectory !== "undefined")
    temp["project_directory"] = options.projectDirectory;
  if (typeof options.newResolver !== "undefined")
    temp["new_resolver"] = options.newResolver;
  if (typeof options.logPath !== "undefined")
    temp["log_path"] = options.logPath;
  return temp;
}

/** @ignore */
type convertedCertOptions = {
  development: boolean;
  type?: string;
  force: boolean;
  generate_apple_certs: boolean;
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  team_id?: string;
  team_name?: string;
  filename?: string;
  output_path: string;
  keychain_path: string;
  keychain_password?: string;
  skip_set_partition_list: boolean;
  platform: string;
};
/** @ignore Convert CertOptions to the shape used by the Fastlane service
 */
function convertCertOptions(options: CertOptions): convertedCertOptions {
  const temp: convertedCertOptions = {
    development: options.development,
    force: options.force,
    generate_apple_certs: options.generateAppleCerts,
    output_path: options.outputPath,
    keychain_path: options.keychainPath,
    skip_set_partition_list: options.skipSetPartitionList,
    platform: options.platform,
  };
  if (typeof options.type !== "undefined") temp["type"] = options.type;
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.filename !== "undefined")
    temp["filename"] = options.filename;
  if (typeof options.keychainPassword !== "undefined")
    temp["keychain_password"] = options.keychainPassword;
  return temp;
}

/** @ignore */
type convertedChangelogFromGitCommitsOptions = {
  between?: string[];
  commits_count?: any;
  path?: string;
  pretty?: string;
  date_format?: string;
  ancestry_path?: boolean;
  tag_match_pattern?: string;
  match_lightweight_tag?: boolean;
  quiet?: boolean;
  include_merges?: boolean;
  merge_commit_filtering?: string;
};
/** @ignore Convert ChangelogFromGitCommitsOptions to the shape used by the Fastlane service
 */
function convertChangelogFromGitCommitsOptions(
  options: ChangelogFromGitCommitsOptions
): convertedChangelogFromGitCommitsOptions {
  const temp: convertedChangelogFromGitCommitsOptions = {};
  if (typeof options.between !== "undefined") temp["between"] = options.between;
  if (typeof options.commitsCount !== "undefined")
    temp["commits_count"] = options.commitsCount;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.pretty !== "undefined") temp["pretty"] = options.pretty;
  if (typeof options.dateFormat !== "undefined")
    temp["date_format"] = options.dateFormat;
  if (typeof options.ancestryPath !== "undefined")
    temp["ancestry_path"] = options.ancestryPath;
  if (typeof options.tagMatchPattern !== "undefined")
    temp["tag_match_pattern"] = options.tagMatchPattern;
  if (typeof options.matchLightweightTag !== "undefined")
    temp["match_lightweight_tag"] = options.matchLightweightTag;
  if (typeof options.quiet !== "undefined") temp["quiet"] = options.quiet;
  if (typeof options.includeMerges !== "undefined")
    temp["include_merges"] = options.includeMerges;
  if (typeof options.mergeCommitFiltering !== "undefined")
    temp["merge_commit_filtering"] = options.mergeCommitFiltering;
  return temp;
}

/** @ignore */
type convertedChatworkOptions = {
  api_token: string;
  message: string;
  roomid: any;
  success?: boolean;
};
/** @ignore Convert ChatworkOptions to the shape used by the Fastlane service
 */
function convertChatworkOptions(
  options: ChatworkOptions
): convertedChatworkOptions {
  const temp: convertedChatworkOptions = {
    api_token: options.apiToken,
    message: options.message,
    roomid: options.roomid,
  };
  if (typeof options.success !== "undefined") temp["success"] = options.success;
  return temp;
}

/** @ignore */
type convertedCheckAppStoreMetadataOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  app_identifier: string;
  username?: string;
  team_id?: string;
  team_name?: string;
  platform?: string;
  default_rule_level: any;
  include_in_app_purchases?: boolean;
  use_live: boolean;
  negative_apple_sentiment?: any;
  placeholder_text?: any;
  other_platforms?: any;
  future_functionality?: any;
  test_words?: any;
  curse_words?: any;
  free_stuff_in_iap?: any;
  custom_text?: any;
  copyright_date?: any;
  unreachable_urls?: any;
};
/** @ignore Convert CheckAppStoreMetadataOptions to the shape used by the Fastlane service
 */
function convertCheckAppStoreMetadataOptions(
  options: CheckAppStoreMetadataOptions
): convertedCheckAppStoreMetadataOptions {
  const temp: convertedCheckAppStoreMetadataOptions = {
    app_identifier: options.appIdentifier,
    default_rule_level: options.defaultRuleLevel,
    use_live: options.useLive,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.includeInAppPurchases !== "undefined")
    temp["include_in_app_purchases"] = options.includeInAppPurchases;
  if (typeof options.negativeAppleSentiment !== "undefined")
    temp["negative_apple_sentiment"] = options.negativeAppleSentiment;
  if (typeof options.placeholderText !== "undefined")
    temp["placeholder_text"] = options.placeholderText;
  if (typeof options.otherPlatforms !== "undefined")
    temp["other_platforms"] = options.otherPlatforms;
  if (typeof options.futureFunctionality !== "undefined")
    temp["future_functionality"] = options.futureFunctionality;
  if (typeof options.testWords !== "undefined")
    temp["test_words"] = options.testWords;
  if (typeof options.curseWords !== "undefined")
    temp["curse_words"] = options.curseWords;
  if (typeof options.freeStuffInIap !== "undefined")
    temp["free_stuff_in_iap"] = options.freeStuffInIap;
  if (typeof options.customText !== "undefined")
    temp["custom_text"] = options.customText;
  if (typeof options.copyrightDate !== "undefined")
    temp["copyright_date"] = options.copyrightDate;
  if (typeof options.unreachableUrls !== "undefined")
    temp["unreachable_urls"] = options.unreachableUrls;
  return temp;
}

/** @ignore */
type convertedCleanBuildArtifactsOptions = {
  exclude_pattern?: string;
};
/** @ignore Convert CleanBuildArtifactsOptions to the shape used by the Fastlane service
 */
function convertCleanBuildArtifactsOptions(
  options: CleanBuildArtifactsOptions
): convertedCleanBuildArtifactsOptions {
  const temp: convertedCleanBuildArtifactsOptions = {};
  if (typeof options.excludePattern !== "undefined")
    temp["exclude_pattern"] = options.excludePattern;
  return temp;
}

/** @ignore */
type convertedCleanCocoapodsCacheOptions = {
  name?: string;
  no_ansi: boolean;
  verbose: boolean;
  silent: boolean;
  allow_root: boolean;
};
/** @ignore Convert CleanCocoapodsCacheOptions to the shape used by the Fastlane service
 */
function convertCleanCocoapodsCacheOptions(
  options: CleanCocoapodsCacheOptions
): convertedCleanCocoapodsCacheOptions {
  const temp: convertedCleanCocoapodsCacheOptions = {
    no_ansi: options.noAnsi,
    verbose: options.verbose,
    silent: options.silent,
    allow_root: options.allowRoot,
  };
  if (typeof options.name !== "undefined") temp["name"] = options.name;
  return temp;
}

/** @ignore */
type convertedClearDerivedDataOptions = {
  derived_data_path: string;
};
/** @ignore Convert ClearDerivedDataOptions to the shape used by the Fastlane service
 */
function convertClearDerivedDataOptions(
  options: ClearDerivedDataOptions
): convertedClearDerivedDataOptions {
  const temp: convertedClearDerivedDataOptions = {
    derived_data_path: options.derivedDataPath,
  };

  return temp;
}

/** @ignore */
type convertedClipboardOptions = {
  value: string;
};
/** @ignore Convert ClipboardOptions to the shape used by the Fastlane service
 */
function convertClipboardOptions(
  options: ClipboardOptions
): convertedClipboardOptions {
  const temp: convertedClipboardOptions = {
    value: options.value,
  };

  return temp;
}

/** @ignore */
type convertedClocOptions = {
  binary_path?: string;
  exclude_dir?: string;
  output_directory: string;
  source_directory: string;
  xml: boolean;
};
/** @ignore Convert ClocOptions to the shape used by the Fastlane service
 */
function convertClocOptions(options: ClocOptions): convertedClocOptions {
  const temp: convertedClocOptions = {
    output_directory: options.outputDirectory,
    source_directory: options.sourceDirectory,
    xml: options.xml,
  };
  if (typeof options.binaryPath !== "undefined")
    temp["binary_path"] = options.binaryPath;
  if (typeof options.excludeDir !== "undefined")
    temp["exclude_dir"] = options.excludeDir;
  return temp;
}

/** @ignore */
type convertedCocoapodsOptions = {
  repo_update: boolean;
  clean_install: boolean;
  silent: boolean;
  verbose: boolean;
  ansi: boolean;
  use_bundle_exec: boolean;
  podfile?: string;
  error_callback?: any;
  try_repo_update_on_error?: boolean;
  deployment?: boolean;
  allow_root?: boolean;
  clean?: boolean;
  integrate?: boolean;
};
/** @ignore Convert CocoapodsOptions to the shape used by the Fastlane service
 */
function convertCocoapodsOptions(
  options: CocoapodsOptions
): convertedCocoapodsOptions {
  const temp: convertedCocoapodsOptions = {
    repo_update: options.repoUpdate,
    clean_install: options.cleanInstall,
    silent: options.silent,
    verbose: options.verbose,
    ansi: options.ansi,
    use_bundle_exec: options.useBundleExec,
  };
  if (typeof options.podfile !== "undefined") temp["podfile"] = options.podfile;
  if (typeof options.errorCallback !== "undefined")
    temp["error_callback"] = options.errorCallback;
  if (typeof options.tryRepoUpdateOnError !== "undefined")
    temp["try_repo_update_on_error"] = options.tryRepoUpdateOnError;
  if (typeof options.deployment !== "undefined")
    temp["deployment"] = options.deployment;
  if (typeof options.allowRoot !== "undefined")
    temp["allow_root"] = options.allowRoot;
  if (typeof options.clean !== "undefined") temp["clean"] = options.clean;
  if (typeof options.integrate !== "undefined")
    temp["integrate"] = options.integrate;
  return temp;
}

/** @ignore */
type convertedCommitGithubFileOptions = {
  repository_name: string;
  server_url?: string;
  api_token?: string;
  api_bearer?: string;
  branch?: string;
  path: string;
  message?: string;
  secure?: boolean;
};
/** @ignore Convert CommitGithubFileOptions to the shape used by the Fastlane service
 */
function convertCommitGithubFileOptions(
  options: CommitGithubFileOptions
): convertedCommitGithubFileOptions {
  const temp: convertedCommitGithubFileOptions = {
    repository_name: options.repositoryName,
    path: options.path,
  };
  if (typeof options.serverUrl !== "undefined")
    temp["server_url"] = options.serverUrl;
  if (typeof options.apiToken !== "undefined")
    temp["api_token"] = options.apiToken;
  if (typeof options.apiBearer !== "undefined")
    temp["api_bearer"] = options.apiBearer;
  if (typeof options.branch !== "undefined") temp["branch"] = options.branch;
  if (typeof options.message !== "undefined") temp["message"] = options.message;
  if (typeof options.secure !== "undefined") temp["secure"] = options.secure;
  return temp;
}

/** @ignore */
type convertedCommitVersionBumpOptions = {
  message?: string;
  xcodeproj?: string;
  force?: boolean;
  settings?: string;
  ignore?: string;
  include?: string[];
  no_verify: boolean;
};
/** @ignore Convert CommitVersionBumpOptions to the shape used by the Fastlane service
 */
function convertCommitVersionBumpOptions(
  options: CommitVersionBumpOptions
): convertedCommitVersionBumpOptions {
  const temp: convertedCommitVersionBumpOptions = {
    no_verify: options.noVerify,
  };
  if (typeof options.message !== "undefined") temp["message"] = options.message;
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  if (typeof options.force !== "undefined") temp["force"] = options.force;
  if (typeof options.settings !== "undefined")
    temp["settings"] = options.settings;
  if (typeof options.ignore !== "undefined") temp["ignore"] = options.ignore;
  if (typeof options.include !== "undefined") temp["include"] = options.include;
  return temp;
}

/** @ignore */
type convertedCopyArtifactsOptions = {
  keep_original?: boolean;
  target_path: string;
  artifacts: string[];
  fail_on_missing?: boolean;
};
/** @ignore Convert CopyArtifactsOptions to the shape used by the Fastlane service
 */
function convertCopyArtifactsOptions(
  options: CopyArtifactsOptions
): convertedCopyArtifactsOptions {
  const temp: convertedCopyArtifactsOptions = {
    target_path: options.targetPath,
    artifacts: options.artifacts,
  };
  if (typeof options.keepOriginal !== "undefined")
    temp["keep_original"] = options.keepOriginal;
  if (typeof options.failOnMissing !== "undefined")
    temp["fail_on_missing"] = options.failOnMissing;
  return temp;
}

/** @ignore */
type convertedCreateAppOnManagedPlayStoreOptions = {
  json_key?: string;
  json_key_data?: string;
  developer_account_id: string;
  apk: string;
  app_title: string;
  language: string;
  root_url?: string;
  timeout?: any;
};
/** @ignore Convert CreateAppOnManagedPlayStoreOptions to the shape used by the Fastlane service
 */
function convertCreateAppOnManagedPlayStoreOptions(
  options: CreateAppOnManagedPlayStoreOptions
): convertedCreateAppOnManagedPlayStoreOptions {
  const temp: convertedCreateAppOnManagedPlayStoreOptions = {
    developer_account_id: options.developerAccountId,
    apk: options.apk,
    app_title: options.appTitle,
    language: options.language,
  };
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  if (typeof options.rootUrl !== "undefined")
    temp["root_url"] = options.rootUrl;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedCreateAppOnlineOptions = {
  username: string;
  app_identifier: string;
  bundle_identifier_suffix?: string;
  app_name: string;
  app_version?: string;
  sku: string;
  platform?: string;
  platforms?: string[];
  language: string;
  company_name?: string;
  skip_itc: any;
  itc_users?: string[];
  enabled_features?: any;
  enable_services: any;
  skip_devcenter: any;
  team_id?: string;
  team_name?: string;
  itc_team_id?: any;
  itc_team_name?: string;
};
/** @ignore Convert CreateAppOnlineOptions to the shape used by the Fastlane service
 */
function convertCreateAppOnlineOptions(
  options: CreateAppOnlineOptions
): convertedCreateAppOnlineOptions {
  const temp: convertedCreateAppOnlineOptions = {
    username: options.username,
    app_identifier: options.appIdentifier,
    app_name: options.appName,
    sku: options.sku,
    language: options.language,
    skip_itc: options.skipItc,
    enable_services: options.enableServices,
    skip_devcenter: options.skipDevcenter,
  };
  if (typeof options.bundleIdentifierSuffix !== "undefined")
    temp["bundle_identifier_suffix"] = options.bundleIdentifierSuffix;
  if (typeof options.appVersion !== "undefined")
    temp["app_version"] = options.appVersion;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.platforms !== "undefined")
    temp["platforms"] = options.platforms;
  if (typeof options.companyName !== "undefined")
    temp["company_name"] = options.companyName;
  if (typeof options.itcUsers !== "undefined")
    temp["itc_users"] = options.itcUsers;
  if (typeof options.enabledFeatures !== "undefined")
    temp["enabled_features"] = options.enabledFeatures;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.itcTeamId !== "undefined")
    temp["itc_team_id"] = options.itcTeamId;
  if (typeof options.itcTeamName !== "undefined")
    temp["itc_team_name"] = options.itcTeamName;
  return temp;
}

/** @ignore */
type convertedCreateKeychainOptions = {
  name?: string;
  path?: string;
  password: string;
  default_keychain: boolean;
  unlock: boolean;
  timeout: any;
  lock_when_sleeps: boolean;
  lock_after_timeout: boolean;
  add_to_search_list: boolean;
  require_create: boolean;
};
/** @ignore Convert CreateKeychainOptions to the shape used by the Fastlane service
 */
function convertCreateKeychainOptions(
  options: CreateKeychainOptions
): convertedCreateKeychainOptions {
  const temp: convertedCreateKeychainOptions = {
    password: options.password,
    default_keychain: options.defaultKeychain,
    unlock: options.unlock,
    timeout: options.timeout,
    lock_when_sleeps: options.lockWhenSleeps,
    lock_after_timeout: options.lockAfterTimeout,
    add_to_search_list: options.addToSearchList,
    require_create: options.requireCreate,
  };
  if (typeof options.name !== "undefined") temp["name"] = options.name;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  return temp;
}

/** @ignore */
type convertedCreatePullRequestOptions = {
  api_token?: string;
  api_bearer?: string;
  repo: string;
  title: string;
  body?: string;
  draft?: boolean;
  labels?: string[];
  milestone?: any;
  head?: string;
  base?: string;
  api_url?: string;
  assignees?: string[];
  reviewers?: string[];
  team_reviewers?: string[];
};
/** @ignore Convert CreatePullRequestOptions to the shape used by the Fastlane service
 */
function convertCreatePullRequestOptions(
  options: CreatePullRequestOptions
): convertedCreatePullRequestOptions {
  const temp: convertedCreatePullRequestOptions = {
    repo: options.repo,
    title: options.title,
  };
  if (typeof options.apiToken !== "undefined")
    temp["api_token"] = options.apiToken;
  if (typeof options.apiBearer !== "undefined")
    temp["api_bearer"] = options.apiBearer;
  if (typeof options.body !== "undefined") temp["body"] = options.body;
  if (typeof options.draft !== "undefined") temp["draft"] = options.draft;
  if (typeof options.labels !== "undefined") temp["labels"] = options.labels;
  if (typeof options.milestone !== "undefined")
    temp["milestone"] = options.milestone;
  if (typeof options.head !== "undefined") temp["head"] = options.head;
  if (typeof options.base !== "undefined") temp["base"] = options.base;
  if (typeof options.apiUrl !== "undefined") temp["api_url"] = options.apiUrl;
  if (typeof options.assignees !== "undefined")
    temp["assignees"] = options.assignees;
  if (typeof options.reviewers !== "undefined")
    temp["reviewers"] = options.reviewers;
  if (typeof options.teamReviewers !== "undefined")
    temp["team_reviewers"] = options.teamReviewers;
  return temp;
}

/** @ignore */
type convertedCreateXcframeworkOptions = {
  frameworks?: string[];
  frameworks_with_dsyms?: { string: string };
  libraries?: string[];
  libraries_with_headers_or_dsyms?: { string: string };
  output: string;
  allow_internal_distribution?: boolean;
};
/** @ignore Convert CreateXcframeworkOptions to the shape used by the Fastlane service
 */
function convertCreateXcframeworkOptions(
  options: CreateXcframeworkOptions
): convertedCreateXcframeworkOptions {
  const temp: convertedCreateXcframeworkOptions = {
    output: options.output,
  };
  if (typeof options.frameworks !== "undefined")
    temp["frameworks"] = options.frameworks;
  if (typeof options.frameworksWithDsyms !== "undefined")
    temp["frameworks_with_dsyms"] = options.frameworksWithDsyms;
  if (typeof options.libraries !== "undefined")
    temp["libraries"] = options.libraries;
  if (typeof options.librariesWithHeadersOrDsyms !== "undefined")
    temp["libraries_with_headers_or_dsyms"] =
      options.librariesWithHeadersOrDsyms;
  if (typeof options.allowInternalDistribution !== "undefined")
    temp["allow_internal_distribution"] = options.allowInternalDistribution;
  return temp;
}

/** @ignore */
type convertedDangerOptions = {
  use_bundle_exec: boolean;
  verbose: boolean;
  danger_id?: string;
  dangerfile?: string;
  github_api_token?: string;
  fail_on_errors?: boolean;
  new_comment?: boolean;
  remove_previous_comments?: boolean;
  base?: string;
  head?: string;
  pr?: string;
  fail_if_no_pr: boolean;
};
/** @ignore Convert DangerOptions to the shape used by the Fastlane service
 */
function convertDangerOptions(options: DangerOptions): convertedDangerOptions {
  const temp: convertedDangerOptions = {
    use_bundle_exec: options.useBundleExec,
    verbose: options.verbose,
    fail_if_no_pr: options.failIfNoPr,
  };
  if (typeof options.dangerId !== "undefined")
    temp["danger_id"] = options.dangerId;
  if (typeof options.dangerfile !== "undefined")
    temp["dangerfile"] = options.dangerfile;
  if (typeof options.githubApiToken !== "undefined")
    temp["github_api_token"] = options.githubApiToken;
  if (typeof options.failOnErrors !== "undefined")
    temp["fail_on_errors"] = options.failOnErrors;
  if (typeof options.newComment !== "undefined")
    temp["new_comment"] = options.newComment;
  if (typeof options.removePreviousComments !== "undefined")
    temp["remove_previous_comments"] = options.removePreviousComments;
  if (typeof options.base !== "undefined") temp["base"] = options.base;
  if (typeof options.head !== "undefined") temp["head"] = options.head;
  if (typeof options.pr !== "undefined") temp["pr"] = options.pr;
  return temp;
}

/** @ignore */
type convertedDebugOptions = {};
/** @ignore Convert DebugOptions to the shape used by the Fastlane service
 */
function convertDebugOptions(options: DebugOptions): convertedDebugOptions {
  const temp: convertedDebugOptions = {};

  return temp;
}

/** @ignore */
type convertedDefaultPlatformOptions = {};
/** @ignore Convert DefaultPlatformOptions to the shape used by the Fastlane service
 */
function convertDefaultPlatformOptions(
  options: DefaultPlatformOptions
): convertedDefaultPlatformOptions {
  const temp: convertedDefaultPlatformOptions = {};

  return temp;
}

/** @ignore */
type convertedDeleteKeychainOptions = {
  name?: string;
  keychain_path?: string;
};
/** @ignore Convert DeleteKeychainOptions to the shape used by the Fastlane service
 */
function convertDeleteKeychainOptions(
  options: DeleteKeychainOptions
): convertedDeleteKeychainOptions {
  const temp: convertedDeleteKeychainOptions = {};
  if (typeof options.name !== "undefined") temp["name"] = options.name;
  if (typeof options.keychainPath !== "undefined")
    temp["keychain_path"] = options.keychainPath;
  return temp;
}

/** @ignore */
type convertedDeliverOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  app_identifier?: string;
  app_version?: string;
  ipa?: string;
  pkg?: string;
  build_number?: string;
  platform?: string;
  edit_live?: boolean;
  use_live_version: boolean;
  metadata_path?: string;
  screenshots_path?: string;
  skip_binary_upload: boolean;
  skip_screenshots: boolean;
  skip_metadata: boolean;
  skip_app_version_update: boolean;
  force: boolean;
  overwrite_screenshots: boolean;
  sync_screenshots: boolean;
  submit_for_review: boolean;
  reject_if_possible: boolean;
  automatic_release?: boolean;
  auto_release_date?: any;
  phased_release?: boolean;
  reset_ratings?: boolean;
  price_tier?: any;
  app_rating_config_path?: string;
  submission_information?: { string: string };
  team_id?: string;
  team_name?: string;
  dev_portal_team_id?: string;
  dev_portal_team_name?: string;
  itc_provider?: string;
  run_precheck_before_submit: boolean;
  precheck_default_rule_level: any;
  individual_metadata_items?: string[];
  app_icon?: string;
  apple_watch_app_icon?: string;
  copyright?: string;
  primary_category?: string;
  secondary_category?: string;
  primary_first_sub_category?: string;
  primary_second_sub_category?: string;
  secondary_first_sub_category?: string;
  secondary_second_sub_category?: string;
  trade_representative_contact_information?: { string: string };
  app_review_information?: { string: string };
  app_review_attachment_file?: string;
  description?: { string: string };
  name?: { string: string };
  subtitle?: { string: string };
  keywords?: { string: string };
  promotional_text?: { string: string };
  release_notes?: { string: string };
  privacy_url?: { string: string };
  apple_tv_privacy_policy?: { string: string };
  support_url?: { string: string };
  marketing_url?: { string: string };
  languages?: string[];
  ignore_language_directory_validation: boolean;
  precheck_include_in_app_purchases?: boolean;
  app?: any;
};
/** @ignore Convert DeliverOptions to the shape used by the Fastlane service
 */
function convertDeliverOptions(
  options: DeliverOptions
): convertedDeliverOptions {
  const temp: convertedDeliverOptions = {
    use_live_version: options.useLiveVersion,
    skip_binary_upload: options.skipBinaryUpload,
    skip_screenshots: options.skipScreenshots,
    skip_metadata: options.skipMetadata,
    skip_app_version_update: options.skipAppVersionUpdate,
    force: options.force,
    overwrite_screenshots: options.overwriteScreenshots,
    sync_screenshots: options.syncScreenshots,
    submit_for_review: options.submitForReview,
    reject_if_possible: options.rejectIfPossible,
    run_precheck_before_submit: options.runPrecheckBeforeSubmit,
    precheck_default_rule_level: options.precheckDefaultRuleLevel,
    ignore_language_directory_validation:
      options.ignoreLanguageDirectoryValidation,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.appVersion !== "undefined")
    temp["app_version"] = options.appVersion;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.pkg !== "undefined") temp["pkg"] = options.pkg;
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.editLive !== "undefined")
    temp["edit_live"] = options.editLive;
  if (typeof options.metadataPath !== "undefined")
    temp["metadata_path"] = options.metadataPath;
  if (typeof options.screenshotsPath !== "undefined")
    temp["screenshots_path"] = options.screenshotsPath;
  if (typeof options.automaticRelease !== "undefined")
    temp["automatic_release"] = options.automaticRelease;
  if (typeof options.autoReleaseDate !== "undefined")
    temp["auto_release_date"] = options.autoReleaseDate;
  if (typeof options.phasedRelease !== "undefined")
    temp["phased_release"] = options.phasedRelease;
  if (typeof options.resetRatings !== "undefined")
    temp["reset_ratings"] = options.resetRatings;
  if (typeof options.priceTier !== "undefined")
    temp["price_tier"] = options.priceTier;
  if (typeof options.appRatingConfigPath !== "undefined")
    temp["app_rating_config_path"] = options.appRatingConfigPath;
  if (typeof options.submissionInformation !== "undefined")
    temp["submission_information"] = options.submissionInformation;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.devPortalTeamId !== "undefined")
    temp["dev_portal_team_id"] = options.devPortalTeamId;
  if (typeof options.devPortalTeamName !== "undefined")
    temp["dev_portal_team_name"] = options.devPortalTeamName;
  if (typeof options.itcProvider !== "undefined")
    temp["itc_provider"] = options.itcProvider;
  if (typeof options.individualMetadataItems !== "undefined")
    temp["individual_metadata_items"] = options.individualMetadataItems;
  if (typeof options.appIcon !== "undefined")
    temp["app_icon"] = options.appIcon;
  if (typeof options.appleWatchAppIcon !== "undefined")
    temp["apple_watch_app_icon"] = options.appleWatchAppIcon;
  if (typeof options.copyright !== "undefined")
    temp["copyright"] = options.copyright;
  if (typeof options.primaryCategory !== "undefined")
    temp["primary_category"] = options.primaryCategory;
  if (typeof options.secondaryCategory !== "undefined")
    temp["secondary_category"] = options.secondaryCategory;
  if (typeof options.primaryFirstSubCategory !== "undefined")
    temp["primary_first_sub_category"] = options.primaryFirstSubCategory;
  if (typeof options.primarySecondSubCategory !== "undefined")
    temp["primary_second_sub_category"] = options.primarySecondSubCategory;
  if (typeof options.secondaryFirstSubCategory !== "undefined")
    temp["secondary_first_sub_category"] = options.secondaryFirstSubCategory;
  if (typeof options.secondarySecondSubCategory !== "undefined")
    temp["secondary_second_sub_category"] = options.secondarySecondSubCategory;
  if (typeof options.tradeRepresentativeContactInformation !== "undefined")
    temp["trade_representative_contact_information"] =
      options.tradeRepresentativeContactInformation;
  if (typeof options.appReviewInformation !== "undefined")
    temp["app_review_information"] = options.appReviewInformation;
  if (typeof options.appReviewAttachmentFile !== "undefined")
    temp["app_review_attachment_file"] = options.appReviewAttachmentFile;
  if (typeof options.description !== "undefined")
    temp["description"] = options.description;
  if (typeof options.name !== "undefined") temp["name"] = options.name;
  if (typeof options.subtitle !== "undefined")
    temp["subtitle"] = options.subtitle;
  if (typeof options.keywords !== "undefined")
    temp["keywords"] = options.keywords;
  if (typeof options.promotionalText !== "undefined")
    temp["promotional_text"] = options.promotionalText;
  if (typeof options.releaseNotes !== "undefined")
    temp["release_notes"] = options.releaseNotes;
  if (typeof options.privacyUrl !== "undefined")
    temp["privacy_url"] = options.privacyUrl;
  if (typeof options.appleTvPrivacyPolicy !== "undefined")
    temp["apple_tv_privacy_policy"] = options.appleTvPrivacyPolicy;
  if (typeof options.supportUrl !== "undefined")
    temp["support_url"] = options.supportUrl;
  if (typeof options.marketingUrl !== "undefined")
    temp["marketing_url"] = options.marketingUrl;
  if (typeof options.languages !== "undefined")
    temp["languages"] = options.languages;
  if (typeof options.precheckIncludeInAppPurchases !== "undefined")
    temp["precheck_include_in_app_purchases"] =
      options.precheckIncludeInAppPurchases;
  if (typeof options.app !== "undefined") temp["app"] = options.app;
  return temp;
}

/** @ignore */
type convertedDeploygateOptions = {
  api_token: string;
  user: string;
  ipa?: string;
  apk?: string;
  message: string;
  distribution_key?: string;
  release_note?: string;
  disable_notify?: boolean;
  distribution_name?: string;
};
/** @ignore Convert DeploygateOptions to the shape used by the Fastlane service
 */
function convertDeploygateOptions(
  options: DeploygateOptions
): convertedDeploygateOptions {
  const temp: convertedDeploygateOptions = {
    api_token: options.apiToken,
    user: options.user,
    message: options.message,
  };
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.apk !== "undefined") temp["apk"] = options.apk;
  if (typeof options.distributionKey !== "undefined")
    temp["distribution_key"] = options.distributionKey;
  if (typeof options.releaseNote !== "undefined")
    temp["release_note"] = options.releaseNote;
  if (typeof options.disableNotify !== "undefined")
    temp["disable_notify"] = options.disableNotify;
  if (typeof options.distributionName !== "undefined")
    temp["distribution_name"] = options.distributionName;
  return temp;
}

/** @ignore */
type convertedDotgpgEnvironmentOptions = {
  dotgpg_file: string;
};
/** @ignore Convert DotgpgEnvironmentOptions to the shape used by the Fastlane service
 */
function convertDotgpgEnvironmentOptions(
  options: DotgpgEnvironmentOptions
): convertedDotgpgEnvironmentOptions {
  const temp: convertedDotgpgEnvironmentOptions = {
    dotgpg_file: options.dotgpgFile,
  };

  return temp;
}

/** @ignore */
type convertedDownloadOptions = {
  url: string;
};
/** @ignore Convert DownloadOptions to the shape used by the Fastlane service
 */
function convertDownloadOptions(
  options: DownloadOptions
): convertedDownloadOptions {
  const temp: convertedDownloadOptions = {
    url: options.url,
  };

  return temp;
}

/** @ignore */
type convertedDownloadAppPrivacyDetailsFromAppStoreOptions = {
  username: string;
  app_identifier: string;
  team_id?: string;
  team_name?: string;
  output_json_path: string;
};
/** @ignore Convert DownloadAppPrivacyDetailsFromAppStoreOptions to the shape used by the Fastlane service
 */
function convertDownloadAppPrivacyDetailsFromAppStoreOptions(
  options: DownloadAppPrivacyDetailsFromAppStoreOptions
): convertedDownloadAppPrivacyDetailsFromAppStoreOptions {
  const temp: convertedDownloadAppPrivacyDetailsFromAppStoreOptions = {
    username: options.username,
    app_identifier: options.appIdentifier,
    output_json_path: options.outputJsonPath,
  };
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  return temp;
}

/** @ignore */
type convertedDownloadDsymsOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  username: string;
  app_identifier: string;
  team_id?: string;
  team_name?: string;
  platform: string;
  version?: string;
  build_number?: string;
  min_version?: string;
  after_uploaded_date?: string;
  output_directory?: string;
  wait_for_dsym_processing?: boolean;
  wait_timeout?: any;
};
/** @ignore Convert DownloadDsymsOptions to the shape used by the Fastlane service
 */
function convertDownloadDsymsOptions(
  options: DownloadDsymsOptions
): convertedDownloadDsymsOptions {
  const temp: convertedDownloadDsymsOptions = {
    username: options.username,
    app_identifier: options.appIdentifier,
    platform: options.platform,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.version !== "undefined") temp["version"] = options.version;
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.minVersion !== "undefined")
    temp["min_version"] = options.minVersion;
  if (typeof options.afterUploadedDate !== "undefined")
    temp["after_uploaded_date"] = options.afterUploadedDate;
  if (typeof options.outputDirectory !== "undefined")
    temp["output_directory"] = options.outputDirectory;
  if (typeof options.waitForDsymProcessing !== "undefined")
    temp["wait_for_dsym_processing"] = options.waitForDsymProcessing;
  if (typeof options.waitTimeout !== "undefined")
    temp["wait_timeout"] = options.waitTimeout;
  return temp;
}

/** @ignore */
type convertedDownloadFromPlayStoreOptions = {
  package_name: string;
  version_name?: string;
  track: string;
  metadata_path?: string;
  key?: string;
  issuer?: string;
  json_key?: string;
  json_key_data?: string;
  root_url?: string;
  timeout?: any;
};
/** @ignore Convert DownloadFromPlayStoreOptions to the shape used by the Fastlane service
 */
function convertDownloadFromPlayStoreOptions(
  options: DownloadFromPlayStoreOptions
): convertedDownloadFromPlayStoreOptions {
  const temp: convertedDownloadFromPlayStoreOptions = {
    package_name: options.packageName,
    track: options.track,
  };
  if (typeof options.versionName !== "undefined")
    temp["version_name"] = options.versionName;
  if (typeof options.metadataPath !== "undefined")
    temp["metadata_path"] = options.metadataPath;
  if (typeof options.key !== "undefined") temp["key"] = options.key;
  if (typeof options.issuer !== "undefined") temp["issuer"] = options.issuer;
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  if (typeof options.rootUrl !== "undefined")
    temp["root_url"] = options.rootUrl;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedDsymZipOptions = {
  archive_path?: string;
  dsym_path?: string;
  all?: boolean;
};
/** @ignore Convert DsymZipOptions to the shape used by the Fastlane service
 */
function convertDsymZipOptions(
  options: DsymZipOptions
): convertedDsymZipOptions {
  const temp: convertedDsymZipOptions = {};
  if (typeof options.archivePath !== "undefined")
    temp["archive_path"] = options.archivePath;
  if (typeof options.dsymPath !== "undefined")
    temp["dsym_path"] = options.dsymPath;
  if (typeof options.all !== "undefined") temp["all"] = options.all;
  return temp;
}

/** @ignore */
type convertedEchoOptions = {
  message?: string;
};
/** @ignore Convert EchoOptions to the shape used by the Fastlane service
 */
function convertEchoOptions(options: EchoOptions): convertedEchoOptions {
  const temp: convertedEchoOptions = {};
  if (typeof options.message !== "undefined") temp["message"] = options.message;
  return temp;
}

/** @ignore */
type convertedEnsureBundleExecOptions = {};
/** @ignore Convert EnsureBundleExecOptions to the shape used by the Fastlane service
 */
function convertEnsureBundleExecOptions(
  options: EnsureBundleExecOptions
): convertedEnsureBundleExecOptions {
  const temp: convertedEnsureBundleExecOptions = {};

  return temp;
}

/** @ignore */
type convertedEnsureEnvVarsOptions = {
  env_vars: string[];
};
/** @ignore Convert EnsureEnvVarsOptions to the shape used by the Fastlane service
 */
function convertEnsureEnvVarsOptions(
  options: EnsureEnvVarsOptions
): convertedEnsureEnvVarsOptions {
  const temp: convertedEnsureEnvVarsOptions = {
    env_vars: options.envVars,
  };

  return temp;
}

/** @ignore */
type convertedEnsureGitBranchOptions = {
  branch: string;
};
/** @ignore Convert EnsureGitBranchOptions to the shape used by the Fastlane service
 */
function convertEnsureGitBranchOptions(
  options: EnsureGitBranchOptions
): convertedEnsureGitBranchOptions {
  const temp: convertedEnsureGitBranchOptions = {
    branch: options.branch,
  };

  return temp;
}

/** @ignore */
type convertedEnsureGitStatusCleanOptions = {
  show_uncommitted_changes?: boolean;
  show_diff?: boolean;
  ignored?: string;
};
/** @ignore Convert EnsureGitStatusCleanOptions to the shape used by the Fastlane service
 */
function convertEnsureGitStatusCleanOptions(
  options: EnsureGitStatusCleanOptions
): convertedEnsureGitStatusCleanOptions {
  const temp: convertedEnsureGitStatusCleanOptions = {};
  if (typeof options.showUncommittedChanges !== "undefined")
    temp["show_uncommitted_changes"] = options.showUncommittedChanges;
  if (typeof options.showDiff !== "undefined")
    temp["show_diff"] = options.showDiff;
  if (typeof options.ignored !== "undefined") temp["ignored"] = options.ignored;
  return temp;
}

/** @ignore */
type convertedEnsureNoDebugCodeOptions = {
  text: string;
  path: string;
  extension?: string;
  extensions?: string[];
  exclude?: string;
  exclude_dirs?: string[];
};
/** @ignore Convert EnsureNoDebugCodeOptions to the shape used by the Fastlane service
 */
function convertEnsureNoDebugCodeOptions(
  options: EnsureNoDebugCodeOptions
): convertedEnsureNoDebugCodeOptions {
  const temp: convertedEnsureNoDebugCodeOptions = {
    text: options.text,
    path: options.path,
  };
  if (typeof options.extension !== "undefined")
    temp["extension"] = options.extension;
  if (typeof options.extensions !== "undefined")
    temp["extensions"] = options.extensions;
  if (typeof options.exclude !== "undefined") temp["exclude"] = options.exclude;
  if (typeof options.excludeDirs !== "undefined")
    temp["exclude_dirs"] = options.excludeDirs;
  return temp;
}

/** @ignore */
type convertedEnsureXcodeVersionOptions = {
  version?: string;
  strict: boolean;
};
/** @ignore Convert EnsureXcodeVersionOptions to the shape used by the Fastlane service
 */
function convertEnsureXcodeVersionOptions(
  options: EnsureXcodeVersionOptions
): convertedEnsureXcodeVersionOptions {
  const temp: convertedEnsureXcodeVersionOptions = {
    strict: options.strict,
  };
  if (typeof options.version !== "undefined") temp["version"] = options.version;
  return temp;
}

/** @ignore */
type convertedEnvironmentVariableOptions = {
  set?: { string: string };
  get?: string;
  remove?: string;
};
/** @ignore Convert EnvironmentVariableOptions to the shape used by the Fastlane service
 */
function convertEnvironmentVariableOptions(
  options: EnvironmentVariableOptions
): convertedEnvironmentVariableOptions {
  const temp: convertedEnvironmentVariableOptions = {};
  if (typeof options.set !== "undefined") temp["set"] = options.set;
  if (typeof options.get !== "undefined") temp["get"] = options.get;
  if (typeof options.remove !== "undefined") temp["remove"] = options.remove;
  return temp;
}

/** @ignore */
type convertedErbOptions = {
  template: string;
  destination?: string;
  placeholders: { string: string };
  trim_mode?: string;
};
/** @ignore Convert ErbOptions to the shape used by the Fastlane service
 */
function convertErbOptions(options: ErbOptions): convertedErbOptions {
  const temp: convertedErbOptions = {
    template: options.template,
    placeholders: options.placeholders,
  };
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  if (typeof options.trimMode !== "undefined")
    temp["trim_mode"] = options.trimMode;
  return temp;
}

/** @ignore */
type convertedFastlaneVersionOptions = {};
/** @ignore Convert FastlaneVersionOptions to the shape used by the Fastlane service
 */
function convertFastlaneVersionOptions(
  options: FastlaneVersionOptions
): convertedFastlaneVersionOptions {
  const temp: convertedFastlaneVersionOptions = {};

  return temp;
}

/** @ignore */
type convertedFlockOptions = {
  message: string;
  token: string;
  base_url?: string;
};
/** @ignore Convert FlockOptions to the shape used by the Fastlane service
 */
function convertFlockOptions(options: FlockOptions): convertedFlockOptions {
  const temp: convertedFlockOptions = {
    message: options.message,
    token: options.token,
  };
  if (typeof options.baseUrl !== "undefined")
    temp["base_url"] = options.baseUrl;
  return temp;
}

/** @ignore */
type convertedFrameScreenshotsOptions = {
  white?: boolean;
  silver?: boolean;
  rose_gold?: boolean;
  gold?: boolean;
  force_device_type?: string;
  use_legacy_iphone5s: boolean;
  use_legacy_iphone6s: boolean;
  use_legacy_iphone7: boolean;
  use_legacy_iphonex: boolean;
  use_legacy_iphonexr: boolean;
  use_legacy_iphonexs: boolean;
  use_legacy_iphonexsmax: boolean;
  force_orientation_block?: any;
  debug_mode: boolean;
  resume: boolean;
  use_platform?: string;
  path: string;
};
/** @ignore Convert FrameScreenshotsOptions to the shape used by the Fastlane service
 */
function convertFrameScreenshotsOptions(
  options: FrameScreenshotsOptions
): convertedFrameScreenshotsOptions {
  const temp: convertedFrameScreenshotsOptions = {
    use_legacy_iphone5s: options.useLegacyIphone5s,
    use_legacy_iphone6s: options.useLegacyIphone6s,
    use_legacy_iphone7: options.useLegacyIphone7,
    use_legacy_iphonex: options.useLegacyIphonex,
    use_legacy_iphonexr: options.useLegacyIphonexr,
    use_legacy_iphonexs: options.useLegacyIphonexs,
    use_legacy_iphonexsmax: options.useLegacyIphonexsmax,
    debug_mode: options.debugMode,
    resume: options.resume,
    path: options.path,
  };
  if (typeof options.white !== "undefined") temp["white"] = options.white;
  if (typeof options.silver !== "undefined") temp["silver"] = options.silver;
  if (typeof options.roseGold !== "undefined")
    temp["rose_gold"] = options.roseGold;
  if (typeof options.gold !== "undefined") temp["gold"] = options.gold;
  if (typeof options.forceDeviceType !== "undefined")
    temp["force_device_type"] = options.forceDeviceType;
  if (typeof options.forceOrientationBlock !== "undefined")
    temp["force_orientation_block"] = options.forceOrientationBlock;
  if (typeof options.usePlatform !== "undefined")
    temp["use_platform"] = options.usePlatform;
  return temp;
}

/** @ignore */
type convertedFrameitOptions = {
  white?: boolean;
  silver?: boolean;
  rose_gold?: boolean;
  gold?: boolean;
  force_device_type?: string;
  use_legacy_iphone5s: boolean;
  use_legacy_iphone6s: boolean;
  use_legacy_iphone7: boolean;
  use_legacy_iphonex: boolean;
  use_legacy_iphonexr: boolean;
  use_legacy_iphonexs: boolean;
  use_legacy_iphonexsmax: boolean;
  force_orientation_block?: any;
  debug_mode: boolean;
  resume: boolean;
  use_platform?: string;
  path: string;
};
/** @ignore Convert FrameitOptions to the shape used by the Fastlane service
 */
function convertFrameitOptions(
  options: FrameitOptions
): convertedFrameitOptions {
  const temp: convertedFrameitOptions = {
    use_legacy_iphone5s: options.useLegacyIphone5s,
    use_legacy_iphone6s: options.useLegacyIphone6s,
    use_legacy_iphone7: options.useLegacyIphone7,
    use_legacy_iphonex: options.useLegacyIphonex,
    use_legacy_iphonexr: options.useLegacyIphonexr,
    use_legacy_iphonexs: options.useLegacyIphonexs,
    use_legacy_iphonexsmax: options.useLegacyIphonexsmax,
    debug_mode: options.debugMode,
    resume: options.resume,
    path: options.path,
  };
  if (typeof options.white !== "undefined") temp["white"] = options.white;
  if (typeof options.silver !== "undefined") temp["silver"] = options.silver;
  if (typeof options.roseGold !== "undefined")
    temp["rose_gold"] = options.roseGold;
  if (typeof options.gold !== "undefined") temp["gold"] = options.gold;
  if (typeof options.forceDeviceType !== "undefined")
    temp["force_device_type"] = options.forceDeviceType;
  if (typeof options.forceOrientationBlock !== "undefined")
    temp["force_orientation_block"] = options.forceOrientationBlock;
  if (typeof options.usePlatform !== "undefined")
    temp["use_platform"] = options.usePlatform;
  return temp;
}

/** @ignore */
type convertedGcovrOptions = {};
/** @ignore Convert GcovrOptions to the shape used by the Fastlane service
 */
function convertGcovrOptions(options: GcovrOptions): convertedGcovrOptions {
  const temp: convertedGcovrOptions = {};

  return temp;
}

/** @ignore */
type convertedGetBuildNumberOptions = {
  xcodeproj?: string;
  hide_error_when_versioning_disabled: boolean;
};
/** @ignore Convert GetBuildNumberOptions to the shape used by the Fastlane service
 */
function convertGetBuildNumberOptions(
  options: GetBuildNumberOptions
): convertedGetBuildNumberOptions {
  const temp: convertedGetBuildNumberOptions = {
    hide_error_when_versioning_disabled:
      options.hideErrorWhenVersioningDisabled,
  };
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  return temp;
}

/** @ignore */
type convertedGetBuildNumberRepositoryOptions = {
  use_hg_revision_number?: boolean;
};
/** @ignore Convert GetBuildNumberRepositoryOptions to the shape used by the Fastlane service
 */
function convertGetBuildNumberRepositoryOptions(
  options: GetBuildNumberRepositoryOptions
): convertedGetBuildNumberRepositoryOptions {
  const temp: convertedGetBuildNumberRepositoryOptions = {};
  if (typeof options.useHgRevisionNumber !== "undefined")
    temp["use_hg_revision_number"] = options.useHgRevisionNumber;
  return temp;
}

/** @ignore */
type convertedGetCertificatesOptions = {
  development: boolean;
  type?: string;
  force: boolean;
  generate_apple_certs: boolean;
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  team_id?: string;
  team_name?: string;
  filename?: string;
  output_path: string;
  keychain_path: string;
  keychain_password?: string;
  skip_set_partition_list: boolean;
  platform: string;
};
/** @ignore Convert GetCertificatesOptions to the shape used by the Fastlane service
 */
function convertGetCertificatesOptions(
  options: GetCertificatesOptions
): convertedGetCertificatesOptions {
  const temp: convertedGetCertificatesOptions = {
    development: options.development,
    force: options.force,
    generate_apple_certs: options.generateAppleCerts,
    output_path: options.outputPath,
    keychain_path: options.keychainPath,
    skip_set_partition_list: options.skipSetPartitionList,
    platform: options.platform,
  };
  if (typeof options.type !== "undefined") temp["type"] = options.type;
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.filename !== "undefined")
    temp["filename"] = options.filename;
  if (typeof options.keychainPassword !== "undefined")
    temp["keychain_password"] = options.keychainPassword;
  return temp;
}

/** @ignore */
type convertedGetGithubReleaseOptions = {
  url: string;
  server_url?: string;
  version: string;
  api_token?: string;
  api_bearer?: string;
};
/** @ignore Convert GetGithubReleaseOptions to the shape used by the Fastlane service
 */
function convertGetGithubReleaseOptions(
  options: GetGithubReleaseOptions
): convertedGetGithubReleaseOptions {
  const temp: convertedGetGithubReleaseOptions = {
    url: options.url,
    version: options.version,
  };
  if (typeof options.serverUrl !== "undefined")
    temp["server_url"] = options.serverUrl;
  if (typeof options.apiToken !== "undefined")
    temp["api_token"] = options.apiToken;
  if (typeof options.apiBearer !== "undefined")
    temp["api_bearer"] = options.apiBearer;
  return temp;
}

/** @ignore */
type convertedGetInfoPlistValueOptions = {
  key: string;
  path: string;
};
/** @ignore Convert GetInfoPlistValueOptions to the shape used by the Fastlane service
 */
function convertGetInfoPlistValueOptions(
  options: GetInfoPlistValueOptions
): convertedGetInfoPlistValueOptions {
  const temp: convertedGetInfoPlistValueOptions = {
    key: options.key,
    path: options.path,
  };

  return temp;
}

/** @ignore */
type convertedGetIpaInfoPlistValueOptions = {
  key: string;
  ipa: string;
};
/** @ignore Convert GetIpaInfoPlistValueOptions to the shape used by the Fastlane service
 */
function convertGetIpaInfoPlistValueOptions(
  options: GetIpaInfoPlistValueOptions
): convertedGetIpaInfoPlistValueOptions {
  const temp: convertedGetIpaInfoPlistValueOptions = {
    key: options.key,
    ipa: options.ipa,
  };

  return temp;
}

/** @ignore */
type convertedGetManagedPlayStorePublishingRightsOptions = {
  json_key?: string;
  json_key_data?: string;
};
/** @ignore Convert GetManagedPlayStorePublishingRightsOptions to the shape used by the Fastlane service
 */
function convertGetManagedPlayStorePublishingRightsOptions(
  options: GetManagedPlayStorePublishingRightsOptions
): convertedGetManagedPlayStorePublishingRightsOptions {
  const temp: convertedGetManagedPlayStorePublishingRightsOptions = {};
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  return temp;
}

/** @ignore */
type convertedGetProvisioningProfileOptions = {
  adhoc: any;
  developer_id: any;
  development: any;
  skip_install: any;
  force: any;
  app_identifier: string;
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  team_id?: string;
  team_name?: string;
  provisioning_name?: string;
  ignore_profiles_with_different_name?: any;
  output_path: string;
  cert_id?: string;
  cert_owner_name?: string;
  filename?: string;
  skip_fetch_profiles: any;
  include_all_certificates: any;
  skip_certificate_verification: any;
  platform: any;
  readonly?: any;
  template_name?: string;
  fail_on_name_taken?: any;
};
/** @ignore Convert GetProvisioningProfileOptions to the shape used by the Fastlane service
 */
function convertGetProvisioningProfileOptions(
  options: GetProvisioningProfileOptions
): convertedGetProvisioningProfileOptions {
  const temp: convertedGetProvisioningProfileOptions = {
    adhoc: options.adhoc,
    developer_id: options.developerId,
    development: options.development,
    skip_install: options.skipInstall,
    force: options.force,
    app_identifier: options.appIdentifier,
    output_path: options.outputPath,
    skip_fetch_profiles: options.skipFetchProfiles,
    include_all_certificates: options.includeAllCertificates,
    skip_certificate_verification: options.skipCertificateVerification,
    platform: options.platform,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.provisioningName !== "undefined")
    temp["provisioning_name"] = options.provisioningName;
  if (typeof options.ignoreProfilesWithDifferentName !== "undefined")
    temp["ignore_profiles_with_different_name"] =
      options.ignoreProfilesWithDifferentName;
  if (typeof options.certId !== "undefined") temp["cert_id"] = options.certId;
  if (typeof options.certOwnerName !== "undefined")
    temp["cert_owner_name"] = options.certOwnerName;
  if (typeof options.filename !== "undefined")
    temp["filename"] = options.filename;
  if (typeof options.readonly !== "undefined")
    temp["readonly"] = options.readonly;
  if (typeof options.templateName !== "undefined")
    temp["template_name"] = options.templateName;
  if (typeof options.failOnNameTaken !== "undefined")
    temp["fail_on_name_taken"] = options.failOnNameTaken;
  return temp;
}

/** @ignore */
type convertedGetPushCertificateOptions = {
  platform: string;
  development: any;
  website_push: any;
  generate_p12: any;
  active_days_limit: any;
  force: any;
  save_private_key: any;
  app_identifier: string;
  username: string;
  team_id?: string;
  team_name?: string;
  p12_password?: string;
  pem_name?: string;
  output_path: string;
  new_profile?: any;
};
/** @ignore Convert GetPushCertificateOptions to the shape used by the Fastlane service
 */
function convertGetPushCertificateOptions(
  options: GetPushCertificateOptions
): convertedGetPushCertificateOptions {
  const temp: convertedGetPushCertificateOptions = {
    platform: options.platform,
    development: options.development,
    website_push: options.websitePush,
    generate_p12: options.generateP12,
    active_days_limit: options.activeDaysLimit,
    force: options.force,
    save_private_key: options.savePrivateKey,
    app_identifier: options.appIdentifier,
    username: options.username,
    output_path: options.outputPath,
  };
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.p12Password !== "undefined")
    temp["p12_password"] = options.p12Password;
  if (typeof options.pemName !== "undefined")
    temp["pem_name"] = options.pemName;
  if (typeof options.newProfile !== "undefined")
    temp["new_profile"] = options.newProfile;
  return temp;
}

/** @ignore */
type convertedGetVersionNumberOptions = {
  xcodeproj?: string;
  target?: string;
  configuration?: string;
};
/** @ignore Convert GetVersionNumberOptions to the shape used by the Fastlane service
 */
function convertGetVersionNumberOptions(
  options: GetVersionNumberOptions
): convertedGetVersionNumberOptions {
  const temp: convertedGetVersionNumberOptions = {};
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  if (typeof options.target !== "undefined") temp["target"] = options.target;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  return temp;
}

/** @ignore */
type convertedGitAddOptions = {
  path?: string[];
  shell_escape?: boolean;
  pathspec?: string;
};
/** @ignore Convert GitAddOptions to the shape used by the Fastlane service
 */
function convertGitAddOptions(options: GitAddOptions): convertedGitAddOptions {
  const temp: convertedGitAddOptions = {};
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.shellEscape !== "undefined")
    temp["shell_escape"] = options.shellEscape;
  if (typeof options.pathspec !== "undefined")
    temp["pathspec"] = options.pathspec;
  return temp;
}

/** @ignore */
type convertedGitBranchOptions = {};
/** @ignore Convert GitBranchOptions to the shape used by the Fastlane service
 */
function convertGitBranchOptions(
  options: GitBranchOptions
): convertedGitBranchOptions {
  const temp: convertedGitBranchOptions = {};

  return temp;
}

/** @ignore */
type convertedGitCommitOptions = {
  path: string[];
  message: string;
  skip_git_hooks?: boolean;
  allow_nothing_to_commit?: boolean;
};
/** @ignore Convert GitCommitOptions to the shape used by the Fastlane service
 */
function convertGitCommitOptions(
  options: GitCommitOptions
): convertedGitCommitOptions {
  const temp: convertedGitCommitOptions = {
    path: options.path,
    message: options.message,
  };
  if (typeof options.skipGitHooks !== "undefined")
    temp["skip_git_hooks"] = options.skipGitHooks;
  if (typeof options.allowNothingToCommit !== "undefined")
    temp["allow_nothing_to_commit"] = options.allowNothingToCommit;
  return temp;
}

/** @ignore */
type convertedGitPullOptions = {
  only_tags?: boolean;
  rebase?: boolean;
};
/** @ignore Convert GitPullOptions to the shape used by the Fastlane service
 */
function convertGitPullOptions(
  options: GitPullOptions
): convertedGitPullOptions {
  const temp: convertedGitPullOptions = {};
  if (typeof options.onlyTags !== "undefined")
    temp["only_tags"] = options.onlyTags;
  if (typeof options.rebase !== "undefined") temp["rebase"] = options.rebase;
  return temp;
}

/** @ignore */
type convertedGitRemoteBranchOptions = {
  remote_name?: string;
};
/** @ignore Convert GitRemoteBranchOptions to the shape used by the Fastlane service
 */
function convertGitRemoteBranchOptions(
  options: GitRemoteBranchOptions
): convertedGitRemoteBranchOptions {
  const temp: convertedGitRemoteBranchOptions = {};
  if (typeof options.remoteName !== "undefined")
    temp["remote_name"] = options.remoteName;
  return temp;
}

/** @ignore */
type convertedGitSubmoduleUpdateOptions = {
  recursive: boolean;
  init: boolean;
};
/** @ignore Convert GitSubmoduleUpdateOptions to the shape used by the Fastlane service
 */
function convertGitSubmoduleUpdateOptions(
  options: GitSubmoduleUpdateOptions
): convertedGitSubmoduleUpdateOptions {
  const temp: convertedGitSubmoduleUpdateOptions = {
    recursive: options.recursive,
    init: options.init,
  };

  return temp;
}

/** @ignore */
type convertedGitTagExistsOptions = {
  tag: string;
  remote?: boolean;
  remote_name?: string;
};
/** @ignore Convert GitTagExistsOptions to the shape used by the Fastlane service
 */
function convertGitTagExistsOptions(
  options: GitTagExistsOptions
): convertedGitTagExistsOptions {
  const temp: convertedGitTagExistsOptions = {
    tag: options.tag,
  };
  if (typeof options.remote !== "undefined") temp["remote"] = options.remote;
  if (typeof options.remoteName !== "undefined")
    temp["remote_name"] = options.remoteName;
  return temp;
}

/** @ignore */
type convertedGithubApiOptions = {
  server_url?: string;
  api_token?: string;
  api_bearer?: string;
  http_method?: string;
  body?: string;
  raw_body?: string;
  path?: string;
  url?: string;
  error_handlers?: { string: string };
  headers?: { string: string };
  secure?: boolean;
};
/** @ignore Convert GithubApiOptions to the shape used by the Fastlane service
 */
function convertGithubApiOptions(
  options: GithubApiOptions
): convertedGithubApiOptions {
  const temp: convertedGithubApiOptions = {};
  if (typeof options.serverUrl !== "undefined")
    temp["server_url"] = options.serverUrl;
  if (typeof options.apiToken !== "undefined")
    temp["api_token"] = options.apiToken;
  if (typeof options.apiBearer !== "undefined")
    temp["api_bearer"] = options.apiBearer;
  if (typeof options.httpMethod !== "undefined")
    temp["http_method"] = options.httpMethod;
  if (typeof options.body !== "undefined") temp["body"] = options.body;
  if (typeof options.rawBody !== "undefined")
    temp["raw_body"] = options.rawBody;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.url !== "undefined") temp["url"] = options.url;
  if (typeof options.errorHandlers !== "undefined")
    temp["error_handlers"] = options.errorHandlers;
  if (typeof options.headers !== "undefined") temp["headers"] = options.headers;
  if (typeof options.secure !== "undefined") temp["secure"] = options.secure;
  return temp;
}

/** @ignore */
type convertedGooglePlayTrackReleaseNamesOptions = {
  package_name: string;
  track: string;
  key?: string;
  issuer?: string;
  json_key?: string;
  json_key_data?: string;
  root_url?: string;
  timeout?: any;
};
/** @ignore Convert GooglePlayTrackReleaseNamesOptions to the shape used by the Fastlane service
 */
function convertGooglePlayTrackReleaseNamesOptions(
  options: GooglePlayTrackReleaseNamesOptions
): convertedGooglePlayTrackReleaseNamesOptions {
  const temp: convertedGooglePlayTrackReleaseNamesOptions = {
    package_name: options.packageName,
    track: options.track,
  };
  if (typeof options.key !== "undefined") temp["key"] = options.key;
  if (typeof options.issuer !== "undefined") temp["issuer"] = options.issuer;
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  if (typeof options.rootUrl !== "undefined")
    temp["root_url"] = options.rootUrl;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedGooglePlayTrackVersionCodesOptions = {
  package_name: string;
  track: string;
  key?: string;
  issuer?: string;
  json_key?: string;
  json_key_data?: string;
  root_url?: string;
  timeout?: any;
};
/** @ignore Convert GooglePlayTrackVersionCodesOptions to the shape used by the Fastlane service
 */
function convertGooglePlayTrackVersionCodesOptions(
  options: GooglePlayTrackVersionCodesOptions
): convertedGooglePlayTrackVersionCodesOptions {
  const temp: convertedGooglePlayTrackVersionCodesOptions = {
    package_name: options.packageName,
    track: options.track,
  };
  if (typeof options.key !== "undefined") temp["key"] = options.key;
  if (typeof options.issuer !== "undefined") temp["issuer"] = options.issuer;
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  if (typeof options.rootUrl !== "undefined")
    temp["root_url"] = options.rootUrl;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedGradleOptions = {
  task?: string;
  flavor?: string;
  build_type?: string;
  tasks?: string[];
  flags?: string;
  project_dir: string;
  gradle_path?: string;
  properties?: { string: string };
  system_properties?: { string: string };
  serial: string;
  print_command: boolean;
  print_command_output: boolean;
};
/** @ignore Convert GradleOptions to the shape used by the Fastlane service
 */
function convertGradleOptions(options: GradleOptions): convertedGradleOptions {
  const temp: convertedGradleOptions = {
    project_dir: options.projectDir,
    serial: options.serial,
    print_command: options.printCommand,
    print_command_output: options.printCommandOutput,
  };
  if (typeof options.task !== "undefined") temp["task"] = options.task;
  if (typeof options.flavor !== "undefined") temp["flavor"] = options.flavor;
  if (typeof options.buildType !== "undefined")
    temp["build_type"] = options.buildType;
  if (typeof options.tasks !== "undefined") temp["tasks"] = options.tasks;
  if (typeof options.flags !== "undefined") temp["flags"] = options.flags;
  if (typeof options.gradlePath !== "undefined")
    temp["gradle_path"] = options.gradlePath;
  if (typeof options.properties !== "undefined")
    temp["properties"] = options.properties;
  if (typeof options.systemProperties !== "undefined")
    temp["system_properties"] = options.systemProperties;
  return temp;
}

/** @ignore */
type convertedGymOptions = {
  workspace?: string;
  project?: string;
  scheme?: string;
  clean: boolean;
  output_directory: string;
  output_name?: string;
  configuration?: string;
  silent: boolean;
  codesigning_identity?: string;
  skip_package_ipa: boolean;
  skip_package_pkg: boolean;
  include_symbols?: boolean;
  include_bitcode?: boolean;
  export_method?: string;
  export_options?: { string: string };
  export_xcargs?: string;
  skip_build_archive?: boolean;
  skip_archive?: boolean;
  skip_codesigning?: boolean;
  catalyst_platform?: string;
  installer_cert_name?: string;
  build_path?: string;
  archive_path?: string;
  derived_data_path?: string;
  result_bundle?: boolean;
  result_bundle_path?: string;
  buildlog_path: string;
  sdk?: string;
  toolchain?: string;
  destination?: string;
  export_team_id?: string;
  xcargs?: string;
  xcconfig?: string;
  suppress_xcode_output?: boolean;
  xcodebuild_formatter: string;
  disable_xcpretty?: boolean;
  xcpretty_test_format?: boolean;
  xcpretty_formatter?: string;
  xcpretty_report_junit?: string;
  xcpretty_report_html?: string;
  xcpretty_report_json?: string;
  xcpretty_utf?: boolean;
  analyze_build_time?: boolean;
  skip_profile_detection?: boolean;
  xcodebuild_command?: string;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  use_system_scm?: boolean;
};
/** @ignore Convert GymOptions to the shape used by the Fastlane service
 */
function convertGymOptions(options: GymOptions): convertedGymOptions {
  const temp: convertedGymOptions = {
    clean: options.clean,
    output_directory: options.outputDirectory,
    silent: options.silent,
    skip_package_ipa: options.skipPackageIpa,
    skip_package_pkg: options.skipPackagePkg,
    buildlog_path: options.buildlogPath,
    xcodebuild_formatter: options.xcodebuildFormatter,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.outputName !== "undefined")
    temp["output_name"] = options.outputName;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.codesigningIdentity !== "undefined")
    temp["codesigning_identity"] = options.codesigningIdentity;
  if (typeof options.includeSymbols !== "undefined")
    temp["include_symbols"] = options.includeSymbols;
  if (typeof options.includeBitcode !== "undefined")
    temp["include_bitcode"] = options.includeBitcode;
  if (typeof options.exportMethod !== "undefined")
    temp["export_method"] = options.exportMethod;
  if (typeof options.exportOptions !== "undefined")
    temp["export_options"] = options.exportOptions;
  if (typeof options.exportXcargs !== "undefined")
    temp["export_xcargs"] = options.exportXcargs;
  if (typeof options.skipBuildArchive !== "undefined")
    temp["skip_build_archive"] = options.skipBuildArchive;
  if (typeof options.skipArchive !== "undefined")
    temp["skip_archive"] = options.skipArchive;
  if (typeof options.skipCodesigning !== "undefined")
    temp["skip_codesigning"] = options.skipCodesigning;
  if (typeof options.catalystPlatform !== "undefined")
    temp["catalyst_platform"] = options.catalystPlatform;
  if (typeof options.installerCertName !== "undefined")
    temp["installer_cert_name"] = options.installerCertName;
  if (typeof options.buildPath !== "undefined")
    temp["build_path"] = options.buildPath;
  if (typeof options.archivePath !== "undefined")
    temp["archive_path"] = options.archivePath;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.resultBundlePath !== "undefined")
    temp["result_bundle_path"] = options.resultBundlePath;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.toolchain !== "undefined")
    temp["toolchain"] = options.toolchain;
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  if (typeof options.exportTeamId !== "undefined")
    temp["export_team_id"] = options.exportTeamId;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.xcprettyTestFormat !== "undefined")
    temp["xcpretty_test_format"] = options.xcprettyTestFormat;
  if (typeof options.xcprettyFormatter !== "undefined")
    temp["xcpretty_formatter"] = options.xcprettyFormatter;
  if (typeof options.xcprettyReportJunit !== "undefined")
    temp["xcpretty_report_junit"] = options.xcprettyReportJunit;
  if (typeof options.xcprettyReportHtml !== "undefined")
    temp["xcpretty_report_html"] = options.xcprettyReportHtml;
  if (typeof options.xcprettyReportJson !== "undefined")
    temp["xcpretty_report_json"] = options.xcprettyReportJson;
  if (typeof options.xcprettyUtf !== "undefined")
    temp["xcpretty_utf"] = options.xcprettyUtf;
  if (typeof options.analyzeBuildTime !== "undefined")
    temp["analyze_build_time"] = options.analyzeBuildTime;
  if (typeof options.skipProfileDetection !== "undefined")
    temp["skip_profile_detection"] = options.skipProfileDetection;
  if (typeof options.xcodebuildCommand !== "undefined")
    temp["xcodebuild_command"] = options.xcodebuildCommand;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.useSystemScm !== "undefined")
    temp["use_system_scm"] = options.useSystemScm;
  return temp;
}

/** @ignore */
type convertedHgAddTagOptions = {
  tag: string;
};
/** @ignore Convert HgAddTagOptions to the shape used by the Fastlane service
 */
function convertHgAddTagOptions(
  options: HgAddTagOptions
): convertedHgAddTagOptions {
  const temp: convertedHgAddTagOptions = {
    tag: options.tag,
  };

  return temp;
}

/** @ignore */
type convertedHgCommitVersionBumpOptions = {
  message: string;
  xcodeproj?: string;
  force?: boolean;
  test_dirty_files?: string;
  test_expected_files?: string;
};
/** @ignore Convert HgCommitVersionBumpOptions to the shape used by the Fastlane service
 */
function convertHgCommitVersionBumpOptions(
  options: HgCommitVersionBumpOptions
): convertedHgCommitVersionBumpOptions {
  const temp: convertedHgCommitVersionBumpOptions = {
    message: options.message,
  };
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  if (typeof options.force !== "undefined") temp["force"] = options.force;
  if (typeof options.testDirtyFiles !== "undefined")
    temp["test_dirty_files"] = options.testDirtyFiles;
  if (typeof options.testExpectedFiles !== "undefined")
    temp["test_expected_files"] = options.testExpectedFiles;
  return temp;
}

/** @ignore */
type convertedHgEnsureCleanStatusOptions = {};
/** @ignore Convert HgEnsureCleanStatusOptions to the shape used by the Fastlane service
 */
function convertHgEnsureCleanStatusOptions(
  options: HgEnsureCleanStatusOptions
): convertedHgEnsureCleanStatusOptions {
  const temp: convertedHgEnsureCleanStatusOptions = {};

  return temp;
}

/** @ignore */
type convertedHgPushOptions = {
  force: boolean;
  destination?: string;
};
/** @ignore Convert HgPushOptions to the shape used by the Fastlane service
 */
function convertHgPushOptions(options: HgPushOptions): convertedHgPushOptions {
  const temp: convertedHgPushOptions = {
    force: options.force,
  };
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  return temp;
}

/** @ignore */
type convertedHipchatOptions = {
  message: string;
  channel: string;
  api_token: string;
  custom_color?: string;
  success?: boolean;
  version: string;
  notify_room?: boolean;
  api_host?: string;
  message_format?: string;
  include_html_header?: boolean;
  from?: string;
};
/** @ignore Convert HipchatOptions to the shape used by the Fastlane service
 */
function convertHipchatOptions(
  options: HipchatOptions
): convertedHipchatOptions {
  const temp: convertedHipchatOptions = {
    message: options.message,
    channel: options.channel,
    api_token: options.apiToken,
    version: options.version,
  };
  if (typeof options.customColor !== "undefined")
    temp["custom_color"] = options.customColor;
  if (typeof options.success !== "undefined") temp["success"] = options.success;
  if (typeof options.notifyRoom !== "undefined")
    temp["notify_room"] = options.notifyRoom;
  if (typeof options.apiHost !== "undefined")
    temp["api_host"] = options.apiHost;
  if (typeof options.messageFormat !== "undefined")
    temp["message_format"] = options.messageFormat;
  if (typeof options.includeHtmlHeader !== "undefined")
    temp["include_html_header"] = options.includeHtmlHeader;
  if (typeof options.from !== "undefined") temp["from"] = options.from;
  return temp;
}

/** @ignore */
type convertedHockeyOptions = {
  apk?: string;
  api_token: string;
  ipa?: string;
  dsym?: string;
  create_update: boolean;
  notes: string;
  notify: string;
  status: string;
  create_status: string;
  notes_type: string;
  release_type: string;
  mandatory: string;
  teams?: string;
  users?: string;
  tags?: string;
  bundle_short_version?: string;
  bundle_version?: string;
  public_identifier?: string;
  commit_sha?: string;
  repository_url?: string;
  build_server_url?: string;
  upload_dsym_only: boolean;
  owner_id?: string;
  strategy: string;
  timeout?: any;
  bypass_cdn: boolean;
  dsa_signature?: string;
};
/** @ignore Convert HockeyOptions to the shape used by the Fastlane service
 */
function convertHockeyOptions(options: HockeyOptions): convertedHockeyOptions {
  const temp: convertedHockeyOptions = {
    api_token: options.apiToken,
    create_update: options.createUpdate,
    notes: options.notes,
    notify: options.notify,
    status: options.status,
    create_status: options.createStatus,
    notes_type: options.notesType,
    release_type: options.releaseType,
    mandatory: options.mandatory,
    upload_dsym_only: options.uploadDsymOnly,
    strategy: options.strategy,
    bypass_cdn: options.bypassCdn,
  };
  if (typeof options.apk !== "undefined") temp["apk"] = options.apk;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.dsym !== "undefined") temp["dsym"] = options.dsym;
  if (typeof options.teams !== "undefined") temp["teams"] = options.teams;
  if (typeof options.users !== "undefined") temp["users"] = options.users;
  if (typeof options.tags !== "undefined") temp["tags"] = options.tags;
  if (typeof options.bundleShortVersion !== "undefined")
    temp["bundle_short_version"] = options.bundleShortVersion;
  if (typeof options.bundleVersion !== "undefined")
    temp["bundle_version"] = options.bundleVersion;
  if (typeof options.publicIdentifier !== "undefined")
    temp["public_identifier"] = options.publicIdentifier;
  if (typeof options.commitSha !== "undefined")
    temp["commit_sha"] = options.commitSha;
  if (typeof options.repositoryUrl !== "undefined")
    temp["repository_url"] = options.repositoryUrl;
  if (typeof options.buildServerUrl !== "undefined")
    temp["build_server_url"] = options.buildServerUrl;
  if (typeof options.ownerId !== "undefined")
    temp["owner_id"] = options.ownerId;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  if (typeof options.dsaSignature !== "undefined")
    temp["dsa_signature"] = options.dsaSignature;
  return temp;
}

/** @ignore */
type convertedIftttOptions = {
  api_key: string;
  event_name: string;
  value1?: string;
  value2?: string;
  value3?: string;
};
/** @ignore Convert IftttOptions to the shape used by the Fastlane service
 */
function convertIftttOptions(options: IftttOptions): convertedIftttOptions {
  const temp: convertedIftttOptions = {
    api_key: options.apiKey,
    event_name: options.eventName,
  };
  if (typeof options.value1 !== "undefined") temp["value1"] = options.value1;
  if (typeof options.value2 !== "undefined") temp["value2"] = options.value2;
  if (typeof options.value3 !== "undefined") temp["value3"] = options.value3;
  return temp;
}

/** @ignore */
type convertedImportOptions = {};
/** @ignore Convert ImportOptions to the shape used by the Fastlane service
 */
function convertImportOptions(options: ImportOptions): convertedImportOptions {
  const temp: convertedImportOptions = {};

  return temp;
}

/** @ignore */
type convertedImportCertificateOptions = {
  certificate_path: string;
  certificate_password?: string;
  keychain_name: string;
  keychain_path?: string;
  keychain_password?: string;
  log_output?: boolean;
};
/** @ignore Convert ImportCertificateOptions to the shape used by the Fastlane service
 */
function convertImportCertificateOptions(
  options: ImportCertificateOptions
): convertedImportCertificateOptions {
  const temp: convertedImportCertificateOptions = {
    certificate_path: options.certificatePath,
    keychain_name: options.keychainName,
  };
  if (typeof options.certificatePassword !== "undefined")
    temp["certificate_password"] = options.certificatePassword;
  if (typeof options.keychainPath !== "undefined")
    temp["keychain_path"] = options.keychainPath;
  if (typeof options.keychainPassword !== "undefined")
    temp["keychain_password"] = options.keychainPassword;
  if (typeof options.logOutput !== "undefined")
    temp["log_output"] = options.logOutput;
  return temp;
}

/** @ignore */
type convertedImportFromGitOptions = {
  url?: string;
  branch?: string;
  dependencies?: string;
  path?: string;
  version?: string[];
  cache_path?: string;
};
/** @ignore Convert ImportFromGitOptions to the shape used by the Fastlane service
 */
function convertImportFromGitOptions(
  options: ImportFromGitOptions
): convertedImportFromGitOptions {
  const temp: convertedImportFromGitOptions = {};
  if (typeof options.url !== "undefined") temp["url"] = options.url;
  if (typeof options.branch !== "undefined") temp["branch"] = options.branch;
  if (typeof options.dependencies !== "undefined")
    temp["dependencies"] = options.dependencies;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.version !== "undefined") temp["version"] = options.version;
  if (typeof options.cachePath !== "undefined")
    temp["cache_path"] = options.cachePath;
  return temp;
}

/** @ignore */
type convertedIncrementBuildNumberOptions = {
  build_number?: string;
  skip_info_plist: boolean;
  xcodeproj?: string;
};
/** @ignore Convert IncrementBuildNumberOptions to the shape used by the Fastlane service
 */
function convertIncrementBuildNumberOptions(
  options: IncrementBuildNumberOptions
): convertedIncrementBuildNumberOptions {
  const temp: convertedIncrementBuildNumberOptions = {
    skip_info_plist: options.skipInfoPlist,
  };
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  return temp;
}

/** @ignore */
type convertedIncrementVersionNumberOptions = {
  bump_type: string;
  version_number?: string;
  xcodeproj?: string;
};
/** @ignore Convert IncrementVersionNumberOptions to the shape used by the Fastlane service
 */
function convertIncrementVersionNumberOptions(
  options: IncrementVersionNumberOptions
): convertedIncrementVersionNumberOptions {
  const temp: convertedIncrementVersionNumberOptions = {
    bump_type: options.bumpType,
  };
  if (typeof options.versionNumber !== "undefined")
    temp["version_number"] = options.versionNumber;
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  return temp;
}

/** @ignore */
type convertedInstallOnDeviceOptions = {
  extra?: string;
  device_id?: string;
  skip_wifi?: boolean;
  ipa?: string;
};
/** @ignore Convert InstallOnDeviceOptions to the shape used by the Fastlane service
 */
function convertInstallOnDeviceOptions(
  options: InstallOnDeviceOptions
): convertedInstallOnDeviceOptions {
  const temp: convertedInstallOnDeviceOptions = {};
  if (typeof options.extra !== "undefined") temp["extra"] = options.extra;
  if (typeof options.deviceId !== "undefined")
    temp["device_id"] = options.deviceId;
  if (typeof options.skipWifi !== "undefined")
    temp["skip_wifi"] = options.skipWifi;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  return temp;
}

/** @ignore */
type convertedInstallProvisioningProfileOptions = {
  path: string;
};
/** @ignore Convert InstallProvisioningProfileOptions to the shape used by the Fastlane service
 */
function convertInstallProvisioningProfileOptions(
  options: InstallProvisioningProfileOptions
): convertedInstallProvisioningProfileOptions {
  const temp: convertedInstallProvisioningProfileOptions = {
    path: options.path,
  };

  return temp;
}

/** @ignore */
type convertedInstallXcodePluginOptions = {
  url: string;
  github?: string;
};
/** @ignore Convert InstallXcodePluginOptions to the shape used by the Fastlane service
 */
function convertInstallXcodePluginOptions(
  options: InstallXcodePluginOptions
): convertedInstallXcodePluginOptions {
  const temp: convertedInstallXcodePluginOptions = {
    url: options.url,
  };
  if (typeof options.github !== "undefined") temp["github"] = options.github;
  return temp;
}

/** @ignore */
type convertedInstallrOptions = {
  api_token: string;
  ipa: string;
  notes?: string;
  notify?: string;
  add?: string;
};
/** @ignore Convert InstallrOptions to the shape used by the Fastlane service
 */
function convertInstallrOptions(
  options: InstallrOptions
): convertedInstallrOptions {
  const temp: convertedInstallrOptions = {
    api_token: options.apiToken,
    ipa: options.ipa,
  };
  if (typeof options.notes !== "undefined") temp["notes"] = options.notes;
  if (typeof options.notify !== "undefined") temp["notify"] = options.notify;
  if (typeof options.add !== "undefined") temp["add"] = options.add;
  return temp;
}

/** @ignore */
type convertedIpaOptions = {
  workspace?: string;
  project?: string;
  configuration?: string;
  scheme?: string;
  clean?: boolean;
  archive?: boolean;
  destination?: string;
  embed?: string;
  identity?: string;
  sdk?: string;
  ipa?: string;
  xcconfig?: string;
  xcargs?: string;
};
/** @ignore Convert IpaOptions to the shape used by the Fastlane service
 */
function convertIpaOptions(options: IpaOptions): convertedIpaOptions {
  const temp: convertedIpaOptions = {};
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.clean !== "undefined") temp["clean"] = options.clean;
  if (typeof options.archive !== "undefined") temp["archive"] = options.archive;
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  if (typeof options.embed !== "undefined") temp["embed"] = options.embed;
  if (typeof options.identity !== "undefined")
    temp["identity"] = options.identity;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  return temp;
}

/** @ignore */
type convertedIsCiOptions = {};
/** @ignore Convert IsCiOptions to the shape used by the Fastlane service
 */
function convertIsCiOptions(options: IsCiOptions): convertedIsCiOptions {
  const temp: convertedIsCiOptions = {};

  return temp;
}

/** @ignore */
type convertedJazzyOptions = {
  config?: string;
  module_version?: string;
};
/** @ignore Convert JazzyOptions to the shape used by the Fastlane service
 */
function convertJazzyOptions(options: JazzyOptions): convertedJazzyOptions {
  const temp: convertedJazzyOptions = {};
  if (typeof options.config !== "undefined") temp["config"] = options.config;
  if (typeof options.moduleVersion !== "undefined")
    temp["module_version"] = options.moduleVersion;
  return temp;
}

/** @ignore */
type convertedJiraOptions = {
  url: string;
  context_path?: string;
  username: string;
  password: string;
  ticket_id: string;
  comment_text: string;
  fail_on_error?: boolean;
};
/** @ignore Convert JiraOptions to the shape used by the Fastlane service
 */
function convertJiraOptions(options: JiraOptions): convertedJiraOptions {
  const temp: convertedJiraOptions = {
    url: options.url,
    username: options.username,
    password: options.password,
    ticket_id: options.ticketId,
    comment_text: options.commentText,
  };
  if (typeof options.contextPath !== "undefined")
    temp["context_path"] = options.contextPath;
  if (typeof options.failOnError !== "undefined")
    temp["fail_on_error"] = options.failOnError;
  return temp;
}

/** @ignore */
type convertedLaneContextOptions = {};
/** @ignore Convert LaneContextOptions to the shape used by the Fastlane service
 */
function convertLaneContextOptions(
  options: LaneContextOptions
): convertedLaneContextOptions {
  const temp: convertedLaneContextOptions = {};

  return temp;
}

/** @ignore */
type convertedLastGitCommitOptions = {};
/** @ignore Convert LastGitCommitOptions to the shape used by the Fastlane service
 */
function convertLastGitCommitOptions(
  options: LastGitCommitOptions
): convertedLastGitCommitOptions {
  const temp: convertedLastGitCommitOptions = {};

  return temp;
}

/** @ignore */
type convertedLastGitTagOptions = {
  pattern?: string;
};
/** @ignore Convert LastGitTagOptions to the shape used by the Fastlane service
 */
function convertLastGitTagOptions(
  options: LastGitTagOptions
): convertedLastGitTagOptions {
  const temp: convertedLastGitTagOptions = {};
  if (typeof options.pattern !== "undefined") temp["pattern"] = options.pattern;
  return temp;
}

/** @ignore */
type convertedLatestTestflightBuildNumberOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  live?: boolean;
  app_identifier: string;
  username?: string;
  version?: string;
  platform?: string;
  initial_build_number: string;
  team_id?: string;
  team_name?: string;
};
/** @ignore Convert LatestTestflightBuildNumberOptions to the shape used by the Fastlane service
 */
function convertLatestTestflightBuildNumberOptions(
  options: LatestTestflightBuildNumberOptions
): convertedLatestTestflightBuildNumberOptions {
  const temp: convertedLatestTestflightBuildNumberOptions = {
    app_identifier: options.appIdentifier,
    initial_build_number: options.initialBuildNumber,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.live !== "undefined") temp["live"] = options.live;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.version !== "undefined") temp["version"] = options.version;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  return temp;
}

/** @ignore */
type convertedLcovOptions = {
  project_name: string;
  scheme: string;
  arch: string;
  output_dir?: string;
};
/** @ignore Convert LcovOptions to the shape used by the Fastlane service
 */
function convertLcovOptions(options: LcovOptions): convertedLcovOptions {
  const temp: convertedLcovOptions = {
    project_name: options.projectName,
    scheme: options.scheme,
    arch: options.arch,
  };
  if (typeof options.outputDir !== "undefined")
    temp["output_dir"] = options.outputDir;
  return temp;
}

/** @ignore */
type convertedMailgunOptions = {
  mailgun_sandbox_domain?: string;
  mailgun_sandbox_postmaster?: string;
  mailgun_apikey?: string;
  postmaster: string;
  apikey: string;
  to: string;
  from?: string;
  message: string;
  subject?: string;
  success?: boolean;
  app_link: string;
  ci_build_link?: string;
  template_path?: string;
  reply_to?: string;
  attachment?: string[];
  custom_placeholders: { string: string };
};
/** @ignore Convert MailgunOptions to the shape used by the Fastlane service
 */
function convertMailgunOptions(
  options: MailgunOptions
): convertedMailgunOptions {
  const temp: convertedMailgunOptions = {
    postmaster: options.postmaster,
    apikey: options.apikey,
    to: options.to,
    message: options.message,
    app_link: options.appLink,
    custom_placeholders: options.customPlaceholders,
  };
  if (typeof options.mailgunSandboxDomain !== "undefined")
    temp["mailgun_sandbox_domain"] = options.mailgunSandboxDomain;
  if (typeof options.mailgunSandboxPostmaster !== "undefined")
    temp["mailgun_sandbox_postmaster"] = options.mailgunSandboxPostmaster;
  if (typeof options.mailgunApikey !== "undefined")
    temp["mailgun_apikey"] = options.mailgunApikey;
  if (typeof options.from !== "undefined") temp["from"] = options.from;
  if (typeof options.subject !== "undefined") temp["subject"] = options.subject;
  if (typeof options.success !== "undefined") temp["success"] = options.success;
  if (typeof options.ciBuildLink !== "undefined")
    temp["ci_build_link"] = options.ciBuildLink;
  if (typeof options.templatePath !== "undefined")
    temp["template_path"] = options.templatePath;
  if (typeof options.replyTo !== "undefined")
    temp["reply_to"] = options.replyTo;
  if (typeof options.attachment !== "undefined")
    temp["attachment"] = options.attachment;
  return temp;
}

/** @ignore */
type convertedMakeChangelogFromJenkinsOptions = {
  fallback_changelog?: string;
  include_commit_body?: boolean;
};
/** @ignore Convert MakeChangelogFromJenkinsOptions to the shape used by the Fastlane service
 */
function convertMakeChangelogFromJenkinsOptions(
  options: MakeChangelogFromJenkinsOptions
): convertedMakeChangelogFromJenkinsOptions {
  const temp: convertedMakeChangelogFromJenkinsOptions = {};
  if (typeof options.fallbackChangelog !== "undefined")
    temp["fallback_changelog"] = options.fallbackChangelog;
  if (typeof options.includeCommitBody !== "undefined")
    temp["include_commit_body"] = options.includeCommitBody;
  return temp;
}

/** @ignore */
type convertedMatchOptions = {
  type: string;
  additional_cert_types?: string[];
  readonly: boolean;
  generate_apple_certs: boolean;
  skip_provisioning_profiles: boolean;
  app_identifier: string[];
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  team_id?: string;
  team_name?: string;
  storage_mode: string;
  git_url: string;
  git_branch: string;
  git_full_name?: string;
  git_user_email?: string;
  shallow_clone: boolean;
  clone_branch_directly: boolean;
  git_basic_authorization?: string;
  git_bearer_authorization?: string;
  git_private_key?: string;
  google_cloud_bucket_name?: string;
  google_cloud_keys_file?: string;
  google_cloud_project_id?: string;
  s3_region?: string;
  s3_access_key?: string;
  s3_secret_access_key?: string;
  s3_bucket?: string;
  s3_object_prefix?: string;
  keychain_name: string;
  keychain_password?: string;
  force: boolean;
  force_for_new_devices: boolean;
  include_all_certificates: boolean;
  force_for_new_certificates: boolean;
  skip_confirmation: boolean;
  safe_remove_certs: boolean;
  skip_docs: boolean;
  platform: string;
  derive_catalyst_app_identifier: boolean;
  template_name?: string;
  profile_name?: string;
  fail_on_name_taken?: boolean;
  skip_certificate_matching?: boolean;
  output_path?: string;
  skip_set_partition_list: boolean;
  verbose: boolean;
};
/** @ignore Convert MatchOptions to the shape used by the Fastlane service
 */
function convertMatchOptions(options: MatchOptions): convertedMatchOptions {
  const temp: convertedMatchOptions = {
    type: options.type,
    readonly: options.readonly,
    generate_apple_certs: options.generateAppleCerts,
    skip_provisioning_profiles: options.skipProvisioningProfiles,
    app_identifier: options.appIdentifier,
    storage_mode: options.storageMode,
    git_url: options.gitUrl,
    git_branch: options.gitBranch,
    shallow_clone: options.shallowClone,
    clone_branch_directly: options.cloneBranchDirectly,
    keychain_name: options.keychainName,
    force: options.force,
    force_for_new_devices: options.forceForNewDevices,
    include_all_certificates: options.includeAllCertificates,
    force_for_new_certificates: options.forceForNewCertificates,
    skip_confirmation: options.skipConfirmation,
    safe_remove_certs: options.safeRemoveCerts,
    skip_docs: options.skipDocs,
    platform: options.platform,
    derive_catalyst_app_identifier: options.deriveCatalystAppIdentifier,
    skip_set_partition_list: options.skipSetPartitionList,
    verbose: options.verbose,
  };
  if (typeof options.additionalCertTypes !== "undefined")
    temp["additional_cert_types"] = options.additionalCertTypes;
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.gitFullName !== "undefined")
    temp["git_full_name"] = options.gitFullName;
  if (typeof options.gitUserEmail !== "undefined")
    temp["git_user_email"] = options.gitUserEmail;
  if (typeof options.gitBasicAuthorization !== "undefined")
    temp["git_basic_authorization"] = options.gitBasicAuthorization;
  if (typeof options.gitBearerAuthorization !== "undefined")
    temp["git_bearer_authorization"] = options.gitBearerAuthorization;
  if (typeof options.gitPrivateKey !== "undefined")
    temp["git_private_key"] = options.gitPrivateKey;
  if (typeof options.googleCloudBucketName !== "undefined")
    temp["google_cloud_bucket_name"] = options.googleCloudBucketName;
  if (typeof options.googleCloudKeysFile !== "undefined")
    temp["google_cloud_keys_file"] = options.googleCloudKeysFile;
  if (typeof options.googleCloudProjectId !== "undefined")
    temp["google_cloud_project_id"] = options.googleCloudProjectId;
  if (typeof options.s3Region !== "undefined")
    temp["s3_region"] = options.s3Region;
  if (typeof options.s3AccessKey !== "undefined")
    temp["s3_access_key"] = options.s3AccessKey;
  if (typeof options.s3SecretAccessKey !== "undefined")
    temp["s3_secret_access_key"] = options.s3SecretAccessKey;
  if (typeof options.s3Bucket !== "undefined")
    temp["s3_bucket"] = options.s3Bucket;
  if (typeof options.s3ObjectPrefix !== "undefined")
    temp["s3_object_prefix"] = options.s3ObjectPrefix;
  if (typeof options.keychainPassword !== "undefined")
    temp["keychain_password"] = options.keychainPassword;
  if (typeof options.templateName !== "undefined")
    temp["template_name"] = options.templateName;
  if (typeof options.profileName !== "undefined")
    temp["profile_name"] = options.profileName;
  if (typeof options.failOnNameTaken !== "undefined")
    temp["fail_on_name_taken"] = options.failOnNameTaken;
  if (typeof options.skipCertificateMatching !== "undefined")
    temp["skip_certificate_matching"] = options.skipCertificateMatching;
  if (typeof options.outputPath !== "undefined")
    temp["output_path"] = options.outputPath;
  return temp;
}

/** @ignore */
type convertedMatchNukeOptions = {
  type: string;
  additional_cert_types?: string[];
  readonly: boolean;
  generate_apple_certs: boolean;
  skip_provisioning_profiles: boolean;
  app_identifier: string[];
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  team_id?: string;
  team_name?: string;
  storage_mode: string;
  git_url: string;
  git_branch: string;
  git_full_name?: string;
  git_user_email?: string;
  shallow_clone: boolean;
  clone_branch_directly: boolean;
  git_basic_authorization?: string;
  git_bearer_authorization?: string;
  git_private_key?: string;
  google_cloud_bucket_name?: string;
  google_cloud_keys_file?: string;
  google_cloud_project_id?: string;
  s3_region?: string;
  s3_access_key?: string;
  s3_secret_access_key?: string;
  s3_bucket?: string;
  s3_object_prefix?: string;
  keychain_name: string;
  keychain_password?: string;
  force: boolean;
  force_for_new_devices: boolean;
  include_all_certificates: boolean;
  force_for_new_certificates: boolean;
  skip_confirmation: boolean;
  safe_remove_certs: boolean;
  skip_docs: boolean;
  platform: string;
  derive_catalyst_app_identifier: boolean;
  template_name?: string;
  profile_name?: string;
  fail_on_name_taken?: boolean;
  skip_certificate_matching?: boolean;
  output_path?: string;
  skip_set_partition_list: boolean;
  verbose: boolean;
};
/** @ignore Convert MatchNukeOptions to the shape used by the Fastlane service
 */
function convertMatchNukeOptions(
  options: MatchNukeOptions
): convertedMatchNukeOptions {
  const temp: convertedMatchNukeOptions = {
    type: options.type,
    readonly: options.readonly,
    generate_apple_certs: options.generateAppleCerts,
    skip_provisioning_profiles: options.skipProvisioningProfiles,
    app_identifier: options.appIdentifier,
    storage_mode: options.storageMode,
    git_url: options.gitUrl,
    git_branch: options.gitBranch,
    shallow_clone: options.shallowClone,
    clone_branch_directly: options.cloneBranchDirectly,
    keychain_name: options.keychainName,
    force: options.force,
    force_for_new_devices: options.forceForNewDevices,
    include_all_certificates: options.includeAllCertificates,
    force_for_new_certificates: options.forceForNewCertificates,
    skip_confirmation: options.skipConfirmation,
    safe_remove_certs: options.safeRemoveCerts,
    skip_docs: options.skipDocs,
    platform: options.platform,
    derive_catalyst_app_identifier: options.deriveCatalystAppIdentifier,
    skip_set_partition_list: options.skipSetPartitionList,
    verbose: options.verbose,
  };
  if (typeof options.additionalCertTypes !== "undefined")
    temp["additional_cert_types"] = options.additionalCertTypes;
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.gitFullName !== "undefined")
    temp["git_full_name"] = options.gitFullName;
  if (typeof options.gitUserEmail !== "undefined")
    temp["git_user_email"] = options.gitUserEmail;
  if (typeof options.gitBasicAuthorization !== "undefined")
    temp["git_basic_authorization"] = options.gitBasicAuthorization;
  if (typeof options.gitBearerAuthorization !== "undefined")
    temp["git_bearer_authorization"] = options.gitBearerAuthorization;
  if (typeof options.gitPrivateKey !== "undefined")
    temp["git_private_key"] = options.gitPrivateKey;
  if (typeof options.googleCloudBucketName !== "undefined")
    temp["google_cloud_bucket_name"] = options.googleCloudBucketName;
  if (typeof options.googleCloudKeysFile !== "undefined")
    temp["google_cloud_keys_file"] = options.googleCloudKeysFile;
  if (typeof options.googleCloudProjectId !== "undefined")
    temp["google_cloud_project_id"] = options.googleCloudProjectId;
  if (typeof options.s3Region !== "undefined")
    temp["s3_region"] = options.s3Region;
  if (typeof options.s3AccessKey !== "undefined")
    temp["s3_access_key"] = options.s3AccessKey;
  if (typeof options.s3SecretAccessKey !== "undefined")
    temp["s3_secret_access_key"] = options.s3SecretAccessKey;
  if (typeof options.s3Bucket !== "undefined")
    temp["s3_bucket"] = options.s3Bucket;
  if (typeof options.s3ObjectPrefix !== "undefined")
    temp["s3_object_prefix"] = options.s3ObjectPrefix;
  if (typeof options.keychainPassword !== "undefined")
    temp["keychain_password"] = options.keychainPassword;
  if (typeof options.templateName !== "undefined")
    temp["template_name"] = options.templateName;
  if (typeof options.profileName !== "undefined")
    temp["profile_name"] = options.profileName;
  if (typeof options.failOnNameTaken !== "undefined")
    temp["fail_on_name_taken"] = options.failOnNameTaken;
  if (typeof options.skipCertificateMatching !== "undefined")
    temp["skip_certificate_matching"] = options.skipCertificateMatching;
  if (typeof options.outputPath !== "undefined")
    temp["output_path"] = options.outputPath;
  return temp;
}

/** @ignore */
type convertedMinFastlaneVersionOptions = {};
/** @ignore Convert MinFastlaneVersionOptions to the shape used by the Fastlane service
 */
function convertMinFastlaneVersionOptions(
  options: MinFastlaneVersionOptions
): convertedMinFastlaneVersionOptions {
  const temp: convertedMinFastlaneVersionOptions = {};

  return temp;
}

/** @ignore */
type convertedModifyServicesOptions = {
  username: string;
  app_identifier: string;
  services: { string: string };
  team_id?: string;
  team_name?: string;
};
/** @ignore Convert ModifyServicesOptions to the shape used by the Fastlane service
 */
function convertModifyServicesOptions(
  options: ModifyServicesOptions
): convertedModifyServicesOptions {
  const temp: convertedModifyServicesOptions = {
    username: options.username,
    app_identifier: options.appIdentifier,
    services: options.services,
  };
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  return temp;
}

/** @ignore */
type convertedNexusUploadOptions = {
  file: string;
  repo_id: string;
  repo_group_id: string;
  repo_project_name: string;
  repo_project_version: string;
  repo_classifier?: string;
  endpoint: string;
  mount_path?: string;
  username: string;
  password: string;
  ssl_verify?: boolean;
  nexus_version?: any;
  verbose?: boolean;
  proxy_username?: string;
  proxy_password?: string;
  proxy_address?: string;
  proxy_port?: string;
};
/** @ignore Convert NexusUploadOptions to the shape used by the Fastlane service
 */
function convertNexusUploadOptions(
  options: NexusUploadOptions
): convertedNexusUploadOptions {
  const temp: convertedNexusUploadOptions = {
    file: options.file,
    repo_id: options.repoId,
    repo_group_id: options.repoGroupId,
    repo_project_name: options.repoProjectName,
    repo_project_version: options.repoProjectVersion,
    endpoint: options.endpoint,
    username: options.username,
    password: options.password,
  };
  if (typeof options.repoClassifier !== "undefined")
    temp["repo_classifier"] = options.repoClassifier;
  if (typeof options.mountPath !== "undefined")
    temp["mount_path"] = options.mountPath;
  if (typeof options.sslVerify !== "undefined")
    temp["ssl_verify"] = options.sslVerify;
  if (typeof options.nexusVersion !== "undefined")
    temp["nexus_version"] = options.nexusVersion;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  if (typeof options.proxyUsername !== "undefined")
    temp["proxy_username"] = options.proxyUsername;
  if (typeof options.proxyPassword !== "undefined")
    temp["proxy_password"] = options.proxyPassword;
  if (typeof options.proxyAddress !== "undefined")
    temp["proxy_address"] = options.proxyAddress;
  if (typeof options.proxyPort !== "undefined")
    temp["proxy_port"] = options.proxyPort;
  return temp;
}

/** @ignore */
type convertedNotarizeOptions = {
  package: string;
  use_notarytool: boolean;
  try_early_stapling?: boolean;
  skip_stapling?: boolean;
  bundle_id?: string;
  username?: string;
  asc_provider?: string;
  print_log?: boolean;
  verbose?: boolean;
  api_key_path?: string;
  api_key?: { string: string };
};
/** @ignore Convert NotarizeOptions to the shape used by the Fastlane service
 */
function convertNotarizeOptions(
  options: NotarizeOptions
): convertedNotarizeOptions {
  const temp: convertedNotarizeOptions = {
    package: options.package,
    use_notarytool: options.useNotarytool,
  };
  if (typeof options.tryEarlyStapling !== "undefined")
    temp["try_early_stapling"] = options.tryEarlyStapling;
  if (typeof options.skipStapling !== "undefined")
    temp["skip_stapling"] = options.skipStapling;
  if (typeof options.bundleId !== "undefined")
    temp["bundle_id"] = options.bundleId;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.ascProvider !== "undefined")
    temp["asc_provider"] = options.ascProvider;
  if (typeof options.printLog !== "undefined")
    temp["print_log"] = options.printLog;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  return temp;
}

/** @ignore */
type convertedNotificationOptions = {
  title: string;
  subtitle?: string;
  message: string;
  sound?: string;
  activate?: string;
  app_icon?: string;
  content_image?: string;
  open?: string;
  execute?: string;
};
/** @ignore Convert NotificationOptions to the shape used by the Fastlane service
 */
function convertNotificationOptions(
  options: NotificationOptions
): convertedNotificationOptions {
  const temp: convertedNotificationOptions = {
    title: options.title,
    message: options.message,
  };
  if (typeof options.subtitle !== "undefined")
    temp["subtitle"] = options.subtitle;
  if (typeof options.sound !== "undefined") temp["sound"] = options.sound;
  if (typeof options.activate !== "undefined")
    temp["activate"] = options.activate;
  if (typeof options.appIcon !== "undefined")
    temp["app_icon"] = options.appIcon;
  if (typeof options.contentImage !== "undefined")
    temp["content_image"] = options.contentImage;
  if (typeof options.open !== "undefined") temp["open"] = options.open;
  if (typeof options.execute !== "undefined") temp["execute"] = options.execute;
  return temp;
}

/** @ignore */
type convertedNotifyOptions = {};
/** @ignore Convert NotifyOptions to the shape used by the Fastlane service
 */
function convertNotifyOptions(options: NotifyOptions): convertedNotifyOptions {
  const temp: convertedNotifyOptions = {};

  return temp;
}

/** @ignore */
type convertedNumberOfCommitsOptions = {
  all?: boolean;
};
/** @ignore Convert NumberOfCommitsOptions to the shape used by the Fastlane service
 */
function convertNumberOfCommitsOptions(
  options: NumberOfCommitsOptions
): convertedNumberOfCommitsOptions {
  const temp: convertedNumberOfCommitsOptions = {};
  if (typeof options.all !== "undefined") temp["all"] = options.all;
  return temp;
}

/** @ignore */
type convertedOclintOptions = {
  oclint_path?: string;
  compile_commands?: string;
  select_reqex?: string;
  select_regex?: string;
  exclude_regex?: string;
  report_type?: string;
  report_path?: string;
  list_enabled_rules: boolean;
  rc?: string;
  thresholds?: string[];
  enable_rules?: string[];
  disable_rules?: string[];
  max_priority_1?: any;
  max_priority_2?: any;
  max_priority_3?: any;
  enable_clang_static_analyzer: boolean;
  enable_global_analysis: boolean;
  allow_duplicated_violations: boolean;
  extra_arg?: string;
};
/** @ignore Convert OclintOptions to the shape used by the Fastlane service
 */
function convertOclintOptions(options: OclintOptions): convertedOclintOptions {
  const temp: convertedOclintOptions = {
    list_enabled_rules: options.listEnabledRules,
    enable_clang_static_analyzer: options.enableClangStaticAnalyzer,
    enable_global_analysis: options.enableGlobalAnalysis,
    allow_duplicated_violations: options.allowDuplicatedViolations,
  };
  if (typeof options.oclintPath !== "undefined")
    temp["oclint_path"] = options.oclintPath;
  if (typeof options.compileCommands !== "undefined")
    temp["compile_commands"] = options.compileCommands;
  if (typeof options.selectReqex !== "undefined")
    temp["select_reqex"] = options.selectReqex;
  if (typeof options.selectRegex !== "undefined")
    temp["select_regex"] = options.selectRegex;
  if (typeof options.excludeRegex !== "undefined")
    temp["exclude_regex"] = options.excludeRegex;
  if (typeof options.reportType !== "undefined")
    temp["report_type"] = options.reportType;
  if (typeof options.reportPath !== "undefined")
    temp["report_path"] = options.reportPath;
  if (typeof options.rc !== "undefined") temp["rc"] = options.rc;
  if (typeof options.thresholds !== "undefined")
    temp["thresholds"] = options.thresholds;
  if (typeof options.enableRules !== "undefined")
    temp["enable_rules"] = options.enableRules;
  if (typeof options.disableRules !== "undefined")
    temp["disable_rules"] = options.disableRules;
  if (typeof options.maxPriority1 !== "undefined")
    temp["max_priority_1"] = options.maxPriority1;
  if (typeof options.maxPriority2 !== "undefined")
    temp["max_priority_2"] = options.maxPriority2;
  if (typeof options.maxPriority3 !== "undefined")
    temp["max_priority_3"] = options.maxPriority3;
  if (typeof options.extraArg !== "undefined")
    temp["extra_arg"] = options.extraArg;
  return temp;
}

/** @ignore */
type convertedOnesignalOptions = {
  app_id?: string;
  auth_token: string;
  app_name?: string;
  android_token?: string;
  android_gcm_sender_id?: string;
  apns_p12?: string;
  apns_p12_password?: string;
  apns_env?: string;
  organization_id?: string;
};
/** @ignore Convert OnesignalOptions to the shape used by the Fastlane service
 */
function convertOnesignalOptions(
  options: OnesignalOptions
): convertedOnesignalOptions {
  const temp: convertedOnesignalOptions = {
    auth_token: options.authToken,
  };
  if (typeof options.appId !== "undefined") temp["app_id"] = options.appId;
  if (typeof options.appName !== "undefined")
    temp["app_name"] = options.appName;
  if (typeof options.androidToken !== "undefined")
    temp["android_token"] = options.androidToken;
  if (typeof options.androidGcmSenderId !== "undefined")
    temp["android_gcm_sender_id"] = options.androidGcmSenderId;
  if (typeof options.apnsP12 !== "undefined")
    temp["apns_p12"] = options.apnsP12;
  if (typeof options.apnsP12Password !== "undefined")
    temp["apns_p12_password"] = options.apnsP12Password;
  if (typeof options.apnsEnv !== "undefined")
    temp["apns_env"] = options.apnsEnv;
  if (typeof options.organizationId !== "undefined")
    temp["organization_id"] = options.organizationId;
  return temp;
}

/** @ignore */
type convertedOptOutCrashReportingOptions = {};
/** @ignore Convert OptOutCrashReportingOptions to the shape used by the Fastlane service
 */
function convertOptOutCrashReportingOptions(
  options: OptOutCrashReportingOptions
): convertedOptOutCrashReportingOptions {
  const temp: convertedOptOutCrashReportingOptions = {};

  return temp;
}

/** @ignore */
type convertedOptOutUsageOptions = {};
/** @ignore Convert OptOutUsageOptions to the shape used by the Fastlane service
 */
function convertOptOutUsageOptions(
  options: OptOutUsageOptions
): convertedOptOutUsageOptions {
  const temp: convertedOptOutUsageOptions = {};

  return temp;
}

/** @ignore */
type convertedPemOptions = {
  platform: string;
  development: any;
  website_push: any;
  generate_p12: any;
  active_days_limit: any;
  force: any;
  save_private_key: any;
  app_identifier: string;
  username: string;
  team_id?: string;
  team_name?: string;
  p12_password?: string;
  pem_name?: string;
  output_path: string;
  new_profile?: any;
};
/** @ignore Convert PemOptions to the shape used by the Fastlane service
 */
function convertPemOptions(options: PemOptions): convertedPemOptions {
  const temp: convertedPemOptions = {
    platform: options.platform,
    development: options.development,
    website_push: options.websitePush,
    generate_p12: options.generateP12,
    active_days_limit: options.activeDaysLimit,
    force: options.force,
    save_private_key: options.savePrivateKey,
    app_identifier: options.appIdentifier,
    username: options.username,
    output_path: options.outputPath,
  };
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.p12Password !== "undefined")
    temp["p12_password"] = options.p12Password;
  if (typeof options.pemName !== "undefined")
    temp["pem_name"] = options.pemName;
  if (typeof options.newProfile !== "undefined")
    temp["new_profile"] = options.newProfile;
  return temp;
}

/** @ignore */
type convertedPilotOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  app_identifier?: string;
  app_platform?: string;
  apple_id?: string;
  ipa?: string;
  pkg?: string;
  demo_account_required?: boolean;
  beta_app_review_info?: { string: string };
  localized_app_info?: { string: string };
  beta_app_description?: string;
  beta_app_feedback_email?: string;
  localized_build_info?: { string: string };
  changelog?: string;
  skip_submission: any;
  skip_waiting_for_build_processing: any;
  update_build_info_on_upload?: any;
  distribute_only: boolean;
  uses_non_exempt_encryption: boolean;
  distribute_external: any;
  notify_external_testers?: any;
  app_version?: string;
  build_number?: string;
  expire_previous_builds: any;
  first_name?: string;
  last_name?: string;
  email?: string;
  testers_file_path?: string;
  groups?: string[];
  team_id?: any;
  team_name?: string;
  dev_portal_team_id?: string;
  itc_provider?: string;
  wait_processing_interval: any;
  wait_processing_timeout_duration?: any;
  wait_for_uploaded_build?: any;
  reject_build_waiting_for_review: any;
  submit_beta_review: boolean;
};
/** @ignore Convert PilotOptions to the shape used by the Fastlane service
 */
function convertPilotOptions(options: PilotOptions): convertedPilotOptions {
  const temp: convertedPilotOptions = {
    skip_submission: options.skipSubmission,
    skip_waiting_for_build_processing: options.skipWaitingForBuildProcessing,
    distribute_only: options.distributeOnly,
    uses_non_exempt_encryption: options.usesNonExemptEncryption,
    distribute_external: options.distributeExternal,
    expire_previous_builds: options.expirePreviousBuilds,
    wait_processing_interval: options.waitProcessingInterval,
    reject_build_waiting_for_review: options.rejectBuildWaitingForReview,
    submit_beta_review: options.submitBetaReview,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.appPlatform !== "undefined")
    temp["app_platform"] = options.appPlatform;
  if (typeof options.appleId !== "undefined")
    temp["apple_id"] = options.appleId;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.pkg !== "undefined") temp["pkg"] = options.pkg;
  if (typeof options.demoAccountRequired !== "undefined")
    temp["demo_account_required"] = options.demoAccountRequired;
  if (typeof options.betaAppReviewInfo !== "undefined")
    temp["beta_app_review_info"] = options.betaAppReviewInfo;
  if (typeof options.localizedAppInfo !== "undefined")
    temp["localized_app_info"] = options.localizedAppInfo;
  if (typeof options.betaAppDescription !== "undefined")
    temp["beta_app_description"] = options.betaAppDescription;
  if (typeof options.betaAppFeedbackEmail !== "undefined")
    temp["beta_app_feedback_email"] = options.betaAppFeedbackEmail;
  if (typeof options.localizedBuildInfo !== "undefined")
    temp["localized_build_info"] = options.localizedBuildInfo;
  if (typeof options.changelog !== "undefined")
    temp["changelog"] = options.changelog;
  if (typeof options.updateBuildInfoOnUpload !== "undefined")
    temp["update_build_info_on_upload"] = options.updateBuildInfoOnUpload;
  if (typeof options.notifyExternalTesters !== "undefined")
    temp["notify_external_testers"] = options.notifyExternalTesters;
  if (typeof options.appVersion !== "undefined")
    temp["app_version"] = options.appVersion;
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.firstName !== "undefined")
    temp["first_name"] = options.firstName;
  if (typeof options.lastName !== "undefined")
    temp["last_name"] = options.lastName;
  if (typeof options.email !== "undefined") temp["email"] = options.email;
  if (typeof options.testersFilePath !== "undefined")
    temp["testers_file_path"] = options.testersFilePath;
  if (typeof options.groups !== "undefined") temp["groups"] = options.groups;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.devPortalTeamId !== "undefined")
    temp["dev_portal_team_id"] = options.devPortalTeamId;
  if (typeof options.itcProvider !== "undefined")
    temp["itc_provider"] = options.itcProvider;
  if (typeof options.waitProcessingTimeoutDuration !== "undefined")
    temp["wait_processing_timeout_duration"] =
      options.waitProcessingTimeoutDuration;
  if (typeof options.waitForUploadedBuild !== "undefined")
    temp["wait_for_uploaded_build"] = options.waitForUploadedBuild;
  return temp;
}

/** @ignore */
type convertedPodLibLintOptions = {
  use_bundle_exec: boolean;
  podspec?: string;
  verbose?: boolean;
  allow_warnings?: boolean;
  sources?: string[];
  subspec?: string;
  include_podspecs?: string;
  external_podspecs?: string;
  swift_version?: string;
  use_libraries: boolean;
  use_modular_headers: boolean;
  fail_fast: boolean;
  private: boolean;
  quick: boolean;
  no_clean: boolean;
  no_subspecs: boolean;
  platforms?: string;
  skip_import_validation: boolean;
  skip_tests: boolean;
  analyze: boolean;
};
/** @ignore Convert PodLibLintOptions to the shape used by the Fastlane service
 */
function convertPodLibLintOptions(
  options: PodLibLintOptions
): convertedPodLibLintOptions {
  const temp: convertedPodLibLintOptions = {
    use_bundle_exec: options.useBundleExec,
    use_libraries: options.useLibraries,
    use_modular_headers: options.useModularHeaders,
    fail_fast: options.failFast,
    private: options.private,
    quick: options.quick,
    no_clean: options.noClean,
    no_subspecs: options.noSubspecs,
    skip_import_validation: options.skipImportValidation,
    skip_tests: options.skipTests,
    analyze: options.analyze,
  };
  if (typeof options.podspec !== "undefined") temp["podspec"] = options.podspec;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  if (typeof options.allowWarnings !== "undefined")
    temp["allow_warnings"] = options.allowWarnings;
  if (typeof options.sources !== "undefined") temp["sources"] = options.sources;
  if (typeof options.subspec !== "undefined") temp["subspec"] = options.subspec;
  if (typeof options.includePodspecs !== "undefined")
    temp["include_podspecs"] = options.includePodspecs;
  if (typeof options.externalPodspecs !== "undefined")
    temp["external_podspecs"] = options.externalPodspecs;
  if (typeof options.swiftVersion !== "undefined")
    temp["swift_version"] = options.swiftVersion;
  if (typeof options.platforms !== "undefined")
    temp["platforms"] = options.platforms;
  return temp;
}

/** @ignore */
type convertedPodPushOptions = {
  use_bundle_exec: boolean;
  path?: string;
  repo?: string;
  allow_warnings?: boolean;
  use_libraries?: boolean;
  sources?: string[];
  swift_version?: string;
  skip_import_validation?: boolean;
  skip_tests?: boolean;
  use_json?: boolean;
  verbose?: boolean;
  use_modular_headers?: boolean;
  synchronous?: boolean;
};
/** @ignore Convert PodPushOptions to the shape used by the Fastlane service
 */
function convertPodPushOptions(
  options: PodPushOptions
): convertedPodPushOptions {
  const temp: convertedPodPushOptions = {
    use_bundle_exec: options.useBundleExec,
  };
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.repo !== "undefined") temp["repo"] = options.repo;
  if (typeof options.allowWarnings !== "undefined")
    temp["allow_warnings"] = options.allowWarnings;
  if (typeof options.useLibraries !== "undefined")
    temp["use_libraries"] = options.useLibraries;
  if (typeof options.sources !== "undefined") temp["sources"] = options.sources;
  if (typeof options.swiftVersion !== "undefined")
    temp["swift_version"] = options.swiftVersion;
  if (typeof options.skipImportValidation !== "undefined")
    temp["skip_import_validation"] = options.skipImportValidation;
  if (typeof options.skipTests !== "undefined")
    temp["skip_tests"] = options.skipTests;
  if (typeof options.useJson !== "undefined")
    temp["use_json"] = options.useJson;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  if (typeof options.useModularHeaders !== "undefined")
    temp["use_modular_headers"] = options.useModularHeaders;
  if (typeof options.synchronous !== "undefined")
    temp["synchronous"] = options.synchronous;
  return temp;
}

/** @ignore */
type convertedPodioItemOptions = {
  client_id: string;
  client_secret: string;
  app_id: string;
  app_token: string;
  identifying_field: string;
  identifying_value: string;
  other_fields?: { string: string };
};
/** @ignore Convert PodioItemOptions to the shape used by the Fastlane service
 */
function convertPodioItemOptions(
  options: PodioItemOptions
): convertedPodioItemOptions {
  const temp: convertedPodioItemOptions = {
    client_id: options.clientId,
    client_secret: options.clientSecret,
    app_id: options.appId,
    app_token: options.appToken,
    identifying_field: options.identifyingField,
    identifying_value: options.identifyingValue,
  };
  if (typeof options.otherFields !== "undefined")
    temp["other_fields"] = options.otherFields;
  return temp;
}

/** @ignore */
type convertedPrecheckOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  app_identifier: string;
  username?: string;
  team_id?: string;
  team_name?: string;
  platform?: string;
  default_rule_level: any;
  include_in_app_purchases?: boolean;
  use_live: boolean;
  negative_apple_sentiment?: any;
  placeholder_text?: any;
  other_platforms?: any;
  future_functionality?: any;
  test_words?: any;
  curse_words?: any;
  free_stuff_in_iap?: any;
  custom_text?: any;
  copyright_date?: any;
  unreachable_urls?: any;
};
/** @ignore Convert PrecheckOptions to the shape used by the Fastlane service
 */
function convertPrecheckOptions(
  options: PrecheckOptions
): convertedPrecheckOptions {
  const temp: convertedPrecheckOptions = {
    app_identifier: options.appIdentifier,
    default_rule_level: options.defaultRuleLevel,
    use_live: options.useLive,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.includeInAppPurchases !== "undefined")
    temp["include_in_app_purchases"] = options.includeInAppPurchases;
  if (typeof options.negativeAppleSentiment !== "undefined")
    temp["negative_apple_sentiment"] = options.negativeAppleSentiment;
  if (typeof options.placeholderText !== "undefined")
    temp["placeholder_text"] = options.placeholderText;
  if (typeof options.otherPlatforms !== "undefined")
    temp["other_platforms"] = options.otherPlatforms;
  if (typeof options.futureFunctionality !== "undefined")
    temp["future_functionality"] = options.futureFunctionality;
  if (typeof options.testWords !== "undefined")
    temp["test_words"] = options.testWords;
  if (typeof options.curseWords !== "undefined")
    temp["curse_words"] = options.curseWords;
  if (typeof options.freeStuffInIap !== "undefined")
    temp["free_stuff_in_iap"] = options.freeStuffInIap;
  if (typeof options.customText !== "undefined")
    temp["custom_text"] = options.customText;
  if (typeof options.copyrightDate !== "undefined")
    temp["copyright_date"] = options.copyrightDate;
  if (typeof options.unreachableUrls !== "undefined")
    temp["unreachable_urls"] = options.unreachableUrls;
  return temp;
}

/** @ignore */
type convertedPrintlnOptions = {
  message?: string;
};
/** @ignore Convert PrintlnOptions to the shape used by the Fastlane service
 */
function convertPrintlnOptions(
  options: PrintlnOptions
): convertedPrintlnOptions {
  const temp: convertedPrintlnOptions = {};
  if (typeof options.message !== "undefined") temp["message"] = options.message;
  return temp;
}

/** @ignore */
type convertedProduceOptions = {
  username: string;
  app_identifier: string;
  bundle_identifier_suffix?: string;
  app_name: string;
  app_version?: string;
  sku: string;
  platform?: string;
  platforms?: string[];
  language: string;
  company_name?: string;
  skip_itc: any;
  itc_users?: string[];
  enabled_features?: any;
  enable_services: any;
  skip_devcenter: any;
  team_id?: string;
  team_name?: string;
  itc_team_id?: any;
  itc_team_name?: string;
};
/** @ignore Convert ProduceOptions to the shape used by the Fastlane service
 */
function convertProduceOptions(
  options: ProduceOptions
): convertedProduceOptions {
  const temp: convertedProduceOptions = {
    username: options.username,
    app_identifier: options.appIdentifier,
    app_name: options.appName,
    sku: options.sku,
    language: options.language,
    skip_itc: options.skipItc,
    enable_services: options.enableServices,
    skip_devcenter: options.skipDevcenter,
  };
  if (typeof options.bundleIdentifierSuffix !== "undefined")
    temp["bundle_identifier_suffix"] = options.bundleIdentifierSuffix;
  if (typeof options.appVersion !== "undefined")
    temp["app_version"] = options.appVersion;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.platforms !== "undefined")
    temp["platforms"] = options.platforms;
  if (typeof options.companyName !== "undefined")
    temp["company_name"] = options.companyName;
  if (typeof options.itcUsers !== "undefined")
    temp["itc_users"] = options.itcUsers;
  if (typeof options.enabledFeatures !== "undefined")
    temp["enabled_features"] = options.enabledFeatures;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.itcTeamId !== "undefined")
    temp["itc_team_id"] = options.itcTeamId;
  if (typeof options.itcTeamName !== "undefined")
    temp["itc_team_name"] = options.itcTeamName;
  return temp;
}

/** @ignore */
type convertedPromptOptions = {
  text: string;
  ci_input: string;
  boolean: boolean;
  secure_text: boolean;
  multi_line_end_keyword?: string;
};
/** @ignore Convert PromptOptions to the shape used by the Fastlane service
 */
function convertPromptOptions(options: PromptOptions): convertedPromptOptions {
  const temp: convertedPromptOptions = {
    text: options.text,
    ci_input: options.ciInput,
    boolean: options.boolean,
    secure_text: options.secureText,
  };
  if (typeof options.multiLineEndKeyword !== "undefined")
    temp["multi_line_end_keyword"] = options.multiLineEndKeyword;
  return temp;
}

/** @ignore */
type convertedPushGitTagsOptions = {
  force?: boolean;
  remote?: string;
  tag?: string;
};
/** @ignore Convert PushGitTagsOptions to the shape used by the Fastlane service
 */
function convertPushGitTagsOptions(
  options: PushGitTagsOptions
): convertedPushGitTagsOptions {
  const temp: convertedPushGitTagsOptions = {};
  if (typeof options.force !== "undefined") temp["force"] = options.force;
  if (typeof options.remote !== "undefined") temp["remote"] = options.remote;
  if (typeof options.tag !== "undefined") temp["tag"] = options.tag;
  return temp;
}

/** @ignore */
type convertedPushToGitRemoteOptions = {
  local_branch?: string;
  remote_branch?: string;
  force: boolean;
  force_with_lease: boolean;
  tags: boolean;
  remote: string;
  no_verify: boolean;
  set_upstream: boolean;
  push_options: string[];
};
/** @ignore Convert PushToGitRemoteOptions to the shape used by the Fastlane service
 */
function convertPushToGitRemoteOptions(
  options: PushToGitRemoteOptions
): convertedPushToGitRemoteOptions {
  const temp: convertedPushToGitRemoteOptions = {
    force: options.force,
    force_with_lease: options.forceWithLease,
    tags: options.tags,
    remote: options.remote,
    no_verify: options.noVerify,
    set_upstream: options.setUpstream,
    push_options: options.pushOptions,
  };
  if (typeof options.localBranch !== "undefined")
    temp["local_branch"] = options.localBranch;
  if (typeof options.remoteBranch !== "undefined")
    temp["remote_branch"] = options.remoteBranch;
  return temp;
}

/** @ignore */
type convertedPutsOptions = {
  message?: string;
};
/** @ignore Convert PutsOptions to the shape used by the Fastlane service
 */
function convertPutsOptions(options: PutsOptions): convertedPutsOptions {
  const temp: convertedPutsOptions = {};
  if (typeof options.message !== "undefined") temp["message"] = options.message;
  return temp;
}

/** @ignore */
type convertedReadPodspecOptions = {
  path: string;
};
/** @ignore Convert ReadPodspecOptions to the shape used by the Fastlane service
 */
function convertReadPodspecOptions(
  options: ReadPodspecOptions
): convertedReadPodspecOptions {
  const temp: convertedReadPodspecOptions = {
    path: options.path,
  };

  return temp;
}

/** @ignore */
type convertedRecreateSchemesOptions = {
  project: string;
};
/** @ignore Convert RecreateSchemesOptions to the shape used by the Fastlane service
 */
function convertRecreateSchemesOptions(
  options: RecreateSchemesOptions
): convertedRecreateSchemesOptions {
  const temp: convertedRecreateSchemesOptions = {
    project: options.project,
  };

  return temp;
}

/** @ignore */
type convertedRegisterDeviceOptions = {
  name: string;
  platform?: string;
  udid: string;
  api_key_path?: string;
  api_key?: { string: string };
  team_id?: string;
  team_name?: string;
  username?: string;
};
/** @ignore Convert RegisterDeviceOptions to the shape used by the Fastlane service
 */
function convertRegisterDeviceOptions(
  options: RegisterDeviceOptions
): convertedRegisterDeviceOptions {
  const temp: convertedRegisterDeviceOptions = {
    name: options.name,
    udid: options.udid,
  };
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  return temp;
}

/** @ignore */
type convertedRegisterDevicesOptions = {
  devices?: { string: string };
  devices_file?: string;
  api_key_path?: string;
  api_key?: { string: string };
  team_id?: string;
  team_name?: string;
  username?: string;
  platform?: string;
};
/** @ignore Convert RegisterDevicesOptions to the shape used by the Fastlane service
 */
function convertRegisterDevicesOptions(
  options: RegisterDevicesOptions
): convertedRegisterDevicesOptions {
  const temp: convertedRegisterDevicesOptions = {};
  if (typeof options.devices !== "undefined") temp["devices"] = options.devices;
  if (typeof options.devicesFile !== "undefined")
    temp["devices_file"] = options.devicesFile;
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  return temp;
}

/** @ignore */
type convertedResetGitRepoOptions = {
  files?: string[];
  force: boolean;
  skip_clean: boolean;
  disregard_gitignore?: boolean;
  exclude?: string;
};
/** @ignore Convert ResetGitRepoOptions to the shape used by the Fastlane service
 */
function convertResetGitRepoOptions(
  options: ResetGitRepoOptions
): convertedResetGitRepoOptions {
  const temp: convertedResetGitRepoOptions = {
    force: options.force,
    skip_clean: options.skipClean,
  };
  if (typeof options.files !== "undefined") temp["files"] = options.files;
  if (typeof options.disregardGitignore !== "undefined")
    temp["disregard_gitignore"] = options.disregardGitignore;
  if (typeof options.exclude !== "undefined") temp["exclude"] = options.exclude;
  return temp;
}

/** @ignore */
type convertedResetSimulatorContentsOptions = {
  ios?: string[];
  os_versions?: string[];
};
/** @ignore Convert ResetSimulatorContentsOptions to the shape used by the Fastlane service
 */
function convertResetSimulatorContentsOptions(
  options: ResetSimulatorContentsOptions
): convertedResetSimulatorContentsOptions {
  const temp: convertedResetSimulatorContentsOptions = {};
  if (typeof options.ios !== "undefined") temp["ios"] = options.ios;
  if (typeof options.osVersions !== "undefined")
    temp["os_versions"] = options.osVersions;
  return temp;
}

/** @ignore */
type convertedResignOptions = {
  ipa: string;
  signing_identity: string;
  entitlements?: string;
  provisioning_profile: string;
  version?: string;
  display_name?: string;
  short_version?: string;
  bundle_version?: string;
  bundle_id?: string;
  use_app_entitlements?: boolean;
  keychain_path?: string;
};
/** @ignore Convert ResignOptions to the shape used by the Fastlane service
 */
function convertResignOptions(options: ResignOptions): convertedResignOptions {
  const temp: convertedResignOptions = {
    ipa: options.ipa,
    signing_identity: options.signingIdentity,
    provisioning_profile: options.provisioningProfile,
  };
  if (typeof options.entitlements !== "undefined")
    temp["entitlements"] = options.entitlements;
  if (typeof options.version !== "undefined") temp["version"] = options.version;
  if (typeof options.displayName !== "undefined")
    temp["display_name"] = options.displayName;
  if (typeof options.shortVersion !== "undefined")
    temp["short_version"] = options.shortVersion;
  if (typeof options.bundleVersion !== "undefined")
    temp["bundle_version"] = options.bundleVersion;
  if (typeof options.bundleId !== "undefined")
    temp["bundle_id"] = options.bundleId;
  if (typeof options.useAppEntitlements !== "undefined")
    temp["use_app_entitlements"] = options.useAppEntitlements;
  if (typeof options.keychainPath !== "undefined")
    temp["keychain_path"] = options.keychainPath;
  return temp;
}

/** @ignore */
type convertedRestoreFileOptions = {
  path: string;
};
/** @ignore Convert RestoreFileOptions to the shape used by the Fastlane service
 */
function convertRestoreFileOptions(
  options: RestoreFileOptions
): convertedRestoreFileOptions {
  const temp: convertedRestoreFileOptions = {
    path: options.path,
  };

  return temp;
}

/** @ignore */
type convertedRocketOptions = {};
/** @ignore Convert RocketOptions to the shape used by the Fastlane service
 */
function convertRocketOptions(options: RocketOptions): convertedRocketOptions {
  const temp: convertedRocketOptions = {};

  return temp;
}

/** @ignore */
type convertedRsyncOptions = {
  extra?: string;
  source: string;
  destination: string;
};
/** @ignore Convert RsyncOptions to the shape used by the Fastlane service
 */
function convertRsyncOptions(options: RsyncOptions): convertedRsyncOptions {
  const temp: convertedRsyncOptions = {
    source: options.source,
    destination: options.destination,
  };
  if (typeof options.extra !== "undefined") temp["extra"] = options.extra;
  return temp;
}

/** @ignore */
type convertedRubyVersionOptions = {};
/** @ignore Convert RubyVersionOptions to the shape used by the Fastlane service
 */
function convertRubyVersionOptions(
  options: RubyVersionOptions
): convertedRubyVersionOptions {
  const temp: convertedRubyVersionOptions = {};

  return temp;
}

/** @ignore */
type convertedRunTestsOptions = {
  workspace?: string;
  project?: string;
  package_path?: string;
  scheme?: string;
  device?: string;
  devices?: string[];
  skip_detect_devices?: boolean;
  ensure_devices_found?: boolean;
  force_quit_simulator: boolean;
  reset_simulator: boolean;
  disable_slide_to_type: boolean;
  prelaunch_simulator?: boolean;
  reinstall_app: boolean;
  app_identifier?: string;
  only_testing?: any;
  skip_testing?: any;
  testplan?: string;
  only_test_configurations?: any;
  skip_test_configurations?: any;
  xctestrun?: string;
  toolchain?: any;
  clean: any;
  code_coverage?: boolean;
  address_sanitizer?: boolean;
  thread_sanitizer?: boolean;
  open_report: any;
  output_directory: string;
  output_style?: string;
  output_types: string;
  output_files?: string;
  buildlog_path: string;
  include_simulator_logs?: boolean;
  suppress_xcode_output?: boolean;
  xcodebuild_formatter: string;
  output_remove_retry_attempts: boolean;
  disable_xcpretty?: boolean;
  formatter?: string;
  xcpretty_formatter?: string;
  xcpretty_args?: string;
  derived_data_path?: string;
  should_zip_build_products?: any;
  output_xctestrun: boolean;
  result_bundle?: any;
  use_clang_report_name: any;
  parallel_testing?: boolean;
  concurrent_workers?: any;
  max_concurrent_simulators?: any;
  disable_concurrent_testing?: boolean;
  skip_build: boolean;
  test_without_building?: boolean;
  build_for_testing?: boolean;
  sdk?: string;
  configuration?: string;
  xcargs?: string;
  xcconfig?: string;
  app_name?: string;
  deployment_target_version?: string;
  slack_url?: string;
  slack_channel?: string;
  slack_message?: string;
  slack_use_webhook_configured_username_and_icon?: boolean;
  slack_username?: string;
  slack_icon_url?: string;
  skip_slack: any;
  slack_only_on_failure: any;
  slack_default_payloads?: string[];
  destination?: any;
  catalyst_platform?: string;
  custom_report_file_name?: string;
  xcodebuild_command?: string;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  use_system_scm?: boolean;
  number_of_retries: any;
  fail_build: boolean;
};
/** @ignore Convert RunTestsOptions to the shape used by the Fastlane service
 */
function convertRunTestsOptions(
  options: RunTestsOptions
): convertedRunTestsOptions {
  const temp: convertedRunTestsOptions = {
    force_quit_simulator: options.forceQuitSimulator,
    reset_simulator: options.resetSimulator,
    disable_slide_to_type: options.disableSlideToType,
    reinstall_app: options.reinstallApp,
    clean: options.clean,
    open_report: options.openReport,
    output_directory: options.outputDirectory,
    output_types: options.outputTypes,
    buildlog_path: options.buildlogPath,
    xcodebuild_formatter: options.xcodebuildFormatter,
    output_remove_retry_attempts: options.outputRemoveRetryAttempts,
    output_xctestrun: options.outputXctestrun,
    use_clang_report_name: options.useClangReportName,
    skip_build: options.skipBuild,
    skip_slack: options.skipSlack,
    slack_only_on_failure: options.slackOnlyOnFailure,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
    number_of_retries: options.numberOfRetries,
    fail_build: options.failBuild,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.packagePath !== "undefined")
    temp["package_path"] = options.packagePath;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.device !== "undefined") temp["device"] = options.device;
  if (typeof options.devices !== "undefined") temp["devices"] = options.devices;
  if (typeof options.skipDetectDevices !== "undefined")
    temp["skip_detect_devices"] = options.skipDetectDevices;
  if (typeof options.ensureDevicesFound !== "undefined")
    temp["ensure_devices_found"] = options.ensureDevicesFound;
  if (typeof options.prelaunchSimulator !== "undefined")
    temp["prelaunch_simulator"] = options.prelaunchSimulator;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.onlyTesting !== "undefined")
    temp["only_testing"] = options.onlyTesting;
  if (typeof options.skipTesting !== "undefined")
    temp["skip_testing"] = options.skipTesting;
  if (typeof options.testplan !== "undefined")
    temp["testplan"] = options.testplan;
  if (typeof options.onlyTestConfigurations !== "undefined")
    temp["only_test_configurations"] = options.onlyTestConfigurations;
  if (typeof options.skipTestConfigurations !== "undefined")
    temp["skip_test_configurations"] = options.skipTestConfigurations;
  if (typeof options.xctestrun !== "undefined")
    temp["xctestrun"] = options.xctestrun;
  if (typeof options.toolchain !== "undefined")
    temp["toolchain"] = options.toolchain;
  if (typeof options.codeCoverage !== "undefined")
    temp["code_coverage"] = options.codeCoverage;
  if (typeof options.addressSanitizer !== "undefined")
    temp["address_sanitizer"] = options.addressSanitizer;
  if (typeof options.threadSanitizer !== "undefined")
    temp["thread_sanitizer"] = options.threadSanitizer;
  if (typeof options.outputStyle !== "undefined")
    temp["output_style"] = options.outputStyle;
  if (typeof options.outputFiles !== "undefined")
    temp["output_files"] = options.outputFiles;
  if (typeof options.includeSimulatorLogs !== "undefined")
    temp["include_simulator_logs"] = options.includeSimulatorLogs;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.formatter !== "undefined")
    temp["formatter"] = options.formatter;
  if (typeof options.xcprettyFormatter !== "undefined")
    temp["xcpretty_formatter"] = options.xcprettyFormatter;
  if (typeof options.xcprettyArgs !== "undefined")
    temp["xcpretty_args"] = options.xcprettyArgs;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.shouldZipBuildProducts !== "undefined")
    temp["should_zip_build_products"] = options.shouldZipBuildProducts;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.parallelTesting !== "undefined")
    temp["parallel_testing"] = options.parallelTesting;
  if (typeof options.concurrentWorkers !== "undefined")
    temp["concurrent_workers"] = options.concurrentWorkers;
  if (typeof options.maxConcurrentSimulators !== "undefined")
    temp["max_concurrent_simulators"] = options.maxConcurrentSimulators;
  if (typeof options.disableConcurrentTesting !== "undefined")
    temp["disable_concurrent_testing"] = options.disableConcurrentTesting;
  if (typeof options.testWithoutBuilding !== "undefined")
    temp["test_without_building"] = options.testWithoutBuilding;
  if (typeof options.buildForTesting !== "undefined")
    temp["build_for_testing"] = options.buildForTesting;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.appName !== "undefined")
    temp["app_name"] = options.appName;
  if (typeof options.deploymentTargetVersion !== "undefined")
    temp["deployment_target_version"] = options.deploymentTargetVersion;
  if (typeof options.slackUrl !== "undefined")
    temp["slack_url"] = options.slackUrl;
  if (typeof options.slackChannel !== "undefined")
    temp["slack_channel"] = options.slackChannel;
  if (typeof options.slackMessage !== "undefined")
    temp["slack_message"] = options.slackMessage;
  if (typeof options.slackUseWebhookConfiguredUsernameAndIcon !== "undefined")
    temp["slack_use_webhook_configured_username_and_icon"] =
      options.slackUseWebhookConfiguredUsernameAndIcon;
  if (typeof options.slackUsername !== "undefined")
    temp["slack_username"] = options.slackUsername;
  if (typeof options.slackIconUrl !== "undefined")
    temp["slack_icon_url"] = options.slackIconUrl;
  if (typeof options.slackDefaultPayloads !== "undefined")
    temp["slack_default_payloads"] = options.slackDefaultPayloads;
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  if (typeof options.catalystPlatform !== "undefined")
    temp["catalyst_platform"] = options.catalystPlatform;
  if (typeof options.customReportFileName !== "undefined")
    temp["custom_report_file_name"] = options.customReportFileName;
  if (typeof options.xcodebuildCommand !== "undefined")
    temp["xcodebuild_command"] = options.xcodebuildCommand;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.useSystemScm !== "undefined")
    temp["use_system_scm"] = options.useSystemScm;
  return temp;
}

/** @ignore */
type convertedS3Options = {
  ipa?: string;
  dsym?: string;
  upload_metadata?: boolean;
  plist_template_path?: string;
  plist_file_name?: string;
  html_template_path?: string;
  html_file_name?: string;
  version_template_path?: string;
  version_file_name?: string;
  access_key?: string;
  secret_access_key?: string;
  bucket?: string;
  region?: string;
  path?: string;
  source?: string;
  acl?: string;
};
/** @ignore Convert S3Options to the shape used by the Fastlane service
 */
function convertS3Options(options: S3Options): convertedS3Options {
  const temp: convertedS3Options = {};
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.dsym !== "undefined") temp["dsym"] = options.dsym;
  if (typeof options.uploadMetadata !== "undefined")
    temp["upload_metadata"] = options.uploadMetadata;
  if (typeof options.plistTemplatePath !== "undefined")
    temp["plist_template_path"] = options.plistTemplatePath;
  if (typeof options.plistFileName !== "undefined")
    temp["plist_file_name"] = options.plistFileName;
  if (typeof options.htmlTemplatePath !== "undefined")
    temp["html_template_path"] = options.htmlTemplatePath;
  if (typeof options.htmlFileName !== "undefined")
    temp["html_file_name"] = options.htmlFileName;
  if (typeof options.versionTemplatePath !== "undefined")
    temp["version_template_path"] = options.versionTemplatePath;
  if (typeof options.versionFileName !== "undefined")
    temp["version_file_name"] = options.versionFileName;
  if (typeof options.accessKey !== "undefined")
    temp["access_key"] = options.accessKey;
  if (typeof options.secretAccessKey !== "undefined")
    temp["secret_access_key"] = options.secretAccessKey;
  if (typeof options.bucket !== "undefined") temp["bucket"] = options.bucket;
  if (typeof options.region !== "undefined") temp["region"] = options.region;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.source !== "undefined") temp["source"] = options.source;
  if (typeof options.acl !== "undefined") temp["acl"] = options.acl;
  return temp;
}

/** @ignore */
type convertedSayOptions = {
  text: string[];
  mute: boolean;
};
/** @ignore Convert SayOptions to the shape used by the Fastlane service
 */
function convertSayOptions(options: SayOptions): convertedSayOptions {
  const temp: convertedSayOptions = {
    text: options.text,
    mute: options.mute,
  };

  return temp;
}

/** @ignore */
type convertedScanOptions = {
  workspace?: string;
  project?: string;
  package_path?: string;
  scheme?: string;
  device?: string;
  devices?: string[];
  skip_detect_devices?: boolean;
  ensure_devices_found?: boolean;
  force_quit_simulator: boolean;
  reset_simulator: boolean;
  disable_slide_to_type: boolean;
  prelaunch_simulator?: boolean;
  reinstall_app: boolean;
  app_identifier?: string;
  only_testing?: any;
  skip_testing?: any;
  testplan?: string;
  only_test_configurations?: any;
  skip_test_configurations?: any;
  xctestrun?: string;
  toolchain?: any;
  clean: any;
  code_coverage?: boolean;
  address_sanitizer?: boolean;
  thread_sanitizer?: boolean;
  open_report: any;
  output_directory: string;
  output_style?: string;
  output_types: string;
  output_files?: string;
  buildlog_path: string;
  include_simulator_logs?: boolean;
  suppress_xcode_output?: boolean;
  xcodebuild_formatter: string;
  output_remove_retry_attempts: boolean;
  disable_xcpretty?: boolean;
  formatter?: string;
  xcpretty_formatter?: string;
  xcpretty_args?: string;
  derived_data_path?: string;
  should_zip_build_products?: any;
  output_xctestrun: boolean;
  result_bundle?: any;
  use_clang_report_name: any;
  parallel_testing?: boolean;
  concurrent_workers?: any;
  max_concurrent_simulators?: any;
  disable_concurrent_testing?: boolean;
  skip_build: boolean;
  test_without_building?: boolean;
  build_for_testing?: boolean;
  sdk?: string;
  configuration?: string;
  xcargs?: string;
  xcconfig?: string;
  app_name?: string;
  deployment_target_version?: string;
  slack_url?: string;
  slack_channel?: string;
  slack_message?: string;
  slack_use_webhook_configured_username_and_icon?: boolean;
  slack_username?: string;
  slack_icon_url?: string;
  skip_slack: any;
  slack_only_on_failure: any;
  slack_default_payloads?: string[];
  destination?: any;
  catalyst_platform?: string;
  custom_report_file_name?: string;
  xcodebuild_command?: string;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  use_system_scm?: boolean;
  number_of_retries: any;
  fail_build: boolean;
};
/** @ignore Convert ScanOptions to the shape used by the Fastlane service
 */
function convertScanOptions(options: ScanOptions): convertedScanOptions {
  const temp: convertedScanOptions = {
    force_quit_simulator: options.forceQuitSimulator,
    reset_simulator: options.resetSimulator,
    disable_slide_to_type: options.disableSlideToType,
    reinstall_app: options.reinstallApp,
    clean: options.clean,
    open_report: options.openReport,
    output_directory: options.outputDirectory,
    output_types: options.outputTypes,
    buildlog_path: options.buildlogPath,
    xcodebuild_formatter: options.xcodebuildFormatter,
    output_remove_retry_attempts: options.outputRemoveRetryAttempts,
    output_xctestrun: options.outputXctestrun,
    use_clang_report_name: options.useClangReportName,
    skip_build: options.skipBuild,
    skip_slack: options.skipSlack,
    slack_only_on_failure: options.slackOnlyOnFailure,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
    number_of_retries: options.numberOfRetries,
    fail_build: options.failBuild,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.packagePath !== "undefined")
    temp["package_path"] = options.packagePath;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.device !== "undefined") temp["device"] = options.device;
  if (typeof options.devices !== "undefined") temp["devices"] = options.devices;
  if (typeof options.skipDetectDevices !== "undefined")
    temp["skip_detect_devices"] = options.skipDetectDevices;
  if (typeof options.ensureDevicesFound !== "undefined")
    temp["ensure_devices_found"] = options.ensureDevicesFound;
  if (typeof options.prelaunchSimulator !== "undefined")
    temp["prelaunch_simulator"] = options.prelaunchSimulator;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.onlyTesting !== "undefined")
    temp["only_testing"] = options.onlyTesting;
  if (typeof options.skipTesting !== "undefined")
    temp["skip_testing"] = options.skipTesting;
  if (typeof options.testplan !== "undefined")
    temp["testplan"] = options.testplan;
  if (typeof options.onlyTestConfigurations !== "undefined")
    temp["only_test_configurations"] = options.onlyTestConfigurations;
  if (typeof options.skipTestConfigurations !== "undefined")
    temp["skip_test_configurations"] = options.skipTestConfigurations;
  if (typeof options.xctestrun !== "undefined")
    temp["xctestrun"] = options.xctestrun;
  if (typeof options.toolchain !== "undefined")
    temp["toolchain"] = options.toolchain;
  if (typeof options.codeCoverage !== "undefined")
    temp["code_coverage"] = options.codeCoverage;
  if (typeof options.addressSanitizer !== "undefined")
    temp["address_sanitizer"] = options.addressSanitizer;
  if (typeof options.threadSanitizer !== "undefined")
    temp["thread_sanitizer"] = options.threadSanitizer;
  if (typeof options.outputStyle !== "undefined")
    temp["output_style"] = options.outputStyle;
  if (typeof options.outputFiles !== "undefined")
    temp["output_files"] = options.outputFiles;
  if (typeof options.includeSimulatorLogs !== "undefined")
    temp["include_simulator_logs"] = options.includeSimulatorLogs;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.formatter !== "undefined")
    temp["formatter"] = options.formatter;
  if (typeof options.xcprettyFormatter !== "undefined")
    temp["xcpretty_formatter"] = options.xcprettyFormatter;
  if (typeof options.xcprettyArgs !== "undefined")
    temp["xcpretty_args"] = options.xcprettyArgs;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.shouldZipBuildProducts !== "undefined")
    temp["should_zip_build_products"] = options.shouldZipBuildProducts;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.parallelTesting !== "undefined")
    temp["parallel_testing"] = options.parallelTesting;
  if (typeof options.concurrentWorkers !== "undefined")
    temp["concurrent_workers"] = options.concurrentWorkers;
  if (typeof options.maxConcurrentSimulators !== "undefined")
    temp["max_concurrent_simulators"] = options.maxConcurrentSimulators;
  if (typeof options.disableConcurrentTesting !== "undefined")
    temp["disable_concurrent_testing"] = options.disableConcurrentTesting;
  if (typeof options.testWithoutBuilding !== "undefined")
    temp["test_without_building"] = options.testWithoutBuilding;
  if (typeof options.buildForTesting !== "undefined")
    temp["build_for_testing"] = options.buildForTesting;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.appName !== "undefined")
    temp["app_name"] = options.appName;
  if (typeof options.deploymentTargetVersion !== "undefined")
    temp["deployment_target_version"] = options.deploymentTargetVersion;
  if (typeof options.slackUrl !== "undefined")
    temp["slack_url"] = options.slackUrl;
  if (typeof options.slackChannel !== "undefined")
    temp["slack_channel"] = options.slackChannel;
  if (typeof options.slackMessage !== "undefined")
    temp["slack_message"] = options.slackMessage;
  if (typeof options.slackUseWebhookConfiguredUsernameAndIcon !== "undefined")
    temp["slack_use_webhook_configured_username_and_icon"] =
      options.slackUseWebhookConfiguredUsernameAndIcon;
  if (typeof options.slackUsername !== "undefined")
    temp["slack_username"] = options.slackUsername;
  if (typeof options.slackIconUrl !== "undefined")
    temp["slack_icon_url"] = options.slackIconUrl;
  if (typeof options.slackDefaultPayloads !== "undefined")
    temp["slack_default_payloads"] = options.slackDefaultPayloads;
  if (typeof options.destination !== "undefined")
    temp["destination"] = options.destination;
  if (typeof options.catalystPlatform !== "undefined")
    temp["catalyst_platform"] = options.catalystPlatform;
  if (typeof options.customReportFileName !== "undefined")
    temp["custom_report_file_name"] = options.customReportFileName;
  if (typeof options.xcodebuildCommand !== "undefined")
    temp["xcodebuild_command"] = options.xcodebuildCommand;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.useSystemScm !== "undefined")
    temp["use_system_scm"] = options.useSystemScm;
  return temp;
}

/** @ignore */
type convertedScpOptions = {
  username: string;
  password?: string;
  host: string;
  port?: string;
  upload?: { string: string };
  download?: { string: string };
};
/** @ignore Convert ScpOptions to the shape used by the Fastlane service
 */
function convertScpOptions(options: ScpOptions): convertedScpOptions {
  const temp: convertedScpOptions = {
    username: options.username,
    host: options.host,
  };
  if (typeof options.password !== "undefined")
    temp["password"] = options.password;
  if (typeof options.port !== "undefined") temp["port"] = options.port;
  if (typeof options.upload !== "undefined") temp["upload"] = options.upload;
  if (typeof options.download !== "undefined")
    temp["download"] = options.download;
  return temp;
}

/** @ignore */
type convertedScreengrabOptions = {
  android_home?: string;
  build_tools_version?: string;
  locales: string[];
  clear_previous_screenshots: boolean;
  output_directory: string;
  skip_open_summary: boolean;
  app_package_name: string;
  tests_package_name?: string;
  use_tests_in_packages?: string[];
  use_tests_in_classes?: string[];
  launch_arguments?: string[];
  test_instrumentation_runner?: string;
  ending_locale?: string;
  use_adb_root?: boolean;
  app_apk_path?: string;
  tests_apk_path?: string;
  specific_device?: string;
  device_type: string;
  exit_on_test_failure: boolean;
  reinstall_app: boolean;
  use_timestamp_suffix: boolean;
  adb_host?: string;
};
/** @ignore Convert ScreengrabOptions to the shape used by the Fastlane service
 */
function convertScreengrabOptions(
  options: ScreengrabOptions
): convertedScreengrabOptions {
  const temp: convertedScreengrabOptions = {
    locales: options.locales,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    output_directory: options.outputDirectory,
    skip_open_summary: options.skipOpenSummary,
    app_package_name: options.appPackageName,
    device_type: options.deviceType,
    exit_on_test_failure: options.exitOnTestFailure,
    reinstall_app: options.reinstallApp,
    use_timestamp_suffix: options.useTimestampSuffix,
  };
  if (typeof options.androidHome !== "undefined")
    temp["android_home"] = options.androidHome;
  if (typeof options.buildToolsVersion !== "undefined")
    temp["build_tools_version"] = options.buildToolsVersion;
  if (typeof options.testsPackageName !== "undefined")
    temp["tests_package_name"] = options.testsPackageName;
  if (typeof options.useTestsInPackages !== "undefined")
    temp["use_tests_in_packages"] = options.useTestsInPackages;
  if (typeof options.useTestsInClasses !== "undefined")
    temp["use_tests_in_classes"] = options.useTestsInClasses;
  if (typeof options.launchArguments !== "undefined")
    temp["launch_arguments"] = options.launchArguments;
  if (typeof options.testInstrumentationRunner !== "undefined")
    temp["test_instrumentation_runner"] = options.testInstrumentationRunner;
  if (typeof options.endingLocale !== "undefined")
    temp["ending_locale"] = options.endingLocale;
  if (typeof options.useAdbRoot !== "undefined")
    temp["use_adb_root"] = options.useAdbRoot;
  if (typeof options.appApkPath !== "undefined")
    temp["app_apk_path"] = options.appApkPath;
  if (typeof options.testsApkPath !== "undefined")
    temp["tests_apk_path"] = options.testsApkPath;
  if (typeof options.specificDevice !== "undefined")
    temp["specific_device"] = options.specificDevice;
  if (typeof options.adbHost !== "undefined")
    temp["adb_host"] = options.adbHost;
  return temp;
}

/** @ignore */
type convertedSetBuildNumberRepositoryOptions = {
  use_hg_revision_number?: boolean;
  xcodeproj?: string;
};
/** @ignore Convert SetBuildNumberRepositoryOptions to the shape used by the Fastlane service
 */
function convertSetBuildNumberRepositoryOptions(
  options: SetBuildNumberRepositoryOptions
): convertedSetBuildNumberRepositoryOptions {
  const temp: convertedSetBuildNumberRepositoryOptions = {};
  if (typeof options.useHgRevisionNumber !== "undefined")
    temp["use_hg_revision_number"] = options.useHgRevisionNumber;
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  return temp;
}

/** @ignore */
type convertedSetChangelogOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  app_identifier: string;
  username?: string;
  version?: string;
  changelog?: string;
  team_id?: string;
  team_name?: string;
  platform: string;
};
/** @ignore Convert SetChangelogOptions to the shape used by the Fastlane service
 */
function convertSetChangelogOptions(
  options: SetChangelogOptions
): convertedSetChangelogOptions {
  const temp: convertedSetChangelogOptions = {
    app_identifier: options.appIdentifier,
    platform: options.platform,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.version !== "undefined") temp["version"] = options.version;
  if (typeof options.changelog !== "undefined")
    temp["changelog"] = options.changelog;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  return temp;
}

/** @ignore */
type convertedSetGithubReleaseOptions = {
  repository_name: string;
  server_url?: string;
  api_token?: string;
  api_bearer?: string;
  tag_name: string;
  name?: string;
  commitish?: string;
  description?: string;
  is_draft?: boolean;
  is_prerelease?: boolean;
  is_generate_release_notes?: boolean;
  upload_assets?: string[];
};
/** @ignore Convert SetGithubReleaseOptions to the shape used by the Fastlane service
 */
function convertSetGithubReleaseOptions(
  options: SetGithubReleaseOptions
): convertedSetGithubReleaseOptions {
  const temp: convertedSetGithubReleaseOptions = {
    repository_name: options.repositoryName,
    tag_name: options.tagName,
  };
  if (typeof options.serverUrl !== "undefined")
    temp["server_url"] = options.serverUrl;
  if (typeof options.apiToken !== "undefined")
    temp["api_token"] = options.apiToken;
  if (typeof options.apiBearer !== "undefined")
    temp["api_bearer"] = options.apiBearer;
  if (typeof options.name !== "undefined") temp["name"] = options.name;
  if (typeof options.commitish !== "undefined")
    temp["commitish"] = options.commitish;
  if (typeof options.description !== "undefined")
    temp["description"] = options.description;
  if (typeof options.isDraft !== "undefined")
    temp["is_draft"] = options.isDraft;
  if (typeof options.isPrerelease !== "undefined")
    temp["is_prerelease"] = options.isPrerelease;
  if (typeof options.isGenerateReleaseNotes !== "undefined")
    temp["is_generate_release_notes"] = options.isGenerateReleaseNotes;
  if (typeof options.uploadAssets !== "undefined")
    temp["upload_assets"] = options.uploadAssets;
  return temp;
}

/** @ignore */
type convertedSetInfoPlistValueOptions = {
  key: string;
  subkey?: string;
  value: string;
  path: string;
  output_file_name?: string;
};
/** @ignore Convert SetInfoPlistValueOptions to the shape used by the Fastlane service
 */
function convertSetInfoPlistValueOptions(
  options: SetInfoPlistValueOptions
): convertedSetInfoPlistValueOptions {
  const temp: convertedSetInfoPlistValueOptions = {
    key: options.key,
    value: options.value,
    path: options.path,
  };
  if (typeof options.subkey !== "undefined") temp["subkey"] = options.subkey;
  if (typeof options.outputFileName !== "undefined")
    temp["output_file_name"] = options.outputFileName;
  return temp;
}

/** @ignore */
type convertedSetPodKeyOptions = {
  use_bundle_exec: boolean;
  key: string;
  value: string;
  project?: string;
};
/** @ignore Convert SetPodKeyOptions to the shape used by the Fastlane service
 */
function convertSetPodKeyOptions(
  options: SetPodKeyOptions
): convertedSetPodKeyOptions {
  const temp: convertedSetPodKeyOptions = {
    use_bundle_exec: options.useBundleExec,
    key: options.key,
    value: options.value,
  };
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  return temp;
}

/** @ignore */
type convertedSetupCiOptions = {
  force: boolean;
  provider?: string;
};
/** @ignore Convert SetupCiOptions to the shape used by the Fastlane service
 */
function convertSetupCiOptions(
  options: SetupCiOptions
): convertedSetupCiOptions {
  const temp: convertedSetupCiOptions = {
    force: options.force,
  };
  if (typeof options.provider !== "undefined")
    temp["provider"] = options.provider;
  return temp;
}

/** @ignore */
type convertedSetupCircleCiOptions = {
  force: boolean;
};
/** @ignore Convert SetupCircleCiOptions to the shape used by the Fastlane service
 */
function convertSetupCircleCiOptions(
  options: SetupCircleCiOptions
): convertedSetupCircleCiOptions {
  const temp: convertedSetupCircleCiOptions = {
    force: options.force,
  };

  return temp;
}

/** @ignore */
type convertedSetupJenkinsOptions = {
  force: boolean;
  unlock_keychain: boolean;
  add_keychain_to_search_list: string;
  set_default_keychain: boolean;
  keychain_path?: string;
  keychain_password: string;
  set_code_signing_identity: boolean;
  code_signing_identity?: string;
  output_directory: string;
  derived_data_path: string;
  result_bundle: boolean;
};
/** @ignore Convert SetupJenkinsOptions to the shape used by the Fastlane service
 */
function convertSetupJenkinsOptions(
  options: SetupJenkinsOptions
): convertedSetupJenkinsOptions {
  const temp: convertedSetupJenkinsOptions = {
    force: options.force,
    unlock_keychain: options.unlockKeychain,
    add_keychain_to_search_list: options.addKeychainToSearchList,
    set_default_keychain: options.setDefaultKeychain,
    keychain_password: options.keychainPassword,
    set_code_signing_identity: options.setCodeSigningIdentity,
    output_directory: options.outputDirectory,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
  };
  if (typeof options.keychainPath !== "undefined")
    temp["keychain_path"] = options.keychainPath;
  if (typeof options.codeSigningIdentity !== "undefined")
    temp["code_signing_identity"] = options.codeSigningIdentity;
  return temp;
}

/** @ignore */
type convertedSetupTravisOptions = {
  force: boolean;
};
/** @ignore Convert SetupTravisOptions to the shape used by the Fastlane service
 */
function convertSetupTravisOptions(
  options: SetupTravisOptions
): convertedSetupTravisOptions {
  const temp: convertedSetupTravisOptions = {
    force: options.force,
  };

  return temp;
}

/** @ignore */
type convertedShOptions = {
  command: string;
  log?: boolean;
  error_callback?: any;
};
/** @ignore Convert ShOptions to the shape used by the Fastlane service
 */
function convertShOptions(options: ShOptions): convertedShOptions {
  const temp: convertedShOptions = {
    command: options.command,
  };
  if (typeof options.log !== "undefined") temp["log"] = options.log;
  if (typeof options.errorCallback !== "undefined")
    temp["error_callback"] = options.errorCallback;
  return temp;
}

/** @ignore */
type convertedSighOptions = {
  adhoc: any;
  developer_id: any;
  development: any;
  skip_install: any;
  force: any;
  app_identifier: string;
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  team_id?: string;
  team_name?: string;
  provisioning_name?: string;
  ignore_profiles_with_different_name?: any;
  output_path: string;
  cert_id?: string;
  cert_owner_name?: string;
  filename?: string;
  skip_fetch_profiles: any;
  include_all_certificates: any;
  skip_certificate_verification: any;
  platform: any;
  readonly?: any;
  template_name?: string;
  fail_on_name_taken?: any;
};
/** @ignore Convert SighOptions to the shape used by the Fastlane service
 */
function convertSighOptions(options: SighOptions): convertedSighOptions {
  const temp: convertedSighOptions = {
    adhoc: options.adhoc,
    developer_id: options.developerId,
    development: options.development,
    skip_install: options.skipInstall,
    force: options.force,
    app_identifier: options.appIdentifier,
    output_path: options.outputPath,
    skip_fetch_profiles: options.skipFetchProfiles,
    include_all_certificates: options.includeAllCertificates,
    skip_certificate_verification: options.skipCertificateVerification,
    platform: options.platform,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.provisioningName !== "undefined")
    temp["provisioning_name"] = options.provisioningName;
  if (typeof options.ignoreProfilesWithDifferentName !== "undefined")
    temp["ignore_profiles_with_different_name"] =
      options.ignoreProfilesWithDifferentName;
  if (typeof options.certId !== "undefined") temp["cert_id"] = options.certId;
  if (typeof options.certOwnerName !== "undefined")
    temp["cert_owner_name"] = options.certOwnerName;
  if (typeof options.filename !== "undefined")
    temp["filename"] = options.filename;
  if (typeof options.readonly !== "undefined")
    temp["readonly"] = options.readonly;
  if (typeof options.templateName !== "undefined")
    temp["template_name"] = options.templateName;
  if (typeof options.failOnNameTaken !== "undefined")
    temp["fail_on_name_taken"] = options.failOnNameTaken;
  return temp;
}

/** @ignore */
type convertedSkipDocsOptions = {};
/** @ignore Convert SkipDocsOptions to the shape used by the Fastlane service
 */
function convertSkipDocsOptions(
  options: SkipDocsOptions
): convertedSkipDocsOptions {
  const temp: convertedSkipDocsOptions = {};

  return temp;
}

/** @ignore */
type convertedSlackOptions = {
  message?: string;
  pretext?: string;
  channel?: string;
  use_webhook_configured_username_and_icon?: boolean;
  slack_url: string;
  username?: string;
  icon_url?: string;
  payload: { string: string };
  default_payloads: string[];
  attachment_properties: { string: string };
  success?: boolean;
  fail_on_error?: boolean;
  link_names?: boolean;
};
/** @ignore Convert SlackOptions to the shape used by the Fastlane service
 */
function convertSlackOptions(options: SlackOptions): convertedSlackOptions {
  const temp: convertedSlackOptions = {
    slack_url: options.slackUrl,
    payload: options.payload,
    default_payloads: options.defaultPayloads,
    attachment_properties: options.attachmentProperties,
  };
  if (typeof options.message !== "undefined") temp["message"] = options.message;
  if (typeof options.pretext !== "undefined") temp["pretext"] = options.pretext;
  if (typeof options.channel !== "undefined") temp["channel"] = options.channel;
  if (typeof options.useWebhookConfiguredUsernameAndIcon !== "undefined")
    temp["use_webhook_configured_username_and_icon"] =
      options.useWebhookConfiguredUsernameAndIcon;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.iconUrl !== "undefined")
    temp["icon_url"] = options.iconUrl;
  if (typeof options.success !== "undefined") temp["success"] = options.success;
  if (typeof options.failOnError !== "undefined")
    temp["fail_on_error"] = options.failOnError;
  if (typeof options.linkNames !== "undefined")
    temp["link_names"] = options.linkNames;
  return temp;
}

/** @ignore */
type convertedSlatherOptions = {
  build_directory?: string;
  proj?: string;
  workspace?: string;
  scheme?: string;
  configuration?: string;
  input_format?: string;
  github?: boolean;
  buildkite?: boolean;
  teamcity?: boolean;
  jenkins?: boolean;
  travis?: boolean;
  travis_pro?: boolean;
  circleci?: boolean;
  coveralls?: boolean;
  simple_output?: boolean;
  gutter_json?: boolean;
  cobertura_xml?: boolean;
  sonarqube_xml?: boolean;
  llvm_cov?: boolean;
  json?: boolean;
  html?: boolean;
  show: boolean;
  source_directory?: string;
  output_directory?: string;
  ignore?: string[];
  verbose?: boolean;
  use_bundle_exec: boolean;
  binary_basename?: string[];
  binary_file?: string[];
  arch?: string;
  source_files?: string;
  decimals?: string;
};
/** @ignore Convert SlatherOptions to the shape used by the Fastlane service
 */
function convertSlatherOptions(
  options: SlatherOptions
): convertedSlatherOptions {
  const temp: convertedSlatherOptions = {
    show: options.show,
    use_bundle_exec: options.useBundleExec,
  };
  if (typeof options.buildDirectory !== "undefined")
    temp["build_directory"] = options.buildDirectory;
  if (typeof options.proj !== "undefined") temp["proj"] = options.proj;
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.inputFormat !== "undefined")
    temp["input_format"] = options.inputFormat;
  if (typeof options.github !== "undefined") temp["github"] = options.github;
  if (typeof options.buildkite !== "undefined")
    temp["buildkite"] = options.buildkite;
  if (typeof options.teamcity !== "undefined")
    temp["teamcity"] = options.teamcity;
  if (typeof options.jenkins !== "undefined") temp["jenkins"] = options.jenkins;
  if (typeof options.travis !== "undefined") temp["travis"] = options.travis;
  if (typeof options.travisPro !== "undefined")
    temp["travis_pro"] = options.travisPro;
  if (typeof options.circleci !== "undefined")
    temp["circleci"] = options.circleci;
  if (typeof options.coveralls !== "undefined")
    temp["coveralls"] = options.coveralls;
  if (typeof options.simpleOutput !== "undefined")
    temp["simple_output"] = options.simpleOutput;
  if (typeof options.gutterJson !== "undefined")
    temp["gutter_json"] = options.gutterJson;
  if (typeof options.coberturaXml !== "undefined")
    temp["cobertura_xml"] = options.coberturaXml;
  if (typeof options.sonarqubeXml !== "undefined")
    temp["sonarqube_xml"] = options.sonarqubeXml;
  if (typeof options.llvmCov !== "undefined")
    temp["llvm_cov"] = options.llvmCov;
  if (typeof options.json !== "undefined") temp["json"] = options.json;
  if (typeof options.html !== "undefined") temp["html"] = options.html;
  if (typeof options.sourceDirectory !== "undefined")
    temp["source_directory"] = options.sourceDirectory;
  if (typeof options.outputDirectory !== "undefined")
    temp["output_directory"] = options.outputDirectory;
  if (typeof options.ignore !== "undefined") temp["ignore"] = options.ignore;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  if (typeof options.binaryBasename !== "undefined")
    temp["binary_basename"] = options.binaryBasename;
  if (typeof options.binaryFile !== "undefined")
    temp["binary_file"] = options.binaryFile;
  if (typeof options.arch !== "undefined") temp["arch"] = options.arch;
  if (typeof options.sourceFiles !== "undefined")
    temp["source_files"] = options.sourceFiles;
  if (typeof options.decimals !== "undefined")
    temp["decimals"] = options.decimals;
  return temp;
}

/** @ignore */
type convertedSnapshotOptions = {
  workspace?: string;
  project?: string;
  xcargs?: string;
  xcconfig?: string;
  devices?: string[];
  languages: string[];
  launch_arguments: string[];
  output_directory: string;
  output_simulator_logs?: boolean;
  ios_version?: string;
  skip_open_summary: any;
  skip_helper_version_check: any;
  clear_previous_screenshots: any;
  reinstall_app: any;
  erase_simulator: any;
  headless: boolean;
  override_status_bar: any;
  override_status_bar_arguments?: string;
  localize_simulator: any;
  dark_mode?: boolean;
  app_identifier?: string;
  add_photos?: string[];
  add_videos?: string[];
  html_template?: string;
  buildlog_path: string;
  clean: any;
  test_without_building?: boolean;
  configuration?: string;
  sdk?: string;
  scheme?: string;
  number_of_retries: any;
  stop_after_first_error: any;
  derived_data_path?: string;
  result_bundle?: any;
  test_target_name?: string;
  namespace_log_files?: any;
  concurrent_simulators: any;
  disable_slide_to_type?: any;
  cloned_source_packages_path?: string;
  skip_package_dependencies_resolution: boolean;
  disable_package_automatic_updates: boolean;
  testplan?: string;
  only_testing?: any;
  skip_testing?: any;
  xcodebuild_formatter: string;
  xcpretty_args?: string;
  disable_xcpretty?: boolean;
  suppress_xcode_output?: boolean;
  use_system_scm: boolean;
};
/** @ignore Convert SnapshotOptions to the shape used by the Fastlane service
 */
function convertSnapshotOptions(
  options: SnapshotOptions
): convertedSnapshotOptions {
  const temp: convertedSnapshotOptions = {
    languages: options.languages,
    launch_arguments: options.launchArguments,
    output_directory: options.outputDirectory,
    skip_open_summary: options.skipOpenSummary,
    skip_helper_version_check: options.skipHelperVersionCheck,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    reinstall_app: options.reinstallApp,
    erase_simulator: options.eraseSimulator,
    headless: options.headless,
    override_status_bar: options.overrideStatusBar,
    localize_simulator: options.localizeSimulator,
    buildlog_path: options.buildlogPath,
    clean: options.clean,
    number_of_retries: options.numberOfRetries,
    stop_after_first_error: options.stopAfterFirstError,
    concurrent_simulators: options.concurrentSimulators,
    skip_package_dependencies_resolution:
      options.skipPackageDependenciesResolution,
    disable_package_automatic_updates: options.disablePackageAutomaticUpdates,
    xcodebuild_formatter: options.xcodebuildFormatter,
    use_system_scm: options.useSystemScm,
  };
  if (typeof options.workspace !== "undefined")
    temp["workspace"] = options.workspace;
  if (typeof options.project !== "undefined") temp["project"] = options.project;
  if (typeof options.xcargs !== "undefined") temp["xcargs"] = options.xcargs;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.devices !== "undefined") temp["devices"] = options.devices;
  if (typeof options.outputSimulatorLogs !== "undefined")
    temp["output_simulator_logs"] = options.outputSimulatorLogs;
  if (typeof options.iosVersion !== "undefined")
    temp["ios_version"] = options.iosVersion;
  if (typeof options.overrideStatusBarArguments !== "undefined")
    temp["override_status_bar_arguments"] = options.overrideStatusBarArguments;
  if (typeof options.darkMode !== "undefined")
    temp["dark_mode"] = options.darkMode;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.addPhotos !== "undefined")
    temp["add_photos"] = options.addPhotos;
  if (typeof options.addVideos !== "undefined")
    temp["add_videos"] = options.addVideos;
  if (typeof options.htmlTemplate !== "undefined")
    temp["html_template"] = options.htmlTemplate;
  if (typeof options.testWithoutBuilding !== "undefined")
    temp["test_without_building"] = options.testWithoutBuilding;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.sdk !== "undefined") temp["sdk"] = options.sdk;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.derivedDataPath !== "undefined")
    temp["derived_data_path"] = options.derivedDataPath;
  if (typeof options.resultBundle !== "undefined")
    temp["result_bundle"] = options.resultBundle;
  if (typeof options.testTargetName !== "undefined")
    temp["test_target_name"] = options.testTargetName;
  if (typeof options.namespaceLogFiles !== "undefined")
    temp["namespace_log_files"] = options.namespaceLogFiles;
  if (typeof options.disableSlideToType !== "undefined")
    temp["disable_slide_to_type"] = options.disableSlideToType;
  if (typeof options.clonedSourcePackagesPath !== "undefined")
    temp["cloned_source_packages_path"] = options.clonedSourcePackagesPath;
  if (typeof options.testplan !== "undefined")
    temp["testplan"] = options.testplan;
  if (typeof options.onlyTesting !== "undefined")
    temp["only_testing"] = options.onlyTesting;
  if (typeof options.skipTesting !== "undefined")
    temp["skip_testing"] = options.skipTesting;
  if (typeof options.xcprettyArgs !== "undefined")
    temp["xcpretty_args"] = options.xcprettyArgs;
  if (typeof options.disableXcpretty !== "undefined")
    temp["disable_xcpretty"] = options.disableXcpretty;
  if (typeof options.suppressXcodeOutput !== "undefined")
    temp["suppress_xcode_output"] = options.suppressXcodeOutput;
  return temp;
}

/** @ignore */
type convertedSonarOptions = {
  project_configuration_path?: string;
  project_key?: string;
  project_name?: string;
  project_version?: string;
  sources_path?: string;
  exclusions?: string;
  project_language?: string;
  source_encoding?: string;
  sonar_runner_args?: string;
  sonar_login?: string;
  sonar_url?: string;
  sonar_organization?: string;
  branch_name?: string;
  pull_request_branch?: string;
  pull_request_base?: string;
  pull_request_key?: string;
};
/** @ignore Convert SonarOptions to the shape used by the Fastlane service
 */
function convertSonarOptions(options: SonarOptions): convertedSonarOptions {
  const temp: convertedSonarOptions = {};
  if (typeof options.projectConfigurationPath !== "undefined")
    temp["project_configuration_path"] = options.projectConfigurationPath;
  if (typeof options.projectKey !== "undefined")
    temp["project_key"] = options.projectKey;
  if (typeof options.projectName !== "undefined")
    temp["project_name"] = options.projectName;
  if (typeof options.projectVersion !== "undefined")
    temp["project_version"] = options.projectVersion;
  if (typeof options.sourcesPath !== "undefined")
    temp["sources_path"] = options.sourcesPath;
  if (typeof options.exclusions !== "undefined")
    temp["exclusions"] = options.exclusions;
  if (typeof options.projectLanguage !== "undefined")
    temp["project_language"] = options.projectLanguage;
  if (typeof options.sourceEncoding !== "undefined")
    temp["source_encoding"] = options.sourceEncoding;
  if (typeof options.sonarRunnerArgs !== "undefined")
    temp["sonar_runner_args"] = options.sonarRunnerArgs;
  if (typeof options.sonarLogin !== "undefined")
    temp["sonar_login"] = options.sonarLogin;
  if (typeof options.sonarUrl !== "undefined")
    temp["sonar_url"] = options.sonarUrl;
  if (typeof options.sonarOrganization !== "undefined")
    temp["sonar_organization"] = options.sonarOrganization;
  if (typeof options.branchName !== "undefined")
    temp["branch_name"] = options.branchName;
  if (typeof options.pullRequestBranch !== "undefined")
    temp["pull_request_branch"] = options.pullRequestBranch;
  if (typeof options.pullRequestBase !== "undefined")
    temp["pull_request_base"] = options.pullRequestBase;
  if (typeof options.pullRequestKey !== "undefined")
    temp["pull_request_key"] = options.pullRequestKey;
  return temp;
}

/** @ignore */
type convertedSourcedocsOptions = {
  all_modules?: boolean;
  spm_module?: string;
  module_name?: string;
  link_beginning?: string;
  link_ending?: string;
  output_folder: string;
  min_acl?: string;
  module_name_path?: boolean;
  clean?: boolean;
  collapsible?: boolean;
  table_of_contents?: boolean;
  reproducible?: boolean;
  scheme?: string;
  sdk_platform?: string;
};
/** @ignore Convert SourcedocsOptions to the shape used by the Fastlane service
 */
function convertSourcedocsOptions(
  options: SourcedocsOptions
): convertedSourcedocsOptions {
  const temp: convertedSourcedocsOptions = {
    output_folder: options.outputFolder,
  };
  if (typeof options.allModules !== "undefined")
    temp["all_modules"] = options.allModules;
  if (typeof options.spmModule !== "undefined")
    temp["spm_module"] = options.spmModule;
  if (typeof options.moduleName !== "undefined")
    temp["module_name"] = options.moduleName;
  if (typeof options.linkBeginning !== "undefined")
    temp["link_beginning"] = options.linkBeginning;
  if (typeof options.linkEnding !== "undefined")
    temp["link_ending"] = options.linkEnding;
  if (typeof options.minAcl !== "undefined") temp["min_acl"] = options.minAcl;
  if (typeof options.moduleNamePath !== "undefined")
    temp["module_name_path"] = options.moduleNamePath;
  if (typeof options.clean !== "undefined") temp["clean"] = options.clean;
  if (typeof options.collapsible !== "undefined")
    temp["collapsible"] = options.collapsible;
  if (typeof options.tableOfContents !== "undefined")
    temp["table_of_contents"] = options.tableOfContents;
  if (typeof options.reproducible !== "undefined")
    temp["reproducible"] = options.reproducible;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.sdkPlatform !== "undefined")
    temp["sdk_platform"] = options.sdkPlatform;
  return temp;
}

/** @ignore */
type convertedSpaceshipLogsOptions = {
  latest: boolean;
  print_contents: boolean;
  print_paths: boolean;
  copy_to_path?: string;
  copy_to_clipboard: boolean;
};
/** @ignore Convert SpaceshipLogsOptions to the shape used by the Fastlane service
 */
function convertSpaceshipLogsOptions(
  options: SpaceshipLogsOptions
): convertedSpaceshipLogsOptions {
  const temp: convertedSpaceshipLogsOptions = {
    latest: options.latest,
    print_contents: options.printContents,
    print_paths: options.printPaths,
    copy_to_clipboard: options.copyToClipboard,
  };
  if (typeof options.copyToPath !== "undefined")
    temp["copy_to_path"] = options.copyToPath;
  return temp;
}

/** @ignore */
type convertedSpaceshipStatsOptions = {
  print_request_logs: boolean;
};
/** @ignore Convert SpaceshipStatsOptions to the shape used by the Fastlane service
 */
function convertSpaceshipStatsOptions(
  options: SpaceshipStatsOptions
): convertedSpaceshipStatsOptions {
  const temp: convertedSpaceshipStatsOptions = {
    print_request_logs: options.printRequestLogs,
  };

  return temp;
}

/** @ignore */
type convertedSplunkmintOptions = {
  dsym?: string;
  api_key: string;
  api_token: string;
  verbose?: boolean;
  upload_progress?: boolean;
  proxy_username?: string;
  proxy_password?: string;
  proxy_address?: string;
  proxy_port?: string;
};
/** @ignore Convert SplunkmintOptions to the shape used by the Fastlane service
 */
function convertSplunkmintOptions(
  options: SplunkmintOptions
): convertedSplunkmintOptions {
  const temp: convertedSplunkmintOptions = {
    api_key: options.apiKey,
    api_token: options.apiToken,
  };
  if (typeof options.dsym !== "undefined") temp["dsym"] = options.dsym;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  if (typeof options.uploadProgress !== "undefined")
    temp["upload_progress"] = options.uploadProgress;
  if (typeof options.proxyUsername !== "undefined")
    temp["proxy_username"] = options.proxyUsername;
  if (typeof options.proxyPassword !== "undefined")
    temp["proxy_password"] = options.proxyPassword;
  if (typeof options.proxyAddress !== "undefined")
    temp["proxy_address"] = options.proxyAddress;
  if (typeof options.proxyPort !== "undefined")
    temp["proxy_port"] = options.proxyPort;
  return temp;
}

/** @ignore */
type convertedSpmOptions = {
  command: string;
  enable_code_coverage?: boolean;
  build_path?: string;
  package_path?: string;
  xcconfig?: string;
  configuration?: string;
  disable_sandbox?: boolean;
  xcpretty_output?: string;
  xcpretty_args?: string;
  verbose: boolean;
};
/** @ignore Convert SpmOptions to the shape used by the Fastlane service
 */
function convertSpmOptions(options: SpmOptions): convertedSpmOptions {
  const temp: convertedSpmOptions = {
    command: options.command,
    verbose: options.verbose,
  };
  if (typeof options.enableCodeCoverage !== "undefined")
    temp["enable_code_coverage"] = options.enableCodeCoverage;
  if (typeof options.buildPath !== "undefined")
    temp["build_path"] = options.buildPath;
  if (typeof options.packagePath !== "undefined")
    temp["package_path"] = options.packagePath;
  if (typeof options.xcconfig !== "undefined")
    temp["xcconfig"] = options.xcconfig;
  if (typeof options.configuration !== "undefined")
    temp["configuration"] = options.configuration;
  if (typeof options.disableSandbox !== "undefined")
    temp["disable_sandbox"] = options.disableSandbox;
  if (typeof options.xcprettyOutput !== "undefined")
    temp["xcpretty_output"] = options.xcprettyOutput;
  if (typeof options.xcprettyArgs !== "undefined")
    temp["xcpretty_args"] = options.xcprettyArgs;
  return temp;
}

/** @ignore */
type convertedSshOptions = {
  username: string;
  password?: string;
  host: string;
  port?: string;
  commands?: string[];
  log?: boolean;
};
/** @ignore Convert SshOptions to the shape used by the Fastlane service
 */
function convertSshOptions(options: SshOptions): convertedSshOptions {
  const temp: convertedSshOptions = {
    username: options.username,
    host: options.host,
  };
  if (typeof options.password !== "undefined")
    temp["password"] = options.password;
  if (typeof options.port !== "undefined") temp["port"] = options.port;
  if (typeof options.commands !== "undefined")
    temp["commands"] = options.commands;
  if (typeof options.log !== "undefined") temp["log"] = options.log;
  return temp;
}

/** @ignore */
type convertedSupplyOptions = {
  package_name: string;
  version_name?: string;
  version_code?: any;
  release_status?: string;
  track: string;
  rollout?: string;
  metadata_path?: string;
  key?: string;
  issuer?: string;
  json_key?: string;
  json_key_data?: string;
  apk?: string;
  apk_paths?: string[];
  aab?: string;
  aab_paths?: string[];
  skip_upload_apk?: boolean;
  skip_upload_aab?: boolean;
  skip_upload_metadata?: boolean;
  skip_upload_changelogs?: boolean;
  skip_upload_images?: boolean;
  skip_upload_screenshots?: boolean;
  track_promote_to?: string;
  track_promote_release_status?: string;
  validate_only?: boolean;
  mapping?: string;
  mapping_paths?: string[];
  root_url?: string;
  check_superseded_tracks?: boolean;
  timeout?: any;
  deactivate_on_promote?: boolean;
  version_codes_to_retain?: string[];
  changes_not_sent_for_review: boolean;
  rescue_changes_not_sent_for_review: boolean;
  in_app_update_priority?: any;
  obb_main_references_version?: any;
  obb_main_file_size?: any;
  obb_patch_references_version?: any;
  obb_patch_file_size?: any;
  ack_bundle_installation_warning?: boolean;
};
/** @ignore Convert SupplyOptions to the shape used by the Fastlane service
 */
function convertSupplyOptions(options: SupplyOptions): convertedSupplyOptions {
  const temp: convertedSupplyOptions = {
    package_name: options.packageName,
    track: options.track,
    changes_not_sent_for_review: options.changesNotSentForReview,
    rescue_changes_not_sent_for_review: options.rescueChangesNotSentForReview,
  };
  if (typeof options.versionName !== "undefined")
    temp["version_name"] = options.versionName;
  if (typeof options.versionCode !== "undefined")
    temp["version_code"] = options.versionCode;
  if (typeof options.releaseStatus !== "undefined")
    temp["release_status"] = options.releaseStatus;
  if (typeof options.rollout !== "undefined") temp["rollout"] = options.rollout;
  if (typeof options.metadataPath !== "undefined")
    temp["metadata_path"] = options.metadataPath;
  if (typeof options.key !== "undefined") temp["key"] = options.key;
  if (typeof options.issuer !== "undefined") temp["issuer"] = options.issuer;
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  if (typeof options.apk !== "undefined") temp["apk"] = options.apk;
  if (typeof options.apkPaths !== "undefined")
    temp["apk_paths"] = options.apkPaths;
  if (typeof options.aab !== "undefined") temp["aab"] = options.aab;
  if (typeof options.aabPaths !== "undefined")
    temp["aab_paths"] = options.aabPaths;
  if (typeof options.skipUploadApk !== "undefined")
    temp["skip_upload_apk"] = options.skipUploadApk;
  if (typeof options.skipUploadAab !== "undefined")
    temp["skip_upload_aab"] = options.skipUploadAab;
  if (typeof options.skipUploadMetadata !== "undefined")
    temp["skip_upload_metadata"] = options.skipUploadMetadata;
  if (typeof options.skipUploadChangelogs !== "undefined")
    temp["skip_upload_changelogs"] = options.skipUploadChangelogs;
  if (typeof options.skipUploadImages !== "undefined")
    temp["skip_upload_images"] = options.skipUploadImages;
  if (typeof options.skipUploadScreenshots !== "undefined")
    temp["skip_upload_screenshots"] = options.skipUploadScreenshots;
  if (typeof options.trackPromoteTo !== "undefined")
    temp["track_promote_to"] = options.trackPromoteTo;
  if (typeof options.trackPromoteReleaseStatus !== "undefined")
    temp["track_promote_release_status"] = options.trackPromoteReleaseStatus;
  if (typeof options.validateOnly !== "undefined")
    temp["validate_only"] = options.validateOnly;
  if (typeof options.mapping !== "undefined") temp["mapping"] = options.mapping;
  if (typeof options.mappingPaths !== "undefined")
    temp["mapping_paths"] = options.mappingPaths;
  if (typeof options.rootUrl !== "undefined")
    temp["root_url"] = options.rootUrl;
  if (typeof options.checkSupersededTracks !== "undefined")
    temp["check_superseded_tracks"] = options.checkSupersededTracks;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  if (typeof options.deactivateOnPromote !== "undefined")
    temp["deactivate_on_promote"] = options.deactivateOnPromote;
  if (typeof options.versionCodesToRetain !== "undefined")
    temp["version_codes_to_retain"] = options.versionCodesToRetain;
  if (typeof options.inAppUpdatePriority !== "undefined")
    temp["in_app_update_priority"] = options.inAppUpdatePriority;
  if (typeof options.obbMainReferencesVersion !== "undefined")
    temp["obb_main_references_version"] = options.obbMainReferencesVersion;
  if (typeof options.obbMainFileSize !== "undefined")
    temp["obb_main_file_size"] = options.obbMainFileSize;
  if (typeof options.obbPatchReferencesVersion !== "undefined")
    temp["obb_patch_references_version"] = options.obbPatchReferencesVersion;
  if (typeof options.obbPatchFileSize !== "undefined")
    temp["obb_patch_file_size"] = options.obbPatchFileSize;
  if (typeof options.ackBundleInstallationWarning !== "undefined")
    temp["ack_bundle_installation_warning"] =
      options.ackBundleInstallationWarning;
  return temp;
}

/** @ignore */
type convertedSwiftlintOptions = {
  mode?: any;
  path?: string;
  output_file?: string;
  config_file?: string;
  strict?: boolean;
  files?: string[];
  ignore_exit_status?: boolean;
  raise_if_swiftlint_error?: boolean;
  reporter?: string;
  quiet?: boolean;
  executable?: string;
  format?: boolean;
  no_cache?: boolean;
  compiler_log_path?: string;
};
/** @ignore Convert SwiftlintOptions to the shape used by the Fastlane service
 */
function convertSwiftlintOptions(
  options: SwiftlintOptions
): convertedSwiftlintOptions {
  const temp: convertedSwiftlintOptions = {};
  if (typeof options.mode !== "undefined") temp["mode"] = options.mode;
  if (typeof options.path !== "undefined") temp["path"] = options.path;
  if (typeof options.outputFile !== "undefined")
    temp["output_file"] = options.outputFile;
  if (typeof options.configFile !== "undefined")
    temp["config_file"] = options.configFile;
  if (typeof options.strict !== "undefined") temp["strict"] = options.strict;
  if (typeof options.files !== "undefined") temp["files"] = options.files;
  if (typeof options.ignoreExitStatus !== "undefined")
    temp["ignore_exit_status"] = options.ignoreExitStatus;
  if (typeof options.raiseIfSwiftlintError !== "undefined")
    temp["raise_if_swiftlint_error"] = options.raiseIfSwiftlintError;
  if (typeof options.reporter !== "undefined")
    temp["reporter"] = options.reporter;
  if (typeof options.quiet !== "undefined") temp["quiet"] = options.quiet;
  if (typeof options.executable !== "undefined")
    temp["executable"] = options.executable;
  if (typeof options.format !== "undefined") temp["format"] = options.format;
  if (typeof options.noCache !== "undefined")
    temp["no_cache"] = options.noCache;
  if (typeof options.compilerLogPath !== "undefined")
    temp["compiler_log_path"] = options.compilerLogPath;
  return temp;
}

/** @ignore */
type convertedSyncCodeSigningOptions = {
  type: string;
  additional_cert_types?: string[];
  readonly: boolean;
  generate_apple_certs: boolean;
  skip_provisioning_profiles: boolean;
  app_identifier: string[];
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  team_id?: string;
  team_name?: string;
  storage_mode: string;
  git_url: string;
  git_branch: string;
  git_full_name?: string;
  git_user_email?: string;
  shallow_clone: boolean;
  clone_branch_directly: boolean;
  git_basic_authorization?: string;
  git_bearer_authorization?: string;
  git_private_key?: string;
  google_cloud_bucket_name?: string;
  google_cloud_keys_file?: string;
  google_cloud_project_id?: string;
  s3_region?: string;
  s3_access_key?: string;
  s3_secret_access_key?: string;
  s3_bucket?: string;
  s3_object_prefix?: string;
  keychain_name: string;
  keychain_password?: string;
  force: boolean;
  force_for_new_devices: boolean;
  include_all_certificates: boolean;
  force_for_new_certificates: boolean;
  skip_confirmation: boolean;
  safe_remove_certs: boolean;
  skip_docs: boolean;
  platform: string;
  derive_catalyst_app_identifier: boolean;
  template_name?: string;
  profile_name?: string;
  fail_on_name_taken?: boolean;
  skip_certificate_matching?: boolean;
  output_path?: string;
  skip_set_partition_list: boolean;
  verbose: boolean;
};
/** @ignore Convert SyncCodeSigningOptions to the shape used by the Fastlane service
 */
function convertSyncCodeSigningOptions(
  options: SyncCodeSigningOptions
): convertedSyncCodeSigningOptions {
  const temp: convertedSyncCodeSigningOptions = {
    type: options.type,
    readonly: options.readonly,
    generate_apple_certs: options.generateAppleCerts,
    skip_provisioning_profiles: options.skipProvisioningProfiles,
    app_identifier: options.appIdentifier,
    storage_mode: options.storageMode,
    git_url: options.gitUrl,
    git_branch: options.gitBranch,
    shallow_clone: options.shallowClone,
    clone_branch_directly: options.cloneBranchDirectly,
    keychain_name: options.keychainName,
    force: options.force,
    force_for_new_devices: options.forceForNewDevices,
    include_all_certificates: options.includeAllCertificates,
    force_for_new_certificates: options.forceForNewCertificates,
    skip_confirmation: options.skipConfirmation,
    safe_remove_certs: options.safeRemoveCerts,
    skip_docs: options.skipDocs,
    platform: options.platform,
    derive_catalyst_app_identifier: options.deriveCatalystAppIdentifier,
    skip_set_partition_list: options.skipSetPartitionList,
    verbose: options.verbose,
  };
  if (typeof options.additionalCertTypes !== "undefined")
    temp["additional_cert_types"] = options.additionalCertTypes;
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.gitFullName !== "undefined")
    temp["git_full_name"] = options.gitFullName;
  if (typeof options.gitUserEmail !== "undefined")
    temp["git_user_email"] = options.gitUserEmail;
  if (typeof options.gitBasicAuthorization !== "undefined")
    temp["git_basic_authorization"] = options.gitBasicAuthorization;
  if (typeof options.gitBearerAuthorization !== "undefined")
    temp["git_bearer_authorization"] = options.gitBearerAuthorization;
  if (typeof options.gitPrivateKey !== "undefined")
    temp["git_private_key"] = options.gitPrivateKey;
  if (typeof options.googleCloudBucketName !== "undefined")
    temp["google_cloud_bucket_name"] = options.googleCloudBucketName;
  if (typeof options.googleCloudKeysFile !== "undefined")
    temp["google_cloud_keys_file"] = options.googleCloudKeysFile;
  if (typeof options.googleCloudProjectId !== "undefined")
    temp["google_cloud_project_id"] = options.googleCloudProjectId;
  if (typeof options.s3Region !== "undefined")
    temp["s3_region"] = options.s3Region;
  if (typeof options.s3AccessKey !== "undefined")
    temp["s3_access_key"] = options.s3AccessKey;
  if (typeof options.s3SecretAccessKey !== "undefined")
    temp["s3_secret_access_key"] = options.s3SecretAccessKey;
  if (typeof options.s3Bucket !== "undefined")
    temp["s3_bucket"] = options.s3Bucket;
  if (typeof options.s3ObjectPrefix !== "undefined")
    temp["s3_object_prefix"] = options.s3ObjectPrefix;
  if (typeof options.keychainPassword !== "undefined")
    temp["keychain_password"] = options.keychainPassword;
  if (typeof options.templateName !== "undefined")
    temp["template_name"] = options.templateName;
  if (typeof options.profileName !== "undefined")
    temp["profile_name"] = options.profileName;
  if (typeof options.failOnNameTaken !== "undefined")
    temp["fail_on_name_taken"] = options.failOnNameTaken;
  if (typeof options.skipCertificateMatching !== "undefined")
    temp["skip_certificate_matching"] = options.skipCertificateMatching;
  if (typeof options.outputPath !== "undefined")
    temp["output_path"] = options.outputPath;
  return temp;
}

/** @ignore */
type convertedTeamIdOptions = {};
/** @ignore Convert TeamIdOptions to the shape used by the Fastlane service
 */
function convertTeamIdOptions(options: TeamIdOptions): convertedTeamIdOptions {
  const temp: convertedTeamIdOptions = {};

  return temp;
}

/** @ignore */
type convertedTeamNameOptions = {};
/** @ignore Convert TeamNameOptions to the shape used by the Fastlane service
 */
function convertTeamNameOptions(
  options: TeamNameOptions
): convertedTeamNameOptions {
  const temp: convertedTeamNameOptions = {};

  return temp;
}

/** @ignore */
type convertedTestfairyOptions = {
  api_key: string;
  ipa?: string;
  apk?: string;
  symbols_file?: string;
  upload_url?: string;
  testers_groups?: string[];
  metrics?: string[];
  comment?: string;
  auto_update?: string;
  notify?: string;
  options?: string[];
  custom?: string;
  timeout?: any;
};
/** @ignore Convert TestfairyOptions to the shape used by the Fastlane service
 */
function convertTestfairyOptions(
  options: TestfairyOptions
): convertedTestfairyOptions {
  const temp: convertedTestfairyOptions = {
    api_key: options.apiKey,
  };
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.apk !== "undefined") temp["apk"] = options.apk;
  if (typeof options.symbolsFile !== "undefined")
    temp["symbols_file"] = options.symbolsFile;
  if (typeof options.uploadUrl !== "undefined")
    temp["upload_url"] = options.uploadUrl;
  if (typeof options.testersGroups !== "undefined")
    temp["testers_groups"] = options.testersGroups;
  if (typeof options.metrics !== "undefined") temp["metrics"] = options.metrics;
  if (typeof options.comment !== "undefined") temp["comment"] = options.comment;
  if (typeof options.autoUpdate !== "undefined")
    temp["auto_update"] = options.autoUpdate;
  if (typeof options.notify !== "undefined") temp["notify"] = options.notify;
  if (typeof options.options !== "undefined") temp["options"] = options.options;
  if (typeof options.custom !== "undefined") temp["custom"] = options.custom;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedTestflightOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  app_identifier?: string;
  app_platform?: string;
  apple_id?: string;
  ipa?: string;
  pkg?: string;
  demo_account_required?: boolean;
  beta_app_review_info?: { string: string };
  localized_app_info?: { string: string };
  beta_app_description?: string;
  beta_app_feedback_email?: string;
  localized_build_info?: { string: string };
  changelog?: string;
  skip_submission: any;
  skip_waiting_for_build_processing: any;
  update_build_info_on_upload?: any;
  distribute_only: boolean;
  uses_non_exempt_encryption: boolean;
  distribute_external: any;
  notify_external_testers?: any;
  app_version?: string;
  build_number?: string;
  expire_previous_builds: any;
  first_name?: string;
  last_name?: string;
  email?: string;
  testers_file_path?: string;
  groups?: string[];
  team_id?: any;
  team_name?: string;
  dev_portal_team_id?: string;
  itc_provider?: string;
  wait_processing_interval: any;
  wait_processing_timeout_duration?: any;
  wait_for_uploaded_build?: any;
  reject_build_waiting_for_review: any;
  submit_beta_review: boolean;
};
/** @ignore Convert TestflightOptions to the shape used by the Fastlane service
 */
function convertTestflightOptions(
  options: TestflightOptions
): convertedTestflightOptions {
  const temp: convertedTestflightOptions = {
    skip_submission: options.skipSubmission,
    skip_waiting_for_build_processing: options.skipWaitingForBuildProcessing,
    distribute_only: options.distributeOnly,
    uses_non_exempt_encryption: options.usesNonExemptEncryption,
    distribute_external: options.distributeExternal,
    expire_previous_builds: options.expirePreviousBuilds,
    wait_processing_interval: options.waitProcessingInterval,
    reject_build_waiting_for_review: options.rejectBuildWaitingForReview,
    submit_beta_review: options.submitBetaReview,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.appPlatform !== "undefined")
    temp["app_platform"] = options.appPlatform;
  if (typeof options.appleId !== "undefined")
    temp["apple_id"] = options.appleId;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.pkg !== "undefined") temp["pkg"] = options.pkg;
  if (typeof options.demoAccountRequired !== "undefined")
    temp["demo_account_required"] = options.demoAccountRequired;
  if (typeof options.betaAppReviewInfo !== "undefined")
    temp["beta_app_review_info"] = options.betaAppReviewInfo;
  if (typeof options.localizedAppInfo !== "undefined")
    temp["localized_app_info"] = options.localizedAppInfo;
  if (typeof options.betaAppDescription !== "undefined")
    temp["beta_app_description"] = options.betaAppDescription;
  if (typeof options.betaAppFeedbackEmail !== "undefined")
    temp["beta_app_feedback_email"] = options.betaAppFeedbackEmail;
  if (typeof options.localizedBuildInfo !== "undefined")
    temp["localized_build_info"] = options.localizedBuildInfo;
  if (typeof options.changelog !== "undefined")
    temp["changelog"] = options.changelog;
  if (typeof options.updateBuildInfoOnUpload !== "undefined")
    temp["update_build_info_on_upload"] = options.updateBuildInfoOnUpload;
  if (typeof options.notifyExternalTesters !== "undefined")
    temp["notify_external_testers"] = options.notifyExternalTesters;
  if (typeof options.appVersion !== "undefined")
    temp["app_version"] = options.appVersion;
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.firstName !== "undefined")
    temp["first_name"] = options.firstName;
  if (typeof options.lastName !== "undefined")
    temp["last_name"] = options.lastName;
  if (typeof options.email !== "undefined") temp["email"] = options.email;
  if (typeof options.testersFilePath !== "undefined")
    temp["testers_file_path"] = options.testersFilePath;
  if (typeof options.groups !== "undefined") temp["groups"] = options.groups;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.devPortalTeamId !== "undefined")
    temp["dev_portal_team_id"] = options.devPortalTeamId;
  if (typeof options.itcProvider !== "undefined")
    temp["itc_provider"] = options.itcProvider;
  if (typeof options.waitProcessingTimeoutDuration !== "undefined")
    temp["wait_processing_timeout_duration"] =
      options.waitProcessingTimeoutDuration;
  if (typeof options.waitForUploadedBuild !== "undefined")
    temp["wait_for_uploaded_build"] = options.waitForUploadedBuild;
  return temp;
}

/** @ignore */
type convertedTrainerOptions = {
  path: string;
  extension: string;
  output_directory?: string;
  output_filename?: string;
  fail_build: any;
  xcpretty_naming: any;
  silent: any;
  output_remove_retry_attempts: any;
};
/** @ignore Convert TrainerOptions to the shape used by the Fastlane service
 */
function convertTrainerOptions(
  options: TrainerOptions
): convertedTrainerOptions {
  const temp: convertedTrainerOptions = {
    path: options.path,
    extension: options.extension,
    fail_build: options.failBuild,
    xcpretty_naming: options.xcprettyNaming,
    silent: options.silent,
    output_remove_retry_attempts: options.outputRemoveRetryAttempts,
  };
  if (typeof options.outputDirectory !== "undefined")
    temp["output_directory"] = options.outputDirectory;
  if (typeof options.outputFilename !== "undefined")
    temp["output_filename"] = options.outputFilename;
  return temp;
}

/** @ignore */
type convertedTryoutsOptions = {
  app_id: string;
  api_token: string;
  build_file: string;
  notes?: string;
  notes_path?: string;
  notify: any;
  status: any;
};
/** @ignore Convert TryoutsOptions to the shape used by the Fastlane service
 */
function convertTryoutsOptions(
  options: TryoutsOptions
): convertedTryoutsOptions {
  const temp: convertedTryoutsOptions = {
    app_id: options.appId,
    api_token: options.apiToken,
    build_file: options.buildFile,
    notify: options.notify,
    status: options.status,
  };
  if (typeof options.notes !== "undefined") temp["notes"] = options.notes;
  if (typeof options.notesPath !== "undefined")
    temp["notes_path"] = options.notesPath;
  return temp;
}

/** @ignore */
type convertedTwitterOptions = {
  consumer_key: string;
  consumer_secret: string;
  access_token: string;
  access_token_secret: string;
  message: string;
};
/** @ignore Convert TwitterOptions to the shape used by the Fastlane service
 */
function convertTwitterOptions(
  options: TwitterOptions
): convertedTwitterOptions {
  const temp: convertedTwitterOptions = {
    consumer_key: options.consumerKey,
    consumer_secret: options.consumerSecret,
    access_token: options.accessToken,
    access_token_secret: options.accessTokenSecret,
    message: options.message,
  };

  return temp;
}

/** @ignore */
type convertedTypetalkOptions = {};
/** @ignore Convert TypetalkOptions to the shape used by the Fastlane service
 */
function convertTypetalkOptions(
  options: TypetalkOptions
): convertedTypetalkOptions {
  const temp: convertedTypetalkOptions = {};

  return temp;
}

/** @ignore */
type convertedUnlockKeychainOptions = {
  path: string;
  password: string;
  add_to_search_list: string;
  set_default: boolean;
};
/** @ignore Convert UnlockKeychainOptions to the shape used by the Fastlane service
 */
function convertUnlockKeychainOptions(
  options: UnlockKeychainOptions
): convertedUnlockKeychainOptions {
  const temp: convertedUnlockKeychainOptions = {
    path: options.path,
    password: options.password,
    add_to_search_list: options.addToSearchList,
    set_default: options.setDefault,
  };

  return temp;
}

/** @ignore */
type convertedUpdateAppGroupIdentifiersOptions = {
  entitlements_file: string;
  app_group_identifiers: string[];
};
/** @ignore Convert UpdateAppGroupIdentifiersOptions to the shape used by the Fastlane service
 */
function convertUpdateAppGroupIdentifiersOptions(
  options: UpdateAppGroupIdentifiersOptions
): convertedUpdateAppGroupIdentifiersOptions {
  const temp: convertedUpdateAppGroupIdentifiersOptions = {
    entitlements_file: options.entitlementsFile,
    app_group_identifiers: options.appGroupIdentifiers,
  };

  return temp;
}

/** @ignore */
type convertedUpdateAppIdentifierOptions = {
  xcodeproj: string;
  plist_path: string;
  app_identifier: string;
};
/** @ignore Convert UpdateAppIdentifierOptions to the shape used by the Fastlane service
 */
function convertUpdateAppIdentifierOptions(
  options: UpdateAppIdentifierOptions
): convertedUpdateAppIdentifierOptions {
  const temp: convertedUpdateAppIdentifierOptions = {
    xcodeproj: options.xcodeproj,
    plist_path: options.plistPath,
    app_identifier: options.appIdentifier,
  };

  return temp;
}

/** @ignore */
type convertedUpdateCodeSigningSettingsOptions = {
  path: string;
  use_automatic_signing: boolean;
  team_id?: string;
  targets?: string[];
  build_configurations?: string[];
  code_sign_identity?: string;
  entitlements_file_path?: string;
  profile_name?: string;
  profile_uuid?: string;
  bundle_identifier?: string;
};
/** @ignore Convert UpdateCodeSigningSettingsOptions to the shape used by the Fastlane service
 */
function convertUpdateCodeSigningSettingsOptions(
  options: UpdateCodeSigningSettingsOptions
): convertedUpdateCodeSigningSettingsOptions {
  const temp: convertedUpdateCodeSigningSettingsOptions = {
    path: options.path,
    use_automatic_signing: options.useAutomaticSigning,
  };
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.targets !== "undefined") temp["targets"] = options.targets;
  if (typeof options.buildConfigurations !== "undefined")
    temp["build_configurations"] = options.buildConfigurations;
  if (typeof options.codeSignIdentity !== "undefined")
    temp["code_sign_identity"] = options.codeSignIdentity;
  if (typeof options.entitlementsFilePath !== "undefined")
    temp["entitlements_file_path"] = options.entitlementsFilePath;
  if (typeof options.profileName !== "undefined")
    temp["profile_name"] = options.profileName;
  if (typeof options.profileUuid !== "undefined")
    temp["profile_uuid"] = options.profileUuid;
  if (typeof options.bundleIdentifier !== "undefined")
    temp["bundle_identifier"] = options.bundleIdentifier;
  return temp;
}

/** @ignore */
type convertedUpdateFastlaneOptions = {
  no_update: boolean;
  nightly?: boolean;
};
/** @ignore Convert UpdateFastlaneOptions to the shape used by the Fastlane service
 */
function convertUpdateFastlaneOptions(
  options: UpdateFastlaneOptions
): convertedUpdateFastlaneOptions {
  const temp: convertedUpdateFastlaneOptions = {
    no_update: options.noUpdate,
  };
  if (typeof options.nightly !== "undefined") temp["nightly"] = options.nightly;
  return temp;
}

/** @ignore */
type convertedUpdateIcloudContainerIdentifiersOptions = {
  entitlements_file: string;
  icloud_container_identifiers: string[];
};
/** @ignore Convert UpdateIcloudContainerIdentifiersOptions to the shape used by the Fastlane service
 */
function convertUpdateIcloudContainerIdentifiersOptions(
  options: UpdateIcloudContainerIdentifiersOptions
): convertedUpdateIcloudContainerIdentifiersOptions {
  const temp: convertedUpdateIcloudContainerIdentifiersOptions = {
    entitlements_file: options.entitlementsFile,
    icloud_container_identifiers: options.icloudContainerIdentifiers,
  };

  return temp;
}

/** @ignore */
type convertedUpdateInfoPlistOptions = {
  xcodeproj?: string;
  plist_path?: string;
  scheme?: string;
  app_identifier?: string;
  display_name?: string;
  block?: any;
};
/** @ignore Convert UpdateInfoPlistOptions to the shape used by the Fastlane service
 */
function convertUpdateInfoPlistOptions(
  options: UpdateInfoPlistOptions
): convertedUpdateInfoPlistOptions {
  const temp: convertedUpdateInfoPlistOptions = {};
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  if (typeof options.plistPath !== "undefined")
    temp["plist_path"] = options.plistPath;
  if (typeof options.scheme !== "undefined") temp["scheme"] = options.scheme;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.displayName !== "undefined")
    temp["display_name"] = options.displayName;
  if (typeof options.block !== "undefined") temp["block"] = options.block;
  return temp;
}

/** @ignore */
type convertedUpdateKeychainAccessGroupsOptions = {
  entitlements_file: string;
  identifiers: string[];
};
/** @ignore Convert UpdateKeychainAccessGroupsOptions to the shape used by the Fastlane service
 */
function convertUpdateKeychainAccessGroupsOptions(
  options: UpdateKeychainAccessGroupsOptions
): convertedUpdateKeychainAccessGroupsOptions {
  const temp: convertedUpdateKeychainAccessGroupsOptions = {
    entitlements_file: options.entitlementsFile,
    identifiers: options.identifiers,
  };

  return temp;
}

/** @ignore */
type convertedUpdatePlistOptions = {
  plist_path?: string;
  block: any;
};
/** @ignore Convert UpdatePlistOptions to the shape used by the Fastlane service
 */
function convertUpdatePlistOptions(
  options: UpdatePlistOptions
): convertedUpdatePlistOptions {
  const temp: convertedUpdatePlistOptions = {
    block: options.block,
  };
  if (typeof options.plistPath !== "undefined")
    temp["plist_path"] = options.plistPath;
  return temp;
}

/** @ignore */
type convertedUpdateProjectCodeSigningOptions = {
  path: string;
  udid?: string;
  uuid: string;
};
/** @ignore Convert UpdateProjectCodeSigningOptions to the shape used by the Fastlane service
 */
function convertUpdateProjectCodeSigningOptions(
  options: UpdateProjectCodeSigningOptions
): convertedUpdateProjectCodeSigningOptions {
  const temp: convertedUpdateProjectCodeSigningOptions = {
    path: options.path,
    uuid: options.uuid,
  };
  if (typeof options.udid !== "undefined") temp["udid"] = options.udid;
  return temp;
}

/** @ignore */
type convertedUpdateProjectProvisioningOptions = {
  xcodeproj?: string;
  profile: string;
  target_filter?: string;
  build_configuration_filter?: string;
  build_configuration?: string;
  certificate: string;
  code_signing_identity?: string;
};
/** @ignore Convert UpdateProjectProvisioningOptions to the shape used by the Fastlane service
 */
function convertUpdateProjectProvisioningOptions(
  options: UpdateProjectProvisioningOptions
): convertedUpdateProjectProvisioningOptions {
  const temp: convertedUpdateProjectProvisioningOptions = {
    profile: options.profile,
    certificate: options.certificate,
  };
  if (typeof options.xcodeproj !== "undefined")
    temp["xcodeproj"] = options.xcodeproj;
  if (typeof options.targetFilter !== "undefined")
    temp["target_filter"] = options.targetFilter;
  if (typeof options.buildConfigurationFilter !== "undefined")
    temp["build_configuration_filter"] = options.buildConfigurationFilter;
  if (typeof options.buildConfiguration !== "undefined")
    temp["build_configuration"] = options.buildConfiguration;
  if (typeof options.codeSigningIdentity !== "undefined")
    temp["code_signing_identity"] = options.codeSigningIdentity;
  return temp;
}

/** @ignore */
type convertedUpdateProjectTeamOptions = {
  path: string;
  targets?: string[];
  teamid: string;
};
/** @ignore Convert UpdateProjectTeamOptions to the shape used by the Fastlane service
 */
function convertUpdateProjectTeamOptions(
  options: UpdateProjectTeamOptions
): convertedUpdateProjectTeamOptions {
  const temp: convertedUpdateProjectTeamOptions = {
    path: options.path,
    teamid: options.teamid,
  };
  if (typeof options.targets !== "undefined") temp["targets"] = options.targets;
  return temp;
}

/** @ignore */
type convertedUpdateUrbanAirshipConfigurationOptions = {
  plist_path: string;
  development_app_key?: string;
  development_app_secret?: string;
  production_app_key?: string;
  production_app_secret?: string;
  detect_provisioning_mode?: boolean;
};
/** @ignore Convert UpdateUrbanAirshipConfigurationOptions to the shape used by the Fastlane service
 */
function convertUpdateUrbanAirshipConfigurationOptions(
  options: UpdateUrbanAirshipConfigurationOptions
): convertedUpdateUrbanAirshipConfigurationOptions {
  const temp: convertedUpdateUrbanAirshipConfigurationOptions = {
    plist_path: options.plistPath,
  };
  if (typeof options.developmentAppKey !== "undefined")
    temp["development_app_key"] = options.developmentAppKey;
  if (typeof options.developmentAppSecret !== "undefined")
    temp["development_app_secret"] = options.developmentAppSecret;
  if (typeof options.productionAppKey !== "undefined")
    temp["production_app_key"] = options.productionAppKey;
  if (typeof options.productionAppSecret !== "undefined")
    temp["production_app_secret"] = options.productionAppSecret;
  if (typeof options.detectProvisioningMode !== "undefined")
    temp["detect_provisioning_mode"] = options.detectProvisioningMode;
  return temp;
}

/** @ignore */
type convertedUpdateUrlSchemesOptions = {
  path: string;
  url_schemes?: string[];
  update_url_schemes?: any;
};
/** @ignore Convert UpdateUrlSchemesOptions to the shape used by the Fastlane service
 */
function convertUpdateUrlSchemesOptions(
  options: UpdateUrlSchemesOptions
): convertedUpdateUrlSchemesOptions {
  const temp: convertedUpdateUrlSchemesOptions = {
    path: options.path,
  };
  if (typeof options.urlSchemes !== "undefined")
    temp["url_schemes"] = options.urlSchemes;
  if (typeof options.updateUrlSchemes !== "undefined")
    temp["update_url_schemes"] = options.updateUrlSchemes;
  return temp;
}

/** @ignore */
type convertedUploadAppPrivacyDetailsToAppStoreOptions = {
  username: string;
  app_identifier: string;
  team_id?: string;
  team_name?: string;
  json_path?: string;
  output_json_path: string;
  skip_json_file_saving: boolean;
  skip_upload: boolean;
  skip_publish: boolean;
};
/** @ignore Convert UploadAppPrivacyDetailsToAppStoreOptions to the shape used by the Fastlane service
 */
function convertUploadAppPrivacyDetailsToAppStoreOptions(
  options: UploadAppPrivacyDetailsToAppStoreOptions
): convertedUploadAppPrivacyDetailsToAppStoreOptions {
  const temp: convertedUploadAppPrivacyDetailsToAppStoreOptions = {
    username: options.username,
    app_identifier: options.appIdentifier,
    output_json_path: options.outputJsonPath,
    skip_json_file_saving: options.skipJsonFileSaving,
    skip_upload: options.skipUpload,
    skip_publish: options.skipPublish,
  };
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.jsonPath !== "undefined")
    temp["json_path"] = options.jsonPath;
  return temp;
}

/** @ignore */
type convertedUploadSymbolsToCrashlyticsOptions = {
  dsym_path?: string;
  dsym_paths?: string[];
  api_token?: string;
  gsp_path?: string;
  app_id?: string;
  binary_path?: string;
  platform: string;
  dsym_worker_threads?: any;
  debug: boolean;
};
/** @ignore Convert UploadSymbolsToCrashlyticsOptions to the shape used by the Fastlane service
 */
function convertUploadSymbolsToCrashlyticsOptions(
  options: UploadSymbolsToCrashlyticsOptions
): convertedUploadSymbolsToCrashlyticsOptions {
  const temp: convertedUploadSymbolsToCrashlyticsOptions = {
    platform: options.platform,
    debug: options.debug,
  };
  if (typeof options.dsymPath !== "undefined")
    temp["dsym_path"] = options.dsymPath;
  if (typeof options.dsymPaths !== "undefined")
    temp["dsym_paths"] = options.dsymPaths;
  if (typeof options.apiToken !== "undefined")
    temp["api_token"] = options.apiToken;
  if (typeof options.gspPath !== "undefined")
    temp["gsp_path"] = options.gspPath;
  if (typeof options.appId !== "undefined") temp["app_id"] = options.appId;
  if (typeof options.binaryPath !== "undefined")
    temp["binary_path"] = options.binaryPath;
  if (typeof options.dsymWorkerThreads !== "undefined")
    temp["dsym_worker_threads"] = options.dsymWorkerThreads;
  return temp;
}

/** @ignore */
type convertedUploadSymbolsToSentryOptions = {
  api_host?: string;
  api_key?: string;
  auth_token?: string;
  org_slug: string;
  project_slug: string;
  dsym_path?: string;
  dsym_paths?: string[];
};
/** @ignore Convert UploadSymbolsToSentryOptions to the shape used by the Fastlane service
 */
function convertUploadSymbolsToSentryOptions(
  options: UploadSymbolsToSentryOptions
): convertedUploadSymbolsToSentryOptions {
  const temp: convertedUploadSymbolsToSentryOptions = {
    org_slug: options.orgSlug,
    project_slug: options.projectSlug,
  };
  if (typeof options.apiHost !== "undefined")
    temp["api_host"] = options.apiHost;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.authToken !== "undefined")
    temp["auth_token"] = options.authToken;
  if (typeof options.dsymPath !== "undefined")
    temp["dsym_path"] = options.dsymPath;
  if (typeof options.dsymPaths !== "undefined")
    temp["dsym_paths"] = options.dsymPaths;
  return temp;
}

/** @ignore */
type convertedUploadToAppStoreOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  app_identifier?: string;
  app_version?: string;
  ipa?: string;
  pkg?: string;
  build_number?: string;
  platform?: string;
  edit_live?: boolean;
  use_live_version: boolean;
  metadata_path?: string;
  screenshots_path?: string;
  skip_binary_upload: boolean;
  skip_screenshots: boolean;
  skip_metadata: boolean;
  skip_app_version_update: boolean;
  force: boolean;
  overwrite_screenshots: boolean;
  sync_screenshots: boolean;
  submit_for_review: boolean;
  reject_if_possible: boolean;
  automatic_release?: boolean;
  auto_release_date?: any;
  phased_release?: boolean;
  reset_ratings?: boolean;
  price_tier?: any;
  app_rating_config_path?: string;
  submission_information?: { string: string };
  team_id?: string;
  team_name?: string;
  dev_portal_team_id?: string;
  dev_portal_team_name?: string;
  itc_provider?: string;
  run_precheck_before_submit: boolean;
  precheck_default_rule_level: any;
  individual_metadata_items?: string[];
  app_icon?: string;
  apple_watch_app_icon?: string;
  copyright?: string;
  primary_category?: string;
  secondary_category?: string;
  primary_first_sub_category?: string;
  primary_second_sub_category?: string;
  secondary_first_sub_category?: string;
  secondary_second_sub_category?: string;
  trade_representative_contact_information?: { string: string };
  app_review_information?: { string: string };
  app_review_attachment_file?: string;
  description?: { string: string };
  name?: { string: string };
  subtitle?: { string: string };
  keywords?: { string: string };
  promotional_text?: { string: string };
  release_notes?: { string: string };
  privacy_url?: { string: string };
  apple_tv_privacy_policy?: { string: string };
  support_url?: { string: string };
  marketing_url?: { string: string };
  languages?: string[];
  ignore_language_directory_validation: boolean;
  precheck_include_in_app_purchases?: boolean;
  app?: any;
};
/** @ignore Convert UploadToAppStoreOptions to the shape used by the Fastlane service
 */
function convertUploadToAppStoreOptions(
  options: UploadToAppStoreOptions
): convertedUploadToAppStoreOptions {
  const temp: convertedUploadToAppStoreOptions = {
    use_live_version: options.useLiveVersion,
    skip_binary_upload: options.skipBinaryUpload,
    skip_screenshots: options.skipScreenshots,
    skip_metadata: options.skipMetadata,
    skip_app_version_update: options.skipAppVersionUpdate,
    force: options.force,
    overwrite_screenshots: options.overwriteScreenshots,
    sync_screenshots: options.syncScreenshots,
    submit_for_review: options.submitForReview,
    reject_if_possible: options.rejectIfPossible,
    run_precheck_before_submit: options.runPrecheckBeforeSubmit,
    precheck_default_rule_level: options.precheckDefaultRuleLevel,
    ignore_language_directory_validation:
      options.ignoreLanguageDirectoryValidation,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.appVersion !== "undefined")
    temp["app_version"] = options.appVersion;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.pkg !== "undefined") temp["pkg"] = options.pkg;
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.platform !== "undefined")
    temp["platform"] = options.platform;
  if (typeof options.editLive !== "undefined")
    temp["edit_live"] = options.editLive;
  if (typeof options.metadataPath !== "undefined")
    temp["metadata_path"] = options.metadataPath;
  if (typeof options.screenshotsPath !== "undefined")
    temp["screenshots_path"] = options.screenshotsPath;
  if (typeof options.automaticRelease !== "undefined")
    temp["automatic_release"] = options.automaticRelease;
  if (typeof options.autoReleaseDate !== "undefined")
    temp["auto_release_date"] = options.autoReleaseDate;
  if (typeof options.phasedRelease !== "undefined")
    temp["phased_release"] = options.phasedRelease;
  if (typeof options.resetRatings !== "undefined")
    temp["reset_ratings"] = options.resetRatings;
  if (typeof options.priceTier !== "undefined")
    temp["price_tier"] = options.priceTier;
  if (typeof options.appRatingConfigPath !== "undefined")
    temp["app_rating_config_path"] = options.appRatingConfigPath;
  if (typeof options.submissionInformation !== "undefined")
    temp["submission_information"] = options.submissionInformation;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.devPortalTeamId !== "undefined")
    temp["dev_portal_team_id"] = options.devPortalTeamId;
  if (typeof options.devPortalTeamName !== "undefined")
    temp["dev_portal_team_name"] = options.devPortalTeamName;
  if (typeof options.itcProvider !== "undefined")
    temp["itc_provider"] = options.itcProvider;
  if (typeof options.individualMetadataItems !== "undefined")
    temp["individual_metadata_items"] = options.individualMetadataItems;
  if (typeof options.appIcon !== "undefined")
    temp["app_icon"] = options.appIcon;
  if (typeof options.appleWatchAppIcon !== "undefined")
    temp["apple_watch_app_icon"] = options.appleWatchAppIcon;
  if (typeof options.copyright !== "undefined")
    temp["copyright"] = options.copyright;
  if (typeof options.primaryCategory !== "undefined")
    temp["primary_category"] = options.primaryCategory;
  if (typeof options.secondaryCategory !== "undefined")
    temp["secondary_category"] = options.secondaryCategory;
  if (typeof options.primaryFirstSubCategory !== "undefined")
    temp["primary_first_sub_category"] = options.primaryFirstSubCategory;
  if (typeof options.primarySecondSubCategory !== "undefined")
    temp["primary_second_sub_category"] = options.primarySecondSubCategory;
  if (typeof options.secondaryFirstSubCategory !== "undefined")
    temp["secondary_first_sub_category"] = options.secondaryFirstSubCategory;
  if (typeof options.secondarySecondSubCategory !== "undefined")
    temp["secondary_second_sub_category"] = options.secondarySecondSubCategory;
  if (typeof options.tradeRepresentativeContactInformation !== "undefined")
    temp["trade_representative_contact_information"] =
      options.tradeRepresentativeContactInformation;
  if (typeof options.appReviewInformation !== "undefined")
    temp["app_review_information"] = options.appReviewInformation;
  if (typeof options.appReviewAttachmentFile !== "undefined")
    temp["app_review_attachment_file"] = options.appReviewAttachmentFile;
  if (typeof options.description !== "undefined")
    temp["description"] = options.description;
  if (typeof options.name !== "undefined") temp["name"] = options.name;
  if (typeof options.subtitle !== "undefined")
    temp["subtitle"] = options.subtitle;
  if (typeof options.keywords !== "undefined")
    temp["keywords"] = options.keywords;
  if (typeof options.promotionalText !== "undefined")
    temp["promotional_text"] = options.promotionalText;
  if (typeof options.releaseNotes !== "undefined")
    temp["release_notes"] = options.releaseNotes;
  if (typeof options.privacyUrl !== "undefined")
    temp["privacy_url"] = options.privacyUrl;
  if (typeof options.appleTvPrivacyPolicy !== "undefined")
    temp["apple_tv_privacy_policy"] = options.appleTvPrivacyPolicy;
  if (typeof options.supportUrl !== "undefined")
    temp["support_url"] = options.supportUrl;
  if (typeof options.marketingUrl !== "undefined")
    temp["marketing_url"] = options.marketingUrl;
  if (typeof options.languages !== "undefined")
    temp["languages"] = options.languages;
  if (typeof options.precheckIncludeInAppPurchases !== "undefined")
    temp["precheck_include_in_app_purchases"] =
      options.precheckIncludeInAppPurchases;
  if (typeof options.app !== "undefined") temp["app"] = options.app;
  return temp;
}

/** @ignore */
type convertedUploadToPlayStoreOptions = {
  package_name: string;
  version_name?: string;
  version_code?: any;
  release_status?: string;
  track: string;
  rollout?: string;
  metadata_path?: string;
  key?: string;
  issuer?: string;
  json_key?: string;
  json_key_data?: string;
  apk?: string;
  apk_paths?: string[];
  aab?: string;
  aab_paths?: string[];
  skip_upload_apk?: boolean;
  skip_upload_aab?: boolean;
  skip_upload_metadata?: boolean;
  skip_upload_changelogs?: boolean;
  skip_upload_images?: boolean;
  skip_upload_screenshots?: boolean;
  track_promote_to?: string;
  track_promote_release_status?: string;
  validate_only?: boolean;
  mapping?: string;
  mapping_paths?: string[];
  root_url?: string;
  check_superseded_tracks?: boolean;
  timeout?: any;
  deactivate_on_promote?: boolean;
  version_codes_to_retain?: string[];
  changes_not_sent_for_review: boolean;
  rescue_changes_not_sent_for_review: boolean;
  in_app_update_priority?: any;
  obb_main_references_version?: any;
  obb_main_file_size?: any;
  obb_patch_references_version?: any;
  obb_patch_file_size?: any;
  ack_bundle_installation_warning?: boolean;
};
/** @ignore Convert UploadToPlayStoreOptions to the shape used by the Fastlane service
 */
function convertUploadToPlayStoreOptions(
  options: UploadToPlayStoreOptions
): convertedUploadToPlayStoreOptions {
  const temp: convertedUploadToPlayStoreOptions = {
    package_name: options.packageName,
    track: options.track,
    changes_not_sent_for_review: options.changesNotSentForReview,
    rescue_changes_not_sent_for_review: options.rescueChangesNotSentForReview,
  };
  if (typeof options.versionName !== "undefined")
    temp["version_name"] = options.versionName;
  if (typeof options.versionCode !== "undefined")
    temp["version_code"] = options.versionCode;
  if (typeof options.releaseStatus !== "undefined")
    temp["release_status"] = options.releaseStatus;
  if (typeof options.rollout !== "undefined") temp["rollout"] = options.rollout;
  if (typeof options.metadataPath !== "undefined")
    temp["metadata_path"] = options.metadataPath;
  if (typeof options.key !== "undefined") temp["key"] = options.key;
  if (typeof options.issuer !== "undefined") temp["issuer"] = options.issuer;
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  if (typeof options.apk !== "undefined") temp["apk"] = options.apk;
  if (typeof options.apkPaths !== "undefined")
    temp["apk_paths"] = options.apkPaths;
  if (typeof options.aab !== "undefined") temp["aab"] = options.aab;
  if (typeof options.aabPaths !== "undefined")
    temp["aab_paths"] = options.aabPaths;
  if (typeof options.skipUploadApk !== "undefined")
    temp["skip_upload_apk"] = options.skipUploadApk;
  if (typeof options.skipUploadAab !== "undefined")
    temp["skip_upload_aab"] = options.skipUploadAab;
  if (typeof options.skipUploadMetadata !== "undefined")
    temp["skip_upload_metadata"] = options.skipUploadMetadata;
  if (typeof options.skipUploadChangelogs !== "undefined")
    temp["skip_upload_changelogs"] = options.skipUploadChangelogs;
  if (typeof options.skipUploadImages !== "undefined")
    temp["skip_upload_images"] = options.skipUploadImages;
  if (typeof options.skipUploadScreenshots !== "undefined")
    temp["skip_upload_screenshots"] = options.skipUploadScreenshots;
  if (typeof options.trackPromoteTo !== "undefined")
    temp["track_promote_to"] = options.trackPromoteTo;
  if (typeof options.trackPromoteReleaseStatus !== "undefined")
    temp["track_promote_release_status"] = options.trackPromoteReleaseStatus;
  if (typeof options.validateOnly !== "undefined")
    temp["validate_only"] = options.validateOnly;
  if (typeof options.mapping !== "undefined") temp["mapping"] = options.mapping;
  if (typeof options.mappingPaths !== "undefined")
    temp["mapping_paths"] = options.mappingPaths;
  if (typeof options.rootUrl !== "undefined")
    temp["root_url"] = options.rootUrl;
  if (typeof options.checkSupersededTracks !== "undefined")
    temp["check_superseded_tracks"] = options.checkSupersededTracks;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  if (typeof options.deactivateOnPromote !== "undefined")
    temp["deactivate_on_promote"] = options.deactivateOnPromote;
  if (typeof options.versionCodesToRetain !== "undefined")
    temp["version_codes_to_retain"] = options.versionCodesToRetain;
  if (typeof options.inAppUpdatePriority !== "undefined")
    temp["in_app_update_priority"] = options.inAppUpdatePriority;
  if (typeof options.obbMainReferencesVersion !== "undefined")
    temp["obb_main_references_version"] = options.obbMainReferencesVersion;
  if (typeof options.obbMainFileSize !== "undefined")
    temp["obb_main_file_size"] = options.obbMainFileSize;
  if (typeof options.obbPatchReferencesVersion !== "undefined")
    temp["obb_patch_references_version"] = options.obbPatchReferencesVersion;
  if (typeof options.obbPatchFileSize !== "undefined")
    temp["obb_patch_file_size"] = options.obbPatchFileSize;
  if (typeof options.ackBundleInstallationWarning !== "undefined")
    temp["ack_bundle_installation_warning"] =
      options.ackBundleInstallationWarning;
  return temp;
}

/** @ignore */
type convertedUploadToPlayStoreInternalAppSharingOptions = {
  package_name: string;
  json_key?: string;
  json_key_data?: string;
  apk?: string;
  apk_paths?: string[];
  aab?: string;
  aab_paths?: string[];
  root_url?: string;
  timeout?: any;
};
/** @ignore Convert UploadToPlayStoreInternalAppSharingOptions to the shape used by the Fastlane service
 */
function convertUploadToPlayStoreInternalAppSharingOptions(
  options: UploadToPlayStoreInternalAppSharingOptions
): convertedUploadToPlayStoreInternalAppSharingOptions {
  const temp: convertedUploadToPlayStoreInternalAppSharingOptions = {
    package_name: options.packageName,
  };
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  if (typeof options.apk !== "undefined") temp["apk"] = options.apk;
  if (typeof options.apkPaths !== "undefined")
    temp["apk_paths"] = options.apkPaths;
  if (typeof options.aab !== "undefined") temp["aab"] = options.aab;
  if (typeof options.aabPaths !== "undefined")
    temp["aab_paths"] = options.aabPaths;
  if (typeof options.rootUrl !== "undefined")
    temp["root_url"] = options.rootUrl;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedUploadToTestflightOptions = {
  api_key_path?: string;
  api_key?: { string: string };
  username?: string;
  app_identifier?: string;
  app_platform?: string;
  apple_id?: string;
  ipa?: string;
  pkg?: string;
  demo_account_required?: boolean;
  beta_app_review_info?: { string: string };
  localized_app_info?: { string: string };
  beta_app_description?: string;
  beta_app_feedback_email?: string;
  localized_build_info?: { string: string };
  changelog?: string;
  skip_submission: any;
  skip_waiting_for_build_processing: any;
  update_build_info_on_upload?: any;
  distribute_only: boolean;
  uses_non_exempt_encryption: boolean;
  distribute_external: any;
  notify_external_testers?: any;
  app_version?: string;
  build_number?: string;
  expire_previous_builds: any;
  first_name?: string;
  last_name?: string;
  email?: string;
  testers_file_path?: string;
  groups?: string[];
  team_id?: any;
  team_name?: string;
  dev_portal_team_id?: string;
  itc_provider?: string;
  wait_processing_interval: any;
  wait_processing_timeout_duration?: any;
  wait_for_uploaded_build?: any;
  reject_build_waiting_for_review: any;
  submit_beta_review: boolean;
};
/** @ignore Convert UploadToTestflightOptions to the shape used by the Fastlane service
 */
function convertUploadToTestflightOptions(
  options: UploadToTestflightOptions
): convertedUploadToTestflightOptions {
  const temp: convertedUploadToTestflightOptions = {
    skip_submission: options.skipSubmission,
    skip_waiting_for_build_processing: options.skipWaitingForBuildProcessing,
    distribute_only: options.distributeOnly,
    uses_non_exempt_encryption: options.usesNonExemptEncryption,
    distribute_external: options.distributeExternal,
    expire_previous_builds: options.expirePreviousBuilds,
    wait_processing_interval: options.waitProcessingInterval,
    reject_build_waiting_for_review: options.rejectBuildWaitingForReview,
    submit_beta_review: options.submitBetaReview,
  };
  if (typeof options.apiKeyPath !== "undefined")
    temp["api_key_path"] = options.apiKeyPath;
  if (typeof options.apiKey !== "undefined") temp["api_key"] = options.apiKey;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.appIdentifier !== "undefined")
    temp["app_identifier"] = options.appIdentifier;
  if (typeof options.appPlatform !== "undefined")
    temp["app_platform"] = options.appPlatform;
  if (typeof options.appleId !== "undefined")
    temp["apple_id"] = options.appleId;
  if (typeof options.ipa !== "undefined") temp["ipa"] = options.ipa;
  if (typeof options.pkg !== "undefined") temp["pkg"] = options.pkg;
  if (typeof options.demoAccountRequired !== "undefined")
    temp["demo_account_required"] = options.demoAccountRequired;
  if (typeof options.betaAppReviewInfo !== "undefined")
    temp["beta_app_review_info"] = options.betaAppReviewInfo;
  if (typeof options.localizedAppInfo !== "undefined")
    temp["localized_app_info"] = options.localizedAppInfo;
  if (typeof options.betaAppDescription !== "undefined")
    temp["beta_app_description"] = options.betaAppDescription;
  if (typeof options.betaAppFeedbackEmail !== "undefined")
    temp["beta_app_feedback_email"] = options.betaAppFeedbackEmail;
  if (typeof options.localizedBuildInfo !== "undefined")
    temp["localized_build_info"] = options.localizedBuildInfo;
  if (typeof options.changelog !== "undefined")
    temp["changelog"] = options.changelog;
  if (typeof options.updateBuildInfoOnUpload !== "undefined")
    temp["update_build_info_on_upload"] = options.updateBuildInfoOnUpload;
  if (typeof options.notifyExternalTesters !== "undefined")
    temp["notify_external_testers"] = options.notifyExternalTesters;
  if (typeof options.appVersion !== "undefined")
    temp["app_version"] = options.appVersion;
  if (typeof options.buildNumber !== "undefined")
    temp["build_number"] = options.buildNumber;
  if (typeof options.firstName !== "undefined")
    temp["first_name"] = options.firstName;
  if (typeof options.lastName !== "undefined")
    temp["last_name"] = options.lastName;
  if (typeof options.email !== "undefined") temp["email"] = options.email;
  if (typeof options.testersFilePath !== "undefined")
    temp["testers_file_path"] = options.testersFilePath;
  if (typeof options.groups !== "undefined") temp["groups"] = options.groups;
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.devPortalTeamId !== "undefined")
    temp["dev_portal_team_id"] = options.devPortalTeamId;
  if (typeof options.itcProvider !== "undefined")
    temp["itc_provider"] = options.itcProvider;
  if (typeof options.waitProcessingTimeoutDuration !== "undefined")
    temp["wait_processing_timeout_duration"] =
      options.waitProcessingTimeoutDuration;
  if (typeof options.waitForUploadedBuild !== "undefined")
    temp["wait_for_uploaded_build"] = options.waitForUploadedBuild;
  return temp;
}

/** @ignore */
type convertedValidatePlayStoreJsonKeyOptions = {
  json_key?: string;
  json_key_data?: string;
  root_url?: string;
  timeout?: any;
};
/** @ignore Convert ValidatePlayStoreJsonKeyOptions to the shape used by the Fastlane service
 */
function convertValidatePlayStoreJsonKeyOptions(
  options: ValidatePlayStoreJsonKeyOptions
): convertedValidatePlayStoreJsonKeyOptions {
  const temp: convertedValidatePlayStoreJsonKeyOptions = {};
  if (typeof options.jsonKey !== "undefined")
    temp["json_key"] = options.jsonKey;
  if (typeof options.jsonKeyData !== "undefined")
    temp["json_key_data"] = options.jsonKeyData;
  if (typeof options.rootUrl !== "undefined")
    temp["root_url"] = options.rootUrl;
  if (typeof options.timeout !== "undefined") temp["timeout"] = options.timeout;
  return temp;
}

/** @ignore */
type convertedVerifyBuildOptions = {
  provisioning_type?: string;
  provisioning_uuid?: string;
  team_identifier?: string;
  team_name?: string;
  app_name?: string;
  bundle_identifier?: string;
  ipa_path?: string;
  build_path?: string;
};
/** @ignore Convert VerifyBuildOptions to the shape used by the Fastlane service
 */
function convertVerifyBuildOptions(
  options: VerifyBuildOptions
): convertedVerifyBuildOptions {
  const temp: convertedVerifyBuildOptions = {};
  if (typeof options.provisioningType !== "undefined")
    temp["provisioning_type"] = options.provisioningType;
  if (typeof options.provisioningUuid !== "undefined")
    temp["provisioning_uuid"] = options.provisioningUuid;
  if (typeof options.teamIdentifier !== "undefined")
    temp["team_identifier"] = options.teamIdentifier;
  if (typeof options.teamName !== "undefined")
    temp["team_name"] = options.teamName;
  if (typeof options.appName !== "undefined")
    temp["app_name"] = options.appName;
  if (typeof options.bundleIdentifier !== "undefined")
    temp["bundle_identifier"] = options.bundleIdentifier;
  if (typeof options.ipaPath !== "undefined")
    temp["ipa_path"] = options.ipaPath;
  if (typeof options.buildPath !== "undefined")
    temp["build_path"] = options.buildPath;
  return temp;
}

/** @ignore */
type convertedVerifyPodKeysOptions = {};
/** @ignore Convert VerifyPodKeysOptions to the shape used by the Fastlane service
 */
function convertVerifyPodKeysOptions(
  options: VerifyPodKeysOptions
): convertedVerifyPodKeysOptions {
  const temp: convertedVerifyPodKeysOptions = {};

  return temp;
}

/** @ignore */
type convertedVerifyXcodeOptions = {
  xcode_path: string;
};
/** @ignore Convert VerifyXcodeOptions to the shape used by the Fastlane service
 */
function convertVerifyXcodeOptions(
  options: VerifyXcodeOptions
): convertedVerifyXcodeOptions {
  const temp: convertedVerifyXcodeOptions = {
    xcode_path: options.xcodePath,
  };

  return temp;
}

/** @ignore */
type convertedVersionBumpPodspecOptions = {
  path: string;
  bump_type: string;
  version_number?: string;
  version_appendix?: string;
  require_variable_prefix: boolean;
};
/** @ignore Convert VersionBumpPodspecOptions to the shape used by the Fastlane service
 */
function convertVersionBumpPodspecOptions(
  options: VersionBumpPodspecOptions
): convertedVersionBumpPodspecOptions {
  const temp: convertedVersionBumpPodspecOptions = {
    path: options.path,
    bump_type: options.bumpType,
    require_variable_prefix: options.requireVariablePrefix,
  };
  if (typeof options.versionNumber !== "undefined")
    temp["version_number"] = options.versionNumber;
  if (typeof options.versionAppendix !== "undefined")
    temp["version_appendix"] = options.versionAppendix;
  return temp;
}

/** @ignore */
type convertedVersionGetPodspecOptions = {
  path: string;
  require_variable_prefix: boolean;
};
/** @ignore Convert VersionGetPodspecOptions to the shape used by the Fastlane service
 */
function convertVersionGetPodspecOptions(
  options: VersionGetPodspecOptions
): convertedVersionGetPodspecOptions {
  const temp: convertedVersionGetPodspecOptions = {
    path: options.path,
    require_variable_prefix: options.requireVariablePrefix,
  };

  return temp;
}

/** @ignore */
type convertedXcarchiveOptions = {};
/** @ignore Convert XcarchiveOptions to the shape used by the Fastlane service
 */
function convertXcarchiveOptions(
  options: XcarchiveOptions
): convertedXcarchiveOptions {
  const temp: convertedXcarchiveOptions = {};

  return temp;
}

/** @ignore */
type convertedXcbuildOptions = {};
/** @ignore Convert XcbuildOptions to the shape used by the Fastlane service
 */
function convertXcbuildOptions(
  options: XcbuildOptions
): convertedXcbuildOptions {
  const temp: convertedXcbuildOptions = {};

  return temp;
}

/** @ignore */
type convertedXccleanOptions = {};
/** @ignore Convert XccleanOptions to the shape used by the Fastlane service
 */
function convertXccleanOptions(
  options: XccleanOptions
): convertedXccleanOptions {
  const temp: convertedXccleanOptions = {};

  return temp;
}

/** @ignore */
type convertedXcexportOptions = {};
/** @ignore Convert XcexportOptions to the shape used by the Fastlane service
 */
function convertXcexportOptions(
  options: XcexportOptions
): convertedXcexportOptions {
  const temp: convertedXcexportOptions = {};

  return temp;
}

/** @ignore */
type convertedXcodeInstallOptions = {
  version: string;
  username: string;
  team_id?: string;
  download_retry_attempts: any;
};
/** @ignore Convert XcodeInstallOptions to the shape used by the Fastlane service
 */
function convertXcodeInstallOptions(
  options: XcodeInstallOptions
): convertedXcodeInstallOptions {
  const temp: convertedXcodeInstallOptions = {
    version: options.version,
    username: options.username,
    download_retry_attempts: options.downloadRetryAttempts,
  };
  if (typeof options.teamId !== "undefined") temp["team_id"] = options.teamId;
  return temp;
}

/** @ignore */
type convertedXcodeSelectOptions = {};
/** @ignore Convert XcodeSelectOptions to the shape used by the Fastlane service
 */
function convertXcodeSelectOptions(
  options: XcodeSelectOptions
): convertedXcodeSelectOptions {
  const temp: convertedXcodeSelectOptions = {};

  return temp;
}

/** @ignore */
type convertedXcodeServerGetAssetsOptions = {
  host: string;
  bot_name: string;
  integration_number?: any;
  username?: string;
  password?: string;
  target_folder?: string;
  keep_all_assets?: boolean;
  trust_self_signed_certs?: boolean;
};
/** @ignore Convert XcodeServerGetAssetsOptions to the shape used by the Fastlane service
 */
function convertXcodeServerGetAssetsOptions(
  options: XcodeServerGetAssetsOptions
): convertedXcodeServerGetAssetsOptions {
  const temp: convertedXcodeServerGetAssetsOptions = {
    host: options.host,
    bot_name: options.botName,
  };
  if (typeof options.integrationNumber !== "undefined")
    temp["integration_number"] = options.integrationNumber;
  if (typeof options.username !== "undefined")
    temp["username"] = options.username;
  if (typeof options.password !== "undefined")
    temp["password"] = options.password;
  if (typeof options.targetFolder !== "undefined")
    temp["target_folder"] = options.targetFolder;
  if (typeof options.keepAllAssets !== "undefined")
    temp["keep_all_assets"] = options.keepAllAssets;
  if (typeof options.trustSelfSignedCerts !== "undefined")
    temp["trust_self_signed_certs"] = options.trustSelfSignedCerts;
  return temp;
}

/** @ignore */
type convertedXcodebuildOptions = {};
/** @ignore Convert XcodebuildOptions to the shape used by the Fastlane service
 */
function convertXcodebuildOptions(
  options: XcodebuildOptions
): convertedXcodebuildOptions {
  const temp: convertedXcodebuildOptions = {};

  return temp;
}

/** @ignore */
type convertedXcovOptions = {};
/** @ignore Convert XcovOptions to the shape used by the Fastlane service
 */
function convertXcovOptions(options: XcovOptions): convertedXcovOptions {
  const temp: convertedXcovOptions = {};

  return temp;
}

/** @ignore */
type convertedXctestOptions = {};
/** @ignore Convert XctestOptions to the shape used by the Fastlane service
 */
function convertXctestOptions(options: XctestOptions): convertedXctestOptions {
  const temp: convertedXctestOptions = {};

  return temp;
}

/** @ignore */
type convertedXctoolOptions = {};
/** @ignore Convert XctoolOptions to the shape used by the Fastlane service
 */
function convertXctoolOptions(options: XctoolOptions): convertedXctoolOptions {
  const temp: convertedXctoolOptions = {};

  return temp;
}

/** @ignore */
type convertedXcversionOptions = {
  version: string;
};
/** @ignore Convert XcversionOptions to the shape used by the Fastlane service
 */
function convertXcversionOptions(
  options: XcversionOptions
): convertedXcversionOptions {
  const temp: convertedXcversionOptions = {
    version: options.version,
  };

  return temp;
}

/** @ignore */
type convertedZipOptions = {
  path: string;
  output_path?: string;
  verbose?: boolean;
  password?: string;
  symlinks?: boolean;
  include?: string[];
  exclude?: string[];
};
/** @ignore Convert ZipOptions to the shape used by the Fastlane service
 */
function convertZipOptions(options: ZipOptions): convertedZipOptions {
  const temp: convertedZipOptions = {
    path: options.path,
  };
  if (typeof options.outputPath !== "undefined")
    temp["output_path"] = options.outputPath;
  if (typeof options.verbose !== "undefined") temp["verbose"] = options.verbose;
  if (typeof options.password !== "undefined")
    temp["password"] = options.password;
  if (typeof options.symlinks !== "undefined")
    temp["symlinks"] = options.symlinks;
  if (typeof options.include !== "undefined") temp["include"] = options.include;
  if (typeof options.exclude !== "undefined") temp["exclude"] = options.exclude;
  return temp;
}
/** Main Class
 */
class Fastlane extends FastlaneBase {
  /** see adb --help for more details
   * @return The output of the adb command
   */
  async adb(options: AdbOptions): Promise<string> {
    const out = await this.doAction("adb", convertAdbOptions(options));
    return out;
  }
  /** Fetches device list via adb, e.g. run an adb command on all connected devices.
   * @return Returns an array of all currently connected android devices (ex: )
   */
  async adbDevices(options: AdbDevicesOptions): Promise<any> {
    const out = await this.doAction(
      "adb_devices",
      convertAdbDevicesOptions(options)
    );
    return out;
  }
  /** Modify the default list of supported platforms
   */
  async addExtraPlatforms(options: AddExtraPlatformsOptions): Promise<any> {
    const out = await this.doAction(
      "add_extra_platforms",
      convertAddExtraPlatformsOptions(options)
    );
    return out;
  }
  /** This will automatically tag your build with the following format: `<grouping>/<lane>/<prefix><build_number><postfix>`, where:|
|
>- `grouping` is just to keep your tags organised under one 'folder', defaults to 'builds'|
- `lane` is the name of the current fastlane lane, if chosen to be included via 'includes_lane' option, which defaults to 'true'|
- `prefix` is anything you want to stick in front of the version number, e.g. 'v'|
- `postfix` is anything you want to stick at the end of the version number, e.g. '-RC1'|
- `build_number` is the build number, which defaults to the value emitted by the `increment_build_number` action|
>|
For example, for build 1234 in the 'appstore' lane, it will tag the commit with `builds/appstore/1234`.
    */
  async addGitTag(options: AddGitTagOptions): Promise<any> {
    const out = await this.doAction(
      "add_git_tag",
      convertAddGitTagOptions(options)
    );
    return out;
  }
  /** Returns the current build number of either the live or testflight version - it is useful for getting the build_number of the current or ready-for-sale app version, and it also works on non-live testflight version.
If you need to handle more build-trains please see `latest_testflight_build_number`.
    */
  async appStoreBuildNumber(options: AppStoreBuildNumberOptions): Promise<any> {
    const out = await this.doAction(
      "app_store_build_number",
      convertAppStoreBuildNumberOptions(options)
    );
    return out;
  }
  /** Load the App Store Connect API token to use in other fastlane tools and actions
   */
  async appStoreConnectApiKey(
    options: AppStoreConnectApiKeyOptions
  ): Promise<any> {
    const out = await this.doAction(
      "app_store_connect_api_key",
      convertAppStoreConnectApiKeyOptions(options)
    );
    return out;
  }
  /** Appaloosa is a private mobile application store. This action offers a quick deployment on the platform.
You can create an account, push to your existing account, or manage your user groups.
We accept iOS and Android applications.
    */
  async appaloosa(options: AppaloosaOptions): Promise<any> {
    const out = await this.doAction(
      "appaloosa",
      convertAppaloosaOptions(options)
    );
    return out;
  }
  /** If you provide a `public_key`, this will overwrite an existing application. If you want to have this build as a new app version, you shouldn't provide this value.

To integrate appetize into your GitHub workflow check out the [device_grid guide](https://github.com/fastlane/fastlane/blob/master/fastlane/lib/fastlane/actions/device_grid/README.md).
    */
  async appetize(options: AppetizeOptions): Promise<any> {
    const out = await this.doAction(
      "appetize",
      convertAppetizeOptions(options)
    );
    return out;
  }
  /** Check out the [device_grid guide](https://github.com/fastlane/fastlane/blob/master/fastlane/lib/fastlane/actions/device_grid/README.md) for more information
   * @return The URL to preview the iPhone app
   */
  async appetizeViewingUrlGenerator(
    options: AppetizeViewingUrlGeneratorOptions
  ): Promise<any> {
    const out = await this.doAction(
      "appetize_viewing_url_generator",
      convertAppetizeViewingUrlGeneratorOptions(options)
    );
    return out;
  }
  /** Run UI test by Appium with RSpec
   */
  async appium(options: AppiumOptions): Promise<any> {
    const out = await this.doAction("appium", convertAppiumOptions(options));
    return out;
  }
  /** Runs `appledoc [OPTIONS] <paths to source dirs or files>` for the project
   */
  async appledoc(options: AppledocOptions): Promise<any> {
    const out = await this.doAction(
      "appledoc",
      convertAppledocOptions(options)
    );
    return out;
  }
  /** Using _upload_to_app_store_ after _build_app_ and _capture_screenshots_ will automatically upload the latest ipa and screenshots with no other configuration.

If you don't want to verify an HTML preview for App Store builds, use the `:force` option.
This is useful when running _fastlane_ on your Continuous Integration server:
`_upload_to_app_store_(force: true)`
If your account is on multiple teams and you need to tell the `iTMSTransporter` which 'provider' to use, you can set the `:itc_provider` option to pass this info.
    */
  async appstore(options: AppstoreOptions): Promise<any> {
    const out = await this.doAction(
      "appstore",
      convertAppstoreOptions(options)
    );
    return out;
  }
  /** Upload dSYM file to [Apteligent (Crittercism)](http://www.apteligent.com/)
   */
  async apteligent(options: ApteligentOptions): Promise<any> {
    const out = await this.doAction(
      "apteligent",
      convertApteligentOptions(options)
    );
    return out;
  }
  /** Connect to the artifactory server using either a username/password or an api_key
   */
  async artifactory(options: ArtifactoryOptions): Promise<any> {
    const out = await this.doAction(
      "artifactory",
      convertArtifactoryOptions(options)
    );
    return out;
  }
  /** Configures Xcode's Codesigning options of all targets in the project
   * @return The current status (boolean) of codesigning after modification
   */
  async automaticCodeSigning(
    options: AutomaticCodeSigningOptions
  ): Promise<any> {
    const out = await this.doAction(
      "automatic_code_signing",
      convertAutomaticCodeSigningOptions(options)
    );
    return out;
  }
  /** This action backs up your file to "[path].back"
   */
  async backupFile(options: BackupFileOptions): Promise<any> {
    const out = await this.doAction(
      "backup_file",
      convertBackupFileOptions(options)
    );
    return out;
  }
  /** Save your [zipped] xcarchive elsewhere from default path
   */
  async backupXcarchive(options: BackupXcarchiveOptions): Promise<any> {
    const out = await this.doAction(
      "backup_xcarchive",
      convertBackupXcarchiveOptions(options)
    );
    return out;
  }
  /** Please use the [badge plugin](https://github.com/HazAT/fastlane-plugin-badge) instead.
This action will add a light/dark badge onto your app icon.
You can also provide your custom badge/overlay or add a shield for more customization.
More info: [https://github.com/HazAT/badge](https://github.com/HazAT/badge)
**Note**: If you want to reset the badge back to default, you can use `sh 'git checkout -- <path>/Assets.xcassets/'`.
    */
  async badge(options: BadgeOptions): Promise<any> {
    const out = await this.doAction("badge", convertBadgeOptions(options));
    return out;
  }
  /** This should be called from danger.
More information in the [device_grid guide](https://github.com/fastlane/fastlane/blob/master/fastlane/lib/fastlane/actions/device_grid/README.md).
    */
  async buildAndUploadToAppetize(
    options: BuildAndUploadToAppetizeOptions
  ): Promise<any> {
    const out = await this.doAction(
      "build_and_upload_to_appetize",
      convertBuildAndUploadToAppetizeOptions(options)
    );
    return out;
  }
  /** Run `./gradlew tasks` to get a list of all available gradle tasks for your project
   * @return The output of running the gradle task
   */
  async buildAndroidApp(options: BuildAndroidAppOptions): Promise<any> {
    const out = await this.doAction(
      "build_android_app",
      convertBuildAndroidAppOptions(options)
    );
    return out;
  }
  /** More information: https://fastlane.tools/gym
   * @return The absolute path to the generated ipa file
   */
  async buildApp(options: BuildAppOptions): Promise<string> {
    const out = await this.doAction(
      "build_app",
      convertBuildAppOptions(options)
    );
    return out;
  }
  /** More information: https://fastlane.tools/gym
   * @return The absolute path to the generated ipa file
   */
  async buildIosApp(options: BuildIosAppOptions): Promise<string> {
    const out = await this.doAction(
      "build_ios_app",
      convertBuildIosAppOptions(options)
    );
    return out;
  }
  /** More information: https://fastlane.tools/gym
   * @return The absolute path to the generated ipa file
   */
  async buildMacApp(options: BuildMacAppOptions): Promise<string> {
    const out = await this.doAction(
      "build_mac_app",
      convertBuildMacAppOptions(options)
    );
    return out;
  }
  /** This action runs `bundle install` (if available)
   */
  async bundleInstall(options: BundleInstallOptions): Promise<any> {
    const out = await this.doAction(
      "bundle_install",
      convertBundleInstallOptions(options)
    );
    return out;
  }
  /** Automated localized screenshots of your Android app (via _screengrab_)
   */
  async captureAndroidScreenshots(
    options: CaptureAndroidScreenshotsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "capture_android_screenshots",
      convertCaptureAndroidScreenshotsOptions(options)
    );
    return out;
  }
  /** Generate new localized screenshots on multiple devices (via _snapshot_)
   */
  async captureIosScreenshots(
    options: CaptureIosScreenshotsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "capture_ios_screenshots",
      convertCaptureIosScreenshotsOptions(options)
    );
    return out;
  }
  /** Alias for the [[`captureIosScreenshots`]] action
   */
  async captureScreenshots(options: CaptureScreenshotsOptions): Promise<any> {
    const out = await this.doAction(
      "capture_screenshots",
      convertCaptureScreenshotsOptions(options)
    );
    return out;
  }
  /** Runs `carthage` for your project
   */
  async carthage(options: CarthageOptions): Promise<any> {
    const out = await this.doAction(
      "carthage",
      convertCarthageOptions(options)
    );
    return out;
  }
  /** **Important**: It is recommended to use [match](https://docs.fastlane.tools/actions/match/) according to the [codesigning.guide](https://codesigning.guide) for generating and maintaining your certificates. Use _cert_ directly only if you want full control over what's going on and know more about codesigning.
Use this action to download the latest code signing identity.
    */
  async cert(options: CertOptions): Promise<any> {
    const out = await this.doAction("cert", convertCertOptions(options));
    return out;
  }
  /** By default, messages will be collected back to the last tag, but the range can be controlled
   * @return Returns a String containing your formatted git commits
   */
  async changelogFromGitCommits(
    options: ChangelogFromGitCommitsOptions
  ): Promise<string> {
    const out = await this.doAction(
      "changelog_from_git_commits",
      convertChangelogFromGitCommitsOptions(options)
    );
    return out;
  }
  /** Information on how to obtain an API token: [http://developer.chatwork.com/ja/authenticate.html](http://developer.chatwork.com/ja/authenticate.html)
   */
  async chatwork(options: ChatworkOptions): Promise<any> {
    const out = await this.doAction(
      "chatwork",
      convertChatworkOptions(options)
    );
    return out;
  }
  /** More information: https://fastlane.tools/precheck
   * @return true if precheck passes, else, false
   */
  async checkAppStoreMetadata(
    options: CheckAppStoreMetadataOptions
  ): Promise<any> {
    const out = await this.doAction(
      "check_app_store_metadata",
      convertCheckAppStoreMetadataOptions(options)
    );
    return out;
  }
  /** This action deletes the files that get created in your repo as a result of running the _gym_ and _sigh_ commands. It doesn't delete the `fastlane/report.xml` though, this is probably more suited for the .gitignore.

Useful if you quickly want to send out a test build by dropping down to the command line and typing something like `fastlane beta`, without leaving your repo in a messy state afterwards.
    */
  async cleanBuildArtifacts(options: CleanBuildArtifactsOptions): Promise<any> {
    const out = await this.doAction(
      "clean_build_artifacts",
      convertCleanBuildArtifactsOptions(options)
    );
    return out;
  }
  /** Remove the cache for pods
   */
  async cleanCocoapodsCache(options: CleanCocoapodsCacheOptions): Promise<any> {
    const out = await this.doAction(
      "clean_cocoapods_cache",
      convertCleanCocoapodsCacheOptions(options)
    );
    return out;
  }
  /** Deletes the Derived Data from path set on Xcode or a supplied path
   */
  async clearDerivedData(options: ClearDerivedDataOptions): Promise<any> {
    const out = await this.doAction(
      "clear_derived_data",
      convertClearDerivedDataOptions(options)
    );
    return out;
  }
  /** Copies a given string into the clipboard. Works only on macOS
   */
  async clipboard(options: ClipboardOptions): Promise<any> {
    const out = await this.doAction(
      "clipboard",
      convertClipboardOptions(options)
    );
    return out;
  }
  /** This action will run cloc to generate a SLOC report that the Jenkins SLOCCount plugin can read.
See [https://wiki.jenkins-ci.org/display/JENKINS/SLOCCount+Plugin](https://wiki.jenkins-ci.org/display/JENKINS/SLOCCount+Plugin) and [https://github.com/AlDanial/cloc](https://github.com/AlDanial/cloc) for more information.
    */
  async cloc(options: ClocOptions): Promise<any> {
    const out = await this.doAction("cloc", convertClocOptions(options));
    return out;
  }
  /** If you use [CocoaPods](http://cocoapods.org) you can use the `cocoapods` integration to run `pod install` before building your app.
   */
  async cocoapods(options: CocoapodsOptions): Promise<any> {
    const out = await this.doAction(
      "cocoapods",
      convertCocoapodsOptions(options)
    );
    return out;
  }
  /** Commits a file directly to GitHub. You must provide your GitHub Personal token (get one from [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)), the repository name and the relative file path from the root git project.
Out parameters provide the commit sha created, which can be used for later usage for examples such as releases, the direct download link and the full response JSON.
Documentation: [https://developer.github.com/v3/repos/contents/#create-a-file](https://developer.github.com/v3/repos/contents/#create-a-file).
    * @return A hash containing all relevant information for this commit
Access things like 'html_url', 'sha', 'message' 
    */
  async commitGithubFile(options: CommitGithubFileOptions): Promise<any> {
    const out = await this.doAction(
      "commit_github_file",
      convertCommitGithubFileOptions(options)
    );
    return out;
  }
  /** This action will create a 'Version Bump' commit in your repo. Useful in conjunction with `increment_build_number`.
It checks the repo to make sure that only the relevant files have changed. These are the files that `increment_build_number` (`agvtool`) touches:|
|
>- All `.plist` files|
- The `.xcodeproj/project.pbxproj` file|
>|
Then commits those files to the repo.
Customize the message with the `:message` option. It defaults to 'Version Bump'.
If you have other uncommitted changes in your repo, this action will fail. If you started off in a clean repo, and used the _ipa_ and or _sigh_ actions, then you can use the [clean_build_artifacts](https://docs.fastlane.tools/actions/clean_build_artifacts/) action to clean those temporary files up before running this action.
    */
  async commitVersionBump(options: CommitVersionBumpOptions): Promise<any> {
    const out = await this.doAction(
      "commit_version_bump",
      convertCommitVersionBumpOptions(options)
    );
    return out;
  }
  /** This action copies artifacts to a target directory. It's useful if you have a CI that will pick up these artifacts and attach them to the build. Useful e.g. for storing your `.ipa`s, `.dSYM.zip`s, `.mobileprovision`s, `.cert`s.
Make sure your `:target_path` is ignored from git, and if you use `reset_git_repo`, make sure the artifacts are added to the exclude list.
    */
  async copyArtifacts(options: CopyArtifactsOptions): Promise<any> {
    const out = await this.doAction(
      "copy_artifacts",
      convertCopyArtifactsOptions(options)
    );
    return out;
  }
  /** Create new apps on Managed Google Play.
   */
  async createAppOnManagedPlayStore(
    options: CreateAppOnManagedPlayStoreOptions
  ): Promise<any> {
    const out = await this.doAction(
      "create_app_on_managed_play_store",
      convertCreateAppOnManagedPlayStoreOptions(options)
    );
    return out;
  }
  /** Create new apps on App Store Connect and Apple Developer Portal via _produce_.
If the app already exists, `create_app_online` will not do anything.
For more information about _produce_, visit its documentation page: [https://docs.fastlane.tools/actions/produce/](https://docs.fastlane.tools/actions/produce/).
    */
  async createAppOnline(options: CreateAppOnlineOptions): Promise<any> {
    const out = await this.doAction(
      "create_app_online",
      convertCreateAppOnlineOptions(options)
    );
    return out;
  }
  /** Create a new Keychain
   */
  async createKeychain(options: CreateKeychainOptions): Promise<any> {
    const out = await this.doAction(
      "create_keychain",
      convertCreateKeychainOptions(options)
    );
    return out;
  }
  /** This will create a new pull request on GitHub
   * @return The pull request URL when successful
   */
  async createPullRequest(options: CreatePullRequestOptions): Promise<any> {
    const out = await this.doAction(
      "create_pull_request",
      convertCreatePullRequestOptions(options)
    );
    return out;
  }
  /** Utility for packaging multiple build configurations of a given library
or framework into a single xcframework.

If you want to package several frameworks just provide one of:

  * An array containing the list of frameworks using the :frameworks parameter
    (if they have no associated dSYMs):
      ['FrameworkA.framework', 'FrameworkB.framework']

  * A hash containing the list of frameworks with their dSYMs using the
    :frameworks_with_dsyms parameter:
      {
        'FrameworkA.framework' => {},
        'FrameworkB.framework' => { dsyms: 'FrameworkB.framework.dSYM' }
      }

If you want to package several libraries just provide one of:

  * An array containing the list of libraries using the :libraries parameter
    (if they have no associated headers or dSYMs):
      ['LibraryA.so', 'LibraryB.so']

  * A hash containing the list of libraries with their headers and dSYMs
    using the :libraries_with_headers_or_dsyms parameter:
      {
        'LibraryA.so' => { dsyms: 'libraryA.so.dSYM' },
        'LibraryB.so' => { headers: 'headers' }
      }

Finally specify the location of the xcframework to be generated using the :output
parameter.

    */
  async createXcframework(options: CreateXcframeworkOptions): Promise<any> {
    const out = await this.doAction(
      "create_xcframework",
      convertCreateXcframeworkOptions(options)
    );
    return out;
  }
  /** Formalize your Pull Request etiquette.
More information: [https://github.com/danger/danger](https://github.com/danger/danger).
    */
  async danger(options: DangerOptions): Promise<any> {
    const out = await this.doAction("danger", convertDangerOptions(options));
    return out;
  }
  /** Print out an overview of the lane context values
   */
  async debug(options: DebugOptions): Promise<any> {
    const out = await this.doAction("debug", convertDebugOptions(options));
    return out;
  }
  /** Defines a default platform to not have to specify the platform
   */
  async defaultPlatform(options: DefaultPlatformOptions): Promise<any> {
    const out = await this.doAction(
      "default_platform",
      convertDefaultPlatformOptions(options)
    );
    return out;
  }
  /** Keychains can be deleted after being created with `create_keychain`
   */
  async deleteKeychain(options: DeleteKeychainOptions): Promise<any> {
    const out = await this.doAction(
      "delete_keychain",
      convertDeleteKeychainOptions(options)
    );
    return out;
  }
  /** Using _upload_to_app_store_ after _build_app_ and _capture_screenshots_ will automatically upload the latest ipa and screenshots with no other configuration.

If you don't want to verify an HTML preview for App Store builds, use the `:force` option.
This is useful when running _fastlane_ on your Continuous Integration server:
`_upload_to_app_store_(force: true)`
If your account is on multiple teams and you need to tell the `iTMSTransporter` which 'provider' to use, you can set the `:itc_provider` option to pass this info.
    */
  async deliver(options: DeliverOptions): Promise<any> {
    const out = await this.doAction("deliver", convertDeliverOptions(options));
    return out;
  }
  /** You can retrieve your username and API token on [your settings page](https://deploygate.com/settings).
More information about the available options can be found in the [DeployGate Push API document](https://deploygate.com/docs/api).
    */
  async deploygate(options: DeploygateOptions): Promise<any> {
    const out = await this.doAction(
      "deploygate",
      convertDeploygateOptions(options)
    );
    return out;
  }
  /** More information about dotgpg can be found at [https://github.com/ConradIrwin/dotgpg](https://github.com/ConradIrwin/dotgpg).
   */
  async dotgpgEnvironment(options: DotgpgEnvironmentOptions): Promise<any> {
    const out = await this.doAction(
      "dotgpg_environment",
      convertDotgpgEnvironmentOptions(options)
    );
    return out;
  }
  /** Specify the URL to download and get the content as a return value.
Automatically parses JSON into a Ruby data structure.
For more advanced networking code, use the Ruby functions instead: [http://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html](http://docs.ruby-lang.org/en/2.0.0/Net/HTTP.html).
    */
  async download(options: DownloadOptions): Promise<any> {
    const out = await this.doAction(
      "download",
      convertDownloadOptions(options)
    );
    return out;
  }
  /** Download App Privacy Details from an app in App Store Connect. For more detail information, view https://docs.fastlane.tools/uploading-app-privacy-details
   */
  async downloadAppPrivacyDetailsFromAppStore(
    options: DownloadAppPrivacyDetailsFromAppStoreOptions
  ): Promise<any> {
    const out = await this.doAction(
      "download_app_privacy_details_from_app_store",
      convertDownloadAppPrivacyDetailsFromAppStoreOptions(options)
    );
    return out;
  }
  /** This action downloads dSYM files from App Store Connect after the ipa gets re-compiled by Apple. Useful if you have Bitcode enabled.|
|
```ruby|
lane :refresh_dsyms do|
  download_dsyms                  # Download dSYM files from iTC|
  upload_symbols_to_crashlytics   # Upload them to Crashlytics|
  clean_build_artifacts           # Delete the local dSYM files|
end|
```|
>|
    */
  async downloadDsyms(options: DownloadDsymsOptions): Promise<any> {
    const out = await this.doAction(
      "download_dsyms",
      convertDownloadDsymsOptions(options)
    );
    return out;
  }
  /** More information: https://docs.fastlane.tools/actions/download_from_play_store/
   */
  async downloadFromPlayStore(
    options: DownloadFromPlayStoreOptions
  ): Promise<any> {
    const out = await this.doAction(
      "download_from_play_store",
      convertDownloadFromPlayStoreOptions(options)
    );
    return out;
  }
  /** You can manually specify the path to the xcarchive (not needed if you use `xcodebuild`/`xcarchive` to build your archive)
   */
  async dsymZip(options: DsymZipOptions): Promise<any> {
    const out = await this.doAction("dsym_zip", convertDsymZipOptions(options));
    return out;
  }
  /** Alias for the [[`puts`]] action
   */
  async echo(options: EchoOptions): Promise<any> {
    const out = await this.doAction("echo", convertEchoOptions(options));
    return out;
  }
  /** This action will check if you are using `bundle exec` to run fastlane.
You can put it into `before_all` to make sure that fastlane is ran using the `bundle exec fastlane` command.
    */
  async ensureBundleExec(options: EnsureBundleExecOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_bundle_exec",
      convertEnsureBundleExecOptions(options)
    );
    return out;
  }
  /** This action will check if some environment variables are set.
   */
  async ensureEnvVars(options: EnsureEnvVarsOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_env_vars",
      convertEnsureEnvVarsOptions(options)
    );
    return out;
  }
  /** This action will check if your git repo is checked out to a specific branch.
You may only want to make releases from a specific branch, so `ensure_git_branch` will stop a lane if it was accidentally executed on an incorrect branch.
    */
  async ensureGitBranch(options: EnsureGitBranchOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_git_branch",
      convertEnsureGitBranchOptions(options)
    );
    return out;
  }
  /** A sanity check to make sure you are working in a repo that is clean.
Especially useful to put at the beginning of your Fastfile in the `before_all` block, if some of your other actions will touch your filesystem, do things to your git repo, or just as a general reminder to save your work.
Also needed as a prerequisite for some other actions like `reset_git_repo`.
    */
  async ensureGitStatusClean(
    options: EnsureGitStatusCleanOptions
  ): Promise<any> {
    const out = await this.doAction(
      "ensure_git_status_clean",
      convertEnsureGitStatusCleanOptions(options)
    );
    return out;
  }
  /** You don't want any debug code to slip into production.
This can be used to check if there is any debug code still in your codebase or if you have things like `// TO DO` or similar.
    */
  async ensureNoDebugCode(options: EnsureNoDebugCodeOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_no_debug_code",
      convertEnsureNoDebugCodeOptions(options)
    );
    return out;
  }
  /** If building your app requires a specific version of Xcode, you can invoke this command before using gym.
For example, to ensure that a beta version of Xcode is not accidentally selected to build, which would make uploading to TestFlight fail.
You can either manually provide a specific version using `version:` or you make use of the `.xcode-version` file.
Using the `strict` parameter, you can either verify the full set of version numbers strictly (i.e. `11.3.1`) or only a subset of them (i.e. `11.3` or `11`).
    */
  async ensureXcodeVersion(options: EnsureXcodeVersionOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_xcode_version",
      convertEnsureXcodeVersionOptions(options)
    );
    return out;
  }
  /** Sets/gets env vars for Fastlane.swift. Don't use in ruby, use `ENV[key] = val`
   */
  async environmentVariable(
    options: EnvironmentVariableOptions
  ): Promise<string> {
    const out = await this.doAction(
      "environment_variable",
      convertEnvironmentVariableOptions(options)
    );
    return out;
  }
  /** Renders an ERB template with `:placeholders` given as a hash via parameter.
If no `:destination` is set, it returns the rendered template as string.
    */
  async erb(options: ErbOptions): Promise<any> {
    const out = await this.doAction("erb", convertErbOptions(options));
    return out;
  }
  /** Add this to your `Fastfile` to require a certain version of _fastlane_.
Use it if you use an action that just recently came out and you need it.
    */
  async fastlaneVersion(options: FastlaneVersionOptions): Promise<any> {
    const out = await this.doAction(
      "fastlane_version",
      convertFastlaneVersionOptions(options)
    );
    return out;
  }
  /** To obtain the token, create a new [incoming message webhook](https://dev.flock.co/wiki/display/FlockAPI/Incoming+Webhooks) in your Flock admin panel.
   */
  async flock(options: FlockOptions): Promise<any> {
    const out = await this.doAction("flock", convertFlockOptions(options));
    return out;
  }
  /** Uses [frameit](https://docs.fastlane.tools/actions/frameit/) to prepare perfect screenshots for the App Store, your website, QA or emails.
You can add background and titles to the framed screenshots as well.
    */
  async frameScreenshots(options: FrameScreenshotsOptions): Promise<any> {
    const out = await this.doAction(
      "frame_screenshots",
      convertFrameScreenshotsOptions(options)
    );
    return out;
  }
  /** Uses [frameit](https://docs.fastlane.tools/actions/frameit/) to prepare perfect screenshots for the App Store, your website, QA or emails.
You can add background and titles to the framed screenshots as well.
    */
  async frameit(options: FrameitOptions): Promise<any> {
    const out = await this.doAction("frameit", convertFrameitOptions(options));
    return out;
  }
  /** Generate summarized code coverage reports using [gcovr](http://gcovr.com/)
   */
  async gcovr(options: GcovrOptions): Promise<any> {
    const out = await this.doAction("gcovr", convertGcovrOptions(options));
    return out;
  }
  /** This action will return the current build number set on your project.
You first have to set up your Xcode project, if you haven't done it already: [https://developer.apple.com/library/ios/qa/qa1827/_index.html](https://developer.apple.com/library/ios/qa/qa1827/_index.html).
    */
  async getBuildNumber(options: GetBuildNumberOptions): Promise<string> {
    const out = await this.doAction(
      "get_build_number",
      convertGetBuildNumberOptions(options)
    );
    return out;
  }
  /** This action will get the **build number** according to what the SCM HEAD reports.
Currently supported SCMs are svn (uses root revision), git-svn (uses svn revision), git (uses short hash) and mercurial (uses short hash or revision number).
There is an option, `:use_hg_revision_number`, which allows to use mercurial revision number instead of hash.
    * @return The build number from the current repository 
    */
  async getBuildNumberRepository(
    options: GetBuildNumberRepositoryOptions
  ): Promise<any> {
    const out = await this.doAction(
      "get_build_number_repository",
      convertGetBuildNumberRepositoryOptions(options)
    );
    return out;
  }
  /** **Important**: It is recommended to use [match](https://docs.fastlane.tools/actions/match/) according to the [codesigning.guide](https://codesigning.guide) for generating and maintaining your certificates. Use _cert_ directly only if you want full control over what's going on and know more about codesigning.
Use this action to download the latest code signing identity.
    */
  async getCertificates(options: GetCertificatesOptions): Promise<any> {
    const out = await this.doAction(
      "get_certificates",
      convertGetCertificatesOptions(options)
    );
    return out;
  }
  /** This will return all information about a release. For example:|
|
```no-highlight|
{|
  "url"=>"https://api.github.com/repos/KrauseFx/fastlane/releases/1537713",|
   "assets_url"=>"https://api.github.com/repos/KrauseFx/fastlane/releases/1537713/assets",|
   "upload_url"=>"https://uploads.github.com/repos/KrauseFx/fastlane/releases/1537713/assets{?name}",|
   "html_url"=>"https://github.com/fastlane/fastlane/releases/tag/1.8.0",|
   "id"=>1537713,|
   "tag_name"=>"1.8.0",|
   "target_commitish"=>"master",|
   "name"=>"1.8.0 Switch Lanes & Pass Parameters",|
   "draft"=>false,|
   "author"=>|
    {"login"=>"KrauseFx",|
     "id"=>869950,|
     "avatar_url"=>"https://avatars.githubusercontent.com/u/869950?v=3",|
     "gravatar_id"=>"",|
     "url"=>"https://api.github.com/users/KrauseFx",|
     "html_url"=>"https://github.com/fastlane",|
     "followers_url"=>"https://api.github.com/users/KrauseFx/followers",|
     "following_url"=>"https://api.github.com/users/KrauseFx/following{/other_user}",|
     "gists_url"=>"https://api.github.com/users/KrauseFx/gists{/gist_id}",|
     "starred_url"=>"https://api.github.com/users/KrauseFx/starred{/owner}{/repo}",|
     "subscriptions_url"=>"https://api.github.com/users/KrauseFx/subscriptions",|
     "organizations_url"=>"https://api.github.com/users/KrauseFx/orgs",|
     "repos_url"=>"https://api.github.com/users/KrauseFx/repos",|
     "events_url"=>"https://api.github.com/users/KrauseFx/events{/privacy}",|
     "received_events_url"=>"https://api.github.com/users/KrauseFx/received_events",|
     "type"=>"User",|
     "site_admin"=>false},|
   "prerelease"=>false,|
   "created_at"=>"2015-07-14T23:33:01Z",|
   "published_at"=>"2015-07-14T23:44:10Z",|
   "assets"=>[],|
   "tarball_url"=>"https://api.github.com/repos/KrauseFx/fastlane/tarball/1.8.0",|
   "zipball_url"=>"https://api.github.com/repos/KrauseFx/fastlane/zipball/1.8.0",|
   "body"=> ...Markdown...|
  "This is one of the biggest updates of _fastlane_ yet"|
}|
```|
>|
    */
  async getGithubRelease(options: GetGithubReleaseOptions): Promise<any> {
    const out = await this.doAction(
      "get_github_release",
      convertGetGithubReleaseOptions(options)
    );
    return out;
  }
  /** Get a value from a plist file, which can be used to fetch the app identifier and more information about your app
   */
  async getInfoPlistValue(options: GetInfoPlistValueOptions): Promise<string> {
    const out = await this.doAction(
      "get_info_plist_value",
      convertGetInfoPlistValueOptions(options)
    );
    return out;
  }
  /** This is useful for introspecting Info.plist files for `.ipa` files that have already been built.
   * @return Returns the value in the .ipa's Info.plist corresponding to the passed in Key
   */
  async getIpaInfoPlistValue(
    options: GetIpaInfoPlistValueOptions
  ): Promise<string> {
    const out = await this.doAction(
      "get_ipa_info_plist_value",
      convertGetIpaInfoPlistValueOptions(options)
    );
    return out;
  }
  /** If you haven't done so before, start by following the first two steps of Googles ["Get started with custom app publishing"](https://developers.google.com/android/work/play/custom-app-api/get-started) -> ["Preliminary setup"](https://developers.google.com/android/work/play/custom-app-api/get-started#preliminary_setup) instructions:
"[Enable the Google Play Custom App Publishing API](https://developers.google.com/android/work/play/custom-app-api/get-started#enable_the_google_play_custom_app_publishing_api)" and "[Create a service account](https://developers.google.com/android/work/play/custom-app-api/get-started#create_a_service_account)".
You need the "service account's private key file" to continue.
Run the action and supply the "private key file" to it as the `json_key` parameter. The command will output a URL to visit. After logging in you are redirected to a page that outputs your "Developer Account ID" - take note of that, you will need it to be able to use [`create_app_on_managed_play_store`](https://docs.fastlane.tools/actions/create_app_on_managed_play_store/).
    * @return An URI to obtain publishing rights for custom apps on Managed Play Store 
    */
  async getManagedPlayStorePublishingRights(
    options: GetManagedPlayStorePublishingRightsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "get_managed_play_store_publishing_rights",
      convertGetManagedPlayStorePublishingRightsOptions(options)
    );
    return out;
  }
  /** **Note**: It is recommended to use [match](https://docs.fastlane.tools/actions/match/) according to the [codesigning.guide](https://codesigning.guide) for generating and maintaining your provisioning profiles. Use _sigh_ directly only if you want full control over what's going on and know more about codesigning.
   * @return The UUID of the profile sigh just fetched/generated
   */
  async getProvisioningProfile(
    options: GetProvisioningProfileOptions
  ): Promise<string> {
    const out = await this.doAction(
      "get_provisioning_profile",
      convertGetProvisioningProfileOptions(options)
    );
    return out;
  }
  /** Additionally to the available options, you can also specify a block that only gets executed if a new profile was created. You can use it to upload the new profile to your server.
Use it like this:|
|
```ruby|
get_push_certificate(|
  new_profile: proc do|
    # your upload code|
  end|
)|
```|
>|
    */
  async getPushCertificate(options: GetPushCertificateOptions): Promise<any> {
    const out = await this.doAction(
      "get_push_certificate",
      convertGetPushCertificateOptions(options)
    );
    return out;
  }
  /** This action will return the current version number set on your project. It first looks in the plist and then for '$(MARKETING_VERSION)' in the build settings.
   */
  async getVersionNumber(options: GetVersionNumberOptions): Promise<string> {
    const out = await this.doAction(
      "get_version_number",
      convertGetVersionNumberOptions(options)
    );
    return out;
  }
  /** Directly add the given file or all files
   */
  async gitAdd(options: GitAddOptions): Promise<any> {
    const out = await this.doAction("git_add", convertGitAddOptions(options));
    return out;
  }
  /** If no branch could be found, this action will return an empty string. This is a wrapper for the internal action Actions.git_branch
   */
  async gitBranch(options: GitBranchOptions): Promise<string> {
    const out = await this.doAction(
      "git_branch",
      convertGitBranchOptions(options)
    );
    return out;
  }
  /** Directly commit the given file with the given message
   */
  async gitCommit(options: GitCommitOptions): Promise<any> {
    const out = await this.doAction(
      "git_commit",
      convertGitCommitOptions(options)
    );
    return out;
  }
  /** Executes a simple git pull command
   */
  async gitPull(options: GitPullOptions): Promise<any> {
    const out = await this.doAction("git_pull", convertGitPullOptions(options));
    return out;
  }
  /** If no default remote branch could be found, this action will return nil. This is a wrapper for the internal action Actions.git_default_remote_branch_name
   */
  async gitRemoteBranch(options: GitRemoteBranchOptions): Promise<string> {
    const out = await this.doAction(
      "git_remote_branch",
      convertGitRemoteBranchOptions(options)
    );
    return out;
  }
  /** Executes a git submodule update command
   */
  async gitSubmoduleUpdate(options: GitSubmoduleUpdateOptions): Promise<any> {
    const out = await this.doAction(
      "git_submodule_update",
      convertGitSubmoduleUpdateOptions(options)
    );
    return out;
  }
  /** Checks if the git tag with the given name exists in the current repo
   * @return Boolean value whether the tag exists or not
   */
  async gitTagExists(options: GitTagExistsOptions): Promise<any> {
    const out = await this.doAction(
      "git_tag_exists",
      convertGitTagExistsOptions(options)
    );
    return out;
  }
  /** Calls any GitHub API endpoint. You must provide your GitHub Personal token (get one from [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)).
Out parameters provide the status code and the full response JSON if valid, otherwise the raw response body.
Documentation: [https://developer.github.com/v3](https://developer.github.com/v3).
    * @return A hash including the HTTP status code (:status), the response body (:body), and if valid JSON has been returned the parsed JSON (:json). 
    */
  async githubApi(options: GithubApiOptions): Promise<any> {
    const out = await this.doAction(
      "github_api",
      convertGithubApiOptions(options)
    );
    return out;
  }
  /** More information: [https://docs.fastlane.tools/actions/supply/](https://docs.fastlane.tools/actions/supply/)
   * @return Array of strings representing the release names for the given Google Play track
   */
  async googlePlayTrackReleaseNames(
    options: GooglePlayTrackReleaseNamesOptions
  ): Promise<any> {
    const out = await this.doAction(
      "google_play_track_release_names",
      convertGooglePlayTrackReleaseNamesOptions(options)
    );
    return out;
  }
  /** More information: [https://docs.fastlane.tools/actions/supply/](https://docs.fastlane.tools/actions/supply/)
   * @return Array of integers representing the version codes for the given Google Play track
   */
  async googlePlayTrackVersionCodes(
    options: GooglePlayTrackVersionCodesOptions
  ): Promise<any> {
    const out = await this.doAction(
      "google_play_track_version_codes",
      convertGooglePlayTrackVersionCodesOptions(options)
    );
    return out;
  }
  /** Run `./gradlew tasks` to get a list of all available gradle tasks for your project
   * @return The output of running the gradle task
   */
  async gradle(options: GradleOptions): Promise<any> {
    const out = await this.doAction("gradle", convertGradleOptions(options));
    return out;
  }
  /** More information: https://fastlane.tools/gym
   * @return The absolute path to the generated ipa file
   */
  async gym(options: GymOptions): Promise<string> {
    const out = await this.doAction("gym", convertGymOptions(options));
    return out;
  }
  /** This will add a hg tag to the current branch
   */
  async hgAddTag(options: HgAddTagOptions): Promise<any> {
    const out = await this.doAction(
      "hg_add_tag",
      convertHgAddTagOptions(options)
    );
    return out;
  }
  /** The mercurial equivalent of the [commit_version_bump](https://docs.fastlane.tools/actions/commit_version_bump/) git action. Like the git version, it is useful in conjunction with [`increment_build_number`](https://docs.fastlane.tools/actions/increment_build_number/).
It checks the repo to make sure that only the relevant files have changed, these are the files that `increment_build_number` (`agvtool`) touches:|
|
>- All `.plist` files|
- The `.xcodeproj/project.pbxproj` file|
>|
Then commits those files to the repo.
Customize the message with the `:message` option, defaults to 'Version Bump'
If you have other uncommitted changes in your repo, this action will fail. If you started off in a clean repo, and used the _ipa_ and or _sigh_ actions, then you can use the [clean_build_artifacts](https://docs.fastlane.tools/actions/clean_build_artifacts/) action to clean those temporary files up before running this action.
    */
  async hgCommitVersionBump(options: HgCommitVersionBumpOptions): Promise<any> {
    const out = await this.doAction(
      "hg_commit_version_bump",
      convertHgCommitVersionBumpOptions(options)
    );
    return out;
  }
  /** Along the same lines as the [ensure_git_status_clean](https://docs.fastlane.tools/actions/ensure_git_status_clean/) action, this is a sanity check to ensure the working mercurial repo is clean. Especially useful to put at the beginning of your Fastfile in the `before_all` block.
   */
  async hgEnsureCleanStatus(options: HgEnsureCleanStatusOptions): Promise<any> {
    const out = await this.doAction(
      "hg_ensure_clean_status",
      convertHgEnsureCleanStatusOptions(options)
    );
    return out;
  }
  /** The mercurial equivalent of [push_to_git_remote](https://docs.fastlane.tools/actions/push_to_git_remote/). Pushes your local commits to a remote mercurial repo. Useful when local changes such as adding a version bump commit or adding a tag are part of your lane’s actions.
   */
  async hgPush(options: HgPushOptions): Promise<any> {
    const out = await this.doAction("hg_push", convertHgPushOptions(options));
    return out;
  }
  /** Send a message to **room** (by default) or a direct message to **@username** with success (green) or failure (red) status.
   */
  async hipchat(options: HipchatOptions): Promise<any> {
    const out = await this.doAction("hipchat", convertHipchatOptions(options));
    return out;
  }
  /** HockeyApp will be no longer supported and will be transitioned into App Center on November 16, 2019.
Please migrate over to [App Center](https://github.com/Microsoft/fastlane-plugin-appcenter/)

Symbols will also be uploaded automatically if a `app.dSYM.zip` file is found next to `app.ipa`. In case it is located in a different place you can specify the path explicitly in the `:dsym` parameter.
More information about the available options can be found in the [HockeyApp Docs](http://support.hockeyapp.net/kb/api/api-versions#upload-version).
    */
  async hockey(options: HockeyOptions): Promise<any> {
    const out = await this.doAction("hockey", convertHockeyOptions(options));
    return out;
  }
  /** Connect to the IFTTT [Maker Channel](https://ifttt.com/maker). An IFTTT Recipe has two components: a Trigger and an Action. In this case, the Trigger will fire every time the Maker Channel receives a web request (made by this _fastlane_ action) to notify it of an event. The Action can be anything that IFTTT supports: email, SMS, etc.
   */
  async ifttt(options: IftttOptions): Promise<any> {
    const out = await this.doAction("ifttt", convertIftttOptions(options));
    return out;
  }
  /** This is useful if you have shared lanes across multiple apps and you want to store a Fastfile in a separate folder.
The path must be relative to the Fastfile this is called from.
    */
  async import(options: ImportOptions): Promise<any> {
    const out = await this.doAction("import", convertImportOptions(options));
    return out;
  }
  /** Import certificates (and private keys) into the current default keychain. Use the `create_keychain` action to create a new keychain.
   */
  async importCertificate(options: ImportCertificateOptions): Promise<any> {
    const out = await this.doAction(
      "import_certificate",
      convertImportCertificateOptions(options)
    );
    return out;
  }
  /** This is useful if you have shared lanes across multiple apps and you want to store the Fastfile in a remote git repository.
   */
  async importFromGit(options: ImportFromGitOptions): Promise<any> {
    const out = await this.doAction(
      "import_from_git",
      convertImportFromGitOptions(options)
    );
    return out;
  }
  /** Increment the build number of your project
   * @return The new build number
   */
  async incrementBuildNumber(
    options: IncrementBuildNumberOptions
  ): Promise<string> {
    const out = await this.doAction(
      "increment_build_number",
      convertIncrementBuildNumberOptions(options)
    );
    return out;
  }
  /** This action will increment the version number.
You first have to set up your Xcode project, if you haven't done it already: [https://developer.apple.com/library/ios/qa/qa1827/_index.html](https://developer.apple.com/library/ios/qa/qa1827/_index.html).
    * @return The new version number 
    */
  async incrementVersionNumber(
    options: IncrementVersionNumberOptions
  ): Promise<string> {
    const out = await this.doAction(
      "increment_version_number",
      convertIncrementVersionNumberOptions(options)
    );
    return out;
  }
  /** Installs the ipa on the device. If no id is given, the first found iOS device will be used. Works via USB or Wi-Fi. This requires `ios-deploy` to be installed. Please have a look at [ios-deploy](https://github.com/ios-control/ios-deploy). To quickly install it, use `npm -g i ios-deploy`
   */
  async installOnDevice(options: InstallOnDeviceOptions): Promise<any> {
    const out = await this.doAction(
      "install_on_device",
      convertInstallOnDeviceOptions(options)
    );
    return out;
  }
  /** Install provisioning profile from path for current user
   * @return The absolute path to the installed provisioning profile
   */
  async installProvisioningProfile(
    options: InstallProvisioningProfileOptions
  ): Promise<string> {
    const out = await this.doAction(
      "install_provisioning_profile",
      convertInstallProvisioningProfileOptions(options)
    );
    return out;
  }
  /** Install an Xcode plugin for the current user
   */
  async installXcodePlugin(options: InstallXcodePluginOptions): Promise<any> {
    const out = await this.doAction(
      "install_xcode_plugin",
      convertInstallXcodePluginOptions(options)
    );
    return out;
  }
  /** Upload a new build to [Installr](http://installrapp.com/)
   */
  async installr(options: InstallrOptions): Promise<any> {
    const out = await this.doAction(
      "installr",
      convertInstallrOptions(options)
    );
    return out;
  }
  /** Easily build and sign your app using shenzhen
   */
  async ipa(options: IpaOptions): Promise<any> {
    const out = await this.doAction("ipa", convertIpaOptions(options));
    return out;
  }
  /** The return value of this method is true if fastlane is currently executed on Travis, Jenkins, Circle or a similar CI service
   */
  async isCi(options: IsCiOptions): Promise<any> {
    const out = await this.doAction("is_ci", convertIsCiOptions(options));
    return out;
  }
  /** Generate docs using Jazzy
   */
  async jazzy(options: JazzyOptions): Promise<any> {
    const out = await this.doAction("jazzy", convertJazzyOptions(options));
    return out;
  }
  /** Leave a comment on a Jira ticket
    * @return A hash containing all relevant information of the Jira comment
Access Jira comment 'id', 'author', 'body', and more 
    */
  async jira(options: JiraOptions): Promise<any> {
    const out = await this.doAction("jira", convertJiraOptions(options));
    return out;
  }
  /** Access the fastlane lane context values.
More information about how the lane context works: [https://docs.fastlane.tools/advanced/#lane-context](https://docs.fastlane.tools/advanced/#lane-context).
    */
  async laneContext(options: LaneContextOptions): Promise<any> {
    const out = await this.doAction(
      "lane_context",
      convertLaneContextOptions(options)
    );
    return out;
  }
  /** Return last git commit hash, abbreviated commit hash, commit message and author
   * @return Returns the following dict: {commit_hash: "commit hash", abbreviated_commit_hash: "abbreviated commit hash" author: "Author", author_email: "author email", message: "commit message"} (ex: [object Object])
   */
  async lastGitCommit(options: LastGitCommitOptions): Promise<any> {
    const out = await this.doAction(
      "last_git_commit",
      convertLastGitCommitOptions(options)
    );
    return out;
  }
  /** If you are using this action on a **shallow clone**, *the default with some CI systems like Bamboo*, you need to ensure that you have also pulled all the git tags appropriately. Assuming your git repo has the correct remote set you can issue `sh('git fetch --tags')`.
Pattern parameter allows you to filter to a subset of tags.
    */
  async lastGitTag(options: LastGitTagOptions): Promise<string> {
    const out = await this.doAction(
      "last_git_tag",
      convertLastGitTagOptions(options)
    );
    return out;
  }
  /** Provides a way to have `increment_build_number` be based on the latest build you uploaded to iTC.
Fetches the most recent build number from TestFlight based on the version number. Provides a way to have `increment_build_number` be based on the latest build you uploaded to iTC.
    * @return Integer representation of the latest build number uploaded to TestFlight (ex: 2)
    */
  async latestTestflightBuildNumber(
    options: LatestTestflightBuildNumberOptions
  ): Promise<any> {
    const out = await this.doAction(
      "latest_testflight_build_number",
      convertLatestTestflightBuildNumberOptions(options)
    );
    return out;
  }
  /** Generates coverage data using lcov
   */
  async lcov(options: LcovOptions): Promise<any> {
    const out = await this.doAction("lcov", convertLcovOptions(options));
    return out;
  }
  /** Send a success/error message to an email group
   */
  async mailgun(options: MailgunOptions): Promise<any> {
    const out = await this.doAction("mailgun", convertMailgunOptions(options));
    return out;
  }
  /** This is useful when deploying automated builds. The changelog from Jenkins lists all the commit messages since the last build.
   */
  async makeChangelogFromJenkins(
    options: MakeChangelogFromJenkinsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "make_changelog_from_jenkins",
      convertMakeChangelogFromJenkinsOptions(options)
    );
    return out;
  }
  /** More information: https://docs.fastlane.tools/actions/match/
   */
  async match(options: MatchOptions): Promise<any> {
    const out = await this.doAction("match", convertMatchOptions(options));
    return out;
  }
  /** Use the match_nuke action to revoke your certificates and provisioning profiles.
Don't worry, apps that are already available in the App Store / TestFlight will still work.
Builds distributed via Ad Hoc or Enterprise will be disabled after nuking your account, so you'll have to re-upload a new build.
After clearing your account you'll start from a clean state, and you can run match to generate your certificates and profiles again.
More information: https://docs.fastlane.tools/actions/match/
    */
  async matchNuke(options: MatchNukeOptions): Promise<any> {
    const out = await this.doAction(
      "match_nuke",
      convertMatchNukeOptions(options)
    );
    return out;
  }
  /** Add this to your `Fastfile` to require a certain version of _fastlane_.
Use it if you use an action that just recently came out and you need it.
    */
  async minFastlaneVersion(options: MinFastlaneVersionOptions): Promise<any> {
    const out = await this.doAction(
      "min_fastlane_version",
      convertMinFastlaneVersionOptions(options)
    );
    return out;
  }
  /** The options are the same as `:enable_services` in the [produce action](https://docs.fastlane.tools/actions/produce/#parameters_1)
   */
  async modifyServices(options: ModifyServicesOptions): Promise<any> {
    const out = await this.doAction(
      "modify_services",
      convertModifyServicesOptions(options)
    );
    return out;
  }
  /** Upload a file to [Sonatype Nexus platform](https://www.sonatype.com)
   */
  async nexusUpload(options: NexusUploadOptions): Promise<any> {
    const out = await this.doAction(
      "nexus_upload",
      convertNexusUploadOptions(options)
    );
    return out;
  }
  /** Notarizes a macOS app
   */
  async notarize(options: NotarizeOptions): Promise<any> {
    const out = await this.doAction(
      "notarize",
      convertNotarizeOptions(options)
    );
    return out;
  }
  /** Display a macOS notification with custom message and title
   */
  async notification(options: NotificationOptions): Promise<any> {
    const out = await this.doAction(
      "notification",
      convertNotificationOptions(options)
    );
    return out;
  }
  /** Shows a macOS notification - use `notification` instead
   */
  async notify(options: NotifyOptions): Promise<any> {
    const out = await this.doAction("notify", convertNotifyOptions(options));
    return out;
  }
  /** You can use this action to get the number of commits of this branch. This is useful if you want to set the build number to the number of commits. See `fastlane actions number_of_commits` for more details.
   * @return The total number of all commits in current git branch
   */
  async numberOfCommits(options: NumberOfCommitsOptions): Promise<any> {
    const out = await this.doAction(
      "number_of_commits",
      convertNumberOfCommitsOptions(options)
    );
    return out;
  }
  /** Run the static analyzer tool [OCLint](http://oclint.org) for your project. You need to have a `compile_commands.json` file in your _fastlane_ directory or pass a path to your file.
   */
  async oclint(options: OclintOptions): Promise<any> {
    const out = await this.doAction("oclint", convertOclintOptions(options));
    return out;
  }
  /** You can use this action to automatically create or update a OneSignal application. You can also upload a `.p12` with password, a GCM key, or both.
   */
  async onesignal(options: OnesignalOptions): Promise<any> {
    const out = await this.doAction(
      "onesignal",
      convertOnesignalOptions(options)
    );
    return out;
  }
  /** _fastlane_ doesn't have crash reporting any more. Feel free to remove `opt_out_crash_reporting` from your Fastfile.
   */
  async optOutCrashReporting(
    options: OptOutCrashReportingOptions
  ): Promise<any> {
    const out = await this.doAction(
      "opt_out_crash_reporting",
      convertOptOutCrashReportingOptions(options)
    );
    return out;
  }
  /** By default, _fastlane_ will track what actions are being used. No personal/sensitive information is recorded.
Learn more at [https://docs.fastlane.tools/#metrics](https://docs.fastlane.tools/#metrics).
Add `opt_out_usage` at the top of your Fastfile to disable metrics collection.
    */
  async optOutUsage(options: OptOutUsageOptions): Promise<any> {
    const out = await this.doAction(
      "opt_out_usage",
      convertOptOutUsageOptions(options)
    );
    return out;
  }
  /** Additionally to the available options, you can also specify a block that only gets executed if a new profile was created. You can use it to upload the new profile to your server.
Use it like this:|
|
```ruby|
get_push_certificate(|
  new_profile: proc do|
    # your upload code|
  end|
)|
```|
>|
    */
  async pem(options: PemOptions): Promise<any> {
    const out = await this.doAction("pem", convertPemOptions(options));
    return out;
  }
  /** More details can be found on https://docs.fastlane.tools/actions/pilot/.
This integration will only do the TestFlight upload.
    */
  async pilot(options: PilotOptions): Promise<any> {
    const out = await this.doAction("pilot", convertPilotOptions(options));
    return out;
  }
  /** Test the syntax of your Podfile by linting the pod against the files of its directory
   */
  async podLibLint(options: PodLibLintOptions): Promise<any> {
    const out = await this.doAction(
      "pod_lib_lint",
      convertPodLibLintOptions(options)
    );
    return out;
  }
  /** Push a Podspec to Trunk or a private repository
   */
  async podPush(options: PodPushOptions): Promise<any> {
    const out = await this.doAction("pod_push", convertPodPushOptions(options));
    return out;
  }
  /** Use this action to create or update an item within your Podio app (see [https://help.podio.com/hc/en-us/articles/201019278-Creating-apps-](https://help.podio.com/hc/en-us/articles/201019278-Creating-apps-)).
Pass in dictionary with field keys and their values.
Field key is located under `Modify app` -> `Advanced` -> `Developer` -> `External ID` (see [https://developers.podio.com/examples/items](https://developers.podio.com/examples/items)).
    */
  async podioItem(options: PodioItemOptions): Promise<any> {
    const out = await this.doAction(
      "podio_item",
      convertPodioItemOptions(options)
    );
    return out;
  }
  /** More information: https://fastlane.tools/precheck
   * @return true if precheck passes, else, false
   */
  async precheck(options: PrecheckOptions): Promise<any> {
    const out = await this.doAction(
      "precheck",
      convertPrecheckOptions(options)
    );
    return out;
  }
  /** Alias for the [[`puts`]] action
   */
  async println(options: PrintlnOptions): Promise<any> {
    const out = await this.doAction("println", convertPrintlnOptions(options));
    return out;
  }
  /** Create new apps on App Store Connect and Apple Developer Portal via _produce_.
If the app already exists, `create_app_online` will not do anything.
For more information about _produce_, visit its documentation page: [https://docs.fastlane.tools/actions/produce/](https://docs.fastlane.tools/actions/produce/).
    */
  async produce(options: ProduceOptions): Promise<any> {
    const out = await this.doAction("produce", convertProduceOptions(options));
    return out;
  }
  /** You can use `prompt` to ask the user for a value or to just let the user confirm the next step.
When this is executed on a CI service, the passed `ci_input` value will be returned.
This action also supports multi-line inputs using the `multi_line_end_keyword` option.
    */
  async prompt(options: PromptOptions): Promise<string> {
    const out = await this.doAction("prompt", convertPromptOptions(options));
    return out;
  }
  /** If you only want to push the tags and nothing else, you can use the `push_git_tags` action
   */
  async pushGitTags(options: PushGitTagsOptions): Promise<any> {
    const out = await this.doAction(
      "push_git_tags",
      convertPushGitTagsOptions(options)
    );
    return out;
  }
  /** Lets you push your local commits to a remote git repo. Useful if you make local changes such as adding a version bump commit (using `commit_version_bump`) or a git tag (using 'add_git_tag') on a CI server, and you want to push those changes back to your canonical/main repo.
If this is a new branch, use the `set_upstream` option to set the remote branch as upstream.
    */
  async pushToGitRemote(options: PushToGitRemoteOptions): Promise<any> {
    const out = await this.doAction(
      "push_to_git_remote",
      convertPushToGitRemoteOptions(options)
    );
    return out;
  }
  /** Prints out the given text
   */
  async puts(options: PutsOptions): Promise<any> {
    const out = await this.doAction("puts", convertPutsOptions(options));
    return out;
  }
  /** This can be used for only specifying a version string in your podspec - and during your release process you'd read it from the podspec by running `version = read_podspec['version']` at the beginning of your lane.
Loads the specified (or the first found) podspec in the folder as JSON, so that you can inspect its `version`, `files` etc.
This can be useful when basing your release process on the version string only stored in one place - in the podspec.
As one of the first steps you'd read the podspec and its version and the rest of the workflow can use that version string (when e.g. creating a new git tag or a GitHub Release).
    */
  async readPodspec(options: ReadPodspecOptions): Promise<any> {
    const out = await this.doAction(
      "read_podspec",
      convertReadPodspecOptions(options)
    );
    return out;
  }
  /** Recreate not shared Xcode project schemes
   */
  async recreateSchemes(options: RecreateSchemesOptions): Promise<any> {
    const out = await this.doAction(
      "recreate_schemes",
      convertRecreateSchemesOptions(options)
    );
    return out;
  }
  /** This will register an iOS device with the Developer Portal so that you can include it in your provisioning profiles.
This is an optimistic action, in that it will only ever add a device to the member center. If the device has already been registered within the member center, it will be left alone in the member center.
The action will connect to the Apple Developer Portal using the username you specified in your `Appfile` with `apple_id`, but you can override it using the `:username` option.
    */
  async registerDevice(options: RegisterDeviceOptions): Promise<string> {
    const out = await this.doAction(
      "register_device",
      convertRegisterDeviceOptions(options)
    );
    return out;
  }
  /** This will register iOS/Mac devices with the Developer Portal so that you can include them in your provisioning profiles.
This is an optimistic action, in that it will only ever add new devices to the member center, and never remove devices. If a device which has already been registered within the member center is not passed to this action, it will be left alone in the member center and continue to work.
The action will connect to the Apple Developer Portal using the username you specified in your `Appfile` with `apple_id`, but you can override it using the `username` option, or by setting the env variable `ENV['DELIVER_USER']`.
    */
  async registerDevices(options: RegisterDevicesOptions): Promise<any> {
    const out = await this.doAction(
      "register_devices",
      convertRegisterDevicesOptions(options)
    );
    return out;
  }
  /** This action will reset your git repo to a clean state, discarding any uncommitted and untracked changes. Useful in case you need to revert the repo back to a clean state, e.g. after running _fastlane_.
Untracked files like `.env` will also be deleted, unless `:skip_clean` is true.
It's a pretty drastic action so it comes with a sort of safety latch. It will only proceed with the reset if this condition is met:|
|
>- You have called the `ensure_git_status_clean` action prior to calling this action. This ensures that your repo started off in a clean state, so the only things that will get destroyed by this action are files that are created as a byproduct of the fastlane run.|
>|
    */
  async resetGitRepo(options: ResetGitRepoOptions): Promise<any> {
    const out = await this.doAction(
      "reset_git_repo",
      convertResetGitRepoOptions(options)
    );
    return out;
  }
  /** Shutdown and reset running simulators
   */
  async resetSimulatorContents(
    options: ResetSimulatorContentsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "reset_simulator_contents",
      convertResetSimulatorContentsOptions(options)
    );
    return out;
  }
  /** Codesign an existing ipa file
   */
  async resign(options: ResignOptions): Promise<any> {
    const out = await this.doAction("resign", convertResignOptions(options));
    return out;
  }
  /** This action restore your file that was backuped with the `backup_file` action
   */
  async restoreFile(options: RestoreFileOptions): Promise<any> {
    const out = await this.doAction(
      "restore_file",
      convertRestoreFileOptions(options)
    );
    return out;
  }
  /** Print an ascii Rocket :rocket:. Useful after using _crashlytics_ or _pilot_ to indicate that your new build has been shipped to outer-space.
   */
  async rocket(options: RocketOptions): Promise<string> {
    const out = await this.doAction("rocket", convertRocketOptions(options));
    return out;
  }
  /** A wrapper around `rsync`, which is a tool that lets you synchronize files, including permissions and so on. For a more detailed information about `rsync`, please see [rsync(1) man page](https://linux.die.net/man/1/rsync).
   */
  async rsync(options: RsyncOptions): Promise<any> {
    const out = await this.doAction("rsync", convertRsyncOptions(options));
    return out;
  }
  /** Add this to your `Fastfile` to require a certain version of _ruby_.
Put it at the top of your `Fastfile` to ensure that _fastlane_ is executed appropriately.
    */
  async rubyVersion(options: RubyVersionOptions): Promise<any> {
    const out = await this.doAction(
      "ruby_version",
      convertRubyVersionOptions(options)
    );
    return out;
  }
  /** More information: https://docs.fastlane.tools/actions/scan/
   * @return Outputs has of results with :number_of_tests, :number_of_failures, :number_of_retries, :number_of_tests_excluding_retries, :number_of_failures_excluding_retries
   */
  async runTests(options: RunTestsOptions): Promise<any> {
    const out = await this.doAction(
      "run_tests",
      convertRunTestsOptions(options)
    );
    return out;
  }
  /** Upload a new build to Amazon S3 to distribute the build to beta testers.
Works for both Ad Hoc and Enterprise signed applications. This step will generate the necessary HTML, plist, and version files for you.
It is recommended to **not** store the AWS access keys in the `Fastfile`. The uploaded `version.json` file provides an easy way for apps to poll if a new update is available.
    */
  async s3(options: S3Options): Promise<any> {
    const out = await this.doAction("s3", convertS3Options(options));
    return out;
  }
  /** This action speaks the given text out loud
   */
  async say(options: SayOptions): Promise<any> {
    const out = await this.doAction("say", convertSayOptions(options));
    return out;
  }
  /** More information: https://docs.fastlane.tools/actions/scan/
   * @return Outputs has of results with :number_of_tests, :number_of_failures, :number_of_retries, :number_of_tests_excluding_retries, :number_of_failures_excluding_retries
   */
  async scan(options: ScanOptions): Promise<any> {
    const out = await this.doAction("scan", convertScanOptions(options));
    return out;
  }
  /** Transfer files via SCP
   */
  async scp(options: ScpOptions): Promise<any> {
    const out = await this.doAction("scp", convertScpOptions(options));
    return out;
  }
  /** Alias for the [[`captureAndroidScreenshots`]] action
   */
  async screengrab(options: ScreengrabOptions): Promise<any> {
    const out = await this.doAction(
      "screengrab",
      convertScreengrabOptions(options)
    );
    return out;
  }
  /** This action will set the **build number** according to what the SCM HEAD reports.
Currently supported SCMs are svn (uses root revision), git-svn (uses svn revision) and git (uses short hash) and mercurial (uses short hash or revision number).
There is an option, `:use_hg_revision_number`, which allows to use mercurial revision number instead of hash.
    */
  async setBuildNumberRepository(
    options: SetBuildNumberRepositoryOptions
  ): Promise<any> {
    const out = await this.doAction(
      "set_build_number_repository",
      convertSetBuildNumberRepositoryOptions(options)
    );
    return out;
  }
  /** This is useful if you have only one changelog for all languages.
You can store the changelog in `./changelog.txt` and it will automatically get loaded from there. This integration is useful if you support e.g. 10 languages and want to use the same "What's new"-text for all languages.
Defining the version is optional. _fastlane_ will try to automatically detect it if you don't provide one.
    */
  async setChangelog(options: SetChangelogOptions): Promise<any> {
    const out = await this.doAction(
      "set_changelog",
      convertSetChangelogOptions(options)
    );
    return out;
  }
  /** Creates a new release on GitHub. You must provide your GitHub Personal token (get one from [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)), the repository name and tag name. By default, that's `master`.
If the tag doesn't exist, one will be created on the commit or branch passed in as commitish.
Out parameters provide the release's id, which can be used for later editing and the release HTML link to GitHub. You can also specify a list of assets to be uploaded to the release with the `:upload_assets` parameter.
    * @return A hash containing all relevant information of this release
Access things like 'html_url', 'tag_name', 'name', 'body' 
    */
  async setGithubRelease(options: SetGithubReleaseOptions): Promise<any> {
    const out = await this.doAction(
      "set_github_release",
      convertSetGithubReleaseOptions(options)
    );
    return out;
  }
  /** Sets value to Info.plist of your project as native Ruby data structures
   */
  async setInfoPlistValue(options: SetInfoPlistValueOptions): Promise<any> {
    const out = await this.doAction(
      "set_info_plist_value",
      convertSetInfoPlistValueOptions(options)
    );
    return out;
  }
  /** Adds a key to [cocoapods-keys](https://github.com/orta/cocoapods-keys)
   */
  async setPodKey(options: SetPodKeyOptions): Promise<any> {
    const out = await this.doAction(
      "set_pod_key",
      convertSetPodKeyOptions(options)
    );
    return out;
  }
  /** - Creates a new temporary keychain for use with match|
- Switches match to `readonly` mode to not create new profiles/cert on CI|
- Sets up log and test result paths to be easily collectible|
>|
This action helps with CI integration. Add this to the top of your Fastfile if you use CI.
    */
  async setupCi(options: SetupCiOptions): Promise<any> {
    const out = await this.doAction("setup_ci", convertSetupCiOptions(options));
    return out;
  }
  /** - Creates a new temporary keychain for use with match|
- Switches match to `readonly` mode to not create new profiles/cert on CI|
- Sets up log and test result paths to be easily collectible|
>|
This action helps with CircleCI integration. Add this to the top of your Fastfile if you use CircleCI.
    */
  async setupCircleCi(options: SetupCircleCiOptions): Promise<any> {
    const out = await this.doAction(
      "setup_circle_ci",
      convertSetupCircleCiOptions(options)
    );
    return out;
  }
  /** - Adds and unlocks keychains from Jenkins 'Keychains and Provisioning Profiles Plugin'|
- Sets unlocked keychain to be used by Match|
- Sets code signing identity from Jenkins 'Keychains and Provisioning Profiles Plugin'|
- Sets output directory to './output' (gym, scan and backup_xcarchive)|
- Sets derived data path to './derivedData' (xcodebuild, gym, scan and clear_derived_data, carthage)|
- Produce result bundle (gym and scan)|
>|
This action helps with Jenkins integration. Creates own derived data for each job. All build results like IPA files and archives will be stored in the `./output` directory.
The action also works with [Keychains and Provisioning Profiles Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Keychains+and+Provisioning+Profiles+Plugin), the selected keychain will be automatically unlocked and the selected code signing identity will be used.
[Match](https://docs.fastlane.tools/actions/match/) will be also set up to use the unlocked keychain and set in read-only mode, if its environment variables were not yet defined.
By default this action will only work when _fastlane_ is executed on a CI system.
    */
  async setupJenkins(options: SetupJenkinsOptions): Promise<any> {
    const out = await this.doAction(
      "setup_jenkins",
      convertSetupJenkinsOptions(options)
    );
    return out;
  }
  /** - Creates a new temporary keychain for use with match|
- Switches match to `readonly` mode to not create new profiles/cert on CI|
>|
This action helps with Travis integration. Add this to the top of your Fastfile if you use Travis.
    */
  async setupTravis(options: SetupTravisOptions): Promise<any> {
    const out = await this.doAction(
      "setup_travis",
      convertSetupTravisOptions(options)
    );
    return out;
  }
  /** Allows running an arbitrary shell command.
Be aware of a specific behavior of `sh` action with regard to the working directory. For details, refer to [Advanced](https://docs.fastlane.tools/advanced/#directory-behavior).
    * @return Outputs the string and executes it. When running in tests, it returns the actual command instead of executing it 
    */
  async sh(options: ShOptions): Promise<string> {
    const out = await this.doAction("sh", convertShOptions(options));
    return out;
  }
  /** **Note**: It is recommended to use [match](https://docs.fastlane.tools/actions/match/) according to the [codesigning.guide](https://codesigning.guide) for generating and maintaining your provisioning profiles. Use _sigh_ directly only if you want full control over what's going on and know more about codesigning.
   * @return The UUID of the profile sigh just fetched/generated
   */
  async sigh(options: SighOptions): Promise<string> {
    const out = await this.doAction("sigh", convertSighOptions(options));
    return out;
  }
  /** Tell _fastlane_ to not automatically create a `fastlane/README.md` when running _fastlane_. You can always trigger the creation of this file manually by running `fastlane docs`.
   */
  async skipDocs(options: SkipDocsOptions): Promise<any> {
    const out = await this.doAction(
      "skip_docs",
      convertSkipDocsOptions(options)
    );
    return out;
  }
  /** Create an Incoming WebHook and export this as `SLACK_URL`. Can send a message to **#channel** (by default), a direct message to **@username** or a message to a private group **group** with success (green) or failure (red) status.
   */
  async slack(options: SlackOptions): Promise<any> {
    const out = await this.doAction("slack", convertSlackOptions(options));
    return out;
  }
  /** Slather works with multiple code coverage formats, including Xcode 7 code coverage.
Slather is available at [https://github.com/SlatherOrg/slather](https://github.com/SlatherOrg/slather).
    */
  async slather(options: SlatherOptions): Promise<any> {
    const out = await this.doAction("slather", convertSlatherOptions(options));
    return out;
  }
  /** Alias for the [[`captureIosScreenshots`]] action
   */
  async snapshot(options: SnapshotOptions): Promise<any> {
    const out = await this.doAction(
      "snapshot",
      convertSnapshotOptions(options)
    );
    return out;
  }
  /** See [http://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner](http://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) for details.
It can process unit test results if formatted as junit report as shown in [xctest](https://docs.fastlane.tools/actions/xctest/) action. It can also integrate coverage reports in Cobertura format, which can be transformed into by the [slather](https://docs.fastlane.tools/actions/slather/) action.
    * @return The exit code of the sonar-scanner binary 
    */
  async sonar(options: SonarOptions): Promise<any> {
    const out = await this.doAction("sonar", convertSonarOptions(options));
    return out;
  }
  /** Generate docs using SourceDocs
   */
  async sourcedocs(options: SourcedocsOptions): Promise<any> {
    const out = await this.doAction(
      "sourcedocs",
      convertSourcedocsOptions(options)
    );
    return out;
  }
  /** Find, print, and copy Spaceship logs
   * @return The array of Spaceship logs
   */
  async spaceshipLogs(options: SpaceshipLogsOptions): Promise<any> {
    const out = await this.doAction(
      "spaceship_logs",
      convertSpaceshipLogsOptions(options)
    );
    return out;
  }
  /** Print out Spaceship stats from this session (number of request to each domain)
   */
  async spaceshipStats(options: SpaceshipStatsOptions): Promise<any> {
    const out = await this.doAction(
      "spaceship_stats",
      convertSpaceshipStatsOptions(options)
    );
    return out;
  }
  /** Upload dSYM file to [Splunk MINT](https://mint.splunk.com/)
   */
  async splunkmint(options: SplunkmintOptions): Promise<any> {
    const out = await this.doAction(
      "splunkmint",
      convertSplunkmintOptions(options)
    );
    return out;
  }
  /** Runs Swift Package Manager on your project
   */
  async spm(options: SpmOptions): Promise<any> {
    const out = await this.doAction("spm", convertSpmOptions(options));
    return out;
  }
  /** Lets you execute remote commands via ssh using username/password or ssh-agent. If one of the commands in command-array returns non 0, it fails.
   */
  async ssh(options: SshOptions): Promise<any> {
    const out = await this.doAction("ssh", convertSshOptions(options));
    return out;
  }
  /** More information: https://docs.fastlane.tools/actions/supply/
   */
  async supply(options: SupplyOptions): Promise<any> {
    const out = await this.doAction("supply", convertSupplyOptions(options));
    return out;
  }
  /** Run swift code validation using SwiftLint
   */
  async swiftlint(options: SwiftlintOptions): Promise<any> {
    const out = await this.doAction(
      "swiftlint",
      convertSwiftlintOptions(options)
    );
    return out;
  }
  /** More information: https://docs.fastlane.tools/actions/match/
   */
  async syncCodeSigning(options: SyncCodeSigningOptions): Promise<any> {
    const out = await this.doAction(
      "sync_code_signing",
      convertSyncCodeSigningOptions(options)
    );
    return out;
  }
  /** Specify the Team ID you want to use for the Apple Developer Portal
   */
  async teamId(options: TeamIdOptions): Promise<any> {
    const out = await this.doAction("team_id", convertTeamIdOptions(options));
    return out;
  }
  /** Set a team to use by its name
   */
  async teamName(options: TeamNameOptions): Promise<any> {
    const out = await this.doAction(
      "team_name",
      convertTeamNameOptions(options)
    );
    return out;
  }
  /** You can retrieve your API key on [your settings page](https://free.testfairy.com/settings/)
   */
  async testfairy(options: TestfairyOptions): Promise<any> {
    const out = await this.doAction(
      "testfairy",
      convertTestfairyOptions(options)
    );
    return out;
  }
  /** More details can be found on https://docs.fastlane.tools/actions/pilot/.
This integration will only do the TestFlight upload.
    */
  async testflight(options: TestflightOptions): Promise<any> {
    const out = await this.doAction(
      "testflight",
      convertTestflightOptions(options)
    );
    return out;
  }
  /** Convert the Xcode plist log to a JUnit report
   * @return A hash with the key being the path of the generated file, the value being if the tests were successful
   */
  async trainer(options: TrainerOptions): Promise<any> {
    const out = await this.doAction("trainer", convertTrainerOptions(options));
    return out;
  }
  /** More information: [http://tryouts.readthedocs.org/en/latest/releases.html#create-release](http://tryouts.readthedocs.org/en/latest/releases.html#create-release)
   */
  async tryouts(options: TryoutsOptions): Promise<any> {
    const out = await this.doAction("tryouts", convertTryoutsOptions(options));
    return out;
  }
  /** Post a tweet on Twitter. Requires you to setup an app on [twitter.com](https://twitter.com) and obtain `consumer` and `access_token`.
   */
  async twitter(options: TwitterOptions): Promise<any> {
    const out = await this.doAction("twitter", convertTwitterOptions(options));
    return out;
  }
  /** Post a message to [Typetalk](https://www.typetalk.com/)
   */
  async typetalk(options: TypetalkOptions): Promise<any> {
    const out = await this.doAction(
      "typetalk",
      convertTypetalkOptions(options)
    );
    return out;
  }
  /** Unlocks the given keychain file and adds it to the keychain search list.
Keychains can be replaced with `add_to_search_list: :replace`.
    */
  async unlockKeychain(options: UnlockKeychainOptions): Promise<any> {
    const out = await this.doAction(
      "unlock_keychain",
      convertUnlockKeychainOptions(options)
    );
    return out;
  }
  /** Updates the App Group Identifiers in the given Entitlements file, so you can have app groups for the app store build and app groups for an enterprise build.
   */
  async updateAppGroupIdentifiers(
    options: UpdateAppGroupIdentifiersOptions
  ): Promise<any> {
    const out = await this.doAction(
      "update_app_group_identifiers",
      convertUpdateAppGroupIdentifiersOptions(options)
    );
    return out;
  }
  /** Update an app identifier by either setting `CFBundleIdentifier` or `PRODUCT_BUNDLE_IDENTIFIER`, depending on which is already in use.
   */
  async updateAppIdentifier(options: UpdateAppIdentifierOptions): Promise<any> {
    const out = await this.doAction(
      "update_app_identifier",
      convertUpdateAppIdentifierOptions(options)
    );
    return out;
  }
  /** Configures Xcode's Codesigning options of all targets in the project
   * @return The current status (boolean) of codesigning after modification
   */
  async updateCodeSigningSettings(
    options: UpdateCodeSigningSettingsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "update_code_signing_settings",
      convertUpdateCodeSigningSettingsOptions(options)
    );
    return out;
  }
  /** This action will update fastlane to the most recent version - major version updates will not be performed automatically, as they might include breaking changes. If an update was performed, fastlane will be restarted before the run continues.

If you are using rbenv or rvm, everything should be good to go. However, if you are using the system's default ruby, some additional setup is needed for this action to work correctly. In short, fastlane needs to be able to access your gem library without running in `sudo` mode.

The simplest possible fix for this is putting the following lines into your `~/.bashrc` or `~/.zshrc` file:|
|
```bash|
export GEM_HOME=~/.gems|
export PATH=$PATH:~/.gems/bin|
```|
>|
After the above changes, restart your terminal, then run `mkdir $GEM_HOME` to create the new gem directory. After this, you're good to go!

Recommended usage of the `update_fastlane` action is at the top inside of the `before_all` block, before running any other action.
    */
  async updateFastlane(options: UpdateFastlaneOptions): Promise<any> {
    const out = await this.doAction(
      "update_fastlane",
      convertUpdateFastlaneOptions(options)
    );
    return out;
  }
  /** Updates the iCloud Container Identifiers in the given Entitlements file, so you can use different iCloud containers for different builds like Adhoc, App Store, etc.
   */
  async updateIcloudContainerIdentifiers(
    options: UpdateIcloudContainerIdentifiersOptions
  ): Promise<any> {
    const out = await this.doAction(
      "update_icloud_container_identifiers",
      convertUpdateIcloudContainerIdentifiersOptions(options)
    );
    return out;
  }
  /** This action allows you to modify your `Info.plist` file before building. This may be useful if you want a separate build for alpha, beta or nightly builds, but don't want a separate target.
   */
  async updateInfoPlist(options: UpdateInfoPlistOptions): Promise<any> {
    const out = await this.doAction(
      "update_info_plist",
      convertUpdateInfoPlistOptions(options)
    );
    return out;
  }
  /** Updates the Keychain Group Access Groups in the given Entitlements file, so you can have keychain access groups for the app store build and keychain access groups for an enterprise build.
   */
  async updateKeychainAccessGroups(
    options: UpdateKeychainAccessGroupsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "update_keychain_access_groups",
      convertUpdateKeychainAccessGroupsOptions(options)
    );
    return out;
  }
  /** This action allows you to modify any value inside any `plist` file.
   */
  async updatePlist(options: UpdatePlistOptions): Promise<any> {
    const out = await this.doAction(
      "update_plist",
      convertUpdatePlistOptions(options)
    );
    return out;
  }
  /** Updated code signing settings from 'Automatic' to a specific profile
   */
  async updateProjectCodeSigning(
    options: UpdateProjectCodeSigningOptions
  ): Promise<any> {
    const out = await this.doAction(
      "update_project_code_signing",
      convertUpdateProjectCodeSigningOptions(options)
    );
    return out;
  }
  /** You should check out the [code signing guide](https://docs.fastlane.tools/codesigning/getting-started/) before using this action.
This action retrieves a provisioning profile UUID from a provisioning profile (`.mobileprovision`) to set up the Xcode projects' code signing settings in `*.xcodeproj/project.pbxproj`.
The `:target_filter` value can be used to only update code signing for the specified targets.
The `:build_configuration` value can be used to only update code signing for the specified build configurations of the targets passing through the `:target_filter`.
Example usage is the WatchKit Extension or WatchKit App, where you need separate provisioning profiles.
Example: `update_project_provisioning(xcodeproj: "..", target_filter: ".*WatchKit App.*")`.
    */
  async updateProjectProvisioning(
    options: UpdateProjectProvisioningOptions
  ): Promise<any> {
    const out = await this.doAction(
      "update_project_provisioning",
      convertUpdateProjectProvisioningOptions(options)
    );
    return out;
  }
  /** This action updates the Developer Team ID of your Xcode project.
   */
  async updateProjectTeam(options: UpdateProjectTeamOptions): Promise<any> {
    const out = await this.doAction(
      "update_project_team",
      convertUpdateProjectTeamOptions(options)
    );
    return out;
  }
  /** This action updates the `AirshipConfig.plist` needed to configure the Urban Airship SDK at runtime, allowing keys and secrets to easily be set for the Enterprise and Production versions of the application.
   */
  async updateUrbanAirshipConfiguration(
    options: UpdateUrbanAirshipConfigurationOptions
  ): Promise<any> {
    const out = await this.doAction(
      "update_urban_airship_configuration",
      convertUpdateUrbanAirshipConfigurationOptions(options)
    );
    return out;
  }
  /** This action allows you to update the URL schemes of the app before building it.
For example, you can use this to set a different URL scheme for the alpha or beta version of the app.
    */
  async updateUrlSchemes(options: UpdateUrlSchemesOptions): Promise<any> {
    const out = await this.doAction(
      "update_url_schemes",
      convertUpdateUrlSchemesOptions(options)
    );
    return out;
  }
  /** Upload App Privacy Details for an app in App Store Connect. For more detail information, view https://docs.fastlane.tools/uploading-app-privacy-details
   */
  async uploadAppPrivacyDetailsToAppStore(
    options: UploadAppPrivacyDetailsToAppStoreOptions
  ): Promise<any> {
    const out = await this.doAction(
      "upload_app_privacy_details_to_app_store",
      convertUploadAppPrivacyDetailsToAppStoreOptions(options)
    );
    return out;
  }
  /** This action allows you to upload symbolication files to Crashlytics. It's extra useful if you use it to download the latest dSYM files from Apple when you use Bitcode. This action will not fail the build if one of the uploads failed. The reason for that is that sometimes some of dSYM files are invalid, and we don't want them to fail the complete build.
   */
  async uploadSymbolsToCrashlytics(
    options: UploadSymbolsToCrashlyticsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "upload_symbols_to_crashlytics",
      convertUploadSymbolsToCrashlyticsOptions(options)
    );
    return out;
  }
  /** This action allows you to upload symbolication files to Sentry. It's extra useful if you use it to download the latest dSYM files from Apple when you use Bitcode.
   * @return The uploaded dSYM path(s)
   */
  async uploadSymbolsToSentry(
    options: UploadSymbolsToSentryOptions
  ): Promise<any> {
    const out = await this.doAction(
      "upload_symbols_to_sentry",
      convertUploadSymbolsToSentryOptions(options)
    );
    return out;
  }
  /** Using _upload_to_app_store_ after _build_app_ and _capture_screenshots_ will automatically upload the latest ipa and screenshots with no other configuration.

If you don't want to verify an HTML preview for App Store builds, use the `:force` option.
This is useful when running _fastlane_ on your Continuous Integration server:
`_upload_to_app_store_(force: true)`
If your account is on multiple teams and you need to tell the `iTMSTransporter` which 'provider' to use, you can set the `:itc_provider` option to pass this info.
    */
  async uploadToAppStore(options: UploadToAppStoreOptions): Promise<any> {
    const out = await this.doAction(
      "upload_to_app_store",
      convertUploadToAppStoreOptions(options)
    );
    return out;
  }
  /** More information: https://docs.fastlane.tools/actions/supply/
   */
  async uploadToPlayStore(options: UploadToPlayStoreOptions): Promise<any> {
    const out = await this.doAction(
      "upload_to_play_store",
      convertUploadToPlayStoreOptions(options)
    );
    return out;
  }
  /** More information: https://docs.fastlane.tools/actions/upload_to_play_store_internal_app_sharing/
   * @return Returns a string containing the download URL for the uploaded APK/AAB (or array of strings if multiple were uploaded).
   */
  async uploadToPlayStoreInternalAppSharing(
    options: UploadToPlayStoreInternalAppSharingOptions
  ): Promise<any> {
    const out = await this.doAction(
      "upload_to_play_store_internal_app_sharing",
      convertUploadToPlayStoreInternalAppSharingOptions(options)
    );
    return out;
  }
  /** More details can be found on https://docs.fastlane.tools/actions/pilot/.
This integration will only do the TestFlight upload.
    */
  async uploadToTestflight(options: UploadToTestflightOptions): Promise<any> {
    const out = await this.doAction(
      "upload_to_testflight",
      convertUploadToTestflightOptions(options)
    );
    return out;
  }
  /** Use this action to test and validate your private key json key file used to connect and authenticate with the Google Play API
   */
  async validatePlayStoreJsonKey(
    options: ValidatePlayStoreJsonKeyOptions
  ): Promise<any> {
    const out = await this.doAction(
      "validate_play_store_json_key",
      convertValidatePlayStoreJsonKeyOptions(options)
    );
    return out;
  }
  /** Verifies that the built app was built using the expected build resources. This is relevant for people who build on machines that are used to build apps with different profiles, certificates and/or bundle identifiers to guard against configuration mistakes.
   */
  async verifyBuild(options: VerifyBuildOptions): Promise<any> {
    const out = await this.doAction(
      "verify_build",
      convertVerifyBuildOptions(options)
    );
    return out;
  }
  /** Runs a check against all keys specified in your Podfile to make sure they're more than a single character long. This is to ensure you don't deploy with stubbed keys.
   */
  async verifyPodKeys(options: VerifyPodKeysOptions): Promise<any> {
    const out = await this.doAction(
      "verify_pod_keys",
      convertVerifyPodKeysOptions(options)
    );
    return out;
  }
  /** This action was implemented after the recent Xcode attack to make sure you're not using a [hacked Xcode installation](http://researchcenter.paloaltonetworks.com/2015/09/novel-malware-xcodeghost-modifies-xcode-infects-apple-ios-apps-and-hits-app-store/).
   */
  async verifyXcode(options: VerifyXcodeOptions): Promise<any> {
    const out = await this.doAction(
      "verify_xcode",
      convertVerifyXcodeOptions(options)
    );
    return out;
  }
  /** You can use this action to manipulate any 'version' variable contained in a ruby file.
For example, you can use it to bump the version of a CocoaPods' podspec file.
It also supports versions that are not semantic: `1.4.14.4.1`.
For such versions, there is an option to change the appendix (e.g. `4.1`).
    */
  async versionBumpPodspec(options: VersionBumpPodspecOptions): Promise<any> {
    const out = await this.doAction(
      "version_bump_podspec",
      convertVersionBumpPodspecOptions(options)
    );
    return out;
  }
  /** Receive the version number from a podspec file
   */
  async versionGetPodspec(options: VersionGetPodspecOptions): Promise<any> {
    const out = await this.doAction(
      "version_get_podspec",
      convertVersionGetPodspecOptions(options)
    );
    return out;
  }
  /** Archives the project using `xcodebuild`
   */
  async xcarchive(options: XcarchiveOptions): Promise<any> {
    const out = await this.doAction(
      "xcarchive",
      convertXcarchiveOptions(options)
    );
    return out;
  }
  /** Builds the project using `xcodebuild`
   */
  async xcbuild(options: XcbuildOptions): Promise<any> {
    const out = await this.doAction("xcbuild", convertXcbuildOptions(options));
    return out;
  }
  /** Cleans the project using `xcodebuild`
   */
  async xcclean(options: XccleanOptions): Promise<any> {
    const out = await this.doAction("xcclean", convertXccleanOptions(options));
    return out;
  }
  /** Exports the project using `xcodebuild`
   */
  async xcexport(options: XcexportOptions): Promise<any> {
    const out = await this.doAction(
      "xcexport",
      convertXcexportOptions(options)
    );
    return out;
  }
  /** Makes sure a specific version of Xcode is installed. If that's not the case, it will automatically be downloaded by the [xcode_install](https://github.com/neonichu/xcode-install) gem. This will make sure to use the correct Xcode for later actions.
   * @return The path to the newly installed Xcode version
   */
  async xcodeInstall(options: XcodeInstallOptions): Promise<string> {
    const out = await this.doAction(
      "xcode_install",
      convertXcodeInstallOptions(options)
    );
    return out;
  }
  /** Select and build with the Xcode installed at the provided path.
Use the `xcversion` action if you want to select an Xcode:
- Based on a version specifier or
- You don't have known, stable paths, as may happen in a CI environment.
    */
  async xcodeSelect(options: XcodeSelectOptions): Promise<any> {
    const out = await this.doAction(
      "xcode_select",
      convertXcodeSelectOptions(options)
    );
    return out;
  }
  /** This action downloads assets from your Xcode Server Bot (works with Xcode Server using Xcode 6 and 7. By default, this action downloads all assets, unzips them and deletes everything except for the `.xcarchive`.
If you'd like to keep all downloaded assets, pass `keep_all_assets: true`.
This action returns the path to the downloaded assets folder and puts into shared values the paths to the asset folder and to the `.xcarchive` inside it.
    */
  async xcodeServerGetAssets(
    options: XcodeServerGetAssetsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "xcode_server_get_assets",
      convertXcodeServerGetAssetsOptions(options)
    );
    return out;
  }
  /** **Note**: `xcodebuild` is a complex command, so it is recommended to use [_gym_](https://docs.fastlane.tools/actions/gym/) for building your ipa file and [_scan_](https://docs.fastlane.tools/actions/scan/) for testing your app instead.
   */
  async xcodebuild(options: XcodebuildOptions): Promise<any> {
    const out = await this.doAction(
      "xcodebuild",
      convertXcodebuildOptions(options)
    );
    return out;
  }
  /** Create nice code coverage reports and post coverage summaries on Slack *(xcov gem is required)*.
More information: [https://github.com/nakiostudio/xcov](https://github.com/nakiostudio/xcov).
    */
  async xcov(options: XcovOptions): Promise<any> {
    const out = await this.doAction("xcov", convertXcovOptions(options));
    return out;
  }
  /** Runs tests on the given simulator
   */
  async xctest(options: XctestOptions): Promise<any> {
    const out = await this.doAction("xctest", convertXctestOptions(options));
    return out;
  }
  /** You can run any `xctool` action. This will require having [xctool](https://github.com/facebook/xctool) installed through [Homebrew](http://brew.sh).
It is recommended to store the build configuration in the `.xctool-args` file.
More information: [https://docs.fastlane.tools/actions/xctool/](https://docs.fastlane.tools/actions/xctool/).
    */
  async xctool(options: XctoolOptions): Promise<any> {
    const out = await this.doAction("xctool", convertXctoolOptions(options));
    return out;
  }
  /** Finds and selects a version of an installed Xcode that best matches the provided [`Gem::Version` requirement specifier](http://www.rubydoc.info/github/rubygems/rubygems/Gem/Version)
You can either manually provide a specific version using `version:` or you make use of the `.xcode-version` file.
    */
  async xcversion(options: XcversionOptions): Promise<any> {
    const out = await this.doAction(
      "xcversion",
      convertXcversionOptions(options)
    );
    return out;
  }
  /** Compress a file or folder to a zip
   * @return The path to the output zip file
   */
  async zip(options: ZipOptions): Promise<string> {
    const out = await this.doAction("zip", convertZipOptions(options));
    return out;
  }
}
const withFastlane = async (
  f: (fastlane: Fastlane) => Promise<any>,
  {
    port = 2000,
    isInteractive = true,
  }: { port?: number; isInteractive?: boolean }
) => {
  const fastlane = new Fastlane(port, isInteractive);
  try {
    const result = await f(fastlane);
    fastlane.close();
    return result;
  } catch (e) {
    await fastlane.close();
    throw e;
  }
};
export default Fastlane;
export { Fastlane, withFastlane };
