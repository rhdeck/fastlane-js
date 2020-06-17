import { Fastlane as FastlaneBase } from "@fastlanejs/base";

/** @interface AdbOptions
 * @property {string} serial Android serial of the device to use for this command
 * @property {string} command All commands you want to pass to the adb command, e.g. `kill-server`
 * @property {string} adbPath The path to your `adb` binary (can be left blank if the ANDROID_SDK_ROOT environment variable is set)
 */
interface AdbOptions {
  serial: string;
  command?: string;
  adbPath?: string;
}

/** @interface AdbDevicesOptions
 * @property {string} adbPath The path to your `adb` binary (can be left blank if the ANDROID_SDK_ROOT environment variable is set)
 */
interface AdbDevicesOptions {
  adbPath?: string;
}

/** @interface AddExtraPlatformsOptions
 * @property {string[]} platforms The optional extra platforms to support
 */
interface AddExtraPlatformsOptions {
  platforms: string[];
}

/** @interface AddGitTagOptions
 * @property {string} tag Define your own tag text. This will replace all other parameters
 * @property {string} grouping Is used to keep your tags organised under one 'folder'
 * @property {string} prefix Anything you want to put in front of the version number (e.g. 'v')
 * @property {string} postfix Anything you want to put at the end of the version number (e.g. '-RC1')
 * @property {any} buildNumber The build number. Defaults to the result of increment_build_number if you're using it
 * @property {string} message The tag message. Defaults to the tag's name
 * @property {string} commit The commit or object where the tag will be set. Defaults to the current HEAD
 * @property {any} force Force adding the tag
 * @property {any} sign Make a GPG-signed tag, using the default e-mail address's key
 */
interface AddGitTagOptions {
  tag?: string;
  grouping: string;
  prefix: string;
  postfix: string;
  buildNumber: any;
  message?: string;
  commit?: string;
  force?: any;
  sign?: any;
}

/** @interface AppStoreBuildNumberOptions
 * @property {any} initialBuildNumber sets the build number to given value if no build is in current train
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {any} live Query the live version (ready-for-sale)
 * @property {string} version The version number whose latest build number we want
 * @property {string} platform The platform to use (optional)
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 */
interface AppStoreBuildNumberOptions {
  initialBuildNumber: any;
  appIdentifier: string;
  username: string;
  teamId?: any;
  live?: any;
  version?: string;
  platform?: string;
  teamName?: string;
}

/** @interface AppaloosaOptions
 * @property {string} binary Binary path. Optional for ipa if you use the `ipa` or `xcodebuild` action
 * @property {string} apiToken Your API token
 * @property {string} storeId Your Store id
 * @property {string} groupIds Your app is limited to special users? Give us the group ids
 * @property {string} screenshots Add some screenshots application to your store or hit [enter]
 * @property {string} locale Select the folder locale for your screenshots
 * @property {string} device Select the device format for your screenshots
 * @property {string} description Your app description
 */
interface AppaloosaOptions {
  binary: string;
  apiToken: string;
  storeId: string;
  groupIds?: string;
  screenshots: string;
  locale?: string;
  device?: string;
  description?: string;
}

/** @interface AppetizeOptions
 * @property {string} apiHost Appetize API host
 * @property {string} apiToken Appetize.io API Token
 * @property {string} url URL from which the ipa file can be fetched. Alternative to :path
 * @property {string} platform Platform. Either `ios` or `android`
 * @property {string} path Path to zipped build on the local filesystem. Either this or `url` must be specified
 * @property {string} publicKey If not provided, a new app will be created. If provided, the existing build will be overwritten
 * @property {string} note Notes you wish to add to the uploaded app
 */
interface AppetizeOptions {
  apiHost: string;
  apiToken: string;
  url?: string;
  platform: string;
  path?: string;
  publicKey?: string;
  note?: string;
}

/** @interface AppetizeViewingUrlGeneratorOptions
 * @property {string} publicKey Public key of the app you wish to update
 * @property {string} baseUrl Base URL of Appetize service
 * @property {string} device Device type: iphone4s, iphone5s, iphone6, iphone6plus, ipadair, iphone6s, iphone6splus, ipadair2, nexus5, nexus7 or nexus9
 * @property {string} scale Scale of the simulator
 * @property {string} orientation Device orientation
 * @property {string} language Device language in ISO 639-1 language code, e.g. 'de'
 * @property {string} color Color of the device
 * @property {string} launchUrl Specify a deep link to open when your app is launched
 * @property {string} osVersion The operating system version on which to run your app, e.g. 10.3, 8.0
 * @property {string} params Specify params value to be passed to Appetize
 * @property {string} proxy Specify a HTTP proxy to be passed to Appetize
 */
interface AppetizeViewingUrlGeneratorOptions {
  publicKey: string;
  baseUrl?: string;
  device: string;
  scale?: string;
  orientation: string;
  language?: string;
  color: string;
  launchUrl?: string;
  osVersion?: string;
  params?: string;
  proxy?: string;
}

/** @interface AppiumOptions
 * @property {string} platform Appium platform name
 * @property {string} specPath Path to Appium spec directory
 * @property {string} appPath Path to Appium target app file
 * @property {any} invokeAppiumServer Use local Appium server with invoke automatically
 * @property {string} host Hostname of Appium server
 * @property {any} port HTTP port of Appium server
 * @property {string} appiumPath Path to Appium executable
 * @property {{string: string}} caps Hash of caps for Appium::Driver
 * @property {{string: string}} appiumLib Hash of appium_lib for Appium::Driver
 */
interface AppiumOptions {
  platform: string;
  specPath: string;
  appPath: string;
  invokeAppiumServer?: any;
  host?: string;
  port?: any;
  appiumPath?: string;
  caps?: { string: string };
  appiumLib?: { string: string };
}

/** @interface AppledocOptions
 * @property {any} input Path(s) to source file directories or individual source files. Accepts a single path or an array of paths
 * @property {string} output Output path
 * @property {string} templates Template files path
 * @property {string} docsetInstallPath DocSet installation path
 * @property {string} include Include static doc(s) at path
 * @property {any} ignore Ignore given path
 * @property {any} excludeOutput Exclude given path from output
 * @property {string} indexDesc File including main index description
 * @property {string} projectName Project name
 * @property {string} projectVersion Project version
 * @property {string} projectCompany Project company
 * @property {string} companyId Company UTI (i.e. reverse DNS name)
 * @property {any} createHtml Create HTML
 * @property {any} createDocset Create documentation set
 * @property {any} installDocset Install documentation set to Xcode
 * @property {any} publishDocset Prepare DocSet for publishing
 * @property {any} noCreateDocset Create HTML and skip creating a DocSet
 * @property {string} htmlAnchors The html anchor format to use in DocSet HTML
 * @property {any} cleanOutput Remove contents of output path before starting
 * @property {string} docsetBundleId DocSet bundle identifier
 * @property {string} docsetBundleName DocSet bundle name
 * @property {string} docsetDesc DocSet description
 * @property {string} docsetCopyright DocSet copyright message
 * @property {string} docsetFeedName DocSet feed name
 * @property {string} docsetFeedUrl DocSet feed URL
 * @property {string} docsetFeedFormats DocSet feed formats. Separated by a comma [atom,xml]
 * @property {string} docsetPackageUrl DocSet package (.xar) URL
 * @property {string} docsetFallbackUrl DocSet fallback URL
 * @property {string} docsetPublisherId DocSet publisher identifier
 * @property {string} docsetPublisherName DocSet publisher name
 * @property {string} docsetMinXcodeVersion DocSet min. Xcode version
 * @property {string} docsetPlatformFamily DocSet platform family
 * @property {string} docsetCertIssuer DocSet certificate issuer
 * @property {string} docsetCertSigner DocSet certificate signer
 * @property {string} docsetBundleFilename DocSet bundle filename
 * @property {string} docsetAtomFilename DocSet atom feed filename
 * @property {string} docsetXmlFilename DocSet xml feed filename
 * @property {string} docsetPackageFilename DocSet package (.xar,.tgz) filename
 * @property {string} options Documentation generation options
 * @property {string} crossrefFormat Cross reference template regex
 * @property {any} exitThreshold Exit code threshold below which 0 is returned
 * @property {string} docsSectionTitle Title of the documentation section (defaults to "Programming Guides"
 * @property {string} warnings Documentation generation warnings
 * @property {any} logformat Log format [0-3]
 * @property {any} verbose Log verbosity level [0-6,xcode]
 */
interface AppledocOptions {
  input: any;
  output?: string;
  templates?: string;
  docsetInstallPath?: string;
  include?: string;
  ignore?: any;
  excludeOutput?: any;
  indexDesc?: string;
  projectName: string;
  projectVersion?: string;
  projectCompany: string;
  companyId?: string;
  createHtml: any;
  createDocset: any;
  installDocset: any;
  publishDocset: any;
  noCreateDocset: any;
  htmlAnchors?: string;
  cleanOutput: any;
  docsetBundleId?: string;
  docsetBundleName?: string;
  docsetDesc?: string;
  docsetCopyright?: string;
  docsetFeedName?: string;
  docsetFeedUrl?: string;
  docsetFeedFormats?: string;
  docsetPackageUrl?: string;
  docsetFallbackUrl?: string;
  docsetPublisherId?: string;
  docsetPublisherName?: string;
  docsetMinXcodeVersion?: string;
  docsetPlatformFamily?: string;
  docsetCertIssuer?: string;
  docsetCertSigner?: string;
  docsetBundleFilename?: string;
  docsetAtomFilename?: string;
  docsetXmlFilename?: string;
  docsetPackageFilename?: string;
  options?: string;
  crossrefFormat?: string;
  exitThreshold?: any;
  docsSectionTitle?: string;
  warnings?: string;
  logformat?: any;
  verbose?: any;
}

/** @interface AppstoreOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} appVersion The version that should be edited or created
 * @property {string} ipa Path to your ipa file
 * @property {string} pkg Path to your pkg file
 * @property {string} buildNumber If set the given build number (already uploaded to iTC) will be used instead of the current built one
 * @property {string} platform The platform to use (optional)
 * @property {any} editLive Modify live metadata, this option disables ipa upload and screenshot upload
 * @property {any} useLiveVersion Force usage of live version rather than edit version
 * @property {string} metadataPath Path to the folder containing the metadata files
 * @property {string} screenshotsPath Path to the folder containing the screenshots
 * @property {any} skipBinaryUpload Skip uploading an ipa or pkg to App Store Connect
 * @property {any} skipScreenshots Don't upload the screenshots
 * @property {any} skipMetadata Don't upload the metadata (e.g. title, description). This will still upload screenshots
 * @property {any} skipAppVersionUpdate Don't update app version for submission
 * @property {any} force Skip the HTML report file verification
 * @property {any} overwriteScreenshots Clear all previously uploaded screenshots before uploading the new ones
 * @property {any} submitForReview Submit the new version for Review after uploading everything
 * @property {any} rejectIfPossible Rejects the previously submitted build if it's in a state where it's possible
 * @property {any} automaticRelease Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
 * @property {any} autoReleaseDate Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
 * @property {any} phasedRelease Enable the phased release feature of iTC
 * @property {any} resetRatings Reset the summary rating when you release a new version of the application
 * @property {any} priceTier The price tier of this application
 * @property {string} appRatingConfigPath Path to the app rating's config
 * @property {any} submissionInformation Extra information for the submission (e.g. compliance specifications, IDFA settings)
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {string} devPortalTeamId The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
 * @property {string} devPortalTeamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} itcProvider The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
 * @property {any} runPrecheckBeforeSubmit Run precheck before submitting to app review
 * @property {any} precheckDefaultRuleLevel The default precheck rule level unless otherwise configured
 * @property {string[]} individualMetadataItems An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
 * @property {string} appIcon Metadata: The path to the app icon
 * @property {string} appleWatchAppIcon Metadata: The path to the Apple Watch app icon
 * @property {string} copyright Metadata: The copyright notice
 * @property {string} primaryCategory Metadata: The english name of the primary category (e.g. `Business`, `Books`)
 * @property {string} secondaryCategory Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
 * @property {string} primaryFirstSubCategory Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} primarySecondSubCategory Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} secondaryFirstSubCategory Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} secondarySecondSubCategory Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
 * @property {{string: string}} tradeRepresentativeContactInformation Metadata: A hash containing the trade representative contact information
 * @property {{string: string}} appReviewInformation Metadata: A hash containing the review information
 * @property {string} appReviewAttachmentFile Metadata: Path to the app review attachment file
 * @property {any} description Metadata: The localised app description
 * @property {any} name Metadata: The localised app name
 * @property {{string: string}} subtitle Metadata: The localised app subtitle
 * @property {{string: string}} keywords Metadata: An array of localised keywords
 * @property {{string: string}} promotionalText Metadata: An array of localised promotional texts
 * @property {any} releaseNotes Metadata: Localised release notes for this version
 * @property {any} privacyUrl Metadata: Localised privacy url
 * @property {any} appleTvPrivacyPolicy Metadata: Localised Apple TV privacy policy text
 * @property {any} supportUrl Metadata: Localised support url
 * @property {any} marketingUrl Metadata: Localised marketing url
 * @property {string[]} languages Metadata: List of languages to activate
 * @property {any} ignoreLanguageDirectoryValidation Ignore errors when invalid languages are found in metadata and screenshot directories
 * @property {any} precheckIncludeInAppPurchases Should precheck check in-app purchases?
 * @property {any} app The (spaceship) app ID of the app you want to use/modify
 */
interface AppstoreOptions {
  username: string;
  appIdentifier?: string;
  appVersion?: string;
  ipa?: string;
  pkg?: string;
  buildNumber?: string;
  platform?: string;
  editLive?: any;
  useLiveVersion: any;
  metadataPath?: string;
  screenshotsPath?: string;
  skipBinaryUpload: any;
  skipScreenshots: any;
  skipMetadata: any;
  skipAppVersionUpdate: any;
  force: any;
  overwriteScreenshots: any;
  submitForReview: any;
  rejectIfPossible: any;
  automaticRelease: any;
  autoReleaseDate?: any;
  phasedRelease?: any;
  resetRatings?: any;
  priceTier?: any;
  appRatingConfigPath?: string;
  submissionInformation?: any;
  teamId?: any;
  teamName?: string;
  devPortalTeamId?: string;
  devPortalTeamName?: string;
  itcProvider?: string;
  runPrecheckBeforeSubmit: any;
  precheckDefaultRuleLevel: any;
  individualMetadataItems: string[];
  appIcon?: string;
  appleWatchAppIcon?: string;
  copyright?: string;
  primaryCategory?: string;
  secondaryCategory?: string;
  primaryFirstSubCategory?: string;
  primarySecondSubCategory?: string;
  secondaryFirstSubCategory?: string;
  secondarySecondSubCategory?: string;
  tradeRepresentativeContactInformation?: { string: string };
  appReviewInformation?: { string: string };
  appReviewAttachmentFile?: string;
  description?: any;
  name?: any;
  subtitle?: { string: string };
  keywords?: { string: string };
  promotionalText?: { string: string };
  releaseNotes?: any;
  privacyUrl?: any;
  appleTvPrivacyPolicy?: any;
  supportUrl?: any;
  marketingUrl?: any;
  languages?: string[];
  ignoreLanguageDirectoryValidation: any;
  precheckIncludeInAppPurchases?: any;
  app: any;
}

/** @interface ApteligentOptions
 * @property {string} dsym dSYM.zip file to upload to Apteligent
 * @property {string} appId Apteligent App ID key e.g. 569f5c87cb99e10e00c7xxxx
 * @property {string} apiKey Apteligent App API key e.g. IXPQIi8yCbHaLliqzRoo065tH0lxxxxx
 */
interface ApteligentOptions {
  dsym?: string;
  appId: string;
  apiKey: string;
}

/** @interface ArtifactoryOptions
 * @property {string} file File to be uploaded to artifactory
 * @property {string} repo Artifactory repo to put the file in
 * @property {string} repoPath Path to deploy within the repo, including filename
 * @property {string} endpoint Artifactory endpoint
 * @property {string} username Artifactory username
 * @property {string} password Artifactory password
 * @property {any} properties Artifact properties hash
 * @property {string} sslPemFile Location of pem file to use for ssl verification
 * @property {any} sslVerify Verify SSL
 * @property {string} proxyUsername Proxy username
 * @property {string} proxyPassword Proxy password
 * @property {string} proxyAddress Proxy address
 * @property {string} proxyPort Proxy port
 * @property {string} readTimeout Read timeout
 */
interface ArtifactoryOptions {
  file: string;
  repo: string;
  repoPath: string;
  endpoint: string;
  username: string;
  password: string;
  properties?: any;
  sslPemFile?: string;
  sslVerify?: any;
  proxyUsername?: string;
  proxyPassword?: string;
  proxyAddress?: string;
  proxyPort?: string;
  readTimeout?: string;
}

/** @interface AutomaticCodeSigningOptions
 * @property {string} path Path to your Xcode project
 * @property {any} useAutomaticSigning Defines if project should use automatic signing
 * @property {string} teamId Team ID, is used when upgrading project
 * @property {string[]} targets Specify targets you want to toggle the signing mech. (default to all targets)
 * @property {string} codeSignIdentity Code signing identity type (iPhone Developer, iPhone Distribution)
 * @property {string} profileName Provisioning profile name to use for code signing
 * @property {string} profileUuid Provisioning profile UUID to use for code signing
 * @property {string} bundleIdentifier Application Product Bundle Identifier
 */
interface AutomaticCodeSigningOptions {
  path: string;
  useAutomaticSigning: any;
  teamId?: string;
  targets?: string[];
  codeSignIdentity?: string;
  profileName?: string;
  profileUuid?: string;
  bundleIdentifier?: string;
}

/** @interface BackupFileOptions
 * @property {string} path Path to the file you want to backup
 */
interface BackupFileOptions {
  path: string;
}

/** @interface BackupXcarchiveOptions
 * @property {string} xcarchive Path to your xcarchive file. Optional if you use the `xcodebuild` action
 * @property {string} destination Where your archive will be placed
 * @property {any} zip Enable compression of the archive
 * @property {string} zipFilename Filename of the compressed archive. Will be appended by `.xcarchive.zip`. Default value is the output xcarchive filename
 * @property {any} versioned Create a versioned (date and app version) subfolder where to put the archive
 */
interface BackupXcarchiveOptions {
  xcarchive: string;
  destination: string;
  zip?: any;
  zipFilename?: string;
  versioned?: any;
}

/** @interface BadgeOptions
 * @property {any} dark Adds a dark flavored badge ontop of your icon
 * @property {string} custom Add your custom overlay/badge image
 * @property {any} noBadge Hides the beta badge
 * @property {string} shield Add a shield to your app icon from shields.io
 * @property {any} alpha Adds and alpha badge instead of the default beta one
 * @property {string} path Sets the root path to look for AppIcons
 * @property {any} shieldIoTimeout Set custom duration for the timeout of the shields.io request in seconds
 * @property {string} glob Glob pattern for finding image files
 * @property {any} alphaChannel Keeps/adds an alpha channel to the icon (useful for android icons)
 * @property {string} shieldGravity Position of shield on icon. Default: North - Choices include: NorthWest, North, NorthEast, West, Center, East, SouthWest, South, SouthEast
 * @property {any} shieldNoResize Shield image will no longer be resized to aspect fill the full icon. Instead it will only be shrunk to not exceed the icon graphic
 */
interface BadgeOptions {
  dark?: any;
  custom?: string;
  noBadge?: any;
  shield?: string;
  alpha?: any;
  path?: string;
  shieldIoTimeout?: any;
  glob?: string;
  alphaChannel?: any;
  shieldGravity?: string;
  shieldNoResize?: any;
}

/** @interface BuildAndUploadToAppetizeOptions
 * @property {{string: string}} xcodebuild Parameters that are passed to the xcodebuild action
 * @property {string} scheme The scheme to build. Can also be passed using the `xcodebuild` parameter
 * @property {string} apiToken Appetize.io API Token
 * @property {string} publicKey If not provided, a new app will be created. If provided, the existing build will be overwritten
 * @property {string} note Notes you wish to add to the uploaded app
 */
interface BuildAndUploadToAppetizeOptions {
  xcodebuild?: { string: string };
  scheme?: string;
  apiToken: string;
  publicKey?: string;
  note?: string;
}

/** @interface BuildAndroidAppOptions
 * @property {string} task The gradle task you want to execute, e.g. `assemble`, `bundle` or `test`. For tasks such as `assembleMyFlavorRelease` you should use gradle(task: 'assemble', flavor: 'Myflavor', build_type: 'Release')
 * @property {string} flavor The flavor that you want the task for, e.g. `MyFlavor`. If you are running the `assemble` task in a multi-flavor project, and you rely on Actions.lane_context[SharedValues::GRADLE_APK_OUTPUT_PATH] then you must specify a flavor here or else this value will be undefined
 * @property {string} buildType The build type that you want the task for, e.g. `Release`. Useful for some tasks such as `assemble`
 * @property {string[]} tasks The multiple gradle tasks that you want to execute, e.g. `[assembleDebug, bundleDebug]`
 * @property {string} flags All parameter flags you want to pass to the gradle command, e.g. `--exitcode --xml file.xml`
 * @property {string} projectDir The root directory of the gradle project
 * @property {string} gradlePath The path to your `gradlew`. If you specify a relative path, it is assumed to be relative to the `project_dir`
 * @property {any} properties Gradle properties to be exposed to the gradle script
 * @property {any} systemProperties Gradle system properties to be exposed to the gradle script
 * @property {string} serial Android serial, which device should be used for this command
 * @property {any} printCommand Control whether the generated Gradle command is printed as output before running it (true/false)
 * @property {any} printCommandOutput Control whether the output produced by given Gradle command is printed while running (true/false)
 */
interface BuildAndroidAppOptions {
  task?: string;
  flavor?: string;
  buildType?: string;
  tasks?: string[];
  flags?: string;
  projectDir: string;
  gradlePath?: string;
  properties?: any;
  systemProperties?: any;
  serial: string;
  printCommand: any;
  printCommandOutput: any;
}

/** @interface BuildAppOptions
 * @property {string} workspace Path to the workspace file
 * @property {string} project Path to the project file
 * @property {string} scheme The project's scheme. Make sure it's marked as `Shared`
 * @property {boolean} clean Should the project be cleaned before building it?
 * @property {string} outputDirectory The directory in which the ipa file should be stored in
 * @property {string} outputName The name of the resulting ipa file
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {boolean} silent Hide all information that's not necessary while building
 * @property {string} codesigningIdentity The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
 * @property {boolean} skipPackageIpa Should we skip packaging the ipa?
 * @property {boolean} skipPackagePkg Should we skip packaging the pkg?
 * @property {boolean} includeSymbols Should the ipa file include symbols?
 * @property {boolean} includeBitcode Should the ipa file include bitcode?
 * @property {string} exportMethod Method used to export the archive. Valid values are: app-store, ad-hoc, package, enterprise, development, developer-id
 * @property {{string: string}} exportOptions Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
 * @property {string} exportXcargs Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {boolean} skipBuildArchive Export ipa from previously built xcarchive. Uses archive_path as source
 * @property {boolean} skipArchive After building, don't archive, effectively not including -archivePath param
 * @property {boolean} skipCodesigning Build without codesigning
 * @property {string} catalystPlatform Platform to build when using a Catalyst enabled app. Valid values are: ios, macos
 * @property {string} installerCertName Full name of 3rd Party Mac Developer Installer or Deveoper ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
 * @property {string} buildPath The directory in which the archive should be stored in
 * @property {string} archivePath The path to the created archive
 * @property {string} derivedDataPath The directory where built products and other derived data will go
 * @property {boolean} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {string} resultBundlePath Path to the result bundle directory to create. Ignored if `result_bundle` if false
 * @property {string} buildlogPath The directory where to store the build log
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} toolchain The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
 * @property {string} destination Use a custom destination for building the app
 * @property {string} exportTeamId Optional: Sometimes you need to specify a team id when exporting the ipa file
 * @property {string} xcargs Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {boolean} suppressXcodeOutput Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
 * @property {boolean} disableXcpretty Disable xcpretty formatting of build output
 * @property {boolean} xcprettyTestFormat Use the test (RSpec style) format for build output
 * @property {string} xcprettyFormatter A custom xcpretty formatter to use
 * @property {string} xcprettyReportJunit Have xcpretty create a JUnit-style XML report at the provided path
 * @property {string} xcprettyReportHtml Have xcpretty create a simple HTML report at the provided path
 * @property {string} xcprettyReportJson Have xcpretty create a JSON compilation database at the provided path
 * @property {boolean} analyzeBuildTime Analyze the project build time and store the output in 'culprits.txt' file
 * @property {boolean} xcprettyUtf Have xcpretty use unicode encoding when reporting builds
 * @property {boolean} skipProfileDetection Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 */
interface BuildAppOptions {
  workspace?: string;
  project?: string;
  scheme?: string;
  clean: boolean;
  outputDirectory: string;
  outputName?: string;
  configuration?: string;
  silent: boolean;
  codesigningIdentity?: string;
  skipPackageIpa: boolean;
  skipPackagePkg: boolean;
  includeSymbols?: boolean;
  includeBitcode?: boolean;
  exportMethod?: string;
  exportOptions?: { string: string };
  exportXcargs?: string;
  skipBuildArchive?: boolean;
  skipArchive?: boolean;
  skipCodesigning?: boolean;
  catalystPlatform?: string;
  installerCertName?: string;
  buildPath?: string;
  archivePath?: string;
  derivedDataPath?: string;
  resultBundle?: boolean;
  resultBundlePath?: string;
  buildlogPath: string;
  sdk?: string;
  toolchain?: string;
  destination?: string;
  exportTeamId?: string;
  xcargs?: string;
  xcconfig?: string;
  suppressXcodeOutput?: boolean;
  disableXcpretty?: boolean;
  xcprettyTestFormat?: boolean;
  xcprettyFormatter?: string;
  xcprettyReportJunit?: string;
  xcprettyReportHtml?: string;
  xcprettyReportJson?: string;
  analyzeBuildTime?: boolean;
  xcprettyUtf?: boolean;
  skipProfileDetection?: boolean;
  clonedSourcePackagesPath?: string;
}

/** @interface BuildIosAppOptions
 * @property {string} workspace Path to the workspace file
 * @property {string} project Path to the project file
 * @property {string} scheme The project's scheme. Make sure it's marked as `Shared`
 * @property {boolean} clean Should the project be cleaned before building it?
 * @property {string} outputDirectory The directory in which the ipa file should be stored in
 * @property {string} outputName The name of the resulting ipa file
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {boolean} silent Hide all information that's not necessary while building
 * @property {string} codesigningIdentity The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
 * @property {boolean} skipPackageIpa Should we skip packaging the ipa?
 * @property {boolean} includeSymbols Should the ipa file include symbols?
 * @property {boolean} includeBitcode Should the ipa file include bitcode?
 * @property {string} exportMethod Method used to export the archive. Valid values are: app-store, ad-hoc, package, enterprise, development, developer-id
 * @property {{string: string}} exportOptions Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
 * @property {string} exportXcargs Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {boolean} skipBuildArchive Export ipa from previously built xcarchive. Uses archive_path as source
 * @property {boolean} skipArchive After building, don't archive, effectively not including -archivePath param
 * @property {boolean} skipCodesigning Build without codesigning
 * @property {string} buildPath The directory in which the archive should be stored in
 * @property {string} archivePath The path to the created archive
 * @property {string} derivedDataPath The directory where built products and other derived data will go
 * @property {boolean} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {string} resultBundlePath Path to the result bundle directory to create. Ignored if `result_bundle` if false
 * @property {string} buildlogPath The directory where to store the build log
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} toolchain The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
 * @property {string} destination Use a custom destination for building the app
 * @property {string} exportTeamId Optional: Sometimes you need to specify a team id when exporting the ipa file
 * @property {string} xcargs Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {boolean} suppressXcodeOutput Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
 * @property {boolean} disableXcpretty Disable xcpretty formatting of build output
 * @property {boolean} xcprettyTestFormat Use the test (RSpec style) format for build output
 * @property {string} xcprettyFormatter A custom xcpretty formatter to use
 * @property {string} xcprettyReportJunit Have xcpretty create a JUnit-style XML report at the provided path
 * @property {string} xcprettyReportHtml Have xcpretty create a simple HTML report at the provided path
 * @property {string} xcprettyReportJson Have xcpretty create a JSON compilation database at the provided path
 * @property {boolean} analyzeBuildTime Analyze the project build time and store the output in 'culprits.txt' file
 * @property {boolean} xcprettyUtf Have xcpretty use unicode encoding when reporting builds
 * @property {boolean} skipProfileDetection Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 */
interface BuildIosAppOptions {
  workspace?: string;
  project?: string;
  scheme?: string;
  clean: boolean;
  outputDirectory: string;
  outputName?: string;
  configuration?: string;
  silent: boolean;
  codesigningIdentity?: string;
  skipPackageIpa: boolean;
  includeSymbols?: boolean;
  includeBitcode?: boolean;
  exportMethod?: string;
  exportOptions?: { string: string };
  exportXcargs?: string;
  skipBuildArchive?: boolean;
  skipArchive?: boolean;
  skipCodesigning?: boolean;
  buildPath?: string;
  archivePath?: string;
  derivedDataPath?: string;
  resultBundle?: boolean;
  resultBundlePath?: string;
  buildlogPath: string;
  sdk?: string;
  toolchain?: string;
  destination?: string;
  exportTeamId?: string;
  xcargs?: string;
  xcconfig?: string;
  suppressXcodeOutput?: boolean;
  disableXcpretty?: boolean;
  xcprettyTestFormat?: boolean;
  xcprettyFormatter?: string;
  xcprettyReportJunit?: string;
  xcprettyReportHtml?: string;
  xcprettyReportJson?: string;
  analyzeBuildTime?: boolean;
  xcprettyUtf?: boolean;
  skipProfileDetection?: boolean;
  clonedSourcePackagesPath?: string;
}

/** @interface BuildMacAppOptions
 * @property {string} workspace Path to the workspace file
 * @property {string} project Path to the project file
 * @property {string} scheme The project's scheme. Make sure it's marked as `Shared`
 * @property {boolean} clean Should the project be cleaned before building it?
 * @property {string} outputDirectory The directory in which the ipa file should be stored in
 * @property {string} outputName The name of the resulting ipa file
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {boolean} silent Hide all information that's not necessary while building
 * @property {string} codesigningIdentity The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
 * @property {boolean} skipPackagePkg Should we skip packaging the pkg?
 * @property {boolean} includeSymbols Should the ipa file include symbols?
 * @property {boolean} includeBitcode Should the ipa file include bitcode?
 * @property {string} exportMethod Method used to export the archive. Valid values are: app-store, ad-hoc, package, enterprise, development, developer-id
 * @property {{string: string}} exportOptions Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
 * @property {string} exportXcargs Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {boolean} skipBuildArchive Export ipa from previously built xcarchive. Uses archive_path as source
 * @property {boolean} skipArchive After building, don't archive, effectively not including -archivePath param
 * @property {boolean} skipCodesigning Build without codesigning
 * @property {string} installerCertName Full name of 3rd Party Mac Developer Installer or Deveoper ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
 * @property {string} buildPath The directory in which the archive should be stored in
 * @property {string} archivePath The path to the created archive
 * @property {string} derivedDataPath The directory where built products and other derived data will go
 * @property {boolean} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {string} resultBundlePath Path to the result bundle directory to create. Ignored if `result_bundle` if false
 * @property {string} buildlogPath The directory where to store the build log
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} toolchain The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
 * @property {string} destination Use a custom destination for building the app
 * @property {string} exportTeamId Optional: Sometimes you need to specify a team id when exporting the ipa file
 * @property {string} xcargs Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {boolean} suppressXcodeOutput Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
 * @property {boolean} disableXcpretty Disable xcpretty formatting of build output
 * @property {boolean} xcprettyTestFormat Use the test (RSpec style) format for build output
 * @property {string} xcprettyFormatter A custom xcpretty formatter to use
 * @property {string} xcprettyReportJunit Have xcpretty create a JUnit-style XML report at the provided path
 * @property {string} xcprettyReportHtml Have xcpretty create a simple HTML report at the provided path
 * @property {string} xcprettyReportJson Have xcpretty create a JSON compilation database at the provided path
 * @property {boolean} analyzeBuildTime Analyze the project build time and store the output in 'culprits.txt' file
 * @property {boolean} xcprettyUtf Have xcpretty use unicode encoding when reporting builds
 * @property {boolean} skipProfileDetection Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 */
interface BuildMacAppOptions {
  workspace?: string;
  project?: string;
  scheme?: string;
  clean: boolean;
  outputDirectory: string;
  outputName?: string;
  configuration?: string;
  silent: boolean;
  codesigningIdentity?: string;
  skipPackagePkg: boolean;
  includeSymbols?: boolean;
  includeBitcode?: boolean;
  exportMethod?: string;
  exportOptions?: { string: string };
  exportXcargs?: string;
  skipBuildArchive?: boolean;
  skipArchive?: boolean;
  skipCodesigning?: boolean;
  installerCertName?: string;
  buildPath?: string;
  archivePath?: string;
  derivedDataPath?: string;
  resultBundle?: boolean;
  resultBundlePath?: string;
  buildlogPath: string;
  sdk?: string;
  toolchain?: string;
  destination?: string;
  exportTeamId?: string;
  xcargs?: string;
  xcconfig?: string;
  suppressXcodeOutput?: boolean;
  disableXcpretty?: boolean;
  xcprettyTestFormat?: boolean;
  xcprettyFormatter?: string;
  xcprettyReportJunit?: string;
  xcprettyReportHtml?: string;
  xcprettyReportJson?: string;
  analyzeBuildTime?: boolean;
  xcprettyUtf?: boolean;
  skipProfileDetection?: boolean;
  clonedSourcePackagesPath?: string;
}

/** @interface BundleInstallOptions
 * @property {string} binstubs Generate bin stubs for bundled gems to ./bin
 * @property {any} clean Run bundle clean automatically after install
 * @property {any} fullIndex Use the rubygems modern index instead of the API endpoint
 * @property {string} gemfile Use the specified gemfile instead of Gemfile
 * @property {boolean} jobs Install gems using parallel workers
 * @property {any} local Do not attempt to fetch gems remotely and use the gem cache instead
 * @property {any} deployment Install using defaults tuned for deployment and CI environments
 * @property {any} noCache Don't update the existing gem cache
 * @property {any} noPrune Don't remove stale gems from the cache
 * @property {string} path Specify a different path than the system default ($BUNDLE_PATH or $GEM_HOME). Bundler will remember this value for future installs on this machine
 * @property {any} system Install to the system location ($BUNDLE_PATH or $GEM_HOME) even if the bundle was previously installed somewhere else for this application
 * @property {any} quiet Only output warnings and errors
 * @property {boolean} retry Retry network and git requests that have failed
 * @property {string} shebang Specify a different shebang executable name than the default (usually 'ruby')
 * @property {string} standalone Make a bundle that can work without the Bundler runtime
 * @property {string} trustPolicy Sets level of security when dealing with signed gems. Accepts `LowSecurity`, `MediumSecurity` and `HighSecurity` as values
 * @property {string} without Exclude gems that are part of the specified named group
 * @property {string} with Include gems that are part of the specified named group
 */
interface BundleInstallOptions {
  binstubs?: string;
  clean: any;
  fullIndex: any;
  gemfile?: string;
  jobs?: boolean;
  local: any;
  deployment: any;
  noCache: any;
  noPrune: any;
  path?: string;
  system: any;
  quiet: any;
  retry?: boolean;
  shebang?: string;
  standalone?: string;
  trustPolicy?: string;
  without?: string;
  with?: string;
}

/** @interface CaptureAndroidScreenshotsOptions
 * @property {string} androidHome Path to the root of your Android SDK installation, e.g. ~/tools/android-sdk-macosx
 * @property {string} buildToolsVersion The Android build tools version to use, e.g. '23.0.2'
 * @property {string[]} locales A list of locales which should be used
 * @property {boolean} clearPreviousScreenshots Enabling this option will automatically clear previously generated screenshots before running screengrab
 * @property {string} outputDirectory The directory where to store the screenshots
 * @property {boolean} skipOpenSummary Don't open the summary after running _screengrab_
 * @property {string} appPackageName The package name of the app under test (e.g. com.yourcompany.yourapp)
 * @property {string} testsPackageName The package name of the tests bundle (e.g. com.yourcompany.yourapp.test)
 * @property {string[]} useTestsInPackages Only run tests in these Java packages
 * @property {string[]} useTestsInClasses Only run tests in these Java classes
 * @property {string[]} launchArguments Additional launch arguments
 * @property {string} testInstrumentationRunner The fully qualified class name of your test instrumentation runner
 * @property {string} endingLocale Return the device to this locale after running tests
 * @property {boolean} useAdbRoot Restarts the adb daemon using `adb root` to allow access to screenshots directories on device. Use if getting 'Permission denied' errors
 * @property {string} appApkPath The path to the APK for the app under test
 * @property {string} testsApkPath The path to the APK for the the tests bundle
 * @property {string} specificDevice Use the device or emulator with the given serial number or qualifier
 * @property {string} deviceType Type of device used for screenshots. Matches Google Play Types (phone, sevenInch, tenInch, tv, wear)
 * @property {boolean} exitOnTestFailure Whether or not to exit Screengrab on test failure. Exiting on failure will not copy sceenshots to local machine nor open sceenshots summary
 * @property {boolean} reinstallApp Enabling this option will automatically uninstall the application before running it
 * @property {boolean} useTimestampSuffix Add timestamp suffix to screenshot filename
 * @property {string} adbHost Configure the host used by adb to connect, allows running on remote devices farm
 */
interface CaptureAndroidScreenshotsOptions {
  androidHome?: string;
  buildToolsVersion?: string;
  locales: string[];
  clearPreviousScreenshots: boolean;
  outputDirectory: string;
  skipOpenSummary: boolean;
  appPackageName: string;
  testsPackageName?: string;
  useTestsInPackages?: string[];
  useTestsInClasses?: string[];
  launchArguments?: string[];
  testInstrumentationRunner?: string;
  endingLocale?: string;
  useAdbRoot: boolean;
  appApkPath?: string;
  testsApkPath?: string;
  specificDevice?: string;
  deviceType: string;
  exitOnTestFailure: boolean;
  reinstallApp: boolean;
  useTimestampSuffix: boolean;
  adbHost?: string;
}

/** @interface CaptureIosScreenshotsOptions
 * @property {string} workspace Path the workspace file
 * @property {string} project Path the project file
 * @property {string} xcargs Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {string[]} devices A list of devices you want to take the screenshots from
 * @property {string[]} languages A list of languages which should be used
 * @property {string[]} launchArguments A list of launch arguments which should be used
 * @property {string} outputDirectory The directory where to store the screenshots
 * @property {boolean} outputSimulatorLogs If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
 * @property {string} iosVersion By default, the latest version should be used automatically. If you want to change it, do it here
 * @property {any} skipOpenSummary Don't open the HTML summary after running _snapshot_
 * @property {any} skipHelperVersionCheck Do not check for most recent SnapshotHelper code
 * @property {any} clearPreviousScreenshots Enabling this option will automatically clear previously generated screenshots before running snapshot
 * @property {any} reinstallApp Enabling this option will automatically uninstall the application before running it
 * @property {any} eraseSimulator Enabling this option will automatically erase the simulator before running the application
 * @property {any} localizeSimulator Enabling this option will configure the Simulator's system language
 * @property {boolean} darkMode Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
 * @property {string} appIdentifier The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
 * @property {string[]} addPhotos A list of photos that should be added to the simulator before running the application
 * @property {string[]} addVideos A list of videos that should be added to the simulator before running the application
 * @property {string} buildlogPath The directory where to store the build log
 * @property {any} clean Should the project be cleaned before building it?
 * @property {boolean} testWithoutBuilding Test without building, requires a derived data path
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {string} xcprettyArgs Additional xcpretty arguments
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} scheme The scheme you want to use, this must be the scheme for the UI Tests
 * @property {any} numberOfRetries The number of times a test can fail before snapshot should stop retrying
 * @property {any} stopAfterFirstError Should snapshot stop immediately after the tests completely failed on one device?
 * @property {string} derivedDataPath The directory where build products and other derived data will go
 * @property {any} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {string} testTargetName The name of the target you want to test (if you desire to override the Target Application from Xcode)
 * @property {any} namespaceLogFiles Separate the log files per device and per language
 * @property {any} concurrentSimulators Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
 * @property {any} disableSlideToType Disable the simulator from showing the 'Slide to type' prompt
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 * @property {string} testplan The testplan associated with the scheme that should be used for testing
 */
interface CaptureIosScreenshotsOptions {
  workspace?: string;
  project?: string;
  xcargs?: string;
  xcconfig?: string;
  devices?: string[];
  languages: string[];
  launchArguments: string[];
  outputDirectory: string;
  outputSimulatorLogs?: boolean;
  iosVersion?: string;
  skipOpenSummary: any;
  skipHelperVersionCheck: any;
  clearPreviousScreenshots: any;
  reinstallApp: any;
  eraseSimulator: any;
  localizeSimulator: any;
  darkMode?: boolean;
  appIdentifier?: string;
  addPhotos?: string[];
  addVideos?: string[];
  buildlogPath: string;
  clean: any;
  testWithoutBuilding?: boolean;
  configuration?: string;
  xcprettyArgs?: string;
  sdk?: string;
  scheme?: string;
  numberOfRetries: any;
  stopAfterFirstError: any;
  derivedDataPath?: string;
  resultBundle?: any;
  testTargetName?: string;
  namespaceLogFiles?: any;
  concurrentSimulators: any;
  disableSlideToType?: any;
  clonedSourcePackagesPath?: string;
  testplan?: string;
}

/** @interface CaptureScreenshotsOptions
 * @property {string} workspace Path the workspace file
 * @property {string} project Path the project file
 * @property {string} xcargs Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {string[]} devices A list of devices you want to take the screenshots from
 * @property {string[]} languages A list of languages which should be used
 * @property {string[]} launchArguments A list of launch arguments which should be used
 * @property {string} outputDirectory The directory where to store the screenshots
 * @property {boolean} outputSimulatorLogs If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
 * @property {string} iosVersion By default, the latest version should be used automatically. If you want to change it, do it here
 * @property {any} skipOpenSummary Don't open the HTML summary after running _snapshot_
 * @property {any} skipHelperVersionCheck Do not check for most recent SnapshotHelper code
 * @property {any} clearPreviousScreenshots Enabling this option will automatically clear previously generated screenshots before running snapshot
 * @property {any} reinstallApp Enabling this option will automatically uninstall the application before running it
 * @property {any} eraseSimulator Enabling this option will automatically erase the simulator before running the application
 * @property {any} localizeSimulator Enabling this option will configure the Simulator's system language
 * @property {boolean} darkMode Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
 * @property {string} appIdentifier The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
 * @property {string[]} addPhotos A list of photos that should be added to the simulator before running the application
 * @property {string[]} addVideos A list of videos that should be added to the simulator before running the application
 * @property {string} buildlogPath The directory where to store the build log
 * @property {any} clean Should the project be cleaned before building it?
 * @property {boolean} testWithoutBuilding Test without building, requires a derived data path
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {string} xcprettyArgs Additional xcpretty arguments
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} scheme The scheme you want to use, this must be the scheme for the UI Tests
 * @property {any} numberOfRetries The number of times a test can fail before snapshot should stop retrying
 * @property {any} stopAfterFirstError Should snapshot stop immediately after the tests completely failed on one device?
 * @property {string} derivedDataPath The directory where build products and other derived data will go
 * @property {any} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {string} testTargetName The name of the target you want to test (if you desire to override the Target Application from Xcode)
 * @property {any} namespaceLogFiles Separate the log files per device and per language
 * @property {any} concurrentSimulators Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
 * @property {any} disableSlideToType Disable the simulator from showing the 'Slide to type' prompt
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 * @property {string} testplan The testplan associated with the scheme that should be used for testing
 */
interface CaptureScreenshotsOptions {
  workspace?: string;
  project?: string;
  xcargs?: string;
  xcconfig?: string;
  devices?: string[];
  languages: string[];
  launchArguments: string[];
  outputDirectory: string;
  outputSimulatorLogs?: boolean;
  iosVersion?: string;
  skipOpenSummary: any;
  skipHelperVersionCheck: any;
  clearPreviousScreenshots: any;
  reinstallApp: any;
  eraseSimulator: any;
  localizeSimulator: any;
  darkMode?: boolean;
  appIdentifier?: string;
  addPhotos?: string[];
  addVideos?: string[];
  buildlogPath: string;
  clean: any;
  testWithoutBuilding?: boolean;
  configuration?: string;
  xcprettyArgs?: string;
  sdk?: string;
  scheme?: string;
  numberOfRetries: any;
  stopAfterFirstError: any;
  derivedDataPath?: string;
  resultBundle?: any;
  testTargetName?: string;
  namespaceLogFiles?: any;
  concurrentSimulators: any;
  disableSlideToType?: any;
  clonedSourcePackagesPath?: string;
  testplan?: string;
}

/** @interface CarthageOptions
 * @property {string} command Carthage command (one of: build, bootstrap, update, archive)
 * @property {string[]} dependencies Carthage dependencies to update, build or bootstrap
 * @property {boolean} useSsh Use SSH for downloading GitHub repositories
 * @property {boolean} useSubmodules Add dependencies as Git submodules
 * @property {boolean} useBinaries Check out dependency repositories even when prebuilt frameworks exist
 * @property {boolean} noCheckout When bootstrapping Carthage do not checkout
 * @property {boolean} noBuild When bootstrapping Carthage do not build
 * @property {boolean} noSkipCurrent Don't skip building the Carthage project (in addition to its dependencies)
 * @property {string} derivedData Use derived data folder at path
 * @property {boolean} verbose Print xcodebuild output inline
 * @property {string} platform Define which platform to build for
 * @property {any} cacheBuilds By default Carthage will rebuild a dependency regardless of whether it's the same resolved version as before. Passing the --cache-builds will cause carthage to avoid rebuilding a dependency if it can
 * @property {string[]} frameworks Framework name or names to archive, could be applied only along with the archive command
 * @property {string} output Output name for the archive, could be applied only along with the archive command. Use following format *.framework.zip
 * @property {string} configuration Define which build configuration to use when building
 * @property {string} toolchain Define which xcodebuild toolchain to use when building
 * @property {string} projectDirectory Define the directory containing the Carthage project
 * @property {boolean} newResolver Use new resolver when resolving dependency graph
 * @property {string} logPath Path to the xcode build output
 * @property {string} executable Path to the `carthage` executable on your machine
 */
interface CarthageOptions {
  command: string;
  dependencies: string[];
  useSsh?: boolean;
  useSubmodules?: boolean;
  useBinaries?: boolean;
  noCheckout?: boolean;
  noBuild?: boolean;
  noSkipCurrent?: boolean;
  derivedData?: string;
  verbose?: boolean;
  platform?: string;
  cacheBuilds: any;
  frameworks: string[];
  output?: string;
  configuration?: string;
  toolchain?: string;
  projectDirectory?: string;
  newResolver?: boolean;
  logPath?: string;
  executable: string;
}

/** @interface CertOptions
 * @property {boolean} development Create a development certificate instead of a distribution one
 * @property {string} type Create specific certificate type (takes precedence over :development)
 * @property {boolean} force Create a certificate even if an existing certificate exists
 * @property {boolean} generateAppleCerts Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} filename The filename of certificate to store
 * @property {string} outputPath The path to a directory in which all certificates and private keys should be stored
 * @property {string} keychainPath Path to a custom keychain
 * @property {string} keychainPassword This might be required the first time you access certificates on a new mac. For the login/default keychain this is your account password
 * @property {string} platform Set the provisioning profile's platform (ios, macos)
 */
interface CertOptions {
  development: boolean;
  type?: string;
  force: boolean;
  generateAppleCerts: boolean;
  username: string;
  teamId?: string;
  teamName?: string;
  filename?: string;
  outputPath: string;
  keychainPath: string;
  keychainPassword?: string;
  platform: string;
}

/** @interface ChangelogFromGitCommitsOptions
 * @property {any} between Array containing two Git revision values between which to collect messages, you mustn't use it with :commits_count key at the same time
 * @property {any} commitsCount Number of commits to include in changelog, you mustn't use it with :between key at the same time
 * @property {string} path Path of the git repository
 * @property {string} pretty The format applied to each commit while generating the collected value
 * @property {string} dateFormat The date format applied to each commit while generating the collected value
 * @property {any} ancestryPath Whether or not to use ancestry-path param
 * @property {string} tagMatchPattern A glob(7) pattern to match against when finding the last git tag
 * @property {any} matchLightweightTag Whether or not to match a lightweight tag when searching for the last one
 * @property {any} quiet Whether or not to disable changelog output
 * @property {boolean} includeMerges **DEPRECATED!** Use `:merge_commit_filtering` instead - Whether or not to include any commits that are merges
 * @property {string} mergeCommitFiltering Controls inclusion of merge commits when collecting the changelog. Valid values: `:include_merges`, `:exclude_merges`, `:only_include_merges`
 */
interface ChangelogFromGitCommitsOptions {
  between?: any;
  commitsCount?: any;
  path?: string;
  pretty?: string;
  dateFormat?: string;
  ancestryPath?: any;
  tagMatchPattern?: string;
  matchLightweightTag?: any;
  quiet?: any;
  includeMerges?: boolean;
  mergeCommitFiltering?: string;
}

/** @interface ChatworkOptions
 * @property {string} apiToken ChatWork API Token
 * @property {string} message The message to post on ChatWork
 * @property {any} roomid The room ID
 * @property {any} success Was this build successful? (true/false)
 */
interface ChatworkOptions {
  apiToken: string;
  message: string;
  roomid: any;
  success?: any;
}

/** @interface CheckAppStoreMetadataOptions
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {any} defaultRuleLevel The default rule level unless otherwise configured
 * @property {any} includeInAppPurchases Should check in-app purchases?
 * @property {any} negativeAppleSentiment mentioning  in a way that could be considered negative
 * @property {any} placeholderText using placeholder text (e.g.:"lorem ipsum", "text here", etc...)
 * @property {any} otherPlatforms mentioning other platforms, like Android or Blackberry
 * @property {any} futureFunctionality mentioning features or content that is not currently available in your app
 * @property {any} testWords using text indicating this release is a test
 * @property {any} curseWords including words that might be considered objectionable
 * @property {any} freeStuffInIap using text indicating that your IAP is free
 * @property {any} customText mentioning any of the user-specified words passed to custom_text(data: [words])
 * @property {any} copyrightDate using a copyright date that is any different from this current year, or missing a date
 * @property {any} unreachableUrls unreachable URLs in app metadata
 */
interface CheckAppStoreMetadataOptions {
  appIdentifier: string;
  username: string;
  teamId?: string;
  teamName?: string;
  defaultRuleLevel: any;
  includeInAppPurchases?: any;
  negativeAppleSentiment?: any;
  placeholderText?: any;
  otherPlatforms?: any;
  futureFunctionality?: any;
  testWords?: any;
  curseWords?: any;
  freeStuffInIap?: any;
  customText?: any;
  copyrightDate?: any;
  unreachableUrls?: any;
}

/** @interface CleanBuildArtifactsOptions
 * @property {string} excludePattern Exclude all files from clearing that match the given Regex pattern: e.g. '.*.mobileprovision'
 */
interface CleanBuildArtifactsOptions {
  excludePattern?: string;
}

/** @interface CleanCocoapodsCacheOptions
 * @property {string} name Pod name to be removed from cache
 */
interface CleanCocoapodsCacheOptions {
  name?: string;
}

/** @interface ClearDerivedDataOptions
 * @property {string} derivedDataPath Custom path for derivedData
 */
interface ClearDerivedDataOptions {
  derivedDataPath: string;
}

/** @interface ClipboardOptions
 * @property {string} value The string that should be copied into the clipboard
 */
interface ClipboardOptions {
  value: string;
}

/** @interface ClocOptions
 * @property {string} binaryPath Where the cloc binary lives on your system (full path including 'cloc')
 * @property {string} excludeDir Comma separated list of directories to exclude
 * @property {string} outputDirectory Where to put the generated report file
 * @property {string} sourceDirectory Where to look for the source code (relative to the project root folder)
 * @property {any} xml Should we generate an XML File (if false, it will generate a plain text file)?
 */
interface ClocOptions {
  binaryPath?: string;
  excludeDir?: string;
  outputDirectory: string;
  sourceDirectory: string;
  xml: any;
}

/** @interface CocoapodsOptions
 * @property {any} repoUpdate Add `--repo-update` flag to `pod install` command
 * @property {any} cleanInstall Execute a full pod installation ignoring the content of the project cache
 * @property {any} silent Execute command without logging output
 * @property {any} verbose Show more debugging information
 * @property {any} ansi Show output with ANSI codes
 * @property {any} useBundleExec Use bundle exec when there is a Gemfile presented
 * @property {string} podfile Explicitly specify the path to the Cocoapods' Podfile. You can either set it to the Podfile's path or to the folder containing the Podfile file
 * @property {any} errorCallback A callback invoked with the command output if there is a non-zero exit status
 * @property {boolean} tryRepoUpdateOnError Retry with --repo-update if action was finished with error
 * @property {boolean} deployment Disallow any changes to the Podfile or the Podfile.lock during installation
 * @property {any} clean **DEPRECATED!** (Option renamed as clean_install) Remove SCM directories
 * @property {any} integrate **DEPRECATED!** (Option removed from cocoapods) Integrate the Pods libraries into the Xcode project(s)
 */
interface CocoapodsOptions {
  repoUpdate: any;
  cleanInstall: any;
  silent: any;
  verbose: any;
  ansi: any;
  useBundleExec: any;
  podfile?: string;
  errorCallback?: any;
  tryRepoUpdateOnError?: boolean;
  deployment?: boolean;
  clean?: any;
  integrate?: any;
}

/** @interface CommitGithubFileOptions
 * @property {string} repositoryName The path to your repo, e.g. 'fastlane/fastlane'
 * @property {string} serverUrl The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
 * @property {string} apiToken Personal API Token for GitHub - generate one at https://github.com/settings/tokens
 * @property {string} branch The branch that the file should be committed on (default: master)
 * @property {string} path The relative path to your file from project root e.g. assets/my_app.xcarchive
 * @property {string} message The commit message. Defaults to the file name
 * @property {any} secure Optionally disable secure requests (ssl_verify_peer)
 */
interface CommitGithubFileOptions {
  repositoryName: string;
  serverUrl?: string;
  apiToken: string;
  branch?: string;
  path: string;
  message?: string;
  secure?: any;
}

/** @interface CommitVersionBumpOptions
 * @property {string} message The commit message when committing the version bump
 * @property {string} xcodeproj The path to your project file (Not the workspace). If you have only one, this is optional
 * @property {any} force Forces the commit, even if other files than the ones containing the version number have been modified
 * @property {any} settings Include Settings.bundle/Root.plist with version bump
 * @property {any} ignore A regular expression used to filter matched plist files to be modified
 * @property {string[]} include A list of extra files to be included in the version bump (string array or comma-separated string)
 * @property {boolean} noVerify Whether or not to use --no-verify
 */
interface CommitVersionBumpOptions {
  message?: string;
  xcodeproj?: string;
  force?: any;
  settings?: any;
  ignore?: any;
  include?: string[];
  noVerify: boolean;
}

/** @interface CopyArtifactsOptions
 * @property {any} keepOriginal Set this to false if you want move, rather than copy, the found artifacts
 * @property {any} targetPath The directory in which you want your artifacts placed
 * @property {any} artifacts An array of file patterns of the files/folders you want to preserve
 * @property {any} failOnMissing Fail when a source file isn't found
 */
interface CopyArtifactsOptions {
  keepOriginal?: any;
  targetPath: any;
  artifacts: any;
  failOnMissing?: any;
}

/** @interface CrashlyticsOptions
 * @property {string} ipaPath Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action
 * @property {string} apkPath Path to your APK file
 * @property {string} crashlyticsPath Path to the submit binary in the Crashlytics bundle (iOS) or `crashlytics-devtools.jar` file (Android)
 * @property {string} apiToken Crashlytics API Key
 * @property {string} buildSecret Crashlytics Build Secret
 * @property {string} notesPath Path to the release notes
 * @property {string} notes The release notes as string - uses :notes_path under the hood
 * @property {any} groups The groups used for distribution, separated by commas
 * @property {any} emails Pass email addresses of testers, separated by commas
 * @property {any} notifications Crashlytics notification option (true/false)
 * @property {any} debug Crashlytics debug option (true/false)
 */
interface CrashlyticsOptions {
  ipaPath?: string;
  apkPath?: string;
  crashlyticsPath?: string;
  apiToken: string;
  buildSecret: string;
  notesPath?: string;
  notes?: string;
  groups?: any;
  emails?: any;
  notifications: any;
  debug: any;
}

/** @interface CreateAppOnManagedPlayStoreOptions
 * @property {string} jsonKey The path to a file containing service account JSON, used to authenticate with Google
 * @property {string} jsonKeyData The raw service account JSON data used to authenticate with Google
 * @property {string} developerAccountId The ID of your Google Play Console account. Can be obtained from the URL when you log in (`https://play.google.com/apps/publish/?account=...` or when you 'Obtain private app publishing rights' (https://developers.google.com/android/work/play/custom-app-api/get-started#retrieve_the_developer_account_id)
 * @property {string} apk Path to the APK file to upload
 * @property {string} appTitle App Title
 * @property {string} language Default app language (e.g. 'en_US')
 * @property {string} rootUrl Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
 * @property {any} timeout Timeout for read, open, and send (in seconds)
 */
interface CreateAppOnManagedPlayStoreOptions {
  jsonKey?: string;
  jsonKeyData?: string;
  developerAccountId: string;
  apk: string;
  appTitle: string;
  language: string;
  rootUrl?: string;
  timeout?: any;
}

/** @interface CreateAppOnlineOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier App Identifier (Bundle ID, e.g. com.krausefx.app)
 * @property {string} bundleIdentifierSuffix App Identifier Suffix (Ignored if App Identifier does not end with .*)
 * @property {string} appName App Name
 * @property {string} appVersion Initial version number (e.g. '1.0')
 * @property {string} sku SKU Number (e.g. '1234')
 * @property {string} platform The platform to use (optional)
 * @property {string[]} platforms The platforms to use (optional)
 * @property {string} language Primary Language (e.g. 'English', 'German')
 * @property {string} companyName The name of your company. Only required if it's the first app you create
 * @property {any} skipItc Skip the creation of the app on App Store Connect
 * @property {string[]} itcUsers Array of App Store Connect users. If provided, you can limit access to this newly created app for users with the App Manager, Developer, Marketer or Sales roles
 * @property {any} enabledFeatures **DEPRECATED!** Please use `enable_services` instead - Array with Spaceship App Services
 * @property {any} enableServices Array with Spaceship App Services (e.g. access_wifi: (on|off), app_group: (on|off), apple_pay: (on|off), associated_domains: (on|off), auto_fill_credential: (on|off), data_protection: (complete|unlessopen|untilfirstauth), game_center: (on|off), health_kit: (on|off), home_kit: (on|off), hotspot: (on|off), icloud: (legacy|cloudkit), in_app_purchase: (on|off), inter_app_audio: (on|off), multipath: (on|off), network_extension: (on|off), nfc_tag_reading: (on|off), personal_vpn: (on|off), passbook: (on|off), push_notification: (on|off), siri_kit: (on|off), vpn_configuration: (on|off), wallet: (on|off), wireless_accessory: (on|off))
 * @property {any} skipDevcenter Skip the creation of the app on the Apple Developer Portal
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {any} itcTeamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} itcTeamName The name of your App Store Connect team if you're in multiple teams
 */
interface CreateAppOnlineOptions {
  username: string;
  appIdentifier: string;
  bundleIdentifierSuffix?: string;
  appName: string;
  appVersion?: string;
  sku: string;
  platform?: string;
  platforms?: string[];
  language: string;
  companyName?: string;
  skipItc: any;
  itcUsers?: string[];
  enabledFeatures?: any;
  enableServices: any;
  skipDevcenter: any;
  teamId?: string;
  teamName?: string;
  itcTeamId?: any;
  itcTeamName?: string;
}

/** @interface CreateKeychainOptions
 * @property {string} name Keychain name
 * @property {string} path Path to keychain
 * @property {string} password Password for the keychain
 * @property {any} defaultKeychain Should the newly created Keychain be the new system default keychain
 * @property {any} unlock Unlock keychain after create
 * @property {any} timeout timeout interval in seconds. Set `false` if you want to specify "no time-out"
 * @property {any} lockWhenSleeps Lock keychain when the system sleeps
 * @property {any} lockAfterTimeout Lock keychain after timeout interval
 * @property {any} addToSearchList Add keychain to search list
 * @property {any} requireCreate Fail the action if the Keychain already exists
 */
interface CreateKeychainOptions {
  name?: string;
  path?: string;
  password: string;
  defaultKeychain: any;
  unlock: any;
  timeout: any;
  lockWhenSleeps: any;
  lockAfterTimeout: any;
  addToSearchList: any;
  requireCreate: any;
}

/** @interface CreatePullRequestOptions
 * @property {string} apiToken Personal API Token for GitHub - generate one at https://github.com/settings/tokens
 * @property {string} repo The name of the repository you want to submit the pull request to
 * @property {string} title The title of the pull request
 * @property {string} body The contents of the pull request
 * @property {boolean} draft Indicates whether the pull request is a draft
 * @property {string[]} labels The labels for the pull request
 * @property {any} milestone The milestone ID (Integer) for the pull request
 * @property {string} head The name of the branch where your changes are implemented (defaults to the current branch name)
 * @property {string} base The name of the branch you want your changes pulled into (defaults to `master`)
 * @property {string} apiUrl The URL of GitHub API - used when the Enterprise (default to `https://api.github.com`)
 * @property {string[]} assignees The assignees for the pull request
 * @property {string[]} reviewers The reviewers (slug) for the pull request
 * @property {string[]} teamReviewers The team reviewers (slug) for the pull request
 */
interface CreatePullRequestOptions {
  apiToken: string;
  repo: string;
  title: string;
  body?: string;
  draft?: boolean;
  labels?: string[];
  milestone?: any;
  head?: string;
  base?: string;
  apiUrl?: string;
  assignees?: string[];
  reviewers?: string[];
  teamReviewers?: string[];
}

/** @interface DangerOptions
 * @property {any} useBundleExec Use bundle exec when there is a Gemfile presented
 * @property {any} verbose Show more debugging information
 * @property {string} dangerId The identifier of this Danger instance
 * @property {string} dangerfile The location of your Dangerfile
 * @property {string} githubApiToken GitHub API token for danger
 * @property {any} failOnErrors Should always fail the build process, defaults to false
 * @property {any} newComment Makes Danger post a new comment instead of editing its previous one
 * @property {any} removePreviousComments Makes Danger remove all previous comment and create a new one in the end of the list
 * @property {string} base A branch/tag/commit to use as the base of the diff. [master|dev|stable]
 * @property {string} head A branch/tag/commit to use as the head. [master|dev|stable]
 * @property {string} pr Run danger on a specific pull request. e.g. "https://github.com/danger/danger/pull/518"
 */
interface DangerOptions {
  useBundleExec: any;
  verbose: any;
  dangerId?: string;
  dangerfile?: string;
  githubApiToken?: string;
  failOnErrors?: any;
  newComment?: any;
  removePreviousComments?: any;
  base?: string;
  head?: string;
  pr?: string;
}

/** @interface DebugOptions

*/
interface DebugOptions {}

/** @interface DefaultPlatformOptions

*/
interface DefaultPlatformOptions {}

/** @interface DeleteKeychainOptions
 * @property {string} name Keychain name
 * @property {string} keychainPath Keychain path
 */
interface DeleteKeychainOptions {
  name?: string;
  keychainPath?: string;
}

/** @interface DeliverOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} appVersion The version that should be edited or created
 * @property {string} ipa Path to your ipa file
 * @property {string} pkg Path to your pkg file
 * @property {string} buildNumber If set the given build number (already uploaded to iTC) will be used instead of the current built one
 * @property {string} platform The platform to use (optional)
 * @property {any} editLive Modify live metadata, this option disables ipa upload and screenshot upload
 * @property {any} useLiveVersion Force usage of live version rather than edit version
 * @property {string} metadataPath Path to the folder containing the metadata files
 * @property {string} screenshotsPath Path to the folder containing the screenshots
 * @property {any} skipBinaryUpload Skip uploading an ipa or pkg to App Store Connect
 * @property {any} skipScreenshots Don't upload the screenshots
 * @property {any} skipMetadata Don't upload the metadata (e.g. title, description). This will still upload screenshots
 * @property {any} skipAppVersionUpdate Don't update app version for submission
 * @property {any} force Skip the HTML report file verification
 * @property {any} overwriteScreenshots Clear all previously uploaded screenshots before uploading the new ones
 * @property {any} submitForReview Submit the new version for Review after uploading everything
 * @property {any} rejectIfPossible Rejects the previously submitted build if it's in a state where it's possible
 * @property {any} automaticRelease Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
 * @property {any} autoReleaseDate Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
 * @property {any} phasedRelease Enable the phased release feature of iTC
 * @property {any} resetRatings Reset the summary rating when you release a new version of the application
 * @property {any} priceTier The price tier of this application
 * @property {string} appRatingConfigPath Path to the app rating's config
 * @property {any} submissionInformation Extra information for the submission (e.g. compliance specifications, IDFA settings)
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {string} devPortalTeamId The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
 * @property {string} devPortalTeamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} itcProvider The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
 * @property {any} runPrecheckBeforeSubmit Run precheck before submitting to app review
 * @property {any} precheckDefaultRuleLevel The default precheck rule level unless otherwise configured
 * @property {string[]} individualMetadataItems An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
 * @property {string} appIcon Metadata: The path to the app icon
 * @property {string} appleWatchAppIcon Metadata: The path to the Apple Watch app icon
 * @property {string} copyright Metadata: The copyright notice
 * @property {string} primaryCategory Metadata: The english name of the primary category (e.g. `Business`, `Books`)
 * @property {string} secondaryCategory Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
 * @property {string} primaryFirstSubCategory Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} primarySecondSubCategory Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} secondaryFirstSubCategory Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} secondarySecondSubCategory Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
 * @property {{string: string}} tradeRepresentativeContactInformation Metadata: A hash containing the trade representative contact information
 * @property {{string: string}} appReviewInformation Metadata: A hash containing the review information
 * @property {string} appReviewAttachmentFile Metadata: Path to the app review attachment file
 * @property {any} description Metadata: The localised app description
 * @property {any} name Metadata: The localised app name
 * @property {{string: string}} subtitle Metadata: The localised app subtitle
 * @property {{string: string}} keywords Metadata: An array of localised keywords
 * @property {{string: string}} promotionalText Metadata: An array of localised promotional texts
 * @property {any} releaseNotes Metadata: Localised release notes for this version
 * @property {any} privacyUrl Metadata: Localised privacy url
 * @property {any} appleTvPrivacyPolicy Metadata: Localised Apple TV privacy policy text
 * @property {any} supportUrl Metadata: Localised support url
 * @property {any} marketingUrl Metadata: Localised marketing url
 * @property {string[]} languages Metadata: List of languages to activate
 * @property {any} ignoreLanguageDirectoryValidation Ignore errors when invalid languages are found in metadata and screenshot directories
 * @property {any} precheckIncludeInAppPurchases Should precheck check in-app purchases?
 * @property {any} app The (spaceship) app ID of the app you want to use/modify
 */
interface DeliverOptions {
  username: string;
  appIdentifier?: string;
  appVersion?: string;
  ipa?: string;
  pkg?: string;
  buildNumber?: string;
  platform?: string;
  editLive?: any;
  useLiveVersion: any;
  metadataPath?: string;
  screenshotsPath?: string;
  skipBinaryUpload: any;
  skipScreenshots: any;
  skipMetadata: any;
  skipAppVersionUpdate: any;
  force: any;
  overwriteScreenshots: any;
  submitForReview: any;
  rejectIfPossible: any;
  automaticRelease: any;
  autoReleaseDate?: any;
  phasedRelease?: any;
  resetRatings?: any;
  priceTier?: any;
  appRatingConfigPath?: string;
  submissionInformation?: any;
  teamId?: any;
  teamName?: string;
  devPortalTeamId?: string;
  devPortalTeamName?: string;
  itcProvider?: string;
  runPrecheckBeforeSubmit: any;
  precheckDefaultRuleLevel: any;
  individualMetadataItems: string[];
  appIcon?: string;
  appleWatchAppIcon?: string;
  copyright?: string;
  primaryCategory?: string;
  secondaryCategory?: string;
  primaryFirstSubCategory?: string;
  primarySecondSubCategory?: string;
  secondaryFirstSubCategory?: string;
  secondarySecondSubCategory?: string;
  tradeRepresentativeContactInformation?: { string: string };
  appReviewInformation?: { string: string };
  appReviewAttachmentFile?: string;
  description?: any;
  name?: any;
  subtitle?: { string: string };
  keywords?: { string: string };
  promotionalText?: { string: string };
  releaseNotes?: any;
  privacyUrl?: any;
  appleTvPrivacyPolicy?: any;
  supportUrl?: any;
  marketingUrl?: any;
  languages?: string[];
  ignoreLanguageDirectoryValidation: any;
  precheckIncludeInAppPurchases?: any;
  app: any;
}

/** @interface DeploygateOptions
 * @property {string} apiToken Deploygate API Token
 * @property {string} user Target username or organization name
 * @property {string} ipa Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action
 * @property {string} apk Path to your APK file
 * @property {string} message Release Notes
 * @property {string} distributionKey Target Distribution Key
 * @property {string} releaseNote Release note for distribution page
 * @property {any} disableNotify Disables Push notification emails
 * @property {string} distributionName Target Distribution Name
 */
interface DeploygateOptions {
  apiToken: string;
  user: string;
  ipa?: string;
  apk?: string;
  message: string;
  distributionKey?: string;
  releaseNote?: string;
  disableNotify?: any;
  distributionName?: string;
}

/** @interface DotgpgEnvironmentOptions
 * @property {string} dotgpgFile Path to your gpg file
 */
interface DotgpgEnvironmentOptions {
  dotgpgFile: string;
}

/** @interface DownloadOptions
 * @property {string} url The URL that should be downloaded
 */
interface DownloadOptions {
  url: string;
}

/** @interface DownloadDsymsOptions
 * @property {string} username Your Apple ID Username for App Store Connect
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {string} platform The app platform for dSYMs you wish to download (ios, appletvos)
 * @property {string} version The app version for dSYMs you wish to download, pass in 'latest' to download only the latest build's dSYMs or 'live' to download only the live version dSYMs
 * @property {string} buildNumber The app build_number for dSYMs you wish to download
 * @property {string} minVersion The minimum app version for dSYMs you wish to download
 * @property {string} outputDirectory Where to save the download dSYMs, defaults to the current path
 * @property {boolean} waitForDsymProcessing Wait for dSYMs to process
 * @property {any} waitTimeout Number of seconds to wait for dSYMs to process
 */
interface DownloadDsymsOptions {
  username: string;
  appIdentifier: string;
  teamId?: any;
  teamName?: string;
  platform?: string;
  version?: string;
  buildNumber?: string;
  minVersion?: string;
  outputDirectory?: string;
  waitForDsymProcessing?: boolean;
  waitTimeout?: any;
}

/** @interface DownloadFromPlayStoreOptions
 * @property {string} packageName The package name of the application to use
 * @property {string} versionName Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
 * @property {string} track The track of the application to use. The default available tracks are: production, beta, alpha, internal
 * @property {string} metadataPath Path to the directory containing the metadata files
 * @property {string} key **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
 * @property {string} issuer **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
 * @property {string} jsonKey The path to a file containing service account JSON, used to authenticate with Google
 * @property {string} jsonKeyData The raw service account JSON data used to authenticate with Google
 * @property {string} rootUrl Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
 * @property {any} timeout Timeout for read, open, and send (in seconds)
 */
interface DownloadFromPlayStoreOptions {
  packageName: string;
  versionName?: string;
  track: string;
  metadataPath?: string;
  key?: string;
  issuer?: string;
  jsonKey?: string;
  jsonKeyData?: string;
  rootUrl?: string;
  timeout?: any;
}

/** @interface DsymZipOptions
 * @property {string} archivePath Path to your xcarchive file. Optional if you use the `xcodebuild` action
 * @property {string} dsymPath Path for generated dsym. Optional, default is your apps root directory
 * @property {any} all Whether or not all dSYM files are to be included. Optional, default is false in which only your app dSYM is included
 */
interface DsymZipOptions {
  archivePath?: string;
  dsymPath?: string;
  all?: any;
}

/** @interface EchoOptions
 * @property {string} message Message to be printed out
 */
interface EchoOptions {
  message?: string;
}

/** @interface EnsureBundleExecOptions

*/
interface EnsureBundleExecOptions {}

/** @interface EnsureEnvVarsOptions
 * @property {string[]} envVars The environment variables names that should be checked
 */
interface EnsureEnvVarsOptions {
  envVars: string[];
}

/** @interface EnsureGitBranchOptions
 * @property {string} branch The branch that should be checked for. String that can be either the full name of the branch or a regex e.g. `^feature/.*$` to match
 */
interface EnsureGitBranchOptions {
  branch: string;
}

/** @interface EnsureGitStatusCleanOptions
 * @property {any} showUncommittedChanges The flag whether to show uncommitted changes if the repo is dirty
 * @property {any} showDiff The flag whether to show the git diff if the repo is dirty
 */
interface EnsureGitStatusCleanOptions {
  showUncommittedChanges?: any;
  showDiff?: any;
}

/** @interface EnsureNoDebugCodeOptions
 * @property {string} text The text that must not be in the code base
 * @property {string} path The directory containing all the source files
 * @property {string} extension The extension that should be searched for
 * @property {any} extensions An array of file extensions that should be searched for
 * @property {string} exclude Exclude a certain pattern from the search
 * @property {string[]} excludeDirs An array of dirs that should not be included in the search
 */
interface EnsureNoDebugCodeOptions {
  text: string;
  path: string;
  extension?: string;
  extensions?: any;
  exclude?: string;
  excludeDirs?: string[];
}

/** @interface EnsureXcodeVersionOptions
 * @property {string} version Xcode version to verify that is selected
 * @property {boolean} strict Should the version be verified strictly (all 3 version numbers), or matching only the given version numbers (i.e. `11.3` == `11.3.x`)
 */
interface EnsureXcodeVersionOptions {
  version?: string;
  strict: boolean;
}

/** @interface EnvironmentVariableOptions
 * @property {{string: string}} set Set the environment variables named
 * @property {string} get Get the environment variable named
 * @property {string} remove Remove the environment variable named
 */
interface EnvironmentVariableOptions {
  set?: { string: string };
  get?: string;
  remove?: string;
}

/** @interface ErbOptions
 * @property {string} template ERB Template File
 * @property {string} destination Destination file
 * @property {{string: string}} placeholders Placeholders given as a hash
 */
interface ErbOptions {
  template: string;
  destination?: string;
  placeholders: { string: string };
}

/** @interface FastlaneVersionOptions

*/
interface FastlaneVersionOptions {}

/** @interface FlockOptions
 * @property {string} message Message text
 * @property {string} token Token for the Flock incoming webhook
 * @property {string} baseUrl Base URL of the Flock incoming message webhook
 */
interface FlockOptions {
  message: string;
  token: string;
  baseUrl?: string;
}

/** @interface FrameScreenshotsOptions
 * @property {boolean} white Use white device frames
 * @property {boolean} silver Use white device frames. Alias for :white
 * @property {boolean} roseGold Use rose gold device frames. Alias for :rose_gold
 * @property {boolean} gold Use gold device frames. Alias for :gold
 * @property {string} forceDeviceType Forces a given device type, useful for Mac screenshots, as their sizes vary
 * @property {boolean} useLegacyIphone5s Use iPhone 5s instead of iPhone SE frames
 * @property {boolean} useLegacyIphone6s Use iPhone 6s frames instead of iPhone 7 frames
 * @property {boolean} useLegacyIphone7 Use iPhone 7 frames instead of iPhone 8 frames
 * @property {boolean} useLegacyIphonex Use iPhone X instead of iPhone XS frames
 * @property {boolean} useLegacyIphonexr Use iPhone XR instead of iPhone 11 frames
 * @property {boolean} useLegacyIphonexs Use iPhone XS instead of iPhone 11 Pro frames
 * @property {boolean} useLegacyIphonexsmax Use iPhone XS Max instead of iPhone 11 Pro Max frames
 * @property {any} forceOrientationBlock [Advanced] A block to customize your screenshots' device orientation
 * @property {boolean} debugMode Output debug information in framed screenshots
 * @property {boolean} resume Resume frameit instead of reprocessing all screenshots
 * @property {string} usePlatform Choose a platform, the valid options are IOS, ANDROID and ANY (IOS is default to ensure backward compatibility)
 * @property {string} path The path to the directory containing the screenshots
 */
interface FrameScreenshotsOptions {
  white?: boolean;
  silver?: boolean;
  roseGold?: boolean;
  gold?: boolean;
  forceDeviceType?: string;
  useLegacyIphone5s: boolean;
  useLegacyIphone6s: boolean;
  useLegacyIphone7: boolean;
  useLegacyIphonex: boolean;
  useLegacyIphonexr: boolean;
  useLegacyIphonexs: boolean;
  useLegacyIphonexsmax: boolean;
  forceOrientationBlock?: any;
  debugMode: boolean;
  resume: boolean;
  usePlatform?: string;
  path: string;
}

/** @interface FrameitOptions
 * @property {boolean} white Use white device frames
 * @property {boolean} silver Use white device frames. Alias for :white
 * @property {boolean} roseGold Use rose gold device frames. Alias for :rose_gold
 * @property {boolean} gold Use gold device frames. Alias for :gold
 * @property {string} forceDeviceType Forces a given device type, useful for Mac screenshots, as their sizes vary
 * @property {boolean} useLegacyIphone5s Use iPhone 5s instead of iPhone SE frames
 * @property {boolean} useLegacyIphone6s Use iPhone 6s frames instead of iPhone 7 frames
 * @property {boolean} useLegacyIphone7 Use iPhone 7 frames instead of iPhone 8 frames
 * @property {boolean} useLegacyIphonex Use iPhone X instead of iPhone XS frames
 * @property {boolean} useLegacyIphonexr Use iPhone XR instead of iPhone 11 frames
 * @property {boolean} useLegacyIphonexs Use iPhone XS instead of iPhone 11 Pro frames
 * @property {boolean} useLegacyIphonexsmax Use iPhone XS Max instead of iPhone 11 Pro Max frames
 * @property {any} forceOrientationBlock [Advanced] A block to customize your screenshots' device orientation
 * @property {boolean} debugMode Output debug information in framed screenshots
 * @property {boolean} resume Resume frameit instead of reprocessing all screenshots
 * @property {string} usePlatform Choose a platform, the valid options are IOS, ANDROID and ANY (IOS is default to ensure backward compatibility)
 * @property {string} path The path to the directory containing the screenshots
 */
interface FrameitOptions {
  white?: boolean;
  silver?: boolean;
  roseGold?: boolean;
  gold?: boolean;
  forceDeviceType?: string;
  useLegacyIphone5s: boolean;
  useLegacyIphone6s: boolean;
  useLegacyIphone7: boolean;
  useLegacyIphonex: boolean;
  useLegacyIphonexr: boolean;
  useLegacyIphonexs: boolean;
  useLegacyIphonexsmax: boolean;
  forceOrientationBlock?: any;
  debugMode: boolean;
  resume: boolean;
  usePlatform?: string;
  path: string;
}

/** @interface GcovrOptions

*/
interface GcovrOptions {}

/** @interface GetBuildNumberOptions
 * @property {string} xcodeproj optional, you must specify the path to your main Xcode project if it is not in the project root directory
 * @property {boolean} hideErrorWhenVersioningDisabled Used during `fastlane init` to hide the error message
 */
interface GetBuildNumberOptions {
  xcodeproj?: string;
  hideErrorWhenVersioningDisabled: boolean;
}

/** @interface GetBuildNumberRepositoryOptions
 * @property {any} useHgRevisionNumber Use hg revision number instead of hash (ignored for non-hg repos)
 */
interface GetBuildNumberRepositoryOptions {
  useHgRevisionNumber?: any;
}

/** @interface GetCertificatesOptions
 * @property {boolean} development Create a development certificate instead of a distribution one
 * @property {string} type Create specific certificate type (takes precedence over :development)
 * @property {boolean} force Create a certificate even if an existing certificate exists
 * @property {boolean} generateAppleCerts Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} filename The filename of certificate to store
 * @property {string} outputPath The path to a directory in which all certificates and private keys should be stored
 * @property {string} keychainPath Path to a custom keychain
 * @property {string} keychainPassword This might be required the first time you access certificates on a new mac. For the login/default keychain this is your account password
 * @property {string} platform Set the provisioning profile's platform (ios, macos)
 */
interface GetCertificatesOptions {
  development: boolean;
  type?: string;
  force: boolean;
  generateAppleCerts: boolean;
  username: string;
  teamId?: string;
  teamName?: string;
  filename?: string;
  outputPath: string;
  keychainPath: string;
  keychainPassword?: string;
  platform: string;
}

/** @interface GetGithubReleaseOptions
 * @property {string} url The path to your repo, e.g. 'KrauseFx/fastlane'
 * @property {string} serverUrl The server url. e.g. 'https://your.github.server/api/v3' (Default: 'https://api.github.com')
 * @property {string} version The version tag of the release to check
 * @property {string} apiToken GitHub Personal Token (required for private repositories)
 */
interface GetGithubReleaseOptions {
  url: string;
  serverUrl?: string;
  version: string;
  apiToken?: string;
}

/** @interface GetInfoPlistValueOptions
 * @property {string} key Name of parameter
 * @property {string} path Path to plist file you want to read
 */
interface GetInfoPlistValueOptions {
  key: string;
  path: string;
}

/** @interface GetIpaInfoPlistValueOptions
 * @property {string} key Name of parameter
 * @property {string} ipa Path to IPA
 */
interface GetIpaInfoPlistValueOptions {
  key: string;
  ipa: string;
}

/** @interface GetManagedPlayStorePublishingRightsOptions
 * @property {string} jsonKey The path to a file containing service account JSON, used to authenticate with Google
 * @property {string} jsonKeyData The raw service account JSON data used to authenticate with Google
 */
interface GetManagedPlayStorePublishingRightsOptions {
  jsonKey?: string;
  jsonKeyData?: string;
}

/** @interface GetProvisioningProfileOptions
 * @property {any} adhoc Setting this flag will generate AdHoc profiles instead of App Store Profiles
 * @property {any} developerId Setting this flag will generate Developer ID profiles instead of App Store Profiles
 * @property {any} development Renew the development certificate instead of the production one
 * @property {any} skipInstall By default, the certificate will be added to your local machine. Setting this flag will skip this action
 * @property {any} force Renew provisioning profiles regardless of its state - to automatically add all devices for ad hoc profiles
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} provisioningName The name of the profile that is used on the Apple Developer Portal
 * @property {any} ignoreProfilesWithDifferentName Use in combination with :provisioning_name - when true only profiles matching this exact name will be downloaded
 * @property {string} outputPath Directory in which the profile should be stored
 * @property {string} certId The ID of the code signing certificate to use (e.g. 78ADL6LVAA)
 * @property {string} certOwnerName The certificate name to use for new profiles, or to renew with. (e.g. "Felix Krause")
 * @property {string} filename Filename to use for the generated provisioning profile (must include .mobileprovision)
 * @property {any} skipFetchProfiles Skips the verification of existing profiles which is useful if you have thousands of profiles
 * @property {any} skipCertificateVerification Skips the verification of the certificates for every existing profiles. This will make sure the provisioning profile can be used on the local machine
 * @property {any} platform Set the provisioning profile's platform (i.e. ios, tvos)
 * @property {any} readonly Only fetch existing profile, don't generate new ones
 * @property {string} templateName The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
 */
interface GetProvisioningProfileOptions {
  adhoc: any;
  developerId: any;
  development: any;
  skipInstall: any;
  force: any;
  appIdentifier: string;
  username: string;
  teamId?: string;
  teamName?: string;
  provisioningName?: string;
  ignoreProfilesWithDifferentName?: any;
  outputPath: string;
  certId?: string;
  certOwnerName?: string;
  filename?: string;
  skipFetchProfiles: any;
  skipCertificateVerification: any;
  platform: any;
  readonly?: any;
  templateName?: string;
}

/** @interface GetPushCertificateOptions
 * @property {any} development Renew the development push certificate instead of the production one
 * @property {any} websitePush Create a Website Push certificate
 * @property {any} generateP12 Generate a p12 file additionally to a PEM file
 * @property {any} activeDaysLimit If the current certificate is active for less than this number of days, generate a new one
 * @property {any} force Create a new push certificate, even if the current one is active for 30 (or PEM_ACTIVE_DAYS_LIMIT) more days
 * @property {any} savePrivateKey Set to save the private RSA key
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} p12Password The password that is used for your p12 file
 * @property {string} pemName The file name of the generated .pem file
 * @property {string} outputPath The path to a directory in which all certificates and private keys should be stored
 * @property {any} newProfile Block that is called if there is a new profile
 */
interface GetPushCertificateOptions {
  development: any;
  websitePush: any;
  generateP12: any;
  activeDaysLimit: any;
  force: any;
  savePrivateKey: any;
  appIdentifier: string;
  username: string;
  teamId?: string;
  teamName?: string;
  p12Password: string;
  pemName?: string;
  outputPath: string;
  newProfile?: any;
}

/** @interface GetVersionNumberOptions
 * @property {string} xcodeproj Path to the main Xcode project to read version number from, optional. By default will use the first Xcode project found within the project root directory
 * @property {string} target Target name, optional. Will be needed if you have more than one non-test target to avoid being prompted to select one
 * @property {string} configuration Configuration name, optional. Will be needed if you have altered the configurations from the default or your version number depends on the configuration selected
 */
interface GetVersionNumberOptions {
  xcodeproj?: string;
  target?: string;
  configuration?: string;
}

/** @interface GitAddOptions
 * @property {any} path The file(s) and path(s) you want to add
 * @property {any} shellEscape Shell escapes paths (set to false if using wildcards or manually escaping spaces in :path)
 * @property {string} pathspec **DEPRECATED!** Use `--path` instead - The pathspec you want to add files from
 */
interface GitAddOptions {
  path?: any;
  shellEscape?: any;
  pathspec?: string;
}

/** @interface GitBranchOptions

*/
interface GitBranchOptions {}

/** @interface GitCommitOptions
 * @property {any} path The file you want to commit
 * @property {string} message The commit message that should be used
 * @property {boolean} skipGitHooks Set to true to pass --no-verify to git
 * @property {boolean} allowNothingToCommit Set to true to allow commit without any git changes
 */
interface GitCommitOptions {
  path: any;
  message: string;
  skipGitHooks?: boolean;
  allowNothingToCommit?: boolean;
}

/** @interface GitPullOptions
 * @property {any} onlyTags Simply pull the tags, and not bring new commits to the current branch from the remote
 */
interface GitPullOptions {
  onlyTags?: any;
}

/** @interface GitSubmoduleUpdateOptions
 * @property {boolean} recursive Should the submodules be updated recursively
 * @property {boolean} init Should the submodules be initiated before update
 */
interface GitSubmoduleUpdateOptions {
  recursive: boolean;
  init: boolean;
}

/** @interface GitTagExistsOptions
 * @property {string} tag The tag name that should be checked
 * @property {boolean} remote Whether to check remote. Defaults to `false`
 * @property {string} remoteName The remote to check. Defaults to `origin`
 */
interface GitTagExistsOptions {
  tag: string;
  remote?: boolean;
  remoteName?: string;
}

/** @interface GithubApiOptions
 * @property {string} serverUrl The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
 * @property {string} apiToken Personal API Token for GitHub - generate one at https://github.com/settings/tokens
 * @property {string} httpMethod The HTTP method. e.g. GET / POST
 * @property {any} body The request body in JSON or hash format
 * @property {string} rawBody The request body taken verbatim instead of as JSON, useful for file uploads
 * @property {string} path The endpoint path. e.g. '/repos/:owner/:repo/readme'
 * @property {string} url The complete full url - used instead of path. e.g. 'https://uploads.github.com/repos/fastlane...'
 * @property {any} errorHandlers Optional error handling hash based on status code, or pass '*' to handle all errors
 * @property {any} headers Optional headers to apply
 * @property {boolean} secure Optionally disable secure requests (ssl_verify_peer)
 */
interface GithubApiOptions {
  serverUrl?: string;
  apiToken: string;
  httpMethod?: string;
  body?: any;
  rawBody?: string;
  path?: string;
  url?: string;
  errorHandlers?: any;
  headers?: any;
  secure?: boolean;
}

/** @interface GooglePlayTrackVersionCodesOptions
 * @property {string} packageName The package name of the application to use
 * @property {string} track The track of the application to use. The default available tracks are: production, beta, alpha, internal
 * @property {string} key **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
 * @property {string} issuer **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
 * @property {string} jsonKey The path to a file containing service account JSON, used to authenticate with Google
 * @property {string} jsonKeyData The raw service account JSON data used to authenticate with Google
 * @property {string} rootUrl Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
 * @property {any} timeout Timeout for read, open, and send (in seconds)
 */
interface GooglePlayTrackVersionCodesOptions {
  packageName: string;
  track: string;
  key?: string;
  issuer?: string;
  jsonKey?: string;
  jsonKeyData?: string;
  rootUrl?: string;
  timeout?: any;
}

/** @interface GradleOptions
 * @property {string} task The gradle task you want to execute, e.g. `assemble`, `bundle` or `test`. For tasks such as `assembleMyFlavorRelease` you should use gradle(task: 'assemble', flavor: 'Myflavor', build_type: 'Release')
 * @property {string} flavor The flavor that you want the task for, e.g. `MyFlavor`. If you are running the `assemble` task in a multi-flavor project, and you rely on Actions.lane_context[SharedValues::GRADLE_APK_OUTPUT_PATH] then you must specify a flavor here or else this value will be undefined
 * @property {string} buildType The build type that you want the task for, e.g. `Release`. Useful for some tasks such as `assemble`
 * @property {string[]} tasks The multiple gradle tasks that you want to execute, e.g. `[assembleDebug, bundleDebug]`
 * @property {string} flags All parameter flags you want to pass to the gradle command, e.g. `--exitcode --xml file.xml`
 * @property {string} projectDir The root directory of the gradle project
 * @property {string} gradlePath The path to your `gradlew`. If you specify a relative path, it is assumed to be relative to the `project_dir`
 * @property {any} properties Gradle properties to be exposed to the gradle script
 * @property {any} systemProperties Gradle system properties to be exposed to the gradle script
 * @property {string} serial Android serial, which device should be used for this command
 * @property {any} printCommand Control whether the generated Gradle command is printed as output before running it (true/false)
 * @property {any} printCommandOutput Control whether the output produced by given Gradle command is printed while running (true/false)
 */
interface GradleOptions {
  task?: string;
  flavor?: string;
  buildType?: string;
  tasks?: string[];
  flags?: string;
  projectDir: string;
  gradlePath?: string;
  properties?: any;
  systemProperties?: any;
  serial: string;
  printCommand: any;
  printCommandOutput: any;
}

/** @interface GymOptions
 * @property {string} workspace Path to the workspace file
 * @property {string} project Path to the project file
 * @property {string} scheme The project's scheme. Make sure it's marked as `Shared`
 * @property {boolean} clean Should the project be cleaned before building it?
 * @property {string} outputDirectory The directory in which the ipa file should be stored in
 * @property {string} outputName The name of the resulting ipa file
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {boolean} silent Hide all information that's not necessary while building
 * @property {string} codesigningIdentity The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
 * @property {boolean} skipPackageIpa Should we skip packaging the ipa?
 * @property {boolean} skipPackagePkg Should we skip packaging the pkg?
 * @property {boolean} includeSymbols Should the ipa file include symbols?
 * @property {boolean} includeBitcode Should the ipa file include bitcode?
 * @property {string} exportMethod Method used to export the archive. Valid values are: app-store, ad-hoc, package, enterprise, development, developer-id
 * @property {{string: string}} exportOptions Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
 * @property {string} exportXcargs Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {boolean} skipBuildArchive Export ipa from previously built xcarchive. Uses archive_path as source
 * @property {boolean} skipArchive After building, don't archive, effectively not including -archivePath param
 * @property {boolean} skipCodesigning Build without codesigning
 * @property {string} catalystPlatform Platform to build when using a Catalyst enabled app. Valid values are: ios, macos
 * @property {string} installerCertName Full name of 3rd Party Mac Developer Installer or Deveoper ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
 * @property {string} buildPath The directory in which the archive should be stored in
 * @property {string} archivePath The path to the created archive
 * @property {string} derivedDataPath The directory where built products and other derived data will go
 * @property {boolean} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {string} resultBundlePath Path to the result bundle directory to create. Ignored if `result_bundle` if false
 * @property {string} buildlogPath The directory where to store the build log
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} toolchain The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
 * @property {string} destination Use a custom destination for building the app
 * @property {string} exportTeamId Optional: Sometimes you need to specify a team id when exporting the ipa file
 * @property {string} xcargs Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {boolean} suppressXcodeOutput Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
 * @property {boolean} disableXcpretty Disable xcpretty formatting of build output
 * @property {boolean} xcprettyTestFormat Use the test (RSpec style) format for build output
 * @property {string} xcprettyFormatter A custom xcpretty formatter to use
 * @property {string} xcprettyReportJunit Have xcpretty create a JUnit-style XML report at the provided path
 * @property {string} xcprettyReportHtml Have xcpretty create a simple HTML report at the provided path
 * @property {string} xcprettyReportJson Have xcpretty create a JSON compilation database at the provided path
 * @property {boolean} analyzeBuildTime Analyze the project build time and store the output in 'culprits.txt' file
 * @property {boolean} xcprettyUtf Have xcpretty use unicode encoding when reporting builds
 * @property {boolean} skipProfileDetection Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 */
interface GymOptions {
  workspace?: string;
  project?: string;
  scheme?: string;
  clean: boolean;
  outputDirectory: string;
  outputName?: string;
  configuration?: string;
  silent: boolean;
  codesigningIdentity?: string;
  skipPackageIpa: boolean;
  skipPackagePkg: boolean;
  includeSymbols?: boolean;
  includeBitcode?: boolean;
  exportMethod?: string;
  exportOptions?: { string: string };
  exportXcargs?: string;
  skipBuildArchive?: boolean;
  skipArchive?: boolean;
  skipCodesigning?: boolean;
  catalystPlatform?: string;
  installerCertName?: string;
  buildPath?: string;
  archivePath?: string;
  derivedDataPath?: string;
  resultBundle?: boolean;
  resultBundlePath?: string;
  buildlogPath: string;
  sdk?: string;
  toolchain?: string;
  destination?: string;
  exportTeamId?: string;
  xcargs?: string;
  xcconfig?: string;
  suppressXcodeOutput?: boolean;
  disableXcpretty?: boolean;
  xcprettyTestFormat?: boolean;
  xcprettyFormatter?: string;
  xcprettyReportJunit?: string;
  xcprettyReportHtml?: string;
  xcprettyReportJson?: string;
  analyzeBuildTime?: boolean;
  xcprettyUtf?: boolean;
  skipProfileDetection?: boolean;
  clonedSourcePackagesPath?: string;
}

/** @interface HgAddTagOptions
 * @property {string} tag Tag to create
 */
interface HgAddTagOptions {
  tag: string;
}

/** @interface HgCommitVersionBumpOptions
 * @property {string} message The commit message when committing the version bump
 * @property {string} xcodeproj The path to your project file (Not the workspace). If you have only one, this is optional
 * @property {any} force Forces the commit, even if other files than the ones containing the version number have been modified
 * @property {string} testDirtyFiles A list of dirty files passed in for testing
 * @property {string} testExpectedFiles A list of expected changed files passed in for testing
 */
interface HgCommitVersionBumpOptions {
  message: string;
  xcodeproj?: string;
  force?: any;
  testDirtyFiles?: string;
  testExpectedFiles?: string;
}

/** @interface HgEnsureCleanStatusOptions

*/
interface HgEnsureCleanStatusOptions {}

/** @interface HgPushOptions
 * @property {any} force Force push to remote
 * @property {string} destination The destination to push to
 */
interface HgPushOptions {
  force: any;
  destination?: string;
}

/** @interface HipchatOptions
 * @property {string} message The message to post on HipChat
 * @property {string} channel The room or @username
 * @property {string} apiToken Hipchat API Token
 * @property {string} customColor Specify a custom color, this overrides the success boolean. Can be one of 'yellow', 'red', 'green', 'purple', 'gray', or 'random'
 * @property {any} success Was this build successful? (true/false)
 * @property {string} version Version of the Hipchat API. Must be 1 or 2
 * @property {any} notifyRoom Should the people in the room be notified? (true/false)
 * @property {string} apiHost The host of the HipChat-Server API
 * @property {string} messageFormat Format of the message to post. Must be either 'html' or 'text'
 * @property {any} includeHtmlHeader Should html formatted messages include a preformatted header? (true/false)
 * @property {string} from Name the message will appear to be sent from
 */
interface HipchatOptions {
  message: string;
  channel: string;
  apiToken: string;
  customColor?: string;
  success?: any;
  version: string;
  notifyRoom?: any;
  apiHost?: string;
  messageFormat?: string;
  includeHtmlHeader?: any;
  from?: string;
}

/** @interface HockeyOptions
 * @property {string} apk Path to your APK file
 * @property {string} apiToken API Token for Hockey Access
 * @property {string} ipa Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action. For Mac zip the .app. For Android provide path to .apk file. In addition you could use this to upload .msi, .zip, .pkg, etc if you use the 'create_update' mechanism
 * @property {string} dsym Path to your symbols file. For iOS and Mac provide path to app.dSYM.zip. For Android provide path to mappings.txt file
 * @property {any} createUpdate Set true if you want to create then update your app as opposed to just upload it. You will need the 'public_identifier', 'bundle_version' and 'bundle_short_version'
 * @property {string} notes Beta Notes
 * @property {string} notify Notify testers? "1" for yes
 * @property {string} status Download status: "1" = No user can download; "2" = Available for download (only possible with full-access token)
 * @property {string} createStatus Download status for initial version creation when create_update is true: "1" = No user can download; "2" = Available for download (only possible with full-access token)
 * @property {string} notesType Notes type for your :notes, "0" = Textile, "1" = Markdown (default)
 * @property {string} releaseType Release type of the app: "0" = Beta (default), "1" = Store, "2" = Alpha, "3" = Enterprise
 * @property {string} mandatory Set to "1" to make this update mandatory
 * @property {string} teams Comma separated list of team ID numbers to which this build will be restricted
 * @property {string} users Comma separated list of user ID numbers to which this build will be restricted
 * @property {string} tags Comma separated list of tags which will receive access to the build
 * @property {string} bundleShortVersion The bundle_short_version of your application, required when using `create_update`
 * @property {string} bundleVersion The bundle_version of your application, required when using `create_update`
 * @property {string} publicIdentifier App id of the app you are targeting, usually you won't need this value. Required, if `upload_dsym_only` set to `true`
 * @property {string} commitSha The Git commit SHA for this build
 * @property {string} repositoryUrl The URL of your source repository
 * @property {string} buildServerUrl The URL of the build job on your build server
 * @property {any} uploadDsymOnly Flag to upload only the dSYM file to hockey app
 * @property {string} ownerId ID for the owner of the app
 * @property {string} strategy Strategy: 'add' = to add the build as a new build even if it has the same build number (default); 'replace' = to replace a build with the same build number
 * @property {any} timeout Request timeout in seconds
 * @property {any} bypassCdn Flag to bypass Hockey CDN when it uploads successfully but reports error
 * @property {string} dsaSignature DSA signature for sparkle updates for macOS
 */
interface HockeyOptions {
  apk?: string;
  apiToken: string;
  ipa?: string;
  dsym?: string;
  createUpdate: any;
  notes: string;
  notify: string;
  status: string;
  createStatus: string;
  notesType: string;
  releaseType: string;
  mandatory: string;
  teams?: string;
  users?: string;
  tags?: string;
  bundleShortVersion?: string;
  bundleVersion?: string;
  publicIdentifier?: string;
  commitSha?: string;
  repositoryUrl?: string;
  buildServerUrl?: string;
  uploadDsymOnly: any;
  ownerId?: string;
  strategy: string;
  timeout?: any;
  bypassCdn: any;
  dsaSignature?: string;
}

/** @interface IftttOptions
 * @property {string} apiKey API key
 * @property {string} eventName The name of the event that will be triggered
 * @property {string} value1 Extra data sent with the event
 * @property {string} value2 Extra data sent with the event
 * @property {string} value3 Extra data sent with the event
 */
interface IftttOptions {
  apiKey: string;
  eventName: string;
  value1?: string;
  value2?: string;
  value3?: string;
}

/** @interface ImportOptions

*/
interface ImportOptions {}

/** @interface ImportCertificateOptions
 * @property {string} certificatePath Path to certificate
 * @property {string} certificatePassword Certificate password
 * @property {string} keychainName Keychain the items should be imported to
 * @property {string} keychainPath Path to the Keychain file to which the items should be imported
 * @property {string} keychainPassword The password for the keychain. Note that for the login keychain this is your user's password
 * @property {boolean} logOutput If output should be logged to the console
 */
interface ImportCertificateOptions {
  certificatePath: string;
  certificatePassword?: string;
  keychainName: string;
  keychainPath?: string;
  keychainPassword?: string;
  logOutput?: boolean;
}

/** @interface ImportFromGitOptions
 * @property {string} url The URL of the repository to import the Fastfile from
 * @property {string} branch The branch or tag to check-out on the repository
 * @property {string} dependencies The array of additional Fastfiles in the repository
 * @property {string} path The path of the Fastfile in the repository
 * @property {any} version The version to checkout on the repository. Optimistic match operator or multiple conditions can be used to select the latest version within constraints
 */
interface ImportFromGitOptions {
  url: string;
  branch?: string;
  dependencies?: string;
  path?: string;
  version?: any;
}

/** @interface IncrementBuildNumberOptions
 * @property {any} buildNumber Change to a specific version. When you provide this parameter, Apple Generic Versioning does not have to be enabled
 * @property {string} xcodeproj optional, you must specify the path to your main Xcode project if it is not in the project root directory
 */
interface IncrementBuildNumberOptions {
  buildNumber?: any;
  xcodeproj?: string;
}

/** @interface IncrementVersionNumberOptions
 * @property {string} bumpType The type of this version bump. Available: patch, minor, major
 * @property {string} versionNumber Change to a specific version. This will replace the bump type value
 * @property {string} xcodeproj optional, you must specify the path to your main Xcode project if it is not in the project root directory
 */
interface IncrementVersionNumberOptions {
  bumpType: string;
  versionNumber?: string;
  xcodeproj?: string;
}

/** @interface InstallOnDeviceOptions
 * @property {string} extra Extra Commandline arguments passed to ios-deploy
 * @property {string} deviceId id of the device / if not set defaults to first found device
 * @property {any} skipWifi Do not search for devices via WiFi
 * @property {string} ipa The IPA file to put on the device
 */
interface InstallOnDeviceOptions {
  extra?: string;
  deviceId?: string;
  skipWifi?: any;
  ipa?: string;
}

/** @interface InstallProvisioningProfileOptions
 * @property {string} path Path to provisioning profile
 */
interface InstallProvisioningProfileOptions {
  path: string;
}

/** @interface InstallXcodePluginOptions
 * @property {string} url URL for Xcode plugin ZIP file
 * @property {string} github GitHub repository URL for Xcode plugin
 */
interface InstallXcodePluginOptions {
  url: string;
  github?: string;
}

/** @interface InstallrOptions
 * @property {string} apiToken API Token for Installr Access
 * @property {string} ipa Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action
 * @property {string} notes Release notes
 * @property {string} notify Groups to notify (e.g. 'dev,qa')
 * @property {string} add Groups to add (e.g. 'exec,ops')
 */
interface InstallrOptions {
  apiToken: string;
  ipa: string;
  notes?: string;
  notify?: string;
  add?: string;
}

/** @interface IpaOptions
 * @property {string} workspace WORKSPACE Workspace (.xcworkspace) file to use to build app (automatically detected in current directory)
 * @property {string} project Project (.xcodeproj) file to use to build app (automatically detected in current directory, overridden by --workspace option, if passed)
 * @property {string} configuration Configuration used to build
 * @property {string} scheme Scheme used to build app
 * @property {any} clean Clean project before building
 * @property {any} archive Archive project after building
 * @property {string} destination Build destination. Defaults to current directory
 * @property {string} embed Sign .ipa file with .mobileprovision
 * @property {string} identity Identity to be used along with --embed
 * @property {string} sdk Use SDK as the name or path of the base SDK when building the project
 * @property {string} ipa Specify the name of the .ipa file to generate (including file extension)
 * @property {string} xcconfig Use an extra XCCONFIG file to build the app
 * @property {string} xcargs Pass additional arguments to xcodebuild when building the app. Be sure to quote multiple args
 */
interface IpaOptions {
  workspace?: string;
  project?: string;
  configuration?: string;
  scheme?: string;
  clean?: any;
  archive?: any;
  destination?: string;
  embed?: string;
  identity?: string;
  sdk?: string;
  ipa?: string;
  xcconfig?: string;
  xcargs?: string;
}

/** @interface IsCiOptions

*/
interface IsCiOptions {}

/** @interface JazzyOptions
 * @property {string} config Path to jazzy config file
 */
interface JazzyOptions {
  config?: string;
}

/** @interface JiraOptions
 * @property {string} url URL for Jira instance
 * @property {string} contextPath Appends to the url (ex: "/jira")
 * @property {string} username Username for JIRA instance
 * @property {string} password Password for Jira
 * @property {string} ticketId Ticket ID for Jira, i.e. IOS-123
 * @property {string} commentText Text to add to the ticket as a comment
 */
interface JiraOptions {
  url: string;
  contextPath?: string;
  username: string;
  password: string;
  ticketId: string;
  commentText: string;
}

/** @interface LaneContextOptions

*/
interface LaneContextOptions {}

/** @interface LastGitCommitOptions

*/
interface LastGitCommitOptions {}

/** @interface LastGitTagOptions
 * @property {string} pattern Pattern to filter tags when looking for last one. Limit tags to ones matching given shell glob. If pattern lacks ?, *, or [, * at the end is implied
 */
interface LastGitTagOptions {
  pattern?: string;
}

/** @interface LatestTestflightBuildNumberOptions
 * @property {any} live Query the live version (ready-for-sale)
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {string} version The version number whose latest build number we want
 * @property {string} platform The platform to use (optional)
 * @property {any} initialBuildNumber sets the build number to given value if no build is in current train
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 */
interface LatestTestflightBuildNumberOptions {
  live?: any;
  appIdentifier: string;
  username: string;
  version?: string;
  platform?: string;
  initialBuildNumber: any;
  teamId?: any;
  teamName?: string;
}

/** @interface LcovOptions
 * @property {string} projectName Name of the project
 * @property {string} scheme Scheme of the project
 * @property {string} arch The build arch where will search .gcda files
 * @property {string} outputDir The output directory that coverage data will be stored. If not passed will use coverage_reports as default value
 */
interface LcovOptions {
  projectName: string;
  scheme: string;
  arch: string;
  outputDir?: string;
}

/** @interface MailgunOptions
 * @property {string} mailgunSandboxDomain Mailgun sandbox domain postmaster for your mail. Please use postmaster instead
 * @property {string} mailgunSandboxPostmaster Mailgun sandbox domain postmaster for your mail. Please use postmaster instead
 * @property {string} mailgunApikey Mailgun apikey for your mail. Please use postmaster instead
 * @property {string} postmaster Mailgun sandbox domain postmaster for your mail
 * @property {string} apikey Mailgun apikey for your mail
 * @property {string} to Destination of your mail
 * @property {string} from Mailgun sender name
 * @property {string} message Message of your mail
 * @property {string} subject Subject of your mail
 * @property {any} success Was this build successful? (true/false)
 * @property {string} appLink App Release link
 * @property {string} ciBuildLink CI Build Link
 * @property {string} templatePath Mail HTML template
 * @property {string} replyTo Mail Reply to
 * @property {any} attachment Mail Attachment filenames, either an array or just one string
 * @property {{string: string}} customPlaceholders Placeholders for template given as a hash
 */
interface MailgunOptions {
  mailgunSandboxDomain?: string;
  mailgunSandboxPostmaster?: string;
  mailgunApikey?: string;
  postmaster: string;
  apikey: string;
  to: string;
  from?: string;
  message: string;
  subject?: string;
  success?: any;
  appLink: string;
  ciBuildLink?: string;
  templatePath?: string;
  replyTo?: string;
  attachment?: any;
  customPlaceholders: { string: string };
}

/** @interface MakeChangelogFromJenkinsOptions
 * @property {string} fallbackChangelog Fallback changelog if there is not one on Jenkins, or it couldn't be read
 * @property {any} includeCommitBody Include the commit body along with the summary
 */
interface MakeChangelogFromJenkinsOptions {
  fallbackChangelog?: string;
  includeCommitBody?: any;
}

/** @interface MatchOptions
 * @property {string} type Define the profile type, can be appstore, adhoc, development, enterprise, developer_id
 * @property {string[]} additionalCertTypes Create additional cert types needed for macOS installers (valid values: mac_installer_distribution, developer_id_installer)
 * @property {boolean} readonly Only fetch existing certificates and profiles, don't generate new ones
 * @property {boolean} generateAppleCerts Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
 * @property {boolean} skipProvisioningProfiles Skip syncing provisioning profiles
 * @property {string[]} appIdentifier The bundle identifier(s) of your app (comma-separated)
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} storageMode Define where you want to store your certificates
 * @property {string} gitUrl URL to the git repo containing all the certificates
 * @property {string} gitBranch Specific git branch to use
 * @property {string} gitFullName git user full name to commit
 * @property {string} gitUserEmail git user email to commit
 * @property {boolean} shallowClone Make a shallow clone of the repository (truncate the history to 1 revision)
 * @property {boolean} cloneBranchDirectly Clone just the branch specified, instead of the whole repo. This requires that the branch already exists. Otherwise the command will fail
 * @property {string} gitBasicAuthorization Use a basic authorization header to access the git repo (e.g.: access via HTTPS, GitHub Actions, etc), usually a string in Base64
 * @property {string} gitBearerAuthorization Use a bearer authorization header to access the git repo (e.g.: access to an Azure Devops repository), usually a string in Base64
 * @property {string} googleCloudBucketName Name of the Google Cloud Storage bucket to use
 * @property {string} googleCloudKeysFile Path to the gc_keys.json file
 * @property {string} googleCloudProjectId ID of the Google Cloud project to use for authentication
 * @property {string} s3Region Name of the S3 region
 * @property {string} s3AccessKey S3 access key
 * @property {string} s3SecretAccessKey S3 secret access key
 * @property {string} s3Bucket Name of the S3 bucket
 * @property {string} keychainName Keychain the items should be imported to
 * @property {string} keychainPassword This might be required the first time you access certificates on a new mac. For the login/default keychain this is your account password
 * @property {boolean} force Renew the provisioning profiles every time you run match
 * @property {boolean} forceForNewDevices Renew the provisioning profiles if the device count on the developer portal has changed. Ignored for profile type 'appstore'
 * @property {boolean} skipConfirmation Disables confirmation prompts during nuke, answering them with yes
 * @property {boolean} skipDocs Skip generation of a README.md for the created git repository
 * @property {string} platform Set the provisioning profile's platform to work with (i.e. ios, tvos, macos)
 * @property {string} templateName The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
 * @property {string} outputPath Path in which to export certificates, key and profile
 * @property {boolean} verbose Print out extra information and all commands
 */
interface MatchOptions {
  type: string;
  additionalCertTypes?: string[];
  readonly: boolean;
  generateAppleCerts: boolean;
  skipProvisioningProfiles: boolean;
  appIdentifier: string[];
  username: string;
  teamId?: string;
  teamName?: string;
  storageMode: string;
  gitUrl: string;
  gitBranch: string;
  gitFullName?: string;
  gitUserEmail?: string;
  shallowClone: boolean;
  cloneBranchDirectly: boolean;
  gitBasicAuthorization?: string;
  gitBearerAuthorization?: string;
  googleCloudBucketName?: string;
  googleCloudKeysFile?: string;
  googleCloudProjectId?: string;
  s3Region?: string;
  s3AccessKey?: string;
  s3SecretAccessKey?: string;
  s3Bucket?: string;
  keychainName: string;
  keychainPassword?: string;
  force: boolean;
  forceForNewDevices: boolean;
  skipConfirmation: boolean;
  skipDocs: boolean;
  platform: string;
  templateName?: string;
  outputPath?: string;
  verbose: boolean;
}

/** @interface MinFastlaneVersionOptions

*/
interface MinFastlaneVersionOptions {}

/** @interface ModifyServicesOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier App Identifier (Bundle ID, e.g. com.krausefx.app)
 * @property {{string: string}} services Array with Spaceship App Services (e.g. access_wifi: (on|off)(:on|:off)(true|false), app_group: (on|off)(:on|:off)(true|false), apple_pay: (on|off)(:on|:off)(true|false), associated_domains: (on|off)(:on|:off)(true|false), auto_fill_credential: (on|off)(:on|:off)(true|false), data_protection: (complete|unlessopen|untilfirstauth)(:on|:off)(true|false), game_center: (on|off)(:on|:off)(true|false), health_kit: (on|off)(:on|:off)(true|false), home_kit: (on|off)(:on|:off)(true|false), hotspot: (on|off)(:on|:off)(true|false), icloud: (legacy|cloudkit)(:on|:off)(true|false), in_app_purchase: (on|off)(:on|:off)(true|false), inter_app_audio: (on|off)(:on|:off)(true|false), multipath: (on|off)(:on|:off)(true|false), network_extension: (on|off)(:on|:off)(true|false), nfc_tag_reading: (on|off)(:on|:off)(true|false), personal_vpn: (on|off)(:on|:off)(true|false), passbook: (on|off)(:on|:off)(true|false), push_notification: (on|off)(:on|:off)(true|false), siri_kit: (on|off)(:on|:off)(true|false), vpn_configuration: (on|off)(:on|:off)(true|false), wallet: (on|off)(:on|:off)(true|false), wireless_accessory: (on|off)(:on|:off)(true|false))
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 */
interface ModifyServicesOptions {
  username: string;
  appIdentifier: string;
  services: { string: string };
  teamId?: string;
  teamName?: string;
}

/** @interface NexusUploadOptions
 * @property {string} file File to be uploaded to Nexus
 * @property {string} repoId Nexus repository id e.g. artefacts
 * @property {string} repoGroupId Nexus repository group id e.g. com.company
 * @property {string} repoProjectName Nexus repository commandect name. Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed
 * @property {string} repoProjectVersion Nexus repository commandect version
 * @property {string} repoClassifier Nexus repository artifact classifier (optional)
 * @property {string} endpoint Nexus endpoint e.g. http://nexus:8081
 * @property {string} mountPath Nexus mount path (Nexus 3 instances have this configured as empty by default)
 * @property {string} username Nexus username
 * @property {string} password Nexus password
 * @property {any} sslVerify Verify SSL
 * @property {any} nexusVersion Nexus major version
 * @property {any} verbose Make detailed output
 * @property {string} proxyUsername Proxy username
 * @property {string} proxyPassword Proxy password
 * @property {string} proxyAddress Proxy address
 * @property {string} proxyPort Proxy port
 */
interface NexusUploadOptions {
  file: string;
  repoId: string;
  repoGroupId: string;
  repoProjectName: string;
  repoProjectVersion: string;
  repoClassifier?: string;
  endpoint: string;
  mountPath?: string;
  username: string;
  password: string;
  sslVerify?: any;
  nexusVersion?: any;
  verbose?: any;
  proxyUsername?: string;
  proxyPassword?: string;
  proxyAddress?: string;
  proxyPort?: string;
}

/** @interface NotarizeOptions
 * @property {string} package Path to package to notarize, e.g. .app bundle or disk image
 * @property {boolean} tryEarlyStapling Whether to try early stapling while the notarization request is in progress
 * @property {string} bundleId Bundle identifier to uniquely identify the package
 * @property {string} username Apple ID username
 * @property {string} ascProvider Provider short name for accounts associated with multiple providers
 * @property {boolean} printLog Whether to print notarization log file, listing issues on failure and warnings on success
 * @property {boolean} verbose Whether to log requests
 */
interface NotarizeOptions {
  package: string;
  tryEarlyStapling?: boolean;
  bundleId?: string;
  username: string;
  ascProvider?: string;
  printLog?: boolean;
  verbose?: boolean;
}

/** @interface NotificationOptions
 * @property {string} title The title to display in the notification
 * @property {string} subtitle A subtitle to display in the notification
 * @property {string} message The message to display in the notification
 * @property {string} sound The name of a sound to play when the notification appears (names are listed in Sound Preferences)
 * @property {string} activate Bundle identifier of application to be opened when the notification is clicked
 * @property {string} appIcon The URL of an image to display instead of the application icon (Mavericks+ only)
 * @property {string} contentImage The URL of an image to display attached to the notification (Mavericks+ only)
 * @property {string} open URL of the resource to be opened when the notification is clicked
 * @property {string} execute Shell command to run when the notification is clicked
 */
interface NotificationOptions {
  title: string;
  subtitle?: string;
  message: string;
  sound?: string;
  activate?: string;
  appIcon?: string;
  contentImage?: string;
  open?: string;
  execute?: string;
}

/** @interface NotifyOptions

*/
interface NotifyOptions {}

/** @interface NumberOfCommitsOptions
 * @property {any} all Returns number of all commits instead of current branch
 */
interface NumberOfCommitsOptions {
  all?: any;
}

/** @interface OclintOptions
 * @property {string} oclintPath The path to oclint binary
 * @property {string} compileCommands The json compilation database, use xctool reporter 'json-compilation-database'
 * @property {any} selectReqex Select all files matching this reqex
 * @property {any} selectRegex Select all files matching this regex
 * @property {any} excludeRegex Exclude all files matching this regex
 * @property {string} reportType The type of the report (default: html)
 * @property {string} reportPath The reports file path
 * @property {any} listEnabledRules List enabled rules
 * @property {string} rc Override the default behavior of rules
 * @property {any} thresholds List of rule thresholds to override the default behavior of rules
 * @property {any} enableRules List of rules to pick explicitly
 * @property {any} disableRules List of rules to disable
 * @property {any} maxPriority1 The max allowed number of priority 1 violations
 * @property {any} maxPriority2 The max allowed number of priority 2 violations
 * @property {any} maxPriority3 The max allowed number of priority 3 violations
 * @property {any} enableClangStaticAnalyzer Enable Clang Static Analyzer, and integrate results into OCLint report
 * @property {any} enableGlobalAnalysis Compile every source, and analyze across global contexts (depends on number of source files, could results in high memory load)
 * @property {any} allowDuplicatedViolations Allow duplicated violations in the OCLint report
 * @property {string} extraArg Additional argument to append to the compiler command line
 */
interface OclintOptions {
  oclintPath?: string;
  compileCommands?: string;
  selectReqex?: any;
  selectRegex?: any;
  excludeRegex?: any;
  reportType?: string;
  reportPath?: string;
  listEnabledRules: any;
  rc?: string;
  thresholds?: any;
  enableRules?: any;
  disableRules?: any;
  maxPriority1?: any;
  maxPriority2?: any;
  maxPriority3?: any;
  enableClangStaticAnalyzer: any;
  enableGlobalAnalysis: any;
  allowDuplicatedViolations: any;
  extraArg?: string;
}

/** @interface OnesignalOptions
 * @property {string} appId OneSignal App ID. Setting this updates an existing app
 * @property {string} authToken OneSignal Authorization Key
 * @property {string} appName OneSignal App Name. This is required when creating an app (in other words, when `:app_id` is not set, and optional when updating an app
 * @property {string} androidToken ANDROID GCM KEY
 * @property {string} androidGcmSenderId GCM SENDER ID
 * @property {string} apnsP12 APNS P12 File (in .p12 format)
 * @property {string} apnsP12Password APNS P12 password
 * @property {string} apnsEnv APNS environment
 */
interface OnesignalOptions {
  appId?: string;
  authToken: string;
  appName?: string;
  androidToken?: string;
  androidGcmSenderId?: string;
  apnsP12?: string;
  apnsP12Password?: string;
  apnsEnv?: string;
}

/** @interface OptOutCrashReportingOptions

*/
interface OptOutCrashReportingOptions {}

/** @interface OptOutUsageOptions

*/
interface OptOutUsageOptions {}

/** @interface PemOptions
 * @property {any} development Renew the development push certificate instead of the production one
 * @property {any} websitePush Create a Website Push certificate
 * @property {any} generateP12 Generate a p12 file additionally to a PEM file
 * @property {any} activeDaysLimit If the current certificate is active for less than this number of days, generate a new one
 * @property {any} force Create a new push certificate, even if the current one is active for 30 (or PEM_ACTIVE_DAYS_LIMIT) more days
 * @property {any} savePrivateKey Set to save the private RSA key
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} p12Password The password that is used for your p12 file
 * @property {string} pemName The file name of the generated .pem file
 * @property {string} outputPath The path to a directory in which all certificates and private keys should be stored
 * @property {any} newProfile Block that is called if there is a new profile
 */
interface PemOptions {
  development: any;
  websitePush: any;
  generateP12: any;
  activeDaysLimit: any;
  force: any;
  savePrivateKey: any;
  appIdentifier: string;
  username: string;
  teamId?: string;
  teamName?: string;
  p12Password: string;
  pemName?: string;
  outputPath: string;
  newProfile?: any;
}

/** @interface PilotOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier The bundle identifier of the app to upload or manage testers (optional)
 * @property {string} appPlatform The platform to use (optional)
 * @property {string} appleId Apple ID property in the App Information section in App Store Connect
 * @property {string} ipa Path to the ipa file to upload
 * @property {boolean} demoAccountRequired Do you need a demo account when Apple does review?
 * @property {{string: string}} betaAppReviewInfo Beta app review information for contact info and demo account
 * @property {{string: string}} localizedAppInfo Localized beta app test info for description, feedback email, marketing url, and privacy policy
 * @property {string} betaAppDescription Provide the 'Beta App Description' when uploading a new build
 * @property {string} betaAppFeedbackEmail Provide the beta app email when uploading a new build
 * @property {{string: string}} localizedBuildInfo Localized beta app test info for what's new
 * @property {string} changelog Provide the 'What to Test' text when uploading a new build. `skip_waiting_for_build_processing: false` is required to set the changelog
 * @property {any} skipSubmission Skip the distributing action of pilot and only upload the ipa file
 * @property {any} skipWaitingForBuildProcessing If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
 * @property {any} updateBuildInfoOnUpload **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
 * @property {boolean} usesNonExemptEncryption Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
 * @property {any} distributeExternal Should the build be distributed to external testers?
 * @property {any} notifyExternalTesters Should notify external testers?
 * @property {string} appVersion The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
 * @property {string} buildNumber The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
 * @property {string} firstName The tester's first name
 * @property {string} lastName The tester's last name
 * @property {string} email The tester's email
 * @property {string} testersFilePath Path to a CSV file of testers
 * @property {string[]} groups Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"`
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {string} devPortalTeamId The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
 * @property {string} itcProvider The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
 * @property {any} waitProcessingInterval Interval in seconds to wait for App Store Connect processing
 * @property {any} waitForUploadedBuild **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
 * @property {any} rejectBuildWaitingForReview Expire previous if it's 'waiting for review'
 */
interface PilotOptions {
  username: string;
  appIdentifier?: string;
  appPlatform?: string;
  appleId?: string;
  ipa?: string;
  demoAccountRequired: boolean;
  betaAppReviewInfo?: { string: string };
  localizedAppInfo?: { string: string };
  betaAppDescription?: string;
  betaAppFeedbackEmail?: string;
  localizedBuildInfo?: { string: string };
  changelog?: string;
  skipSubmission: any;
  skipWaitingForBuildProcessing: any;
  updateBuildInfoOnUpload?: any;
  usesNonExemptEncryption: boolean;
  distributeExternal: any;
  notifyExternalTesters: any;
  appVersion?: string;
  buildNumber?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  testersFilePath?: string;
  groups?: string[];
  teamId?: any;
  teamName?: string;
  devPortalTeamId?: string;
  itcProvider?: string;
  waitProcessingInterval: any;
  waitForUploadedBuild?: any;
  rejectBuildWaitingForReview: any;
}

/** @interface PodLibLintOptions
 * @property {boolean} useBundleExec Use bundle exec when there is a Gemfile presented
 * @property {string} podspec Path of spec to lint
 * @property {boolean} verbose Allow output detail in console
 * @property {boolean} allowWarnings Allow warnings during pod lint
 * @property {string[]} sources The sources of repos you want the pod spec to lint with, separated by commas
 * @property {string} subspec A specific subspec to lint instead of the entire spec
 * @property {string} includePodspecs A Glob of additional ancillary podspecs which are used for linting via :path (available since cocoapods >= 1.7)
 * @property {string} externalPodspecs A Glob of additional ancillary podspecs which are used for linting via :podspec. If there are --include-podspecs, then these are removed from them (available since cocoapods >= 1.7)
 * @property {string} swiftVersion The SWIFT_VERSION that should be used to lint the spec. This takes precedence over a .swift-version file
 * @property {boolean} useLibraries Lint uses static libraries to install the spec
 * @property {boolean} useModularHeaders Lint using modular libraries (available since cocoapods >= 1.6)
 * @property {boolean} failFast Lint stops on the first failing platform or subspec
 * @property {boolean} private Lint skips checks that apply only to public specs
 * @property {boolean} quick Lint skips checks that would require to download and build the spec
 * @property {boolean} noClean Lint leaves the build directory intact for inspection
 * @property {boolean} noSubspecs Lint skips validation of subspecs
 * @property {string} platforms Lint against specific platforms (defaults to all platforms supported by the podspec). Multiple platforms must be comma-delimited (available since cocoapods >= 1.6)
 * @property {boolean} skipImportValidation Lint skips validating that the pod can be imported (available since cocoapods >= 1.3)
 * @property {boolean} skipTests Lint skips building and running tests during validation (available since cocoapods >= 1.3)
 * @property {boolean} analyze Validate with the Xcode Static Analysis tool (available since cocoapods >= 1.6.1)
 */
interface PodLibLintOptions {
  useBundleExec: boolean;
  podspec?: string;
  verbose?: boolean;
  allowWarnings?: boolean;
  sources?: string[];
  subspec?: string;
  includePodspecs?: string;
  externalPodspecs?: string;
  swiftVersion?: string;
  useLibraries: boolean;
  useModularHeaders: boolean;
  failFast: boolean;
  private: boolean;
  quick: boolean;
  noClean: boolean;
  noSubspecs: boolean;
  platforms?: string;
  skipImportValidation: boolean;
  skipTests: boolean;
  analyze: boolean;
}

/** @interface PodPushOptions
 * @property {boolean} useBundleExec Use bundle exec when there is a Gemfile presented
 * @property {string} path The Podspec you want to push
 * @property {string} repo The repo you want to push. Pushes to Trunk by default
 * @property {boolean} allowWarnings Allow warnings during pod push
 * @property {boolean} useLibraries Allow lint to use static libraries to install the spec
 * @property {string[]} sources The sources of repos you want the pod spec to lint with, separated by commas
 * @property {string} swiftVersion The SWIFT_VERSION that should be used to lint the spec. This takes precedence over a .swift-version file
 * @property {boolean} skipImportValidation Lint skips validating that the pod can be imported
 * @property {boolean} skipTests Lint skips building and running tests during validation
 * @property {boolean} verbose Show more debugging information
 * @property {boolean} useModularHeaders Use modular headers option during validation
 */
interface PodPushOptions {
  useBundleExec: boolean;
  path?: string;
  repo?: string;
  allowWarnings?: boolean;
  useLibraries?: boolean;
  sources?: string[];
  swiftVersion?: string;
  skipImportValidation?: boolean;
  skipTests?: boolean;
  verbose?: boolean;
  useModularHeaders?: boolean;
}

/** @interface PodioItemOptions
 * @property {string} clientId Client ID for Podio API (see https://developers.podio.com/api-key)
 * @property {string} clientSecret Client secret for Podio API (see https://developers.podio.com/api-key)
 * @property {string} appId App ID of the app you intend to authenticate with (see https://developers.podio.com/authentication/app_auth)
 * @property {string} appToken App token of the app you intend to authenticate with (see https://developers.podio.com/authentication/app_auth)
 * @property {string} identifyingField String specifying the field key used for identification of an item
 * @property {string} identifyingValue String uniquely specifying an item within the app
 * @property {{string: string}} otherFields Dictionary of your app fields. Podio supports several field types, see https://developers.podio.com/doc/items
 */
interface PodioItemOptions {
  clientId: string;
  clientSecret: string;
  appId: string;
  appToken: string;
  identifyingField: string;
  identifyingValue: string;
  otherFields?: { string: string };
}

/** @interface PrecheckOptions
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {any} defaultRuleLevel The default rule level unless otherwise configured
 * @property {any} includeInAppPurchases Should check in-app purchases?
 * @property {any} negativeAppleSentiment mentioning  in a way that could be considered negative
 * @property {any} placeholderText using placeholder text (e.g.:"lorem ipsum", "text here", etc...)
 * @property {any} otherPlatforms mentioning other platforms, like Android or Blackberry
 * @property {any} futureFunctionality mentioning features or content that is not currently available in your app
 * @property {any} testWords using text indicating this release is a test
 * @property {any} curseWords including words that might be considered objectionable
 * @property {any} freeStuffInIap using text indicating that your IAP is free
 * @property {any} customText mentioning any of the user-specified words passed to custom_text(data: [words])
 * @property {any} copyrightDate using a copyright date that is any different from this current year, or missing a date
 * @property {any} unreachableUrls unreachable URLs in app metadata
 */
interface PrecheckOptions {
  appIdentifier: string;
  username: string;
  teamId?: string;
  teamName?: string;
  defaultRuleLevel: any;
  includeInAppPurchases?: any;
  negativeAppleSentiment?: any;
  placeholderText?: any;
  otherPlatforms?: any;
  futureFunctionality?: any;
  testWords?: any;
  curseWords?: any;
  freeStuffInIap?: any;
  customText?: any;
  copyrightDate?: any;
  unreachableUrls?: any;
}

/** @interface PrintlnOptions
 * @property {string} message Message to be printed out
 */
interface PrintlnOptions {
  message?: string;
}

/** @interface ProduceOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier App Identifier (Bundle ID, e.g. com.krausefx.app)
 * @property {string} bundleIdentifierSuffix App Identifier Suffix (Ignored if App Identifier does not end with .*)
 * @property {string} appName App Name
 * @property {string} appVersion Initial version number (e.g. '1.0')
 * @property {string} sku SKU Number (e.g. '1234')
 * @property {string} platform The platform to use (optional)
 * @property {string[]} platforms The platforms to use (optional)
 * @property {string} language Primary Language (e.g. 'English', 'German')
 * @property {string} companyName The name of your company. Only required if it's the first app you create
 * @property {any} skipItc Skip the creation of the app on App Store Connect
 * @property {string[]} itcUsers Array of App Store Connect users. If provided, you can limit access to this newly created app for users with the App Manager, Developer, Marketer or Sales roles
 * @property {any} enabledFeatures **DEPRECATED!** Please use `enable_services` instead - Array with Spaceship App Services
 * @property {any} enableServices Array with Spaceship App Services (e.g. access_wifi: (on|off), app_group: (on|off), apple_pay: (on|off), associated_domains: (on|off), auto_fill_credential: (on|off), data_protection: (complete|unlessopen|untilfirstauth), game_center: (on|off), health_kit: (on|off), home_kit: (on|off), hotspot: (on|off), icloud: (legacy|cloudkit), in_app_purchase: (on|off), inter_app_audio: (on|off), multipath: (on|off), network_extension: (on|off), nfc_tag_reading: (on|off), personal_vpn: (on|off), passbook: (on|off), push_notification: (on|off), siri_kit: (on|off), vpn_configuration: (on|off), wallet: (on|off), wireless_accessory: (on|off))
 * @property {any} skipDevcenter Skip the creation of the app on the Apple Developer Portal
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {any} itcTeamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} itcTeamName The name of your App Store Connect team if you're in multiple teams
 */
interface ProduceOptions {
  username: string;
  appIdentifier: string;
  bundleIdentifierSuffix?: string;
  appName: string;
  appVersion?: string;
  sku: string;
  platform?: string;
  platforms?: string[];
  language: string;
  companyName?: string;
  skipItc: any;
  itcUsers?: string[];
  enabledFeatures?: any;
  enableServices: any;
  skipDevcenter: any;
  teamId?: string;
  teamName?: string;
  itcTeamId?: any;
  itcTeamName?: string;
}

/** @interface PromptOptions
 * @property {string} text The text that will be displayed to the user
 * @property {string} ciInput The default text that will be used when being executed on a CI service
 * @property {any} boolean Is that a boolean question (yes/no)? This will add (y/n) at the end
 * @property {any} secureText Is that a secure text (yes/no)?
 * @property {string} multiLineEndKeyword Enable multi-line inputs by providing an end text (e.g. 'END') which will stop the user input
 */
interface PromptOptions {
  text: string;
  ciInput: string;
  boolean: any;
  secureText: any;
  multiLineEndKeyword?: string;
}

/** @interface PushGitTagsOptions
 * @property {any} force Force push to remote
 * @property {string} remote The remote to push tags to
 * @property {string} tag The tag to push to remote
 */
interface PushGitTagsOptions {
  force?: any;
  remote?: string;
  tag?: string;
}

/** @interface PushToGitRemoteOptions
 * @property {string} localBranch The local branch to push from. Defaults to the current branch
 * @property {string} remoteBranch The remote branch to push to. Defaults to the local branch
 * @property {boolean} force Force push to remote
 * @property {boolean} forceWithLease Force push with lease to remote
 * @property {boolean} tags Whether tags are pushed to remote
 * @property {string} remote The remote to push to
 * @property {boolean} noVerify Whether or not to use --no-verify
 * @property {boolean} setUpstream Whether or not to use --set-upstream
 */
interface PushToGitRemoteOptions {
  localBranch?: string;
  remoteBranch?: string;
  force: boolean;
  forceWithLease: boolean;
  tags: boolean;
  remote: string;
  noVerify: boolean;
  setUpstream: boolean;
}

/** @interface PutsOptions
 * @property {string} message Message to be printed out
 */
interface PutsOptions {
  message?: string;
}

/** @interface ReadPodspecOptions
 * @property {string} path Path to the podspec to be read
 */
interface ReadPodspecOptions {
  path: string;
}

/** @interface RecreateSchemesOptions
 * @property {string} project The Xcode project
 */
interface RecreateSchemesOptions {
  project: string;
}

/** @interface RegisterDeviceOptions
 * @property {string} name Provide the name of the device to register as
 * @property {string} udid Provide the UDID of the device to register as
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} username Optional: Your Apple ID
 */
interface RegisterDeviceOptions {
  name: string;
  udid: string;
  teamId?: string;
  teamName?: string;
  username: string;
}

/** @interface RegisterDevicesOptions
 * @property {{string: string}} devices A hash of devices, with the name as key and the UDID as value
 * @property {string} devicesFile Provide a path to a file with the devices to register. For the format of the file see the examples
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} username Optional: Your Apple ID
 * @property {string} platform The platform to use (optional)
 */
interface RegisterDevicesOptions {
  devices?: { string: string };
  devicesFile?: string;
  teamId?: string;
  teamName?: string;
  username: string;
  platform?: string;
}

/** @interface ResetGitRepoOptions
 * @property {any} files Array of files the changes should be discarded. If not given, all files will be discarded
 * @property {any} force Skip verifying of previously clean state of repo. Only recommended in combination with `files` option
 * @property {any} skipClean Skip 'git clean' to avoid removing untracked files like `.env`
 * @property {any} disregardGitignore Setting this to true will clean the whole repository, ignoring anything in your local .gitignore. Set this to true if you want the equivalent of a fresh clone, and for all untracked and ignore files to also be removed
 * @property {any} exclude You can pass a string, or array of, file pattern(s) here which you want to have survive the cleaning process, and remain on disk, e.g. to leave the `artifacts` directory you would specify `exclude: 'artifacts'`. Make sure this pattern is also in your gitignore! See the gitignore documentation for info on patterns
 */
interface ResetGitRepoOptions {
  files?: any;
  force: any;
  skipClean: any;
  disregardGitignore?: any;
  exclude?: any;
}

/** @interface ResetSimulatorContentsOptions
 * @property {string[]} ios **DEPRECATED!** Use `:os_versions` instead - Which OS versions of Simulators you want to reset content and settings, this does not remove/recreate the simulators
 * @property {string[]} osVersions Which OS versions of Simulators you want to reset content and settings, this does not remove/recreate the simulators
 */
interface ResetSimulatorContentsOptions {
  ios?: string[];
  osVersions?: string[];
}

/** @interface ResignOptions
 * @property {string} ipa Path to the ipa file to resign. Optional if you use the _gym_ or _xcodebuild_ action
 * @property {string} signingIdentity Code signing identity to use. e.g. `iPhone Distribution: Luka Mirosevic (0123456789)`
 * @property {string} entitlements Path to the entitlement file to use, e.g. `myApp/MyApp.entitlements`
 * @property {any} provisioningProfile Path to your provisioning_profile. Optional if you use _sigh_
 * @property {string} version Version number to force resigned ipa to use. Updates both `CFBundleShortVersionString` and `CFBundleVersion` values in `Info.plist`. Applies for main app and all nested apps or extensions
 * @property {string} displayName Display name to force resigned ipa to use
 * @property {string} shortVersion Short version string to force resigned ipa to use (`CFBundleShortVersionString`)
 * @property {string} bundleVersion Bundle version to force resigned ipa to use (`CFBundleVersion`)
 * @property {string} bundleId Set new bundle ID during resign (`CFBundleIdentifier`)
 * @property {any} useAppEntitlements Extract app bundle codesigning entitlements and combine with entitlements from new provisionin profile
 * @property {string} keychainPath Provide a path to a keychain file that should be used by `/usr/bin/codesign`
 */
interface ResignOptions {
  ipa: string;
  signingIdentity: string;
  entitlements?: string;
  provisioningProfile: any;
  version?: string;
  displayName?: string;
  shortVersion?: string;
  bundleVersion?: string;
  bundleId?: string;
  useAppEntitlements?: any;
  keychainPath?: string;
}

/** @interface RestoreFileOptions
 * @property {string} path Original file name you want to restore
 */
interface RestoreFileOptions {
  path: string;
}

/** @interface RocketOptions

*/
interface RocketOptions {}

/** @interface RsyncOptions
 * @property {string} extra Port
 * @property {string} source source file/folder
 * @property {string} destination destination file/folder
 */
interface RsyncOptions {
  extra?: string;
  source: string;
  destination: string;
}

/** @interface RubyVersionOptions

*/
interface RubyVersionOptions {}

/** @interface RunTestsOptions
 * @property {string} workspace Path to the workspace file
 * @property {string} project Path to the project file
 * @property {string} scheme The project's scheme. Make sure it's marked as `Shared`
 * @property {string} device The name of the simulator type you want to run tests on (e.g. 'iPhone 6')
 * @property {string[]} devices Array of devices to run the tests on (e.g. ['iPhone 6', 'iPad Air'])
 * @property {boolean} skipDetectDevices Should skip auto detecting of devices if none were specified
 * @property {boolean} forceQuitSimulator Enabling this option will automatically killall Simulator processes before the run
 * @property {boolean} resetSimulator Enabling this option will automatically erase the simulator before running the application
 * @property {boolean} disableSlideToType Enabling this option will disable the simulator from showing the 'Slide to type' prompt
 * @property {boolean} prelaunchSimulator Enabling this option will launch the first simulator prior to calling any xcodebuild command
 * @property {boolean} reinstallApp Enabling this option will automatically uninstall the application before running it
 * @property {string} appIdentifier The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
 * @property {any} onlyTesting Array of strings matching Test Bundle/Test Suite/Test Cases to run
 * @property {any} skipTesting Array of strings matching Test Bundle/Test Suite/Test Cases to skip
 * @property {string} testplan The testplan associated with the scheme that should be used for testing
 * @property {string} xctestrun Run tests using the provided `.xctestrun` file
 * @property {any} toolchain The toolchain that should be used for building the application (e.g. `com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a`)
 * @property {any} clean Should the project be cleaned before building it?
 * @property {boolean} codeCoverage Should code coverage be generated? (Xcode 7 and up)
 * @property {boolean} addressSanitizer Should the address sanitizer be turned on?
 * @property {boolean} threadSanitizer Should the thread sanitizer be turned on?
 * @property {any} openReport Should the HTML report be opened when tests are completed?
 * @property {string} outputDirectory The directory in which all reports will be stored
 * @property {string} outputStyle Define how the output should look like. Valid values are: standard, basic, rspec, or raw (disables xcpretty)
 * @property {string} outputTypes Comma separated list of the output types (e.g. html, junit, json-compilation-database)
 * @property {string} outputFiles Comma separated list of the output files, corresponding to the types provided by :output_types (order should match). If specifying an output type of json-compilation-database with :use_clang_report_name enabled, that option will take precedence
 * @property {string} buildlogPath The directory where to store the raw log
 * @property {boolean} includeSimulatorLogs If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
 * @property {boolean} suppressXcodeOutput Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
 * @property {string} formatter A custom xcpretty formatter to use
 * @property {string} xcprettyArgs Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf')
 * @property {string} derivedDataPath The directory where build products and other derived data will go
 * @property {any} shouldZipBuildProducts Should zip the derived data build products and place in output path?
 * @property {any} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {any} useClangReportName Generate the json compilation database with clang naming convention (compile_commands.json)
 * @property {any} concurrentWorkers Specify the exact number of test runners that will be spawned during parallel testing. Equivalent to -parallel-testing-worker-count
 * @property {any} maxConcurrentSimulators Constrain the number of simulator devices on which to test concurrently. Equivalent to -maximum-concurrent-test-simulator-destinations
 * @property {boolean} disableConcurrentTesting Do not run test bundles in parallel on the specified destinations. Testing will occur on each destination serially. Equivalent to -disable-concurrent-testing
 * @property {boolean} skipBuild Should debug build be skipped before test build?
 * @property {boolean} testWithoutBuilding Test without building, requires a derived data path
 * @property {boolean} buildForTesting Build for testing only, does not run tests
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {string} xcargs Pass additional arguments to xcodebuild. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {string} appName App name to use in slack message and logfile name
 * @property {string} deploymentTargetVersion Target version of the app being build or tested. Used to filter out simulator version
 * @property {string} slackUrl Create an Incoming WebHook for your Slack group to post results there
 * @property {string} slackChannel #channel or @username
 * @property {string} slackMessage The message included with each message posted to slack
 * @property {boolean} slackUseWebhookConfiguredUsernameAndIcon Use webhook's default username and icon settings? (true/false)
 * @property {string} slackUsername Overrides the webhook's username property if slack_use_webhook_configured_username_and_icon is false
 * @property {string} slackIconUrl Overrides the webhook's image property if slack_use_webhook_configured_username_and_icon is false
 * @property {any} skipSlack Don't publish to slack, even when an URL is given
 * @property {any} slackOnlyOnFailure Only post on Slack if the tests fail
 * @property {any} destination Use only if you're a pro, use the other options instead
 * @property {string} customReportFileName **DEPRECATED!** Use `--output_files` instead - Sets custom full report file name when generating a single report
 * @property {string} xcodebuildCommand Allows for override of the default `xcodebuild` command
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 * @property {any} failBuild Should this step stop the build if the tests fail? Set this to false if you're using trainer
 */
interface RunTestsOptions {
  workspace?: string;
  project?: string;
  scheme?: string;
  device?: string;
  devices?: string[];
  skipDetectDevices?: boolean;
  forceQuitSimulator: boolean;
  resetSimulator: boolean;
  disableSlideToType: boolean;
  prelaunchSimulator?: boolean;
  reinstallApp: boolean;
  appIdentifier?: string;
  onlyTesting?: any;
  skipTesting?: any;
  testplan?: string;
  xctestrun?: string;
  toolchain?: any;
  clean: any;
  codeCoverage?: boolean;
  addressSanitizer?: boolean;
  threadSanitizer?: boolean;
  openReport: any;
  outputDirectory: string;
  outputStyle?: string;
  outputTypes: string;
  outputFiles?: string;
  buildlogPath: string;
  includeSimulatorLogs?: boolean;
  suppressXcodeOutput?: boolean;
  formatter?: string;
  xcprettyArgs?: string;
  derivedDataPath?: string;
  shouldZipBuildProducts?: any;
  resultBundle?: any;
  useClangReportName: any;
  concurrentWorkers?: any;
  maxConcurrentSimulators?: any;
  disableConcurrentTesting?: boolean;
  skipBuild: boolean;
  testWithoutBuilding?: boolean;
  buildForTesting?: boolean;
  sdk?: string;
  configuration?: string;
  xcargs?: string;
  xcconfig?: string;
  appName?: string;
  deploymentTargetVersion?: string;
  slackUrl?: string;
  slackChannel?: string;
  slackMessage?: string;
  slackUseWebhookConfiguredUsernameAndIcon?: boolean;
  slackUsername?: string;
  slackIconUrl?: string;
  skipSlack: any;
  slackOnlyOnFailure: any;
  destination?: any;
  customReportFileName?: string;
  xcodebuildCommand?: string;
  clonedSourcePackagesPath?: string;
  failBuild: any;
}

/** @interface S3Options
 * @property {string} ipa .ipa file for the build
 * @property {string} dsym zipped .dsym package for the build
 * @property {any} uploadMetadata Upload relevant metadata for this build
 * @property {string} plistTemplatePath plist template path
 * @property {string} plistFileName uploaded plist filename
 * @property {string} htmlTemplatePath html erb template path
 * @property {string} htmlFileName uploaded html filename
 * @property {string} versionTemplatePath version erb template path
 * @property {string} versionFileName uploaded version filename
 * @property {string} accessKey AWS Access Key ID
 * @property {string} secretAccessKey AWS Secret Access Key
 * @property {string} bucket AWS bucket name
 * @property {string} region AWS region (for bucket creation)
 * @property {string} path S3 'path'. Values from Info.plist will be substituted for keys wrapped in {}
 * @property {string} source Optional source directory e.g. ./build
 * @property {string} acl Uploaded object permissions e.g public_read (default), private, public_read_write, authenticated_read
 */
interface S3Options {
  ipa?: string;
  dsym?: string;
  uploadMetadata?: any;
  plistTemplatePath?: string;
  plistFileName?: string;
  htmlTemplatePath?: string;
  htmlFileName?: string;
  versionTemplatePath?: string;
  versionFileName?: string;
  accessKey?: string;
  secretAccessKey?: string;
  bucket?: string;
  region?: string;
  path?: string;
  source?: string;
  acl?: string;
}

/** @interface SayOptions
 * @property {any} text Text to be spoken out loud (as string or array of strings)
 * @property {boolean} mute If say should be muted with text printed out
 */
interface SayOptions {
  text: any;
  mute: boolean;
}

/** @interface ScanOptions
 * @property {string} workspace Path to the workspace file
 * @property {string} project Path to the project file
 * @property {string} scheme The project's scheme. Make sure it's marked as `Shared`
 * @property {string} device The name of the simulator type you want to run tests on (e.g. 'iPhone 6')
 * @property {string[]} devices Array of devices to run the tests on (e.g. ['iPhone 6', 'iPad Air'])
 * @property {boolean} skipDetectDevices Should skip auto detecting of devices if none were specified
 * @property {boolean} forceQuitSimulator Enabling this option will automatically killall Simulator processes before the run
 * @property {boolean} resetSimulator Enabling this option will automatically erase the simulator before running the application
 * @property {boolean} disableSlideToType Enabling this option will disable the simulator from showing the 'Slide to type' prompt
 * @property {boolean} prelaunchSimulator Enabling this option will launch the first simulator prior to calling any xcodebuild command
 * @property {boolean} reinstallApp Enabling this option will automatically uninstall the application before running it
 * @property {string} appIdentifier The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
 * @property {any} onlyTesting Array of strings matching Test Bundle/Test Suite/Test Cases to run
 * @property {any} skipTesting Array of strings matching Test Bundle/Test Suite/Test Cases to skip
 * @property {string} testplan The testplan associated with the scheme that should be used for testing
 * @property {string} xctestrun Run tests using the provided `.xctestrun` file
 * @property {any} toolchain The toolchain that should be used for building the application (e.g. `com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a`)
 * @property {any} clean Should the project be cleaned before building it?
 * @property {boolean} codeCoverage Should code coverage be generated? (Xcode 7 and up)
 * @property {boolean} addressSanitizer Should the address sanitizer be turned on?
 * @property {boolean} threadSanitizer Should the thread sanitizer be turned on?
 * @property {any} openReport Should the HTML report be opened when tests are completed?
 * @property {string} outputDirectory The directory in which all reports will be stored
 * @property {string} outputStyle Define how the output should look like. Valid values are: standard, basic, rspec, or raw (disables xcpretty)
 * @property {string} outputTypes Comma separated list of the output types (e.g. html, junit, json-compilation-database)
 * @property {string} outputFiles Comma separated list of the output files, corresponding to the types provided by :output_types (order should match). If specifying an output type of json-compilation-database with :use_clang_report_name enabled, that option will take precedence
 * @property {string} buildlogPath The directory where to store the raw log
 * @property {boolean} includeSimulatorLogs If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
 * @property {boolean} suppressXcodeOutput Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
 * @property {string} formatter A custom xcpretty formatter to use
 * @property {string} xcprettyArgs Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf')
 * @property {string} derivedDataPath The directory where build products and other derived data will go
 * @property {any} shouldZipBuildProducts Should zip the derived data build products and place in output path?
 * @property {any} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {any} useClangReportName Generate the json compilation database with clang naming convention (compile_commands.json)
 * @property {any} concurrentWorkers Specify the exact number of test runners that will be spawned during parallel testing. Equivalent to -parallel-testing-worker-count
 * @property {any} maxConcurrentSimulators Constrain the number of simulator devices on which to test concurrently. Equivalent to -maximum-concurrent-test-simulator-destinations
 * @property {boolean} disableConcurrentTesting Do not run test bundles in parallel on the specified destinations. Testing will occur on each destination serially. Equivalent to -disable-concurrent-testing
 * @property {boolean} skipBuild Should debug build be skipped before test build?
 * @property {boolean} testWithoutBuilding Test without building, requires a derived data path
 * @property {boolean} buildForTesting Build for testing only, does not run tests
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {string} xcargs Pass additional arguments to xcodebuild. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {string} appName App name to use in slack message and logfile name
 * @property {string} deploymentTargetVersion Target version of the app being build or tested. Used to filter out simulator version
 * @property {string} slackUrl Create an Incoming WebHook for your Slack group to post results there
 * @property {string} slackChannel #channel or @username
 * @property {string} slackMessage The message included with each message posted to slack
 * @property {boolean} slackUseWebhookConfiguredUsernameAndIcon Use webhook's default username and icon settings? (true/false)
 * @property {string} slackUsername Overrides the webhook's username property if slack_use_webhook_configured_username_and_icon is false
 * @property {string} slackIconUrl Overrides the webhook's image property if slack_use_webhook_configured_username_and_icon is false
 * @property {any} skipSlack Don't publish to slack, even when an URL is given
 * @property {any} slackOnlyOnFailure Only post on Slack if the tests fail
 * @property {any} destination Use only if you're a pro, use the other options instead
 * @property {string} customReportFileName **DEPRECATED!** Use `--output_files` instead - Sets custom full report file name when generating a single report
 * @property {string} xcodebuildCommand Allows for override of the default `xcodebuild` command
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 * @property {any} failBuild Should this step stop the build if the tests fail? Set this to false if you're using trainer
 */
interface ScanOptions {
  workspace?: string;
  project?: string;
  scheme?: string;
  device?: string;
  devices?: string[];
  skipDetectDevices?: boolean;
  forceQuitSimulator: boolean;
  resetSimulator: boolean;
  disableSlideToType: boolean;
  prelaunchSimulator?: boolean;
  reinstallApp: boolean;
  appIdentifier?: string;
  onlyTesting?: any;
  skipTesting?: any;
  testplan?: string;
  xctestrun?: string;
  toolchain?: any;
  clean: any;
  codeCoverage?: boolean;
  addressSanitizer?: boolean;
  threadSanitizer?: boolean;
  openReport: any;
  outputDirectory: string;
  outputStyle?: string;
  outputTypes: string;
  outputFiles?: string;
  buildlogPath: string;
  includeSimulatorLogs?: boolean;
  suppressXcodeOutput?: boolean;
  formatter?: string;
  xcprettyArgs?: string;
  derivedDataPath?: string;
  shouldZipBuildProducts?: any;
  resultBundle?: any;
  useClangReportName: any;
  concurrentWorkers?: any;
  maxConcurrentSimulators?: any;
  disableConcurrentTesting?: boolean;
  skipBuild: boolean;
  testWithoutBuilding?: boolean;
  buildForTesting?: boolean;
  sdk?: string;
  configuration?: string;
  xcargs?: string;
  xcconfig?: string;
  appName?: string;
  deploymentTargetVersion?: string;
  slackUrl?: string;
  slackChannel?: string;
  slackMessage?: string;
  slackUseWebhookConfiguredUsernameAndIcon?: boolean;
  slackUsername?: string;
  slackIconUrl?: string;
  skipSlack: any;
  slackOnlyOnFailure: any;
  destination?: any;
  customReportFileName?: string;
  xcodebuildCommand?: string;
  clonedSourcePackagesPath?: string;
  failBuild: any;
}

/** @interface ScpOptions
 * @property {string} username Username
 * @property {string} password Password
 * @property {string} host Hostname
 * @property {string} port Port
 * @property {{string: string}} upload Upload
 * @property {{string: string}} download Download
 */
interface ScpOptions {
  username: string;
  password?: string;
  host: string;
  port?: string;
  upload?: { string: string };
  download?: { string: string };
}

/** @interface ScreengrabOptions
 * @property {string} androidHome Path to the root of your Android SDK installation, e.g. ~/tools/android-sdk-macosx
 * @property {string} buildToolsVersion The Android build tools version to use, e.g. '23.0.2'
 * @property {string[]} locales A list of locales which should be used
 * @property {boolean} clearPreviousScreenshots Enabling this option will automatically clear previously generated screenshots before running screengrab
 * @property {string} outputDirectory The directory where to store the screenshots
 * @property {boolean} skipOpenSummary Don't open the summary after running _screengrab_
 * @property {string} appPackageName The package name of the app under test (e.g. com.yourcompany.yourapp)
 * @property {string} testsPackageName The package name of the tests bundle (e.g. com.yourcompany.yourapp.test)
 * @property {string[]} useTestsInPackages Only run tests in these Java packages
 * @property {string[]} useTestsInClasses Only run tests in these Java classes
 * @property {string[]} launchArguments Additional launch arguments
 * @property {string} testInstrumentationRunner The fully qualified class name of your test instrumentation runner
 * @property {string} endingLocale Return the device to this locale after running tests
 * @property {boolean} useAdbRoot Restarts the adb daemon using `adb root` to allow access to screenshots directories on device. Use if getting 'Permission denied' errors
 * @property {string} appApkPath The path to the APK for the app under test
 * @property {string} testsApkPath The path to the APK for the the tests bundle
 * @property {string} specificDevice Use the device or emulator with the given serial number or qualifier
 * @property {string} deviceType Type of device used for screenshots. Matches Google Play Types (phone, sevenInch, tenInch, tv, wear)
 * @property {boolean} exitOnTestFailure Whether or not to exit Screengrab on test failure. Exiting on failure will not copy sceenshots to local machine nor open sceenshots summary
 * @property {boolean} reinstallApp Enabling this option will automatically uninstall the application before running it
 * @property {boolean} useTimestampSuffix Add timestamp suffix to screenshot filename
 * @property {string} adbHost Configure the host used by adb to connect, allows running on remote devices farm
 */
interface ScreengrabOptions {
  androidHome?: string;
  buildToolsVersion?: string;
  locales: string[];
  clearPreviousScreenshots: boolean;
  outputDirectory: string;
  skipOpenSummary: boolean;
  appPackageName: string;
  testsPackageName?: string;
  useTestsInPackages?: string[];
  useTestsInClasses?: string[];
  launchArguments?: string[];
  testInstrumentationRunner?: string;
  endingLocale?: string;
  useAdbRoot: boolean;
  appApkPath?: string;
  testsApkPath?: string;
  specificDevice?: string;
  deviceType: string;
  exitOnTestFailure: boolean;
  reinstallApp: boolean;
  useTimestampSuffix: boolean;
  adbHost?: string;
}

/** @interface SetBuildNumberRepositoryOptions
 * @property {any} useHgRevisionNumber Use hg revision number instead of hash (ignored for non-hg repos)
 * @property {string} xcodeproj explicitly specify which xcodeproj to use
 */
interface SetBuildNumberRepositoryOptions {
  useHgRevisionNumber?: any;
  xcodeproj?: string;
}

/** @interface SetChangelogOptions
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {string} version The version number to create/update
 * @property {string} changelog Changelog text that should be uploaded to App Store Connect
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {string} platform The platform of the app (ios, appletvos, mac)
 */
interface SetChangelogOptions {
  appIdentifier: string;
  username: string;
  version?: string;
  changelog?: string;
  teamId?: any;
  teamName?: string;
  platform: string;
}

/** @interface SetGithubReleaseOptions
 * @property {string} repositoryName The path to your repo, e.g. 'fastlane/fastlane'
 * @property {string} serverUrl The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
 * @property {string} apiToken Personal API Token for GitHub - generate one at https://github.com/settings/tokens
 * @property {string} tagName Pass in the tag name
 * @property {string} name Name of this release
 * @property {string} commitish Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master)
 * @property {string} description Description of this release
 * @property {any} isDraft Whether the release should be marked as draft
 * @property {any} isPrerelease Whether the release should be marked as prerelease
 * @property {string[]} uploadAssets Path to assets to be uploaded with the release
 */
interface SetGithubReleaseOptions {
  repositoryName: string;
  serverUrl?: string;
  apiToken: string;
  tagName: string;
  name?: string;
  commitish?: string;
  description?: string;
  isDraft?: any;
  isPrerelease?: any;
  uploadAssets?: string[];
}

/** @interface SetInfoPlistValueOptions
 * @property {string} key Name of key in plist
 * @property {string} subkey Name of subkey in plist
 * @property {any} value Value to setup
 * @property {string} path Path to plist file you want to update
 * @property {string} outputFileName Path to the output file you want to generate
 */
interface SetInfoPlistValueOptions {
  key: string;
  subkey?: string;
  value: any;
  path: string;
  outputFileName?: string;
}

/** @interface SetPodKeyOptions
 * @property {any} useBundleExec Use bundle exec when there is a Gemfile presented
 * @property {string} key The key to be saved with cocoapods-keys
 * @property {string} value The value to be saved with cocoapods-keys
 * @property {string} project The project name
 */
interface SetPodKeyOptions {
  useBundleExec: any;
  key: string;
  value: string;
  project?: string;
}

/** @interface SetupCiOptions
 * @property {any} force Force setup, even if not executed by CI
 * @property {string} provider CI provider. If none is set, the provider is detected automatically
 */
interface SetupCiOptions {
  force: any;
  provider?: string;
}

/** @interface SetupCircleCiOptions
 * @property {any} force Force setup, even if not executed by CircleCI
 */
interface SetupCircleCiOptions {
  force: any;
}

/** @interface SetupJenkinsOptions
 * @property {any} force Force setup, even if not executed by Jenkins
 * @property {any} unlockKeychain Unlocks keychain
 * @property {any} addKeychainToSearchList Add to keychain search list
 * @property {any} setDefaultKeychain Set keychain as default
 * @property {string} keychainPath Path to keychain
 * @property {string} keychainPassword Keychain password
 * @property {any} setCodeSigningIdentity Set code signing identity from CODE_SIGNING_IDENTITY environment
 * @property {string} codeSigningIdentity Code signing identity
 * @property {string} outputDirectory The directory in which the ipa file should be stored in
 * @property {string} derivedDataPath The directory where built products and other derived data will go
 * @property {any} resultBundle Produce the result bundle describing what occurred will be placed
 */
interface SetupJenkinsOptions {
  force: any;
  unlockKeychain: any;
  addKeychainToSearchList: any;
  setDefaultKeychain: any;
  keychainPath?: string;
  keychainPassword: string;
  setCodeSigningIdentity: any;
  codeSigningIdentity?: string;
  outputDirectory: string;
  derivedDataPath: string;
  resultBundle: any;
}

/** @interface SetupTravisOptions
 * @property {any} force Force setup, even if not executed by travis
 */
interface SetupTravisOptions {
  force: any;
}

/** @interface ShOptions
 * @property {string} command Shell command to be executed
 * @property {any} log Determines whether fastlane should print out the executed command itself and output of the executed command. If command line option --troubleshoot is used, then it overrides this option to true
 * @property {any} errorCallback A callback invoked with the command output if there is a non-zero exit status
 */
interface ShOptions {
  command: string;
  log?: any;
  errorCallback?: any;
}

/** @interface SighOptions
 * @property {any} adhoc Setting this flag will generate AdHoc profiles instead of App Store Profiles
 * @property {any} developerId Setting this flag will generate Developer ID profiles instead of App Store Profiles
 * @property {any} development Renew the development certificate instead of the production one
 * @property {any} skipInstall By default, the certificate will be added to your local machine. Setting this flag will skip this action
 * @property {any} force Renew provisioning profiles regardless of its state - to automatically add all devices for ad hoc profiles
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} provisioningName The name of the profile that is used on the Apple Developer Portal
 * @property {any} ignoreProfilesWithDifferentName Use in combination with :provisioning_name - when true only profiles matching this exact name will be downloaded
 * @property {string} outputPath Directory in which the profile should be stored
 * @property {string} certId The ID of the code signing certificate to use (e.g. 78ADL6LVAA)
 * @property {string} certOwnerName The certificate name to use for new profiles, or to renew with. (e.g. "Felix Krause")
 * @property {string} filename Filename to use for the generated provisioning profile (must include .mobileprovision)
 * @property {any} skipFetchProfiles Skips the verification of existing profiles which is useful if you have thousands of profiles
 * @property {any} skipCertificateVerification Skips the verification of the certificates for every existing profiles. This will make sure the provisioning profile can be used on the local machine
 * @property {any} platform Set the provisioning profile's platform (i.e. ios, tvos)
 * @property {any} readonly Only fetch existing profile, don't generate new ones
 * @property {string} templateName The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
 */
interface SighOptions {
  adhoc: any;
  developerId: any;
  development: any;
  skipInstall: any;
  force: any;
  appIdentifier: string;
  username: string;
  teamId?: string;
  teamName?: string;
  provisioningName?: string;
  ignoreProfilesWithDifferentName?: any;
  outputPath: string;
  certId?: string;
  certOwnerName?: string;
  filename?: string;
  skipFetchProfiles: any;
  skipCertificateVerification: any;
  platform: any;
  readonly?: any;
  templateName?: string;
}

/** @interface SkipDocsOptions

*/
interface SkipDocsOptions {}

/** @interface SlackOptions
 * @property {string} message The message that should be displayed on Slack. This supports the standard Slack markup language
 * @property {string} pretext This is optional text that appears above the message attachment block. This supports the standard Slack markup language
 * @property {string} channel #channel or @username
 * @property {any} useWebhookConfiguredUsernameAndIcon Use webhook's default username and icon settings? (true/false)
 * @property {string} slackUrl Create an Incoming WebHook for your Slack group
 * @property {string} username Overrides the webhook's username property if use_webhook_configured_username_and_icon is false
 * @property {string} iconUrl Overrides the webhook's image property if use_webhook_configured_username_and_icon is false
 * @property {any} payload Add additional information to this post. payload must be a hash containing any key with any value
 * @property {string[]} defaultPayloads Remove some of the default payloads. More information about the available payloads on GitHub
 * @property {any} attachmentProperties Merge additional properties in the slack attachment, see https://api.slack.com/docs/attachments
 * @property {any} success Was this build successful? (true/false)
 * @property {any} failOnError Should an error sending the slack notification cause a failure? (true/false)
 * @property {any} linkNames Find and link channel names and usernames (true/false)
 */
interface SlackOptions {
  message?: string;
  pretext?: string;
  channel?: string;
  useWebhookConfiguredUsernameAndIcon?: any;
  slackUrl: string;
  username?: string;
  iconUrl?: string;
  payload: any;
  defaultPayloads?: string[];
  attachmentProperties: any;
  success?: any;
  failOnError?: any;
  linkNames?: any;
}

/** @interface SlatherOptions
 * @property {string} buildDirectory The location of the build output
 * @property {string} proj The project file that slather looks at
 * @property {string} workspace The workspace that slather looks at
 * @property {string} scheme Scheme to use when calling slather
 * @property {string} configuration Configuration to use when calling slather (since slather-2.4.1)
 * @property {string} inputFormat The input format that slather should look for
 * @property {boolean} buildkite Tell slather that it is running on Buildkite
 * @property {boolean} teamcity Tell slather that it is running on TeamCity
 * @property {boolean} jenkins Tell slather that it is running on Jenkins
 * @property {boolean} travis Tell slather that it is running on TravisCI
 * @property {boolean} travisPro Tell slather that it is running on TravisCI Pro
 * @property {boolean} circleci Tell slather that it is running on CircleCI
 * @property {boolean} coveralls Tell slather that it should post data to Coveralls
 * @property {boolean} simpleOutput Tell slather that it should output results to the terminal
 * @property {boolean} gutterJson Tell slather that it should output results as Gutter JSON format
 * @property {boolean} coberturaXml Tell slather that it should output results as Cobertura XML format
 * @property {any} llvmCov Tell slather that it should output results as llvm-cov show format
 * @property {boolean} html Tell slather that it should output results as static HTML pages
 * @property {boolean} show Tell slather that it should open static html pages automatically
 * @property {string} sourceDirectory Tell slather the location of your source files
 * @property {string} outputDirectory Tell slather the location of for your output files
 * @property {string[]} ignore Tell slather to ignore files matching a path or any path from an array of paths
 * @property {boolean} verbose Tell slather to enable verbose mode
 * @property {boolean} useBundleExec Use bundle exec to execute slather. Make sure it is in the Gemfile
 * @property {any} binaryBasename Basename of the binary file, this should match the name of your bundle excluding its extension (i.e. YourApp [for YourApp.app bundle])
 * @property {string[]} binaryFile Binary file name to be used for code coverage
 * @property {string} arch Specify which architecture the binary file is in. Needed for universal binaries
 * @property {any} sourceFiles A Dir.glob compatible pattern used to limit the lookup to specific source files. Ignored in gcov mode
 * @property {any} decimals The amount of decimals to use for % coverage reporting
 */
interface SlatherOptions {
  buildDirectory?: string;
  proj?: string;
  workspace?: string;
  scheme?: string;
  configuration?: string;
  inputFormat?: string;
  buildkite?: boolean;
  teamcity?: boolean;
  jenkins?: boolean;
  travis?: boolean;
  travisPro?: boolean;
  circleci?: boolean;
  coveralls?: boolean;
  simpleOutput?: boolean;
  gutterJson?: boolean;
  coberturaXml?: boolean;
  llvmCov?: any;
  html?: boolean;
  show: boolean;
  sourceDirectory?: string;
  outputDirectory?: string;
  ignore?: string[];
  verbose?: boolean;
  useBundleExec: boolean;
  binaryBasename: any;
  binaryFile?: string[];
  arch?: string;
  sourceFiles?: any;
  decimals?: any;
}

/** @interface SnapshotOptions
 * @property {string} workspace Path the workspace file
 * @property {string} project Path the project file
 * @property {string} xcargs Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
 * @property {string} xcconfig Use an extra XCCONFIG file to build your app
 * @property {string[]} devices A list of devices you want to take the screenshots from
 * @property {string[]} languages A list of languages which should be used
 * @property {string[]} launchArguments A list of launch arguments which should be used
 * @property {string} outputDirectory The directory where to store the screenshots
 * @property {boolean} outputSimulatorLogs If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
 * @property {string} iosVersion By default, the latest version should be used automatically. If you want to change it, do it here
 * @property {any} skipOpenSummary Don't open the HTML summary after running _snapshot_
 * @property {any} skipHelperVersionCheck Do not check for most recent SnapshotHelper code
 * @property {any} clearPreviousScreenshots Enabling this option will automatically clear previously generated screenshots before running snapshot
 * @property {any} reinstallApp Enabling this option will automatically uninstall the application before running it
 * @property {any} eraseSimulator Enabling this option will automatically erase the simulator before running the application
 * @property {any} localizeSimulator Enabling this option will configure the Simulator's system language
 * @property {boolean} darkMode Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
 * @property {string} appIdentifier The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
 * @property {string[]} addPhotos A list of photos that should be added to the simulator before running the application
 * @property {string[]} addVideos A list of videos that should be added to the simulator before running the application
 * @property {string} buildlogPath The directory where to store the build log
 * @property {any} clean Should the project be cleaned before building it?
 * @property {boolean} testWithoutBuilding Test without building, requires a derived data path
 * @property {string} configuration The configuration to use when building the app. Defaults to 'Release'
 * @property {string} xcprettyArgs Additional xcpretty arguments
 * @property {string} sdk The SDK that should be used for building the application
 * @property {string} scheme The scheme you want to use, this must be the scheme for the UI Tests
 * @property {any} numberOfRetries The number of times a test can fail before snapshot should stop retrying
 * @property {any} stopAfterFirstError Should snapshot stop immediately after the tests completely failed on one device?
 * @property {string} derivedDataPath The directory where build products and other derived data will go
 * @property {any} resultBundle Should an Xcode result bundle be generated in the output directory
 * @property {string} testTargetName The name of the target you want to test (if you desire to override the Target Application from Xcode)
 * @property {any} namespaceLogFiles Separate the log files per device and per language
 * @property {any} concurrentSimulators Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
 * @property {any} disableSlideToType Disable the simulator from showing the 'Slide to type' prompt
 * @property {string} clonedSourcePackagesPath Sets a custom path for Swift Package Manager dependencies
 * @property {string} testplan The testplan associated with the scheme that should be used for testing
 */
interface SnapshotOptions {
  workspace?: string;
  project?: string;
  xcargs?: string;
  xcconfig?: string;
  devices?: string[];
  languages: string[];
  launchArguments: string[];
  outputDirectory: string;
  outputSimulatorLogs?: boolean;
  iosVersion?: string;
  skipOpenSummary: any;
  skipHelperVersionCheck: any;
  clearPreviousScreenshots: any;
  reinstallApp: any;
  eraseSimulator: any;
  localizeSimulator: any;
  darkMode?: boolean;
  appIdentifier?: string;
  addPhotos?: string[];
  addVideos?: string[];
  buildlogPath: string;
  clean: any;
  testWithoutBuilding?: boolean;
  configuration?: string;
  xcprettyArgs?: string;
  sdk?: string;
  scheme?: string;
  numberOfRetries: any;
  stopAfterFirstError: any;
  derivedDataPath?: string;
  resultBundle?: any;
  testTargetName?: string;
  namespaceLogFiles?: any;
  concurrentSimulators: any;
  disableSlideToType?: any;
  clonedSourcePackagesPath?: string;
  testplan?: string;
}

/** @interface SonarOptions
 * @property {string} projectConfigurationPath The path to your sonar project configuration file; defaults to `sonar-project.properties`
 * @property {string} projectKey The key sonar uses to identify the project, e.g. `name.gretzki.awesomeApp`. Must either be specified here or inside the sonar project configuration file
 * @property {string} projectName The name of the project that gets displayed on the sonar report page. Must either be specified here or inside the sonar project configuration file
 * @property {string} projectVersion The project's version that gets displayed on the sonar report page. Must either be specified here or inside the sonar project configuration file
 * @property {string} sourcesPath Comma-separated paths to directories containing source files. Must either be specified here or inside the sonar project configuration file
 * @property {string} projectLanguage Language key, e.g. objc
 * @property {string} sourceEncoding Used encoding of source files, e.g., UTF-8
 * @property {string} sonarRunnerArgs Pass additional arguments to sonar-scanner. Be sure to provide the arguments with a leading `-D` e.g. FL_SONAR_RUNNER_ARGS="-Dsonar.verbose=true"
 * @property {string} sonarLogin Pass the Sonar Login token (e.g: xxxxxxprivate_token_XXXXbXX7e)
 * @property {string} sonarUrl Pass the url of the Sonar server
 * @property {string} sonarOrganization Key of the organization on SonarCloud
 * @property {string} branchName Pass the branch name which is getting scanned
 * @property {string} pullRequestBranch The name of the branch that contains the changes to be merged
 * @property {string} pullRequestBase The long-lived branch into which the PR will be merged
 * @property {string} pullRequestKey Unique identifier of your PR. Must correspond to the key of the PR in GitHub or TFS
 */
interface SonarOptions {
  projectConfigurationPath?: string;
  projectKey?: string;
  projectName?: string;
  projectVersion?: string;
  sourcesPath?: string;
  projectLanguage?: string;
  sourceEncoding?: string;
  sonarRunnerArgs?: string;
  sonarLogin?: string;
  sonarUrl?: string;
  sonarOrganization?: string;
  branchName?: string;
  pullRequestBranch?: string;
  pullRequestBase?: string;
  pullRequestKey?: string;
}

/** @interface SpaceshipLogsOptions
 * @property {boolean} latest Finds only the latest Spaceshop log file if set to true, otherwise returns all
 * @property {boolean} printContents Prints the contents of the found Spaceship log file(s)
 * @property {boolean} printPaths Prints the paths of the found Spaceship log file(s)
 * @property {string} copyToPath Copies the found Spaceship log file(s) to a directory
 * @property {boolean} copyToClipboard Copies the contents of the found Spaceship log file(s) to the clipboard
 */
interface SpaceshipLogsOptions {
  latest: boolean;
  printContents: boolean;
  printPaths: boolean;
  copyToPath?: string;
  copyToClipboard: boolean;
}

/** @interface SplunkmintOptions
 * @property {string} dsym dSYM.zip file to upload to Splunk MINT
 * @property {string} apiKey Splunk MINT App API key e.g. f57a57ca
 * @property {string} apiToken Splunk MINT API token e.g. e05ba40754c4869fb7e0b61
 * @property {any} verbose Make detailed output
 * @property {any} uploadProgress Show upload progress
 * @property {string} proxyUsername Proxy username
 * @property {string} proxyPassword Proxy password
 * @property {string} proxyAddress Proxy address
 * @property {string} proxyPort Proxy port
 */
interface SplunkmintOptions {
  dsym?: string;
  apiKey: string;
  apiToken: string;
  verbose?: any;
  uploadProgress?: any;
  proxyUsername?: string;
  proxyPassword?: string;
  proxyAddress?: string;
  proxyPort?: string;
}

/** @interface SpmOptions
 * @property {string} command The swift command (one of: build, test, clean, reset, update, resolve, generate-xcodeproj, init)
 * @property {string} buildPath Specify build/cache directory [default: ./.build]
 * @property {string} packagePath Change working directory before any other operation
 * @property {string} xcconfig Use xcconfig file to override swift package generate-xcodeproj defaults
 * @property {string} configuration Build with configuration (debug|release) [default: debug]
 * @property {string} xcprettyOutput Specifies the output type for xcpretty. eg. 'test', or 'simple'
 * @property {string} xcprettyArgs Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf'), requires xcpretty_output to be specified also
 * @property {any} verbose Increase verbosity of informational output
 */
interface SpmOptions {
  command: string;
  buildPath?: string;
  packagePath?: string;
  xcconfig?: string;
  configuration?: string;
  xcprettyOutput?: string;
  xcprettyArgs?: string;
  verbose: any;
}

/** @interface SshOptions
 * @property {string} username Username
 * @property {string} password Password
 * @property {string} host Hostname
 * @property {string} port Port
 * @property {string[]} commands Commands
 * @property {any} log Log commands and output
 */
interface SshOptions {
  username: string;
  password?: string;
  host: string;
  port?: string;
  commands?: string[];
  log?: any;
}

/** @interface SupplyOptions
 * @property {string} packageName The package name of the application to use
 * @property {string} versionName Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
 * @property {any} versionCode Version code (used when updating rollout or promoting specific versions)
 * @property {string} releaseStatus Release status (used when uploading new apks/aabs) - valid values are completed, draft, halted, inProgress
 * @property {string} track The track of the application to use. The default available tracks are: production, beta, alpha, internal
 * @property {string} rollout The percentage of the user fraction when uploading to the rollout track
 * @property {string} metadataPath Path to the directory containing the metadata files
 * @property {string} key **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
 * @property {string} issuer **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
 * @property {string} jsonKey The path to a file containing service account JSON, used to authenticate with Google
 * @property {string} jsonKeyData The raw service account JSON data used to authenticate with Google
 * @property {string} apk Path to the APK file to upload
 * @property {string[]} apkPaths An array of paths to APK files to upload
 * @property {string} aab Path to the AAB file to upload
 * @property {string[]} aabPaths An array of paths to AAB files to upload
 * @property {boolean} skipUploadApk Whether to skip uploading APK
 * @property {boolean} skipUploadAab Whether to skip uploading AAB
 * @property {boolean} skipUploadMetadata Whether to skip uploading metadata, changelogs not included
 * @property {boolean} skipUploadChangelogs Whether to skip uploading changelogs
 * @property {boolean} skipUploadImages Whether to skip uploading images, screenshots not included
 * @property {boolean} skipUploadScreenshots Whether to skip uploading SCREENSHOTS
 * @property {string} trackPromoteTo The track to promote to. The default available tracks are: production, beta, alpha, internal
 * @property {boolean} validateOnly Only validate changes with Google Play rather than actually publish
 * @property {string} mapping Path to the mapping file to upload
 * @property {string[]} mappingPaths An array of paths to mapping files to upload
 * @property {string} rootUrl Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
 * @property {boolean} checkSupersededTracks **DEPRECATED!** Google Play does this automatically now - Check the other tracks for superseded versions and disable them
 * @property {any} timeout Timeout for read, open, and send (in seconds)
 * @property {boolean} deactivateOnPromote **DEPRECATED!** Google Play does this automatically now - When promoting to a new track, deactivate the binary in the origin track
 * @property {string[]} versionCodesToRetain An array of version codes to retain when publishing a new APK
 * @property {any} obbMainReferencesVersion References version of 'main' expansion file
 * @property {any} obbMainFileSize Size of 'main' expansion file in bytes
 * @property {any} obbPatchReferencesVersion References version of 'patch' expansion file
 * @property {any} obbPatchFileSize Size of 'patch' expansion file in bytes
 */
interface SupplyOptions {
  packageName: string;
  versionName?: string;
  versionCode?: any;
  releaseStatus?: string;
  track: string;
  rollout?: string;
  metadataPath?: string;
  key?: string;
  issuer?: string;
  jsonKey?: string;
  jsonKeyData?: string;
  apk?: string;
  apkPaths?: string[];
  aab?: string;
  aabPaths?: string[];
  skipUploadApk?: boolean;
  skipUploadAab?: boolean;
  skipUploadMetadata?: boolean;
  skipUploadChangelogs?: boolean;
  skipUploadImages?: boolean;
  skipUploadScreenshots?: boolean;
  trackPromoteTo?: string;
  validateOnly?: boolean;
  mapping?: string;
  mappingPaths?: string[];
  rootUrl?: string;
  checkSupersededTracks?: boolean;
  timeout?: any;
  deactivateOnPromote?: boolean;
  versionCodesToRetain?: string[];
  obbMainReferencesVersion?: any;
  obbMainFileSize?: any;
  obbPatchReferencesVersion?: any;
  obbPatchFileSize?: any;
}

/** @interface SwiftlintOptions
 * @property {any} mode SwiftLint mode: :lint, :autocorrect or :analyze
 * @property {string} path Specify path to lint
 * @property {string} outputFile Path to output SwiftLint result
 * @property {string} configFile Custom configuration file of SwiftLint
 * @property {boolean} strict Fail on warnings? (true/false)
 * @property {any} files List of files to process
 * @property {boolean} ignoreExitStatus Ignore the exit status of the SwiftLint command, so that serious violations                                                     don't fail the build (true/false)
 * @property {boolean} raiseIfSwiftlintError Raises an error if swiftlint fails, so you can fail CI/CD jobs if necessary                                                     (true/false)
 * @property {string} reporter Choose output reporter. Available: xcode, json, csv, checkstyle, junit, html,                                                      emoji, sonarqube, markdown, github-actions-logging
 * @property {boolean} quiet Don't print status logs like 'Linting <file>' & 'Done linting'
 * @property {string} executable Path to the `swiftlint` executable on your machine
 * @property {boolean} format Format code when mode is :autocorrect
 * @property {boolean} noCache Ignore the cache when mode is :autocorrect or :lint
 * @property {string} compilerLogPath Compiler log path when mode is :analyze
 */
interface SwiftlintOptions {
  mode?: any;
  path?: string;
  outputFile?: string;
  configFile?: string;
  strict?: boolean;
  files?: any;
  ignoreExitStatus?: boolean;
  raiseIfSwiftlintError?: boolean;
  reporter?: string;
  quiet?: boolean;
  executable?: string;
  format?: boolean;
  noCache?: boolean;
  compilerLogPath?: string;
}

/** @interface SyncCodeSigningOptions
 * @property {string} type Define the profile type, can be appstore, adhoc, development, enterprise, developer_id
 * @property {string[]} additionalCertTypes Create additional cert types needed for macOS installers (valid values: mac_installer_distribution, developer_id_installer)
 * @property {boolean} readonly Only fetch existing certificates and profiles, don't generate new ones
 * @property {boolean} generateAppleCerts Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
 * @property {boolean} skipProvisioningProfiles Skip syncing provisioning profiles
 * @property {string[]} appIdentifier The bundle identifier(s) of your app (comma-separated)
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your Developer Portal team if you're in multiple teams
 * @property {string} teamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} storageMode Define where you want to store your certificates
 * @property {string} gitUrl URL to the git repo containing all the certificates
 * @property {string} gitBranch Specific git branch to use
 * @property {string} gitFullName git user full name to commit
 * @property {string} gitUserEmail git user email to commit
 * @property {boolean} shallowClone Make a shallow clone of the repository (truncate the history to 1 revision)
 * @property {boolean} cloneBranchDirectly Clone just the branch specified, instead of the whole repo. This requires that the branch already exists. Otherwise the command will fail
 * @property {string} gitBasicAuthorization Use a basic authorization header to access the git repo (e.g.: access via HTTPS, GitHub Actions, etc), usually a string in Base64
 * @property {string} gitBearerAuthorization Use a bearer authorization header to access the git repo (e.g.: access to an Azure Devops repository), usually a string in Base64
 * @property {string} googleCloudBucketName Name of the Google Cloud Storage bucket to use
 * @property {string} googleCloudKeysFile Path to the gc_keys.json file
 * @property {string} googleCloudProjectId ID of the Google Cloud project to use for authentication
 * @property {string} s3Region Name of the S3 region
 * @property {string} s3AccessKey S3 access key
 * @property {string} s3SecretAccessKey S3 secret access key
 * @property {string} s3Bucket Name of the S3 bucket
 * @property {string} keychainName Keychain the items should be imported to
 * @property {string} keychainPassword This might be required the first time you access certificates on a new mac. For the login/default keychain this is your account password
 * @property {boolean} force Renew the provisioning profiles every time you run match
 * @property {boolean} forceForNewDevices Renew the provisioning profiles if the device count on the developer portal has changed. Ignored for profile type 'appstore'
 * @property {boolean} skipConfirmation Disables confirmation prompts during nuke, answering them with yes
 * @property {boolean} skipDocs Skip generation of a README.md for the created git repository
 * @property {string} platform Set the provisioning profile's platform to work with (i.e. ios, tvos, macos)
 * @property {string} templateName The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
 * @property {string} outputPath Path in which to export certificates, key and profile
 * @property {boolean} verbose Print out extra information and all commands
 */
interface SyncCodeSigningOptions {
  type: string;
  additionalCertTypes?: string[];
  readonly: boolean;
  generateAppleCerts: boolean;
  skipProvisioningProfiles: boolean;
  appIdentifier: string[];
  username: string;
  teamId?: string;
  teamName?: string;
  storageMode: string;
  gitUrl: string;
  gitBranch: string;
  gitFullName?: string;
  gitUserEmail?: string;
  shallowClone: boolean;
  cloneBranchDirectly: boolean;
  gitBasicAuthorization?: string;
  gitBearerAuthorization?: string;
  googleCloudBucketName?: string;
  googleCloudKeysFile?: string;
  googleCloudProjectId?: string;
  s3Region?: string;
  s3AccessKey?: string;
  s3SecretAccessKey?: string;
  s3Bucket?: string;
  keychainName: string;
  keychainPassword?: string;
  force: boolean;
  forceForNewDevices: boolean;
  skipConfirmation: boolean;
  skipDocs: boolean;
  platform: string;
  templateName?: string;
  outputPath?: string;
  verbose: boolean;
}

/** @interface TeamIdOptions

*/
interface TeamIdOptions {}

/** @interface TeamNameOptions

*/
interface TeamNameOptions {}

/** @interface TestfairyOptions
 * @property {string} apiKey API Key for TestFairy
 * @property {string} ipa Path to your IPA file for iOS
 * @property {string} apk Path to your APK file for Android
 * @property {string} symbolsFile Symbols mapping file
 * @property {string} uploadUrl API URL for TestFairy
 * @property {string[]} testersGroups Array of tester groups to be notified
 * @property {string[]} metrics Array of metrics to record (cpu,memory,network,phone_signal,gps,battery,mic,wifi)
 * @property {string} comment Additional release notes for this upload. This text will be added to email notifications
 * @property {string} autoUpdate Allows an easy upgrade of all users to the current version. To enable set to 'on'
 * @property {string} notify Send email to testers
 * @property {string[]} options Array of options (shake,video_only_wifi,anonymous)
 * @property {string} custom Array of custom options. Contact support@testfairy.com for more information
 * @property {any} timeout Request timeout in seconds
 */
interface TestfairyOptions {
  apiKey: string;
  ipa?: string;
  apk?: string;
  symbolsFile?: string;
  uploadUrl?: string;
  testersGroups?: string[];
  metrics?: string[];
  comment?: string;
  autoUpdate?: string;
  notify?: string;
  options?: string[];
  custom?: string;
  timeout?: any;
}

/** @interface TestflightOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier The bundle identifier of the app to upload or manage testers (optional)
 * @property {string} appPlatform The platform to use (optional)
 * @property {string} appleId Apple ID property in the App Information section in App Store Connect
 * @property {string} ipa Path to the ipa file to upload
 * @property {boolean} demoAccountRequired Do you need a demo account when Apple does review?
 * @property {{string: string}} betaAppReviewInfo Beta app review information for contact info and demo account
 * @property {{string: string}} localizedAppInfo Localized beta app test info for description, feedback email, marketing url, and privacy policy
 * @property {string} betaAppDescription Provide the 'Beta App Description' when uploading a new build
 * @property {string} betaAppFeedbackEmail Provide the beta app email when uploading a new build
 * @property {{string: string}} localizedBuildInfo Localized beta app test info for what's new
 * @property {string} changelog Provide the 'What to Test' text when uploading a new build. `skip_waiting_for_build_processing: false` is required to set the changelog
 * @property {any} skipSubmission Skip the distributing action of pilot and only upload the ipa file
 * @property {any} skipWaitingForBuildProcessing If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
 * @property {any} updateBuildInfoOnUpload **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
 * @property {boolean} usesNonExemptEncryption Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
 * @property {any} distributeExternal Should the build be distributed to external testers?
 * @property {any} notifyExternalTesters Should notify external testers?
 * @property {string} appVersion The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
 * @property {string} buildNumber The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
 * @property {string} firstName The tester's first name
 * @property {string} lastName The tester's last name
 * @property {string} email The tester's email
 * @property {string} testersFilePath Path to a CSV file of testers
 * @property {string[]} groups Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"`
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {string} devPortalTeamId The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
 * @property {string} itcProvider The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
 * @property {any} waitProcessingInterval Interval in seconds to wait for App Store Connect processing
 * @property {any} waitForUploadedBuild **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
 * @property {any} rejectBuildWaitingForReview Expire previous if it's 'waiting for review'
 */
interface TestflightOptions {
  username: string;
  appIdentifier?: string;
  appPlatform?: string;
  appleId?: string;
  ipa?: string;
  demoAccountRequired: boolean;
  betaAppReviewInfo?: { string: string };
  localizedAppInfo?: { string: string };
  betaAppDescription?: string;
  betaAppFeedbackEmail?: string;
  localizedBuildInfo?: { string: string };
  changelog?: string;
  skipSubmission: any;
  skipWaitingForBuildProcessing: any;
  updateBuildInfoOnUpload?: any;
  usesNonExemptEncryption: boolean;
  distributeExternal: any;
  notifyExternalTesters: any;
  appVersion?: string;
  buildNumber?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  testersFilePath?: string;
  groups?: string[];
  teamId?: any;
  teamName?: string;
  devPortalTeamId?: string;
  itcProvider?: string;
  waitProcessingInterval: any;
  waitForUploadedBuild?: any;
  rejectBuildWaitingForReview: any;
}

/** @interface TryoutsOptions
 * @property {string} appId Tryouts application hash
 * @property {string} apiToken API Token (api_key:api_secret) for Tryouts Access
 * @property {string} buildFile Path to your IPA or APK file. Optional if you use the _gym_ or _xcodebuild_ action
 * @property {string} notes Release notes
 * @property {string} notesPath Release notes text file path. Overrides the :notes parameter
 * @property {any} notify Notify testers? 0 for no
 * @property {any} status 2 to make your release public. Release will be distributed to available testers. 1 to make your release private. Release won't be distributed to testers. This also prevents release from showing up for SDK update
 */
interface TryoutsOptions {
  appId: string;
  apiToken: string;
  buildFile: string;
  notes?: string;
  notesPath?: string;
  notify: any;
  status: any;
}

/** @interface TwitterOptions
 * @property {string} consumerKey Consumer Key
 * @property {string} consumerSecret Consumer Secret
 * @property {string} accessToken Access Token
 * @property {string} accessTokenSecret Access Token Secret
 * @property {string} message The tweet
 */
interface TwitterOptions {
  consumerKey: string;
  consumerSecret: string;
  accessToken: string;
  accessTokenSecret: string;
  message: string;
}

/** @interface TypetalkOptions

*/
interface TypetalkOptions {}

/** @interface UnlockKeychainOptions
 * @property {string} path Path to the keychain file
 * @property {string} password Keychain password
 * @property {any} addToSearchList Add to keychain search list
 * @property {any} setDefault Set as default keychain
 */
interface UnlockKeychainOptions {
  path: string;
  password: string;
  addToSearchList: any;
  setDefault: any;
}

/** @interface UpdateAppGroupIdentifiersOptions
 * @property {string} entitlementsFile The path to the entitlement file which contains the app group identifiers
 * @property {any} appGroupIdentifiers An Array of unique identifiers for the app groups. Eg. ['group.com.test.testapp']
 */
interface UpdateAppGroupIdentifiersOptions {
  entitlementsFile: string;
  appGroupIdentifiers: any;
}

/** @interface UpdateAppIdentifierOptions
 * @property {string} xcodeproj Path to your Xcode project
 * @property {string} plistPath Path to info plist, relative to your Xcode project
 * @property {string} appIdentifier The app Identifier you want to set
 */
interface UpdateAppIdentifierOptions {
  xcodeproj: string;
  plistPath: string;
  appIdentifier: string;
}

/** @interface UpdateCodeSigningSettingsOptions
 * @property {string} path Path to your Xcode project
 * @property {any} useAutomaticSigning Defines if project should use automatic signing
 * @property {string} teamId Team ID, is used when upgrading project
 * @property {string[]} targets Specify targets you want to toggle the signing mech. (default to all targets)
 * @property {string[]} buildConfigurations Specify build_configurations you want to toggle the signing mech. (default to all targets)
 * @property {string} codeSignIdentity Code signing identity type (iPhone Developer, iPhone Distribution)
 * @property {string} profileName Provisioning profile name to use for code signing
 * @property {string} profileUuid Provisioning profile UUID to use for code signing
 * @property {string} bundleIdentifier Application Product Bundle Identifier
 */
interface UpdateCodeSigningSettingsOptions {
  path: string;
  useAutomaticSigning: any;
  teamId?: string;
  targets?: string[];
  buildConfigurations?: string[];
  codeSignIdentity?: string;
  profileName?: string;
  profileUuid?: string;
  bundleIdentifier?: string;
}

/** @interface UpdateFastlaneOptions
 * @property {any} noUpdate Don't update during this run. This is used internally
 * @property {any} nightly **DEPRECATED!** Nightly builds are no longer being made available - Opt-in to install and use nightly fastlane builds
 */
interface UpdateFastlaneOptions {
  noUpdate: any;
  nightly?: any;
}

/** @interface UpdateIcloudContainerIdentifiersOptions
 * @property {string} entitlementsFile The path to the entitlement file which contains the iCloud container identifiers
 * @property {any} icloudContainerIdentifiers An Array of unique identifiers for the iCloud containers. Eg. ['iCloud.com.test.testapp']
 */
interface UpdateIcloudContainerIdentifiersOptions {
  entitlementsFile: string;
  icloudContainerIdentifiers: any;
}

/** @interface UpdateInfoPlistOptions
 * @property {string} xcodeproj Path to your Xcode project
 * @property {string} plistPath Path to info plist
 * @property {string} scheme Scheme of info plist
 * @property {string} appIdentifier The App Identifier of your app
 * @property {string} displayName The Display Name of your app
 * @property {any} block A block to process plist with custom logic
 */
interface UpdateInfoPlistOptions {
  xcodeproj?: string;
  plistPath?: string;
  scheme?: string;
  appIdentifier?: string;
  displayName?: string;
  block?: any;
}

/** @interface UpdateKeychainAccessGroupsOptions
 * @property {string} entitlementsFile The path to the entitlement file which contains the keychain access groups
 * @property {any} identifiers An Array of unique identifiers for the keychain access groups. Eg. ['your.keychain.access.groups.identifiers']
 */
interface UpdateKeychainAccessGroupsOptions {
  entitlementsFile: string;
  identifiers: any;
}

/** @interface UpdatePlistOptions
 * @property {string} plistPath Path to plist file
 * @property {any} block A block to process plist with custom logic
 */
interface UpdatePlistOptions {
  plistPath?: string;
  block: any;
}

/** @interface UpdateProjectCodeSigningOptions
 * @property {string} path Path to your Xcode project
 * @property {string} udid **DEPRECATED!** Use `:uuid` instead
 * @property {string} uuid The UUID of the provisioning profile you want to use
 */
interface UpdateProjectCodeSigningOptions {
  path: string;
  udid?: string;
  uuid: string;
}

/** @interface UpdateProjectProvisioningOptions
 * @property {string} xcodeproj Path to your Xcode project
 * @property {string} profile Path to provisioning profile (.mobileprovision)
 * @property {any} targetFilter A filter for the target name. Use a standard regex
 * @property {string} buildConfigurationFilter Legacy option, use 'target_filter' instead
 * @property {any} buildConfiguration A filter for the build configuration name. Use a standard regex. Applied to all configurations if not specified
 * @property {string} certificate Path to apple root certificate
 * @property {string} codeSigningIdentity Code sign identity for build configuration
 */
interface UpdateProjectProvisioningOptions {
  xcodeproj?: string;
  profile: string;
  targetFilter?: any;
  buildConfigurationFilter?: string;
  buildConfiguration?: any;
  certificate: string;
  codeSigningIdentity?: string;
}

/** @interface UpdateProjectTeamOptions
 * @property {string} path Path to your Xcode project
 * @property {string[]} targets Name of the targets you want to update
 * @property {string} teamid The Team ID you want to use
 */
interface UpdateProjectTeamOptions {
  path: string;
  targets?: string[];
  teamid: string;
}

/** @interface UpdateUrbanAirshipConfigurationOptions
 * @property {string} plistPath Path to Urban Airship configuration Plist
 * @property {string} developmentAppKey The development app key
 * @property {string} developmentAppSecret The development app secret
 * @property {string} productionAppKey The production app key
 * @property {string} productionAppSecret The production app secret
 * @property {boolean} detectProvisioningMode Automatically detect provisioning mode
 */
interface UpdateUrbanAirshipConfigurationOptions {
  plistPath: string;
  developmentAppKey?: string;
  developmentAppSecret?: string;
  productionAppKey?: string;
  productionAppSecret?: string;
  detectProvisioningMode?: boolean;
}

/** @interface UpdateUrlSchemesOptions
 * @property {string} path The Plist file's path
 * @property {any} urlSchemes The new URL schemes
 * @property {any} updateUrlSchemes Block that is called to update schemes with current schemes passed in as parameter
 */
interface UpdateUrlSchemesOptions {
  path: string;
  urlSchemes?: any;
  updateUrlSchemes?: any;
}

/** @interface UploadSymbolsToCrashlyticsOptions
 * @property {string} dsymPath Path to the DSYM file or zip to upload
 * @property {string[]} dsymPaths Paths to the DSYM files or zips to upload
 * @property {string} apiToken Crashlytics API Key
 * @property {string} gspPath Path to GoogleService-Info.plist
 * @property {string} appId Firebase Crashlytics APP ID
 * @property {string} binaryPath The path to the upload-symbols file of the Fabric app
 * @property {string} platform The platform of the app (ios, appletvos, mac)
 * @property {any} dsymWorkerThreads The number of threads to use for simultaneous dSYM upload
 */
interface UploadSymbolsToCrashlyticsOptions {
  dsymPath?: string;
  dsymPaths?: string[];
  apiToken?: string;
  gspPath?: string;
  appId?: string;
  binaryPath?: string;
  platform: string;
  dsymWorkerThreads?: any;
}

/** @interface UploadSymbolsToSentryOptions
 * @property {string} apiHost API host url for Sentry
 * @property {string} apiKey API key for Sentry
 * @property {string} authToken Authentication token for Sentry
 * @property {string} orgSlug Organization slug for Sentry project
 * @property {string} projectSlug Project slug for Sentry
 * @property {string} dsymPath Path to your symbols file. For iOS and Mac provide path to app.dSYM.zip
 * @property {any} dsymPaths Path to an array of your symbols file. For iOS and Mac provide path to app.dSYM.zip
 */
interface UploadSymbolsToSentryOptions {
  apiHost?: string;
  apiKey?: string;
  authToken?: string;
  orgSlug: string;
  projectSlug: string;
  dsymPath?: string;
  dsymPaths?: any;
}

/** @interface UploadToAppStoreOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier The bundle identifier of your app
 * @property {string} appVersion The version that should be edited or created
 * @property {string} ipa Path to your ipa file
 * @property {string} pkg Path to your pkg file
 * @property {string} buildNumber If set the given build number (already uploaded to iTC) will be used instead of the current built one
 * @property {string} platform The platform to use (optional)
 * @property {any} editLive Modify live metadata, this option disables ipa upload and screenshot upload
 * @property {any} useLiveVersion Force usage of live version rather than edit version
 * @property {string} metadataPath Path to the folder containing the metadata files
 * @property {string} screenshotsPath Path to the folder containing the screenshots
 * @property {any} skipBinaryUpload Skip uploading an ipa or pkg to App Store Connect
 * @property {any} skipScreenshots Don't upload the screenshots
 * @property {any} skipMetadata Don't upload the metadata (e.g. title, description). This will still upload screenshots
 * @property {any} skipAppVersionUpdate Don't update app version for submission
 * @property {any} force Skip the HTML report file verification
 * @property {any} overwriteScreenshots Clear all previously uploaded screenshots before uploading the new ones
 * @property {any} submitForReview Submit the new version for Review after uploading everything
 * @property {any} rejectIfPossible Rejects the previously submitted build if it's in a state where it's possible
 * @property {any} automaticRelease Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
 * @property {any} autoReleaseDate Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
 * @property {any} phasedRelease Enable the phased release feature of iTC
 * @property {any} resetRatings Reset the summary rating when you release a new version of the application
 * @property {any} priceTier The price tier of this application
 * @property {string} appRatingConfigPath Path to the app rating's config
 * @property {any} submissionInformation Extra information for the submission (e.g. compliance specifications, IDFA settings)
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {string} devPortalTeamId The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
 * @property {string} devPortalTeamName The name of your Developer Portal team if you're in multiple teams
 * @property {string} itcProvider The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
 * @property {any} runPrecheckBeforeSubmit Run precheck before submitting to app review
 * @property {any} precheckDefaultRuleLevel The default precheck rule level unless otherwise configured
 * @property {string[]} individualMetadataItems An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
 * @property {string} appIcon Metadata: The path to the app icon
 * @property {string} appleWatchAppIcon Metadata: The path to the Apple Watch app icon
 * @property {string} copyright Metadata: The copyright notice
 * @property {string} primaryCategory Metadata: The english name of the primary category (e.g. `Business`, `Books`)
 * @property {string} secondaryCategory Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
 * @property {string} primaryFirstSubCategory Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} primarySecondSubCategory Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} secondaryFirstSubCategory Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
 * @property {string} secondarySecondSubCategory Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
 * @property {{string: string}} tradeRepresentativeContactInformation Metadata: A hash containing the trade representative contact information
 * @property {{string: string}} appReviewInformation Metadata: A hash containing the review information
 * @property {string} appReviewAttachmentFile Metadata: Path to the app review attachment file
 * @property {any} description Metadata: The localised app description
 * @property {any} name Metadata: The localised app name
 * @property {{string: string}} subtitle Metadata: The localised app subtitle
 * @property {{string: string}} keywords Metadata: An array of localised keywords
 * @property {{string: string}} promotionalText Metadata: An array of localised promotional texts
 * @property {any} releaseNotes Metadata: Localised release notes for this version
 * @property {any} privacyUrl Metadata: Localised privacy url
 * @property {any} appleTvPrivacyPolicy Metadata: Localised Apple TV privacy policy text
 * @property {any} supportUrl Metadata: Localised support url
 * @property {any} marketingUrl Metadata: Localised marketing url
 * @property {string[]} languages Metadata: List of languages to activate
 * @property {any} ignoreLanguageDirectoryValidation Ignore errors when invalid languages are found in metadata and screenshot directories
 * @property {any} precheckIncludeInAppPurchases Should precheck check in-app purchases?
 * @property {any} app The (spaceship) app ID of the app you want to use/modify
 */
interface UploadToAppStoreOptions {
  username: string;
  appIdentifier?: string;
  appVersion?: string;
  ipa?: string;
  pkg?: string;
  buildNumber?: string;
  platform?: string;
  editLive?: any;
  useLiveVersion: any;
  metadataPath?: string;
  screenshotsPath?: string;
  skipBinaryUpload: any;
  skipScreenshots: any;
  skipMetadata: any;
  skipAppVersionUpdate: any;
  force: any;
  overwriteScreenshots: any;
  submitForReview: any;
  rejectIfPossible: any;
  automaticRelease: any;
  autoReleaseDate?: any;
  phasedRelease?: any;
  resetRatings?: any;
  priceTier?: any;
  appRatingConfigPath?: string;
  submissionInformation?: any;
  teamId?: any;
  teamName?: string;
  devPortalTeamId?: string;
  devPortalTeamName?: string;
  itcProvider?: string;
  runPrecheckBeforeSubmit: any;
  precheckDefaultRuleLevel: any;
  individualMetadataItems: string[];
  appIcon?: string;
  appleWatchAppIcon?: string;
  copyright?: string;
  primaryCategory?: string;
  secondaryCategory?: string;
  primaryFirstSubCategory?: string;
  primarySecondSubCategory?: string;
  secondaryFirstSubCategory?: string;
  secondarySecondSubCategory?: string;
  tradeRepresentativeContactInformation?: { string: string };
  appReviewInformation?: { string: string };
  appReviewAttachmentFile?: string;
  description?: any;
  name?: any;
  subtitle?: { string: string };
  keywords?: { string: string };
  promotionalText?: { string: string };
  releaseNotes?: any;
  privacyUrl?: any;
  appleTvPrivacyPolicy?: any;
  supportUrl?: any;
  marketingUrl?: any;
  languages?: string[];
  ignoreLanguageDirectoryValidation: any;
  precheckIncludeInAppPurchases?: any;
  app: any;
}

/** @interface UploadToPlayStoreOptions
 * @property {string} packageName The package name of the application to use
 * @property {string} versionName Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
 * @property {any} versionCode Version code (used when updating rollout or promoting specific versions)
 * @property {string} releaseStatus Release status (used when uploading new apks/aabs) - valid values are completed, draft, halted, inProgress
 * @property {string} track The track of the application to use. The default available tracks are: production, beta, alpha, internal
 * @property {string} rollout The percentage of the user fraction when uploading to the rollout track
 * @property {string} metadataPath Path to the directory containing the metadata files
 * @property {string} key **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
 * @property {string} issuer **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
 * @property {string} jsonKey The path to a file containing service account JSON, used to authenticate with Google
 * @property {string} jsonKeyData The raw service account JSON data used to authenticate with Google
 * @property {string} apk Path to the APK file to upload
 * @property {string[]} apkPaths An array of paths to APK files to upload
 * @property {string} aab Path to the AAB file to upload
 * @property {string[]} aabPaths An array of paths to AAB files to upload
 * @property {boolean} skipUploadApk Whether to skip uploading APK
 * @property {boolean} skipUploadAab Whether to skip uploading AAB
 * @property {boolean} skipUploadMetadata Whether to skip uploading metadata, changelogs not included
 * @property {boolean} skipUploadChangelogs Whether to skip uploading changelogs
 * @property {boolean} skipUploadImages Whether to skip uploading images, screenshots not included
 * @property {boolean} skipUploadScreenshots Whether to skip uploading SCREENSHOTS
 * @property {string} trackPromoteTo The track to promote to. The default available tracks are: production, beta, alpha, internal
 * @property {boolean} validateOnly Only validate changes with Google Play rather than actually publish
 * @property {string} mapping Path to the mapping file to upload
 * @property {string[]} mappingPaths An array of paths to mapping files to upload
 * @property {string} rootUrl Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
 * @property {boolean} checkSupersededTracks **DEPRECATED!** Google Play does this automatically now - Check the other tracks for superseded versions and disable them
 * @property {any} timeout Timeout for read, open, and send (in seconds)
 * @property {boolean} deactivateOnPromote **DEPRECATED!** Google Play does this automatically now - When promoting to a new track, deactivate the binary in the origin track
 * @property {string[]} versionCodesToRetain An array of version codes to retain when publishing a new APK
 * @property {any} obbMainReferencesVersion References version of 'main' expansion file
 * @property {any} obbMainFileSize Size of 'main' expansion file in bytes
 * @property {any} obbPatchReferencesVersion References version of 'patch' expansion file
 * @property {any} obbPatchFileSize Size of 'patch' expansion file in bytes
 */
interface UploadToPlayStoreOptions {
  packageName: string;
  versionName?: string;
  versionCode?: any;
  releaseStatus?: string;
  track: string;
  rollout?: string;
  metadataPath?: string;
  key?: string;
  issuer?: string;
  jsonKey?: string;
  jsonKeyData?: string;
  apk?: string;
  apkPaths?: string[];
  aab?: string;
  aabPaths?: string[];
  skipUploadApk?: boolean;
  skipUploadAab?: boolean;
  skipUploadMetadata?: boolean;
  skipUploadChangelogs?: boolean;
  skipUploadImages?: boolean;
  skipUploadScreenshots?: boolean;
  trackPromoteTo?: string;
  validateOnly?: boolean;
  mapping?: string;
  mappingPaths?: string[];
  rootUrl?: string;
  checkSupersededTracks?: boolean;
  timeout?: any;
  deactivateOnPromote?: boolean;
  versionCodesToRetain?: string[];
  obbMainReferencesVersion?: any;
  obbMainFileSize?: any;
  obbPatchReferencesVersion?: any;
  obbPatchFileSize?: any;
}

/** @interface UploadToPlayStoreInternalAppSharingOptions
 * @property {string} packageName The package name of the application to use
 * @property {string} jsonKey The path to a file containing service account JSON, used to authenticate with Google
 * @property {string} jsonKeyData The raw service account JSON data used to authenticate with Google
 * @property {string} apk Path to the APK file to upload
 * @property {string[]} apkPaths An array of paths to APK files to upload
 * @property {string} aab Path to the AAB file to upload
 * @property {string[]} aabPaths An array of paths to AAB files to upload
 * @property {string} rootUrl Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
 * @property {any} timeout Timeout for read, open, and send (in seconds)
 */
interface UploadToPlayStoreInternalAppSharingOptions {
  packageName: string;
  jsonKey?: string;
  jsonKeyData?: string;
  apk?: string;
  apkPaths?: string[];
  aab?: string;
  aabPaths?: string[];
  rootUrl?: string;
  timeout?: any;
}

/** @interface UploadToTestflightOptions
 * @property {string} username Your Apple ID Username
 * @property {string} appIdentifier The bundle identifier of the app to upload or manage testers (optional)
 * @property {string} appPlatform The platform to use (optional)
 * @property {string} appleId Apple ID property in the App Information section in App Store Connect
 * @property {string} ipa Path to the ipa file to upload
 * @property {boolean} demoAccountRequired Do you need a demo account when Apple does review?
 * @property {{string: string}} betaAppReviewInfo Beta app review information for contact info and demo account
 * @property {{string: string}} localizedAppInfo Localized beta app test info for description, feedback email, marketing url, and privacy policy
 * @property {string} betaAppDescription Provide the 'Beta App Description' when uploading a new build
 * @property {string} betaAppFeedbackEmail Provide the beta app email when uploading a new build
 * @property {{string: string}} localizedBuildInfo Localized beta app test info for what's new
 * @property {string} changelog Provide the 'What to Test' text when uploading a new build. `skip_waiting_for_build_processing: false` is required to set the changelog
 * @property {any} skipSubmission Skip the distributing action of pilot and only upload the ipa file
 * @property {any} skipWaitingForBuildProcessing If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
 * @property {any} updateBuildInfoOnUpload **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
 * @property {boolean} usesNonExemptEncryption Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
 * @property {any} distributeExternal Should the build be distributed to external testers?
 * @property {any} notifyExternalTesters Should notify external testers?
 * @property {string} appVersion The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
 * @property {string} buildNumber The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
 * @property {string} firstName The tester's first name
 * @property {string} lastName The tester's last name
 * @property {string} email The tester's email
 * @property {string} testersFilePath Path to a CSV file of testers
 * @property {string[]} groups Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"`
 * @property {any} teamId The ID of your App Store Connect team if you're in multiple teams
 * @property {string} teamName The name of your App Store Connect team if you're in multiple teams
 * @property {string} devPortalTeamId The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
 * @property {string} itcProvider The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
 * @property {any} waitProcessingInterval Interval in seconds to wait for App Store Connect processing
 * @property {any} waitForUploadedBuild **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
 * @property {any} rejectBuildWaitingForReview Expire previous if it's 'waiting for review'
 */
interface UploadToTestflightOptions {
  username: string;
  appIdentifier?: string;
  appPlatform?: string;
  appleId?: string;
  ipa?: string;
  demoAccountRequired: boolean;
  betaAppReviewInfo?: { string: string };
  localizedAppInfo?: { string: string };
  betaAppDescription?: string;
  betaAppFeedbackEmail?: string;
  localizedBuildInfo?: { string: string };
  changelog?: string;
  skipSubmission: any;
  skipWaitingForBuildProcessing: any;
  updateBuildInfoOnUpload?: any;
  usesNonExemptEncryption: boolean;
  distributeExternal: any;
  notifyExternalTesters: any;
  appVersion?: string;
  buildNumber?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  testersFilePath?: string;
  groups?: string[];
  teamId?: any;
  teamName?: string;
  devPortalTeamId?: string;
  itcProvider?: string;
  waitProcessingInterval: any;
  waitForUploadedBuild?: any;
  rejectBuildWaitingForReview: any;
}

/** @interface ValidatePlayStoreJsonKeyOptions
 * @property {string} jsonKey The path to a file containing service account JSON, used to authenticate with Google
 * @property {string} jsonKeyData The raw service account JSON data used to authenticate with Google
 * @property {string} rootUrl Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
 * @property {any} timeout Timeout for read, open, and send (in seconds)
 */
interface ValidatePlayStoreJsonKeyOptions {
  jsonKey?: string;
  jsonKeyData?: string;
  rootUrl?: string;
  timeout?: any;
}

/** @interface VerifyBuildOptions
 * @property {string} provisioningType Required type of provisioning
 * @property {string} provisioningUuid Required UUID of provisioning profile
 * @property {string} teamIdentifier Required team identifier
 * @property {string} teamName Required team name
 * @property {string} appName Required app name
 * @property {string} bundleIdentifier Required bundle identifier
 * @property {string} ipaPath Explicitly set the ipa path
 * @property {string} buildPath Explicitly set the ipa, app or xcarchive path
 */
interface VerifyBuildOptions {
  provisioningType?: string;
  provisioningUuid?: string;
  teamIdentifier?: string;
  teamName?: string;
  appName?: string;
  bundleIdentifier?: string;
  ipaPath?: string;
  buildPath?: string;
}

/** @interface VerifyPodKeysOptions

*/
interface VerifyPodKeysOptions {}

/** @interface VerifyXcodeOptions
 * @property {string} xcodePath The path to the Xcode installation to test
 */
interface VerifyXcodeOptions {
  xcodePath: string;
}

/** @interface VersionBumpPodspecOptions
 * @property {string} path You must specify the path to the podspec file to update
 * @property {string} bumpType The type of this version bump. Available: patch, minor, major
 * @property {string} versionNumber Change to a specific version. This will replace the bump type value
 * @property {string} versionAppendix Change version appendix to a specific value. For example 1.4.14.4.1 -> 1.4.14.5
 * @property {boolean} requireVariablePrefix true by default, this is used for non CocoaPods version bumps only
 */
interface VersionBumpPodspecOptions {
  path: string;
  bumpType: string;
  versionNumber?: string;
  versionAppendix?: string;
  requireVariablePrefix: boolean;
}

/** @interface VersionGetPodspecOptions
 * @property {string} path You must specify the path to the podspec file
 * @property {any} requireVariablePrefix true by default, this is used for non CocoaPods version bumps only
 */
interface VersionGetPodspecOptions {
  path: string;
  requireVariablePrefix: any;
}

/** @interface XcarchiveOptions

*/
interface XcarchiveOptions {}

/** @interface XcbuildOptions

*/
interface XcbuildOptions {}

/** @interface XccleanOptions

*/
interface XccleanOptions {}

/** @interface XcexportOptions

*/
interface XcexportOptions {}

/** @interface XcodeInstallOptions
 * @property {string} version The version number of the version of Xcode to install
 * @property {string} username Your Apple ID Username
 * @property {string} teamId The ID of your team if you're in multiple teams
 */
interface XcodeInstallOptions {
  version: string;
  username: string;
  teamId?: string;
}

/** @interface XcodeSelectOptions

*/
interface XcodeSelectOptions {}

/** @interface XcodeServerGetAssetsOptions
 * @property {string} host IP Address/Hostname of Xcode Server
 * @property {string} botName Name of the Bot to pull assets from
 * @property {any} integrationNumber Optionally you can override which integration's assets should be downloaded. If not provided, the latest integration is used
 * @property {string} username Username for your Xcode Server
 * @property {string} password Password for your Xcode Server
 * @property {string} targetFolder Relative path to a folder into which to download assets
 * @property {any} keepAllAssets Whether to keep all assets or let the script delete everything except for the .xcarchive
 * @property {any} trustSelfSignedCerts Whether to trust self-signed certs on your Xcode Server
 */
interface XcodeServerGetAssetsOptions {
  host: string;
  botName: string;
  integrationNumber?: any;
  username?: string;
  password?: string;
  targetFolder?: string;
  keepAllAssets?: any;
  trustSelfSignedCerts?: any;
}

/** @interface XcodebuildOptions

*/
interface XcodebuildOptions {}

/** @interface XcovOptions

*/
interface XcovOptions {}

/** @interface XctestOptions

*/
interface XctestOptions {}

/** @interface XctoolOptions

*/
interface XctoolOptions {}

/** @interface XcversionOptions
 * @property {string} version The version of Xcode to select specified as a Gem::Version requirement string (e.g. '~> 7.1.0')
 */
interface XcversionOptions {
  version: string;
}

/** @interface ZipOptions
 * @property {string} path Path to the directory or file to be zipped
 * @property {string} outputPath The name of the resulting zip file
 * @property {boolean} verbose Enable verbose output of zipped file
 * @property {string} password Encrypt the contents of the zip archive using a password
 * @property {boolean} symlinks Store symbolic links as such in the zip archive
 */
interface ZipOptions {
  path: string;
  outputPath?: string;
  verbose?: boolean;
  password?: string;
  symlinks?: boolean;
}

/** Private converter for AdbOptions
 * @param  options - Source object as provided by consumer
 */
function convertAdbOptions(options: AdbOptions) {
  return {
    serial: options.serial,
    command: options.command,
    adb_path: options.adbPath,
  };
}

/** Private converter for AdbDevicesOptions
 * @param  options - Source object as provided by consumer
 */
function convertAdbDevicesOptions(options: AdbDevicesOptions) {
  return {
    adb_path: options.adbPath,
  };
}

/** Private converter for AddExtraPlatformsOptions
 * @param  options - Source object as provided by consumer
 */
function convertAddExtraPlatformsOptions(options: AddExtraPlatformsOptions) {
  return {
    platforms: options.platforms,
  };
}

/** Private converter for AddGitTagOptions
 * @param  options - Source object as provided by consumer
 */
function convertAddGitTagOptions(options: AddGitTagOptions) {
  return {
    tag: options.tag,
    grouping: options.grouping,
    prefix: options.prefix,
    postfix: options.postfix,
    build_number: options.buildNumber,
    message: options.message,
    commit: options.commit,
    force: options.force,
    sign: options.sign,
  };
}

/** Private converter for AppStoreBuildNumberOptions
 * @param  options - Source object as provided by consumer
 */
function convertAppStoreBuildNumberOptions(
  options: AppStoreBuildNumberOptions
) {
  return {
    initial_build_number: options.initialBuildNumber,
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    live: options.live,
    version: options.version,
    platform: options.platform,
    team_name: options.teamName,
  };
}

/** Private converter for AppaloosaOptions
 * @param  options - Source object as provided by consumer
 */
function convertAppaloosaOptions(options: AppaloosaOptions) {
  return {
    binary: options.binary,
    api_token: options.apiToken,
    store_id: options.storeId,
    group_ids: options.groupIds,
    screenshots: options.screenshots,
    locale: options.locale,
    device: options.device,
    description: options.description,
  };
}

/** Private converter for AppetizeOptions
 * @param  options - Source object as provided by consumer
 */
function convertAppetizeOptions(options: AppetizeOptions) {
  return {
    api_host: options.apiHost,
    api_token: options.apiToken,
    url: options.url,
    platform: options.platform,
    path: options.path,
    public_key: options.publicKey,
    note: options.note,
  };
}

/** Private converter for AppetizeViewingUrlGeneratorOptions
 * @param  options - Source object as provided by consumer
 */
function convertAppetizeViewingUrlGeneratorOptions(
  options: AppetizeViewingUrlGeneratorOptions
) {
  return {
    public_key: options.publicKey,
    base_url: options.baseUrl,
    device: options.device,
    scale: options.scale,
    orientation: options.orientation,
    language: options.language,
    color: options.color,
    launch_url: options.launchUrl,
    os_version: options.osVersion,
    params: options.params,
    proxy: options.proxy,
  };
}

/** Private converter for AppiumOptions
 * @param  options - Source object as provided by consumer
 */
function convertAppiumOptions(options: AppiumOptions) {
  return {
    platform: options.platform,
    spec_path: options.specPath,
    app_path: options.appPath,
    invoke_appium_server: options.invokeAppiumServer,
    host: options.host,
    port: options.port,
    appium_path: options.appiumPath,
    caps: options.caps,
    appium_lib: options.appiumLib,
  };
}

/** Private converter for AppledocOptions
 * @param  options - Source object as provided by consumer
 */
function convertAppledocOptions(options: AppledocOptions) {
  return {
    input: options.input,
    output: options.output,
    templates: options.templates,
    docset_install_path: options.docsetInstallPath,
    include: options.include,
    ignore: options.ignore,
    exclude_output: options.excludeOutput,
    index_desc: options.indexDesc,
    project_name: options.projectName,
    project_version: options.projectVersion,
    project_company: options.projectCompany,
    company_id: options.companyId,
    create_html: options.createHtml,
    create_docset: options.createDocset,
    install_docset: options.installDocset,
    publish_docset: options.publishDocset,
    no_create_docset: options.noCreateDocset,
    html_anchors: options.htmlAnchors,
    clean_output: options.cleanOutput,
    docset_bundle_id: options.docsetBundleId,
    docset_bundle_name: options.docsetBundleName,
    docset_desc: options.docsetDesc,
    docset_copyright: options.docsetCopyright,
    docset_feed_name: options.docsetFeedName,
    docset_feed_url: options.docsetFeedUrl,
    docset_feed_formats: options.docsetFeedFormats,
    docset_package_url: options.docsetPackageUrl,
    docset_fallback_url: options.docsetFallbackUrl,
    docset_publisher_id: options.docsetPublisherId,
    docset_publisher_name: options.docsetPublisherName,
    docset_min_xcode_version: options.docsetMinXcodeVersion,
    docset_platform_family: options.docsetPlatformFamily,
    docset_cert_issuer: options.docsetCertIssuer,
    docset_cert_signer: options.docsetCertSigner,
    docset_bundle_filename: options.docsetBundleFilename,
    docset_atom_filename: options.docsetAtomFilename,
    docset_xml_filename: options.docsetXmlFilename,
    docset_package_filename: options.docsetPackageFilename,
    options: options.options,
    crossref_format: options.crossrefFormat,
    exit_threshold: options.exitThreshold,
    docs_section_title: options.docsSectionTitle,
    warnings: options.warnings,
    logformat: options.logformat,
    verbose: options.verbose,
  };
}

/** Private converter for AppstoreOptions
 * @param  options - Source object as provided by consumer
 */
function convertAppstoreOptions(options: AppstoreOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    app_version: options.appVersion,
    ipa: options.ipa,
    pkg: options.pkg,
    build_number: options.buildNumber,
    platform: options.platform,
    edit_live: options.editLive,
    use_live_version: options.useLiveVersion,
    metadata_path: options.metadataPath,
    screenshots_path: options.screenshotsPath,
    skip_binary_upload: options.skipBinaryUpload,
    skip_screenshots: options.skipScreenshots,
    skip_metadata: options.skipMetadata,
    skip_app_version_update: options.skipAppVersionUpdate,
    force: options.force,
    overwrite_screenshots: options.overwriteScreenshots,
    submit_for_review: options.submitForReview,
    reject_if_possible: options.rejectIfPossible,
    automatic_release: options.automaticRelease,
    auto_release_date: options.autoReleaseDate,
    phased_release: options.phasedRelease,
    reset_ratings: options.resetRatings,
    price_tier: options.priceTier,
    app_rating_config_path: options.appRatingConfigPath,
    submission_information: options.submissionInformation,
    team_id: options.teamId,
    team_name: options.teamName,
    dev_portal_team_id: options.devPortalTeamId,
    dev_portal_team_name: options.devPortalTeamName,
    itc_provider: options.itcProvider,
    run_precheck_before_submit: options.runPrecheckBeforeSubmit,
    precheck_default_rule_level: options.precheckDefaultRuleLevel,
    individual_metadata_items: options.individualMetadataItems,
    app_icon: options.appIcon,
    apple_watch_app_icon: options.appleWatchAppIcon,
    copyright: options.copyright,
    primary_category: options.primaryCategory,
    secondary_category: options.secondaryCategory,
    primary_first_sub_category: options.primaryFirstSubCategory,
    primary_second_sub_category: options.primarySecondSubCategory,
    secondary_first_sub_category: options.secondaryFirstSubCategory,
    secondary_second_sub_category: options.secondarySecondSubCategory,
    trade_representative_contact_information:
      options.tradeRepresentativeContactInformation,
    app_review_information: options.appReviewInformation,
    app_review_attachment_file: options.appReviewAttachmentFile,
    description: options.description,
    name: options.name,
    subtitle: options.subtitle,
    keywords: options.keywords,
    promotional_text: options.promotionalText,
    release_notes: options.releaseNotes,
    privacy_url: options.privacyUrl,
    apple_tv_privacy_policy: options.appleTvPrivacyPolicy,
    support_url: options.supportUrl,
    marketing_url: options.marketingUrl,
    languages: options.languages,
    ignore_language_directory_validation:
      options.ignoreLanguageDirectoryValidation,
    precheck_include_in_app_purchases: options.precheckIncludeInAppPurchases,
    app: options.app,
  };
}

/** Private converter for ApteligentOptions
 * @param  options - Source object as provided by consumer
 */
function convertApteligentOptions(options: ApteligentOptions) {
  return {
    dsym: options.dsym,
    app_id: options.appId,
    api_key: options.apiKey,
  };
}

/** Private converter for ArtifactoryOptions
 * @param  options - Source object as provided by consumer
 */
function convertArtifactoryOptions(options: ArtifactoryOptions) {
  return {
    file: options.file,
    repo: options.repo,
    repo_path: options.repoPath,
    endpoint: options.endpoint,
    username: options.username,
    password: options.password,
    properties: options.properties,
    ssl_pem_file: options.sslPemFile,
    ssl_verify: options.sslVerify,
    proxy_username: options.proxyUsername,
    proxy_password: options.proxyPassword,
    proxy_address: options.proxyAddress,
    proxy_port: options.proxyPort,
    read_timeout: options.readTimeout,
  };
}

/** Private converter for AutomaticCodeSigningOptions
 * @param  options - Source object as provided by consumer
 */
function convertAutomaticCodeSigningOptions(
  options: AutomaticCodeSigningOptions
) {
  return {
    path: options.path,
    use_automatic_signing: options.useAutomaticSigning,
    team_id: options.teamId,
    targets: options.targets,
    code_sign_identity: options.codeSignIdentity,
    profile_name: options.profileName,
    profile_uuid: options.profileUuid,
    bundle_identifier: options.bundleIdentifier,
  };
}

/** Private converter for BackupFileOptions
 * @param  options - Source object as provided by consumer
 */
function convertBackupFileOptions(options: BackupFileOptions) {
  return {
    path: options.path,
  };
}

/** Private converter for BackupXcarchiveOptions
 * @param  options - Source object as provided by consumer
 */
function convertBackupXcarchiveOptions(options: BackupXcarchiveOptions) {
  return {
    xcarchive: options.xcarchive,
    destination: options.destination,
    zip: options.zip,
    zip_filename: options.zipFilename,
    versioned: options.versioned,
  };
}

/** Private converter for BadgeOptions
 * @param  options - Source object as provided by consumer
 */
function convertBadgeOptions(options: BadgeOptions) {
  return {
    dark: options.dark,
    custom: options.custom,
    no_badge: options.noBadge,
    shield: options.shield,
    alpha: options.alpha,
    path: options.path,
    shield_io_timeout: options.shieldIoTimeout,
    glob: options.glob,
    alpha_channel: options.alphaChannel,
    shield_gravity: options.shieldGravity,
    shield_no_resize: options.shieldNoResize,
  };
}

/** Private converter for BuildAndUploadToAppetizeOptions
 * @param  options - Source object as provided by consumer
 */
function convertBuildAndUploadToAppetizeOptions(
  options: BuildAndUploadToAppetizeOptions
) {
  return {
    xcodebuild: options.xcodebuild,
    scheme: options.scheme,
    api_token: options.apiToken,
    public_key: options.publicKey,
    note: options.note,
  };
}

/** Private converter for BuildAndroidAppOptions
 * @param  options - Source object as provided by consumer
 */
function convertBuildAndroidAppOptions(options: BuildAndroidAppOptions) {
  return {
    task: options.task,
    flavor: options.flavor,
    build_type: options.buildType,
    tasks: options.tasks,
    flags: options.flags,
    project_dir: options.projectDir,
    gradle_path: options.gradlePath,
    properties: options.properties,
    system_properties: options.systemProperties,
    serial: options.serial,
    print_command: options.printCommand,
    print_command_output: options.printCommandOutput,
  };
}

/** Private converter for BuildAppOptions
 * @param  options - Source object as provided by consumer
 */
function convertBuildAppOptions(options: BuildAppOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    scheme: options.scheme,
    clean: options.clean,
    output_directory: options.outputDirectory,
    output_name: options.outputName,
    configuration: options.configuration,
    silent: options.silent,
    codesigning_identity: options.codesigningIdentity,
    skip_package_ipa: options.skipPackageIpa,
    skip_package_pkg: options.skipPackagePkg,
    include_symbols: options.includeSymbols,
    include_bitcode: options.includeBitcode,
    export_method: options.exportMethod,
    export_options: options.exportOptions,
    export_xcargs: options.exportXcargs,
    skip_build_archive: options.skipBuildArchive,
    skip_archive: options.skipArchive,
    skip_codesigning: options.skipCodesigning,
    catalyst_platform: options.catalystPlatform,
    installer_cert_name: options.installerCertName,
    build_path: options.buildPath,
    archive_path: options.archivePath,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
    result_bundle_path: options.resultBundlePath,
    buildlog_path: options.buildlogPath,
    sdk: options.sdk,
    toolchain: options.toolchain,
    destination: options.destination,
    export_team_id: options.exportTeamId,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    suppress_xcode_output: options.suppressXcodeOutput,
    disable_xcpretty: options.disableXcpretty,
    xcpretty_test_format: options.xcprettyTestFormat,
    xcpretty_formatter: options.xcprettyFormatter,
    xcpretty_report_junit: options.xcprettyReportJunit,
    xcpretty_report_html: options.xcprettyReportHtml,
    xcpretty_report_json: options.xcprettyReportJson,
    analyze_build_time: options.analyzeBuildTime,
    xcpretty_utf: options.xcprettyUtf,
    skip_profile_detection: options.skipProfileDetection,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
  };
}

/** Private converter for BuildIosAppOptions
 * @param  options - Source object as provided by consumer
 */
function convertBuildIosAppOptions(options: BuildIosAppOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    scheme: options.scheme,
    clean: options.clean,
    output_directory: options.outputDirectory,
    output_name: options.outputName,
    configuration: options.configuration,
    silent: options.silent,
    codesigning_identity: options.codesigningIdentity,
    skip_package_ipa: options.skipPackageIpa,
    include_symbols: options.includeSymbols,
    include_bitcode: options.includeBitcode,
    export_method: options.exportMethod,
    export_options: options.exportOptions,
    export_xcargs: options.exportXcargs,
    skip_build_archive: options.skipBuildArchive,
    skip_archive: options.skipArchive,
    skip_codesigning: options.skipCodesigning,
    build_path: options.buildPath,
    archive_path: options.archivePath,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
    result_bundle_path: options.resultBundlePath,
    buildlog_path: options.buildlogPath,
    sdk: options.sdk,
    toolchain: options.toolchain,
    destination: options.destination,
    export_team_id: options.exportTeamId,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    suppress_xcode_output: options.suppressXcodeOutput,
    disable_xcpretty: options.disableXcpretty,
    xcpretty_test_format: options.xcprettyTestFormat,
    xcpretty_formatter: options.xcprettyFormatter,
    xcpretty_report_junit: options.xcprettyReportJunit,
    xcpretty_report_html: options.xcprettyReportHtml,
    xcpretty_report_json: options.xcprettyReportJson,
    analyze_build_time: options.analyzeBuildTime,
    xcpretty_utf: options.xcprettyUtf,
    skip_profile_detection: options.skipProfileDetection,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
  };
}

/** Private converter for BuildMacAppOptions
 * @param  options - Source object as provided by consumer
 */
function convertBuildMacAppOptions(options: BuildMacAppOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    scheme: options.scheme,
    clean: options.clean,
    output_directory: options.outputDirectory,
    output_name: options.outputName,
    configuration: options.configuration,
    silent: options.silent,
    codesigning_identity: options.codesigningIdentity,
    skip_package_pkg: options.skipPackagePkg,
    include_symbols: options.includeSymbols,
    include_bitcode: options.includeBitcode,
    export_method: options.exportMethod,
    export_options: options.exportOptions,
    export_xcargs: options.exportXcargs,
    skip_build_archive: options.skipBuildArchive,
    skip_archive: options.skipArchive,
    skip_codesigning: options.skipCodesigning,
    installer_cert_name: options.installerCertName,
    build_path: options.buildPath,
    archive_path: options.archivePath,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
    result_bundle_path: options.resultBundlePath,
    buildlog_path: options.buildlogPath,
    sdk: options.sdk,
    toolchain: options.toolchain,
    destination: options.destination,
    export_team_id: options.exportTeamId,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    suppress_xcode_output: options.suppressXcodeOutput,
    disable_xcpretty: options.disableXcpretty,
    xcpretty_test_format: options.xcprettyTestFormat,
    xcpretty_formatter: options.xcprettyFormatter,
    xcpretty_report_junit: options.xcprettyReportJunit,
    xcpretty_report_html: options.xcprettyReportHtml,
    xcpretty_report_json: options.xcprettyReportJson,
    analyze_build_time: options.analyzeBuildTime,
    xcpretty_utf: options.xcprettyUtf,
    skip_profile_detection: options.skipProfileDetection,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
  };
}

/** Private converter for BundleInstallOptions
 * @param  options - Source object as provided by consumer
 */
function convertBundleInstallOptions(options: BundleInstallOptions) {
  return {
    binstubs: options.binstubs,
    clean: options.clean,
    full_index: options.fullIndex,
    gemfile: options.gemfile,
    jobs: options.jobs,
    local: options.local,
    deployment: options.deployment,
    no_cache: options.noCache,
    no_prune: options.noPrune,
    path: options.path,
    system: options.system,
    quiet: options.quiet,
    retry: options.retry,
    shebang: options.shebang,
    standalone: options.standalone,
    trust_policy: options.trustPolicy,
    without: options.without,
    with: options.with,
  };
}

/** Private converter for CaptureAndroidScreenshotsOptions
 * @param  options - Source object as provided by consumer
 */
function convertCaptureAndroidScreenshotsOptions(
  options: CaptureAndroidScreenshotsOptions
) {
  return {
    android_home: options.androidHome,
    build_tools_version: options.buildToolsVersion,
    locales: options.locales,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    output_directory: options.outputDirectory,
    skip_open_summary: options.skipOpenSummary,
    app_package_name: options.appPackageName,
    tests_package_name: options.testsPackageName,
    use_tests_in_packages: options.useTestsInPackages,
    use_tests_in_classes: options.useTestsInClasses,
    launch_arguments: options.launchArguments,
    test_instrumentation_runner: options.testInstrumentationRunner,
    ending_locale: options.endingLocale,
    use_adb_root: options.useAdbRoot,
    app_apk_path: options.appApkPath,
    tests_apk_path: options.testsApkPath,
    specific_device: options.specificDevice,
    device_type: options.deviceType,
    exit_on_test_failure: options.exitOnTestFailure,
    reinstall_app: options.reinstallApp,
    use_timestamp_suffix: options.useTimestampSuffix,
    adb_host: options.adbHost,
  };
}

/** Private converter for CaptureIosScreenshotsOptions
 * @param  options - Source object as provided by consumer
 */
function convertCaptureIosScreenshotsOptions(
  options: CaptureIosScreenshotsOptions
) {
  return {
    workspace: options.workspace,
    project: options.project,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    devices: options.devices,
    languages: options.languages,
    launch_arguments: options.launchArguments,
    output_directory: options.outputDirectory,
    output_simulator_logs: options.outputSimulatorLogs,
    ios_version: options.iosVersion,
    skip_open_summary: options.skipOpenSummary,
    skip_helper_version_check: options.skipHelperVersionCheck,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    reinstall_app: options.reinstallApp,
    erase_simulator: options.eraseSimulator,
    localize_simulator: options.localizeSimulator,
    dark_mode: options.darkMode,
    app_identifier: options.appIdentifier,
    add_photos: options.addPhotos,
    add_videos: options.addVideos,
    buildlog_path: options.buildlogPath,
    clean: options.clean,
    test_without_building: options.testWithoutBuilding,
    configuration: options.configuration,
    xcpretty_args: options.xcprettyArgs,
    sdk: options.sdk,
    scheme: options.scheme,
    number_of_retries: options.numberOfRetries,
    stop_after_first_error: options.stopAfterFirstError,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
    test_target_name: options.testTargetName,
    namespace_log_files: options.namespaceLogFiles,
    concurrent_simulators: options.concurrentSimulators,
    disable_slide_to_type: options.disableSlideToType,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
    testplan: options.testplan,
  };
}

/** Private converter for CaptureScreenshotsOptions
 * @param  options - Source object as provided by consumer
 */
function convertCaptureScreenshotsOptions(options: CaptureScreenshotsOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    devices: options.devices,
    languages: options.languages,
    launch_arguments: options.launchArguments,
    output_directory: options.outputDirectory,
    output_simulator_logs: options.outputSimulatorLogs,
    ios_version: options.iosVersion,
    skip_open_summary: options.skipOpenSummary,
    skip_helper_version_check: options.skipHelperVersionCheck,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    reinstall_app: options.reinstallApp,
    erase_simulator: options.eraseSimulator,
    localize_simulator: options.localizeSimulator,
    dark_mode: options.darkMode,
    app_identifier: options.appIdentifier,
    add_photos: options.addPhotos,
    add_videos: options.addVideos,
    buildlog_path: options.buildlogPath,
    clean: options.clean,
    test_without_building: options.testWithoutBuilding,
    configuration: options.configuration,
    xcpretty_args: options.xcprettyArgs,
    sdk: options.sdk,
    scheme: options.scheme,
    number_of_retries: options.numberOfRetries,
    stop_after_first_error: options.stopAfterFirstError,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
    test_target_name: options.testTargetName,
    namespace_log_files: options.namespaceLogFiles,
    concurrent_simulators: options.concurrentSimulators,
    disable_slide_to_type: options.disableSlideToType,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
    testplan: options.testplan,
  };
}

/** Private converter for CarthageOptions
 * @param  options - Source object as provided by consumer
 */
function convertCarthageOptions(options: CarthageOptions) {
  return {
    command: options.command,
    dependencies: options.dependencies,
    use_ssh: options.useSsh,
    use_submodules: options.useSubmodules,
    use_binaries: options.useBinaries,
    no_checkout: options.noCheckout,
    no_build: options.noBuild,
    no_skip_current: options.noSkipCurrent,
    derived_data: options.derivedData,
    verbose: options.verbose,
    platform: options.platform,
    cache_builds: options.cacheBuilds,
    frameworks: options.frameworks,
    output: options.output,
    configuration: options.configuration,
    toolchain: options.toolchain,
    project_directory: options.projectDirectory,
    new_resolver: options.newResolver,
    log_path: options.logPath,
    executable: options.executable,
  };
}

/** Private converter for CertOptions
 * @param  options - Source object as provided by consumer
 */
function convertCertOptions(options: CertOptions) {
  return {
    development: options.development,
    type: options.type,
    force: options.force,
    generate_apple_certs: options.generateAppleCerts,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    filename: options.filename,
    output_path: options.outputPath,
    keychain_path: options.keychainPath,
    keychain_password: options.keychainPassword,
    platform: options.platform,
  };
}

/** Private converter for ChangelogFromGitCommitsOptions
 * @param  options - Source object as provided by consumer
 */
function convertChangelogFromGitCommitsOptions(
  options: ChangelogFromGitCommitsOptions
) {
  return {
    between: options.between,
    commits_count: options.commitsCount,
    path: options.path,
    pretty: options.pretty,
    date_format: options.dateFormat,
    ancestry_path: options.ancestryPath,
    tag_match_pattern: options.tagMatchPattern,
    match_lightweight_tag: options.matchLightweightTag,
    quiet: options.quiet,
    include_merges: options.includeMerges,
    merge_commit_filtering: options.mergeCommitFiltering,
  };
}

/** Private converter for ChatworkOptions
 * @param  options - Source object as provided by consumer
 */
function convertChatworkOptions(options: ChatworkOptions) {
  return {
    api_token: options.apiToken,
    message: options.message,
    roomid: options.roomid,
    success: options.success,
  };
}

/** Private converter for CheckAppStoreMetadataOptions
 * @param  options - Source object as provided by consumer
 */
function convertCheckAppStoreMetadataOptions(
  options: CheckAppStoreMetadataOptions
) {
  return {
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    default_rule_level: options.defaultRuleLevel,
    include_in_app_purchases: options.includeInAppPurchases,
    negative_apple_sentiment: options.negativeAppleSentiment,
    placeholder_text: options.placeholderText,
    other_platforms: options.otherPlatforms,
    future_functionality: options.futureFunctionality,
    test_words: options.testWords,
    curse_words: options.curseWords,
    free_stuff_in_iap: options.freeStuffInIap,
    custom_text: options.customText,
    copyright_date: options.copyrightDate,
    unreachable_urls: options.unreachableUrls,
  };
}

/** Private converter for CleanBuildArtifactsOptions
 * @param  options - Source object as provided by consumer
 */
function convertCleanBuildArtifactsOptions(
  options: CleanBuildArtifactsOptions
) {
  return {
    exclude_pattern: options.excludePattern,
  };
}

/** Private converter for CleanCocoapodsCacheOptions
 * @param  options - Source object as provided by consumer
 */
function convertCleanCocoapodsCacheOptions(
  options: CleanCocoapodsCacheOptions
) {
  return {
    name: options.name,
  };
}

/** Private converter for ClearDerivedDataOptions
 * @param  options - Source object as provided by consumer
 */
function convertClearDerivedDataOptions(options: ClearDerivedDataOptions) {
  return {
    derived_data_path: options.derivedDataPath,
  };
}

/** Private converter for ClipboardOptions
 * @param  options - Source object as provided by consumer
 */
function convertClipboardOptions(options: ClipboardOptions) {
  return {
    value: options.value,
  };
}

/** Private converter for ClocOptions
 * @param  options - Source object as provided by consumer
 */
function convertClocOptions(options: ClocOptions) {
  return {
    binary_path: options.binaryPath,
    exclude_dir: options.excludeDir,
    output_directory: options.outputDirectory,
    source_directory: options.sourceDirectory,
    xml: options.xml,
  };
}

/** Private converter for CocoapodsOptions
 * @param  options - Source object as provided by consumer
 */
function convertCocoapodsOptions(options: CocoapodsOptions) {
  return {
    repo_update: options.repoUpdate,
    clean_install: options.cleanInstall,
    silent: options.silent,
    verbose: options.verbose,
    ansi: options.ansi,
    use_bundle_exec: options.useBundleExec,
    podfile: options.podfile,
    error_callback: options.errorCallback,
    try_repo_update_on_error: options.tryRepoUpdateOnError,
    deployment: options.deployment,
    clean: options.clean,
    integrate: options.integrate,
  };
}

/** Private converter for CommitGithubFileOptions
 * @param  options - Source object as provided by consumer
 */
function convertCommitGithubFileOptions(options: CommitGithubFileOptions) {
  return {
    repository_name: options.repositoryName,
    server_url: options.serverUrl,
    api_token: options.apiToken,
    branch: options.branch,
    path: options.path,
    message: options.message,
    secure: options.secure,
  };
}

/** Private converter for CommitVersionBumpOptions
 * @param  options - Source object as provided by consumer
 */
function convertCommitVersionBumpOptions(options: CommitVersionBumpOptions) {
  return {
    message: options.message,
    xcodeproj: options.xcodeproj,
    force: options.force,
    settings: options.settings,
    ignore: options.ignore,
    include: options.include,
    no_verify: options.noVerify,
  };
}

/** Private converter for CopyArtifactsOptions
 * @param  options - Source object as provided by consumer
 */
function convertCopyArtifactsOptions(options: CopyArtifactsOptions) {
  return {
    keep_original: options.keepOriginal,
    target_path: options.targetPath,
    artifacts: options.artifacts,
    fail_on_missing: options.failOnMissing,
  };
}

/** Private converter for CrashlyticsOptions
 * @param  options - Source object as provided by consumer
 */
function convertCrashlyticsOptions(options: CrashlyticsOptions) {
  return {
    ipa_path: options.ipaPath,
    apk_path: options.apkPath,
    crashlytics_path: options.crashlyticsPath,
    api_token: options.apiToken,
    build_secret: options.buildSecret,
    notes_path: options.notesPath,
    notes: options.notes,
    groups: options.groups,
    emails: options.emails,
    notifications: options.notifications,
    debug: options.debug,
  };
}

/** Private converter for CreateAppOnManagedPlayStoreOptions
 * @param  options - Source object as provided by consumer
 */
function convertCreateAppOnManagedPlayStoreOptions(
  options: CreateAppOnManagedPlayStoreOptions
) {
  return {
    json_key: options.jsonKey,
    json_key_data: options.jsonKeyData,
    developer_account_id: options.developerAccountId,
    apk: options.apk,
    app_title: options.appTitle,
    language: options.language,
    root_url: options.rootUrl,
    timeout: options.timeout,
  };
}

/** Private converter for CreateAppOnlineOptions
 * @param  options - Source object as provided by consumer
 */
function convertCreateAppOnlineOptions(options: CreateAppOnlineOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    bundle_identifier_suffix: options.bundleIdentifierSuffix,
    app_name: options.appName,
    app_version: options.appVersion,
    sku: options.sku,
    platform: options.platform,
    platforms: options.platforms,
    language: options.language,
    company_name: options.companyName,
    skip_itc: options.skipItc,
    itc_users: options.itcUsers,
    enabled_features: options.enabledFeatures,
    enable_services: options.enableServices,
    skip_devcenter: options.skipDevcenter,
    team_id: options.teamId,
    team_name: options.teamName,
    itc_team_id: options.itcTeamId,
    itc_team_name: options.itcTeamName,
  };
}

/** Private converter for CreateKeychainOptions
 * @param  options - Source object as provided by consumer
 */
function convertCreateKeychainOptions(options: CreateKeychainOptions) {
  return {
    name: options.name,
    path: options.path,
    password: options.password,
    default_keychain: options.defaultKeychain,
    unlock: options.unlock,
    timeout: options.timeout,
    lock_when_sleeps: options.lockWhenSleeps,
    lock_after_timeout: options.lockAfterTimeout,
    add_to_search_list: options.addToSearchList,
    require_create: options.requireCreate,
  };
}

/** Private converter for CreatePullRequestOptions
 * @param  options - Source object as provided by consumer
 */
function convertCreatePullRequestOptions(options: CreatePullRequestOptions) {
  return {
    api_token: options.apiToken,
    repo: options.repo,
    title: options.title,
    body: options.body,
    draft: options.draft,
    labels: options.labels,
    milestone: options.milestone,
    head: options.head,
    base: options.base,
    api_url: options.apiUrl,
    assignees: options.assignees,
    reviewers: options.reviewers,
    team_reviewers: options.teamReviewers,
  };
}

/** Private converter for DangerOptions
 * @param  options - Source object as provided by consumer
 */
function convertDangerOptions(options: DangerOptions) {
  return {
    use_bundle_exec: options.useBundleExec,
    verbose: options.verbose,
    danger_id: options.dangerId,
    dangerfile: options.dangerfile,
    github_api_token: options.githubApiToken,
    fail_on_errors: options.failOnErrors,
    new_comment: options.newComment,
    remove_previous_comments: options.removePreviousComments,
    base: options.base,
    head: options.head,
    pr: options.pr,
  };
}

/** Private converter for DebugOptions
 * @param  options - Source object as provided by consumer
 */
function convertDebugOptions(options: DebugOptions) {
  return {};
}

/** Private converter for DefaultPlatformOptions
 * @param  options - Source object as provided by consumer
 */
function convertDefaultPlatformOptions(options: DefaultPlatformOptions) {
  return {};
}

/** Private converter for DeleteKeychainOptions
 * @param  options - Source object as provided by consumer
 */
function convertDeleteKeychainOptions(options: DeleteKeychainOptions) {
  return {
    name: options.name,
    keychain_path: options.keychainPath,
  };
}

/** Private converter for DeliverOptions
 * @param  options - Source object as provided by consumer
 */
function convertDeliverOptions(options: DeliverOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    app_version: options.appVersion,
    ipa: options.ipa,
    pkg: options.pkg,
    build_number: options.buildNumber,
    platform: options.platform,
    edit_live: options.editLive,
    use_live_version: options.useLiveVersion,
    metadata_path: options.metadataPath,
    screenshots_path: options.screenshotsPath,
    skip_binary_upload: options.skipBinaryUpload,
    skip_screenshots: options.skipScreenshots,
    skip_metadata: options.skipMetadata,
    skip_app_version_update: options.skipAppVersionUpdate,
    force: options.force,
    overwrite_screenshots: options.overwriteScreenshots,
    submit_for_review: options.submitForReview,
    reject_if_possible: options.rejectIfPossible,
    automatic_release: options.automaticRelease,
    auto_release_date: options.autoReleaseDate,
    phased_release: options.phasedRelease,
    reset_ratings: options.resetRatings,
    price_tier: options.priceTier,
    app_rating_config_path: options.appRatingConfigPath,
    submission_information: options.submissionInformation,
    team_id: options.teamId,
    team_name: options.teamName,
    dev_portal_team_id: options.devPortalTeamId,
    dev_portal_team_name: options.devPortalTeamName,
    itc_provider: options.itcProvider,
    run_precheck_before_submit: options.runPrecheckBeforeSubmit,
    precheck_default_rule_level: options.precheckDefaultRuleLevel,
    individual_metadata_items: options.individualMetadataItems,
    app_icon: options.appIcon,
    apple_watch_app_icon: options.appleWatchAppIcon,
    copyright: options.copyright,
    primary_category: options.primaryCategory,
    secondary_category: options.secondaryCategory,
    primary_first_sub_category: options.primaryFirstSubCategory,
    primary_second_sub_category: options.primarySecondSubCategory,
    secondary_first_sub_category: options.secondaryFirstSubCategory,
    secondary_second_sub_category: options.secondarySecondSubCategory,
    trade_representative_contact_information:
      options.tradeRepresentativeContactInformation,
    app_review_information: options.appReviewInformation,
    app_review_attachment_file: options.appReviewAttachmentFile,
    description: options.description,
    name: options.name,
    subtitle: options.subtitle,
    keywords: options.keywords,
    promotional_text: options.promotionalText,
    release_notes: options.releaseNotes,
    privacy_url: options.privacyUrl,
    apple_tv_privacy_policy: options.appleTvPrivacyPolicy,
    support_url: options.supportUrl,
    marketing_url: options.marketingUrl,
    languages: options.languages,
    ignore_language_directory_validation:
      options.ignoreLanguageDirectoryValidation,
    precheck_include_in_app_purchases: options.precheckIncludeInAppPurchases,
    app: options.app,
  };
}

/** Private converter for DeploygateOptions
 * @param  options - Source object as provided by consumer
 */
function convertDeploygateOptions(options: DeploygateOptions) {
  return {
    api_token: options.apiToken,
    user: options.user,
    ipa: options.ipa,
    apk: options.apk,
    message: options.message,
    distribution_key: options.distributionKey,
    release_note: options.releaseNote,
    disable_notify: options.disableNotify,
    distribution_name: options.distributionName,
  };
}

/** Private converter for DotgpgEnvironmentOptions
 * @param  options - Source object as provided by consumer
 */
function convertDotgpgEnvironmentOptions(options: DotgpgEnvironmentOptions) {
  return {
    dotgpg_file: options.dotgpgFile,
  };
}

/** Private converter for DownloadOptions
 * @param  options - Source object as provided by consumer
 */
function convertDownloadOptions(options: DownloadOptions) {
  return {
    url: options.url,
  };
}

/** Private converter for DownloadDsymsOptions
 * @param  options - Source object as provided by consumer
 */
function convertDownloadDsymsOptions(options: DownloadDsymsOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    team_id: options.teamId,
    team_name: options.teamName,
    platform: options.platform,
    version: options.version,
    build_number: options.buildNumber,
    min_version: options.minVersion,
    output_directory: options.outputDirectory,
    wait_for_dsym_processing: options.waitForDsymProcessing,
    wait_timeout: options.waitTimeout,
  };
}

/** Private converter for DownloadFromPlayStoreOptions
 * @param  options - Source object as provided by consumer
 */
function convertDownloadFromPlayStoreOptions(
  options: DownloadFromPlayStoreOptions
) {
  return {
    package_name: options.packageName,
    version_name: options.versionName,
    track: options.track,
    metadata_path: options.metadataPath,
    key: options.key,
    issuer: options.issuer,
    json_key: options.jsonKey,
    json_key_data: options.jsonKeyData,
    root_url: options.rootUrl,
    timeout: options.timeout,
  };
}

/** Private converter for DsymZipOptions
 * @param  options - Source object as provided by consumer
 */
function convertDsymZipOptions(options: DsymZipOptions) {
  return {
    archive_path: options.archivePath,
    dsym_path: options.dsymPath,
    all: options.all,
  };
}

/** Private converter for EchoOptions
 * @param  options - Source object as provided by consumer
 */
function convertEchoOptions(options: EchoOptions) {
  return {
    message: options.message,
  };
}

/** Private converter for EnsureBundleExecOptions
 * @param  options - Source object as provided by consumer
 */
function convertEnsureBundleExecOptions(options: EnsureBundleExecOptions) {
  return {};
}

/** Private converter for EnsureEnvVarsOptions
 * @param  options - Source object as provided by consumer
 */
function convertEnsureEnvVarsOptions(options: EnsureEnvVarsOptions) {
  return {
    env_vars: options.envVars,
  };
}

/** Private converter for EnsureGitBranchOptions
 * @param  options - Source object as provided by consumer
 */
function convertEnsureGitBranchOptions(options: EnsureGitBranchOptions) {
  return {
    branch: options.branch,
  };
}

/** Private converter for EnsureGitStatusCleanOptions
 * @param  options - Source object as provided by consumer
 */
function convertEnsureGitStatusCleanOptions(
  options: EnsureGitStatusCleanOptions
) {
  return {
    show_uncommitted_changes: options.showUncommittedChanges,
    show_diff: options.showDiff,
  };
}

/** Private converter for EnsureNoDebugCodeOptions
 * @param  options - Source object as provided by consumer
 */
function convertEnsureNoDebugCodeOptions(options: EnsureNoDebugCodeOptions) {
  return {
    text: options.text,
    path: options.path,
    extension: options.extension,
    extensions: options.extensions,
    exclude: options.exclude,
    exclude_dirs: options.excludeDirs,
  };
}

/** Private converter for EnsureXcodeVersionOptions
 * @param  options - Source object as provided by consumer
 */
function convertEnsureXcodeVersionOptions(options: EnsureXcodeVersionOptions) {
  return {
    version: options.version,
    strict: options.strict,
  };
}

/** Private converter for EnvironmentVariableOptions
 * @param  options - Source object as provided by consumer
 */
function convertEnvironmentVariableOptions(
  options: EnvironmentVariableOptions
) {
  return {
    set: options.set,
    get: options.get,
    remove: options.remove,
  };
}

/** Private converter for ErbOptions
 * @param  options - Source object as provided by consumer
 */
function convertErbOptions(options: ErbOptions) {
  return {
    template: options.template,
    destination: options.destination,
    placeholders: options.placeholders,
  };
}

/** Private converter for FastlaneVersionOptions
 * @param  options - Source object as provided by consumer
 */
function convertFastlaneVersionOptions(options: FastlaneVersionOptions) {
  return {};
}

/** Private converter for FlockOptions
 * @param  options - Source object as provided by consumer
 */
function convertFlockOptions(options: FlockOptions) {
  return {
    message: options.message,
    token: options.token,
    base_url: options.baseUrl,
  };
}

/** Private converter for FrameScreenshotsOptions
 * @param  options - Source object as provided by consumer
 */
function convertFrameScreenshotsOptions(options: FrameScreenshotsOptions) {
  return {
    white: options.white,
    silver: options.silver,
    rose_gold: options.roseGold,
    gold: options.gold,
    force_device_type: options.forceDeviceType,
    use_legacy_iphone5s: options.useLegacyIphone5s,
    use_legacy_iphone6s: options.useLegacyIphone6s,
    use_legacy_iphone7: options.useLegacyIphone7,
    use_legacy_iphonex: options.useLegacyIphonex,
    use_legacy_iphonexr: options.useLegacyIphonexr,
    use_legacy_iphonexs: options.useLegacyIphonexs,
    use_legacy_iphonexsmax: options.useLegacyIphonexsmax,
    force_orientation_block: options.forceOrientationBlock,
    debug_mode: options.debugMode,
    resume: options.resume,
    use_platform: options.usePlatform,
    path: options.path,
  };
}

/** Private converter for FrameitOptions
 * @param  options - Source object as provided by consumer
 */
function convertFrameitOptions(options: FrameitOptions) {
  return {
    white: options.white,
    silver: options.silver,
    rose_gold: options.roseGold,
    gold: options.gold,
    force_device_type: options.forceDeviceType,
    use_legacy_iphone5s: options.useLegacyIphone5s,
    use_legacy_iphone6s: options.useLegacyIphone6s,
    use_legacy_iphone7: options.useLegacyIphone7,
    use_legacy_iphonex: options.useLegacyIphonex,
    use_legacy_iphonexr: options.useLegacyIphonexr,
    use_legacy_iphonexs: options.useLegacyIphonexs,
    use_legacy_iphonexsmax: options.useLegacyIphonexsmax,
    force_orientation_block: options.forceOrientationBlock,
    debug_mode: options.debugMode,
    resume: options.resume,
    use_platform: options.usePlatform,
    path: options.path,
  };
}

/** Private converter for GcovrOptions
 * @param  options - Source object as provided by consumer
 */
function convertGcovrOptions(options: GcovrOptions) {
  return {};
}

/** Private converter for GetBuildNumberOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetBuildNumberOptions(options: GetBuildNumberOptions) {
  return {
    xcodeproj: options.xcodeproj,
    hide_error_when_versioning_disabled:
      options.hideErrorWhenVersioningDisabled,
  };
}

/** Private converter for GetBuildNumberRepositoryOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetBuildNumberRepositoryOptions(
  options: GetBuildNumberRepositoryOptions
) {
  return {
    use_hg_revision_number: options.useHgRevisionNumber,
  };
}

/** Private converter for GetCertificatesOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetCertificatesOptions(options: GetCertificatesOptions) {
  return {
    development: options.development,
    type: options.type,
    force: options.force,
    generate_apple_certs: options.generateAppleCerts,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    filename: options.filename,
    output_path: options.outputPath,
    keychain_path: options.keychainPath,
    keychain_password: options.keychainPassword,
    platform: options.platform,
  };
}

/** Private converter for GetGithubReleaseOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetGithubReleaseOptions(options: GetGithubReleaseOptions) {
  return {
    url: options.url,
    server_url: options.serverUrl,
    version: options.version,
    api_token: options.apiToken,
  };
}

/** Private converter for GetInfoPlistValueOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetInfoPlistValueOptions(options: GetInfoPlistValueOptions) {
  return {
    key: options.key,
    path: options.path,
  };
}

/** Private converter for GetIpaInfoPlistValueOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetIpaInfoPlistValueOptions(
  options: GetIpaInfoPlistValueOptions
) {
  return {
    key: options.key,
    ipa: options.ipa,
  };
}

/** Private converter for GetManagedPlayStorePublishingRightsOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetManagedPlayStorePublishingRightsOptions(
  options: GetManagedPlayStorePublishingRightsOptions
) {
  return {
    json_key: options.jsonKey,
    json_key_data: options.jsonKeyData,
  };
}

/** Private converter for GetProvisioningProfileOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetProvisioningProfileOptions(
  options: GetProvisioningProfileOptions
) {
  return {
    adhoc: options.adhoc,
    developer_id: options.developerId,
    development: options.development,
    skip_install: options.skipInstall,
    force: options.force,
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    provisioning_name: options.provisioningName,
    ignore_profiles_with_different_name:
      options.ignoreProfilesWithDifferentName,
    output_path: options.outputPath,
    cert_id: options.certId,
    cert_owner_name: options.certOwnerName,
    filename: options.filename,
    skip_fetch_profiles: options.skipFetchProfiles,
    skip_certificate_verification: options.skipCertificateVerification,
    platform: options.platform,
    readonly: options.readonly,
    template_name: options.templateName,
  };
}

/** Private converter for GetPushCertificateOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetPushCertificateOptions(options: GetPushCertificateOptions) {
  return {
    development: options.development,
    website_push: options.websitePush,
    generate_p12: options.generateP12,
    active_days_limit: options.activeDaysLimit,
    force: options.force,
    save_private_key: options.savePrivateKey,
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    p12_password: options.p12Password,
    pem_name: options.pemName,
    output_path: options.outputPath,
    new_profile: options.newProfile,
  };
}

/** Private converter for GetVersionNumberOptions
 * @param  options - Source object as provided by consumer
 */
function convertGetVersionNumberOptions(options: GetVersionNumberOptions) {
  return {
    xcodeproj: options.xcodeproj,
    target: options.target,
    configuration: options.configuration,
  };
}

/** Private converter for GitAddOptions
 * @param  options - Source object as provided by consumer
 */
function convertGitAddOptions(options: GitAddOptions) {
  return {
    path: options.path,
    shell_escape: options.shellEscape,
    pathspec: options.pathspec,
  };
}

/** Private converter for GitBranchOptions
 * @param  options - Source object as provided by consumer
 */
function convertGitBranchOptions(options: GitBranchOptions) {
  return {};
}

/** Private converter for GitCommitOptions
 * @param  options - Source object as provided by consumer
 */
function convertGitCommitOptions(options: GitCommitOptions) {
  return {
    path: options.path,
    message: options.message,
    skip_git_hooks: options.skipGitHooks,
    allow_nothing_to_commit: options.allowNothingToCommit,
  };
}

/** Private converter for GitPullOptions
 * @param  options - Source object as provided by consumer
 */
function convertGitPullOptions(options: GitPullOptions) {
  return {
    only_tags: options.onlyTags,
  };
}

/** Private converter for GitSubmoduleUpdateOptions
 * @param  options - Source object as provided by consumer
 */
function convertGitSubmoduleUpdateOptions(options: GitSubmoduleUpdateOptions) {
  return {
    recursive: options.recursive,
    init: options.init,
  };
}

/** Private converter for GitTagExistsOptions
 * @param  options - Source object as provided by consumer
 */
function convertGitTagExistsOptions(options: GitTagExistsOptions) {
  return {
    tag: options.tag,
    remote: options.remote,
    remote_name: options.remoteName,
  };
}

/** Private converter for GithubApiOptions
 * @param  options - Source object as provided by consumer
 */
function convertGithubApiOptions(options: GithubApiOptions) {
  return {
    server_url: options.serverUrl,
    api_token: options.apiToken,
    http_method: options.httpMethod,
    body: options.body,
    raw_body: options.rawBody,
    path: options.path,
    url: options.url,
    error_handlers: options.errorHandlers,
    headers: options.headers,
    secure: options.secure,
  };
}

/** Private converter for GooglePlayTrackVersionCodesOptions
 * @param  options - Source object as provided by consumer
 */
function convertGooglePlayTrackVersionCodesOptions(
  options: GooglePlayTrackVersionCodesOptions
) {
  return {
    package_name: options.packageName,
    track: options.track,
    key: options.key,
    issuer: options.issuer,
    json_key: options.jsonKey,
    json_key_data: options.jsonKeyData,
    root_url: options.rootUrl,
    timeout: options.timeout,
  };
}

/** Private converter for GradleOptions
 * @param  options - Source object as provided by consumer
 */
function convertGradleOptions(options: GradleOptions) {
  return {
    task: options.task,
    flavor: options.flavor,
    build_type: options.buildType,
    tasks: options.tasks,
    flags: options.flags,
    project_dir: options.projectDir,
    gradle_path: options.gradlePath,
    properties: options.properties,
    system_properties: options.systemProperties,
    serial: options.serial,
    print_command: options.printCommand,
    print_command_output: options.printCommandOutput,
  };
}

/** Private converter for GymOptions
 * @param  options - Source object as provided by consumer
 */
function convertGymOptions(options: GymOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    scheme: options.scheme,
    clean: options.clean,
    output_directory: options.outputDirectory,
    output_name: options.outputName,
    configuration: options.configuration,
    silent: options.silent,
    codesigning_identity: options.codesigningIdentity,
    skip_package_ipa: options.skipPackageIpa,
    skip_package_pkg: options.skipPackagePkg,
    include_symbols: options.includeSymbols,
    include_bitcode: options.includeBitcode,
    export_method: options.exportMethod,
    export_options: options.exportOptions,
    export_xcargs: options.exportXcargs,
    skip_build_archive: options.skipBuildArchive,
    skip_archive: options.skipArchive,
    skip_codesigning: options.skipCodesigning,
    catalyst_platform: options.catalystPlatform,
    installer_cert_name: options.installerCertName,
    build_path: options.buildPath,
    archive_path: options.archivePath,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
    result_bundle_path: options.resultBundlePath,
    buildlog_path: options.buildlogPath,
    sdk: options.sdk,
    toolchain: options.toolchain,
    destination: options.destination,
    export_team_id: options.exportTeamId,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    suppress_xcode_output: options.suppressXcodeOutput,
    disable_xcpretty: options.disableXcpretty,
    xcpretty_test_format: options.xcprettyTestFormat,
    xcpretty_formatter: options.xcprettyFormatter,
    xcpretty_report_junit: options.xcprettyReportJunit,
    xcpretty_report_html: options.xcprettyReportHtml,
    xcpretty_report_json: options.xcprettyReportJson,
    analyze_build_time: options.analyzeBuildTime,
    xcpretty_utf: options.xcprettyUtf,
    skip_profile_detection: options.skipProfileDetection,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
  };
}

/** Private converter for HgAddTagOptions
 * @param  options - Source object as provided by consumer
 */
function convertHgAddTagOptions(options: HgAddTagOptions) {
  return {
    tag: options.tag,
  };
}

/** Private converter for HgCommitVersionBumpOptions
 * @param  options - Source object as provided by consumer
 */
function convertHgCommitVersionBumpOptions(
  options: HgCommitVersionBumpOptions
) {
  return {
    message: options.message,
    xcodeproj: options.xcodeproj,
    force: options.force,
    test_dirty_files: options.testDirtyFiles,
    test_expected_files: options.testExpectedFiles,
  };
}

/** Private converter for HgEnsureCleanStatusOptions
 * @param  options - Source object as provided by consumer
 */
function convertHgEnsureCleanStatusOptions(
  options: HgEnsureCleanStatusOptions
) {
  return {};
}

/** Private converter for HgPushOptions
 * @param  options - Source object as provided by consumer
 */
function convertHgPushOptions(options: HgPushOptions) {
  return {
    force: options.force,
    destination: options.destination,
  };
}

/** Private converter for HipchatOptions
 * @param  options - Source object as provided by consumer
 */
function convertHipchatOptions(options: HipchatOptions) {
  return {
    message: options.message,
    channel: options.channel,
    api_token: options.apiToken,
    custom_color: options.customColor,
    success: options.success,
    version: options.version,
    notify_room: options.notifyRoom,
    api_host: options.apiHost,
    message_format: options.messageFormat,
    include_html_header: options.includeHtmlHeader,
    from: options.from,
  };
}

/** Private converter for HockeyOptions
 * @param  options - Source object as provided by consumer
 */
function convertHockeyOptions(options: HockeyOptions) {
  return {
    apk: options.apk,
    api_token: options.apiToken,
    ipa: options.ipa,
    dsym: options.dsym,
    create_update: options.createUpdate,
    notes: options.notes,
    notify: options.notify,
    status: options.status,
    create_status: options.createStatus,
    notes_type: options.notesType,
    release_type: options.releaseType,
    mandatory: options.mandatory,
    teams: options.teams,
    users: options.users,
    tags: options.tags,
    bundle_short_version: options.bundleShortVersion,
    bundle_version: options.bundleVersion,
    public_identifier: options.publicIdentifier,
    commit_sha: options.commitSha,
    repository_url: options.repositoryUrl,
    build_server_url: options.buildServerUrl,
    upload_dsym_only: options.uploadDsymOnly,
    owner_id: options.ownerId,
    strategy: options.strategy,
    timeout: options.timeout,
    bypass_cdn: options.bypassCdn,
    dsa_signature: options.dsaSignature,
  };
}

/** Private converter for IftttOptions
 * @param  options - Source object as provided by consumer
 */
function convertIftttOptions(options: IftttOptions) {
  return {
    api_key: options.apiKey,
    event_name: options.eventName,
    value1: options.value1,
    value2: options.value2,
    value3: options.value3,
  };
}

/** Private converter for ImportOptions
 * @param  options - Source object as provided by consumer
 */
function convertImportOptions(options: ImportOptions) {
  return {};
}

/** Private converter for ImportCertificateOptions
 * @param  options - Source object as provided by consumer
 */
function convertImportCertificateOptions(options: ImportCertificateOptions) {
  return {
    certificate_path: options.certificatePath,
    certificate_password: options.certificatePassword,
    keychain_name: options.keychainName,
    keychain_path: options.keychainPath,
    keychain_password: options.keychainPassword,
    log_output: options.logOutput,
  };
}

/** Private converter for ImportFromGitOptions
 * @param  options - Source object as provided by consumer
 */
function convertImportFromGitOptions(options: ImportFromGitOptions) {
  return {
    url: options.url,
    branch: options.branch,
    dependencies: options.dependencies,
    path: options.path,
    version: options.version,
  };
}

/** Private converter for IncrementBuildNumberOptions
 * @param  options - Source object as provided by consumer
 */
function convertIncrementBuildNumberOptions(
  options: IncrementBuildNumberOptions
) {
  return {
    build_number: options.buildNumber,
    xcodeproj: options.xcodeproj,
  };
}

/** Private converter for IncrementVersionNumberOptions
 * @param  options - Source object as provided by consumer
 */
function convertIncrementVersionNumberOptions(
  options: IncrementVersionNumberOptions
) {
  return {
    bump_type: options.bumpType,
    version_number: options.versionNumber,
    xcodeproj: options.xcodeproj,
  };
}

/** Private converter for InstallOnDeviceOptions
 * @param  options - Source object as provided by consumer
 */
function convertInstallOnDeviceOptions(options: InstallOnDeviceOptions) {
  return {
    extra: options.extra,
    device_id: options.deviceId,
    skip_wifi: options.skipWifi,
    ipa: options.ipa,
  };
}

/** Private converter for InstallProvisioningProfileOptions
 * @param  options - Source object as provided by consumer
 */
function convertInstallProvisioningProfileOptions(
  options: InstallProvisioningProfileOptions
) {
  return {
    path: options.path,
  };
}

/** Private converter for InstallXcodePluginOptions
 * @param  options - Source object as provided by consumer
 */
function convertInstallXcodePluginOptions(options: InstallXcodePluginOptions) {
  return {
    url: options.url,
    github: options.github,
  };
}

/** Private converter for InstallrOptions
 * @param  options - Source object as provided by consumer
 */
function convertInstallrOptions(options: InstallrOptions) {
  return {
    api_token: options.apiToken,
    ipa: options.ipa,
    notes: options.notes,
    notify: options.notify,
    add: options.add,
  };
}

/** Private converter for IpaOptions
 * @param  options - Source object as provided by consumer
 */
function convertIpaOptions(options: IpaOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    configuration: options.configuration,
    scheme: options.scheme,
    clean: options.clean,
    archive: options.archive,
    destination: options.destination,
    embed: options.embed,
    identity: options.identity,
    sdk: options.sdk,
    ipa: options.ipa,
    xcconfig: options.xcconfig,
    xcargs: options.xcargs,
  };
}

/** Private converter for IsCiOptions
 * @param  options - Source object as provided by consumer
 */
function convertIsCiOptions(options: IsCiOptions) {
  return {};
}

/** Private converter for JazzyOptions
 * @param  options - Source object as provided by consumer
 */
function convertJazzyOptions(options: JazzyOptions) {
  return {
    config: options.config,
  };
}

/** Private converter for JiraOptions
 * @param  options - Source object as provided by consumer
 */
function convertJiraOptions(options: JiraOptions) {
  return {
    url: options.url,
    context_path: options.contextPath,
    username: options.username,
    password: options.password,
    ticket_id: options.ticketId,
    comment_text: options.commentText,
  };
}

/** Private converter for LaneContextOptions
 * @param  options - Source object as provided by consumer
 */
function convertLaneContextOptions(options: LaneContextOptions) {
  return {};
}

/** Private converter for LastGitCommitOptions
 * @param  options - Source object as provided by consumer
 */
function convertLastGitCommitOptions(options: LastGitCommitOptions) {
  return {};
}

/** Private converter for LastGitTagOptions
 * @param  options - Source object as provided by consumer
 */
function convertLastGitTagOptions(options: LastGitTagOptions) {
  return {
    pattern: options.pattern,
  };
}

/** Private converter for LatestTestflightBuildNumberOptions
 * @param  options - Source object as provided by consumer
 */
function convertLatestTestflightBuildNumberOptions(
  options: LatestTestflightBuildNumberOptions
) {
  return {
    live: options.live,
    app_identifier: options.appIdentifier,
    username: options.username,
    version: options.version,
    platform: options.platform,
    initial_build_number: options.initialBuildNumber,
    team_id: options.teamId,
    team_name: options.teamName,
  };
}

/** Private converter for LcovOptions
 * @param  options - Source object as provided by consumer
 */
function convertLcovOptions(options: LcovOptions) {
  return {
    project_name: options.projectName,
    scheme: options.scheme,
    arch: options.arch,
    output_dir: options.outputDir,
  };
}

/** Private converter for MailgunOptions
 * @param  options - Source object as provided by consumer
 */
function convertMailgunOptions(options: MailgunOptions) {
  return {
    mailgun_sandbox_domain: options.mailgunSandboxDomain,
    mailgun_sandbox_postmaster: options.mailgunSandboxPostmaster,
    mailgun_apikey: options.mailgunApikey,
    postmaster: options.postmaster,
    apikey: options.apikey,
    to: options.to,
    from: options.from,
    message: options.message,
    subject: options.subject,
    success: options.success,
    app_link: options.appLink,
    ci_build_link: options.ciBuildLink,
    template_path: options.templatePath,
    reply_to: options.replyTo,
    attachment: options.attachment,
    custom_placeholders: options.customPlaceholders,
  };
}

/** Private converter for MakeChangelogFromJenkinsOptions
 * @param  options - Source object as provided by consumer
 */
function convertMakeChangelogFromJenkinsOptions(
  options: MakeChangelogFromJenkinsOptions
) {
  return {
    fallback_changelog: options.fallbackChangelog,
    include_commit_body: options.includeCommitBody,
  };
}

/** Private converter for MatchOptions
 * @param  options - Source object as provided by consumer
 */
function convertMatchOptions(options: MatchOptions) {
  return {
    type: options.type,
    additional_cert_types: options.additionalCertTypes,
    readonly: options.readonly,
    generate_apple_certs: options.generateAppleCerts,
    skip_provisioning_profiles: options.skipProvisioningProfiles,
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    storage_mode: options.storageMode,
    git_url: options.gitUrl,
    git_branch: options.gitBranch,
    git_full_name: options.gitFullName,
    git_user_email: options.gitUserEmail,
    shallow_clone: options.shallowClone,
    clone_branch_directly: options.cloneBranchDirectly,
    git_basic_authorization: options.gitBasicAuthorization,
    git_bearer_authorization: options.gitBearerAuthorization,
    google_cloud_bucket_name: options.googleCloudBucketName,
    google_cloud_keys_file: options.googleCloudKeysFile,
    google_cloud_project_id: options.googleCloudProjectId,
    s3_region: options.s3Region,
    s3_access_key: options.s3AccessKey,
    s3_secret_access_key: options.s3SecretAccessKey,
    s3_bucket: options.s3Bucket,
    keychain_name: options.keychainName,
    keychain_password: options.keychainPassword,
    force: options.force,
    force_for_new_devices: options.forceForNewDevices,
    skip_confirmation: options.skipConfirmation,
    skip_docs: options.skipDocs,
    platform: options.platform,
    template_name: options.templateName,
    output_path: options.outputPath,
    verbose: options.verbose,
  };
}

/** Private converter for MinFastlaneVersionOptions
 * @param  options - Source object as provided by consumer
 */
function convertMinFastlaneVersionOptions(options: MinFastlaneVersionOptions) {
  return {};
}

/** Private converter for ModifyServicesOptions
 * @param  options - Source object as provided by consumer
 */
function convertModifyServicesOptions(options: ModifyServicesOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    services: options.services,
    team_id: options.teamId,
    team_name: options.teamName,
  };
}

/** Private converter for NexusUploadOptions
 * @param  options - Source object as provided by consumer
 */
function convertNexusUploadOptions(options: NexusUploadOptions) {
  return {
    file: options.file,
    repo_id: options.repoId,
    repo_group_id: options.repoGroupId,
    repo_project_name: options.repoProjectName,
    repo_project_version: options.repoProjectVersion,
    repo_classifier: options.repoClassifier,
    endpoint: options.endpoint,
    mount_path: options.mountPath,
    username: options.username,
    password: options.password,
    ssl_verify: options.sslVerify,
    nexus_version: options.nexusVersion,
    verbose: options.verbose,
    proxy_username: options.proxyUsername,
    proxy_password: options.proxyPassword,
    proxy_address: options.proxyAddress,
    proxy_port: options.proxyPort,
  };
}

/** Private converter for NotarizeOptions
 * @param  options - Source object as provided by consumer
 */
function convertNotarizeOptions(options: NotarizeOptions) {
  return {
    package: options.package,
    try_early_stapling: options.tryEarlyStapling,
    bundle_id: options.bundleId,
    username: options.username,
    asc_provider: options.ascProvider,
    print_log: options.printLog,
    verbose: options.verbose,
  };
}

/** Private converter for NotificationOptions
 * @param  options - Source object as provided by consumer
 */
function convertNotificationOptions(options: NotificationOptions) {
  return {
    title: options.title,
    subtitle: options.subtitle,
    message: options.message,
    sound: options.sound,
    activate: options.activate,
    app_icon: options.appIcon,
    content_image: options.contentImage,
    open: options.open,
    execute: options.execute,
  };
}

/** Private converter for NotifyOptions
 * @param  options - Source object as provided by consumer
 */
function convertNotifyOptions(options: NotifyOptions) {
  return {};
}

/** Private converter for NumberOfCommitsOptions
 * @param  options - Source object as provided by consumer
 */
function convertNumberOfCommitsOptions(options: NumberOfCommitsOptions) {
  return {
    all: options.all,
  };
}

/** Private converter for OclintOptions
 * @param  options - Source object as provided by consumer
 */
function convertOclintOptions(options: OclintOptions) {
  return {
    oclint_path: options.oclintPath,
    compile_commands: options.compileCommands,
    select_reqex: options.selectReqex,
    select_regex: options.selectRegex,
    exclude_regex: options.excludeRegex,
    report_type: options.reportType,
    report_path: options.reportPath,
    list_enabled_rules: options.listEnabledRules,
    rc: options.rc,
    thresholds: options.thresholds,
    enable_rules: options.enableRules,
    disable_rules: options.disableRules,
    max_priority_1: options.maxPriority1,
    max_priority_2: options.maxPriority2,
    max_priority_3: options.maxPriority3,
    enable_clang_static_analyzer: options.enableClangStaticAnalyzer,
    enable_global_analysis: options.enableGlobalAnalysis,
    allow_duplicated_violations: options.allowDuplicatedViolations,
    extra_arg: options.extraArg,
  };
}

/** Private converter for OnesignalOptions
 * @param  options - Source object as provided by consumer
 */
function convertOnesignalOptions(options: OnesignalOptions) {
  return {
    app_id: options.appId,
    auth_token: options.authToken,
    app_name: options.appName,
    android_token: options.androidToken,
    android_gcm_sender_id: options.androidGcmSenderId,
    apns_p12: options.apnsP12,
    apns_p12_password: options.apnsP12Password,
    apns_env: options.apnsEnv,
  };
}

/** Private converter for OptOutCrashReportingOptions
 * @param  options - Source object as provided by consumer
 */
function convertOptOutCrashReportingOptions(
  options: OptOutCrashReportingOptions
) {
  return {};
}

/** Private converter for OptOutUsageOptions
 * @param  options - Source object as provided by consumer
 */
function convertOptOutUsageOptions(options: OptOutUsageOptions) {
  return {};
}

/** Private converter for PemOptions
 * @param  options - Source object as provided by consumer
 */
function convertPemOptions(options: PemOptions) {
  return {
    development: options.development,
    website_push: options.websitePush,
    generate_p12: options.generateP12,
    active_days_limit: options.activeDaysLimit,
    force: options.force,
    save_private_key: options.savePrivateKey,
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    p12_password: options.p12Password,
    pem_name: options.pemName,
    output_path: options.outputPath,
    new_profile: options.newProfile,
  };
}

/** Private converter for PilotOptions
 * @param  options - Source object as provided by consumer
 */
function convertPilotOptions(options: PilotOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    app_platform: options.appPlatform,
    apple_id: options.appleId,
    ipa: options.ipa,
    demo_account_required: options.demoAccountRequired,
    beta_app_review_info: options.betaAppReviewInfo,
    localized_app_info: options.localizedAppInfo,
    beta_app_description: options.betaAppDescription,
    beta_app_feedback_email: options.betaAppFeedbackEmail,
    localized_build_info: options.localizedBuildInfo,
    changelog: options.changelog,
    skip_submission: options.skipSubmission,
    skip_waiting_for_build_processing: options.skipWaitingForBuildProcessing,
    update_build_info_on_upload: options.updateBuildInfoOnUpload,
    uses_non_exempt_encryption: options.usesNonExemptEncryption,
    distribute_external: options.distributeExternal,
    notify_external_testers: options.notifyExternalTesters,
    app_version: options.appVersion,
    build_number: options.buildNumber,
    first_name: options.firstName,
    last_name: options.lastName,
    email: options.email,
    testers_file_path: options.testersFilePath,
    groups: options.groups,
    team_id: options.teamId,
    team_name: options.teamName,
    dev_portal_team_id: options.devPortalTeamId,
    itc_provider: options.itcProvider,
    wait_processing_interval: options.waitProcessingInterval,
    wait_for_uploaded_build: options.waitForUploadedBuild,
    reject_build_waiting_for_review: options.rejectBuildWaitingForReview,
  };
}

/** Private converter for PodLibLintOptions
 * @param  options - Source object as provided by consumer
 */
function convertPodLibLintOptions(options: PodLibLintOptions) {
  return {
    use_bundle_exec: options.useBundleExec,
    podspec: options.podspec,
    verbose: options.verbose,
    allow_warnings: options.allowWarnings,
    sources: options.sources,
    subspec: options.subspec,
    include_podspecs: options.includePodspecs,
    external_podspecs: options.externalPodspecs,
    swift_version: options.swiftVersion,
    use_libraries: options.useLibraries,
    use_modular_headers: options.useModularHeaders,
    fail_fast: options.failFast,
    private: options.private,
    quick: options.quick,
    no_clean: options.noClean,
    no_subspecs: options.noSubspecs,
    platforms: options.platforms,
    skip_import_validation: options.skipImportValidation,
    skip_tests: options.skipTests,
    analyze: options.analyze,
  };
}

/** Private converter for PodPushOptions
 * @param  options - Source object as provided by consumer
 */
function convertPodPushOptions(options: PodPushOptions) {
  return {
    use_bundle_exec: options.useBundleExec,
    path: options.path,
    repo: options.repo,
    allow_warnings: options.allowWarnings,
    use_libraries: options.useLibraries,
    sources: options.sources,
    swift_version: options.swiftVersion,
    skip_import_validation: options.skipImportValidation,
    skip_tests: options.skipTests,
    verbose: options.verbose,
    use_modular_headers: options.useModularHeaders,
  };
}

/** Private converter for PodioItemOptions
 * @param  options - Source object as provided by consumer
 */
function convertPodioItemOptions(options: PodioItemOptions) {
  return {
    client_id: options.clientId,
    client_secret: options.clientSecret,
    app_id: options.appId,
    app_token: options.appToken,
    identifying_field: options.identifyingField,
    identifying_value: options.identifyingValue,
    other_fields: options.otherFields,
  };
}

/** Private converter for PrecheckOptions
 * @param  options - Source object as provided by consumer
 */
function convertPrecheckOptions(options: PrecheckOptions) {
  return {
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    default_rule_level: options.defaultRuleLevel,
    include_in_app_purchases: options.includeInAppPurchases,
    negative_apple_sentiment: options.negativeAppleSentiment,
    placeholder_text: options.placeholderText,
    other_platforms: options.otherPlatforms,
    future_functionality: options.futureFunctionality,
    test_words: options.testWords,
    curse_words: options.curseWords,
    free_stuff_in_iap: options.freeStuffInIap,
    custom_text: options.customText,
    copyright_date: options.copyrightDate,
    unreachable_urls: options.unreachableUrls,
  };
}

/** Private converter for PrintlnOptions
 * @param  options - Source object as provided by consumer
 */
function convertPrintlnOptions(options: PrintlnOptions) {
  return {
    message: options.message,
  };
}

/** Private converter for ProduceOptions
 * @param  options - Source object as provided by consumer
 */
function convertProduceOptions(options: ProduceOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    bundle_identifier_suffix: options.bundleIdentifierSuffix,
    app_name: options.appName,
    app_version: options.appVersion,
    sku: options.sku,
    platform: options.platform,
    platforms: options.platforms,
    language: options.language,
    company_name: options.companyName,
    skip_itc: options.skipItc,
    itc_users: options.itcUsers,
    enabled_features: options.enabledFeatures,
    enable_services: options.enableServices,
    skip_devcenter: options.skipDevcenter,
    team_id: options.teamId,
    team_name: options.teamName,
    itc_team_id: options.itcTeamId,
    itc_team_name: options.itcTeamName,
  };
}

/** Private converter for PromptOptions
 * @param  options - Source object as provided by consumer
 */
function convertPromptOptions(options: PromptOptions) {
  return {
    text: options.text,
    ci_input: options.ciInput,
    boolean: options.boolean,
    secure_text: options.secureText,
    multi_line_end_keyword: options.multiLineEndKeyword,
  };
}

/** Private converter for PushGitTagsOptions
 * @param  options - Source object as provided by consumer
 */
function convertPushGitTagsOptions(options: PushGitTagsOptions) {
  return {
    force: options.force,
    remote: options.remote,
    tag: options.tag,
  };
}

/** Private converter for PushToGitRemoteOptions
 * @param  options - Source object as provided by consumer
 */
function convertPushToGitRemoteOptions(options: PushToGitRemoteOptions) {
  return {
    local_branch: options.localBranch,
    remote_branch: options.remoteBranch,
    force: options.force,
    force_with_lease: options.forceWithLease,
    tags: options.tags,
    remote: options.remote,
    no_verify: options.noVerify,
    set_upstream: options.setUpstream,
  };
}

/** Private converter for PutsOptions
 * @param  options - Source object as provided by consumer
 */
function convertPutsOptions(options: PutsOptions) {
  return {
    message: options.message,
  };
}

/** Private converter for ReadPodspecOptions
 * @param  options - Source object as provided by consumer
 */
function convertReadPodspecOptions(options: ReadPodspecOptions) {
  return {
    path: options.path,
  };
}

/** Private converter for RecreateSchemesOptions
 * @param  options - Source object as provided by consumer
 */
function convertRecreateSchemesOptions(options: RecreateSchemesOptions) {
  return {
    project: options.project,
  };
}

/** Private converter for RegisterDeviceOptions
 * @param  options - Source object as provided by consumer
 */
function convertRegisterDeviceOptions(options: RegisterDeviceOptions) {
  return {
    name: options.name,
    udid: options.udid,
    team_id: options.teamId,
    team_name: options.teamName,
    username: options.username,
  };
}

/** Private converter for RegisterDevicesOptions
 * @param  options - Source object as provided by consumer
 */
function convertRegisterDevicesOptions(options: RegisterDevicesOptions) {
  return {
    devices: options.devices,
    devices_file: options.devicesFile,
    team_id: options.teamId,
    team_name: options.teamName,
    username: options.username,
    platform: options.platform,
  };
}

/** Private converter for ResetGitRepoOptions
 * @param  options - Source object as provided by consumer
 */
function convertResetGitRepoOptions(options: ResetGitRepoOptions) {
  return {
    files: options.files,
    force: options.force,
    skip_clean: options.skipClean,
    disregard_gitignore: options.disregardGitignore,
    exclude: options.exclude,
  };
}

/** Private converter for ResetSimulatorContentsOptions
 * @param  options - Source object as provided by consumer
 */
function convertResetSimulatorContentsOptions(
  options: ResetSimulatorContentsOptions
) {
  return {
    ios: options.ios,
    os_versions: options.osVersions,
  };
}

/** Private converter for ResignOptions
 * @param  options - Source object as provided by consumer
 */
function convertResignOptions(options: ResignOptions) {
  return {
    ipa: options.ipa,
    signing_identity: options.signingIdentity,
    entitlements: options.entitlements,
    provisioning_profile: options.provisioningProfile,
    version: options.version,
    display_name: options.displayName,
    short_version: options.shortVersion,
    bundle_version: options.bundleVersion,
    bundle_id: options.bundleId,
    use_app_entitlements: options.useAppEntitlements,
    keychain_path: options.keychainPath,
  };
}

/** Private converter for RestoreFileOptions
 * @param  options - Source object as provided by consumer
 */
function convertRestoreFileOptions(options: RestoreFileOptions) {
  return {
    path: options.path,
  };
}

/** Private converter for RocketOptions
 * @param  options - Source object as provided by consumer
 */
function convertRocketOptions(options: RocketOptions) {
  return {};
}

/** Private converter for RsyncOptions
 * @param  options - Source object as provided by consumer
 */
function convertRsyncOptions(options: RsyncOptions) {
  return {
    extra: options.extra,
    source: options.source,
    destination: options.destination,
  };
}

/** Private converter for RubyVersionOptions
 * @param  options - Source object as provided by consumer
 */
function convertRubyVersionOptions(options: RubyVersionOptions) {
  return {};
}

/** Private converter for RunTestsOptions
 * @param  options - Source object as provided by consumer
 */
function convertRunTestsOptions(options: RunTestsOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    scheme: options.scheme,
    device: options.device,
    devices: options.devices,
    skip_detect_devices: options.skipDetectDevices,
    force_quit_simulator: options.forceQuitSimulator,
    reset_simulator: options.resetSimulator,
    disable_slide_to_type: options.disableSlideToType,
    prelaunch_simulator: options.prelaunchSimulator,
    reinstall_app: options.reinstallApp,
    app_identifier: options.appIdentifier,
    only_testing: options.onlyTesting,
    skip_testing: options.skipTesting,
    testplan: options.testplan,
    xctestrun: options.xctestrun,
    toolchain: options.toolchain,
    clean: options.clean,
    code_coverage: options.codeCoverage,
    address_sanitizer: options.addressSanitizer,
    thread_sanitizer: options.threadSanitizer,
    open_report: options.openReport,
    output_directory: options.outputDirectory,
    output_style: options.outputStyle,
    output_types: options.outputTypes,
    output_files: options.outputFiles,
    buildlog_path: options.buildlogPath,
    include_simulator_logs: options.includeSimulatorLogs,
    suppress_xcode_output: options.suppressXcodeOutput,
    formatter: options.formatter,
    xcpretty_args: options.xcprettyArgs,
    derived_data_path: options.derivedDataPath,
    should_zip_build_products: options.shouldZipBuildProducts,
    result_bundle: options.resultBundle,
    use_clang_report_name: options.useClangReportName,
    concurrent_workers: options.concurrentWorkers,
    max_concurrent_simulators: options.maxConcurrentSimulators,
    disable_concurrent_testing: options.disableConcurrentTesting,
    skip_build: options.skipBuild,
    test_without_building: options.testWithoutBuilding,
    build_for_testing: options.buildForTesting,
    sdk: options.sdk,
    configuration: options.configuration,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    app_name: options.appName,
    deployment_target_version: options.deploymentTargetVersion,
    slack_url: options.slackUrl,
    slack_channel: options.slackChannel,
    slack_message: options.slackMessage,
    slack_use_webhook_configured_username_and_icon:
      options.slackUseWebhookConfiguredUsernameAndIcon,
    slack_username: options.slackUsername,
    slack_icon_url: options.slackIconUrl,
    skip_slack: options.skipSlack,
    slack_only_on_failure: options.slackOnlyOnFailure,
    destination: options.destination,
    custom_report_file_name: options.customReportFileName,
    xcodebuild_command: options.xcodebuildCommand,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
    fail_build: options.failBuild,
  };
}

/** Private converter for S3Options
 * @param  options - Source object as provided by consumer
 */
function convertS3Options(options: S3Options) {
  return {
    ipa: options.ipa,
    dsym: options.dsym,
    upload_metadata: options.uploadMetadata,
    plist_template_path: options.plistTemplatePath,
    plist_file_name: options.plistFileName,
    html_template_path: options.htmlTemplatePath,
    html_file_name: options.htmlFileName,
    version_template_path: options.versionTemplatePath,
    version_file_name: options.versionFileName,
    access_key: options.accessKey,
    secret_access_key: options.secretAccessKey,
    bucket: options.bucket,
    region: options.region,
    path: options.path,
    source: options.source,
    acl: options.acl,
  };
}

/** Private converter for SayOptions
 * @param  options - Source object as provided by consumer
 */
function convertSayOptions(options: SayOptions) {
  return {
    text: options.text,
    mute: options.mute,
  };
}

/** Private converter for ScanOptions
 * @param  options - Source object as provided by consumer
 */
function convertScanOptions(options: ScanOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    scheme: options.scheme,
    device: options.device,
    devices: options.devices,
    skip_detect_devices: options.skipDetectDevices,
    force_quit_simulator: options.forceQuitSimulator,
    reset_simulator: options.resetSimulator,
    disable_slide_to_type: options.disableSlideToType,
    prelaunch_simulator: options.prelaunchSimulator,
    reinstall_app: options.reinstallApp,
    app_identifier: options.appIdentifier,
    only_testing: options.onlyTesting,
    skip_testing: options.skipTesting,
    testplan: options.testplan,
    xctestrun: options.xctestrun,
    toolchain: options.toolchain,
    clean: options.clean,
    code_coverage: options.codeCoverage,
    address_sanitizer: options.addressSanitizer,
    thread_sanitizer: options.threadSanitizer,
    open_report: options.openReport,
    output_directory: options.outputDirectory,
    output_style: options.outputStyle,
    output_types: options.outputTypes,
    output_files: options.outputFiles,
    buildlog_path: options.buildlogPath,
    include_simulator_logs: options.includeSimulatorLogs,
    suppress_xcode_output: options.suppressXcodeOutput,
    formatter: options.formatter,
    xcpretty_args: options.xcprettyArgs,
    derived_data_path: options.derivedDataPath,
    should_zip_build_products: options.shouldZipBuildProducts,
    result_bundle: options.resultBundle,
    use_clang_report_name: options.useClangReportName,
    concurrent_workers: options.concurrentWorkers,
    max_concurrent_simulators: options.maxConcurrentSimulators,
    disable_concurrent_testing: options.disableConcurrentTesting,
    skip_build: options.skipBuild,
    test_without_building: options.testWithoutBuilding,
    build_for_testing: options.buildForTesting,
    sdk: options.sdk,
    configuration: options.configuration,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    app_name: options.appName,
    deployment_target_version: options.deploymentTargetVersion,
    slack_url: options.slackUrl,
    slack_channel: options.slackChannel,
    slack_message: options.slackMessage,
    slack_use_webhook_configured_username_and_icon:
      options.slackUseWebhookConfiguredUsernameAndIcon,
    slack_username: options.slackUsername,
    slack_icon_url: options.slackIconUrl,
    skip_slack: options.skipSlack,
    slack_only_on_failure: options.slackOnlyOnFailure,
    destination: options.destination,
    custom_report_file_name: options.customReportFileName,
    xcodebuild_command: options.xcodebuildCommand,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
    fail_build: options.failBuild,
  };
}

/** Private converter for ScpOptions
 * @param  options - Source object as provided by consumer
 */
function convertScpOptions(options: ScpOptions) {
  return {
    username: options.username,
    password: options.password,
    host: options.host,
    port: options.port,
    upload: options.upload,
    download: options.download,
  };
}

/** Private converter for ScreengrabOptions
 * @param  options - Source object as provided by consumer
 */
function convertScreengrabOptions(options: ScreengrabOptions) {
  return {
    android_home: options.androidHome,
    build_tools_version: options.buildToolsVersion,
    locales: options.locales,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    output_directory: options.outputDirectory,
    skip_open_summary: options.skipOpenSummary,
    app_package_name: options.appPackageName,
    tests_package_name: options.testsPackageName,
    use_tests_in_packages: options.useTestsInPackages,
    use_tests_in_classes: options.useTestsInClasses,
    launch_arguments: options.launchArguments,
    test_instrumentation_runner: options.testInstrumentationRunner,
    ending_locale: options.endingLocale,
    use_adb_root: options.useAdbRoot,
    app_apk_path: options.appApkPath,
    tests_apk_path: options.testsApkPath,
    specific_device: options.specificDevice,
    device_type: options.deviceType,
    exit_on_test_failure: options.exitOnTestFailure,
    reinstall_app: options.reinstallApp,
    use_timestamp_suffix: options.useTimestampSuffix,
    adb_host: options.adbHost,
  };
}

/** Private converter for SetBuildNumberRepositoryOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetBuildNumberRepositoryOptions(
  options: SetBuildNumberRepositoryOptions
) {
  return {
    use_hg_revision_number: options.useHgRevisionNumber,
    xcodeproj: options.xcodeproj,
  };
}

/** Private converter for SetChangelogOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetChangelogOptions(options: SetChangelogOptions) {
  return {
    app_identifier: options.appIdentifier,
    username: options.username,
    version: options.version,
    changelog: options.changelog,
    team_id: options.teamId,
    team_name: options.teamName,
    platform: options.platform,
  };
}

/** Private converter for SetGithubReleaseOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetGithubReleaseOptions(options: SetGithubReleaseOptions) {
  return {
    repository_name: options.repositoryName,
    server_url: options.serverUrl,
    api_token: options.apiToken,
    tag_name: options.tagName,
    name: options.name,
    commitish: options.commitish,
    description: options.description,
    is_draft: options.isDraft,
    is_prerelease: options.isPrerelease,
    upload_assets: options.uploadAssets,
  };
}

/** Private converter for SetInfoPlistValueOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetInfoPlistValueOptions(options: SetInfoPlistValueOptions) {
  return {
    key: options.key,
    subkey: options.subkey,
    value: options.value,
    path: options.path,
    output_file_name: options.outputFileName,
  };
}

/** Private converter for SetPodKeyOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetPodKeyOptions(options: SetPodKeyOptions) {
  return {
    use_bundle_exec: options.useBundleExec,
    key: options.key,
    value: options.value,
    project: options.project,
  };
}

/** Private converter for SetupCiOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetupCiOptions(options: SetupCiOptions) {
  return {
    force: options.force,
    provider: options.provider,
  };
}

/** Private converter for SetupCircleCiOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetupCircleCiOptions(options: SetupCircleCiOptions) {
  return {
    force: options.force,
  };
}

/** Private converter for SetupJenkinsOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetupJenkinsOptions(options: SetupJenkinsOptions) {
  return {
    force: options.force,
    unlock_keychain: options.unlockKeychain,
    add_keychain_to_search_list: options.addKeychainToSearchList,
    set_default_keychain: options.setDefaultKeychain,
    keychain_path: options.keychainPath,
    keychain_password: options.keychainPassword,
    set_code_signing_identity: options.setCodeSigningIdentity,
    code_signing_identity: options.codeSigningIdentity,
    output_directory: options.outputDirectory,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
  };
}

/** Private converter for SetupTravisOptions
 * @param  options - Source object as provided by consumer
 */
function convertSetupTravisOptions(options: SetupTravisOptions) {
  return {
    force: options.force,
  };
}

/** Private converter for ShOptions
 * @param  options - Source object as provided by consumer
 */
function convertShOptions(options: ShOptions) {
  return {
    command: options.command,
    log: options.log,
    error_callback: options.errorCallback,
  };
}

/** Private converter for SighOptions
 * @param  options - Source object as provided by consumer
 */
function convertSighOptions(options: SighOptions) {
  return {
    adhoc: options.adhoc,
    developer_id: options.developerId,
    development: options.development,
    skip_install: options.skipInstall,
    force: options.force,
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    provisioning_name: options.provisioningName,
    ignore_profiles_with_different_name:
      options.ignoreProfilesWithDifferentName,
    output_path: options.outputPath,
    cert_id: options.certId,
    cert_owner_name: options.certOwnerName,
    filename: options.filename,
    skip_fetch_profiles: options.skipFetchProfiles,
    skip_certificate_verification: options.skipCertificateVerification,
    platform: options.platform,
    readonly: options.readonly,
    template_name: options.templateName,
  };
}

/** Private converter for SkipDocsOptions
 * @param  options - Source object as provided by consumer
 */
function convertSkipDocsOptions(options: SkipDocsOptions) {
  return {};
}

/** Private converter for SlackOptions
 * @param  options - Source object as provided by consumer
 */
function convertSlackOptions(options: SlackOptions) {
  return {
    message: options.message,
    pretext: options.pretext,
    channel: options.channel,
    use_webhook_configured_username_and_icon:
      options.useWebhookConfiguredUsernameAndIcon,
    slack_url: options.slackUrl,
    username: options.username,
    icon_url: options.iconUrl,
    payload: options.payload,
    default_payloads: options.defaultPayloads,
    attachment_properties: options.attachmentProperties,
    success: options.success,
    fail_on_error: options.failOnError,
    link_names: options.linkNames,
  };
}

/** Private converter for SlatherOptions
 * @param  options - Source object as provided by consumer
 */
function convertSlatherOptions(options: SlatherOptions) {
  return {
    build_directory: options.buildDirectory,
    proj: options.proj,
    workspace: options.workspace,
    scheme: options.scheme,
    configuration: options.configuration,
    input_format: options.inputFormat,
    buildkite: options.buildkite,
    teamcity: options.teamcity,
    jenkins: options.jenkins,
    travis: options.travis,
    travis_pro: options.travisPro,
    circleci: options.circleci,
    coveralls: options.coveralls,
    simple_output: options.simpleOutput,
    gutter_json: options.gutterJson,
    cobertura_xml: options.coberturaXml,
    llvm_cov: options.llvmCov,
    html: options.html,
    show: options.show,
    source_directory: options.sourceDirectory,
    output_directory: options.outputDirectory,
    ignore: options.ignore,
    verbose: options.verbose,
    use_bundle_exec: options.useBundleExec,
    binary_basename: options.binaryBasename,
    binary_file: options.binaryFile,
    arch: options.arch,
    source_files: options.sourceFiles,
    decimals: options.decimals,
  };
}

/** Private converter for SnapshotOptions
 * @param  options - Source object as provided by consumer
 */
function convertSnapshotOptions(options: SnapshotOptions) {
  return {
    workspace: options.workspace,
    project: options.project,
    xcargs: options.xcargs,
    xcconfig: options.xcconfig,
    devices: options.devices,
    languages: options.languages,
    launch_arguments: options.launchArguments,
    output_directory: options.outputDirectory,
    output_simulator_logs: options.outputSimulatorLogs,
    ios_version: options.iosVersion,
    skip_open_summary: options.skipOpenSummary,
    skip_helper_version_check: options.skipHelperVersionCheck,
    clear_previous_screenshots: options.clearPreviousScreenshots,
    reinstall_app: options.reinstallApp,
    erase_simulator: options.eraseSimulator,
    localize_simulator: options.localizeSimulator,
    dark_mode: options.darkMode,
    app_identifier: options.appIdentifier,
    add_photos: options.addPhotos,
    add_videos: options.addVideos,
    buildlog_path: options.buildlogPath,
    clean: options.clean,
    test_without_building: options.testWithoutBuilding,
    configuration: options.configuration,
    xcpretty_args: options.xcprettyArgs,
    sdk: options.sdk,
    scheme: options.scheme,
    number_of_retries: options.numberOfRetries,
    stop_after_first_error: options.stopAfterFirstError,
    derived_data_path: options.derivedDataPath,
    result_bundle: options.resultBundle,
    test_target_name: options.testTargetName,
    namespace_log_files: options.namespaceLogFiles,
    concurrent_simulators: options.concurrentSimulators,
    disable_slide_to_type: options.disableSlideToType,
    cloned_source_packages_path: options.clonedSourcePackagesPath,
    testplan: options.testplan,
  };
}

/** Private converter for SonarOptions
 * @param  options - Source object as provided by consumer
 */
function convertSonarOptions(options: SonarOptions) {
  return {
    project_configuration_path: options.projectConfigurationPath,
    project_key: options.projectKey,
    project_name: options.projectName,
    project_version: options.projectVersion,
    sources_path: options.sourcesPath,
    project_language: options.projectLanguage,
    source_encoding: options.sourceEncoding,
    sonar_runner_args: options.sonarRunnerArgs,
    sonar_login: options.sonarLogin,
    sonar_url: options.sonarUrl,
    sonar_organization: options.sonarOrganization,
    branch_name: options.branchName,
    pull_request_branch: options.pullRequestBranch,
    pull_request_base: options.pullRequestBase,
    pull_request_key: options.pullRequestKey,
  };
}

/** Private converter for SpaceshipLogsOptions
 * @param  options - Source object as provided by consumer
 */
function convertSpaceshipLogsOptions(options: SpaceshipLogsOptions) {
  return {
    latest: options.latest,
    print_contents: options.printContents,
    print_paths: options.printPaths,
    copy_to_path: options.copyToPath,
    copy_to_clipboard: options.copyToClipboard,
  };
}

/** Private converter for SplunkmintOptions
 * @param  options - Source object as provided by consumer
 */
function convertSplunkmintOptions(options: SplunkmintOptions) {
  return {
    dsym: options.dsym,
    api_key: options.apiKey,
    api_token: options.apiToken,
    verbose: options.verbose,
    upload_progress: options.uploadProgress,
    proxy_username: options.proxyUsername,
    proxy_password: options.proxyPassword,
    proxy_address: options.proxyAddress,
    proxy_port: options.proxyPort,
  };
}

/** Private converter for SpmOptions
 * @param  options - Source object as provided by consumer
 */
function convertSpmOptions(options: SpmOptions) {
  return {
    command: options.command,
    build_path: options.buildPath,
    package_path: options.packagePath,
    xcconfig: options.xcconfig,
    configuration: options.configuration,
    xcpretty_output: options.xcprettyOutput,
    xcpretty_args: options.xcprettyArgs,
    verbose: options.verbose,
  };
}

/** Private converter for SshOptions
 * @param  options - Source object as provided by consumer
 */
function convertSshOptions(options: SshOptions) {
  return {
    username: options.username,
    password: options.password,
    host: options.host,
    port: options.port,
    commands: options.commands,
    log: options.log,
  };
}

/** Private converter for SupplyOptions
 * @param  options - Source object as provided by consumer
 */
function convertSupplyOptions(options: SupplyOptions) {
  return {
    package_name: options.packageName,
    version_name: options.versionName,
    version_code: options.versionCode,
    release_status: options.releaseStatus,
    track: options.track,
    rollout: options.rollout,
    metadata_path: options.metadataPath,
    key: options.key,
    issuer: options.issuer,
    json_key: options.jsonKey,
    json_key_data: options.jsonKeyData,
    apk: options.apk,
    apk_paths: options.apkPaths,
    aab: options.aab,
    aab_paths: options.aabPaths,
    skip_upload_apk: options.skipUploadApk,
    skip_upload_aab: options.skipUploadAab,
    skip_upload_metadata: options.skipUploadMetadata,
    skip_upload_changelogs: options.skipUploadChangelogs,
    skip_upload_images: options.skipUploadImages,
    skip_upload_screenshots: options.skipUploadScreenshots,
    track_promote_to: options.trackPromoteTo,
    validate_only: options.validateOnly,
    mapping: options.mapping,
    mapping_paths: options.mappingPaths,
    root_url: options.rootUrl,
    check_superseded_tracks: options.checkSupersededTracks,
    timeout: options.timeout,
    deactivate_on_promote: options.deactivateOnPromote,
    version_codes_to_retain: options.versionCodesToRetain,
    obb_main_references_version: options.obbMainReferencesVersion,
    obb_main_file_size: options.obbMainFileSize,
    obb_patch_references_version: options.obbPatchReferencesVersion,
    obb_patch_file_size: options.obbPatchFileSize,
  };
}

/** Private converter for SwiftlintOptions
 * @param  options - Source object as provided by consumer
 */
function convertSwiftlintOptions(options: SwiftlintOptions) {
  return {
    mode: options.mode,
    path: options.path,
    output_file: options.outputFile,
    config_file: options.configFile,
    strict: options.strict,
    files: options.files,
    ignore_exit_status: options.ignoreExitStatus,
    raise_if_swiftlint_error: options.raiseIfSwiftlintError,
    reporter: options.reporter,
    quiet: options.quiet,
    executable: options.executable,
    format: options.format,
    no_cache: options.noCache,
    compiler_log_path: options.compilerLogPath,
  };
}

/** Private converter for SyncCodeSigningOptions
 * @param  options - Source object as provided by consumer
 */
function convertSyncCodeSigningOptions(options: SyncCodeSigningOptions) {
  return {
    type: options.type,
    additional_cert_types: options.additionalCertTypes,
    readonly: options.readonly,
    generate_apple_certs: options.generateAppleCerts,
    skip_provisioning_profiles: options.skipProvisioningProfiles,
    app_identifier: options.appIdentifier,
    username: options.username,
    team_id: options.teamId,
    team_name: options.teamName,
    storage_mode: options.storageMode,
    git_url: options.gitUrl,
    git_branch: options.gitBranch,
    git_full_name: options.gitFullName,
    git_user_email: options.gitUserEmail,
    shallow_clone: options.shallowClone,
    clone_branch_directly: options.cloneBranchDirectly,
    git_basic_authorization: options.gitBasicAuthorization,
    git_bearer_authorization: options.gitBearerAuthorization,
    google_cloud_bucket_name: options.googleCloudBucketName,
    google_cloud_keys_file: options.googleCloudKeysFile,
    google_cloud_project_id: options.googleCloudProjectId,
    s3_region: options.s3Region,
    s3_access_key: options.s3AccessKey,
    s3_secret_access_key: options.s3SecretAccessKey,
    s3_bucket: options.s3Bucket,
    keychain_name: options.keychainName,
    keychain_password: options.keychainPassword,
    force: options.force,
    force_for_new_devices: options.forceForNewDevices,
    skip_confirmation: options.skipConfirmation,
    skip_docs: options.skipDocs,
    platform: options.platform,
    template_name: options.templateName,
    output_path: options.outputPath,
    verbose: options.verbose,
  };
}

/** Private converter for TeamIdOptions
 * @param  options - Source object as provided by consumer
 */
function convertTeamIdOptions(options: TeamIdOptions) {
  return {};
}

/** Private converter for TeamNameOptions
 * @param  options - Source object as provided by consumer
 */
function convertTeamNameOptions(options: TeamNameOptions) {
  return {};
}

/** Private converter for TestfairyOptions
 * @param  options - Source object as provided by consumer
 */
function convertTestfairyOptions(options: TestfairyOptions) {
  return {
    api_key: options.apiKey,
    ipa: options.ipa,
    apk: options.apk,
    symbols_file: options.symbolsFile,
    upload_url: options.uploadUrl,
    testers_groups: options.testersGroups,
    metrics: options.metrics,
    comment: options.comment,
    auto_update: options.autoUpdate,
    notify: options.notify,
    options: options.options,
    custom: options.custom,
    timeout: options.timeout,
  };
}

/** Private converter for TestflightOptions
 * @param  options - Source object as provided by consumer
 */
function convertTestflightOptions(options: TestflightOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    app_platform: options.appPlatform,
    apple_id: options.appleId,
    ipa: options.ipa,
    demo_account_required: options.demoAccountRequired,
    beta_app_review_info: options.betaAppReviewInfo,
    localized_app_info: options.localizedAppInfo,
    beta_app_description: options.betaAppDescription,
    beta_app_feedback_email: options.betaAppFeedbackEmail,
    localized_build_info: options.localizedBuildInfo,
    changelog: options.changelog,
    skip_submission: options.skipSubmission,
    skip_waiting_for_build_processing: options.skipWaitingForBuildProcessing,
    update_build_info_on_upload: options.updateBuildInfoOnUpload,
    uses_non_exempt_encryption: options.usesNonExemptEncryption,
    distribute_external: options.distributeExternal,
    notify_external_testers: options.notifyExternalTesters,
    app_version: options.appVersion,
    build_number: options.buildNumber,
    first_name: options.firstName,
    last_name: options.lastName,
    email: options.email,
    testers_file_path: options.testersFilePath,
    groups: options.groups,
    team_id: options.teamId,
    team_name: options.teamName,
    dev_portal_team_id: options.devPortalTeamId,
    itc_provider: options.itcProvider,
    wait_processing_interval: options.waitProcessingInterval,
    wait_for_uploaded_build: options.waitForUploadedBuild,
    reject_build_waiting_for_review: options.rejectBuildWaitingForReview,
  };
}

/** Private converter for TryoutsOptions
 * @param  options - Source object as provided by consumer
 */
function convertTryoutsOptions(options: TryoutsOptions) {
  return {
    app_id: options.appId,
    api_token: options.apiToken,
    build_file: options.buildFile,
    notes: options.notes,
    notes_path: options.notesPath,
    notify: options.notify,
    status: options.status,
  };
}

/** Private converter for TwitterOptions
 * @param  options - Source object as provided by consumer
 */
function convertTwitterOptions(options: TwitterOptions) {
  return {
    consumer_key: options.consumerKey,
    consumer_secret: options.consumerSecret,
    access_token: options.accessToken,
    access_token_secret: options.accessTokenSecret,
    message: options.message,
  };
}

/** Private converter for TypetalkOptions
 * @param  options - Source object as provided by consumer
 */
function convertTypetalkOptions(options: TypetalkOptions) {
  return {};
}

/** Private converter for UnlockKeychainOptions
 * @param  options - Source object as provided by consumer
 */
function convertUnlockKeychainOptions(options: UnlockKeychainOptions) {
  return {
    path: options.path,
    password: options.password,
    add_to_search_list: options.addToSearchList,
    set_default: options.setDefault,
  };
}

/** Private converter for UpdateAppGroupIdentifiersOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateAppGroupIdentifiersOptions(
  options: UpdateAppGroupIdentifiersOptions
) {
  return {
    entitlements_file: options.entitlementsFile,
    app_group_identifiers: options.appGroupIdentifiers,
  };
}

/** Private converter for UpdateAppIdentifierOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateAppIdentifierOptions(
  options: UpdateAppIdentifierOptions
) {
  return {
    xcodeproj: options.xcodeproj,
    plist_path: options.plistPath,
    app_identifier: options.appIdentifier,
  };
}

/** Private converter for UpdateCodeSigningSettingsOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateCodeSigningSettingsOptions(
  options: UpdateCodeSigningSettingsOptions
) {
  return {
    path: options.path,
    use_automatic_signing: options.useAutomaticSigning,
    team_id: options.teamId,
    targets: options.targets,
    build_configurations: options.buildConfigurations,
    code_sign_identity: options.codeSignIdentity,
    profile_name: options.profileName,
    profile_uuid: options.profileUuid,
    bundle_identifier: options.bundleIdentifier,
  };
}

/** Private converter for UpdateFastlaneOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateFastlaneOptions(options: UpdateFastlaneOptions) {
  return {
    no_update: options.noUpdate,
    nightly: options.nightly,
  };
}

/** Private converter for UpdateIcloudContainerIdentifiersOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateIcloudContainerIdentifiersOptions(
  options: UpdateIcloudContainerIdentifiersOptions
) {
  return {
    entitlements_file: options.entitlementsFile,
    icloud_container_identifiers: options.icloudContainerIdentifiers,
  };
}

/** Private converter for UpdateInfoPlistOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateInfoPlistOptions(options: UpdateInfoPlistOptions) {
  return {
    xcodeproj: options.xcodeproj,
    plist_path: options.plistPath,
    scheme: options.scheme,
    app_identifier: options.appIdentifier,
    display_name: options.displayName,
    block: options.block,
  };
}

/** Private converter for UpdateKeychainAccessGroupsOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateKeychainAccessGroupsOptions(
  options: UpdateKeychainAccessGroupsOptions
) {
  return {
    entitlements_file: options.entitlementsFile,
    identifiers: options.identifiers,
  };
}

/** Private converter for UpdatePlistOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdatePlistOptions(options: UpdatePlistOptions) {
  return {
    plist_path: options.plistPath,
    block: options.block,
  };
}

/** Private converter for UpdateProjectCodeSigningOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateProjectCodeSigningOptions(
  options: UpdateProjectCodeSigningOptions
) {
  return {
    path: options.path,
    udid: options.udid,
    uuid: options.uuid,
  };
}

/** Private converter for UpdateProjectProvisioningOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateProjectProvisioningOptions(
  options: UpdateProjectProvisioningOptions
) {
  return {
    xcodeproj: options.xcodeproj,
    profile: options.profile,
    target_filter: options.targetFilter,
    build_configuration_filter: options.buildConfigurationFilter,
    build_configuration: options.buildConfiguration,
    certificate: options.certificate,
    code_signing_identity: options.codeSigningIdentity,
  };
}

/** Private converter for UpdateProjectTeamOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateProjectTeamOptions(options: UpdateProjectTeamOptions) {
  return {
    path: options.path,
    targets: options.targets,
    teamid: options.teamid,
  };
}

/** Private converter for UpdateUrbanAirshipConfigurationOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateUrbanAirshipConfigurationOptions(
  options: UpdateUrbanAirshipConfigurationOptions
) {
  return {
    plist_path: options.plistPath,
    development_app_key: options.developmentAppKey,
    development_app_secret: options.developmentAppSecret,
    production_app_key: options.productionAppKey,
    production_app_secret: options.productionAppSecret,
    detect_provisioning_mode: options.detectProvisioningMode,
  };
}

/** Private converter for UpdateUrlSchemesOptions
 * @param  options - Source object as provided by consumer
 */
function convertUpdateUrlSchemesOptions(options: UpdateUrlSchemesOptions) {
  return {
    path: options.path,
    url_schemes: options.urlSchemes,
    update_url_schemes: options.updateUrlSchemes,
  };
}

/** Private converter for UploadSymbolsToCrashlyticsOptions
 * @param  options - Source object as provided by consumer
 */
function convertUploadSymbolsToCrashlyticsOptions(
  options: UploadSymbolsToCrashlyticsOptions
) {
  return {
    dsym_path: options.dsymPath,
    dsym_paths: options.dsymPaths,
    api_token: options.apiToken,
    gsp_path: options.gspPath,
    app_id: options.appId,
    binary_path: options.binaryPath,
    platform: options.platform,
    dsym_worker_threads: options.dsymWorkerThreads,
  };
}

/** Private converter for UploadSymbolsToSentryOptions
 * @param  options - Source object as provided by consumer
 */
function convertUploadSymbolsToSentryOptions(
  options: UploadSymbolsToSentryOptions
) {
  return {
    api_host: options.apiHost,
    api_key: options.apiKey,
    auth_token: options.authToken,
    org_slug: options.orgSlug,
    project_slug: options.projectSlug,
    dsym_path: options.dsymPath,
    dsym_paths: options.dsymPaths,
  };
}

/** Private converter for UploadToAppStoreOptions
 * @param  options - Source object as provided by consumer
 */
function convertUploadToAppStoreOptions(options: UploadToAppStoreOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    app_version: options.appVersion,
    ipa: options.ipa,
    pkg: options.pkg,
    build_number: options.buildNumber,
    platform: options.platform,
    edit_live: options.editLive,
    use_live_version: options.useLiveVersion,
    metadata_path: options.metadataPath,
    screenshots_path: options.screenshotsPath,
    skip_binary_upload: options.skipBinaryUpload,
    skip_screenshots: options.skipScreenshots,
    skip_metadata: options.skipMetadata,
    skip_app_version_update: options.skipAppVersionUpdate,
    force: options.force,
    overwrite_screenshots: options.overwriteScreenshots,
    submit_for_review: options.submitForReview,
    reject_if_possible: options.rejectIfPossible,
    automatic_release: options.automaticRelease,
    auto_release_date: options.autoReleaseDate,
    phased_release: options.phasedRelease,
    reset_ratings: options.resetRatings,
    price_tier: options.priceTier,
    app_rating_config_path: options.appRatingConfigPath,
    submission_information: options.submissionInformation,
    team_id: options.teamId,
    team_name: options.teamName,
    dev_portal_team_id: options.devPortalTeamId,
    dev_portal_team_name: options.devPortalTeamName,
    itc_provider: options.itcProvider,
    run_precheck_before_submit: options.runPrecheckBeforeSubmit,
    precheck_default_rule_level: options.precheckDefaultRuleLevel,
    individual_metadata_items: options.individualMetadataItems,
    app_icon: options.appIcon,
    apple_watch_app_icon: options.appleWatchAppIcon,
    copyright: options.copyright,
    primary_category: options.primaryCategory,
    secondary_category: options.secondaryCategory,
    primary_first_sub_category: options.primaryFirstSubCategory,
    primary_second_sub_category: options.primarySecondSubCategory,
    secondary_first_sub_category: options.secondaryFirstSubCategory,
    secondary_second_sub_category: options.secondarySecondSubCategory,
    trade_representative_contact_information:
      options.tradeRepresentativeContactInformation,
    app_review_information: options.appReviewInformation,
    app_review_attachment_file: options.appReviewAttachmentFile,
    description: options.description,
    name: options.name,
    subtitle: options.subtitle,
    keywords: options.keywords,
    promotional_text: options.promotionalText,
    release_notes: options.releaseNotes,
    privacy_url: options.privacyUrl,
    apple_tv_privacy_policy: options.appleTvPrivacyPolicy,
    support_url: options.supportUrl,
    marketing_url: options.marketingUrl,
    languages: options.languages,
    ignore_language_directory_validation:
      options.ignoreLanguageDirectoryValidation,
    precheck_include_in_app_purchases: options.precheckIncludeInAppPurchases,
    app: options.app,
  };
}

/** Private converter for UploadToPlayStoreOptions
 * @param  options - Source object as provided by consumer
 */
function convertUploadToPlayStoreOptions(options: UploadToPlayStoreOptions) {
  return {
    package_name: options.packageName,
    version_name: options.versionName,
    version_code: options.versionCode,
    release_status: options.releaseStatus,
    track: options.track,
    rollout: options.rollout,
    metadata_path: options.metadataPath,
    key: options.key,
    issuer: options.issuer,
    json_key: options.jsonKey,
    json_key_data: options.jsonKeyData,
    apk: options.apk,
    apk_paths: options.apkPaths,
    aab: options.aab,
    aab_paths: options.aabPaths,
    skip_upload_apk: options.skipUploadApk,
    skip_upload_aab: options.skipUploadAab,
    skip_upload_metadata: options.skipUploadMetadata,
    skip_upload_changelogs: options.skipUploadChangelogs,
    skip_upload_images: options.skipUploadImages,
    skip_upload_screenshots: options.skipUploadScreenshots,
    track_promote_to: options.trackPromoteTo,
    validate_only: options.validateOnly,
    mapping: options.mapping,
    mapping_paths: options.mappingPaths,
    root_url: options.rootUrl,
    check_superseded_tracks: options.checkSupersededTracks,
    timeout: options.timeout,
    deactivate_on_promote: options.deactivateOnPromote,
    version_codes_to_retain: options.versionCodesToRetain,
    obb_main_references_version: options.obbMainReferencesVersion,
    obb_main_file_size: options.obbMainFileSize,
    obb_patch_references_version: options.obbPatchReferencesVersion,
    obb_patch_file_size: options.obbPatchFileSize,
  };
}

/** Private converter for UploadToPlayStoreInternalAppSharingOptions
 * @param  options - Source object as provided by consumer
 */
function convertUploadToPlayStoreInternalAppSharingOptions(
  options: UploadToPlayStoreInternalAppSharingOptions
) {
  return {
    package_name: options.packageName,
    json_key: options.jsonKey,
    json_key_data: options.jsonKeyData,
    apk: options.apk,
    apk_paths: options.apkPaths,
    aab: options.aab,
    aab_paths: options.aabPaths,
    root_url: options.rootUrl,
    timeout: options.timeout,
  };
}

/** Private converter for UploadToTestflightOptions
 * @param  options - Source object as provided by consumer
 */
function convertUploadToTestflightOptions(options: UploadToTestflightOptions) {
  return {
    username: options.username,
    app_identifier: options.appIdentifier,
    app_platform: options.appPlatform,
    apple_id: options.appleId,
    ipa: options.ipa,
    demo_account_required: options.demoAccountRequired,
    beta_app_review_info: options.betaAppReviewInfo,
    localized_app_info: options.localizedAppInfo,
    beta_app_description: options.betaAppDescription,
    beta_app_feedback_email: options.betaAppFeedbackEmail,
    localized_build_info: options.localizedBuildInfo,
    changelog: options.changelog,
    skip_submission: options.skipSubmission,
    skip_waiting_for_build_processing: options.skipWaitingForBuildProcessing,
    update_build_info_on_upload: options.updateBuildInfoOnUpload,
    uses_non_exempt_encryption: options.usesNonExemptEncryption,
    distribute_external: options.distributeExternal,
    notify_external_testers: options.notifyExternalTesters,
    app_version: options.appVersion,
    build_number: options.buildNumber,
    first_name: options.firstName,
    last_name: options.lastName,
    email: options.email,
    testers_file_path: options.testersFilePath,
    groups: options.groups,
    team_id: options.teamId,
    team_name: options.teamName,
    dev_portal_team_id: options.devPortalTeamId,
    itc_provider: options.itcProvider,
    wait_processing_interval: options.waitProcessingInterval,
    wait_for_uploaded_build: options.waitForUploadedBuild,
    reject_build_waiting_for_review: options.rejectBuildWaitingForReview,
  };
}

/** Private converter for ValidatePlayStoreJsonKeyOptions
 * @param  options - Source object as provided by consumer
 */
function convertValidatePlayStoreJsonKeyOptions(
  options: ValidatePlayStoreJsonKeyOptions
) {
  return {
    json_key: options.jsonKey,
    json_key_data: options.jsonKeyData,
    root_url: options.rootUrl,
    timeout: options.timeout,
  };
}

/** Private converter for VerifyBuildOptions
 * @param  options - Source object as provided by consumer
 */
function convertVerifyBuildOptions(options: VerifyBuildOptions) {
  return {
    provisioning_type: options.provisioningType,
    provisioning_uuid: options.provisioningUuid,
    team_identifier: options.teamIdentifier,
    team_name: options.teamName,
    app_name: options.appName,
    bundle_identifier: options.bundleIdentifier,
    ipa_path: options.ipaPath,
    build_path: options.buildPath,
  };
}

/** Private converter for VerifyPodKeysOptions
 * @param  options - Source object as provided by consumer
 */
function convertVerifyPodKeysOptions(options: VerifyPodKeysOptions) {
  return {};
}

/** Private converter for VerifyXcodeOptions
 * @param  options - Source object as provided by consumer
 */
function convertVerifyXcodeOptions(options: VerifyXcodeOptions) {
  return {
    xcode_path: options.xcodePath,
  };
}

/** Private converter for VersionBumpPodspecOptions
 * @param  options - Source object as provided by consumer
 */
function convertVersionBumpPodspecOptions(options: VersionBumpPodspecOptions) {
  return {
    path: options.path,
    bump_type: options.bumpType,
    version_number: options.versionNumber,
    version_appendix: options.versionAppendix,
    require_variable_prefix: options.requireVariablePrefix,
  };
}

/** Private converter for VersionGetPodspecOptions
 * @param  options - Source object as provided by consumer
 */
function convertVersionGetPodspecOptions(options: VersionGetPodspecOptions) {
  return {
    path: options.path,
    require_variable_prefix: options.requireVariablePrefix,
  };
}

/** Private converter for XcarchiveOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcarchiveOptions(options: XcarchiveOptions) {
  return {};
}

/** Private converter for XcbuildOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcbuildOptions(options: XcbuildOptions) {
  return {};
}

/** Private converter for XccleanOptions
 * @param  options - Source object as provided by consumer
 */
function convertXccleanOptions(options: XccleanOptions) {
  return {};
}

/** Private converter for XcexportOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcexportOptions(options: XcexportOptions) {
  return {};
}

/** Private converter for XcodeInstallOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcodeInstallOptions(options: XcodeInstallOptions) {
  return {
    version: options.version,
    username: options.username,
    team_id: options.teamId,
  };
}

/** Private converter for XcodeSelectOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcodeSelectOptions(options: XcodeSelectOptions) {
  return {};
}

/** Private converter for XcodeServerGetAssetsOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcodeServerGetAssetsOptions(
  options: XcodeServerGetAssetsOptions
) {
  return {
    host: options.host,
    bot_name: options.botName,
    integration_number: options.integrationNumber,
    username: options.username,
    password: options.password,
    target_folder: options.targetFolder,
    keep_all_assets: options.keepAllAssets,
    trust_self_signed_certs: options.trustSelfSignedCerts,
  };
}

/** Private converter for XcodebuildOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcodebuildOptions(options: XcodebuildOptions) {
  return {};
}

/** Private converter for XcovOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcovOptions(options: XcovOptions) {
  return {};
}

/** Private converter for XctestOptions
 * @param  options - Source object as provided by consumer
 */
function convertXctestOptions(options: XctestOptions) {
  return {};
}

/** Private converter for XctoolOptions
 * @param  options - Source object as provided by consumer
 */
function convertXctoolOptions(options: XctoolOptions) {
  return {};
}

/** Private converter for XcversionOptions
 * @param  options - Source object as provided by consumer
 */
function convertXcversionOptions(options: XcversionOptions) {
  return {
    version: options.version,
  };
}

/** Private converter for ZipOptions
 * @param  options - Source object as provided by consumer
 */
function convertZipOptions(options: ZipOptions) {
  return {
    path: options.path,
    output_path: options.outputPath,
    verbose: options.verbose,
    password: options.password,
    symlinks: options.symlinks,
  };
}
class Fastlane extends FastlaneBase {
  /** Run ADB Actions
   */
  async adb(options: AdbOptions): Promise<any> {
    const out = await this.doAction("adb", convertAdbOptions(options));
    return out;
  }
  /** Get an array of Connected android device serials
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
  /** This will add an annotated git tag to the current branch
   */
  async addGitTag(options: AddGitTagOptions): Promise<any> {
    const out = await this.doAction(
      "add_git_tag",
      convertAddGitTagOptions(options)
    );
    return out;
  }
  /** Returns the current build_number of either live or edit version
   */
  async appStoreBuildNumber(options: AppStoreBuildNumberOptions): Promise<any> {
    const out = await this.doAction(
      "app_store_build_number",
      convertAppStoreBuildNumberOptions(options)
    );
    return out;
  }
  /** Upload your app to [Appaloosa Store](https://www.appaloosa-store.com/)
   */
  async appaloosa(options: AppaloosaOptions): Promise<any> {
    const out = await this.doAction(
      "appaloosa",
      convertAppaloosaOptions(options)
    );
    return out;
  }
  /** Upload your app to [Appetize.io](https://appetize.io/) to stream it in browser
   */
  async appetize(options: AppetizeOptions): Promise<any> {
    const out = await this.doAction(
      "appetize",
      convertAppetizeOptions(options)
    );
    return out;
  }
  /** Generate an URL for appetize simulator
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
  /** Generate Apple-like source code documentation from the source code
   */
  async appledoc(options: AppledocOptions): Promise<any> {
    const out = await this.doAction(
      "appledoc",
      convertAppledocOptions(options)
    );
    return out;
  }
  /** Alias for the `upload_to_app_store` action
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
  /** This action uploads an artifact to artifactory
   */
  async artifactory(options: ArtifactoryOptions): Promise<any> {
    const out = await this.doAction(
      "artifactory",
      convertArtifactoryOptions(options)
    );
    return out;
  }
  /** Configures Xcode's Codesigning options
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
  /** Automatically add a badge to your app icon
   */
  async badge(options: BadgeOptions): Promise<any> {
    const out = await this.doAction("badge", convertBadgeOptions(options));
    return out;
  }
  /** Generate and upload an ipa file to appetize.io
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
  /** Alias for the `gradle` action
   */
  async buildAndroidApp(options: BuildAndroidAppOptions): Promise<any> {
    const out = await this.doAction(
      "build_android_app",
      convertBuildAndroidAppOptions(options)
    );
    return out;
  }
  /** Easily build and sign your app (via _gym_)
   */
  async buildApp(options: BuildAppOptions): Promise<any> {
    const out = await this.doAction(
      "build_app",
      convertBuildAppOptions(options)
    );
    return out;
  }
  /** Alias for the `build_app` action but only for iOS
   */
  async buildIosApp(options: BuildIosAppOptions): Promise<any> {
    const out = await this.doAction(
      "build_ios_app",
      convertBuildIosAppOptions(options)
    );
    return out;
  }
  /** Alias for the `build_app` action but only for macOS
   */
  async buildMacApp(options: BuildMacAppOptions): Promise<any> {
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
  /** Alias for the `capture_ios_screenshots` action
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
  /** Alias for the `get_certificates` action
   */
  async cert(options: CertOptions): Promise<any> {
    const out = await this.doAction("cert", convertCertOptions(options));
    return out;
  }
  /** Collect git commit messages into a changelog
   */
  async changelogFromGitCommits(
    options: ChangelogFromGitCommitsOptions
  ): Promise<any> {
    const out = await this.doAction(
      "changelog_from_git_commits",
      convertChangelogFromGitCommitsOptions(options)
    );
    return out;
  }
  /** Send a success/error message to [ChatWork](https://go.chatwork.com/)
   */
  async chatwork(options: ChatworkOptions): Promise<any> {
    const out = await this.doAction(
      "chatwork",
      convertChatworkOptions(options)
    );
    return out;
  }
  /** Check your app's metadata before you submit your app to review (via _precheck_)
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
  /** Deletes files created as result of running gym, cert, sigh or download_dsyms
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
  /** Deletes the Xcode Derived Data
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
  /** Generates a Code Count that can be read by Jenkins (xml format)
   */
  async cloc(options: ClocOptions): Promise<any> {
    const out = await this.doAction("cloc", convertClocOptions(options));
    return out;
  }
  /** Runs `pod install` for the project
   */
  async cocoapods(options: CocoapodsOptions): Promise<any> {
    const out = await this.doAction(
      "cocoapods",
      convertCocoapodsOptions(options)
    );
    return out;
  }
  /** This will commit a file directly on GitHub via the API
   */
  async commitGithubFile(options: CommitGithubFileOptions): Promise<any> {
    const out = await this.doAction(
      "commit_github_file",
      convertCommitGithubFileOptions(options)
    );
    return out;
  }
  /** Creates a 'Version Bump' commit. Run after `increment_build_number`
   */
  async commitVersionBump(options: CommitVersionBumpOptions): Promise<any> {
    const out = await this.doAction(
      "commit_version_bump",
      convertCommitVersionBumpOptions(options)
    );
    return out;
  }
  /** Copy and save your build artifacts (useful when you use reset_git_repo)
   */
  async copyArtifacts(options: CopyArtifactsOptions): Promise<any> {
    const out = await this.doAction(
      "copy_artifacts",
      convertCopyArtifactsOptions(options)
    );
    return out;
  }
  /** Refer to [Firebase App Distribution](https://appdistro.page.link/fastlane-repo)
   */
  async crashlytics(options: CrashlyticsOptions): Promise<any> {
    const out = await this.doAction(
      "crashlytics",
      convertCrashlyticsOptions(options)
    );
    return out;
  }
  /** Create Managed Google Play Apps
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
  /** Creates the given application on iTC and the Dev Portal (via _produce_)
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
   */
  async createPullRequest(options: CreatePullRequestOptions): Promise<any> {
    const out = await this.doAction(
      "create_pull_request",
      convertCreatePullRequestOptions(options)
    );
    return out;
  }
  /** Runs `danger` for the project
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
  /** Delete keychains and remove them from the search list
   */
  async deleteKeychain(options: DeleteKeychainOptions): Promise<any> {
    const out = await this.doAction(
      "delete_keychain",
      convertDeleteKeychainOptions(options)
    );
    return out;
  }
  /** Alias for the `upload_to_app_store` action
   */
  async deliver(options: DeliverOptions): Promise<any> {
    const out = await this.doAction("deliver", convertDeliverOptions(options));
    return out;
  }
  /** Upload a new build to [DeployGate](https://deploygate.com/)
   */
  async deploygate(options: DeploygateOptions): Promise<any> {
    const out = await this.doAction(
      "deploygate",
      convertDeploygateOptions(options)
    );
    return out;
  }
  /** Reads in production secrets set in a dotgpg file and puts them in ENV
   */
  async dotgpgEnvironment(options: DotgpgEnvironmentOptions): Promise<any> {
    const out = await this.doAction(
      "dotgpg_environment",
      convertDotgpgEnvironmentOptions(options)
    );
    return out;
  }
  /** Download a file from a remote server (e.g. JSON file)
   */
  async download(options: DownloadOptions): Promise<any> {
    const out = await this.doAction(
      "download",
      convertDownloadOptions(options)
    );
    return out;
  }
  /** Download dSYM files from App Store Connect for Bitcode apps
   */
  async downloadDsyms(options: DownloadDsymsOptions): Promise<any> {
    const out = await this.doAction(
      "download_dsyms",
      convertDownloadDsymsOptions(options)
    );
    return out;
  }
  /** Download metadata and binaries from Google Play (via _supply_)
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
  /** Creates a zipped dSYM in the project root from the .xcarchive
   */
  async dsymZip(options: DsymZipOptions): Promise<any> {
    const out = await this.doAction("dsym_zip", convertDsymZipOptions(options));
    return out;
  }
  /** Alias for the `puts` action
   */
  async echo(options: EchoOptions): Promise<any> {
    const out = await this.doAction("echo", convertEchoOptions(options));
    return out;
  }
  /** Raises an exception if not using `bundle exec` to run fastlane
   */
  async ensureBundleExec(options: EnsureBundleExecOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_bundle_exec",
      convertEnsureBundleExecOptions(options)
    );
    return out;
  }
  /** Raises an exception if the specified env vars are not set
   */
  async ensureEnvVars(options: EnsureEnvVarsOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_env_vars",
      convertEnsureEnvVarsOptions(options)
    );
    return out;
  }
  /** Raises an exception if not on a specific git branch
   */
  async ensureGitBranch(options: EnsureGitBranchOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_git_branch",
      convertEnsureGitBranchOptions(options)
    );
    return out;
  }
  /** Raises an exception if there are uncommitted git changes
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
  /** Ensures the given text is nowhere in the code base
   */
  async ensureNoDebugCode(options: EnsureNoDebugCodeOptions): Promise<any> {
    const out = await this.doAction(
      "ensure_no_debug_code",
      convertEnsureNoDebugCodeOptions(options)
    );
    return out;
  }
  /** Ensure the right version of Xcode is used
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
  async environmentVariable(options: EnvironmentVariableOptions): Promise<any> {
    const out = await this.doAction(
      "environment_variable",
      convertEnvironmentVariableOptions(options)
    );
    return out;
  }
  /** Allows to Generate output files based on ERB templates
   */
  async erb(options: ErbOptions): Promise<any> {
    const out = await this.doAction("erb", convertErbOptions(options));
    return out;
  }
  /** Alias for the `min_fastlane_version` action
   */
  async fastlaneVersion(options: FastlaneVersionOptions): Promise<any> {
    const out = await this.doAction(
      "fastlane_version",
      convertFastlaneVersionOptions(options)
    );
    return out;
  }
  /** Send a message to a [Flock](https://flock.com/) group
   */
  async flock(options: FlockOptions): Promise<any> {
    const out = await this.doAction("flock", convertFlockOptions(options));
    return out;
  }
  /** Adds device frames around all screenshots (via _frameit_)
   */
  async frameScreenshots(options: FrameScreenshotsOptions): Promise<any> {
    const out = await this.doAction(
      "frame_screenshots",
      convertFrameScreenshotsOptions(options)
    );
    return out;
  }
  /** Alias for the `frame_screenshots` action
   */
  async frameit(options: FrameitOptions): Promise<any> {
    const out = await this.doAction("frameit", convertFrameitOptions(options));
    return out;
  }
  /** Runs test coverage reports for your Xcode project
   */
  async gcovr(options: GcovrOptions): Promise<any> {
    const out = await this.doAction("gcovr", convertGcovrOptions(options));
    return out;
  }
  /** Get the build number of your project
   */
  async getBuildNumber(options: GetBuildNumberOptions): Promise<any> {
    const out = await this.doAction(
      "get_build_number",
      convertGetBuildNumberOptions(options)
    );
    return out;
  }
  /** Get the build number from the current repository
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
  /** Create new iOS code signing certificates (via _cert_)
   */
  async getCertificates(options: GetCertificatesOptions): Promise<any> {
    const out = await this.doAction(
      "get_certificates",
      convertGetCertificatesOptions(options)
    );
    return out;
  }
  /** This will verify if a given release version is available on GitHub
   */
  async getGithubRelease(options: GetGithubReleaseOptions): Promise<any> {
    const out = await this.doAction(
      "get_github_release",
      convertGetGithubReleaseOptions(options)
    );
    return out;
  }
  /** Returns value from Info.plist of your project as native Ruby data structures
   */
  async getInfoPlistValue(options: GetInfoPlistValueOptions): Promise<any> {
    const out = await this.doAction(
      "get_info_plist_value",
      convertGetInfoPlistValueOptions(options)
    );
    return out;
  }
  /** Returns a value from Info.plist inside a .ipa file
   */
  async getIpaInfoPlistValue(
    options: GetIpaInfoPlistValueOptions
  ): Promise<any> {
    const out = await this.doAction(
      "get_ipa_info_plist_value",
      convertGetIpaInfoPlistValueOptions(options)
    );
    return out;
  }
  /** Obtain publishing rights for custom apps on Managed Google Play Store
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
  /** Generates a provisioning profile, saving it in the current folder (via _sigh_)
   */
  async getProvisioningProfile(
    options: GetProvisioningProfileOptions
  ): Promise<any> {
    const out = await this.doAction(
      "get_provisioning_profile",
      convertGetProvisioningProfileOptions(options)
    );
    return out;
  }
  /** Ensure a valid push profile is active, creating a new one if needed (via _pem_)
   */
  async getPushCertificate(options: GetPushCertificateOptions): Promise<any> {
    const out = await this.doAction(
      "get_push_certificate",
      convertGetPushCertificateOptions(options)
    );
    return out;
  }
  /** Get the version number of your project
   */
  async getVersionNumber(options: GetVersionNumberOptions): Promise<any> {
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
  /** Returns the name of the current git branch, possibly as managed by CI ENV vars
   */
  async gitBranch(options: GitBranchOptions): Promise<any> {
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
  /** Executes a git submodule command
   */
  async gitSubmoduleUpdate(options: GitSubmoduleUpdateOptions): Promise<any> {
    const out = await this.doAction(
      "git_submodule_update",
      convertGitSubmoduleUpdateOptions(options)
    );
    return out;
  }
  /** Checks if the git tag with the given name exists in the current repo
   */
  async gitTagExists(options: GitTagExistsOptions): Promise<any> {
    const out = await this.doAction(
      "git_tag_exists",
      convertGitTagExistsOptions(options)
    );
    return out;
  }
  /** Call a GitHub API endpoint and get the resulting JSON response
   */
  async githubApi(options: GithubApiOptions): Promise<any> {
    const out = await this.doAction(
      "github_api",
      convertGithubApiOptions(options)
    );
    return out;
  }
  /** Retrieves version codes for a Google Play track
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
  /** All gradle related actions, including building and testing your Android app
   */
  async gradle(options: GradleOptions): Promise<any> {
    const out = await this.doAction("gradle", convertGradleOptions(options));
    return out;
  }
  /** Alias for the `build_app` action
   */
  async gym(options: GymOptions): Promise<any> {
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
  /** This will commit a version bump to the hg repo
   */
  async hgCommitVersionBump(options: HgCommitVersionBumpOptions): Promise<any> {
    const out = await this.doAction(
      "hg_commit_version_bump",
      convertHgCommitVersionBumpOptions(options)
    );
    return out;
  }
  /** Raises an exception if there are uncommitted hg changes
   */
  async hgEnsureCleanStatus(options: HgEnsureCleanStatusOptions): Promise<any> {
    const out = await this.doAction(
      "hg_ensure_clean_status",
      convertHgEnsureCleanStatusOptions(options)
    );
    return out;
  }
  /** This will push changes to the remote hg repository
   */
  async hgPush(options: HgPushOptions): Promise<any> {
    const out = await this.doAction("hg_push", convertHgPushOptions(options));
    return out;
  }
  /** Send a error/success message to [HipChat](https://www.hipchat.com/)
   */
  async hipchat(options: HipchatOptions): Promise<any> {
    const out = await this.doAction("hipchat", convertHipchatOptions(options));
    return out;
  }
  /** Refer to [App Center](https://github.com/Microsoft/fastlane-plugin-appcenter/)
   */
  async hockey(options: HockeyOptions): Promise<any> {
    const out = await this.doAction("hockey", convertHockeyOptions(options));
    return out;
  }
  /** Connect to the [IFTTT Maker Channel](https://ifttt.com/maker)
   */
  async ifttt(options: IftttOptions): Promise<any> {
    const out = await this.doAction("ifttt", convertIftttOptions(options));
    return out;
  }
  /** Import another Fastfile to use its lanes
   */
  async import(options: ImportOptions): Promise<any> {
    const out = await this.doAction("import", convertImportOptions(options));
    return out;
  }
  /** Import certificate from inputfile into a keychain
   */
  async importCertificate(options: ImportCertificateOptions): Promise<any> {
    const out = await this.doAction(
      "import_certificate",
      convertImportCertificateOptions(options)
    );
    return out;
  }
  /** Import another Fastfile from a remote git repository to use its lanes
   */
  async importFromGit(options: ImportFromGitOptions): Promise<any> {
    const out = await this.doAction(
      "import_from_git",
      convertImportFromGitOptions(options)
    );
    return out;
  }
  /** Increment the build number of your project
   */
  async incrementBuildNumber(
    options: IncrementBuildNumberOptions
  ): Promise<any> {
    const out = await this.doAction(
      "increment_build_number",
      convertIncrementBuildNumberOptions(options)
    );
    return out;
  }
  /** Increment the version number of your project
   */
  async incrementVersionNumber(
    options: IncrementVersionNumberOptions
  ): Promise<any> {
    const out = await this.doAction(
      "increment_version_number",
      convertIncrementVersionNumberOptions(options)
    );
    return out;
  }
  /** Installs an .ipa file on a connected iOS-device via usb or wifi
   */
  async installOnDevice(options: InstallOnDeviceOptions): Promise<any> {
    const out = await this.doAction(
      "install_on_device",
      convertInstallOnDeviceOptions(options)
    );
    return out;
  }
  /** Install provisioning profile from path
   */
  async installProvisioningProfile(
    options: InstallProvisioningProfileOptions
  ): Promise<any> {
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
  /** Is the current run being executed on a CI system, like Jenkins or Travis
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
  /** Leave a comment on JIRA tickets
   */
  async jira(options: JiraOptions): Promise<any> {
    const out = await this.doAction("jira", convertJiraOptions(options));
    return out;
  }
  /** Access lane context values
   */
  async laneContext(options: LaneContextOptions): Promise<any> {
    const out = await this.doAction(
      "lane_context",
      convertLaneContextOptions(options)
    );
    return out;
  }
  /** Return last git commit hash, abbreviated commit hash, commit message and author
   */
  async lastGitCommit(options: LastGitCommitOptions): Promise<any> {
    const out = await this.doAction(
      "last_git_commit",
      convertLastGitCommitOptions(options)
    );
    return out;
  }
  /** Get the most recent git tag
   */
  async lastGitTag(options: LastGitTagOptions): Promise<any> {
    const out = await this.doAction(
      "last_git_tag",
      convertLastGitTagOptions(options)
    );
    return out;
  }
  /** Fetches most recent build number from TestFlight
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
  /** Generate a changelog using the Changes section from the current Jenkins build
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
  /** Alias for the `sync_code_signing` action
   */
  async match(options: MatchOptions): Promise<any> {
    const out = await this.doAction("match", convertMatchOptions(options));
    return out;
  }
  /** Verifies the minimum fastlane version required
   */
  async minFastlaneVersion(options: MinFastlaneVersionOptions): Promise<any> {
    const out = await this.doAction(
      "min_fastlane_version",
      convertMinFastlaneVersionOptions(options)
    );
    return out;
  }
  /** Modifies the services of the app created on Developer Portal
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
  /** Return the number of commits in current git branch
   */
  async numberOfCommits(options: NumberOfCommitsOptions): Promise<any> {
    const out = await this.doAction(
      "number_of_commits",
      convertNumberOfCommitsOptions(options)
    );
    return out;
  }
  /** Lints implementation files with OCLint
   */
  async oclint(options: OclintOptions): Promise<any> {
    const out = await this.doAction("oclint", convertOclintOptions(options));
    return out;
  }
  /** Create or update a new [OneSignal](https://onesignal.com/) application
   */
  async onesignal(options: OnesignalOptions): Promise<any> {
    const out = await this.doAction(
      "onesignal",
      convertOnesignalOptions(options)
    );
    return out;
  }
  /** This will prevent reports from being uploaded when _fastlane_ crashes
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
  /** This will stop uploading the information which actions were run
   */
  async optOutUsage(options: OptOutUsageOptions): Promise<any> {
    const out = await this.doAction(
      "opt_out_usage",
      convertOptOutUsageOptions(options)
    );
    return out;
  }
  /** Alias for the `get_push_certificate` action
   */
  async pem(options: PemOptions): Promise<any> {
    const out = await this.doAction("pem", convertPemOptions(options));
    return out;
  }
  /** Alias for the `upload_to_testflight` action
   */
  async pilot(options: PilotOptions): Promise<any> {
    const out = await this.doAction("pilot", convertPilotOptions(options));
    return out;
  }
  /** Pod lib lint
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
  /** Creates or updates an item within your Podio app
   */
  async podioItem(options: PodioItemOptions): Promise<any> {
    const out = await this.doAction(
      "podio_item",
      convertPodioItemOptions(options)
    );
    return out;
  }
  /** Alias for the `check_app_store_metadata` action
   */
  async precheck(options: PrecheckOptions): Promise<any> {
    const out = await this.doAction(
      "precheck",
      convertPrecheckOptions(options)
    );
    return out;
  }
  /** Alias for the `puts` action
   */
  async println(options: PrintlnOptions): Promise<any> {
    const out = await this.doAction("println", convertPrintlnOptions(options));
    return out;
  }
  /** Alias for the `create_app_online` action
   */
  async produce(options: ProduceOptions): Promise<any> {
    const out = await this.doAction("produce", convertProduceOptions(options));
    return out;
  }
  /** Ask the user for a value or for confirmation
   */
  async prompt(options: PromptOptions): Promise<any> {
    const out = await this.doAction("prompt", convertPromptOptions(options));
    return out;
  }
  /** Push local tags to the remote - this will only push tags
   */
  async pushGitTags(options: PushGitTagsOptions): Promise<any> {
    const out = await this.doAction(
      "push_git_tags",
      convertPushGitTagsOptions(options)
    );
    return out;
  }
  /** Push local changes to the remote branch
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
  /** Loads a CocoaPods spec as JSON
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
  /** Registers a new device to the Apple Dev Portal
   */
  async registerDevice(options: RegisterDeviceOptions): Promise<any> {
    const out = await this.doAction(
      "register_device",
      convertRegisterDeviceOptions(options)
    );
    return out;
  }
  /** Registers new devices to the Apple Dev Portal
   */
  async registerDevices(options: RegisterDevicesOptions): Promise<any> {
    const out = await this.doAction(
      "register_devices",
      convertRegisterDevicesOptions(options)
    );
    return out;
  }
  /** Resets git repo to a clean state by discarding uncommitted changes
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
  /** Outputs ascii-art for a rocket 🚀
   */
  async rocket(options: RocketOptions): Promise<any> {
    const out = await this.doAction("rocket", convertRocketOptions(options));
    return out;
  }
  /** Rsync files from :source to :destination
   */
  async rsync(options: RsyncOptions): Promise<any> {
    const out = await this.doAction("rsync", convertRsyncOptions(options));
    return out;
  }
  /** Verifies the minimum ruby version required
   */
  async rubyVersion(options: RubyVersionOptions): Promise<any> {
    const out = await this.doAction(
      "ruby_version",
      convertRubyVersionOptions(options)
    );
    return out;
  }
  /** Easily run tests of your iOS app (via _scan_)
   */
  async runTests(options: RunTestsOptions): Promise<any> {
    const out = await this.doAction(
      "run_tests",
      convertRunTestsOptions(options)
    );
    return out;
  }
  /** Generates a plist file and uploads all to AWS S3
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
  /** Alias for the `run_tests` action
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
  /** Alias for the `capture_android_screenshots` action
   */
  async screengrab(options: ScreengrabOptions): Promise<any> {
    const out = await this.doAction(
      "screengrab",
      convertScreengrabOptions(options)
    );
    return out;
  }
  /** Set the build number from the current repository
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
  /** Set the changelog for all languages on App Store Connect
   */
  async setChangelog(options: SetChangelogOptions): Promise<any> {
    const out = await this.doAction(
      "set_changelog",
      convertSetChangelogOptions(options)
    );
    return out;
  }
  /** This will create a new release on GitHub and upload assets for it
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
  /** Sets a value for a key with cocoapods-keys
   */
  async setPodKey(options: SetPodKeyOptions): Promise<any> {
    const out = await this.doAction(
      "set_pod_key",
      convertSetPodKeyOptions(options)
    );
    return out;
  }
  /** Setup the keychain and match to work with CI
   */
  async setupCi(options: SetupCiOptions): Promise<any> {
    const out = await this.doAction("setup_ci", convertSetupCiOptions(options));
    return out;
  }
  /** Setup the keychain and match to work with CircleCI
   */
  async setupCircleCi(options: SetupCircleCiOptions): Promise<any> {
    const out = await this.doAction(
      "setup_circle_ci",
      convertSetupCircleCiOptions(options)
    );
    return out;
  }
  /** Setup xcodebuild, gym and scan for easier Jenkins integration
   */
  async setupJenkins(options: SetupJenkinsOptions): Promise<any> {
    const out = await this.doAction(
      "setup_jenkins",
      convertSetupJenkinsOptions(options)
    );
    return out;
  }
  /** Setup the keychain and match to work with Travis CI
   */
  async setupTravis(options: SetupTravisOptions): Promise<any> {
    const out = await this.doAction(
      "setup_travis",
      convertSetupTravisOptions(options)
    );
    return out;
  }
  /** Runs a shell command
   */
  async sh(options: ShOptions): Promise<any> {
    const out = await this.doAction("sh", convertShOptions(options));
    return out;
  }
  /** Alias for the `get_provisioning_profile` action
   */
  async sigh(options: SighOptions): Promise<any> {
    const out = await this.doAction("sigh", convertSighOptions(options));
    return out;
  }
  /** Skip the creation of the fastlane/README.md file when running fastlane
   */
  async skipDocs(options: SkipDocsOptions): Promise<any> {
    const out = await this.doAction(
      "skip_docs",
      convertSkipDocsOptions(options)
    );
    return out;
  }
  /** Send a success/error message to your [Slack](https://slack.com) group
   */
  async slack(options: SlackOptions): Promise<any> {
    const out = await this.doAction("slack", convertSlackOptions(options));
    return out;
  }
  /** Use slather to generate a code coverage report
   */
  async slather(options: SlatherOptions): Promise<any> {
    const out = await this.doAction("slather", convertSlatherOptions(options));
    return out;
  }
  /** Alias for the `capture_ios_screenshots` action
   */
  async snapshot(options: SnapshotOptions): Promise<any> {
    const out = await this.doAction(
      "snapshot",
      convertSnapshotOptions(options)
    );
    return out;
  }
  /** Invokes sonar-scanner to programmatically run SonarQube analysis
   */
  async sonar(options: SonarOptions): Promise<any> {
    const out = await this.doAction("sonar", convertSonarOptions(options));
    return out;
  }
  /** Find, print, and copy Spaceship logs
   */
  async spaceshipLogs(options: SpaceshipLogsOptions): Promise<any> {
    const out = await this.doAction(
      "spaceship_logs",
      convertSpaceshipLogsOptions(options)
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
  /** Allows remote command execution using ssh
   */
  async ssh(options: SshOptions): Promise<any> {
    const out = await this.doAction("ssh", convertSshOptions(options));
    return out;
  }
  /** Alias for the `upload_to_play_store` action
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
  /** Easily sync your certificates and profiles across your team (via _match_)
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
  /** Upload a new build to [TestFairy](https://www.testfairy.com/)
   */
  async testfairy(options: TestfairyOptions): Promise<any> {
    const out = await this.doAction(
      "testfairy",
      convertTestfairyOptions(options)
    );
    return out;
  }
  /** Alias for the `upload_to_testflight` action
   */
  async testflight(options: TestflightOptions): Promise<any> {
    const out = await this.doAction(
      "testflight",
      convertTestflightOptions(options)
    );
    return out;
  }
  /** Upload a new build to [Tryouts](https://tryouts.io/)
   */
  async tryouts(options: TryoutsOptions): Promise<any> {
    const out = await this.doAction("tryouts", convertTryoutsOptions(options));
    return out;
  }
  /** Post a tweet on [Twitter.com](https://twitter.com)
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
  /** Unlock a keychain
   */
  async unlockKeychain(options: UnlockKeychainOptions): Promise<any> {
    const out = await this.doAction(
      "unlock_keychain",
      convertUnlockKeychainOptions(options)
    );
    return out;
  }
  /** This action changes the app group identifiers in the entitlements file
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
  /** Update the project's bundle identifier
   */
  async updateAppIdentifier(options: UpdateAppIdentifierOptions): Promise<any> {
    const out = await this.doAction(
      "update_app_identifier",
      convertUpdateAppIdentifierOptions(options)
    );
    return out;
  }
  /** Configures Xcode's Codesigning options
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
  /** Makes sure fastlane-tools are up-to-date when running fastlane
   */
  async updateFastlane(options: UpdateFastlaneOptions): Promise<any> {
    const out = await this.doAction(
      "update_fastlane",
      convertUpdateFastlaneOptions(options)
    );
    return out;
  }
  /** This action changes the iCloud container identifiers in the entitlements file
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
  /** Update a Info.plist file with bundle identifier and display name
   */
  async updateInfoPlist(options: UpdateInfoPlistOptions): Promise<any> {
    const out = await this.doAction(
      "update_info_plist",
      convertUpdateInfoPlistOptions(options)
    );
    return out;
  }
  /** This action changes the keychain access groups in the entitlements file
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
  /** Update a plist file
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
  /** Update projects code signing settings from your provisioning profile
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
  /** Update Xcode Development Team ID
   */
  async updateProjectTeam(options: UpdateProjectTeamOptions): Promise<any> {
    const out = await this.doAction(
      "update_project_team",
      convertUpdateProjectTeamOptions(options)
    );
    return out;
  }
  /** Set [Urban Airship](https://www.urbanairship.com/) plist configuration values
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
  /** Updates the URL schemes in the given Info.plist
   */
  async updateUrlSchemes(options: UpdateUrlSchemesOptions): Promise<any> {
    const out = await this.doAction(
      "update_url_schemes",
      convertUpdateUrlSchemesOptions(options)
    );
    return out;
  }
  /** Upload dSYM symbolication files to Crashlytics
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
  /** Upload dSYM symbolication files to Sentry
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
  /** Upload metadata and binary to App Store Connect (via _deliver_)
   */
  async uploadToAppStore(options: UploadToAppStoreOptions): Promise<any> {
    const out = await this.doAction(
      "upload_to_app_store",
      convertUploadToAppStoreOptions(options)
    );
    return out;
  }
  /** Upload metadata, screenshots and binaries to Google Play (via _supply_)
   */
  async uploadToPlayStore(options: UploadToPlayStoreOptions): Promise<any> {
    const out = await this.doAction(
      "upload_to_play_store",
      convertUploadToPlayStoreOptions(options)
    );
    return out;
  }
  /** Upload binaries to Google Play Internal App Sharing (via _supply_)
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
  /** Upload new binary to App Store Connect for TestFlight beta testing (via _pilot_)
   */
  async uploadToTestflight(options: UploadToTestflightOptions): Promise<any> {
    const out = await this.doAction(
      "upload_to_testflight",
      convertUploadToTestflightOptions(options)
    );
    return out;
  }
  /** Validate that the Google Play Store `json_key` works
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
  /** Able to verify various settings in ipa file
   */
  async verifyBuild(options: VerifyBuildOptions): Promise<any> {
    const out = await this.doAction(
      "verify_build",
      convertVerifyBuildOptions(options)
    );
    return out;
  }
  /** Verifies all keys referenced from the Podfile are non-empty
   */
  async verifyPodKeys(options: VerifyPodKeysOptions): Promise<any> {
    const out = await this.doAction(
      "verify_pod_keys",
      convertVerifyPodKeysOptions(options)
    );
    return out;
  }
  /** Verifies that the Xcode installation is properly signed by Apple
   */
  async verifyXcode(options: VerifyXcodeOptions): Promise<any> {
    const out = await this.doAction(
      "verify_xcode",
      convertVerifyXcodeOptions(options)
    );
    return out;
  }
  /** Increment or set the version in a podspec file
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
  /** Make sure a certain version of Xcode is installed
   */
  async xcodeInstall(options: XcodeInstallOptions): Promise<any> {
    const out = await this.doAction(
      "xcode_install",
      convertXcodeInstallOptions(options)
    );
    return out;
  }
  /** Change the xcode-path to use. Useful for beta versions of Xcode
   */
  async xcodeSelect(options: XcodeSelectOptions): Promise<any> {
    const out = await this.doAction(
      "xcode_select",
      convertXcodeSelectOptions(options)
    );
    return out;
  }
  /** Downloads Xcode Bot assets like the `.xcarchive` and logs
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
  /** Use the `xcodebuild` command to build and sign your app
   */
  async xcodebuild(options: XcodebuildOptions): Promise<any> {
    const out = await this.doAction(
      "xcodebuild",
      convertXcodebuildOptions(options)
    );
    return out;
  }
  /** Nice code coverage reports without hassle
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
  /** Run tests using xctool
   */
  async xctool(options: XctoolOptions): Promise<any> {
    const out = await this.doAction("xctool", convertXctoolOptions(options));
    return out;
  }
  /** Select an Xcode to use by version specifier
   */
  async xcversion(options: XcversionOptions): Promise<any> {
    const out = await this.doAction(
      "xcversion",
      convertXcversionOptions(options)
    );
    return out;
  }
  /** Compress a file or folder to a zip
   */
  async zip(options: ZipOptions): Promise<any> {
    const out = await this.doAction("zip", convertZipOptions(options));
    return out;
  }
}
function withFastlane(
  {
    port = 2000,
    isInteractive = true,
  }: { port: number; isInteractive: boolean },
  f: (fastlane: Fastlane) => Promise<any>
) {
  const fastlane = new Fastlane(port, isInteractive);
  return f(fastlane);
}
export default Fastlane;
export { Fastlane, withFastlane };

