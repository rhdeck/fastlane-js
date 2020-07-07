import { FastlaneBase } from "@fastlanejs/base";
/** Main Class
 */
class Fastlane extends FastlaneBase {
  /** Run ADB Actions
   */
  async adb(options: {
    /**
     * Android serial of the device to use for this command
     * */
    serial: string;
    /**
     * All commands you want to pass to the adb command, e.g. `kill-server`
     * */
    command?: string;
    /**
     * The path to your `adb` binary (can be left blank if the ANDROID_SDK_ROOT environment variable is set)
     * */
    adbPath?: string;
  }): Promise<string> {
    const convertedOptions = {
      serial: options.serial,
      command: options.command,
      adb_path: options.adbPath,
    };

    const out = await this.doAction("adb", convertedOptions);
    return out;
  }
  /** Get an array of Connected android device serials
   */
  async adbDevices(options: {
    /**
     * The path to your `adb` binary (can be left blank if the ANDROID_SDK_ROOT environment variable is set)
     * */
    adbPath?: string;
  }): Promise<any> {
    const convertedOptions = { adb_path: options.adbPath };

    const out = await this.doAction("adb_devices", convertedOptions);
    return out;
  }
  /** Modify the default list of supported platforms
   */
  async addExtraPlatforms(options: {
    /**
     * The optional extra platforms to support
     * */
    platforms: string[];
  }): Promise<any> {
    const convertedOptions = { platforms: options.platforms };

    const out = await this.doAction("add_extra_platforms", convertedOptions);
    return out;
  }
  /** This will add an annotated git tag to the current branch
   */
  async addGitTag(options: {
    /**
     * Define your own tag text. This will replace all other parameters
     * */
    tag?: string;
    /**
     * Is used to keep your tags organised under one 'folder'
     * */
    grouping: string;
    /**
     * Anything you want to put in front of the version number (e.g. 'v')
     * */
    prefix: string;
    /**
     * Anything you want to put at the end of the version number (e.g. '-RC1')
     * */
    postfix: string;
    /**
     * The build number. Defaults to the result of increment_build_number if you're using it
     * */
    buildNumber: any;
    /**
     * The tag message. Defaults to the tag's name
     * */
    message?: string;
    /**
     * The commit or object where the tag will be set. Defaults to the current HEAD
     * */
    commit?: string;
    /**
     * Force adding the tag
     * */
    force?: any;
    /**
     * Make a GPG-signed tag, using the default e-mail address's key
     * */
    sign?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("add_git_tag", convertedOptions);
    return out;
  }
  /** Returns the current build_number of either live or edit version
   */
  async appStoreBuildNumber(options: {
    /**
     * sets the build number to given value if no build is in current train
     * */
    initialBuildNumber: any;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * Query the live version (ready-for-sale)
     * */
    live?: any;
    /**
     * The version number whose latest build number we want
     * */
    version?: string;
    /**
     * The platform to use (optional)
     * */
    platform?: string;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
  }): Promise<any> {
    const convertedOptions = {
      initial_build_number: options.initialBuildNumber,
      app_identifier: options.appIdentifier,
      username: options.username,
      team_id: options.teamId,
      live: options.live,
      version: options.version,
      platform: options.platform,
      team_name: options.teamName,
    };

    const out = await this.doAction("app_store_build_number", convertedOptions);
    return out;
  }
  /** Upload your app to [Appaloosa Store](https://www.appaloosa-store.com/)
   */
  async appaloosa(options: {
    /**
     * Binary path. Optional for ipa if you use the `ipa` or `xcodebuild` action
     * */
    binary: string;
    /**
     * Your API token
     * */
    apiToken: string;
    /**
     * Your Store id
     * */
    storeId: string;
    /**
     * Your app is limited to special users? Give us the group ids
     * */
    groupIds?: string;
    /**
     * Add some screenshots application to your store or hit [enter]
     * */
    screenshots: string;
    /**
     * Select the folder locale for your screenshots
     * */
    locale?: string;
    /**
     * Select the device format for your screenshots
     * */
    device?: string;
    /**
     * Your app description
     * */
    description?: string;
  }): Promise<any> {
    const convertedOptions = {
      binary: options.binary,
      api_token: options.apiToken,
      store_id: options.storeId,
      group_ids: options.groupIds,
      screenshots: options.screenshots,
      locale: options.locale,
      device: options.device,
      description: options.description,
    };

    const out = await this.doAction("appaloosa", convertedOptions);
    return out;
  }
  /** Upload your app to [Appetize.io](https://appetize.io/) to stream it in browser
   */
  async appetize(options: {
    /**
     * Appetize API host
     * */
    apiHost: string;
    /**
     * Appetize.io API Token
     * */
    apiToken: string;
    /**
     * URL from which the ipa file can be fetched. Alternative to :path
     * */
    url?: string;
    /**
     * Platform. Either `ios` or `android`
     * */
    platform: string;
    /**
     * Path to zipped build on the local filesystem. Either this or `url` must be specified
     * */
    path?: string;
    /**
     * If not provided, a new app will be created. If provided, the existing build will be overwritten
     * */
    publicKey?: string;
    /**
     * Notes you wish to add to the uploaded app
     * */
    note?: string;
  }): Promise<any> {
    const convertedOptions = {
      api_host: options.apiHost,
      api_token: options.apiToken,
      url: options.url,
      platform: options.platform,
      path: options.path,
      public_key: options.publicKey,
      note: options.note,
    };

    const out = await this.doAction("appetize", convertedOptions);
    return out;
  }
  /** Generate an URL for appetize simulator
   */
  async appetizeViewingUrlGenerator(options: {
    /**
     * Public key of the app you wish to update
     * */
    publicKey: string;
    /**
     * Base URL of Appetize service
     * */
    baseUrl?: string;
    /**
     * Device type: iphone4s, iphone5s, iphone6, iphone6plus, ipadair, iphone6s, iphone6splus, ipadair2, nexus5, nexus7 or nexus9
     * */
    device: string;
    /**
     * Scale of the simulator
     * */
    scale?: string;
    /**
     * Device orientation
     * */
    orientation: string;
    /**
     * Device language in ISO 639-1 language code, e.g. 'de'
     * */
    language?: string;
    /**
     * Color of the device
     * */
    color: string;
    /**
     * Specify a deep link to open when your app is launched
     * */
    launchUrl?: string;
    /**
     * The operating system version on which to run your app, e.g. 10.3, 8.0
     * */
    osVersion?: string;
    /**
     * Specify params value to be passed to Appetize
     * */
    params?: string;
    /**
     * Specify a HTTP proxy to be passed to Appetize
     * */
    proxy?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction(
      "appetize_viewing_url_generator",
      convertedOptions
    );
    return out;
  }
  /** Run UI test by Appium with RSpec
   */
  async appium(options: {
    /**
     * Appium platform name
     * */
    platform: string;
    /**
     * Path to Appium spec directory
     * */
    specPath: string;
    /**
     * Path to Appium target app file
     * */
    appPath: string;
    /**
     * Use local Appium server with invoke automatically
     * */
    invokeAppiumServer?: any;
    /**
     * Hostname of Appium server
     * */
    host?: string;
    /**
     * HTTP port of Appium server
     * */
    port?: any;
    /**
     * Path to Appium executable
     * */
    appiumPath?: string;
    /**
     * Hash of caps for Appium::Driver
     * */
    caps?: { string: string };
    /**
     * Hash of appium_lib for Appium::Driver
     * */
    appiumLib?: { string: string };
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("appium", convertedOptions);
    return out;
  }
  /** Generate Apple-like source code documentation from the source code
   */
  async appledoc(options: {
    /**
     * Path(s) to source file directories or individual source files. Accepts a single path or an array of paths
     * */
    input: any;
    /**
     * Output path
     * */
    output?: string;
    /**
     * Template files path
     * */
    templates?: string;
    /**
     * DocSet installation path
     * */
    docsetInstallPath?: string;
    /**
     * Include static doc(s) at path
     * */
    include?: string;
    /**
     * Ignore given path
     * */
    ignore?: any;
    /**
     * Exclude given path from output
     * */
    excludeOutput?: any;
    /**
     * File including main index description
     * */
    indexDesc?: string;
    /**
     * Project name
     * */
    projectName: string;
    /**
     * Project version
     * */
    projectVersion?: string;
    /**
     * Project company
     * */
    projectCompany: string;
    /**
     * Company UTI (i.e. reverse DNS name)
     * */
    companyId?: string;
    /**
     * Create HTML
     * */
    createHtml: any;
    /**
     * Create documentation set
     * */
    createDocset: any;
    /**
     * Install documentation set to Xcode
     * */
    installDocset: any;
    /**
     * Prepare DocSet for publishing
     * */
    publishDocset: any;
    /**
     * Create HTML and skip creating a DocSet
     * */
    noCreateDocset: any;
    /**
     * The html anchor format to use in DocSet HTML
     * */
    htmlAnchors?: string;
    /**
     * Remove contents of output path before starting
     * */
    cleanOutput: any;
    /**
     * DocSet bundle identifier
     * */
    docsetBundleId?: string;
    /**
     * DocSet bundle name
     * */
    docsetBundleName?: string;
    /**
     * DocSet description
     * */
    docsetDesc?: string;
    /**
     * DocSet copyright message
     * */
    docsetCopyright?: string;
    /**
     * DocSet feed name
     * */
    docsetFeedName?: string;
    /**
     * DocSet feed URL
     * */
    docsetFeedUrl?: string;
    /**
     * DocSet feed formats. Separated by a comma [atom,xml]
     * */
    docsetFeedFormats?: string;
    /**
     * DocSet package (.xar) URL
     * */
    docsetPackageUrl?: string;
    /**
     * DocSet fallback URL
     * */
    docsetFallbackUrl?: string;
    /**
     * DocSet publisher identifier
     * */
    docsetPublisherId?: string;
    /**
     * DocSet publisher name
     * */
    docsetPublisherName?: string;
    /**
     * DocSet min. Xcode version
     * */
    docsetMinXcodeVersion?: string;
    /**
     * DocSet platform family
     * */
    docsetPlatformFamily?: string;
    /**
     * DocSet certificate issuer
     * */
    docsetCertIssuer?: string;
    /**
     * DocSet certificate signer
     * */
    docsetCertSigner?: string;
    /**
     * DocSet bundle filename
     * */
    docsetBundleFilename?: string;
    /**
     * DocSet atom feed filename
     * */
    docsetAtomFilename?: string;
    /**
     * DocSet xml feed filename
     * */
    docsetXmlFilename?: string;
    /**
     * DocSet package (.xar,.tgz) filename
     * */
    docsetPackageFilename?: string;
    /**
     * Documentation generation options
     * */
    options?: string;
    /**
     * Cross reference template regex
     * */
    crossrefFormat?: string;
    /**
     * Exit code threshold below which 0 is returned
     * */
    exitThreshold?: any;
    /**
     * Title of the documentation section (defaults to "Programming Guides"
     * */
    docsSectionTitle?: string;
    /**
     * Documentation generation warnings
     * */
    warnings?: string;
    /**
     * Log format [0-3]
     * */
    logformat?: any;
    /**
     * Log verbosity level [0-6,xcode]
     * */
    verbose?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("appledoc", convertedOptions);
    return out;
  }
  /** Alias for the [[`uploadToAppStore`]] action
   */
  async appstore(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier?: string;
    /**
     * The version that should be edited or created
     * */
    appVersion?: string;
    /**
     * Path to your ipa file
     * */
    ipa?: string;
    /**
     * Path to your pkg file
     * */
    pkg?: string;
    /**
     * If set the given build number (already uploaded to iTC) will be used instead of the current built one
     * */
    buildNumber?: string;
    /**
     * The platform to use (optional)
     * */
    platform?: string;
    /**
     * Modify live metadata, this option disables ipa upload and screenshot upload
     * */
    editLive?: any;
    /**
     * Force usage of live version rather than edit version
     * */
    useLiveVersion: any;
    /**
     * Path to the folder containing the metadata files
     * */
    metadataPath?: string;
    /**
     * Path to the folder containing the screenshots
     * */
    screenshotsPath?: string;
    /**
     * Skip uploading an ipa or pkg to App Store Connect
     * */
    skipBinaryUpload: any;
    /**
     * Don't upload the screenshots
     * */
    skipScreenshots: any;
    /**
     * Don't upload the metadata (e.g. title, description). This will still upload screenshots
     * */
    skipMetadata: any;
    /**
     * Don't update app version for submission
     * */
    skipAppVersionUpdate: any;
    /**
     * Skip the HTML report file verification
     * */
    force: any;
    /**
     * Clear all previously uploaded screenshots before uploading the new ones
     * */
    overwriteScreenshots: any;
    /**
     * Submit the new version for Review after uploading everything
     * */
    submitForReview: any;
    /**
     * Rejects the previously submitted build if it's in a state where it's possible
     * */
    rejectIfPossible: any;
    /**
     * Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
     * */
    automaticRelease: any;
    /**
     * Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
     * */
    autoReleaseDate?: any;
    /**
     * Enable the phased release feature of iTC
     * */
    phasedRelease?: any;
    /**
     * Reset the summary rating when you release a new version of the application
     * */
    resetRatings?: any;
    /**
     * The price tier of this application
     * */
    priceTier?: any;
    /**
     * Path to the app rating's config
     * */
    appRatingConfigPath?: string;
    /**
     * Extra information for the submission (e.g. compliance specifications, IDFA settings)
     * */
    submissionInformation?: any;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
     * */
    devPortalTeamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    devPortalTeamName?: string;
    /**
     * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
     * */
    itcProvider?: string;
    /**
     * Run precheck before submitting to app review
     * */
    runPrecheckBeforeSubmit: any;
    /**
     * The default precheck rule level unless otherwise configured
     * */
    precheckDefaultRuleLevel: any;
    /**
     * An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
     * */
    individualMetadataItems: string[];
    /**
     * Metadata: The path to the app icon
     * */
    appIcon?: string;
    /**
     * Metadata: The path to the Apple Watch app icon
     * */
    appleWatchAppIcon?: string;
    /**
     * Metadata: The copyright notice
     * */
    copyright?: string;
    /**
     * Metadata: The english name of the primary category (e.g. `Business`, `Books`)
     * */
    primaryCategory?: string;
    /**
     * Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
     * */
    secondaryCategory?: string;
    /**
     * Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
     * */
    primaryFirstSubCategory?: string;
    /**
     * Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
     * */
    primarySecondSubCategory?: string;
    /**
     * Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
     * */
    secondaryFirstSubCategory?: string;
    /**
     * Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
     * */
    secondarySecondSubCategory?: string;
    /**
     * Metadata: A hash containing the trade representative contact information
     * */
    tradeRepresentativeContactInformation?: { string: string };
    /**
     * Metadata: A hash containing the review information
     * */
    appReviewInformation?: { string: string };
    /**
     * Metadata: Path to the app review attachment file
     * */
    appReviewAttachmentFile?: string;
    /**
     * Metadata: The localised app description
     * */
    description?: any;
    /**
     * Metadata: The localised app name
     * */
    name?: any;
    /**
     * Metadata: The localised app subtitle
     * */
    subtitle?: { string: string };
    /**
     * Metadata: An array of localised keywords
     * */
    keywords?: { string: string };
    /**
     * Metadata: An array of localised promotional texts
     * */
    promotionalText?: { string: string };
    /**
     * Metadata: Localised release notes for this version
     * */
    releaseNotes?: any;
    /**
     * Metadata: Localised privacy url
     * */
    privacyUrl?: any;
    /**
     * Metadata: Localised Apple TV privacy policy text
     * */
    appleTvPrivacyPolicy?: any;
    /**
     * Metadata: Localised support url
     * */
    supportUrl?: any;
    /**
     * Metadata: Localised marketing url
     * */
    marketingUrl?: any;
    /**
     * Metadata: List of languages to activate
     * */
    languages?: string[];
    /**
     * Ignore errors when invalid languages are found in metadata and screenshot directories
     * */
    ignoreLanguageDirectoryValidation: any;
    /**
     * Should precheck check in-app purchases?
     * */
    precheckIncludeInAppPurchases?: any;
    /**
     * The (spaceship) app ID of the app you want to use/modify
     * */
    app: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("appstore", convertedOptions);
    return out;
  }
  /** Upload dSYM file to [Apteligent (Crittercism)](http://www.apteligent.com/)
   */
  async apteligent(options: {
    /**
     * dSYM.zip file to upload to Apteligent
     * */
    dsym?: string;
    /**
     * Apteligent App ID key e.g. 569f5c87cb99e10e00c7xxxx
     * */
    appId: string;
    /**
     * Apteligent App API key e.g. IXPQIi8yCbHaLliqzRoo065tH0lxxxxx
     * */
    apiKey: string;
  }): Promise<any> {
    const convertedOptions = {
      dsym: options.dsym,
      app_id: options.appId,
      api_key: options.apiKey,
    };

    const out = await this.doAction("apteligent", convertedOptions);
    return out;
  }
  /** This action uploads an artifact to artifactory
   */
  async artifactory(options: {
    /**
     * File to be uploaded to artifactory
     * */
    file: string;
    /**
     * Artifactory repo to put the file in
     * */
    repo: string;
    /**
     * Path to deploy within the repo, including filename
     * */
    repoPath: string;
    /**
     * Artifactory endpoint
     * */
    endpoint: string;
    /**
     * Artifactory username
     * */
    username: string;
    /**
     * Artifactory password
     * */
    password: string;
    /**
     * Artifact properties hash
     * */
    properties?: any;
    /**
     * Location of pem file to use for ssl verification
     * */
    sslPemFile?: string;
    /**
     * Verify SSL
     * */
    sslVerify?: any;
    /**
     * Proxy username
     * */
    proxyUsername?: string;
    /**
     * Proxy password
     * */
    proxyPassword?: string;
    /**
     * Proxy address
     * */
    proxyAddress?: string;
    /**
     * Proxy port
     * */
    proxyPort?: string;
    /**
     * Read timeout
     * */
    readTimeout?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("artifactory", convertedOptions);
    return out;
  }
  /** Configures Xcode's Codesigning options
   */
  async automaticCodeSigning(options: {
    /**
     * Path to your Xcode project
     * */
    path: string;
    /**
     * Defines if project should use automatic signing
     * */
    useAutomaticSigning: any;
    /**
     * Team ID, is used when upgrading project
     * */
    teamId?: string;
    /**
     * Specify targets you want to toggle the signing mech. (default to all targets)
     * */
    targets?: string[];
    /**
     * Code signing identity type (iPhone Developer, iPhone Distribution)
     * */
    codeSignIdentity?: string;
    /**
     * Provisioning profile name to use for code signing
     * */
    profileName?: string;
    /**
     * Provisioning profile UUID to use for code signing
     * */
    profileUuid?: string;
    /**
     * Application Product Bundle Identifier
     * */
    bundleIdentifier?: string;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      use_automatic_signing: options.useAutomaticSigning,
      team_id: options.teamId,
      targets: options.targets,
      code_sign_identity: options.codeSignIdentity,
      profile_name: options.profileName,
      profile_uuid: options.profileUuid,
      bundle_identifier: options.bundleIdentifier,
    };

    const out = await this.doAction("automatic_code_signing", convertedOptions);
    return out;
  }
  /** This action backs up your file to "[path].back"
   */
  async backupFile(options: {
    /**
     * Path to the file you want to backup
     * */
    path: string;
  }): Promise<any> {
    const convertedOptions = { path: options.path };

    const out = await this.doAction("backup_file", convertedOptions);
    return out;
  }
  /** Save your [zipped] xcarchive elsewhere from default path
   */
  async backupXcarchive(options: {
    /**
     * Path to your xcarchive file. Optional if you use the `xcodebuild` action
     * */
    xcarchive: string;
    /**
     * Where your archive will be placed
     * */
    destination: string;
    /**
     * Enable compression of the archive
     * */
    zip?: any;
    /**
     * Filename of the compressed archive. Will be appended by `.xcarchive.zip`. Default value is the output xcarchive filename
     * */
    zipFilename?: string;
    /**
     * Create a versioned (date and app version) subfolder where to put the archive
     * */
    versioned?: any;
  }): Promise<any> {
    const convertedOptions = {
      xcarchive: options.xcarchive,
      destination: options.destination,
      zip: options.zip,
      zip_filename: options.zipFilename,
      versioned: options.versioned,
    };

    const out = await this.doAction("backup_xcarchive", convertedOptions);
    return out;
  }
  /** Automatically add a badge to your app icon
   */
  async badge(options: {
    /**
     * Adds a dark flavored badge ontop of your icon
     * */
    dark?: any;
    /**
     * Add your custom overlay/badge image
     * */
    custom?: string;
    /**
     * Hides the beta badge
     * */
    noBadge?: any;
    /**
     * Add a shield to your app icon from shields.io
     * */
    shield?: string;
    /**
     * Adds and alpha badge instead of the default beta one
     * */
    alpha?: any;
    /**
     * Sets the root path to look for AppIcons
     * */
    path?: string;
    /**
     * Set custom duration for the timeout of the shields.io request in seconds
     * */
    shieldIoTimeout?: any;
    /**
     * Glob pattern for finding image files
     * */
    glob?: string;
    /**
     * Keeps/adds an alpha channel to the icon (useful for android icons)
     * */
    alphaChannel?: any;
    /**
     * Position of shield on icon. Default: North - Choices include: NorthWest, North, NorthEast, West, Center, East, SouthWest, South, SouthEast
     * */
    shieldGravity?: string;
    /**
     * Shield image will no longer be resized to aspect fill the full icon. Instead it will only be shrunk to not exceed the icon graphic
     * */
    shieldNoResize?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("badge", convertedOptions);
    return out;
  }
  /** Generate and upload an ipa file to appetize.io
   */
  async buildAndUploadToAppetize(options: {
    /**
     * Parameters that are passed to the xcodebuild action
     * */
    xcodebuild?: { string: string };
    /**
     * The scheme to build. Can also be passed using the `xcodebuild` parameter
     * */
    scheme?: string;
    /**
     * Appetize.io API Token
     * */
    apiToken: string;
    /**
     * If not provided, a new app will be created. If provided, the existing build will be overwritten
     * */
    publicKey?: string;
    /**
     * Notes you wish to add to the uploaded app
     * */
    note?: string;
  }): Promise<any> {
    const convertedOptions = {
      xcodebuild: options.xcodebuild,
      scheme: options.scheme,
      api_token: options.apiToken,
      public_key: options.publicKey,
      note: options.note,
    };

    const out = await this.doAction(
      "build_and_upload_to_appetize",
      convertedOptions
    );
    return out;
  }
  /** Alias for the [[`gradle`]] action
   */
  async buildAndroidApp(options: {
    /**
     * The gradle task you want to execute, e.g. `assemble`, `bundle` or `test`. For tasks such as `assembleMyFlavorRelease` you should use gradle(task: 'assemble', flavor: 'Myflavor', build_type: 'Release')
     * */
    task?: string;
    /**
     * The flavor that you want the task for, e.g. `MyFlavor`. If you are running the `assemble` task in a multi-flavor project, and you rely on Actions.lane_context[SharedValues::GRADLE_APK_OUTPUT_PATH] then you must specify a flavor here or else this value will be undefined
     * */
    flavor?: string;
    /**
     * The build type that you want the task for, e.g. `Release`. Useful for some tasks such as `assemble`
     * */
    buildType?: string;
    /**
     * The multiple gradle tasks that you want to execute, e.g. `[assembleDebug, bundleDebug]`
     * */
    tasks?: string[];
    /**
     * All parameter flags you want to pass to the gradle command, e.g. `--exitcode --xml file.xml`
     * */
    flags?: string;
    /**
     * The root directory of the gradle project
     * */
    projectDir: string;
    /**
     * The path to your `gradlew`. If you specify a relative path, it is assumed to be relative to the `project_dir`
     * */
    gradlePath?: string;
    /**
     * Gradle properties to be exposed to the gradle script
     * */
    properties?: any;
    /**
     * Gradle system properties to be exposed to the gradle script
     * */
    systemProperties?: any;
    /**
     * Android serial, which device should be used for this command
     * */
    serial: string;
    /**
     * Control whether the generated Gradle command is printed as output before running it (true/false)
     * */
    printCommand: any;
    /**
     * Control whether the output produced by given Gradle command is printed while running (true/false)
     * */
    printCommandOutput: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("build_android_app", convertedOptions);
    return out;
  }
  /** Easily build and sign your app (via _gym_)
   */
  async buildApp(options: {
    /**
     * Path to the workspace file
     * */
    workspace?: string;
    /**
     * Path to the project file
     * */
    project?: string;
    /**
     * The project's scheme. Make sure it's marked as `Shared`
     * */
    scheme?: string;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: boolean;
    /**
     * The directory in which the ipa file should be stored in
     * */
    outputDirectory: string;
    /**
     * The name of the resulting ipa file
     * */
    outputName?: string;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Hide all information that's not necessary while building
     * */
    silent: boolean;
    /**
     * The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
     * */
    codesigningIdentity?: string;
    /**
     * Should we skip packaging the ipa?
     * */
    skipPackageIpa: boolean;
    /**
     * Should we skip packaging the pkg?
     * */
    skipPackagePkg: boolean;
    /**
     * Should the ipa file include symbols?
     * */
    includeSymbols?: boolean;
    /**
     * Should the ipa file include bitcode?
     * */
    includeBitcode?: boolean;
    /**
     * Method used to export the archive. Valid values are: app-store, ad-hoc, package, enterprise, development, developer-id
     * */
    exportMethod?: string;
    /**
     * Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
     * */
    exportOptions?: { string: string };
    /**
     * Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    exportXcargs?: string;
    /**
     * Export ipa from previously built xcarchive. Uses archive_path as source
     * */
    skipBuildArchive?: boolean;
    /**
     * After building, don't archive, effectively not including -archivePath param
     * */
    skipArchive?: boolean;
    /**
     * Build without codesigning
     * */
    skipCodesigning?: boolean;
    /**
     * Platform to build when using a Catalyst enabled app. Valid values are: ios, macos
     * */
    catalystPlatform?: string;
    /**
     * Full name of 3rd Party Mac Developer Installer or Developer ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
     * */
    installerCertName?: string;
    /**
     * The directory in which the archive should be stored in
     * */
    buildPath?: string;
    /**
     * The path to the created archive
     * */
    archivePath?: string;
    /**
     * The directory where built products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: boolean;
    /**
     * Path to the result bundle directory to create. Ignored if `result_bundle` if false
     * */
    resultBundlePath?: string;
    /**
     * The directory where to store the build log
     * */
    buildlogPath: string;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
     * */
    toolchain?: string;
    /**
     * Use a custom destination for building the app
     * */
    destination?: string;
    /**
     * Optional: Sometimes you need to specify a team id when exporting the ipa file
     * */
    exportTeamId?: string;
    /**
     * Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
     * */
    suppressXcodeOutput?: boolean;
    /**
     * Disable xcpretty formatting of build output
     * */
    disableXcpretty?: boolean;
    /**
     * Use the test (RSpec style) format for build output
     * */
    xcprettyTestFormat?: boolean;
    /**
     * A custom xcpretty formatter to use
     * */
    xcprettyFormatter?: string;
    /**
     * Have xcpretty create a JUnit-style XML report at the provided path
     * */
    xcprettyReportJunit?: string;
    /**
     * Have xcpretty create a simple HTML report at the provided path
     * */
    xcprettyReportHtml?: string;
    /**
     * Have xcpretty create a JSON compilation database at the provided path
     * */
    xcprettyReportJson?: string;
    /**
     * Analyze the project build time and store the output in 'culprits.txt' file
     * */
    analyzeBuildTime?: boolean;
    /**
     * Have xcpretty use unicode encoding when reporting builds
     * */
    xcprettyUtf?: boolean;
    /**
     * Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
     * */
    skipProfileDetection?: boolean;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("build_app", convertedOptions);
    return out;
  }
  /** Alias for the `build_app` action but only for iOS
   */
  async buildIosApp(options: {
    /**
     * Path to the workspace file
     * */
    workspace?: string;
    /**
     * Path to the project file
     * */
    project?: string;
    /**
     * The project's scheme. Make sure it's marked as `Shared`
     * */
    scheme?: string;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: boolean;
    /**
     * The directory in which the ipa file should be stored in
     * */
    outputDirectory: string;
    /**
     * The name of the resulting ipa file
     * */
    outputName?: string;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Hide all information that's not necessary while building
     * */
    silent: boolean;
    /**
     * The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
     * */
    codesigningIdentity?: string;
    /**
     * Should we skip packaging the ipa?
     * */
    skipPackageIpa: boolean;
    /**
     * Should the ipa file include symbols?
     * */
    includeSymbols?: boolean;
    /**
     * Should the ipa file include bitcode?
     * */
    includeBitcode?: boolean;
    /**
     * Method used to export the archive. Valid values are: app-store, ad-hoc, package, enterprise, development, developer-id
     * */
    exportMethod?: string;
    /**
     * Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
     * */
    exportOptions?: { string: string };
    /**
     * Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    exportXcargs?: string;
    /**
     * Export ipa from previously built xcarchive. Uses archive_path as source
     * */
    skipBuildArchive?: boolean;
    /**
     * After building, don't archive, effectively not including -archivePath param
     * */
    skipArchive?: boolean;
    /**
     * Build without codesigning
     * */
    skipCodesigning?: boolean;
    /**
     * The directory in which the archive should be stored in
     * */
    buildPath?: string;
    /**
     * The path to the created archive
     * */
    archivePath?: string;
    /**
     * The directory where built products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: boolean;
    /**
     * Path to the result bundle directory to create. Ignored if `result_bundle` if false
     * */
    resultBundlePath?: string;
    /**
     * The directory where to store the build log
     * */
    buildlogPath: string;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
     * */
    toolchain?: string;
    /**
     * Use a custom destination for building the app
     * */
    destination?: string;
    /**
     * Optional: Sometimes you need to specify a team id when exporting the ipa file
     * */
    exportTeamId?: string;
    /**
     * Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
     * */
    suppressXcodeOutput?: boolean;
    /**
     * Disable xcpretty formatting of build output
     * */
    disableXcpretty?: boolean;
    /**
     * Use the test (RSpec style) format for build output
     * */
    xcprettyTestFormat?: boolean;
    /**
     * A custom xcpretty formatter to use
     * */
    xcprettyFormatter?: string;
    /**
     * Have xcpretty create a JUnit-style XML report at the provided path
     * */
    xcprettyReportJunit?: string;
    /**
     * Have xcpretty create a simple HTML report at the provided path
     * */
    xcprettyReportHtml?: string;
    /**
     * Have xcpretty create a JSON compilation database at the provided path
     * */
    xcprettyReportJson?: string;
    /**
     * Analyze the project build time and store the output in 'culprits.txt' file
     * */
    analyzeBuildTime?: boolean;
    /**
     * Have xcpretty use unicode encoding when reporting builds
     * */
    xcprettyUtf?: boolean;
    /**
     * Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
     * */
    skipProfileDetection?: boolean;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("build_ios_app", convertedOptions);
    return out;
  }
  /** Alias for the `build_app` action but only for macOS
   */
  async buildMacApp(options: {
    /**
     * Path to the workspace file
     * */
    workspace?: string;
    /**
     * Path to the project file
     * */
    project?: string;
    /**
     * The project's scheme. Make sure it's marked as `Shared`
     * */
    scheme?: string;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: boolean;
    /**
     * The directory in which the ipa file should be stored in
     * */
    outputDirectory: string;
    /**
     * The name of the resulting ipa file
     * */
    outputName?: string;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Hide all information that's not necessary while building
     * */
    silent: boolean;
    /**
     * The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
     * */
    codesigningIdentity?: string;
    /**
     * Should we skip packaging the pkg?
     * */
    skipPackagePkg: boolean;
    /**
     * Should the ipa file include symbols?
     * */
    includeSymbols?: boolean;
    /**
     * Should the ipa file include bitcode?
     * */
    includeBitcode?: boolean;
    /**
     * Method used to export the archive. Valid values are: app-store, ad-hoc, package, enterprise, development, developer-id
     * */
    exportMethod?: string;
    /**
     * Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
     * */
    exportOptions?: { string: string };
    /**
     * Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    exportXcargs?: string;
    /**
     * Export ipa from previously built xcarchive. Uses archive_path as source
     * */
    skipBuildArchive?: boolean;
    /**
     * After building, don't archive, effectively not including -archivePath param
     * */
    skipArchive?: boolean;
    /**
     * Build without codesigning
     * */
    skipCodesigning?: boolean;
    /**
     * Full name of 3rd Party Mac Developer Installer or Developer ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
     * */
    installerCertName?: string;
    /**
     * The directory in which the archive should be stored in
     * */
    buildPath?: string;
    /**
     * The path to the created archive
     * */
    archivePath?: string;
    /**
     * The directory where built products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: boolean;
    /**
     * Path to the result bundle directory to create. Ignored if `result_bundle` if false
     * */
    resultBundlePath?: string;
    /**
     * The directory where to store the build log
     * */
    buildlogPath: string;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
     * */
    toolchain?: string;
    /**
     * Use a custom destination for building the app
     * */
    destination?: string;
    /**
     * Optional: Sometimes you need to specify a team id when exporting the ipa file
     * */
    exportTeamId?: string;
    /**
     * Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
     * */
    suppressXcodeOutput?: boolean;
    /**
     * Disable xcpretty formatting of build output
     * */
    disableXcpretty?: boolean;
    /**
     * Use the test (RSpec style) format for build output
     * */
    xcprettyTestFormat?: boolean;
    /**
     * A custom xcpretty formatter to use
     * */
    xcprettyFormatter?: string;
    /**
     * Have xcpretty create a JUnit-style XML report at the provided path
     * */
    xcprettyReportJunit?: string;
    /**
     * Have xcpretty create a simple HTML report at the provided path
     * */
    xcprettyReportHtml?: string;
    /**
     * Have xcpretty create a JSON compilation database at the provided path
     * */
    xcprettyReportJson?: string;
    /**
     * Analyze the project build time and store the output in 'culprits.txt' file
     * */
    analyzeBuildTime?: boolean;
    /**
     * Have xcpretty use unicode encoding when reporting builds
     * */
    xcprettyUtf?: boolean;
    /**
     * Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
     * */
    skipProfileDetection?: boolean;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("build_mac_app", convertedOptions);
    return out;
  }
  /** This action runs `bundle install` (if available)
   */
  async bundleInstall(options: {
    /**
     * Generate bin stubs for bundled gems to ./bin
     * */
    binstubs?: string;
    /**
     * Run bundle clean automatically after install
     * */
    clean: any;
    /**
     * Use the rubygems modern index instead of the API endpoint
     * */
    fullIndex: any;
    /**
     * Use the specified gemfile instead of Gemfile
     * */
    gemfile?: string;
    /**
     * Install gems using parallel workers
     * */
    jobs?: boolean;
    /**
     * Do not attempt to fetch gems remotely and use the gem cache instead
     * */
    local: any;
    /**
     * Install using defaults tuned for deployment and CI environments
     * */
    deployment: any;
    /**
     * Don't update the existing gem cache
     * */
    noCache: any;
    /**
     * Don't remove stale gems from the cache
     * */
    noPrune: any;
    /**
     * Specify a different path than the system default ($BUNDLE_PATH or $GEM_HOME). Bundler will remember this value for future installs on this machine
     * */
    path?: string;
    /**
     * Install to the system location ($BUNDLE_PATH or $GEM_HOME) even if the bundle was previously installed somewhere else for this application
     * */
    system: any;
    /**
     * Only output warnings and errors
     * */
    quiet: any;
    /**
     * Retry network and git requests that have failed
     * */
    retry?: boolean;
    /**
     * Specify a different shebang executable name than the default (usually 'ruby')
     * */
    shebang?: string;
    /**
     * Make a bundle that can work without the Bundler runtime
     * */
    standalone?: string;
    /**
     * Sets level of security when dealing with signed gems. Accepts `LowSecurity`, `MediumSecurity` and `HighSecurity` as values
     * */
    trustPolicy?: string;
    /**
     * Exclude gems that are part of the specified named group
     * */
    without?: string;
    /**
     * Include gems that are part of the specified named group
     * */
    with?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("bundle_install", convertedOptions);
    return out;
  }
  /** Automated localized screenshots of your Android app (via _screengrab_)
   */
  async captureAndroidScreenshots(options: {
    /**
     * Path to the root of your Android SDK installation, e.g. ~/tools/android-sdk-macosx
     * */
    androidHome?: string;
    /**
     * The Android build tools version to use, e.g. '23.0.2'
     * */
    buildToolsVersion?: string;
    /**
     * A list of locales which should be used
     * */
    locales: string[];
    /**
     * Enabling this option will automatically clear previously generated screenshots before running screengrab
     * */
    clearPreviousScreenshots: boolean;
    /**
     * The directory where to store the screenshots
     * */
    outputDirectory: string;
    /**
     * Don't open the summary after running _screengrab_
     * */
    skipOpenSummary: boolean;
    /**
     * The package name of the app under test (e.g. com.yourcompany.yourapp)
     * */
    appPackageName: string;
    /**
     * The package name of the tests bundle (e.g. com.yourcompany.yourapp.test)
     * */
    testsPackageName?: string;
    /**
     * Only run tests in these Java packages
     * */
    useTestsInPackages?: string[];
    /**
     * Only run tests in these Java classes
     * */
    useTestsInClasses?: string[];
    /**
     * Additional launch arguments
     * */
    launchArguments?: string[];
    /**
     * The fully qualified class name of your test instrumentation runner
     * */
    testInstrumentationRunner?: string;
    /**
     * Return the device to this locale after running tests
     * */
    endingLocale?: string;
    /**
     * Restarts the adb daemon using `adb root` to allow access to screenshots directories on device. Use if getting 'Permission denied' errors
     * */
    useAdbRoot: boolean;
    /**
     * The path to the APK for the app under test
     * */
    appApkPath?: string;
    /**
     * The path to the APK for the the tests bundle
     * */
    testsApkPath?: string;
    /**
     * Use the device or emulator with the given serial number or qualifier
     * */
    specificDevice?: string;
    /**
     * Type of device used for screenshots. Matches Google Play Types (phone, sevenInch, tenInch, tv, wear)
     * */
    deviceType: string;
    /**
     * Whether or not to exit Screengrab on test failure. Exiting on failure will not copy sceenshots to local machine nor open sceenshots summary
     * */
    exitOnTestFailure: boolean;
    /**
     * Enabling this option will automatically uninstall the application before running it
     * */
    reinstallApp: boolean;
    /**
     * Add timestamp suffix to screenshot filename
     * */
    useTimestampSuffix: boolean;
    /**
     * Configure the host used by adb to connect, allows running on remote devices farm
     * */
    adbHost?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction(
      "capture_android_screenshots",
      convertedOptions
    );
    return out;
  }
  /** Generate new localized screenshots on multiple devices (via _snapshot_)
   */
  async captureIosScreenshots(options: {
    /**
     * Path the workspace file
     * */
    workspace?: string;
    /**
     * Path the project file
     * */
    project?: string;
    /**
     * Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * A list of devices you want to take the screenshots from
     * */
    devices?: string[];
    /**
     * A list of languages which should be used
     * */
    languages: string[];
    /**
     * A list of launch arguments which should be used
     * */
    launchArguments: string[];
    /**
     * The directory where to store the screenshots
     * */
    outputDirectory: string;
    /**
     * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
     * */
    outputSimulatorLogs?: boolean;
    /**
     * By default, the latest version should be used automatically. If you want to change it, do it here
     * */
    iosVersion?: string;
    /**
     * Don't open the HTML summary after running _snapshot_
     * */
    skipOpenSummary: any;
    /**
     * Do not check for most recent SnapshotHelper code
     * */
    skipHelperVersionCheck: any;
    /**
     * Enabling this option will automatically clear previously generated screenshots before running snapshot
     * */
    clearPreviousScreenshots: any;
    /**
     * Enabling this option will automatically uninstall the application before running it
     * */
    reinstallApp: any;
    /**
     * Enabling this option will automatically erase the simulator before running the application
     * */
    eraseSimulator: any;
    /**
     * Enabling this option wil automatically override the status bar to show 9:41 AM, full battery, and full reception
     * */
    overrideStatusBar: any;
    /**
     * Enabling this option will configure the Simulator's system language
     * */
    localizeSimulator: any;
    /**
     * Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
     * */
    darkMode?: boolean;
    /**
     * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
     * */
    appIdentifier?: string;
    /**
     * A list of photos that should be added to the simulator before running the application
     * */
    addPhotos?: string[];
    /**
     * A list of videos that should be added to the simulator before running the application
     * */
    addVideos?: string[];
    /**
     * A path to screenshots.html template
     * */
    htmlTemplate?: string;
    /**
     * The directory where to store the build log
     * */
    buildlogPath: string;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: any;
    /**
     * Test without building, requires a derived data path
     * */
    testWithoutBuilding?: boolean;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Additional xcpretty arguments
     * */
    xcprettyArgs?: string;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The scheme you want to use, this must be the scheme for the UI Tests
     * */
    scheme?: string;
    /**
     * The number of times a test can fail before snapshot should stop retrying
     * */
    numberOfRetries: any;
    /**
     * Should snapshot stop immediately after the tests completely failed on one device?
     * */
    stopAfterFirstError: any;
    /**
     * The directory where build products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: any;
    /**
     * The name of the target you want to test (if you desire to override the Target Application from Xcode)
     * */
    testTargetName?: string;
    /**
     * Separate the log files per device and per language
     * */
    namespaceLogFiles?: any;
    /**
     * Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
     * */
    concurrentSimulators: any;
    /**
     * Disable the simulator from showing the 'Slide to type' prompt
     * */
    disableSlideToType?: any;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
    /**
     * The testplan associated with the scheme that should be used for testing
     * */
    testplan?: string;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to run
     * */
    onlyTesting?: any;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
     * */
    skipTesting?: any;
    /**
     * Disable xcpretty formatting of build
     * */
    disableXcpretty?: boolean;
  }): Promise<any> {
    const convertedOptions = {
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
      override_status_bar: options.overrideStatusBar,
      localize_simulator: options.localizeSimulator,
      dark_mode: options.darkMode,
      app_identifier: options.appIdentifier,
      add_photos: options.addPhotos,
      add_videos: options.addVideos,
      html_template: options.htmlTemplate,
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
      only_testing: options.onlyTesting,
      skip_testing: options.skipTesting,
      disable_xcpretty: options.disableXcpretty,
    };

    const out = await this.doAction(
      "capture_ios_screenshots",
      convertedOptions
    );
    return out;
  }
  /** Alias for the [[`captureIosScreenshots`]] action
   */
  async captureScreenshots(options: {
    /**
     * Path the workspace file
     * */
    workspace?: string;
    /**
     * Path the project file
     * */
    project?: string;
    /**
     * Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * A list of devices you want to take the screenshots from
     * */
    devices?: string[];
    /**
     * A list of languages which should be used
     * */
    languages: string[];
    /**
     * A list of launch arguments which should be used
     * */
    launchArguments: string[];
    /**
     * The directory where to store the screenshots
     * */
    outputDirectory: string;
    /**
     * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
     * */
    outputSimulatorLogs?: boolean;
    /**
     * By default, the latest version should be used automatically. If you want to change it, do it here
     * */
    iosVersion?: string;
    /**
     * Don't open the HTML summary after running _snapshot_
     * */
    skipOpenSummary: any;
    /**
     * Do not check for most recent SnapshotHelper code
     * */
    skipHelperVersionCheck: any;
    /**
     * Enabling this option will automatically clear previously generated screenshots before running snapshot
     * */
    clearPreviousScreenshots: any;
    /**
     * Enabling this option will automatically uninstall the application before running it
     * */
    reinstallApp: any;
    /**
     * Enabling this option will automatically erase the simulator before running the application
     * */
    eraseSimulator: any;
    /**
     * Enabling this option wil automatically override the status bar to show 9:41 AM, full battery, and full reception
     * */
    overrideStatusBar: any;
    /**
     * Enabling this option will configure the Simulator's system language
     * */
    localizeSimulator: any;
    /**
     * Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
     * */
    darkMode?: boolean;
    /**
     * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
     * */
    appIdentifier?: string;
    /**
     * A list of photos that should be added to the simulator before running the application
     * */
    addPhotos?: string[];
    /**
     * A list of videos that should be added to the simulator before running the application
     * */
    addVideos?: string[];
    /**
     * A path to screenshots.html template
     * */
    htmlTemplate?: string;
    /**
     * The directory where to store the build log
     * */
    buildlogPath: string;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: any;
    /**
     * Test without building, requires a derived data path
     * */
    testWithoutBuilding?: boolean;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Additional xcpretty arguments
     * */
    xcprettyArgs?: string;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The scheme you want to use, this must be the scheme for the UI Tests
     * */
    scheme?: string;
    /**
     * The number of times a test can fail before snapshot should stop retrying
     * */
    numberOfRetries: any;
    /**
     * Should snapshot stop immediately after the tests completely failed on one device?
     * */
    stopAfterFirstError: any;
    /**
     * The directory where build products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: any;
    /**
     * The name of the target you want to test (if you desire to override the Target Application from Xcode)
     * */
    testTargetName?: string;
    /**
     * Separate the log files per device and per language
     * */
    namespaceLogFiles?: any;
    /**
     * Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
     * */
    concurrentSimulators: any;
    /**
     * Disable the simulator from showing the 'Slide to type' prompt
     * */
    disableSlideToType?: any;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
    /**
     * The testplan associated with the scheme that should be used for testing
     * */
    testplan?: string;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to run
     * */
    onlyTesting?: any;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
     * */
    skipTesting?: any;
    /**
     * Disable xcpretty formatting of build
     * */
    disableXcpretty?: boolean;
  }): Promise<any> {
    const convertedOptions = {
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
      override_status_bar: options.overrideStatusBar,
      localize_simulator: options.localizeSimulator,
      dark_mode: options.darkMode,
      app_identifier: options.appIdentifier,
      add_photos: options.addPhotos,
      add_videos: options.addVideos,
      html_template: options.htmlTemplate,
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
      only_testing: options.onlyTesting,
      skip_testing: options.skipTesting,
      disable_xcpretty: options.disableXcpretty,
    };

    const out = await this.doAction("capture_screenshots", convertedOptions);
    return out;
  }
  /** Runs `carthage` for your project
   */
  async carthage(options: {
    /**
     * Carthage command (one of: build, bootstrap, update, archive)
     * */
    command: string;
    /**
     * Carthage dependencies to update, build or bootstrap
     * */
    dependencies: string[];
    /**
     * Use SSH for downloading GitHub repositories
     * */
    useSsh?: boolean;
    /**
     * Add dependencies as Git submodules
     * */
    useSubmodules?: boolean;
    /**
     * Check out dependency repositories even when prebuilt frameworks exist
     * */
    useBinaries?: boolean;
    /**
     * When bootstrapping Carthage do not checkout
     * */
    noCheckout?: boolean;
    /**
     * When bootstrapping Carthage do not build
     * */
    noBuild?: boolean;
    /**
     * Don't skip building the Carthage project (in addition to its dependencies)
     * */
    noSkipCurrent?: boolean;
    /**
     * Use derived data folder at path
     * */
    derivedData?: string;
    /**
     * Print xcodebuild output inline
     * */
    verbose?: boolean;
    /**
     * Define which platform to build for
     * */
    platform?: string;
    /**
     * By default Carthage will rebuild a dependency regardless of whether it's the same resolved version as before. Passing the --cache-builds will cause carthage to avoid rebuilding a dependency if it can
     * */
    cacheBuilds: any;
    /**
     * Framework name or names to archive, could be applied only along with the archive command
     * */
    frameworks: string[];
    /**
     * Output name for the archive, could be applied only along with the archive command. Use following format *.framework.zip
     * */
    output?: string;
    /**
     * Define which build configuration to use when building
     * */
    configuration?: string;
    /**
     * Define which xcodebuild toolchain to use when building
     * */
    toolchain?: string;
    /**
     * Define the directory containing the Carthage project
     * */
    projectDirectory?: string;
    /**
     * Use new resolver when resolving dependency graph
     * */
    newResolver?: boolean;
    /**
     * Path to the xcode build output
     * */
    logPath?: string;
    /**
     * Path to the `carthage` executable on your machine
     * */
    executable: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("carthage", convertedOptions);
    return out;
  }
  /** Alias for the [[`getCertificates`]] action
   */
  async cert(options: {
    /**
     * Create a development certificate instead of a distribution one
     * */
    development: boolean;
    /**
     * Create specific certificate type (takes precedence over :development)
     * */
    type?: string;
    /**
     * Create a certificate even if an existing certificate exists
     * */
    force: boolean;
    /**
     * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
     * */
    generateAppleCerts: boolean;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The filename of certificate to store
     * */
    filename?: string;
    /**
     * The path to a directory in which all certificates and private keys should be stored
     * */
    outputPath: string;
    /**
     * Path to a custom keychain
     * */
    keychainPath: string;
    /**
     * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your account password
     * */
    keychainPassword?: string;
    /**
     * Set the provisioning profile's platform (ios, macos)
     * */
    platform: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("cert", convertedOptions);
    return out;
  }
  /** Collect git commit messages into a changelog
   */
  async changelogFromGitCommits(options: {
    /**
     * Array containing two Git revision values between which to collect messages, you mustn't use it with :commits_count key at the same time
     * */
    between?: any;
    /**
     * Number of commits to include in changelog, you mustn't use it with :between key at the same time
     * */
    commitsCount?: any;
    /**
     * Path of the git repository
     * */
    path?: string;
    /**
     * The format applied to each commit while generating the collected value
     * */
    pretty?: string;
    /**
     * The date format applied to each commit while generating the collected value
     * */
    dateFormat?: string;
    /**
     * Whether or not to use ancestry-path param
     * */
    ancestryPath?: any;
    /**
     * A glob(7) pattern to match against when finding the last git tag
     * */
    tagMatchPattern?: string;
    /**
     * Whether or not to match a lightweight tag when searching for the last one
     * */
    matchLightweightTag?: any;
    /**
     * Whether or not to disable changelog output
     * */
    quiet?: any;
    /**
     * **DEPRECATED!** Use `:merge_commit_filtering` instead - Whether or not to include any commits that are merges
     * */
    includeMerges?: boolean;
    /**
     * Controls inclusion of merge commits when collecting the changelog. Valid values: `:include_merges`, `:exclude_merges`, `:only_include_merges`
     * */
    mergeCommitFiltering?: string;
  }): Promise<string> {
    const convertedOptions = {
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

    const out = await this.doAction(
      "changelog_from_git_commits",
      convertedOptions
    );
    return out;
  }
  /** Send a success/error message to [ChatWork](https://go.chatwork.com/)
   */
  async chatwork(options: {
    /**
     * ChatWork API Token
     * */
    apiToken: string;
    /**
     * The message to post on ChatWork
     * */
    message: string;
    /**
     * The room ID
     * */
    roomid: any;
    /**
     * Was this build successful? (true/false)
     * */
    success?: any;
  }): Promise<any> {
    const convertedOptions = {
      api_token: options.apiToken,
      message: options.message,
      roomid: options.roomid,
      success: options.success,
    };

    const out = await this.doAction("chatwork", convertedOptions);
    return out;
  }
  /** Check your app's metadata before you submit your app to review (via _precheck_)
   */
  async checkAppStoreMetadata(options: {
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The default rule level unless otherwise configured
     * */
    defaultRuleLevel: any;
    /**
     * Should check in-app purchases?
     * */
    includeInAppPurchases?: any;
    /**
     * mentioning  in a way that could be considered negative
     * */
    negativeAppleSentiment?: any;
    /**
     * using placeholder text (e.g.:"lorem ipsum", "text here", etc...)
     * */
    placeholderText?: any;
    /**
     * mentioning other platforms, like Android or Blackberry
     * */
    otherPlatforms?: any;
    /**
     * mentioning features or content that is not currently available in your app
     * */
    futureFunctionality?: any;
    /**
     * using text indicating this release is a test
     * */
    testWords?: any;
    /**
     * including words that might be considered objectionable
     * */
    curseWords?: any;
    /**
     * using text indicating that your IAP is free
     * */
    freeStuffInIap?: any;
    /**
     * mentioning any of the user-specified words passed to custom_text(data: [words])
     * */
    customText?: any;
    /**
     * using a copyright date that is any different from this current year, or missing a date
     * */
    copyrightDate?: any;
    /**
     * unreachable URLs in app metadata
     * */
    unreachableUrls?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction(
      "check_app_store_metadata",
      convertedOptions
    );
    return out;
  }
  /** Deletes files created as result of running gym, cert, sigh or download_dsyms
   */
  async cleanBuildArtifacts(options: {
    /**
     * Exclude all files from clearing that match the given Regex pattern: e.g. '.*.mobileprovision'
     * */
    excludePattern?: string;
  }): Promise<any> {
    const convertedOptions = { exclude_pattern: options.excludePattern };

    const out = await this.doAction("clean_build_artifacts", convertedOptions);
    return out;
  }
  /** Remove the cache for pods
   */
  async cleanCocoapodsCache(options: {
    /**
     * Pod name to be removed from cache
     * */
    name?: string;
  }): Promise<any> {
    const convertedOptions = { name: options.name };

    const out = await this.doAction("clean_cocoapods_cache", convertedOptions);
    return out;
  }
  /** Deletes the Xcode Derived Data
   */
  async clearDerivedData(options: {
    /**
     * Custom path for derivedData
     * */
    derivedDataPath: string;
  }): Promise<any> {
    const convertedOptions = { derived_data_path: options.derivedDataPath };

    const out = await this.doAction("clear_derived_data", convertedOptions);
    return out;
  }
  /** Copies a given string into the clipboard. Works only on macOS
   */
  async clipboard(options: {
    /**
     * The string that should be copied into the clipboard
     * */
    value: string;
  }): Promise<any> {
    const convertedOptions = { value: options.value };

    const out = await this.doAction("clipboard", convertedOptions);
    return out;
  }
  /** Generates a Code Count that can be read by Jenkins (xml format)
   */
  async cloc(options: {
    /**
     * Where the cloc binary lives on your system (full path including 'cloc')
     * */
    binaryPath?: string;
    /**
     * Comma separated list of directories to exclude
     * */
    excludeDir?: string;
    /**
     * Where to put the generated report file
     * */
    outputDirectory: string;
    /**
     * Where to look for the source code (relative to the project root folder)
     * */
    sourceDirectory: string;
    /**
     * Should we generate an XML File (if false, it will generate a plain text file)?
     * */
    xml: any;
  }): Promise<any> {
    const convertedOptions = {
      binary_path: options.binaryPath,
      exclude_dir: options.excludeDir,
      output_directory: options.outputDirectory,
      source_directory: options.sourceDirectory,
      xml: options.xml,
    };

    const out = await this.doAction("cloc", convertedOptions);
    return out;
  }
  /** Runs `pod install` for the project
   */
  async cocoapods(options: {
    /**
     * Add `--repo-update` flag to `pod install` command
     * */
    repoUpdate: any;
    /**
     * Execute a full pod installation ignoring the content of the project cache
     * */
    cleanInstall: any;
    /**
     * Execute command without logging output
     * */
    silent: any;
    /**
     * Show more debugging information
     * */
    verbose: any;
    /**
     * Show output with ANSI codes
     * */
    ansi: any;
    /**
     * Use bundle exec when there is a Gemfile presented
     * */
    useBundleExec: any;
    /**
     * Explicitly specify the path to the Cocoapods' Podfile. You can either set it to the Podfile's path or to the folder containing the Podfile file
     * */
    podfile?: string;
    /**
     * A callback invoked with the command output if there is a non-zero exit status
     * */
    errorCallback?: any;
    /**
     * Retry with --repo-update if action was finished with error
     * */
    tryRepoUpdateOnError?: boolean;
    /**
     * Disallow any changes to the Podfile or the Podfile.lock during installation
     * */
    deployment?: boolean;
    /**
     * **DEPRECATED!** (Option renamed as clean_install) Remove SCM directories
     * */
    clean?: any;
    /**
     * **DEPRECATED!** (Option removed from cocoapods) Integrate the Pods libraries into the Xcode project(s)
     * */
    integrate?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("cocoapods", convertedOptions);
    return out;
  }
  /** This will commit a file directly on GitHub via the API
   */
  async commitGithubFile(options: {
    /**
     * The path to your repo, e.g. 'fastlane/fastlane'
     * */
    repositoryName: string;
    /**
     * The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
     * */
    serverUrl?: string;
    /**
     * Personal API Token for GitHub - generate one at https://github.com/settings/tokens
     * */
    apiToken: string;
    /**
     * The branch that the file should be committed on (default: master)
     * */
    branch?: string;
    /**
     * The relative path to your file from project root e.g. assets/my_app.xcarchive
     * */
    path: string;
    /**
     * The commit message. Defaults to the file name
     * */
    message?: string;
    /**
     * Optionally disable secure requests (ssl_verify_peer)
     * */
    secure?: any;
  }): Promise<any> {
    const convertedOptions = {
      repository_name: options.repositoryName,
      server_url: options.serverUrl,
      api_token: options.apiToken,
      branch: options.branch,
      path: options.path,
      message: options.message,
      secure: options.secure,
    };

    const out = await this.doAction("commit_github_file", convertedOptions);
    return out;
  }
  /** Creates a 'Version Bump' commit. Run after `increment_build_number`
   */
  async commitVersionBump(options: {
    /**
     * The commit message when committing the version bump
     * */
    message?: string;
    /**
     * The path to your project file (Not the workspace). If you have only one, this is optional
     * */
    xcodeproj?: string;
    /**
     * Forces the commit, even if other files than the ones containing the version number have been modified
     * */
    force?: any;
    /**
     * Include Settings.bundle/Root.plist with version bump
     * */
    settings?: any;
    /**
     * A regular expression used to filter matched plist files to be modified
     * */
    ignore?: any;
    /**
     * A list of extra files to be included in the version bump (string array or comma-separated string)
     * */
    include?: string[];
    /**
     * Whether or not to use --no-verify
     * */
    noVerify: boolean;
  }): Promise<any> {
    const convertedOptions = {
      message: options.message,
      xcodeproj: options.xcodeproj,
      force: options.force,
      settings: options.settings,
      ignore: options.ignore,
      include: options.include,
      no_verify: options.noVerify,
    };

    const out = await this.doAction("commit_version_bump", convertedOptions);
    return out;
  }
  /** Copy and save your build artifacts (useful when you use reset_git_repo)
   */
  async copyArtifacts(options: {
    /**
     * Set this to false if you want move, rather than copy, the found artifacts
     * */
    keepOriginal?: any;
    /**
     * The directory in which you want your artifacts placed
     * */
    targetPath: any;
    /**
     * An array of file patterns of the files/folders you want to preserve
     * */
    artifacts: any;
    /**
     * Fail when a source file isn't found
     * */
    failOnMissing?: any;
  }): Promise<any> {
    const convertedOptions = {
      keep_original: options.keepOriginal,
      target_path: options.targetPath,
      artifacts: options.artifacts,
      fail_on_missing: options.failOnMissing,
    };

    const out = await this.doAction("copy_artifacts", convertedOptions);
    return out;
  }
  /** Refer to [Firebase App Distribution](https://appdistro.page.link/fastlane-repo)
   */
  async crashlytics(options: {
    /**
     * Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action
     * */
    ipaPath?: string;
    /**
     * Path to your APK file
     * */
    apkPath?: string;
    /**
     * Path to the submit binary in the Crashlytics bundle (iOS) or `crashlytics-devtools.jar` file (Android)
     * */
    crashlyticsPath?: string;
    /**
     * Crashlytics API Key
     * */
    apiToken: string;
    /**
     * Crashlytics Build Secret
     * */
    buildSecret: string;
    /**
     * Path to the release notes
     * */
    notesPath?: string;
    /**
     * The release notes as string - uses :notes_path under the hood
     * */
    notes?: string;
    /**
     * The groups used for distribution, separated by commas
     * */
    groups?: any;
    /**
     * Pass email addresses of testers, separated by commas
     * */
    emails?: any;
    /**
     * Crashlytics notification option (true/false)
     * */
    notifications: any;
    /**
     * Crashlytics debug option (true/false)
     * */
    debug: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("crashlytics", convertedOptions);
    return out;
  }
  /** Create Managed Google Play Apps
   */
  async createAppOnManagedPlayStore(options: {
    /**
     * The path to a file containing service account JSON, used to authenticate with Google
     * */
    jsonKey?: string;
    /**
     * The raw service account JSON data used to authenticate with Google
     * */
    jsonKeyData?: string;
    /**
     * The ID of your Google Play Console account. Can be obtained from the URL when you log in (`https://play.google.com/apps/publish/?account=...` or when you 'Obtain private app publishing rights' (https://developers.google.com/android/work/play/custom-app-api/get-started#retrieve_the_developer_account_id)
     * */
    developerAccountId: string;
    /**
     * Path to the APK file to upload
     * */
    apk: string;
    /**
     * App Title
     * */
    appTitle: string;
    /**
     * Default app language (e.g. 'en_US')
     * */
    language: string;
    /**
     * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
     * */
    rootUrl?: string;
    /**
     * Timeout for read, open, and send (in seconds)
     * */
    timeout?: any;
  }): Promise<any> {
    const convertedOptions = {
      json_key: options.jsonKey,
      json_key_data: options.jsonKeyData,
      developer_account_id: options.developerAccountId,
      apk: options.apk,
      app_title: options.appTitle,
      language: options.language,
      root_url: options.rootUrl,
      timeout: options.timeout,
    };

    const out = await this.doAction(
      "create_app_on_managed_play_store",
      convertedOptions
    );
    return out;
  }
  /** Creates the given application on iTC and the Dev Portal (via _produce_)
   */
  async createAppOnline(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * App Identifier (Bundle ID, e.g. com.krausefx.app)
     * */
    appIdentifier: string;
    /**
     * App Identifier Suffix (Ignored if App Identifier does not end with .*)
     * */
    bundleIdentifierSuffix?: string;
    /**
     * App Name
     * */
    appName: string;
    /**
     * Initial version number (e.g. '1.0')
     * */
    appVersion?: string;
    /**
     * SKU Number (e.g. '1234')
     * */
    sku: string;
    /**
     * The platform to use (optional)
     * */
    platform?: string;
    /**
     * The platforms to use (optional)
     * */
    platforms?: string[];
    /**
     * Primary Language (e.g. 'English', 'German')
     * */
    language: string;
    /**
     * The name of your company. Only required if it's the first app you create
     * */
    companyName?: string;
    /**
     * Skip the creation of the app on App Store Connect
     * */
    skipItc: any;
    /**
     * Array of App Store Connect users. If provided, you can limit access to this newly created app for users with the App Manager, Developer, Marketer or Sales roles
     * */
    itcUsers?: string[];
    /**
     * **DEPRECATED!** Please use `enable_services` instead - Array with Spaceship App Services
     * */
    enabledFeatures?: any;
    /**
     * Array with Spaceship App Services (e.g. access_wifi: (on|off), app_group: (on|off), apple_pay: (on|off), associated_domains: (on|off), auto_fill_credential: (on|off), data_protection: (complete|unlessopen|untilfirstauth), game_center: (on|off), health_kit: (on|off), home_kit: (on|off), hotspot: (on|off), icloud: (legacy|cloudkit), in_app_purchase: (on|off), inter_app_audio: (on|off), multipath: (on|off), network_extension: (on|off), nfc_tag_reading: (on|off), personal_vpn: (on|off), passbook: (on|off), push_notification: (on|off), siri_kit: (on|off), vpn_configuration: (on|off), wallet: (on|off), wireless_accessory: (on|off))
     * */
    enableServices: any;
    /**
     * Skip the creation of the app on the Apple Developer Portal
     * */
    skipDevcenter: any;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    itcTeamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    itcTeamName?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("create_app_online", convertedOptions);
    return out;
  }
  /** Create a new Keychain
   */
  async createKeychain(options: {
    /**
     * Keychain name
     * */
    name?: string;
    /**
     * Path to keychain
     * */
    path?: string;
    /**
     * Password for the keychain
     * */
    password: string;
    /**
     * Should the newly created Keychain be the new system default keychain
     * */
    defaultKeychain: any;
    /**
     * Unlock keychain after create
     * */
    unlock: any;
    /**
     * timeout interval in seconds. Set `false` if you want to specify "no time-out"
     * */
    timeout: any;
    /**
     * Lock keychain when the system sleeps
     * */
    lockWhenSleeps: any;
    /**
     * Lock keychain after timeout interval
     * */
    lockAfterTimeout: any;
    /**
     * Add keychain to search list
     * */
    addToSearchList: any;
    /**
     * Fail the action if the Keychain already exists
     * */
    requireCreate: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("create_keychain", convertedOptions);
    return out;
  }
  /** This will create a new pull request on GitHub
   */
  async createPullRequest(options: {
    /**
     * Personal API Token for GitHub - generate one at https://github.com/settings/tokens
     * */
    apiToken: string;
    /**
     * The name of the repository you want to submit the pull request to
     * */
    repo: string;
    /**
     * The title of the pull request
     * */
    title: string;
    /**
     * The contents of the pull request
     * */
    body?: string;
    /**
     * Indicates whether the pull request is a draft
     * */
    draft?: boolean;
    /**
     * The labels for the pull request
     * */
    labels?: string[];
    /**
     * The milestone ID (Integer) for the pull request
     * */
    milestone?: any;
    /**
     * The name of the branch where your changes are implemented (defaults to the current branch name)
     * */
    head?: string;
    /**
     * The name of the branch you want your changes pulled into (defaults to `master`)
     * */
    base?: string;
    /**
     * The URL of GitHub API - used when the Enterprise (default to `https://api.github.com`)
     * */
    apiUrl?: string;
    /**
     * The assignees for the pull request
     * */
    assignees?: string[];
    /**
     * The reviewers (slug) for the pull request
     * */
    reviewers?: string[];
    /**
     * The team reviewers (slug) for the pull request
     * */
    teamReviewers?: string[];
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("create_pull_request", convertedOptions);
    return out;
  }
  /** Runs `danger` for the project
   */
  async danger(options: {
    /**
     * Use bundle exec when there is a Gemfile presented
     * */
    useBundleExec: any;
    /**
     * Show more debugging information
     * */
    verbose: any;
    /**
     * The identifier of this Danger instance
     * */
    dangerId?: string;
    /**
     * The location of your Dangerfile
     * */
    dangerfile?: string;
    /**
     * GitHub API token for danger
     * */
    githubApiToken?: string;
    /**
     * Should always fail the build process, defaults to false
     * */
    failOnErrors?: any;
    /**
     * Makes Danger post a new comment instead of editing its previous one
     * */
    newComment?: any;
    /**
     * Makes Danger remove all previous comment and create a new one in the end of the list
     * */
    removePreviousComments?: any;
    /**
     * A branch/tag/commit to use as the base of the diff. [master|dev|stable]
     * */
    base?: string;
    /**
     * A branch/tag/commit to use as the head. [master|dev|stable]
     * */
    head?: string;
    /**
     * Run danger on a specific pull request. e.g. "https://github.com/danger/danger/pull/518"
     * */
    pr?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("danger", convertedOptions);
    return out;
  }
  /** Print out an overview of the lane context values
   */
  async debug(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("debug", convertedOptions);
    return out;
  }
  /** Defines a default platform to not have to specify the platform
   */
  async defaultPlatform(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("default_platform", convertedOptions);
    return out;
  }
  /** Delete keychains and remove them from the search list
   */
  async deleteKeychain(options: {
    /**
     * Keychain name
     * */
    name?: string;
    /**
     * Keychain path
     * */
    keychainPath?: string;
  }): Promise<any> {
    const convertedOptions = {
      name: options.name,
      keychain_path: options.keychainPath,
    };

    const out = await this.doAction("delete_keychain", convertedOptions);
    return out;
  }
  /** Alias for the [[`uploadToAppStore`]] action
   */
  async deliver(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier?: string;
    /**
     * The version that should be edited or created
     * */
    appVersion?: string;
    /**
     * Path to your ipa file
     * */
    ipa?: string;
    /**
     * Path to your pkg file
     * */
    pkg?: string;
    /**
     * If set the given build number (already uploaded to iTC) will be used instead of the current built one
     * */
    buildNumber?: string;
    /**
     * The platform to use (optional)
     * */
    platform?: string;
    /**
     * Modify live metadata, this option disables ipa upload and screenshot upload
     * */
    editLive?: any;
    /**
     * Force usage of live version rather than edit version
     * */
    useLiveVersion: any;
    /**
     * Path to the folder containing the metadata files
     * */
    metadataPath?: string;
    /**
     * Path to the folder containing the screenshots
     * */
    screenshotsPath?: string;
    /**
     * Skip uploading an ipa or pkg to App Store Connect
     * */
    skipBinaryUpload: any;
    /**
     * Don't upload the screenshots
     * */
    skipScreenshots: any;
    /**
     * Don't upload the metadata (e.g. title, description). This will still upload screenshots
     * */
    skipMetadata: any;
    /**
     * Don't update app version for submission
     * */
    skipAppVersionUpdate: any;
    /**
     * Skip the HTML report file verification
     * */
    force: any;
    /**
     * Clear all previously uploaded screenshots before uploading the new ones
     * */
    overwriteScreenshots: any;
    /**
     * Submit the new version for Review after uploading everything
     * */
    submitForReview: any;
    /**
     * Rejects the previously submitted build if it's in a state where it's possible
     * */
    rejectIfPossible: any;
    /**
     * Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
     * */
    automaticRelease: any;
    /**
     * Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
     * */
    autoReleaseDate?: any;
    /**
     * Enable the phased release feature of iTC
     * */
    phasedRelease?: any;
    /**
     * Reset the summary rating when you release a new version of the application
     * */
    resetRatings?: any;
    /**
     * The price tier of this application
     * */
    priceTier?: any;
    /**
     * Path to the app rating's config
     * */
    appRatingConfigPath?: string;
    /**
     * Extra information for the submission (e.g. compliance specifications, IDFA settings)
     * */
    submissionInformation?: any;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
     * */
    devPortalTeamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    devPortalTeamName?: string;
    /**
     * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
     * */
    itcProvider?: string;
    /**
     * Run precheck before submitting to app review
     * */
    runPrecheckBeforeSubmit: any;
    /**
     * The default precheck rule level unless otherwise configured
     * */
    precheckDefaultRuleLevel: any;
    /**
     * An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
     * */
    individualMetadataItems: string[];
    /**
     * Metadata: The path to the app icon
     * */
    appIcon?: string;
    /**
     * Metadata: The path to the Apple Watch app icon
     * */
    appleWatchAppIcon?: string;
    /**
     * Metadata: The copyright notice
     * */
    copyright?: string;
    /**
     * Metadata: The english name of the primary category (e.g. `Business`, `Books`)
     * */
    primaryCategory?: string;
    /**
     * Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
     * */
    secondaryCategory?: string;
    /**
     * Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
     * */
    primaryFirstSubCategory?: string;
    /**
     * Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
     * */
    primarySecondSubCategory?: string;
    /**
     * Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
     * */
    secondaryFirstSubCategory?: string;
    /**
     * Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
     * */
    secondarySecondSubCategory?: string;
    /**
     * Metadata: A hash containing the trade representative contact information
     * */
    tradeRepresentativeContactInformation?: { string: string };
    /**
     * Metadata: A hash containing the review information
     * */
    appReviewInformation?: { string: string };
    /**
     * Metadata: Path to the app review attachment file
     * */
    appReviewAttachmentFile?: string;
    /**
     * Metadata: The localised app description
     * */
    description?: any;
    /**
     * Metadata: The localised app name
     * */
    name?: any;
    /**
     * Metadata: The localised app subtitle
     * */
    subtitle?: { string: string };
    /**
     * Metadata: An array of localised keywords
     * */
    keywords?: { string: string };
    /**
     * Metadata: An array of localised promotional texts
     * */
    promotionalText?: { string: string };
    /**
     * Metadata: Localised release notes for this version
     * */
    releaseNotes?: any;
    /**
     * Metadata: Localised privacy url
     * */
    privacyUrl?: any;
    /**
     * Metadata: Localised Apple TV privacy policy text
     * */
    appleTvPrivacyPolicy?: any;
    /**
     * Metadata: Localised support url
     * */
    supportUrl?: any;
    /**
     * Metadata: Localised marketing url
     * */
    marketingUrl?: any;
    /**
     * Metadata: List of languages to activate
     * */
    languages?: string[];
    /**
     * Ignore errors when invalid languages are found in metadata and screenshot directories
     * */
    ignoreLanguageDirectoryValidation: any;
    /**
     * Should precheck check in-app purchases?
     * */
    precheckIncludeInAppPurchases?: any;
    /**
     * The (spaceship) app ID of the app you want to use/modify
     * */
    app: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("deliver", convertedOptions);
    return out;
  }
  /** Upload a new build to [DeployGate](https://deploygate.com/)
   */
  async deploygate(options: {
    /**
     * Deploygate API Token
     * */
    apiToken: string;
    /**
     * Target username or organization name
     * */
    user: string;
    /**
     * Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action
     * */
    ipa?: string;
    /**
     * Path to your APK file
     * */
    apk?: string;
    /**
     * Release Notes
     * */
    message: string;
    /**
     * Target Distribution Key
     * */
    distributionKey?: string;
    /**
     * Release note for distribution page
     * */
    releaseNote?: string;
    /**
     * Disables Push notification emails
     * */
    disableNotify?: any;
    /**
     * Target Distribution Name
     * */
    distributionName?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("deploygate", convertedOptions);
    return out;
  }
  /** Reads in production secrets set in a dotgpg file and puts them in ENV
   */
  async dotgpgEnvironment(options: {
    /**
     * Path to your gpg file
     * */
    dotgpgFile: string;
  }): Promise<any> {
    const convertedOptions = { dotgpg_file: options.dotgpgFile };

    const out = await this.doAction("dotgpg_environment", convertedOptions);
    return out;
  }
  /** Download a file from a remote server (e.g. JSON file)
   */
  async download(options: {
    /**
     * The URL that should be downloaded
     * */
    url: string;
  }): Promise<any> {
    const convertedOptions = { url: options.url };

    const out = await this.doAction("download", convertedOptions);
    return out;
  }
  /** Download dSYM files from App Store Connect for Bitcode apps
   */
  async downloadDsyms(options: {
    /**
     * Your Apple ID Username for App Store Connect
     * */
    username: string;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The app platform for dSYMs you wish to download (ios, appletvos)
     * */
    platform?: string;
    /**
     * The app version for dSYMs you wish to download, pass in 'latest' to download only the latest build's dSYMs or 'live' to download only the live version dSYMs
     * */
    version?: string;
    /**
     * The app build_number for dSYMs you wish to download
     * */
    buildNumber?: string;
    /**
     * The minimum app version for dSYMs you wish to download
     * */
    minVersion?: string;
    /**
     * Where to save the download dSYMs, defaults to the current path
     * */
    outputDirectory?: string;
    /**
     * Wait for dSYMs to process
     * */
    waitForDsymProcessing?: boolean;
    /**
     * Number of seconds to wait for dSYMs to process
     * */
    waitTimeout?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("download_dsyms", convertedOptions);
    return out;
  }
  /** Download metadata and binaries from Google Play (via _supply_)
   */
  async downloadFromPlayStore(options: {
    /**
     * The package name of the application to use
     * */
    packageName: string;
    /**
     * Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
     * */
    versionName?: string;
    /**
     * The track of the application to use. The default available tracks are: production, beta, alpha, internal
     * */
    track: string;
    /**
     * Path to the directory containing the metadata files
     * */
    metadataPath?: string;
    /**
     * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
     * */
    key?: string;
    /**
     * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
     * */
    issuer?: string;
    /**
     * The path to a file containing service account JSON, used to authenticate with Google
     * */
    jsonKey?: string;
    /**
     * The raw service account JSON data used to authenticate with Google
     * */
    jsonKeyData?: string;
    /**
     * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
     * */
    rootUrl?: string;
    /**
     * Timeout for read, open, and send (in seconds)
     * */
    timeout?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction(
      "download_from_play_store",
      convertedOptions
    );
    return out;
  }
  /** Creates a zipped dSYM in the project root from the .xcarchive
   */
  async dsymZip(options: {
    /**
     * Path to your xcarchive file. Optional if you use the `xcodebuild` action
     * */
    archivePath?: string;
    /**
     * Path for generated dsym. Optional, default is your apps root directory
     * */
    dsymPath?: string;
    /**
     * Whether or not all dSYM files are to be included. Optional, default is false in which only your app dSYM is included
     * */
    all?: any;
  }): Promise<any> {
    const convertedOptions = {
      archive_path: options.archivePath,
      dsym_path: options.dsymPath,
      all: options.all,
    };

    const out = await this.doAction("dsym_zip", convertedOptions);
    return out;
  }
  /** Alias for the [[`puts`]] action
   */
  async echo(options: {
    /**
     * Message to be printed out
     * */
    message?: string;
  }): Promise<any> {
    const convertedOptions = { message: options.message };

    const out = await this.doAction("echo", convertedOptions);
    return out;
  }
  /** Raises an exception if not using `bundle exec` to run fastlane
   */
  async ensureBundleExec(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("ensure_bundle_exec", convertedOptions);
    return out;
  }
  /** Raises an exception if the specified env vars are not set
   */
  async ensureEnvVars(options: {
    /**
     * The environment variables names that should be checked
     * */
    envVars: string[];
  }): Promise<any> {
    const convertedOptions = { env_vars: options.envVars };

    const out = await this.doAction("ensure_env_vars", convertedOptions);
    return out;
  }
  /** Raises an exception if not on a specific git branch
   */
  async ensureGitBranch(options: {
    /**
     * The branch that should be checked for. String that can be either the full name of the branch or a regex e.g. `^feature/.*$` to match
     * */
    branch: string;
  }): Promise<any> {
    const convertedOptions = { branch: options.branch };

    const out = await this.doAction("ensure_git_branch", convertedOptions);
    return out;
  }
  /** Raises an exception if there are uncommitted git changes
   */
  async ensureGitStatusClean(options: {
    /**
     * The flag whether to show uncommitted changes if the repo is dirty
     * */
    showUncommittedChanges?: any;
    /**
     * The flag whether to show the git diff if the repo is dirty
     * */
    showDiff?: any;
  }): Promise<any> {
    const convertedOptions = {
      show_uncommitted_changes: options.showUncommittedChanges,
      show_diff: options.showDiff,
    };

    const out = await this.doAction(
      "ensure_git_status_clean",
      convertedOptions
    );
    return out;
  }
  /** Ensures the given text is nowhere in the code base
   */
  async ensureNoDebugCode(options: {
    /**
     * The text that must not be in the code base
     * */
    text: string;
    /**
     * The directory containing all the source files
     * */
    path: string;
    /**
     * The extension that should be searched for
     * */
    extension?: string;
    /**
     * An array of file extensions that should be searched for
     * */
    extensions?: any;
    /**
     * Exclude a certain pattern from the search
     * */
    exclude?: string;
    /**
     * An array of dirs that should not be included in the search
     * */
    excludeDirs?: string[];
  }): Promise<any> {
    const convertedOptions = {
      text: options.text,
      path: options.path,
      extension: options.extension,
      extensions: options.extensions,
      exclude: options.exclude,
      exclude_dirs: options.excludeDirs,
    };

    const out = await this.doAction("ensure_no_debug_code", convertedOptions);
    return out;
  }
  /** Ensure the right version of Xcode is used
   */
  async ensureXcodeVersion(options: {
    /**
     * Xcode version to verify that is selected
     * */
    version?: string;
    /**
     * Should the version be verified strictly (all 3 version numbers), or matching only the given version numbers (i.e. `11.3` == `11.3.x`)
     * */
    strict: boolean;
  }): Promise<any> {
    const convertedOptions = {
      version: options.version,
      strict: options.strict,
    };

    const out = await this.doAction("ensure_xcode_version", convertedOptions);
    return out;
  }
  /** Sets/gets env vars for Fastlane.swift. Don't use in ruby, use `ENV[key] = val`
   */
  async environmentVariable(options: {
    /**
     * Set the environment variables named
     * */
    set?: { string: string };
    /**
     * Get the environment variable named
     * */
    get?: string;
    /**
     * Remove the environment variable named
     * */
    remove?: string;
  }): Promise<string> {
    const convertedOptions = {
      set: options.set,
      get: options.get,
      remove: options.remove,
    };

    const out = await this.doAction("environment_variable", convertedOptions);
    return out;
  }
  /** Allows to Generate output files based on ERB templates
   */
  async erb(options: {
    /**
     * ERB Template File
     * */
    template: string;
    /**
     * Destination file
     * */
    destination?: string;
    /**
     * Placeholders given as a hash
     * */
    placeholders: { string: string };
  }): Promise<any> {
    const convertedOptions = {
      template: options.template,
      destination: options.destination,
      placeholders: options.placeholders,
    };

    const out = await this.doAction("erb", convertedOptions);
    return out;
  }
  /** Alias for the [[`minFastlaneVersion`]] action
   */
  async fastlaneVersion(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("fastlane_version", convertedOptions);
    return out;
  }
  /** Send a message to a [Flock](https://flock.com/) group
   */
  async flock(options: {
    /**
     * Message text
     * */
    message: string;
    /**
     * Token for the Flock incoming webhook
     * */
    token: string;
    /**
     * Base URL of the Flock incoming message webhook
     * */
    baseUrl?: string;
  }): Promise<any> {
    const convertedOptions = {
      message: options.message,
      token: options.token,
      base_url: options.baseUrl,
    };

    const out = await this.doAction("flock", convertedOptions);
    return out;
  }
  /** Adds device frames around all screenshots (via _frameit_)
   */
  async frameScreenshots(options: {
    /**
     * Use white device frames
     * */
    white?: boolean;
    /**
     * Use white device frames. Alias for :white
     * */
    silver?: boolean;
    /**
     * Use rose gold device frames. Alias for :rose_gold
     * */
    roseGold?: boolean;
    /**
     * Use gold device frames. Alias for :gold
     * */
    gold?: boolean;
    /**
     * Forces a given device type, useful for Mac screenshots, as their sizes vary
     * */
    forceDeviceType?: string;
    /**
     * Use iPhone 5s instead of iPhone SE frames
     * */
    useLegacyIphone5s: boolean;
    /**
     * Use iPhone 6s frames instead of iPhone 7 frames
     * */
    useLegacyIphone6s: boolean;
    /**
     * Use iPhone 7 frames instead of iPhone 8 frames
     * */
    useLegacyIphone7: boolean;
    /**
     * Use iPhone X instead of iPhone XS frames
     * */
    useLegacyIphonex: boolean;
    /**
     * Use iPhone XR instead of iPhone 11 frames
     * */
    useLegacyIphonexr: boolean;
    /**
     * Use iPhone XS instead of iPhone 11 Pro frames
     * */
    useLegacyIphonexs: boolean;
    /**
     * Use iPhone XS Max instead of iPhone 11 Pro Max frames
     * */
    useLegacyIphonexsmax: boolean;
    /**
     * [Advanced] A block to customize your screenshots' device orientation
     * */
    forceOrientationBlock?: any;
    /**
     * Output debug information in framed screenshots
     * */
    debugMode: boolean;
    /**
     * Resume frameit instead of reprocessing all screenshots
     * */
    resume: boolean;
    /**
     * Choose a platform, the valid options are IOS, ANDROID and ANY (default is either general platform defined in the fastfile or IOS to ensure backward compatibility)
     * */
    usePlatform?: string;
    /**
     * The path to the directory containing the screenshots
     * */
    path: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("frame_screenshots", convertedOptions);
    return out;
  }
  /** Alias for the [[`frameScreenshots`]] action
   */
  async frameit(options: {
    /**
     * Use white device frames
     * */
    white?: boolean;
    /**
     * Use white device frames. Alias for :white
     * */
    silver?: boolean;
    /**
     * Use rose gold device frames. Alias for :rose_gold
     * */
    roseGold?: boolean;
    /**
     * Use gold device frames. Alias for :gold
     * */
    gold?: boolean;
    /**
     * Forces a given device type, useful for Mac screenshots, as their sizes vary
     * */
    forceDeviceType?: string;
    /**
     * Use iPhone 5s instead of iPhone SE frames
     * */
    useLegacyIphone5s: boolean;
    /**
     * Use iPhone 6s frames instead of iPhone 7 frames
     * */
    useLegacyIphone6s: boolean;
    /**
     * Use iPhone 7 frames instead of iPhone 8 frames
     * */
    useLegacyIphone7: boolean;
    /**
     * Use iPhone X instead of iPhone XS frames
     * */
    useLegacyIphonex: boolean;
    /**
     * Use iPhone XR instead of iPhone 11 frames
     * */
    useLegacyIphonexr: boolean;
    /**
     * Use iPhone XS instead of iPhone 11 Pro frames
     * */
    useLegacyIphonexs: boolean;
    /**
     * Use iPhone XS Max instead of iPhone 11 Pro Max frames
     * */
    useLegacyIphonexsmax: boolean;
    /**
     * [Advanced] A block to customize your screenshots' device orientation
     * */
    forceOrientationBlock?: any;
    /**
     * Output debug information in framed screenshots
     * */
    debugMode: boolean;
    /**
     * Resume frameit instead of reprocessing all screenshots
     * */
    resume: boolean;
    /**
     * Choose a platform, the valid options are IOS, ANDROID and ANY (default is either general platform defined in the fastfile or IOS to ensure backward compatibility)
     * */
    usePlatform?: string;
    /**
     * The path to the directory containing the screenshots
     * */
    path: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("frameit", convertedOptions);
    return out;
  }
  /** Runs test coverage reports for your Xcode project
   */
  async gcovr(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("gcovr", convertedOptions);
    return out;
  }
  /** Get the build number of your project
   */
  async getBuildNumber(options: {
    /**
     * optional, you must specify the path to your main Xcode project if it is not in the project root directory
     * */
    xcodeproj?: string;
    /**
     * Used during `fastlane init` to hide the error message
     * */
    hideErrorWhenVersioningDisabled: boolean;
  }): Promise<string> {
    const convertedOptions = {
      xcodeproj: options.xcodeproj,
      hide_error_when_versioning_disabled:
        options.hideErrorWhenVersioningDisabled,
    };

    const out = await this.doAction("get_build_number", convertedOptions);
    return out;
  }
  /** Get the build number from the current repository
   */
  async getBuildNumberRepository(options: {
    /**
     * Use hg revision number instead of hash (ignored for non-hg repos)
     * */
    useHgRevisionNumber?: any;
  }): Promise<any> {
    const convertedOptions = {
      use_hg_revision_number: options.useHgRevisionNumber,
    };

    const out = await this.doAction(
      "get_build_number_repository",
      convertedOptions
    );
    return out;
  }
  /** Create new iOS code signing certificates (via _cert_)
   */
  async getCertificates(options: {
    /**
     * Create a development certificate instead of a distribution one
     * */
    development: boolean;
    /**
     * Create specific certificate type (takes precedence over :development)
     * */
    type?: string;
    /**
     * Create a certificate even if an existing certificate exists
     * */
    force: boolean;
    /**
     * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
     * */
    generateAppleCerts: boolean;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The filename of certificate to store
     * */
    filename?: string;
    /**
     * The path to a directory in which all certificates and private keys should be stored
     * */
    outputPath: string;
    /**
     * Path to a custom keychain
     * */
    keychainPath: string;
    /**
     * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your account password
     * */
    keychainPassword?: string;
    /**
     * Set the provisioning profile's platform (ios, macos)
     * */
    platform: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("get_certificates", convertedOptions);
    return out;
  }
  /** This will verify if a given release version is available on GitHub
   */
  async getGithubRelease(options: {
    /**
     * The path to your repo, e.g. 'KrauseFx/fastlane'
     * */
    url: string;
    /**
     * The server url. e.g. 'https://your.github.server/api/v3' (Default: 'https://api.github.com')
     * */
    serverUrl?: string;
    /**
     * The version tag of the release to check
     * */
    version: string;
    /**
     * GitHub Personal Token (required for private repositories)
     * */
    apiToken?: string;
  }): Promise<any> {
    const convertedOptions = {
      url: options.url,
      server_url: options.serverUrl,
      version: options.version,
      api_token: options.apiToken,
    };

    const out = await this.doAction("get_github_release", convertedOptions);
    return out;
  }
  /** Returns value from Info.plist of your project as native Ruby data structures
   */
  async getInfoPlistValue(options: {
    /**
     * Name of parameter
     * */
    key: string;
    /**
     * Path to plist file you want to read
     * */
    path: string;
  }): Promise<string> {
    const convertedOptions = { key: options.key, path: options.path };

    const out = await this.doAction("get_info_plist_value", convertedOptions);
    return out;
  }
  /** Returns a value from Info.plist inside a .ipa file
   */
  async getIpaInfoPlistValue(options: {
    /**
     * Name of parameter
     * */
    key: string;
    /**
     * Path to IPA
     * */
    ipa: string;
  }): Promise<string> {
    const convertedOptions = { key: options.key, ipa: options.ipa };

    const out = await this.doAction(
      "get_ipa_info_plist_value",
      convertedOptions
    );
    return out;
  }
  /** Obtain publishing rights for custom apps on Managed Google Play Store
   */
  async getManagedPlayStorePublishingRights(options: {
    /**
     * The path to a file containing service account JSON, used to authenticate with Google
     * */
    jsonKey?: string;
    /**
     * The raw service account JSON data used to authenticate with Google
     * */
    jsonKeyData?: string;
  }): Promise<any> {
    const convertedOptions = {
      json_key: options.jsonKey,
      json_key_data: options.jsonKeyData,
    };

    const out = await this.doAction(
      "get_managed_play_store_publishing_rights",
      convertedOptions
    );
    return out;
  }
  /** Generates a provisioning profile, saving it in the current folder (via _sigh_)
   */
  async getProvisioningProfile(options: {
    /**
     * Setting this flag will generate AdHoc profiles instead of App Store Profiles
     * */
    adhoc: any;
    /**
     * Setting this flag will generate Developer ID profiles instead of App Store Profiles
     * */
    developerId: any;
    /**
     * Renew the development certificate instead of the production one
     * */
    development: any;
    /**
     * By default, the certificate will be added to your local machine. Setting this flag will skip this action
     * */
    skipInstall: any;
    /**
     * Renew provisioning profiles regardless of its state - to automatically add all devices for ad hoc profiles
     * */
    force: any;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The name of the profile that is used on the Apple Developer Portal
     * */
    provisioningName?: string;
    /**
     * Use in combination with :provisioning_name - when true only profiles matching this exact name will be downloaded
     * */
    ignoreProfilesWithDifferentName?: any;
    /**
     * Directory in which the profile should be stored
     * */
    outputPath: string;
    /**
     * The ID of the code signing certificate to use (e.g. 78ADL6LVAA)
     * */
    certId?: string;
    /**
     * The certificate name to use for new profiles, or to renew with. (e.g. "Felix Krause")
     * */
    certOwnerName?: string;
    /**
     * Filename to use for the generated provisioning profile (must include .mobileprovision)
     * */
    filename?: string;
    /**
     * Skips the verification of existing profiles which is useful if you have thousands of profiles
     * */
    skipFetchProfiles: any;
    /**
     * Skips the verification of the certificates for every existing profiles. This will make sure the provisioning profile can be used on the local machine
     * */
    skipCertificateVerification: any;
    /**
     * Set the provisioning profile's platform (i.e. ios, tvos)
     * */
    platform: any;
    /**
     * Only fetch existing profile, don't generate new ones
     * */
    readonly?: any;
    /**
     * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
     * */
    templateName?: string;
    /**
     * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
     * */
    failOnNameTaken?: any;
  }): Promise<any> {
    const convertedOptions = {
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
      fail_on_name_taken: options.failOnNameTaken,
    };

    const out = await this.doAction(
      "get_provisioning_profile",
      convertedOptions
    );
    return out;
  }
  /** Ensure a valid push profile is active, creating a new one if needed (via _pem_)
   */
  async getPushCertificate(options: {
    /**
     * Renew the development push certificate instead of the production one
     * */
    development: any;
    /**
     * Create a Website Push certificate
     * */
    websitePush: any;
    /**
     * Generate a p12 file additionally to a PEM file
     * */
    generateP12: any;
    /**
     * If the current certificate is active for less than this number of days, generate a new one
     * */
    activeDaysLimit: any;
    /**
     * Create a new push certificate, even if the current one is active for 30 (or PEM_ACTIVE_DAYS_LIMIT) more days
     * */
    force: any;
    /**
     * Set to save the private RSA key
     * */
    savePrivateKey: any;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The password that is used for your p12 file
     * */
    p12Password: string;
    /**
     * The file name of the generated .pem file
     * */
    pemName?: string;
    /**
     * The path to a directory in which all certificates and private keys should be stored
     * */
    outputPath: string;
    /**
     * Block that is called if there is a new profile
     * */
    newProfile?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("get_push_certificate", convertedOptions);
    return out;
  }
  /** Get the version number of your project
   */
  async getVersionNumber(options: {
    /**
     * Path to the main Xcode project to read version number from, optional. By default will use the first Xcode project found within the project root directory
     * */
    xcodeproj?: string;
    /**
     * Target name, optional. Will be needed if you have more than one non-test target to avoid being prompted to select one
     * */
    target?: string;
    /**
     * Configuration name, optional. Will be needed if you have altered the configurations from the default or your version number depends on the configuration selected
     * */
    configuration?: string;
  }): Promise<string> {
    const convertedOptions = {
      xcodeproj: options.xcodeproj,
      target: options.target,
      configuration: options.configuration,
    };

    const out = await this.doAction("get_version_number", convertedOptions);
    return out;
  }
  /** Directly add the given file or all files
   */
  async gitAdd(options: {
    /**
     * The file(s) and path(s) you want to add
     * */
    path?: any;
    /**
     * Shell escapes paths (set to false if using wildcards or manually escaping spaces in :path)
     * */
    shellEscape?: any;
    /**
     * **DEPRECATED!** Use `--path` instead - The pathspec you want to add files from
     * */
    pathspec?: string;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      shell_escape: options.shellEscape,
      pathspec: options.pathspec,
    };

    const out = await this.doAction("git_add", convertedOptions);
    return out;
  }
  /** Returns the name of the current git branch, possibly as managed by CI ENV vars
   */
  async gitBranch(options: {}): Promise<string> {
    const convertedOptions = {};

    const out = await this.doAction("git_branch", convertedOptions);
    return out;
  }
  /** Directly commit the given file with the given message
   */
  async gitCommit(options: {
    /**
     * The file you want to commit
     * */
    path: any;
    /**
     * The commit message that should be used
     * */
    message: string;
    /**
     * Set to true to pass --no-verify to git
     * */
    skipGitHooks?: boolean;
    /**
     * Set to true to allow commit without any git changes
     * */
    allowNothingToCommit?: boolean;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      message: options.message,
      skip_git_hooks: options.skipGitHooks,
      allow_nothing_to_commit: options.allowNothingToCommit,
    };

    const out = await this.doAction("git_commit", convertedOptions);
    return out;
  }
  /** Executes a simple git pull command
   */
  async gitPull(options: {
    /**
     * Simply pull the tags, and not bring new commits to the current branch from the remote
     * */
    onlyTags?: any;
  }): Promise<any> {
    const convertedOptions = { only_tags: options.onlyTags };

    const out = await this.doAction("git_pull", convertedOptions);
    return out;
  }
  /** Executes a git submodule command
   */
  async gitSubmoduleUpdate(options: {
    /**
     * Should the submodules be updated recursively
     * */
    recursive: boolean;
    /**
     * Should the submodules be initiated before update
     * */
    init: boolean;
  }): Promise<any> {
    const convertedOptions = {
      recursive: options.recursive,
      init: options.init,
    };

    const out = await this.doAction("git_submodule_update", convertedOptions);
    return out;
  }
  /** Checks if the git tag with the given name exists in the current repo
   */
  async gitTagExists(options: {
    /**
     * The tag name that should be checked
     * */
    tag: string;
    /**
     * Whether to check remote. Defaults to `false`
     * */
    remote?: boolean;
    /**
     * The remote to check. Defaults to `origin`
     * */
    remoteName?: string;
  }): Promise<any> {
    const convertedOptions = {
      tag: options.tag,
      remote: options.remote,
      remote_name: options.remoteName,
    };

    const out = await this.doAction("git_tag_exists", convertedOptions);
    return out;
  }
  /** Call a GitHub API endpoint and get the resulting JSON response
   */
  async githubApi(options: {
    /**
     * The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
     * */
    serverUrl?: string;
    /**
     * Personal API Token for GitHub - generate one at https://github.com/settings/tokens
     * */
    apiToken: string;
    /**
     * The HTTP method. e.g. GET / POST
     * */
    httpMethod?: string;
    /**
     * The request body in JSON or hash format
     * */
    body?: any;
    /**
     * The request body taken verbatim instead of as JSON, useful for file uploads
     * */
    rawBody?: string;
    /**
     * The endpoint path. e.g. '/repos/:owner/:repo/readme'
     * */
    path?: string;
    /**
     * The complete full url - used instead of path. e.g. 'https://uploads.github.com/repos/fastlane...'
     * */
    url?: string;
    /**
     * Optional error handling hash based on status code, or pass '*' to handle all errors
     * */
    errorHandlers?: any;
    /**
     * Optional headers to apply
     * */
    headers?: any;
    /**
     * Optionally disable secure requests (ssl_verify_peer)
     * */
    secure?: boolean;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("github_api", convertedOptions);
    return out;
  }
  /** Retrieves version codes for a Google Play track
   */
  async googlePlayTrackVersionCodes(options: {
    /**
     * The package name of the application to use
     * */
    packageName: string;
    /**
     * The track of the application to use. The default available tracks are: production, beta, alpha, internal
     * */
    track: string;
    /**
     * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
     * */
    key?: string;
    /**
     * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
     * */
    issuer?: string;
    /**
     * The path to a file containing service account JSON, used to authenticate with Google
     * */
    jsonKey?: string;
    /**
     * The raw service account JSON data used to authenticate with Google
     * */
    jsonKeyData?: string;
    /**
     * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
     * */
    rootUrl?: string;
    /**
     * Timeout for read, open, and send (in seconds)
     * */
    timeout?: any;
  }): Promise<any> {
    const convertedOptions = {
      package_name: options.packageName,
      track: options.track,
      key: options.key,
      issuer: options.issuer,
      json_key: options.jsonKey,
      json_key_data: options.jsonKeyData,
      root_url: options.rootUrl,
      timeout: options.timeout,
    };

    const out = await this.doAction(
      "google_play_track_version_codes",
      convertedOptions
    );
    return out;
  }
  /** All gradle related actions, including building and testing your Android app
   */
  async gradle(options: {
    /**
     * The gradle task you want to execute, e.g. `assemble`, `bundle` or `test`. For tasks such as `assembleMyFlavorRelease` you should use gradle(task: 'assemble', flavor: 'Myflavor', build_type: 'Release')
     * */
    task?: string;
    /**
     * The flavor that you want the task for, e.g. `MyFlavor`. If you are running the `assemble` task in a multi-flavor project, and you rely on Actions.lane_context[SharedValues::GRADLE_APK_OUTPUT_PATH] then you must specify a flavor here or else this value will be undefined
     * */
    flavor?: string;
    /**
     * The build type that you want the task for, e.g. `Release`. Useful for some tasks such as `assemble`
     * */
    buildType?: string;
    /**
     * The multiple gradle tasks that you want to execute, e.g. `[assembleDebug, bundleDebug]`
     * */
    tasks?: string[];
    /**
     * All parameter flags you want to pass to the gradle command, e.g. `--exitcode --xml file.xml`
     * */
    flags?: string;
    /**
     * The root directory of the gradle project
     * */
    projectDir: string;
    /**
     * The path to your `gradlew`. If you specify a relative path, it is assumed to be relative to the `project_dir`
     * */
    gradlePath?: string;
    /**
     * Gradle properties to be exposed to the gradle script
     * */
    properties?: any;
    /**
     * Gradle system properties to be exposed to the gradle script
     * */
    systemProperties?: any;
    /**
     * Android serial, which device should be used for this command
     * */
    serial: string;
    /**
     * Control whether the generated Gradle command is printed as output before running it (true/false)
     * */
    printCommand: any;
    /**
     * Control whether the output produced by given Gradle command is printed while running (true/false)
     * */
    printCommandOutput: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("gradle", convertedOptions);
    return out;
  }
  /** Alias for the [[`buildApp`]] action
   */
  async gym(options: {
    /**
     * Path to the workspace file
     * */
    workspace?: string;
    /**
     * Path to the project file
     * */
    project?: string;
    /**
     * The project's scheme. Make sure it's marked as `Shared`
     * */
    scheme?: string;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: boolean;
    /**
     * The directory in which the ipa file should be stored in
     * */
    outputDirectory: string;
    /**
     * The name of the resulting ipa file
     * */
    outputName?: string;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Hide all information that's not necessary while building
     * */
    silent: boolean;
    /**
     * The name of the code signing identity to use. It has to match the name exactly. e.g. 'iPhone Distribution: SunApps GmbH'
     * */
    codesigningIdentity?: string;
    /**
     * Should we skip packaging the ipa?
     * */
    skipPackageIpa: boolean;
    /**
     * Should we skip packaging the pkg?
     * */
    skipPackagePkg: boolean;
    /**
     * Should the ipa file include symbols?
     * */
    includeSymbols?: boolean;
    /**
     * Should the ipa file include bitcode?
     * */
    includeBitcode?: boolean;
    /**
     * Method used to export the archive. Valid values are: app-store, ad-hoc, package, enterprise, development, developer-id
     * */
    exportMethod?: string;
    /**
     * Path to an export options plist or a hash with export options. Use 'xcodebuild -help' to print the full set of available options
     * */
    exportOptions?: { string: string };
    /**
     * Pass additional arguments to xcodebuild for the package phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    exportXcargs?: string;
    /**
     * Export ipa from previously built xcarchive. Uses archive_path as source
     * */
    skipBuildArchive?: boolean;
    /**
     * After building, don't archive, effectively not including -archivePath param
     * */
    skipArchive?: boolean;
    /**
     * Build without codesigning
     * */
    skipCodesigning?: boolean;
    /**
     * Platform to build when using a Catalyst enabled app. Valid values are: ios, macos
     * */
    catalystPlatform?: string;
    /**
     * Full name of 3rd Party Mac Developer Installer or Developer ID Installer certificate. Example: `3rd Party Mac Developer Installer: Your Company (ABC1234XWYZ)`
     * */
    installerCertName?: string;
    /**
     * The directory in which the archive should be stored in
     * */
    buildPath?: string;
    /**
     * The path to the created archive
     * */
    archivePath?: string;
    /**
     * The directory where built products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: boolean;
    /**
     * Path to the result bundle directory to create. Ignored if `result_bundle` if false
     * */
    resultBundlePath?: string;
    /**
     * The directory where to store the build log
     * */
    buildlogPath: string;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The toolchain that should be used for building the application (e.g. com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a)
     * */
    toolchain?: string;
    /**
     * Use a custom destination for building the app
     * */
    destination?: string;
    /**
     * Optional: Sometimes you need to specify a team id when exporting the ipa file
     * */
    exportTeamId?: string;
    /**
     * Pass additional arguments to xcodebuild for the build phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
     * */
    suppressXcodeOutput?: boolean;
    /**
     * Disable xcpretty formatting of build output
     * */
    disableXcpretty?: boolean;
    /**
     * Use the test (RSpec style) format for build output
     * */
    xcprettyTestFormat?: boolean;
    /**
     * A custom xcpretty formatter to use
     * */
    xcprettyFormatter?: string;
    /**
     * Have xcpretty create a JUnit-style XML report at the provided path
     * */
    xcprettyReportJunit?: string;
    /**
     * Have xcpretty create a simple HTML report at the provided path
     * */
    xcprettyReportHtml?: string;
    /**
     * Have xcpretty create a JSON compilation database at the provided path
     * */
    xcprettyReportJson?: string;
    /**
     * Analyze the project build time and store the output in 'culprits.txt' file
     * */
    analyzeBuildTime?: boolean;
    /**
     * Have xcpretty use unicode encoding when reporting builds
     * */
    xcprettyUtf?: boolean;
    /**
     * Do not try to build a profile mapping from the xcodeproj. Match or a manually provided mapping should be used
     * */
    skipProfileDetection?: boolean;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("gym", convertedOptions);
    return out;
  }
  /** This will add a hg tag to the current branch
   */
  async hgAddTag(options: {
    /**
     * Tag to create
     * */
    tag: string;
  }): Promise<any> {
    const convertedOptions = { tag: options.tag };

    const out = await this.doAction("hg_add_tag", convertedOptions);
    return out;
  }
  /** This will commit a version bump to the hg repo
   */
  async hgCommitVersionBump(options: {
    /**
     * The commit message when committing the version bump
     * */
    message: string;
    /**
     * The path to your project file (Not the workspace). If you have only one, this is optional
     * */
    xcodeproj?: string;
    /**
     * Forces the commit, even if other files than the ones containing the version number have been modified
     * */
    force?: any;
    /**
     * A list of dirty files passed in for testing
     * */
    testDirtyFiles?: string;
    /**
     * A list of expected changed files passed in for testing
     * */
    testExpectedFiles?: string;
  }): Promise<any> {
    const convertedOptions = {
      message: options.message,
      xcodeproj: options.xcodeproj,
      force: options.force,
      test_dirty_files: options.testDirtyFiles,
      test_expected_files: options.testExpectedFiles,
    };

    const out = await this.doAction("hg_commit_version_bump", convertedOptions);
    return out;
  }
  /** Raises an exception if there are uncommitted hg changes
   */
  async hgEnsureCleanStatus(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("hg_ensure_clean_status", convertedOptions);
    return out;
  }
  /** This will push changes to the remote hg repository
   */
  async hgPush(options: {
    /**
     * Force push to remote
     * */
    force: any;
    /**
     * The destination to push to
     * */
    destination?: string;
  }): Promise<any> {
    const convertedOptions = {
      force: options.force,
      destination: options.destination,
    };

    const out = await this.doAction("hg_push", convertedOptions);
    return out;
  }
  /** Send a error/success message to [HipChat](https://www.hipchat.com/)
   */
  async hipchat(options: {
    /**
     * The message to post on HipChat
     * */
    message: string;
    /**
     * The room or @username
     * */
    channel: string;
    /**
     * Hipchat API Token
     * */
    apiToken: string;
    /**
     * Specify a custom color, this overrides the success boolean. Can be one of 'yellow', 'red', 'green', 'purple', 'gray', or 'random'
     * */
    customColor?: string;
    /**
     * Was this build successful? (true/false)
     * */
    success?: any;
    /**
     * Version of the Hipchat API. Must be 1 or 2
     * */
    version: string;
    /**
     * Should the people in the room be notified? (true/false)
     * */
    notifyRoom?: any;
    /**
     * The host of the HipChat-Server API
     * */
    apiHost?: string;
    /**
     * Format of the message to post. Must be either 'html' or 'text'
     * */
    messageFormat?: string;
    /**
     * Should html formatted messages include a preformatted header? (true/false)
     * */
    includeHtmlHeader?: any;
    /**
     * Name the message will appear to be sent from
     * */
    from?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("hipchat", convertedOptions);
    return out;
  }
  /** Refer to [App Center](https://github.com/Microsoft/fastlane-plugin-appcenter/)
   */
  async hockey(options: {
    /**
     * Path to your APK file
     * */
    apk?: string;
    /**
     * API Token for Hockey Access
     * */
    apiToken: string;
    /**
     * Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action. For Mac zip the .app. For Android provide path to .apk file. In addition you could use this to upload .msi, .zip, .pkg, etc if you use the 'create_update' mechanism
     * */
    ipa?: string;
    /**
     * Path to your symbols file. For iOS and Mac provide path to app.dSYM.zip. For Android provide path to mappings.txt file
     * */
    dsym?: string;
    /**
     * Set true if you want to create then update your app as opposed to just upload it. You will need the 'public_identifier', 'bundle_version' and 'bundle_short_version'
     * */
    createUpdate: any;
    /**
     * Beta Notes
     * */
    notes: string;
    /**
     * Notify testers? "1" for yes
     * */
    notify: string;
    /**
     * Download status: "1" = No user can download; "2" = Available for download (only possible with full-access token)
     * */
    status: string;
    /**
     * Download status for initial version creation when create_update is true: "1" = No user can download; "2" = Available for download (only possible with full-access token)
     * */
    createStatus: string;
    /**
     * Notes type for your :notes, "0" = Textile, "1" = Markdown (default)
     * */
    notesType: string;
    /**
     * Release type of the app: "0" = Beta (default), "1" = Store, "2" = Alpha, "3" = Enterprise
     * */
    releaseType: string;
    /**
     * Set to "1" to make this update mandatory
     * */
    mandatory: string;
    /**
     * Comma separated list of team ID numbers to which this build will be restricted
     * */
    teams?: string;
    /**
     * Comma separated list of user ID numbers to which this build will be restricted
     * */
    users?: string;
    /**
     * Comma separated list of tags which will receive access to the build
     * */
    tags?: string;
    /**
     * The bundle_short_version of your application, required when using `create_update`
     * */
    bundleShortVersion?: string;
    /**
     * The bundle_version of your application, required when using `create_update`
     * */
    bundleVersion?: string;
    /**
     * App id of the app you are targeting, usually you won't need this value. Required, if `upload_dsym_only` set to `true`
     * */
    publicIdentifier?: string;
    /**
     * The Git commit SHA for this build
     * */
    commitSha?: string;
    /**
     * The URL of your source repository
     * */
    repositoryUrl?: string;
    /**
     * The URL of the build job on your build server
     * */
    buildServerUrl?: string;
    /**
     * Flag to upload only the dSYM file to hockey app
     * */
    uploadDsymOnly: any;
    /**
     * ID for the owner of the app
     * */
    ownerId?: string;
    /**
     * Strategy: 'add' = to add the build as a new build even if it has the same build number (default); 'replace' = to replace a build with the same build number
     * */
    strategy: string;
    /**
     * Request timeout in seconds
     * */
    timeout?: any;
    /**
     * Flag to bypass Hockey CDN when it uploads successfully but reports error
     * */
    bypassCdn: any;
    /**
     * DSA signature for sparkle updates for macOS
     * */
    dsaSignature?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("hockey", convertedOptions);
    return out;
  }
  /** Connect to the [IFTTT Maker Channel](https://ifttt.com/maker)
   */
  async ifttt(options: {
    /**
     * API key
     * */
    apiKey: string;
    /**
     * The name of the event that will be triggered
     * */
    eventName: string;
    /**
     * Extra data sent with the event
     * */
    value1?: string;
    /**
     * Extra data sent with the event
     * */
    value2?: string;
    /**
     * Extra data sent with the event
     * */
    value3?: string;
  }): Promise<any> {
    const convertedOptions = {
      api_key: options.apiKey,
      event_name: options.eventName,
      value1: options.value1,
      value2: options.value2,
      value3: options.value3,
    };

    const out = await this.doAction("ifttt", convertedOptions);
    return out;
  }
  /** Import another Fastfile to use its lanes
   */
  async import(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("import", convertedOptions);
    return out;
  }
  /** Import certificate from inputfile into a keychain
   */
  async importCertificate(options: {
    /**
     * Path to certificate
     * */
    certificatePath: string;
    /**
     * Certificate password
     * */
    certificatePassword?: string;
    /**
     * Keychain the items should be imported to
     * */
    keychainName: string;
    /**
     * Path to the Keychain file to which the items should be imported
     * */
    keychainPath?: string;
    /**
     * The password for the keychain. Note that for the login keychain this is your user's password
     * */
    keychainPassword?: string;
    /**
     * If output should be logged to the console
     * */
    logOutput?: boolean;
  }): Promise<any> {
    const convertedOptions = {
      certificate_path: options.certificatePath,
      certificate_password: options.certificatePassword,
      keychain_name: options.keychainName,
      keychain_path: options.keychainPath,
      keychain_password: options.keychainPassword,
      log_output: options.logOutput,
    };

    const out = await this.doAction("import_certificate", convertedOptions);
    return out;
  }
  /** Import another Fastfile from a remote git repository to use its lanes
   */
  async importFromGit(options: {
    /**
     * The URL of the repository to import the Fastfile from
     * */
    url: string;
    /**
     * The branch or tag to check-out on the repository
     * */
    branch?: string;
    /**
     * The array of additional Fastfiles in the repository
     * */
    dependencies?: string;
    /**
     * The path of the Fastfile in the repository
     * */
    path?: string;
    /**
     * The version to checkout on the repository. Optimistic match operator or multiple conditions can be used to select the latest version within constraints
     * */
    version?: any;
  }): Promise<any> {
    const convertedOptions = {
      url: options.url,
      branch: options.branch,
      dependencies: options.dependencies,
      path: options.path,
      version: options.version,
    };

    const out = await this.doAction("import_from_git", convertedOptions);
    return out;
  }
  /** Increment the build number of your project
   */
  async incrementBuildNumber(options: {
    /**
     * Change to a specific version. When you provide this parameter, Apple Generic Versioning does not have to be enabled
     * */
    buildNumber?: any;
    /**
     * optional, you must specify the path to your main Xcode project if it is not in the project root directory
     * */
    xcodeproj?: string;
  }): Promise<string> {
    const convertedOptions = {
      build_number: options.buildNumber,
      xcodeproj: options.xcodeproj,
    };

    const out = await this.doAction("increment_build_number", convertedOptions);
    return out;
  }
  /** Increment the version number of your project
   */
  async incrementVersionNumber(options: {
    /**
     * The type of this version bump. Available: patch, minor, major
     * */
    bumpType: string;
    /**
     * Change to a specific version. This will replace the bump type value
     * */
    versionNumber?: string;
    /**
     * optional, you must specify the path to your main Xcode project if it is not in the project root directory
     * */
    xcodeproj?: string;
  }): Promise<string> {
    const convertedOptions = {
      bump_type: options.bumpType,
      version_number: options.versionNumber,
      xcodeproj: options.xcodeproj,
    };

    const out = await this.doAction(
      "increment_version_number",
      convertedOptions
    );
    return out;
  }
  /** Installs an .ipa file on a connected iOS-device via usb or wifi
   */
  async installOnDevice(options: {
    /**
     * Extra Commandline arguments passed to ios-deploy
     * */
    extra?: string;
    /**
     * id of the device / if not set defaults to first found device
     * */
    deviceId?: string;
    /**
     * Do not search for devices via WiFi
     * */
    skipWifi?: any;
    /**
     * The IPA file to put on the device
     * */
    ipa?: string;
  }): Promise<any> {
    const convertedOptions = {
      extra: options.extra,
      device_id: options.deviceId,
      skip_wifi: options.skipWifi,
      ipa: options.ipa,
    };

    const out = await this.doAction("install_on_device", convertedOptions);
    return out;
  }
  /** Install provisioning profile from path
   */
  async installProvisioningProfile(options: {
    /**
     * Path to provisioning profile
     * */
    path: string;
  }): Promise<any> {
    const convertedOptions = { path: options.path };

    const out = await this.doAction(
      "install_provisioning_profile",
      convertedOptions
    );
    return out;
  }
  /** Install an Xcode plugin for the current user
   */
  async installXcodePlugin(options: {
    /**
     * URL for Xcode plugin ZIP file
     * */
    url: string;
    /**
     * GitHub repository URL for Xcode plugin
     * */
    github?: string;
  }): Promise<any> {
    const convertedOptions = { url: options.url, github: options.github };

    const out = await this.doAction("install_xcode_plugin", convertedOptions);
    return out;
  }
  /** Upload a new build to [Installr](http://installrapp.com/)
   */
  async installr(options: {
    /**
     * API Token for Installr Access
     * */
    apiToken: string;
    /**
     * Path to your IPA file. Optional if you use the _gym_ or _xcodebuild_ action
     * */
    ipa: string;
    /**
     * Release notes
     * */
    notes?: string;
    /**
     * Groups to notify (e.g. 'dev,qa')
     * */
    notify?: string;
    /**
     * Groups to add (e.g. 'exec,ops')
     * */
    add?: string;
  }): Promise<any> {
    const convertedOptions = {
      api_token: options.apiToken,
      ipa: options.ipa,
      notes: options.notes,
      notify: options.notify,
      add: options.add,
    };

    const out = await this.doAction("installr", convertedOptions);
    return out;
  }
  /** Easily build and sign your app using shenzhen
   */
  async ipa(options: {
    /**
     * WORKSPACE Workspace (.xcworkspace) file to use to build app (automatically detected in current directory)
     * */
    workspace?: string;
    /**
     * Project (.xcodeproj) file to use to build app (automatically detected in current directory, overridden by --workspace option, if passed)
     * */
    project?: string;
    /**
     * Configuration used to build
     * */
    configuration?: string;
    /**
     * Scheme used to build app
     * */
    scheme?: string;
    /**
     * Clean project before building
     * */
    clean?: any;
    /**
     * Archive project after building
     * */
    archive?: any;
    /**
     * Build destination. Defaults to current directory
     * */
    destination?: string;
    /**
     * Sign .ipa file with .mobileprovision
     * */
    embed?: string;
    /**
     * Identity to be used along with --embed
     * */
    identity?: string;
    /**
     * Use SDK as the name or path of the base SDK when building the project
     * */
    sdk?: string;
    /**
     * Specify the name of the .ipa file to generate (including file extension)
     * */
    ipa?: string;
    /**
     * Use an extra XCCONFIG file to build the app
     * */
    xcconfig?: string;
    /**
     * Pass additional arguments to xcodebuild when building the app. Be sure to quote multiple args
     * */
    xcargs?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("ipa", convertedOptions);
    return out;
  }
  /** Is the current run being executed on a CI system, like Jenkins or Travis
   */
  async isCi(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("is_ci", convertedOptions);
    return out;
  }
  /** Generate docs using Jazzy
   */
  async jazzy(options: {
    /**
     * Path to jazzy config file
     * */
    config?: string;
  }): Promise<any> {
    const convertedOptions = { config: options.config };

    const out = await this.doAction("jazzy", convertedOptions);
    return out;
  }
  /** Leave a comment on JIRA tickets
   */
  async jira(options: {
    /**
     * URL for Jira instance
     * */
    url: string;
    /**
     * Appends to the url (ex: "/jira")
     * */
    contextPath?: string;
    /**
     * Username for JIRA instance
     * */
    username: string;
    /**
     * Password for Jira
     * */
    password: string;
    /**
     * Ticket ID for Jira, i.e. IOS-123
     * */
    ticketId: string;
    /**
     * Text to add to the ticket as a comment
     * */
    commentText: string;
  }): Promise<any> {
    const convertedOptions = {
      url: options.url,
      context_path: options.contextPath,
      username: options.username,
      password: options.password,
      ticket_id: options.ticketId,
      comment_text: options.commentText,
    };

    const out = await this.doAction("jira", convertedOptions);
    return out;
  }
  /** Access lane context values
   */
  async laneContext(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("lane_context", convertedOptions);
    return out;
  }
  /** Return last git commit hash, abbreviated commit hash, commit message and author
   */
  async lastGitCommit(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("last_git_commit", convertedOptions);
    return out;
  }
  /** Get the most recent git tag
   */
  async lastGitTag(options: {
    /**
     * Pattern to filter tags when looking for last one. Limit tags to ones matching given shell glob. If pattern lacks ?, *, or [, * at the end is implied
     * */
    pattern?: string;
  }): Promise<string> {
    const convertedOptions = { pattern: options.pattern };

    const out = await this.doAction("last_git_tag", convertedOptions);
    return out;
  }
  /** Fetches most recent build number from TestFlight
   */
  async latestTestflightBuildNumber(options: {
    /**
     * Query the live version (ready-for-sale)
     * */
    live?: any;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The version number whose latest build number we want
     * */
    version?: string;
    /**
     * The platform to use (optional)
     * */
    platform?: string;
    /**
     * sets the build number to given value if no build is in current train
     * */
    initialBuildNumber: any;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
  }): Promise<any> {
    const convertedOptions = {
      live: options.live,
      app_identifier: options.appIdentifier,
      username: options.username,
      version: options.version,
      platform: options.platform,
      initial_build_number: options.initialBuildNumber,
      team_id: options.teamId,
      team_name: options.teamName,
    };

    const out = await this.doAction(
      "latest_testflight_build_number",
      convertedOptions
    );
    return out;
  }
  /** Generates coverage data using lcov
   */
  async lcov(options: {
    /**
     * Name of the project
     * */
    projectName: string;
    /**
     * Scheme of the project
     * */
    scheme: string;
    /**
     * The build arch where will search .gcda files
     * */
    arch: string;
    /**
     * The output directory that coverage data will be stored. If not passed will use coverage_reports as default value
     * */
    outputDir?: string;
  }): Promise<any> {
    const convertedOptions = {
      project_name: options.projectName,
      scheme: options.scheme,
      arch: options.arch,
      output_dir: options.outputDir,
    };

    const out = await this.doAction("lcov", convertedOptions);
    return out;
  }
  /** Send a success/error message to an email group
   */
  async mailgun(options: {
    /**
     * Mailgun sandbox domain postmaster for your mail. Please use postmaster instead
     * */
    mailgunSandboxDomain?: string;
    /**
     * Mailgun sandbox domain postmaster for your mail. Please use postmaster instead
     * */
    mailgunSandboxPostmaster?: string;
    /**
     * Mailgun apikey for your mail. Please use postmaster instead
     * */
    mailgunApikey?: string;
    /**
     * Mailgun sandbox domain postmaster for your mail
     * */
    postmaster: string;
    /**
     * Mailgun apikey for your mail
     * */
    apikey: string;
    /**
     * Destination of your mail
     * */
    to: string;
    /**
     * Mailgun sender name
     * */
    from?: string;
    /**
     * Message of your mail
     * */
    message: string;
    /**
     * Subject of your mail
     * */
    subject?: string;
    /**
     * Was this build successful? (true/false)
     * */
    success?: any;
    /**
     * App Release link
     * */
    appLink: string;
    /**
     * CI Build Link
     * */
    ciBuildLink?: string;
    /**
     * Mail HTML template
     * */
    templatePath?: string;
    /**
     * Mail Reply to
     * */
    replyTo?: string;
    /**
     * Mail Attachment filenames, either an array or just one string
     * */
    attachment?: any;
    /**
     * Placeholders for template given as a hash
     * */
    customPlaceholders: { string: string };
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("mailgun", convertedOptions);
    return out;
  }
  /** Generate a changelog using the Changes section from the current Jenkins build
   */
  async makeChangelogFromJenkins(options: {
    /**
     * Fallback changelog if there is not one on Jenkins, or it couldn't be read
     * */
    fallbackChangelog?: string;
    /**
     * Include the commit body along with the summary
     * */
    includeCommitBody?: any;
  }): Promise<any> {
    const convertedOptions = {
      fallback_changelog: options.fallbackChangelog,
      include_commit_body: options.includeCommitBody,
    };

    const out = await this.doAction(
      "make_changelog_from_jenkins",
      convertedOptions
    );
    return out;
  }
  /** Alias for the [[`syncCodeSigning`]] action
   */
  async match(options: {
    /**
     * Define the profile type, can be appstore, adhoc, development, enterprise, developer_id
     * */
    type: string;
    /**
     * Create additional cert types needed for macOS installers (valid values: mac_installer_distribution, developer_id_installer)
     * */
    additionalCertTypes?: string[];
    /**
     * Only fetch existing certificates and profiles, don't generate new ones
     * */
    readonly: boolean;
    /**
     * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
     * */
    generateAppleCerts: boolean;
    /**
     * Skip syncing provisioning profiles
     * */
    skipProvisioningProfiles: boolean;
    /**
     * The bundle identifier(s) of your app (comma-separated)
     * */
    appIdentifier: string[];
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * Define where you want to store your certificates
     * */
    storageMode: string;
    /**
     * URL to the git repo containing all the certificates
     * */
    gitUrl: string;
    /**
     * Specific git branch to use
     * */
    gitBranch: string;
    /**
     * git user full name to commit
     * */
    gitFullName?: string;
    /**
     * git user email to commit
     * */
    gitUserEmail?: string;
    /**
     * Make a shallow clone of the repository (truncate the history to 1 revision)
     * */
    shallowClone: boolean;
    /**
     * Clone just the branch specified, instead of the whole repo. This requires that the branch already exists. Otherwise the command will fail
     * */
    cloneBranchDirectly: boolean;
    /**
     * Use a basic authorization header to access the git repo (e.g.: access via HTTPS, GitHub Actions, etc), usually a string in Base64
     * */
    gitBasicAuthorization?: string;
    /**
     * Use a bearer authorization header to access the git repo (e.g.: access to an Azure Devops repository), usually a string in Base64
     * */
    gitBearerAuthorization?: string;
    /**
     * Name of the Google Cloud Storage bucket to use
     * */
    googleCloudBucketName?: string;
    /**
     * Path to the gc_keys.json file
     * */
    googleCloudKeysFile?: string;
    /**
     * ID of the Google Cloud project to use for authentication
     * */
    googleCloudProjectId?: string;
    /**
     * Name of the S3 region
     * */
    s3Region?: string;
    /**
     * S3 access key
     * */
    s3AccessKey?: string;
    /**
     * S3 secret access key
     * */
    s3SecretAccessKey?: string;
    /**
     * Name of the S3 bucket
     * */
    s3Bucket?: string;
    /**
     * Keychain the items should be imported to
     * */
    keychainName: string;
    /**
     * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your account password
     * */
    keychainPassword?: string;
    /**
     * Renew the provisioning profiles every time you run match
     * */
    force: boolean;
    /**
     * Renew the provisioning profiles if the device count on the developer portal has changed. Ignored for profile type 'appstore'
     * */
    forceForNewDevices: boolean;
    /**
     * Disables confirmation prompts during nuke, answering them with yes
     * */
    skipConfirmation: boolean;
    /**
     * Skip generation of a README.md for the created git repository
     * */
    skipDocs: boolean;
    /**
     * Set the provisioning profile's platform to work with (i.e. ios, tvos, macos)
     * */
    platform: string;
    /**
     * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
     * */
    templateName?: string;
    /**
     * A custom name for the provisioning profile. This will replace the default provisioning profile name if specified
     * */
    profileName?: string;
    /**
     * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
     * */
    failOnNameTaken?: boolean;
    /**
     * Path in which to export certificates, key and profile
     * */
    outputPath?: string;
    /**
     * Print out extra information and all commands
     * */
    verbose: boolean;
  }): Promise<any> {
    const convertedOptions = {
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
      profile_name: options.profileName,
      fail_on_name_taken: options.failOnNameTaken,
      output_path: options.outputPath,
      verbose: options.verbose,
    };

    const out = await this.doAction("match", convertedOptions);
    return out;
  }
  /** Verifies the minimum fastlane version required
   */
  async minFastlaneVersion(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("min_fastlane_version", convertedOptions);
    return out;
  }
  /** Modifies the services of the app created on Developer Portal
   */
  async modifyServices(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * App Identifier (Bundle ID, e.g. com.krausefx.app)
     * */
    appIdentifier: string;
    /**
     * Array with Spaceship App Services (e.g. access_wifi: (on|off)(:on|:off)(true|false), app_group: (on|off)(:on|:off)(true|false), apple_pay: (on|off)(:on|:off)(true|false), associated_domains: (on|off)(:on|:off)(true|false), auto_fill_credential: (on|off)(:on|:off)(true|false), data_protection: (complete|unlessopen|untilfirstauth)(:on|:off)(true|false), game_center: (on|off)(:on|:off)(true|false), health_kit: (on|off)(:on|:off)(true|false), home_kit: (on|off)(:on|:off)(true|false), hotspot: (on|off)(:on|:off)(true|false), icloud: (legacy|cloudkit)(:on|:off)(true|false), in_app_purchase: (on|off)(:on|:off)(true|false), inter_app_audio: (on|off)(:on|:off)(true|false), multipath: (on|off)(:on|:off)(true|false), network_extension: (on|off)(:on|:off)(true|false), nfc_tag_reading: (on|off)(:on|:off)(true|false), personal_vpn: (on|off)(:on|:off)(true|false), passbook: (on|off)(:on|:off)(true|false), push_notification: (on|off)(:on|:off)(true|false), siri_kit: (on|off)(:on|:off)(true|false), vpn_configuration: (on|off)(:on|:off)(true|false), wallet: (on|off)(:on|:off)(true|false), wireless_accessory: (on|off)(:on|:off)(true|false))
     * */
    services: { string: string };
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
  }): Promise<any> {
    const convertedOptions = {
      username: options.username,
      app_identifier: options.appIdentifier,
      services: options.services,
      team_id: options.teamId,
      team_name: options.teamName,
    };

    const out = await this.doAction("modify_services", convertedOptions);
    return out;
  }
  /** Upload a file to [Sonatype Nexus platform](https://www.sonatype.com)
   */
  async nexusUpload(options: {
    /**
     * File to be uploaded to Nexus
     * */
    file: string;
    /**
     * Nexus repository id e.g. artefacts
     * */
    repoId: string;
    /**
     * Nexus repository group id e.g. com.company
     * */
    repoGroupId: string;
    /**
     * Nexus repository commandect name. Only letters, digits, underscores(_), hyphens(-), and dots(.) are allowed
     * */
    repoProjectName: string;
    /**
     * Nexus repository commandect version
     * */
    repoProjectVersion: string;
    /**
     * Nexus repository artifact classifier (optional)
     * */
    repoClassifier?: string;
    /**
     * Nexus endpoint e.g. http://nexus:8081
     * */
    endpoint: string;
    /**
     * Nexus mount path (Nexus 3 instances have this configured as empty by default)
     * */
    mountPath?: string;
    /**
     * Nexus username
     * */
    username: string;
    /**
     * Nexus password
     * */
    password: string;
    /**
     * Verify SSL
     * */
    sslVerify?: any;
    /**
     * Nexus major version
     * */
    nexusVersion?: any;
    /**
     * Make detailed output
     * */
    verbose?: any;
    /**
     * Proxy username
     * */
    proxyUsername?: string;
    /**
     * Proxy password
     * */
    proxyPassword?: string;
    /**
     * Proxy address
     * */
    proxyAddress?: string;
    /**
     * Proxy port
     * */
    proxyPort?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("nexus_upload", convertedOptions);
    return out;
  }
  /** Notarizes a macOS app
   */
  async notarize(options: {
    /**
     * Path to package to notarize, e.g. .app bundle or disk image
     * */
    package: string;
    /**
     * Whether to try early stapling while the notarization request is in progress
     * */
    tryEarlyStapling?: boolean;
    /**
     * Bundle identifier to uniquely identify the package
     * */
    bundleId?: string;
    /**
     * Apple ID username
     * */
    username: string;
    /**
     * Provider short name for accounts associated with multiple providers
     * */
    ascProvider?: string;
    /**
     * Whether to print notarization log file, listing issues on failure and warnings on success
     * */
    printLog?: boolean;
    /**
     * Whether to log requests
     * */
    verbose?: boolean;
  }): Promise<any> {
    const convertedOptions = {
      package: options.package,
      try_early_stapling: options.tryEarlyStapling,
      bundle_id: options.bundleId,
      username: options.username,
      asc_provider: options.ascProvider,
      print_log: options.printLog,
      verbose: options.verbose,
    };

    const out = await this.doAction("notarize", convertedOptions);
    return out;
  }
  /** Display a macOS notification with custom message and title
   */
  async notification(options: {
    /**
     * The title to display in the notification
     * */
    title: string;
    /**
     * A subtitle to display in the notification
     * */
    subtitle?: string;
    /**
     * The message to display in the notification
     * */
    message: string;
    /**
     * The name of a sound to play when the notification appears (names are listed in Sound Preferences)
     * */
    sound?: string;
    /**
     * Bundle identifier of application to be opened when the notification is clicked
     * */
    activate?: string;
    /**
     * The URL of an image to display instead of the application icon (Mavericks+ only)
     * */
    appIcon?: string;
    /**
     * The URL of an image to display attached to the notification (Mavericks+ only)
     * */
    contentImage?: string;
    /**
     * URL of the resource to be opened when the notification is clicked
     * */
    open?: string;
    /**
     * Shell command to run when the notification is clicked
     * */
    execute?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("notification", convertedOptions);
    return out;
  }
  /** Shows a macOS notification - use `notification` instead
   */
  async notify(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("notify", convertedOptions);
    return out;
  }
  /** Return the number of commits in current git branch
   */
  async numberOfCommits(options: {
    /**
     * Returns number of all commits instead of current branch
     * */
    all?: any;
  }): Promise<any> {
    const convertedOptions = { all: options.all };

    const out = await this.doAction("number_of_commits", convertedOptions);
    return out;
  }
  /** Lints implementation files with OCLint
   */
  async oclint(options: {
    /**
     * The path to oclint binary
     * */
    oclintPath?: string;
    /**
     * The json compilation database, use xctool reporter 'json-compilation-database'
     * */
    compileCommands?: string;
    /**
     * Select all files matching this reqex
     * */
    selectReqex?: any;
    /**
     * Select all files matching this regex
     * */
    selectRegex?: any;
    /**
     * Exclude all files matching this regex
     * */
    excludeRegex?: any;
    /**
     * The type of the report (default: html)
     * */
    reportType?: string;
    /**
     * The reports file path
     * */
    reportPath?: string;
    /**
     * List enabled rules
     * */
    listEnabledRules: any;
    /**
     * Override the default behavior of rules
     * */
    rc?: string;
    /**
     * List of rule thresholds to override the default behavior of rules
     * */
    thresholds?: any;
    /**
     * List of rules to pick explicitly
     * */
    enableRules?: any;
    /**
     * List of rules to disable
     * */
    disableRules?: any;
    /**
     * The max allowed number of priority 1 violations
     * */
    maxPriority1?: any;
    /**
     * The max allowed number of priority 2 violations
     * */
    maxPriority2?: any;
    /**
     * The max allowed number of priority 3 violations
     * */
    maxPriority3?: any;
    /**
     * Enable Clang Static Analyzer, and integrate results into OCLint report
     * */
    enableClangStaticAnalyzer: any;
    /**
     * Compile every source, and analyze across global contexts (depends on number of source files, could results in high memory load)
     * */
    enableGlobalAnalysis: any;
    /**
     * Allow duplicated violations in the OCLint report
     * */
    allowDuplicatedViolations: any;
    /**
     * Additional argument to append to the compiler command line
     * */
    extraArg?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("oclint", convertedOptions);
    return out;
  }
  /** Create or update a new [OneSignal](https://onesignal.com/) application
   */
  async onesignal(options: {
    /**
     * OneSignal App ID. Setting this updates an existing app
     * */
    appId?: string;
    /**
     * OneSignal Authorization Key
     * */
    authToken: string;
    /**
     * OneSignal App Name. This is required when creating an app (in other words, when `:app_id` is not set, and optional when updating an app
     * */
    appName?: string;
    /**
     * ANDROID GCM KEY
     * */
    androidToken?: string;
    /**
     * GCM SENDER ID
     * */
    androidGcmSenderId?: string;
    /**
     * APNS P12 File (in .p12 format)
     * */
    apnsP12?: string;
    /**
     * APNS P12 password
     * */
    apnsP12Password?: string;
    /**
     * APNS environment
     * */
    apnsEnv?: string;
  }): Promise<any> {
    const convertedOptions = {
      app_id: options.appId,
      auth_token: options.authToken,
      app_name: options.appName,
      android_token: options.androidToken,
      android_gcm_sender_id: options.androidGcmSenderId,
      apns_p12: options.apnsP12,
      apns_p12_password: options.apnsP12Password,
      apns_env: options.apnsEnv,
    };

    const out = await this.doAction("onesignal", convertedOptions);
    return out;
  }
  /** This will prevent reports from being uploaded when _fastlane_ crashes
   */
  async optOutCrashReporting(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction(
      "opt_out_crash_reporting",
      convertedOptions
    );
    return out;
  }
  /** This will stop uploading the information which actions were run
   */
  async optOutUsage(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("opt_out_usage", convertedOptions);
    return out;
  }
  /** Alias for the [[`getPushCertificate`]] action
   */
  async pem(options: {
    /**
     * Renew the development push certificate instead of the production one
     * */
    development: any;
    /**
     * Create a Website Push certificate
     * */
    websitePush: any;
    /**
     * Generate a p12 file additionally to a PEM file
     * */
    generateP12: any;
    /**
     * If the current certificate is active for less than this number of days, generate a new one
     * */
    activeDaysLimit: any;
    /**
     * Create a new push certificate, even if the current one is active for 30 (or PEM_ACTIVE_DAYS_LIMIT) more days
     * */
    force: any;
    /**
     * Set to save the private RSA key
     * */
    savePrivateKey: any;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The password that is used for your p12 file
     * */
    p12Password: string;
    /**
     * The file name of the generated .pem file
     * */
    pemName?: string;
    /**
     * The path to a directory in which all certificates and private keys should be stored
     * */
    outputPath: string;
    /**
     * Block that is called if there is a new profile
     * */
    newProfile?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("pem", convertedOptions);
    return out;
  }
  /** Alias for the [[`uploadToTestflight`]] action
   */
  async pilot(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The bundle identifier of the app to upload or manage testers (optional)
     * */
    appIdentifier?: string;
    /**
     * The platform to use (optional)
     * */
    appPlatform?: string;
    /**
     * Apple ID property in the App Information section in App Store Connect
     * */
    appleId?: string;
    /**
     * Path to the ipa file to upload
     * */
    ipa?: string;
    /**
     * Do you need a demo account when Apple does review?
     * */
    demoAccountRequired: boolean;
    /**
     * Beta app review information for contact info and demo account
     * */
    betaAppReviewInfo?: { string: string };
    /**
     * Localized beta app test info for description, feedback email, marketing url, and privacy policy
     * */
    localizedAppInfo?: { string: string };
    /**
     * Provide the 'Beta App Description' when uploading a new build
     * */
    betaAppDescription?: string;
    /**
     * Provide the beta app email when uploading a new build
     * */
    betaAppFeedbackEmail?: string;
    /**
     * Localized beta app test info for what's new
     * */
    localizedBuildInfo?: { string: string };
    /**
     * Provide the 'What to Test' text when uploading a new build. `skip_waiting_for_build_processing: false` is required to set the changelog
     * */
    changelog?: string;
    /**
     * Skip the distributing action of pilot and only upload the ipa file
     * */
    skipSubmission: any;
    /**
     * If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
     * */
    skipWaitingForBuildProcessing: any;
    /**
     * **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
     * */
    updateBuildInfoOnUpload?: any;
    /**
     * Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
     * */
    usesNonExemptEncryption: boolean;
    /**
     * Should the build be distributed to external testers?
     * */
    distributeExternal: any;
    /**
     * Should notify external testers?
     * */
    notifyExternalTesters: any;
    /**
     * The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
     * */
    appVersion?: string;
    /**
     * The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
     * */
    buildNumber?: string;
    /**
     * Should expire previous builds?
     * */
    expirePreviousBuilds: any;
    /**
     * The tester's first name
     * */
    firstName?: string;
    /**
     * The tester's last name
     * */
    lastName?: string;
    /**
     * The tester's email
     * */
    email?: string;
    /**
     * Path to a CSV file of testers
     * */
    testersFilePath?: string;
    /**
     * Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"`
     * */
    groups?: string[];
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
     * */
    devPortalTeamId?: string;
    /**
     * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
     * */
    itcProvider?: string;
    /**
     * Interval in seconds to wait for App Store Connect processing
     * */
    waitProcessingInterval: any;
    /**
     * **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
     * */
    waitForUploadedBuild?: any;
    /**
     * Expire previous if it's 'waiting for review'
     * */
    rejectBuildWaitingForReview: any;
  }): Promise<any> {
    const convertedOptions = {
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
      expire_previous_builds: options.expirePreviousBuilds,
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

    const out = await this.doAction("pilot", convertedOptions);
    return out;
  }
  /** Pod lib lint
   */
  async podLibLint(options: {
    /**
     * Use bundle exec when there is a Gemfile presented
     * */
    useBundleExec: boolean;
    /**
     * Path of spec to lint
     * */
    podspec?: string;
    /**
     * Allow output detail in console
     * */
    verbose?: boolean;
    /**
     * Allow warnings during pod lint
     * */
    allowWarnings?: boolean;
    /**
     * The sources of repos you want the pod spec to lint with, separated by commas
     * */
    sources?: string[];
    /**
     * A specific subspec to lint instead of the entire spec
     * */
    subspec?: string;
    /**
     * A Glob of additional ancillary podspecs which are used for linting via :path (available since cocoapods >= 1.7)
     * */
    includePodspecs?: string;
    /**
     * A Glob of additional ancillary podspecs which are used for linting via :podspec. If there are --include-podspecs, then these are removed from them (available since cocoapods >= 1.7)
     * */
    externalPodspecs?: string;
    /**
     * The SWIFT_VERSION that should be used to lint the spec. This takes precedence over a .swift-version file
     * */
    swiftVersion?: string;
    /**
     * Lint uses static libraries to install the spec
     * */
    useLibraries: boolean;
    /**
     * Lint using modular libraries (available since cocoapods >= 1.6)
     * */
    useModularHeaders: boolean;
    /**
     * Lint stops on the first failing platform or subspec
     * */
    failFast: boolean;
    /**
     * Lint skips checks that apply only to public specs
     * */
    private: boolean;
    /**
     * Lint skips checks that would require to download and build the spec
     * */
    quick: boolean;
    /**
     * Lint leaves the build directory intact for inspection
     * */
    noClean: boolean;
    /**
     * Lint skips validation of subspecs
     * */
    noSubspecs: boolean;
    /**
     * Lint against specific platforms (defaults to all platforms supported by the podspec). Multiple platforms must be comma-delimited (available since cocoapods >= 1.6)
     * */
    platforms?: string;
    /**
     * Lint skips validating that the pod can be imported (available since cocoapods >= 1.3)
     * */
    skipImportValidation: boolean;
    /**
     * Lint skips building and running tests during validation (available since cocoapods >= 1.3)
     * */
    skipTests: boolean;
    /**
     * Validate with the Xcode Static Analysis tool (available since cocoapods >= 1.6.1)
     * */
    analyze: boolean;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("pod_lib_lint", convertedOptions);
    return out;
  }
  /** Push a Podspec to Trunk or a private repository
   */
  async podPush(options: {
    /**
     * Use bundle exec when there is a Gemfile presented
     * */
    useBundleExec: boolean;
    /**
     * The Podspec you want to push
     * */
    path?: string;
    /**
     * The repo you want to push. Pushes to Trunk by default
     * */
    repo?: string;
    /**
     * Allow warnings during pod push
     * */
    allowWarnings?: boolean;
    /**
     * Allow lint to use static libraries to install the spec
     * */
    useLibraries?: boolean;
    /**
     * The sources of repos you want the pod spec to lint with, separated by commas
     * */
    sources?: string[];
    /**
     * The SWIFT_VERSION that should be used to lint the spec. This takes precedence over a .swift-version file
     * */
    swiftVersion?: string;
    /**
     * Lint skips validating that the pod can be imported
     * */
    skipImportValidation?: boolean;
    /**
     * Lint skips building and running tests during validation
     * */
    skipTests?: boolean;
    /**
     * Show more debugging information
     * */
    verbose?: boolean;
    /**
     * Use modular headers option during validation
     * */
    useModularHeaders?: boolean;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("pod_push", convertedOptions);
    return out;
  }
  /** Creates or updates an item within your Podio app
   */
  async podioItem(options: {
    /**
     * Client ID for Podio API (see https://developers.podio.com/api-key)
     * */
    clientId: string;
    /**
     * Client secret for Podio API (see https://developers.podio.com/api-key)
     * */
    clientSecret: string;
    /**
     * App ID of the app you intend to authenticate with (see https://developers.podio.com/authentication/app_auth)
     * */
    appId: string;
    /**
     * App token of the app you intend to authenticate with (see https://developers.podio.com/authentication/app_auth)
     * */
    appToken: string;
    /**
     * String specifying the field key used for identification of an item
     * */
    identifyingField: string;
    /**
     * String uniquely specifying an item within the app
     * */
    identifyingValue: string;
    /**
     * Dictionary of your app fields. Podio supports several field types, see https://developers.podio.com/doc/items
     * */
    otherFields?: { string: string };
  }): Promise<any> {
    const convertedOptions = {
      client_id: options.clientId,
      client_secret: options.clientSecret,
      app_id: options.appId,
      app_token: options.appToken,
      identifying_field: options.identifyingField,
      identifying_value: options.identifyingValue,
      other_fields: options.otherFields,
    };

    const out = await this.doAction("podio_item", convertedOptions);
    return out;
  }
  /** Alias for the [[`checkAppStoreMetadata`]] action
   */
  async precheck(options: {
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The default rule level unless otherwise configured
     * */
    defaultRuleLevel: any;
    /**
     * Should check in-app purchases?
     * */
    includeInAppPurchases?: any;
    /**
     * mentioning  in a way that could be considered negative
     * */
    negativeAppleSentiment?: any;
    /**
     * using placeholder text (e.g.:"lorem ipsum", "text here", etc...)
     * */
    placeholderText?: any;
    /**
     * mentioning other platforms, like Android or Blackberry
     * */
    otherPlatforms?: any;
    /**
     * mentioning features or content that is not currently available in your app
     * */
    futureFunctionality?: any;
    /**
     * using text indicating this release is a test
     * */
    testWords?: any;
    /**
     * including words that might be considered objectionable
     * */
    curseWords?: any;
    /**
     * using text indicating that your IAP is free
     * */
    freeStuffInIap?: any;
    /**
     * mentioning any of the user-specified words passed to custom_text(data: [words])
     * */
    customText?: any;
    /**
     * using a copyright date that is any different from this current year, or missing a date
     * */
    copyrightDate?: any;
    /**
     * unreachable URLs in app metadata
     * */
    unreachableUrls?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("precheck", convertedOptions);
    return out;
  }
  /** Alias for the [[`puts`]] action
   */
  async println(options: {
    /**
     * Message to be printed out
     * */
    message?: string;
  }): Promise<any> {
    const convertedOptions = { message: options.message };

    const out = await this.doAction("println", convertedOptions);
    return out;
  }
  /** Alias for the [[`createAppOnline`]] action
   */
  async produce(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * App Identifier (Bundle ID, e.g. com.krausefx.app)
     * */
    appIdentifier: string;
    /**
     * App Identifier Suffix (Ignored if App Identifier does not end with .*)
     * */
    bundleIdentifierSuffix?: string;
    /**
     * App Name
     * */
    appName: string;
    /**
     * Initial version number (e.g. '1.0')
     * */
    appVersion?: string;
    /**
     * SKU Number (e.g. '1234')
     * */
    sku: string;
    /**
     * The platform to use (optional)
     * */
    platform?: string;
    /**
     * The platforms to use (optional)
     * */
    platforms?: string[];
    /**
     * Primary Language (e.g. 'English', 'German')
     * */
    language: string;
    /**
     * The name of your company. Only required if it's the first app you create
     * */
    companyName?: string;
    /**
     * Skip the creation of the app on App Store Connect
     * */
    skipItc: any;
    /**
     * Array of App Store Connect users. If provided, you can limit access to this newly created app for users with the App Manager, Developer, Marketer or Sales roles
     * */
    itcUsers?: string[];
    /**
     * **DEPRECATED!** Please use `enable_services` instead - Array with Spaceship App Services
     * */
    enabledFeatures?: any;
    /**
     * Array with Spaceship App Services (e.g. access_wifi: (on|off), app_group: (on|off), apple_pay: (on|off), associated_domains: (on|off), auto_fill_credential: (on|off), data_protection: (complete|unlessopen|untilfirstauth), game_center: (on|off), health_kit: (on|off), home_kit: (on|off), hotspot: (on|off), icloud: (legacy|cloudkit), in_app_purchase: (on|off), inter_app_audio: (on|off), multipath: (on|off), network_extension: (on|off), nfc_tag_reading: (on|off), personal_vpn: (on|off), passbook: (on|off), push_notification: (on|off), siri_kit: (on|off), vpn_configuration: (on|off), wallet: (on|off), wireless_accessory: (on|off))
     * */
    enableServices: any;
    /**
     * Skip the creation of the app on the Apple Developer Portal
     * */
    skipDevcenter: any;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    itcTeamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    itcTeamName?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("produce", convertedOptions);
    return out;
  }
  /** Ask the user for a value or for confirmation
   */
  async prompt(options: {
    /**
     * The text that will be displayed to the user
     * */
    text: string;
    /**
     * The default text that will be used when being executed on a CI service
     * */
    ciInput: string;
    /**
     * Is that a boolean question (yes/no)? This will add (y/n) at the end
     * */
    boolean: any;
    /**
     * Is that a secure text (yes/no)?
     * */
    secureText: any;
    /**
     * Enable multi-line inputs by providing an end text (e.g. 'END') which will stop the user input
     * */
    multiLineEndKeyword?: string;
  }): Promise<string> {
    const convertedOptions = {
      text: options.text,
      ci_input: options.ciInput,
      boolean: options.boolean,
      secure_text: options.secureText,
      multi_line_end_keyword: options.multiLineEndKeyword,
    };

    const out = await this.doAction("prompt", convertedOptions);
    return out;
  }
  /** Push local tags to the remote - this will only push tags
   */
  async pushGitTags(options: {
    /**
     * Force push to remote
     * */
    force?: any;
    /**
     * The remote to push tags to
     * */
    remote?: string;
    /**
     * The tag to push to remote
     * */
    tag?: string;
  }): Promise<any> {
    const convertedOptions = {
      force: options.force,
      remote: options.remote,
      tag: options.tag,
    };

    const out = await this.doAction("push_git_tags", convertedOptions);
    return out;
  }
  /** Push local changes to the remote branch
   */
  async pushToGitRemote(options: {
    /**
     * The local branch to push from. Defaults to the current branch
     * */
    localBranch?: string;
    /**
     * The remote branch to push to. Defaults to the local branch
     * */
    remoteBranch?: string;
    /**
     * Force push to remote
     * */
    force: boolean;
    /**
     * Force push with lease to remote
     * */
    forceWithLease: boolean;
    /**
     * Whether tags are pushed to remote
     * */
    tags: boolean;
    /**
     * The remote to push to
     * */
    remote: string;
    /**
     * Whether or not to use --no-verify
     * */
    noVerify: boolean;
    /**
     * Whether or not to use --set-upstream
     * */
    setUpstream: boolean;
  }): Promise<any> {
    const convertedOptions = {
      local_branch: options.localBranch,
      remote_branch: options.remoteBranch,
      force: options.force,
      force_with_lease: options.forceWithLease,
      tags: options.tags,
      remote: options.remote,
      no_verify: options.noVerify,
      set_upstream: options.setUpstream,
    };

    const out = await this.doAction("push_to_git_remote", convertedOptions);
    return out;
  }
  /** Prints out the given text
   */
  async puts(options: {
    /**
     * Message to be printed out
     * */
    message?: string;
  }): Promise<any> {
    const convertedOptions = { message: options.message };

    const out = await this.doAction("puts", convertedOptions);
    return out;
  }
  /** Loads a CocoaPods spec as JSON
   */
  async readPodspec(options: {
    /**
     * Path to the podspec to be read
     * */
    path: string;
  }): Promise<any> {
    const convertedOptions = { path: options.path };

    const out = await this.doAction("read_podspec", convertedOptions);
    return out;
  }
  /** Recreate not shared Xcode project schemes
   */
  async recreateSchemes(options: {
    /**
     * The Xcode project
     * */
    project: string;
  }): Promise<any> {
    const convertedOptions = { project: options.project };

    const out = await this.doAction("recreate_schemes", convertedOptions);
    return out;
  }
  /** Registers a new device to the Apple Dev Portal
   */
  async registerDevice(options: {
    /**
     * Provide the name of the device to register as
     * */
    name: string;
    /**
     * Provide the UDID of the device to register as
     * */
    udid: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * Optional: Your Apple ID
     * */
    username: string;
  }): Promise<string> {
    const convertedOptions = {
      name: options.name,
      udid: options.udid,
      team_id: options.teamId,
      team_name: options.teamName,
      username: options.username,
    };

    const out = await this.doAction("register_device", convertedOptions);
    return out;
  }
  /** Registers new devices to the Apple Dev Portal
   */
  async registerDevices(options: {
    /**
     * A hash of devices, with the name as key and the UDID as value
     * */
    devices?: { string: string };
    /**
     * Provide a path to a file with the devices to register. For the format of the file see the examples
     * */
    devicesFile?: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * Optional: Your Apple ID
     * */
    username: string;
    /**
     * The platform to use (optional)
     * */
    platform?: string;
  }): Promise<any> {
    const convertedOptions = {
      devices: options.devices,
      devices_file: options.devicesFile,
      team_id: options.teamId,
      team_name: options.teamName,
      username: options.username,
      platform: options.platform,
    };

    const out = await this.doAction("register_devices", convertedOptions);
    return out;
  }
  /** Resets git repo to a clean state by discarding uncommitted changes
   */
  async resetGitRepo(options: {
    /**
     * Array of files the changes should be discarded. If not given, all files will be discarded
     * */
    files?: any;
    /**
     * Skip verifying of previously clean state of repo. Only recommended in combination with `files` option
     * */
    force: any;
    /**
     * Skip 'git clean' to avoid removing untracked files like `.env`
     * */
    skipClean: any;
    /**
     * Setting this to true will clean the whole repository, ignoring anything in your local .gitignore. Set this to true if you want the equivalent of a fresh clone, and for all untracked and ignore files to also be removed
     * */
    disregardGitignore?: any;
    /**
     * You can pass a string, or array of, file pattern(s) here which you want to have survive the cleaning process, and remain on disk, e.g. to leave the `artifacts` directory you would specify `exclude: 'artifacts'`. Make sure this pattern is also in your gitignore! See the gitignore documentation for info on patterns
     * */
    exclude?: any;
  }): Promise<any> {
    const convertedOptions = {
      files: options.files,
      force: options.force,
      skip_clean: options.skipClean,
      disregard_gitignore: options.disregardGitignore,
      exclude: options.exclude,
    };

    const out = await this.doAction("reset_git_repo", convertedOptions);
    return out;
  }
  /** Shutdown and reset running simulators
   */
  async resetSimulatorContents(options: {
    /**
     * **DEPRECATED!** Use `:os_versions` instead - Which OS versions of Simulators you want to reset content and settings, this does not remove/recreate the simulators
     * */
    ios?: string[];
    /**
     * Which OS versions of Simulators you want to reset content and settings, this does not remove/recreate the simulators
     * */
    osVersions?: string[];
  }): Promise<any> {
    const convertedOptions = {
      ios: options.ios,
      os_versions: options.osVersions,
    };

    const out = await this.doAction(
      "reset_simulator_contents",
      convertedOptions
    );
    return out;
  }
  /** Codesign an existing ipa file
   */
  async resign(options: {
    /**
     * Path to the ipa file to resign. Optional if you use the _gym_ or _xcodebuild_ action
     * */
    ipa: string;
    /**
     * Code signing identity to use. e.g. `iPhone Distribution: Luka Mirosevic (0123456789)`
     * */
    signingIdentity: string;
    /**
     * Path to the entitlement file to use, e.g. `myApp/MyApp.entitlements`
     * */
    entitlements?: string;
    /**
     * Path to your provisioning_profile. Optional if you use _sigh_
     * */
    provisioningProfile: any;
    /**
     * Version number to force resigned ipa to use. Updates both `CFBundleShortVersionString` and `CFBundleVersion` values in `Info.plist`. Applies for main app and all nested apps or extensions
     * */
    version?: string;
    /**
     * Display name to force resigned ipa to use
     * */
    displayName?: string;
    /**
     * Short version string to force resigned ipa to use (`CFBundleShortVersionString`)
     * */
    shortVersion?: string;
    /**
     * Bundle version to force resigned ipa to use (`CFBundleVersion`)
     * */
    bundleVersion?: string;
    /**
     * Set new bundle ID during resign (`CFBundleIdentifier`)
     * */
    bundleId?: string;
    /**
     * Extract app bundle codesigning entitlements and combine with entitlements from new provisionin profile
     * */
    useAppEntitlements?: any;
    /**
     * Provide a path to a keychain file that should be used by `/usr/bin/codesign`
     * */
    keychainPath?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("resign", convertedOptions);
    return out;
  }
  /** This action restore your file that was backuped with the `backup_file` action
   */
  async restoreFile(options: {
    /**
     * Original file name you want to restore
     * */
    path: string;
  }): Promise<any> {
    const convertedOptions = { path: options.path };

    const out = await this.doAction("restore_file", convertedOptions);
    return out;
  }
  /** Outputs ascii-art for a rocket 🚀
   */
  async rocket(options: {}): Promise<string> {
    const convertedOptions = {};

    const out = await this.doAction("rocket", convertedOptions);
    return out;
  }
  /** Rsync files from :source to :destination
   */
  async rsync(options: {
    /**
     * Port
     * */
    extra?: string;
    /**
     * source file/folder
     * */
    source: string;
    /**
     * destination file/folder
     * */
    destination: string;
  }): Promise<any> {
    const convertedOptions = {
      extra: options.extra,
      source: options.source,
      destination: options.destination,
    };

    const out = await this.doAction("rsync", convertedOptions);
    return out;
  }
  /** Verifies the minimum ruby version required
   */
  async rubyVersion(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("ruby_version", convertedOptions);
    return out;
  }
  /** Easily run tests of your iOS app (via _scan_)
   */
  async runTests(options: {
    /**
     * Path to the workspace file
     * */
    workspace?: string;
    /**
     * Path to the project file
     * */
    project?: string;
    /**
     * The project's scheme. Make sure it's marked as `Shared`
     * */
    scheme?: string;
    /**
     * The name of the simulator type you want to run tests on (e.g. 'iPhone 6')
     * */
    device?: string;
    /**
     * Array of devices to run the tests on (e.g. ['iPhone 6', 'iPad Air'])
     * */
    devices?: string[];
    /**
     * Should skip auto detecting of devices if none were specified
     * */
    skipDetectDevices?: boolean;
    /**
     * Enabling this option will automatically killall Simulator processes before the run
     * */
    forceQuitSimulator: boolean;
    /**
     * Enabling this option will automatically erase the simulator before running the application
     * */
    resetSimulator: boolean;
    /**
     * Enabling this option will disable the simulator from showing the 'Slide to type' prompt
     * */
    disableSlideToType: boolean;
    /**
     * Enabling this option will launch the first simulator prior to calling any xcodebuild command
     * */
    prelaunchSimulator?: boolean;
    /**
     * Enabling this option will automatically uninstall the application before running it
     * */
    reinstallApp: boolean;
    /**
     * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
     * */
    appIdentifier?: string;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to run
     * */
    onlyTesting?: any;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
     * */
    skipTesting?: any;
    /**
     * The testplan associated with the scheme that should be used for testing
     * */
    testplan?: string;
    /**
     * Array of strings matching test plan configurations to run
     * */
    onlyTestConfigurations?: any;
    /**
     * Array of strings matching test plan configurations to skip
     * */
    skipTestConfigurations?: any;
    /**
     * Run tests using the provided `.xctestrun` file
     * */
    xctestrun?: string;
    /**
     * The toolchain that should be used for building the application (e.g. `com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a`)
     * */
    toolchain?: any;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: any;
    /**
     * Should code coverage be generated? (Xcode 7 and up)
     * */
    codeCoverage?: boolean;
    /**
     * Should the address sanitizer be turned on?
     * */
    addressSanitizer?: boolean;
    /**
     * Should the thread sanitizer be turned on?
     * */
    threadSanitizer?: boolean;
    /**
     * Should the HTML report be opened when tests are completed?
     * */
    openReport: any;
    /**
     * Disable xcpretty formatting of build, similar to `output_style='raw'` but this will also skip the test results table
     * */
    disableXcpretty?: boolean;
    /**
     * The directory in which all reports will be stored
     * */
    outputDirectory: string;
    /**
     * Define how the output should look like. Valid values are: standard, basic, rspec, or raw (disables xcpretty during xcodebuild)
     * */
    outputStyle?: string;
    /**
     * Comma separated list of the output types (e.g. html, junit, json-compilation-database)
     * */
    outputTypes: string;
    /**
     * Comma separated list of the output files, corresponding to the types provided by :output_types (order should match). If specifying an output type of json-compilation-database with :use_clang_report_name enabled, that option will take precedence
     * */
    outputFiles?: string;
    /**
     * The directory where to store the raw log
     * */
    buildlogPath: string;
    /**
     * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
     * */
    includeSimulatorLogs?: boolean;
    /**
     * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
     * */
    suppressXcodeOutput?: boolean;
    /**
     * A custom xcpretty formatter to use
     * */
    formatter?: string;
    /**
     * Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf')
     * */
    xcprettyArgs?: string;
    /**
     * The directory where build products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should zip the derived data build products and place in output path?
     * */
    shouldZipBuildProducts?: any;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: any;
    /**
     * Generate the json compilation database with clang naming convention (compile_commands.json)
     * */
    useClangReportName: any;
    /**
     * Specify the exact number of test runners that will be spawned during parallel testing. Equivalent to -parallel-testing-worker-count
     * */
    concurrentWorkers?: any;
    /**
     * Constrain the number of simulator devices on which to test concurrently. Equivalent to -maximum-concurrent-test-simulator-destinations
     * */
    maxConcurrentSimulators?: any;
    /**
     * Do not run test bundles in parallel on the specified destinations. Testing will occur on each destination serially. Equivalent to -disable-concurrent-testing
     * */
    disableConcurrentTesting?: boolean;
    /**
     * Should debug build be skipped before test build?
     * */
    skipBuild: boolean;
    /**
     * Test without building, requires a derived data path
     * */
    testWithoutBuilding?: boolean;
    /**
     * Build for testing only, does not run tests
     * */
    buildForTesting?: boolean;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Pass additional arguments to xcodebuild. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * App name to use in slack message and logfile name
     * */
    appName?: string;
    /**
     * Target version of the app being build or tested. Used to filter out simulator version
     * */
    deploymentTargetVersion?: string;
    /**
     * Create an Incoming WebHook for your Slack group to post results there
     * */
    slackUrl?: string;
    /**
     * #channel or @username
     * */
    slackChannel?: string;
    /**
     * The message included with each message posted to slack
     * */
    slackMessage?: string;
    /**
     * Use webhook's default username and icon settings? (true/false)
     * */
    slackUseWebhookConfiguredUsernameAndIcon?: boolean;
    /**
     * Overrides the webhook's username property if slack_use_webhook_configured_username_and_icon is false
     * */
    slackUsername?: string;
    /**
     * Overrides the webhook's image property if slack_use_webhook_configured_username_and_icon is false
     * */
    slackIconUrl?: string;
    /**
     * Don't publish to slack, even when an URL is given
     * */
    skipSlack: any;
    /**
     * Only post on Slack if the tests fail
     * */
    slackOnlyOnFailure: any;
    /**
     * Use only if you're a pro, use the other options instead
     * */
    destination?: any;
    /**
     * **DEPRECATED!** Use `--output_files` instead - Sets custom full report file name when generating a single report
     * */
    customReportFileName?: string;
    /**
     * Allows for override of the default `xcodebuild` command
     * */
    xcodebuildCommand?: string;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
    /**
     * Should this step stop the build if the tests fail? Set this to false if you're using trainer
     * */
    failBuild: any;
  }): Promise<any> {
    const convertedOptions = {
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
      only_test_configurations: options.onlyTestConfigurations,
      skip_test_configurations: options.skipTestConfigurations,
      xctestrun: options.xctestrun,
      toolchain: options.toolchain,
      clean: options.clean,
      code_coverage: options.codeCoverage,
      address_sanitizer: options.addressSanitizer,
      thread_sanitizer: options.threadSanitizer,
      open_report: options.openReport,
      disable_xcpretty: options.disableXcpretty,
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

    const out = await this.doAction("run_tests", convertedOptions);
    return out;
  }
  /** Generates a plist file and uploads all to AWS S3
   */
  async s3(options: {
    /**
     * .ipa file for the build
     * */
    ipa?: string;
    /**
     * zipped .dsym package for the build
     * */
    dsym?: string;
    /**
     * Upload relevant metadata for this build
     * */
    uploadMetadata?: any;
    /**
     * plist template path
     * */
    plistTemplatePath?: string;
    /**
     * uploaded plist filename
     * */
    plistFileName?: string;
    /**
     * html erb template path
     * */
    htmlTemplatePath?: string;
    /**
     * uploaded html filename
     * */
    htmlFileName?: string;
    /**
     * version erb template path
     * */
    versionTemplatePath?: string;
    /**
     * uploaded version filename
     * */
    versionFileName?: string;
    /**
     * AWS Access Key ID
     * */
    accessKey?: string;
    /**
     * AWS Secret Access Key
     * */
    secretAccessKey?: string;
    /**
     * AWS bucket name
     * */
    bucket?: string;
    /**
     * AWS region (for bucket creation)
     * */
    region?: string;
    /**
     * S3 'path'. Values from Info.plist will be substituted for keys wrapped in {}
     * */
    path?: string;
    /**
     * Optional source directory e.g. ./build
     * */
    source?: string;
    /**
     * Uploaded object permissions e.g public_read (default), private, public_read_write, authenticated_read
     * */
    acl?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("s3", convertedOptions);
    return out;
  }
  /** This action speaks the given text out loud
   */
  async say(options: {
    /**
     * Text to be spoken out loud (as string or array of strings)
     * */
    text: any;
    /**
     * If say should be muted with text printed out
     * */
    mute: boolean;
  }): Promise<any> {
    const convertedOptions = { text: options.text, mute: options.mute };

    const out = await this.doAction("say", convertedOptions);
    return out;
  }
  /** Alias for the [[`runTests`]] action
   */
  async scan(options: {
    /**
     * Path to the workspace file
     * */
    workspace?: string;
    /**
     * Path to the project file
     * */
    project?: string;
    /**
     * The project's scheme. Make sure it's marked as `Shared`
     * */
    scheme?: string;
    /**
     * The name of the simulator type you want to run tests on (e.g. 'iPhone 6')
     * */
    device?: string;
    /**
     * Array of devices to run the tests on (e.g. ['iPhone 6', 'iPad Air'])
     * */
    devices?: string[];
    /**
     * Should skip auto detecting of devices if none were specified
     * */
    skipDetectDevices?: boolean;
    /**
     * Enabling this option will automatically killall Simulator processes before the run
     * */
    forceQuitSimulator: boolean;
    /**
     * Enabling this option will automatically erase the simulator before running the application
     * */
    resetSimulator: boolean;
    /**
     * Enabling this option will disable the simulator from showing the 'Slide to type' prompt
     * */
    disableSlideToType: boolean;
    /**
     * Enabling this option will launch the first simulator prior to calling any xcodebuild command
     * */
    prelaunchSimulator?: boolean;
    /**
     * Enabling this option will automatically uninstall the application before running it
     * */
    reinstallApp: boolean;
    /**
     * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
     * */
    appIdentifier?: string;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to run
     * */
    onlyTesting?: any;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
     * */
    skipTesting?: any;
    /**
     * The testplan associated with the scheme that should be used for testing
     * */
    testplan?: string;
    /**
     * Array of strings matching test plan configurations to run
     * */
    onlyTestConfigurations?: any;
    /**
     * Array of strings matching test plan configurations to skip
     * */
    skipTestConfigurations?: any;
    /**
     * Run tests using the provided `.xctestrun` file
     * */
    xctestrun?: string;
    /**
     * The toolchain that should be used for building the application (e.g. `com.apple.dt.toolchain.Swift_2_3, org.swift.30p620160816a`)
     * */
    toolchain?: any;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: any;
    /**
     * Should code coverage be generated? (Xcode 7 and up)
     * */
    codeCoverage?: boolean;
    /**
     * Should the address sanitizer be turned on?
     * */
    addressSanitizer?: boolean;
    /**
     * Should the thread sanitizer be turned on?
     * */
    threadSanitizer?: boolean;
    /**
     * Should the HTML report be opened when tests are completed?
     * */
    openReport: any;
    /**
     * Disable xcpretty formatting of build, similar to `output_style='raw'` but this will also skip the test results table
     * */
    disableXcpretty?: boolean;
    /**
     * The directory in which all reports will be stored
     * */
    outputDirectory: string;
    /**
     * Define how the output should look like. Valid values are: standard, basic, rspec, or raw (disables xcpretty during xcodebuild)
     * */
    outputStyle?: string;
    /**
     * Comma separated list of the output types (e.g. html, junit, json-compilation-database)
     * */
    outputTypes: string;
    /**
     * Comma separated list of the output files, corresponding to the types provided by :output_types (order should match). If specifying an output type of json-compilation-database with :use_clang_report_name enabled, that option will take precedence
     * */
    outputFiles?: string;
    /**
     * The directory where to store the raw log
     * */
    buildlogPath: string;
    /**
     * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
     * */
    includeSimulatorLogs?: boolean;
    /**
     * Suppress the output of xcodebuild to stdout. Output is still saved in buildlog_path
     * */
    suppressXcodeOutput?: boolean;
    /**
     * A custom xcpretty formatter to use
     * */
    formatter?: string;
    /**
     * Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf')
     * */
    xcprettyArgs?: string;
    /**
     * The directory where build products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should zip the derived data build products and place in output path?
     * */
    shouldZipBuildProducts?: any;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: any;
    /**
     * Generate the json compilation database with clang naming convention (compile_commands.json)
     * */
    useClangReportName: any;
    /**
     * Specify the exact number of test runners that will be spawned during parallel testing. Equivalent to -parallel-testing-worker-count
     * */
    concurrentWorkers?: any;
    /**
     * Constrain the number of simulator devices on which to test concurrently. Equivalent to -maximum-concurrent-test-simulator-destinations
     * */
    maxConcurrentSimulators?: any;
    /**
     * Do not run test bundles in parallel on the specified destinations. Testing will occur on each destination serially. Equivalent to -disable-concurrent-testing
     * */
    disableConcurrentTesting?: boolean;
    /**
     * Should debug build be skipped before test build?
     * */
    skipBuild: boolean;
    /**
     * Test without building, requires a derived data path
     * */
    testWithoutBuilding?: boolean;
    /**
     * Build for testing only, does not run tests
     * */
    buildForTesting?: boolean;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Pass additional arguments to xcodebuild. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * App name to use in slack message and logfile name
     * */
    appName?: string;
    /**
     * Target version of the app being build or tested. Used to filter out simulator version
     * */
    deploymentTargetVersion?: string;
    /**
     * Create an Incoming WebHook for your Slack group to post results there
     * */
    slackUrl?: string;
    /**
     * #channel or @username
     * */
    slackChannel?: string;
    /**
     * The message included with each message posted to slack
     * */
    slackMessage?: string;
    /**
     * Use webhook's default username and icon settings? (true/false)
     * */
    slackUseWebhookConfiguredUsernameAndIcon?: boolean;
    /**
     * Overrides the webhook's username property if slack_use_webhook_configured_username_and_icon is false
     * */
    slackUsername?: string;
    /**
     * Overrides the webhook's image property if slack_use_webhook_configured_username_and_icon is false
     * */
    slackIconUrl?: string;
    /**
     * Don't publish to slack, even when an URL is given
     * */
    skipSlack: any;
    /**
     * Only post on Slack if the tests fail
     * */
    slackOnlyOnFailure: any;
    /**
     * Use only if you're a pro, use the other options instead
     * */
    destination?: any;
    /**
     * **DEPRECATED!** Use `--output_files` instead - Sets custom full report file name when generating a single report
     * */
    customReportFileName?: string;
    /**
     * Allows for override of the default `xcodebuild` command
     * */
    xcodebuildCommand?: string;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
    /**
     * Should this step stop the build if the tests fail? Set this to false if you're using trainer
     * */
    failBuild: any;
  }): Promise<any> {
    const convertedOptions = {
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
      only_test_configurations: options.onlyTestConfigurations,
      skip_test_configurations: options.skipTestConfigurations,
      xctestrun: options.xctestrun,
      toolchain: options.toolchain,
      clean: options.clean,
      code_coverage: options.codeCoverage,
      address_sanitizer: options.addressSanitizer,
      thread_sanitizer: options.threadSanitizer,
      open_report: options.openReport,
      disable_xcpretty: options.disableXcpretty,
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

    const out = await this.doAction("scan", convertedOptions);
    return out;
  }
  /** Transfer files via SCP
   */
  async scp(options: {
    /**
     * Username
     * */
    username: string;
    /**
     * Password
     * */
    password?: string;
    /**
     * Hostname
     * */
    host: string;
    /**
     * Port
     * */
    port?: string;
    /**
     * Upload
     * */
    upload?: { string: string };
    /**
     * Download
     * */
    download?: { string: string };
  }): Promise<any> {
    const convertedOptions = {
      username: options.username,
      password: options.password,
      host: options.host,
      port: options.port,
      upload: options.upload,
      download: options.download,
    };

    const out = await this.doAction("scp", convertedOptions);
    return out;
  }
  /** Alias for the [[`captureAndroidScreenshots`]] action
   */
  async screengrab(options: {
    /**
     * Path to the root of your Android SDK installation, e.g. ~/tools/android-sdk-macosx
     * */
    androidHome?: string;
    /**
     * The Android build tools version to use, e.g. '23.0.2'
     * */
    buildToolsVersion?: string;
    /**
     * A list of locales which should be used
     * */
    locales: string[];
    /**
     * Enabling this option will automatically clear previously generated screenshots before running screengrab
     * */
    clearPreviousScreenshots: boolean;
    /**
     * The directory where to store the screenshots
     * */
    outputDirectory: string;
    /**
     * Don't open the summary after running _screengrab_
     * */
    skipOpenSummary: boolean;
    /**
     * The package name of the app under test (e.g. com.yourcompany.yourapp)
     * */
    appPackageName: string;
    /**
     * The package name of the tests bundle (e.g. com.yourcompany.yourapp.test)
     * */
    testsPackageName?: string;
    /**
     * Only run tests in these Java packages
     * */
    useTestsInPackages?: string[];
    /**
     * Only run tests in these Java classes
     * */
    useTestsInClasses?: string[];
    /**
     * Additional launch arguments
     * */
    launchArguments?: string[];
    /**
     * The fully qualified class name of your test instrumentation runner
     * */
    testInstrumentationRunner?: string;
    /**
     * Return the device to this locale after running tests
     * */
    endingLocale?: string;
    /**
     * Restarts the adb daemon using `adb root` to allow access to screenshots directories on device. Use if getting 'Permission denied' errors
     * */
    useAdbRoot: boolean;
    /**
     * The path to the APK for the app under test
     * */
    appApkPath?: string;
    /**
     * The path to the APK for the the tests bundle
     * */
    testsApkPath?: string;
    /**
     * Use the device or emulator with the given serial number or qualifier
     * */
    specificDevice?: string;
    /**
     * Type of device used for screenshots. Matches Google Play Types (phone, sevenInch, tenInch, tv, wear)
     * */
    deviceType: string;
    /**
     * Whether or not to exit Screengrab on test failure. Exiting on failure will not copy sceenshots to local machine nor open sceenshots summary
     * */
    exitOnTestFailure: boolean;
    /**
     * Enabling this option will automatically uninstall the application before running it
     * */
    reinstallApp: boolean;
    /**
     * Add timestamp suffix to screenshot filename
     * */
    useTimestampSuffix: boolean;
    /**
     * Configure the host used by adb to connect, allows running on remote devices farm
     * */
    adbHost?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("screengrab", convertedOptions);
    return out;
  }
  /** Set the build number from the current repository
   */
  async setBuildNumberRepository(options: {
    /**
     * Use hg revision number instead of hash (ignored for non-hg repos)
     * */
    useHgRevisionNumber?: any;
    /**
     * explicitly specify which xcodeproj to use
     * */
    xcodeproj?: string;
  }): Promise<any> {
    const convertedOptions = {
      use_hg_revision_number: options.useHgRevisionNumber,
      xcodeproj: options.xcodeproj,
    };

    const out = await this.doAction(
      "set_build_number_repository",
      convertedOptions
    );
    return out;
  }
  /** Set the changelog for all languages on App Store Connect
   */
  async setChangelog(options: {
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The version number to create/update
     * */
    version?: string;
    /**
     * Changelog text that should be uploaded to App Store Connect
     * */
    changelog?: string;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The platform of the app (ios, appletvos, mac)
     * */
    platform: string;
  }): Promise<any> {
    const convertedOptions = {
      app_identifier: options.appIdentifier,
      username: options.username,
      version: options.version,
      changelog: options.changelog,
      team_id: options.teamId,
      team_name: options.teamName,
      platform: options.platform,
    };

    const out = await this.doAction("set_changelog", convertedOptions);
    return out;
  }
  /** This will create a new release on GitHub and upload assets for it
   */
  async setGithubRelease(options: {
    /**
     * The path to your repo, e.g. 'fastlane/fastlane'
     * */
    repositoryName: string;
    /**
     * The server url. e.g. 'https://your.internal.github.host/api/v3' (Default: 'https://api.github.com')
     * */
    serverUrl?: string;
    /**
     * Personal API Token for GitHub - generate one at https://github.com/settings/tokens
     * */
    apiToken: string;
    /**
     * Pass in the tag name
     * */
    tagName: string;
    /**
     * Name of this release
     * */
    name?: string;
    /**
     * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master)
     * */
    commitish?: string;
    /**
     * Description of this release
     * */
    description?: string;
    /**
     * Whether the release should be marked as draft
     * */
    isDraft?: any;
    /**
     * Whether the release should be marked as prerelease
     * */
    isPrerelease?: any;
    /**
     * Path to assets to be uploaded with the release
     * */
    uploadAssets?: string[];
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("set_github_release", convertedOptions);
    return out;
  }
  /** Sets value to Info.plist of your project as native Ruby data structures
   */
  async setInfoPlistValue(options: {
    /**
     * Name of key in plist
     * */
    key: string;
    /**
     * Name of subkey in plist
     * */
    subkey?: string;
    /**
     * Value to setup
     * */
    value: any;
    /**
     * Path to plist file you want to update
     * */
    path: string;
    /**
     * Path to the output file you want to generate
     * */
    outputFileName?: string;
  }): Promise<any> {
    const convertedOptions = {
      key: options.key,
      subkey: options.subkey,
      value: options.value,
      path: options.path,
      output_file_name: options.outputFileName,
    };

    const out = await this.doAction("set_info_plist_value", convertedOptions);
    return out;
  }
  /** Sets a value for a key with cocoapods-keys
   */
  async setPodKey(options: {
    /**
     * Use bundle exec when there is a Gemfile presented
     * */
    useBundleExec: any;
    /**
     * The key to be saved with cocoapods-keys
     * */
    key: string;
    /**
     * The value to be saved with cocoapods-keys
     * */
    value: string;
    /**
     * The project name
     * */
    project?: string;
  }): Promise<any> {
    const convertedOptions = {
      use_bundle_exec: options.useBundleExec,
      key: options.key,
      value: options.value,
      project: options.project,
    };

    const out = await this.doAction("set_pod_key", convertedOptions);
    return out;
  }
  /** Setup the keychain and match to work with CI
   */
  async setupCi(options: {
    /**
     * Force setup, even if not executed by CI
     * */
    force: any;
    /**
     * CI provider. If none is set, the provider is detected automatically
     * */
    provider?: string;
  }): Promise<any> {
    const convertedOptions = {
      force: options.force,
      provider: options.provider,
    };

    const out = await this.doAction("setup_ci", convertedOptions);
    return out;
  }
  /** Setup the keychain and match to work with CircleCI
   */
  async setupCircleCi(options: {
    /**
     * Force setup, even if not executed by CircleCI
     * */
    force: any;
  }): Promise<any> {
    const convertedOptions = { force: options.force };

    const out = await this.doAction("setup_circle_ci", convertedOptions);
    return out;
  }
  /** Setup xcodebuild, gym and scan for easier Jenkins integration
   */
  async setupJenkins(options: {
    /**
     * Force setup, even if not executed by Jenkins
     * */
    force: any;
    /**
     * Unlocks keychain
     * */
    unlockKeychain: any;
    /**
     * Add to keychain search list
     * */
    addKeychainToSearchList: any;
    /**
     * Set keychain as default
     * */
    setDefaultKeychain: any;
    /**
     * Path to keychain
     * */
    keychainPath?: string;
    /**
     * Keychain password
     * */
    keychainPassword: string;
    /**
     * Set code signing identity from CODE_SIGNING_IDENTITY environment
     * */
    setCodeSigningIdentity: any;
    /**
     * Code signing identity
     * */
    codeSigningIdentity?: string;
    /**
     * The directory in which the ipa file should be stored in
     * */
    outputDirectory: string;
    /**
     * The directory where built products and other derived data will go
     * */
    derivedDataPath: string;
    /**
     * Produce the result bundle describing what occurred will be placed
     * */
    resultBundle: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("setup_jenkins", convertedOptions);
    return out;
  }
  /** Setup the keychain and match to work with Travis CI
   */
  async setupTravis(options: {
    /**
     * Force setup, even if not executed by travis
     * */
    force: any;
  }): Promise<any> {
    const convertedOptions = { force: options.force };

    const out = await this.doAction("setup_travis", convertedOptions);
    return out;
  }
  /** Runs a shell command
   */
  async sh(options: {
    /**
     * Shell command to be executed
     * */
    command: string;
    /**
     * Determines whether fastlane should print out the executed command itself and output of the executed command. If command line option --troubleshoot is used, then it overrides this option to true
     * */
    log?: any;
    /**
     * A callback invoked with the command output if there is a non-zero exit status
     * */
    errorCallback?: any;
  }): Promise<string> {
    const convertedOptions = {
      command: options.command,
      log: options.log,
      error_callback: options.errorCallback,
    };

    const out = await this.doAction("sh", convertedOptions);
    return out;
  }
  /** Alias for the [[`getProvisioningProfile`]] action
   */
  async sigh(options: {
    /**
     * Setting this flag will generate AdHoc profiles instead of App Store Profiles
     * */
    adhoc: any;
    /**
     * Setting this flag will generate Developer ID profiles instead of App Store Profiles
     * */
    developerId: any;
    /**
     * Renew the development certificate instead of the production one
     * */
    development: any;
    /**
     * By default, the certificate will be added to your local machine. Setting this flag will skip this action
     * */
    skipInstall: any;
    /**
     * Renew provisioning profiles regardless of its state - to automatically add all devices for ad hoc profiles
     * */
    force: any;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The name of the profile that is used on the Apple Developer Portal
     * */
    provisioningName?: string;
    /**
     * Use in combination with :provisioning_name - when true only profiles matching this exact name will be downloaded
     * */
    ignoreProfilesWithDifferentName?: any;
    /**
     * Directory in which the profile should be stored
     * */
    outputPath: string;
    /**
     * The ID of the code signing certificate to use (e.g. 78ADL6LVAA)
     * */
    certId?: string;
    /**
     * The certificate name to use for new profiles, or to renew with. (e.g. "Felix Krause")
     * */
    certOwnerName?: string;
    /**
     * Filename to use for the generated provisioning profile (must include .mobileprovision)
     * */
    filename?: string;
    /**
     * Skips the verification of existing profiles which is useful if you have thousands of profiles
     * */
    skipFetchProfiles: any;
    /**
     * Skips the verification of the certificates for every existing profiles. This will make sure the provisioning profile can be used on the local machine
     * */
    skipCertificateVerification: any;
    /**
     * Set the provisioning profile's platform (i.e. ios, tvos)
     * */
    platform: any;
    /**
     * Only fetch existing profile, don't generate new ones
     * */
    readonly?: any;
    /**
     * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
     * */
    templateName?: string;
    /**
     * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
     * */
    failOnNameTaken?: any;
  }): Promise<any> {
    const convertedOptions = {
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
      fail_on_name_taken: options.failOnNameTaken,
    };

    const out = await this.doAction("sigh", convertedOptions);
    return out;
  }
  /** Skip the creation of the fastlane/README.md file when running fastlane
   */
  async skipDocs(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("skip_docs", convertedOptions);
    return out;
  }
  /** Send a success/error message to your [Slack](https://slack.com) group
   */
  async slack(options: {
    /**
     * The message that should be displayed on Slack. This supports the standard Slack markup language
     * */
    message?: string;
    /**
     * This is optional text that appears above the message attachment block. This supports the standard Slack markup language
     * */
    pretext?: string;
    /**
     * #channel or @username
     * */
    channel?: string;
    /**
     * Use webhook's default username and icon settings? (true/false)
     * */
    useWebhookConfiguredUsernameAndIcon?: any;
    /**
     * Create an Incoming WebHook for your Slack group
     * */
    slackUrl: string;
    /**
     * Overrides the webhook's username property if use_webhook_configured_username_and_icon is false
     * */
    username?: string;
    /**
     * Overrides the webhook's image property if use_webhook_configured_username_and_icon is false
     * */
    iconUrl?: string;
    /**
     * Add additional information to this post. payload must be a hash containing any key with any value
     * */
    payload: any;
    /**
     * Remove some of the default payloads. More information about the available payloads on GitHub
     * */
    defaultPayloads?: string[];
    /**
     * Merge additional properties in the slack attachment, see https://api.slack.com/docs/attachments
     * */
    attachmentProperties: any;
    /**
     * Was this build successful? (true/false)
     * */
    success?: any;
    /**
     * Should an error sending the slack notification cause a failure? (true/false)
     * */
    failOnError?: any;
    /**
     * Find and link channel names and usernames (true/false)
     * */
    linkNames?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("slack", convertedOptions);
    return out;
  }
  /** Use slather to generate a code coverage report
   */
  async slather(options: {
    /**
     * The location of the build output
     * */
    buildDirectory?: string;
    /**
     * The project file that slather looks at
     * */
    proj?: string;
    /**
     * The workspace that slather looks at
     * */
    workspace?: string;
    /**
     * Scheme to use when calling slather
     * */
    scheme?: string;
    /**
     * Configuration to use when calling slather (since slather-2.4.1)
     * */
    configuration?: string;
    /**
     * The input format that slather should look for
     * */
    inputFormat?: string;
    /**
     * Tell slather that it is running on Buildkite
     * */
    buildkite?: boolean;
    /**
     * Tell slather that it is running on TeamCity
     * */
    teamcity?: boolean;
    /**
     * Tell slather that it is running on Jenkins
     * */
    jenkins?: boolean;
    /**
     * Tell slather that it is running on TravisCI
     * */
    travis?: boolean;
    /**
     * Tell slather that it is running on TravisCI Pro
     * */
    travisPro?: boolean;
    /**
     * Tell slather that it is running on CircleCI
     * */
    circleci?: boolean;
    /**
     * Tell slather that it should post data to Coveralls
     * */
    coveralls?: boolean;
    /**
     * Tell slather that it should output results to the terminal
     * */
    simpleOutput?: boolean;
    /**
     * Tell slather that it should output results as Gutter JSON format
     * */
    gutterJson?: boolean;
    /**
     * Tell slather that it should output results as Cobertura XML format
     * */
    coberturaXml?: boolean;
    /**
     * Tell slather that it should output results as SonarQube Generic XML format
     * */
    sonarqubeXml?: boolean;
    /**
     * Tell slather that it should output results as llvm-cov show format
     * */
    llvmCov?: any;
    /**
     * Tell slather that it should output results as static HTML pages
     * */
    html?: boolean;
    /**
     * Tell slather that it should open static html pages automatically
     * */
    show: boolean;
    /**
     * Tell slather the location of your source files
     * */
    sourceDirectory?: string;
    /**
     * Tell slather the location of for your output files
     * */
    outputDirectory?: string;
    /**
     * Tell slather to ignore files matching a path or any path from an array of paths
     * */
    ignore?: string[];
    /**
     * Tell slather to enable verbose mode
     * */
    verbose?: boolean;
    /**
     * Use bundle exec to execute slather. Make sure it is in the Gemfile
     * */
    useBundleExec: boolean;
    /**
     * Basename of the binary file, this should match the name of your bundle excluding its extension (i.e. YourApp [for YourApp.app bundle])
     * */
    binaryBasename: any;
    /**
     * Binary file name to be used for code coverage
     * */
    binaryFile?: string[];
    /**
     * Specify which architecture the binary file is in. Needed for universal binaries
     * */
    arch?: string;
    /**
     * A Dir.glob compatible pattern used to limit the lookup to specific source files. Ignored in gcov mode
     * */
    sourceFiles?: any;
    /**
     * The amount of decimals to use for % coverage reporting
     * */
    decimals?: any;
  }): Promise<any> {
    const convertedOptions = {
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
      sonarqube_xml: options.sonarqubeXml,
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

    const out = await this.doAction("slather", convertedOptions);
    return out;
  }
  /** Alias for the [[`captureIosScreenshots`]] action
   */
  async snapshot(options: {
    /**
     * Path the workspace file
     * */
    workspace?: string;
    /**
     * Path the project file
     * */
    project?: string;
    /**
     * Pass additional arguments to xcodebuild for the test phase. Be sure to quote the setting names and values e.g. OTHER_LDFLAGS="-ObjC -lstdc++"
     * */
    xcargs?: string;
    /**
     * Use an extra XCCONFIG file to build your app
     * */
    xcconfig?: string;
    /**
     * A list of devices you want to take the screenshots from
     * */
    devices?: string[];
    /**
     * A list of languages which should be used
     * */
    languages: string[];
    /**
     * A list of launch arguments which should be used
     * */
    launchArguments: string[];
    /**
     * The directory where to store the screenshots
     * */
    outputDirectory: string;
    /**
     * If the logs generated by the app (e.g. using NSLog, perror, etc.) in the Simulator should be written to the output_directory
     * */
    outputSimulatorLogs?: boolean;
    /**
     * By default, the latest version should be used automatically. If you want to change it, do it here
     * */
    iosVersion?: string;
    /**
     * Don't open the HTML summary after running _snapshot_
     * */
    skipOpenSummary: any;
    /**
     * Do not check for most recent SnapshotHelper code
     * */
    skipHelperVersionCheck: any;
    /**
     * Enabling this option will automatically clear previously generated screenshots before running snapshot
     * */
    clearPreviousScreenshots: any;
    /**
     * Enabling this option will automatically uninstall the application before running it
     * */
    reinstallApp: any;
    /**
     * Enabling this option will automatically erase the simulator before running the application
     * */
    eraseSimulator: any;
    /**
     * Enabling this option wil automatically override the status bar to show 9:41 AM, full battery, and full reception
     * */
    overrideStatusBar: any;
    /**
     * Enabling this option will configure the Simulator's system language
     * */
    localizeSimulator: any;
    /**
     * Enabling this option will configure the Simulator to be in dark mode (false for light, true for dark)
     * */
    darkMode?: boolean;
    /**
     * The bundle identifier of the app to uninstall (only needed when enabling reinstall_app)
     * */
    appIdentifier?: string;
    /**
     * A list of photos that should be added to the simulator before running the application
     * */
    addPhotos?: string[];
    /**
     * A list of videos that should be added to the simulator before running the application
     * */
    addVideos?: string[];
    /**
     * A path to screenshots.html template
     * */
    htmlTemplate?: string;
    /**
     * The directory where to store the build log
     * */
    buildlogPath: string;
    /**
     * Should the project be cleaned before building it?
     * */
    clean: any;
    /**
     * Test without building, requires a derived data path
     * */
    testWithoutBuilding?: boolean;
    /**
     * The configuration to use when building the app. Defaults to 'Release'
     * */
    configuration?: string;
    /**
     * Additional xcpretty arguments
     * */
    xcprettyArgs?: string;
    /**
     * The SDK that should be used for building the application
     * */
    sdk?: string;
    /**
     * The scheme you want to use, this must be the scheme for the UI Tests
     * */
    scheme?: string;
    /**
     * The number of times a test can fail before snapshot should stop retrying
     * */
    numberOfRetries: any;
    /**
     * Should snapshot stop immediately after the tests completely failed on one device?
     * */
    stopAfterFirstError: any;
    /**
     * The directory where build products and other derived data will go
     * */
    derivedDataPath?: string;
    /**
     * Should an Xcode result bundle be generated in the output directory
     * */
    resultBundle?: any;
    /**
     * The name of the target you want to test (if you desire to override the Target Application from Xcode)
     * */
    testTargetName?: string;
    /**
     * Separate the log files per device and per language
     * */
    namespaceLogFiles?: any;
    /**
     * Take snapshots on multiple simulators concurrently. Note: This option is only applicable when running against Xcode 9
     * */
    concurrentSimulators: any;
    /**
     * Disable the simulator from showing the 'Slide to type' prompt
     * */
    disableSlideToType?: any;
    /**
     * Sets a custom path for Swift Package Manager dependencies
     * */
    clonedSourcePackagesPath?: string;
    /**
     * The testplan associated with the scheme that should be used for testing
     * */
    testplan?: string;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to run
     * */
    onlyTesting?: any;
    /**
     * Array of strings matching Test Bundle/Test Suite/Test Cases to skip
     * */
    skipTesting?: any;
    /**
     * Disable xcpretty formatting of build
     * */
    disableXcpretty?: boolean;
  }): Promise<any> {
    const convertedOptions = {
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
      override_status_bar: options.overrideStatusBar,
      localize_simulator: options.localizeSimulator,
      dark_mode: options.darkMode,
      app_identifier: options.appIdentifier,
      add_photos: options.addPhotos,
      add_videos: options.addVideos,
      html_template: options.htmlTemplate,
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
      only_testing: options.onlyTesting,
      skip_testing: options.skipTesting,
      disable_xcpretty: options.disableXcpretty,
    };

    const out = await this.doAction("snapshot", convertedOptions);
    return out;
  }
  /** Invokes sonar-scanner to programmatically run SonarQube analysis
   */
  async sonar(options: {
    /**
     * The path to your sonar project configuration file; defaults to `sonar-project.properties`
     * */
    projectConfigurationPath?: string;
    /**
     * The key sonar uses to identify the project, e.g. `name.gretzki.awesomeApp`. Must either be specified here or inside the sonar project configuration file
     * */
    projectKey?: string;
    /**
     * The name of the project that gets displayed on the sonar report page. Must either be specified here or inside the sonar project configuration file
     * */
    projectName?: string;
    /**
     * The project's version that gets displayed on the sonar report page. Must either be specified here or inside the sonar project configuration file
     * */
    projectVersion?: string;
    /**
     * Comma-separated paths to directories containing source files. Must either be specified here or inside the sonar project configuration file
     * */
    sourcesPath?: string;
    /**
     * Language key, e.g. objc
     * */
    projectLanguage?: string;
    /**
     * Used encoding of source files, e.g., UTF-8
     * */
    sourceEncoding?: string;
    /**
     * Pass additional arguments to sonar-scanner. Be sure to provide the arguments with a leading `-D` e.g. FL_SONAR_RUNNER_ARGS="-Dsonar.verbose=true"
     * */
    sonarRunnerArgs?: string;
    /**
     * Pass the Sonar Login token (e.g: xxxxxxprivate_token_XXXXbXX7e)
     * */
    sonarLogin?: string;
    /**
     * Pass the url of the Sonar server
     * */
    sonarUrl?: string;
    /**
     * Key of the organization on SonarCloud
     * */
    sonarOrganization?: string;
    /**
     * Pass the branch name which is getting scanned
     * */
    branchName?: string;
    /**
     * The name of the branch that contains the changes to be merged
     * */
    pullRequestBranch?: string;
    /**
     * The long-lived branch into which the PR will be merged
     * */
    pullRequestBase?: string;
    /**
     * Unique identifier of your PR. Must correspond to the key of the PR in GitHub or TFS
     * */
    pullRequestKey?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("sonar", convertedOptions);
    return out;
  }
  /** Find, print, and copy Spaceship logs
   */
  async spaceshipLogs(options: {
    /**
     * Finds only the latest Spaceshop log file if set to true, otherwise returns all
     * */
    latest: boolean;
    /**
     * Prints the contents of the found Spaceship log file(s)
     * */
    printContents: boolean;
    /**
     * Prints the paths of the found Spaceship log file(s)
     * */
    printPaths: boolean;
    /**
     * Copies the found Spaceship log file(s) to a directory
     * */
    copyToPath?: string;
    /**
     * Copies the contents of the found Spaceship log file(s) to the clipboard
     * */
    copyToClipboard: boolean;
  }): Promise<any> {
    const convertedOptions = {
      latest: options.latest,
      print_contents: options.printContents,
      print_paths: options.printPaths,
      copy_to_path: options.copyToPath,
      copy_to_clipboard: options.copyToClipboard,
    };

    const out = await this.doAction("spaceship_logs", convertedOptions);
    return out;
  }
  /** Upload dSYM file to [Splunk MINT](https://mint.splunk.com/)
   */
  async splunkmint(options: {
    /**
     * dSYM.zip file to upload to Splunk MINT
     * */
    dsym?: string;
    /**
     * Splunk MINT App API key e.g. f57a57ca
     * */
    apiKey: string;
    /**
     * Splunk MINT API token e.g. e05ba40754c4869fb7e0b61
     * */
    apiToken: string;
    /**
     * Make detailed output
     * */
    verbose?: any;
    /**
     * Show upload progress
     * */
    uploadProgress?: any;
    /**
     * Proxy username
     * */
    proxyUsername?: string;
    /**
     * Proxy password
     * */
    proxyPassword?: string;
    /**
     * Proxy address
     * */
    proxyAddress?: string;
    /**
     * Proxy port
     * */
    proxyPort?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("splunkmint", convertedOptions);
    return out;
  }
  /** Runs Swift Package Manager on your project
   */
  async spm(options: {
    /**
     * The swift command (one of: build, test, clean, reset, update, resolve, generate-xcodeproj, init)
     * */
    command: string;
    /**
     * Specify build/cache directory [default: ./.build]
     * */
    buildPath?: string;
    /**
     * Change working directory before any other operation
     * */
    packagePath?: string;
    /**
     * Use xcconfig file to override swift package generate-xcodeproj defaults
     * */
    xcconfig?: string;
    /**
     * Build with configuration (debug|release) [default: debug]
     * */
    configuration?: string;
    /**
     * Specifies the output type for xcpretty. eg. 'test', or 'simple'
     * */
    xcprettyOutput?: string;
    /**
     * Pass in xcpretty additional command line arguments (e.g. '--test --no-color' or '--tap --no-utf'), requires xcpretty_output to be specified also
     * */
    xcprettyArgs?: string;
    /**
     * Increase verbosity of informational output
     * */
    verbose: any;
  }): Promise<any> {
    const convertedOptions = {
      command: options.command,
      build_path: options.buildPath,
      package_path: options.packagePath,
      xcconfig: options.xcconfig,
      configuration: options.configuration,
      xcpretty_output: options.xcprettyOutput,
      xcpretty_args: options.xcprettyArgs,
      verbose: options.verbose,
    };

    const out = await this.doAction("spm", convertedOptions);
    return out;
  }
  /** Allows remote command execution using ssh
   */
  async ssh(options: {
    /**
     * Username
     * */
    username: string;
    /**
     * Password
     * */
    password?: string;
    /**
     * Hostname
     * */
    host: string;
    /**
     * Port
     * */
    port?: string;
    /**
     * Commands
     * */
    commands?: string[];
    /**
     * Log commands and output
     * */
    log?: any;
  }): Promise<any> {
    const convertedOptions = {
      username: options.username,
      password: options.password,
      host: options.host,
      port: options.port,
      commands: options.commands,
      log: options.log,
    };

    const out = await this.doAction("ssh", convertedOptions);
    return out;
  }
  /** Alias for the [[`uploadToPlayStore`]] action
   */
  async supply(options: {
    /**
     * The package name of the application to use
     * */
    packageName: string;
    /**
     * Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
     * */
    versionName?: string;
    /**
     * Version code (used when updating rollout or promoting specific versions)
     * */
    versionCode?: any;
    /**
     * Release status (used when uploading new apks/aabs) - valid values are completed, draft, halted, inProgress
     * */
    releaseStatus?: string;
    /**
     * The track of the application to use. The default available tracks are: production, beta, alpha, internal
     * */
    track: string;
    /**
     * The percentage of the user fraction when uploading to the rollout track
     * */
    rollout?: string;
    /**
     * Path to the directory containing the metadata files
     * */
    metadataPath?: string;
    /**
     * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
     * */
    key?: string;
    /**
     * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
     * */
    issuer?: string;
    /**
     * The path to a file containing service account JSON, used to authenticate with Google
     * */
    jsonKey?: string;
    /**
     * The raw service account JSON data used to authenticate with Google
     * */
    jsonKeyData?: string;
    /**
     * Path to the APK file to upload
     * */
    apk?: string;
    /**
     * An array of paths to APK files to upload
     * */
    apkPaths?: string[];
    /**
     * Path to the AAB file to upload
     * */
    aab?: string;
    /**
     * An array of paths to AAB files to upload
     * */
    aabPaths?: string[];
    /**
     * Whether to skip uploading APK
     * */
    skipUploadApk?: boolean;
    /**
     * Whether to skip uploading AAB
     * */
    skipUploadAab?: boolean;
    /**
     * Whether to skip uploading metadata, changelogs not included
     * */
    skipUploadMetadata?: boolean;
    /**
     * Whether to skip uploading changelogs
     * */
    skipUploadChangelogs?: boolean;
    /**
     * Whether to skip uploading images, screenshots not included
     * */
    skipUploadImages?: boolean;
    /**
     * Whether to skip uploading SCREENSHOTS
     * */
    skipUploadScreenshots?: boolean;
    /**
     * The track to promote to. The default available tracks are: production, beta, alpha, internal
     * */
    trackPromoteTo?: string;
    /**
     * Only validate changes with Google Play rather than actually publish
     * */
    validateOnly?: boolean;
    /**
     * Path to the mapping file to upload
     * */
    mapping?: string;
    /**
     * An array of paths to mapping files to upload
     * */
    mappingPaths?: string[];
    /**
     * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
     * */
    rootUrl?: string;
    /**
     * **DEPRECATED!** Google Play does this automatically now - Check the other tracks for superseded versions and disable them
     * */
    checkSupersededTracks?: boolean;
    /**
     * Timeout for read, open, and send (in seconds)
     * */
    timeout?: any;
    /**
     * **DEPRECATED!** Google Play does this automatically now - When promoting to a new track, deactivate the binary in the origin track
     * */
    deactivateOnPromote?: boolean;
    /**
     * An array of version codes to retain when publishing a new APK
     * */
    versionCodesToRetain?: string[];
    /**
     * In-app update priority for all the newly added apks in the release. Can take values between [0,5]
     * */
    inAppUpdatePriority?: any;
    /**
     * References version of 'main' expansion file
     * */
    obbMainReferencesVersion?: any;
    /**
     * Size of 'main' expansion file in bytes
     * */
    obbMainFileSize?: any;
    /**
     * References version of 'patch' expansion file
     * */
    obbPatchReferencesVersion?: any;
    /**
     * Size of 'patch' expansion file in bytes
     * */
    obbPatchFileSize?: any;
  }): Promise<any> {
    const convertedOptions = {
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
      in_app_update_priority: options.inAppUpdatePriority,
      obb_main_references_version: options.obbMainReferencesVersion,
      obb_main_file_size: options.obbMainFileSize,
      obb_patch_references_version: options.obbPatchReferencesVersion,
      obb_patch_file_size: options.obbPatchFileSize,
    };

    const out = await this.doAction("supply", convertedOptions);
    return out;
  }
  /** Run swift code validation using SwiftLint
   */
  async swiftlint(options: {
    /**
     * SwiftLint mode: :lint, :autocorrect or :analyze
     * */
    mode?: any;
    /**
     * Specify path to lint
     * */
    path?: string;
    /**
     * Path to output SwiftLint result
     * */
    outputFile?: string;
    /**
     * Custom configuration file of SwiftLint
     * */
    configFile?: string;
    /**
     * Fail on warnings? (true/false)
     * */
    strict?: boolean;
    /**
     * List of files to process
     * */
    files?: any;
    /**
     * Ignore the exit status of the SwiftLint command, so that serious violations                                                     don't fail the build (true/false)
     * */
    ignoreExitStatus?: boolean;
    /**
     * Raises an error if swiftlint fails, so you can fail CI/CD jobs if necessary                                                     (true/false)
     * */
    raiseIfSwiftlintError?: boolean;
    /**
     * Choose output reporter. Available: xcode, json, csv, checkstyle, junit, html,                                                      emoji, sonarqube, markdown, github-actions-logging
     * */
    reporter?: string;
    /**
     * Don't print status logs like 'Linting <file>' & 'Done linting'
     * */
    quiet?: boolean;
    /**
     * Path to the `swiftlint` executable on your machine
     * */
    executable?: string;
    /**
     * Format code when mode is :autocorrect
     * */
    format?: boolean;
    /**
     * Ignore the cache when mode is :autocorrect or :lint
     * */
    noCache?: boolean;
    /**
     * Compiler log path when mode is :analyze
     * */
    compilerLogPath?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("swiftlint", convertedOptions);
    return out;
  }
  /** Easily sync your certificates and profiles across your team (via _match_)
   */
  async syncCodeSigning(options: {
    /**
     * Define the profile type, can be appstore, adhoc, development, enterprise, developer_id
     * */
    type: string;
    /**
     * Create additional cert types needed for macOS installers (valid values: mac_installer_distribution, developer_id_installer)
     * */
    additionalCertTypes?: string[];
    /**
     * Only fetch existing certificates and profiles, don't generate new ones
     * */
    readonly: boolean;
    /**
     * Create a certificate type for Xcode 11 and later (Apple Development or Apple Distribution)
     * */
    generateAppleCerts: boolean;
    /**
     * Skip syncing provisioning profiles
     * */
    skipProvisioningProfiles: boolean;
    /**
     * The bundle identifier(s) of your app (comma-separated)
     * */
    appIdentifier: string[];
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your Developer Portal team if you're in multiple teams
     * */
    teamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * Define where you want to store your certificates
     * */
    storageMode: string;
    /**
     * URL to the git repo containing all the certificates
     * */
    gitUrl: string;
    /**
     * Specific git branch to use
     * */
    gitBranch: string;
    /**
     * git user full name to commit
     * */
    gitFullName?: string;
    /**
     * git user email to commit
     * */
    gitUserEmail?: string;
    /**
     * Make a shallow clone of the repository (truncate the history to 1 revision)
     * */
    shallowClone: boolean;
    /**
     * Clone just the branch specified, instead of the whole repo. This requires that the branch already exists. Otherwise the command will fail
     * */
    cloneBranchDirectly: boolean;
    /**
     * Use a basic authorization header to access the git repo (e.g.: access via HTTPS, GitHub Actions, etc), usually a string in Base64
     * */
    gitBasicAuthorization?: string;
    /**
     * Use a bearer authorization header to access the git repo (e.g.: access to an Azure Devops repository), usually a string in Base64
     * */
    gitBearerAuthorization?: string;
    /**
     * Name of the Google Cloud Storage bucket to use
     * */
    googleCloudBucketName?: string;
    /**
     * Path to the gc_keys.json file
     * */
    googleCloudKeysFile?: string;
    /**
     * ID of the Google Cloud project to use for authentication
     * */
    googleCloudProjectId?: string;
    /**
     * Name of the S3 region
     * */
    s3Region?: string;
    /**
     * S3 access key
     * */
    s3AccessKey?: string;
    /**
     * S3 secret access key
     * */
    s3SecretAccessKey?: string;
    /**
     * Name of the S3 bucket
     * */
    s3Bucket?: string;
    /**
     * Keychain the items should be imported to
     * */
    keychainName: string;
    /**
     * This might be required the first time you access certificates on a new mac. For the login/default keychain this is your account password
     * */
    keychainPassword?: string;
    /**
     * Renew the provisioning profiles every time you run match
     * */
    force: boolean;
    /**
     * Renew the provisioning profiles if the device count on the developer portal has changed. Ignored for profile type 'appstore'
     * */
    forceForNewDevices: boolean;
    /**
     * Disables confirmation prompts during nuke, answering them with yes
     * */
    skipConfirmation: boolean;
    /**
     * Skip generation of a README.md for the created git repository
     * */
    skipDocs: boolean;
    /**
     * Set the provisioning profile's platform to work with (i.e. ios, tvos, macos)
     * */
    platform: string;
    /**
     * The name of provisioning profile template. If the developer account has provisioning profile templates (aka: custom entitlements), the template name can be found by inspecting the Entitlements drop-down while creating/editing a provisioning profile (e.g. "Apple Pay Pass Suppression Development")
     * */
    templateName?: string;
    /**
     * A custom name for the provisioning profile. This will replace the default provisioning profile name if specified
     * */
    profileName?: string;
    /**
     * Should the command fail if it was about to create a duplicate of an existing provisioning profile. It can happen due to issues on Apple Developer Portal, when profile to be recreated was not properly deleted first
     * */
    failOnNameTaken?: boolean;
    /**
     * Path in which to export certificates, key and profile
     * */
    outputPath?: string;
    /**
     * Print out extra information and all commands
     * */
    verbose: boolean;
  }): Promise<any> {
    const convertedOptions = {
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
      profile_name: options.profileName,
      fail_on_name_taken: options.failOnNameTaken,
      output_path: options.outputPath,
      verbose: options.verbose,
    };

    const out = await this.doAction("sync_code_signing", convertedOptions);
    return out;
  }
  /** Specify the Team ID you want to use for the Apple Developer Portal
   */
  async teamId(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("team_id", convertedOptions);
    return out;
  }
  /** Set a team to use by its name
   */
  async teamName(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("team_name", convertedOptions);
    return out;
  }
  /** Upload a new build to [TestFairy](https://www.testfairy.com/)
   */
  async testfairy(options: {
    /**
     * API Key for TestFairy
     * */
    apiKey: string;
    /**
     * Path to your IPA file for iOS
     * */
    ipa?: string;
    /**
     * Path to your APK file for Android
     * */
    apk?: string;
    /**
     * Symbols mapping file
     * */
    symbolsFile?: string;
    /**
     * API URL for TestFairy
     * */
    uploadUrl?: string;
    /**
     * Array of tester groups to be notified
     * */
    testersGroups?: string[];
    /**
     * Array of metrics to record (cpu,memory,network,phone_signal,gps,battery,mic,wifi)
     * */
    metrics?: string[];
    /**
     * Additional release notes for this upload. This text will be added to email notifications
     * */
    comment?: string;
    /**
     * Allows an easy upgrade of all users to the current version. To enable set to 'on'
     * */
    autoUpdate?: string;
    /**
     * Send email to testers
     * */
    notify?: string;
    /**
     * Array of options (shake,video_only_wifi,anonymous)
     * */
    options?: string[];
    /**
     * Array of custom options. Contact support@testfairy.com for more information
     * */
    custom?: string;
    /**
     * Request timeout in seconds
     * */
    timeout?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("testfairy", convertedOptions);
    return out;
  }
  /** Alias for the [[`uploadToTestflight`]] action
   */
  async testflight(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The bundle identifier of the app to upload or manage testers (optional)
     * */
    appIdentifier?: string;
    /**
     * The platform to use (optional)
     * */
    appPlatform?: string;
    /**
     * Apple ID property in the App Information section in App Store Connect
     * */
    appleId?: string;
    /**
     * Path to the ipa file to upload
     * */
    ipa?: string;
    /**
     * Do you need a demo account when Apple does review?
     * */
    demoAccountRequired: boolean;
    /**
     * Beta app review information for contact info and demo account
     * */
    betaAppReviewInfo?: { string: string };
    /**
     * Localized beta app test info for description, feedback email, marketing url, and privacy policy
     * */
    localizedAppInfo?: { string: string };
    /**
     * Provide the 'Beta App Description' when uploading a new build
     * */
    betaAppDescription?: string;
    /**
     * Provide the beta app email when uploading a new build
     * */
    betaAppFeedbackEmail?: string;
    /**
     * Localized beta app test info for what's new
     * */
    localizedBuildInfo?: { string: string };
    /**
     * Provide the 'What to Test' text when uploading a new build. `skip_waiting_for_build_processing: false` is required to set the changelog
     * */
    changelog?: string;
    /**
     * Skip the distributing action of pilot and only upload the ipa file
     * */
    skipSubmission: any;
    /**
     * If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
     * */
    skipWaitingForBuildProcessing: any;
    /**
     * **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
     * */
    updateBuildInfoOnUpload?: any;
    /**
     * Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
     * */
    usesNonExemptEncryption: boolean;
    /**
     * Should the build be distributed to external testers?
     * */
    distributeExternal: any;
    /**
     * Should notify external testers?
     * */
    notifyExternalTesters: any;
    /**
     * The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
     * */
    appVersion?: string;
    /**
     * The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
     * */
    buildNumber?: string;
    /**
     * Should expire previous builds?
     * */
    expirePreviousBuilds: any;
    /**
     * The tester's first name
     * */
    firstName?: string;
    /**
     * The tester's last name
     * */
    lastName?: string;
    /**
     * The tester's email
     * */
    email?: string;
    /**
     * Path to a CSV file of testers
     * */
    testersFilePath?: string;
    /**
     * Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"`
     * */
    groups?: string[];
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
     * */
    devPortalTeamId?: string;
    /**
     * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
     * */
    itcProvider?: string;
    /**
     * Interval in seconds to wait for App Store Connect processing
     * */
    waitProcessingInterval: any;
    /**
     * **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
     * */
    waitForUploadedBuild?: any;
    /**
     * Expire previous if it's 'waiting for review'
     * */
    rejectBuildWaitingForReview: any;
  }): Promise<any> {
    const convertedOptions = {
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
      expire_previous_builds: options.expirePreviousBuilds,
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

    const out = await this.doAction("testflight", convertedOptions);
    return out;
  }
  /** Upload a new build to [Tryouts](https://tryouts.io/)
   */
  async tryouts(options: {
    /**
     * Tryouts application hash
     * */
    appId: string;
    /**
     * API Token (api_key:api_secret) for Tryouts Access
     * */
    apiToken: string;
    /**
     * Path to your IPA or APK file. Optional if you use the _gym_ or _xcodebuild_ action
     * */
    buildFile: string;
    /**
     * Release notes
     * */
    notes?: string;
    /**
     * Release notes text file path. Overrides the :notes parameter
     * */
    notesPath?: string;
    /**
     * Notify testers? 0 for no
     * */
    notify: any;
    /**
     * 2 to make your release public. Release will be distributed to available testers. 1 to make your release private. Release won't be distributed to testers. This also prevents release from showing up for SDK update
     * */
    status: any;
  }): Promise<any> {
    const convertedOptions = {
      app_id: options.appId,
      api_token: options.apiToken,
      build_file: options.buildFile,
      notes: options.notes,
      notes_path: options.notesPath,
      notify: options.notify,
      status: options.status,
    };

    const out = await this.doAction("tryouts", convertedOptions);
    return out;
  }
  /** Post a tweet on [Twitter.com](https://twitter.com)
   */
  async twitter(options: {
    /**
     * Consumer Key
     * */
    consumerKey: string;
    /**
     * Consumer Secret
     * */
    consumerSecret: string;
    /**
     * Access Token
     * */
    accessToken: string;
    /**
     * Access Token Secret
     * */
    accessTokenSecret: string;
    /**
     * The tweet
     * */
    message: string;
  }): Promise<any> {
    const convertedOptions = {
      consumer_key: options.consumerKey,
      consumer_secret: options.consumerSecret,
      access_token: options.accessToken,
      access_token_secret: options.accessTokenSecret,
      message: options.message,
    };

    const out = await this.doAction("twitter", convertedOptions);
    return out;
  }
  /** Post a message to [Typetalk](https://www.typetalk.com/)
   */
  async typetalk(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("typetalk", convertedOptions);
    return out;
  }
  /** Unlock a keychain
   */
  async unlockKeychain(options: {
    /**
     * Path to the keychain file
     * */
    path: string;
    /**
     * Keychain password
     * */
    password: string;
    /**
     * Add to keychain search list
     * */
    addToSearchList: any;
    /**
     * Set as default keychain
     * */
    setDefault: any;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      password: options.password,
      add_to_search_list: options.addToSearchList,
      set_default: options.setDefault,
    };

    const out = await this.doAction("unlock_keychain", convertedOptions);
    return out;
  }
  /** This action changes the app group identifiers in the entitlements file
   */
  async updateAppGroupIdentifiers(options: {
    /**
     * The path to the entitlement file which contains the app group identifiers
     * */
    entitlementsFile: string;
    /**
     * An Array of unique identifiers for the app groups. Eg. ['group.com.test.testapp']
     * */
    appGroupIdentifiers: any;
  }): Promise<any> {
    const convertedOptions = {
      entitlements_file: options.entitlementsFile,
      app_group_identifiers: options.appGroupIdentifiers,
    };

    const out = await this.doAction(
      "update_app_group_identifiers",
      convertedOptions
    );
    return out;
  }
  /** Update the project's bundle identifier
   */
  async updateAppIdentifier(options: {
    /**
     * Path to your Xcode project
     * */
    xcodeproj: string;
    /**
     * Path to info plist, relative to your Xcode project
     * */
    plistPath: string;
    /**
     * The app Identifier you want to set
     * */
    appIdentifier: string;
  }): Promise<any> {
    const convertedOptions = {
      xcodeproj: options.xcodeproj,
      plist_path: options.plistPath,
      app_identifier: options.appIdentifier,
    };

    const out = await this.doAction("update_app_identifier", convertedOptions);
    return out;
  }
  /** Configures Xcode's Codesigning options
   */
  async updateCodeSigningSettings(options: {
    /**
     * Path to your Xcode project
     * */
    path: string;
    /**
     * Defines if project should use automatic signing
     * */
    useAutomaticSigning: any;
    /**
     * Team ID, is used when upgrading project
     * */
    teamId?: string;
    /**
     * Specify targets you want to toggle the signing mech. (default to all targets)
     * */
    targets?: string[];
    /**
     * Specify build_configurations you want to toggle the signing mech. (default to all targets)
     * */
    buildConfigurations?: string[];
    /**
     * Code signing identity type (iPhone Developer, iPhone Distribution)
     * */
    codeSignIdentity?: string;
    /**
     * Provisioning profile name to use for code signing
     * */
    profileName?: string;
    /**
     * Provisioning profile UUID to use for code signing
     * */
    profileUuid?: string;
    /**
     * Application Product Bundle Identifier
     * */
    bundleIdentifier?: string;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction(
      "update_code_signing_settings",
      convertedOptions
    );
    return out;
  }
  /** Makes sure fastlane-tools are up-to-date when running fastlane
   */
  async updateFastlane(options: {
    /**
     * Don't update during this run. This is used internally
     * */
    noUpdate: any;
    /**
     * **DEPRECATED!** Nightly builds are no longer being made available - Opt-in to install and use nightly fastlane builds
     * */
    nightly?: any;
  }): Promise<any> {
    const convertedOptions = {
      no_update: options.noUpdate,
      nightly: options.nightly,
    };

    const out = await this.doAction("update_fastlane", convertedOptions);
    return out;
  }
  /** This action changes the iCloud container identifiers in the entitlements file
   */
  async updateIcloudContainerIdentifiers(options: {
    /**
     * The path to the entitlement file which contains the iCloud container identifiers
     * */
    entitlementsFile: string;
    /**
     * An Array of unique identifiers for the iCloud containers. Eg. ['iCloud.com.test.testapp']
     * */
    icloudContainerIdentifiers: any;
  }): Promise<any> {
    const convertedOptions = {
      entitlements_file: options.entitlementsFile,
      icloud_container_identifiers: options.icloudContainerIdentifiers,
    };

    const out = await this.doAction(
      "update_icloud_container_identifiers",
      convertedOptions
    );
    return out;
  }
  /** Update a Info.plist file with bundle identifier and display name
   */
  async updateInfoPlist(options: {
    /**
     * Path to your Xcode project
     * */
    xcodeproj?: string;
    /**
     * Path to info plist
     * */
    plistPath?: string;
    /**
     * Scheme of info plist
     * */
    scheme?: string;
    /**
     * The App Identifier of your app
     * */
    appIdentifier?: string;
    /**
     * The Display Name of your app
     * */
    displayName?: string;
    /**
     * A block to process plist with custom logic
     * */
    block?: any;
  }): Promise<any> {
    const convertedOptions = {
      xcodeproj: options.xcodeproj,
      plist_path: options.plistPath,
      scheme: options.scheme,
      app_identifier: options.appIdentifier,
      display_name: options.displayName,
      block: options.block,
    };

    const out = await this.doAction("update_info_plist", convertedOptions);
    return out;
  }
  /** This action changes the keychain access groups in the entitlements file
   */
  async updateKeychainAccessGroups(options: {
    /**
     * The path to the entitlement file which contains the keychain access groups
     * */
    entitlementsFile: string;
    /**
     * An Array of unique identifiers for the keychain access groups. Eg. ['your.keychain.access.groups.identifiers']
     * */
    identifiers: any;
  }): Promise<any> {
    const convertedOptions = {
      entitlements_file: options.entitlementsFile,
      identifiers: options.identifiers,
    };

    const out = await this.doAction(
      "update_keychain_access_groups",
      convertedOptions
    );
    return out;
  }
  /** Update a plist file
   */
  async updatePlist(options: {
    /**
     * Path to plist file
     * */
    plistPath?: string;
    /**
     * A block to process plist with custom logic
     * */
    block: any;
  }): Promise<any> {
    const convertedOptions = {
      plist_path: options.plistPath,
      block: options.block,
    };

    const out = await this.doAction("update_plist", convertedOptions);
    return out;
  }
  /** Updated code signing settings from 'Automatic' to a specific profile
   */
  async updateProjectCodeSigning(options: {
    /**
     * Path to your Xcode project
     * */
    path: string;
    /**
     * **DEPRECATED!** Use `:uuid` instead
     * */
    udid?: string;
    /**
     * The UUID of the provisioning profile you want to use
     * */
    uuid: string;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      udid: options.udid,
      uuid: options.uuid,
    };

    const out = await this.doAction(
      "update_project_code_signing",
      convertedOptions
    );
    return out;
  }
  /** Update projects code signing settings from your provisioning profile
   */
  async updateProjectProvisioning(options: {
    /**
     * Path to your Xcode project
     * */
    xcodeproj?: string;
    /**
     * Path to provisioning profile (.mobileprovision)
     * */
    profile: string;
    /**
     * A filter for the target name. Use a standard regex
     * */
    targetFilter?: any;
    /**
     * Legacy option, use 'target_filter' instead
     * */
    buildConfigurationFilter?: string;
    /**
     * A filter for the build configuration name. Use a standard regex. Applied to all configurations if not specified
     * */
    buildConfiguration?: any;
    /**
     * Path to apple root certificate
     * */
    certificate: string;
    /**
     * Code sign identity for build configuration
     * */
    codeSigningIdentity?: string;
  }): Promise<any> {
    const convertedOptions = {
      xcodeproj: options.xcodeproj,
      profile: options.profile,
      target_filter: options.targetFilter,
      build_configuration_filter: options.buildConfigurationFilter,
      build_configuration: options.buildConfiguration,
      certificate: options.certificate,
      code_signing_identity: options.codeSigningIdentity,
    };

    const out = await this.doAction(
      "update_project_provisioning",
      convertedOptions
    );
    return out;
  }
  /** Update Xcode Development Team ID
   */
  async updateProjectTeam(options: {
    /**
     * Path to your Xcode project
     * */
    path: string;
    /**
     * Name of the targets you want to update
     * */
    targets?: string[];
    /**
     * The Team ID you want to use
     * */
    teamid: string;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      targets: options.targets,
      teamid: options.teamid,
    };

    const out = await this.doAction("update_project_team", convertedOptions);
    return out;
  }
  /** Set [Urban Airship](https://www.urbanairship.com/) plist configuration values
   */
  async updateUrbanAirshipConfiguration(options: {
    /**
     * Path to Urban Airship configuration Plist
     * */
    plistPath: string;
    /**
     * The development app key
     * */
    developmentAppKey?: string;
    /**
     * The development app secret
     * */
    developmentAppSecret?: string;
    /**
     * The production app key
     * */
    productionAppKey?: string;
    /**
     * The production app secret
     * */
    productionAppSecret?: string;
    /**
     * Automatically detect provisioning mode
     * */
    detectProvisioningMode?: boolean;
  }): Promise<any> {
    const convertedOptions = {
      plist_path: options.plistPath,
      development_app_key: options.developmentAppKey,
      development_app_secret: options.developmentAppSecret,
      production_app_key: options.productionAppKey,
      production_app_secret: options.productionAppSecret,
      detect_provisioning_mode: options.detectProvisioningMode,
    };

    const out = await this.doAction(
      "update_urban_airship_configuration",
      convertedOptions
    );
    return out;
  }
  /** Updates the URL schemes in the given Info.plist
   */
  async updateUrlSchemes(options: {
    /**
     * The Plist file's path
     * */
    path: string;
    /**
     * The new URL schemes
     * */
    urlSchemes?: any;
    /**
     * Block that is called to update schemes with current schemes passed in as parameter
     * */
    updateUrlSchemes?: any;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      url_schemes: options.urlSchemes,
      update_url_schemes: options.updateUrlSchemes,
    };

    const out = await this.doAction("update_url_schemes", convertedOptions);
    return out;
  }
  /** Upload dSYM symbolication files to Crashlytics
   */
  async uploadSymbolsToCrashlytics(options: {
    /**
     * Path to the DSYM file or zip to upload
     * */
    dsymPath?: string;
    /**
     * Paths to the DSYM files or zips to upload
     * */
    dsymPaths?: string[];
    /**
     * Crashlytics API Key
     * */
    apiToken?: string;
    /**
     * Path to GoogleService-Info.plist
     * */
    gspPath?: string;
    /**
     * Firebase Crashlytics APP ID
     * */
    appId?: string;
    /**
     * The path to the upload-symbols file of the Fabric app
     * */
    binaryPath?: string;
    /**
     * The platform of the app (ios, appletvos, mac)
     * */
    platform: string;
    /**
     * The number of threads to use for simultaneous dSYM upload
     * */
    dsymWorkerThreads?: any;
  }): Promise<any> {
    const convertedOptions = {
      dsym_path: options.dsymPath,
      dsym_paths: options.dsymPaths,
      api_token: options.apiToken,
      gsp_path: options.gspPath,
      app_id: options.appId,
      binary_path: options.binaryPath,
      platform: options.platform,
      dsym_worker_threads: options.dsymWorkerThreads,
    };

    const out = await this.doAction(
      "upload_symbols_to_crashlytics",
      convertedOptions
    );
    return out;
  }
  /** Upload dSYM symbolication files to Sentry
   */
  async uploadSymbolsToSentry(options: {
    /**
     * API host url for Sentry
     * */
    apiHost?: string;
    /**
     * API key for Sentry
     * */
    apiKey?: string;
    /**
     * Authentication token for Sentry
     * */
    authToken?: string;
    /**
     * Organization slug for Sentry project
     * */
    orgSlug: string;
    /**
     * Project slug for Sentry
     * */
    projectSlug: string;
    /**
     * Path to your symbols file. For iOS and Mac provide path to app.dSYM.zip
     * */
    dsymPath?: string;
    /**
     * Path to an array of your symbols file. For iOS and Mac provide path to app.dSYM.zip
     * */
    dsymPaths?: any;
  }): Promise<any> {
    const convertedOptions = {
      api_host: options.apiHost,
      api_key: options.apiKey,
      auth_token: options.authToken,
      org_slug: options.orgSlug,
      project_slug: options.projectSlug,
      dsym_path: options.dsymPath,
      dsym_paths: options.dsymPaths,
    };

    const out = await this.doAction(
      "upload_symbols_to_sentry",
      convertedOptions
    );
    return out;
  }
  /** Upload metadata and binary to App Store Connect (via _deliver_)
   */
  async uploadToAppStore(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The bundle identifier of your app
     * */
    appIdentifier?: string;
    /**
     * The version that should be edited or created
     * */
    appVersion?: string;
    /**
     * Path to your ipa file
     * */
    ipa?: string;
    /**
     * Path to your pkg file
     * */
    pkg?: string;
    /**
     * If set the given build number (already uploaded to iTC) will be used instead of the current built one
     * */
    buildNumber?: string;
    /**
     * The platform to use (optional)
     * */
    platform?: string;
    /**
     * Modify live metadata, this option disables ipa upload and screenshot upload
     * */
    editLive?: any;
    /**
     * Force usage of live version rather than edit version
     * */
    useLiveVersion: any;
    /**
     * Path to the folder containing the metadata files
     * */
    metadataPath?: string;
    /**
     * Path to the folder containing the screenshots
     * */
    screenshotsPath?: string;
    /**
     * Skip uploading an ipa or pkg to App Store Connect
     * */
    skipBinaryUpload: any;
    /**
     * Don't upload the screenshots
     * */
    skipScreenshots: any;
    /**
     * Don't upload the metadata (e.g. title, description). This will still upload screenshots
     * */
    skipMetadata: any;
    /**
     * Don't update app version for submission
     * */
    skipAppVersionUpdate: any;
    /**
     * Skip the HTML report file verification
     * */
    force: any;
    /**
     * Clear all previously uploaded screenshots before uploading the new ones
     * */
    overwriteScreenshots: any;
    /**
     * Submit the new version for Review after uploading everything
     * */
    submitForReview: any;
    /**
     * Rejects the previously submitted build if it's in a state where it's possible
     * */
    rejectIfPossible: any;
    /**
     * Should the app be automatically released once it's approved? (Can not be used together with `auto_release_date`)
     * */
    automaticRelease: any;
    /**
     * Date in milliseconds for automatically releasing on pending approval (Can not be used together with `automatic_release`)
     * */
    autoReleaseDate?: any;
    /**
     * Enable the phased release feature of iTC
     * */
    phasedRelease?: any;
    /**
     * Reset the summary rating when you release a new version of the application
     * */
    resetRatings?: any;
    /**
     * The price tier of this application
     * */
    priceTier?: any;
    /**
     * Path to the app rating's config
     * */
    appRatingConfigPath?: string;
    /**
     * Extra information for the submission (e.g. compliance specifications, IDFA settings)
     * */
    submissionInformation?: any;
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The short ID of your Developer Portal team, if you're in multiple teams. Different from your iTC team ID!
     * */
    devPortalTeamId?: string;
    /**
     * The name of your Developer Portal team if you're in multiple teams
     * */
    devPortalTeamName?: string;
    /**
     * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
     * */
    itcProvider?: string;
    /**
     * Run precheck before submitting to app review
     * */
    runPrecheckBeforeSubmit: any;
    /**
     * The default precheck rule level unless otherwise configured
     * */
    precheckDefaultRuleLevel: any;
    /**
     * An array of localized metadata items to upload individually by language so that errors can be identified. E.g. ['name', 'keywords', 'description']. Note: slow
     * */
    individualMetadataItems: string[];
    /**
     * Metadata: The path to the app icon
     * */
    appIcon?: string;
    /**
     * Metadata: The path to the Apple Watch app icon
     * */
    appleWatchAppIcon?: string;
    /**
     * Metadata: The copyright notice
     * */
    copyright?: string;
    /**
     * Metadata: The english name of the primary category (e.g. `Business`, `Books`)
     * */
    primaryCategory?: string;
    /**
     * Metadata: The english name of the secondary category (e.g. `Business`, `Books`)
     * */
    secondaryCategory?: string;
    /**
     * Metadata: The english name of the primary first sub category (e.g. `Educational`, `Puzzle`)
     * */
    primaryFirstSubCategory?: string;
    /**
     * Metadata: The english name of the primary second sub category (e.g. `Educational`, `Puzzle`)
     * */
    primarySecondSubCategory?: string;
    /**
     * Metadata: The english name of the secondary first sub category (e.g. `Educational`, `Puzzle`)
     * */
    secondaryFirstSubCategory?: string;
    /**
     * Metadata: The english name of the secondary second sub category (e.g. `Educational`, `Puzzle`)
     * */
    secondarySecondSubCategory?: string;
    /**
     * Metadata: A hash containing the trade representative contact information
     * */
    tradeRepresentativeContactInformation?: { string: string };
    /**
     * Metadata: A hash containing the review information
     * */
    appReviewInformation?: { string: string };
    /**
     * Metadata: Path to the app review attachment file
     * */
    appReviewAttachmentFile?: string;
    /**
     * Metadata: The localised app description
     * */
    description?: any;
    /**
     * Metadata: The localised app name
     * */
    name?: any;
    /**
     * Metadata: The localised app subtitle
     * */
    subtitle?: { string: string };
    /**
     * Metadata: An array of localised keywords
     * */
    keywords?: { string: string };
    /**
     * Metadata: An array of localised promotional texts
     * */
    promotionalText?: { string: string };
    /**
     * Metadata: Localised release notes for this version
     * */
    releaseNotes?: any;
    /**
     * Metadata: Localised privacy url
     * */
    privacyUrl?: any;
    /**
     * Metadata: Localised Apple TV privacy policy text
     * */
    appleTvPrivacyPolicy?: any;
    /**
     * Metadata: Localised support url
     * */
    supportUrl?: any;
    /**
     * Metadata: Localised marketing url
     * */
    marketingUrl?: any;
    /**
     * Metadata: List of languages to activate
     * */
    languages?: string[];
    /**
     * Ignore errors when invalid languages are found in metadata and screenshot directories
     * */
    ignoreLanguageDirectoryValidation: any;
    /**
     * Should precheck check in-app purchases?
     * */
    precheckIncludeInAppPurchases?: any;
    /**
     * The (spaceship) app ID of the app you want to use/modify
     * */
    app: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction("upload_to_app_store", convertedOptions);
    return out;
  }
  /** Upload metadata, screenshots and binaries to Google Play (via _supply_)
   */
  async uploadToPlayStore(options: {
    /**
     * The package name of the application to use
     * */
    packageName: string;
    /**
     * Version name (used when uploading new apks/aabs) - defaults to 'versionName' in build.gradle or AndroidManifest.xml
     * */
    versionName?: string;
    /**
     * Version code (used when updating rollout or promoting specific versions)
     * */
    versionCode?: any;
    /**
     * Release status (used when uploading new apks/aabs) - valid values are completed, draft, halted, inProgress
     * */
    releaseStatus?: string;
    /**
     * The track of the application to use. The default available tracks are: production, beta, alpha, internal
     * */
    track: string;
    /**
     * The percentage of the user fraction when uploading to the rollout track
     * */
    rollout?: string;
    /**
     * Path to the directory containing the metadata files
     * */
    metadataPath?: string;
    /**
     * **DEPRECATED!** Use `--json_key` instead - The p12 File used to authenticate with Google
     * */
    key?: string;
    /**
     * **DEPRECATED!** Use `--json_key` instead - The issuer of the p12 file (email address of the service account)
     * */
    issuer?: string;
    /**
     * The path to a file containing service account JSON, used to authenticate with Google
     * */
    jsonKey?: string;
    /**
     * The raw service account JSON data used to authenticate with Google
     * */
    jsonKeyData?: string;
    /**
     * Path to the APK file to upload
     * */
    apk?: string;
    /**
     * An array of paths to APK files to upload
     * */
    apkPaths?: string[];
    /**
     * Path to the AAB file to upload
     * */
    aab?: string;
    /**
     * An array of paths to AAB files to upload
     * */
    aabPaths?: string[];
    /**
     * Whether to skip uploading APK
     * */
    skipUploadApk?: boolean;
    /**
     * Whether to skip uploading AAB
     * */
    skipUploadAab?: boolean;
    /**
     * Whether to skip uploading metadata, changelogs not included
     * */
    skipUploadMetadata?: boolean;
    /**
     * Whether to skip uploading changelogs
     * */
    skipUploadChangelogs?: boolean;
    /**
     * Whether to skip uploading images, screenshots not included
     * */
    skipUploadImages?: boolean;
    /**
     * Whether to skip uploading SCREENSHOTS
     * */
    skipUploadScreenshots?: boolean;
    /**
     * The track to promote to. The default available tracks are: production, beta, alpha, internal
     * */
    trackPromoteTo?: string;
    /**
     * Only validate changes with Google Play rather than actually publish
     * */
    validateOnly?: boolean;
    /**
     * Path to the mapping file to upload
     * */
    mapping?: string;
    /**
     * An array of paths to mapping files to upload
     * */
    mappingPaths?: string[];
    /**
     * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
     * */
    rootUrl?: string;
    /**
     * **DEPRECATED!** Google Play does this automatically now - Check the other tracks for superseded versions and disable them
     * */
    checkSupersededTracks?: boolean;
    /**
     * Timeout for read, open, and send (in seconds)
     * */
    timeout?: any;
    /**
     * **DEPRECATED!** Google Play does this automatically now - When promoting to a new track, deactivate the binary in the origin track
     * */
    deactivateOnPromote?: boolean;
    /**
     * An array of version codes to retain when publishing a new APK
     * */
    versionCodesToRetain?: string[];
    /**
     * In-app update priority for all the newly added apks in the release. Can take values between [0,5]
     * */
    inAppUpdatePriority?: any;
    /**
     * References version of 'main' expansion file
     * */
    obbMainReferencesVersion?: any;
    /**
     * Size of 'main' expansion file in bytes
     * */
    obbMainFileSize?: any;
    /**
     * References version of 'patch' expansion file
     * */
    obbPatchReferencesVersion?: any;
    /**
     * Size of 'patch' expansion file in bytes
     * */
    obbPatchFileSize?: any;
  }): Promise<any> {
    const convertedOptions = {
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
      in_app_update_priority: options.inAppUpdatePriority,
      obb_main_references_version: options.obbMainReferencesVersion,
      obb_main_file_size: options.obbMainFileSize,
      obb_patch_references_version: options.obbPatchReferencesVersion,
      obb_patch_file_size: options.obbPatchFileSize,
    };

    const out = await this.doAction("upload_to_play_store", convertedOptions);
    return out;
  }
  /** Upload binaries to Google Play Internal App Sharing (via _supply_)
   */
  async uploadToPlayStoreInternalAppSharing(options: {
    /**
     * The package name of the application to use
     * */
    packageName: string;
    /**
     * The path to a file containing service account JSON, used to authenticate with Google
     * */
    jsonKey?: string;
    /**
     * The raw service account JSON data used to authenticate with Google
     * */
    jsonKeyData?: string;
    /**
     * Path to the APK file to upload
     * */
    apk?: string;
    /**
     * An array of paths to APK files to upload
     * */
    apkPaths?: string[];
    /**
     * Path to the AAB file to upload
     * */
    aab?: string;
    /**
     * An array of paths to AAB files to upload
     * */
    aabPaths?: string[];
    /**
     * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
     * */
    rootUrl?: string;
    /**
     * Timeout for read, open, and send (in seconds)
     * */
    timeout?: any;
  }): Promise<any> {
    const convertedOptions = {
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

    const out = await this.doAction(
      "upload_to_play_store_internal_app_sharing",
      convertedOptions
    );
    return out;
  }
  /** Upload new binary to App Store Connect for TestFlight beta testing (via _pilot_)
   */
  async uploadToTestflight(options: {
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The bundle identifier of the app to upload or manage testers (optional)
     * */
    appIdentifier?: string;
    /**
     * The platform to use (optional)
     * */
    appPlatform?: string;
    /**
     * Apple ID property in the App Information section in App Store Connect
     * */
    appleId?: string;
    /**
     * Path to the ipa file to upload
     * */
    ipa?: string;
    /**
     * Do you need a demo account when Apple does review?
     * */
    demoAccountRequired: boolean;
    /**
     * Beta app review information for contact info and demo account
     * */
    betaAppReviewInfo?: { string: string };
    /**
     * Localized beta app test info for description, feedback email, marketing url, and privacy policy
     * */
    localizedAppInfo?: { string: string };
    /**
     * Provide the 'Beta App Description' when uploading a new build
     * */
    betaAppDescription?: string;
    /**
     * Provide the beta app email when uploading a new build
     * */
    betaAppFeedbackEmail?: string;
    /**
     * Localized beta app test info for what's new
     * */
    localizedBuildInfo?: { string: string };
    /**
     * Provide the 'What to Test' text when uploading a new build. `skip_waiting_for_build_processing: false` is required to set the changelog
     * */
    changelog?: string;
    /**
     * Skip the distributing action of pilot and only upload the ipa file
     * */
    skipSubmission: any;
    /**
     * If set to true, the `distribute_external` option won't work and no build will be distributed to testers. (You might want to use this option if you are using this action on CI and have to pay for 'minutes used' on your CI plan). If set to `true` and a changelog is provided, it will partially wait for the build to appear on AppStore Connect so the changelog can be set, and skip the remaining processing steps
     * */
    skipWaitingForBuildProcessing: any;
    /**
     * **DEPRECATED!** Update build info immediately after validation. This is deprecated and will be removed in a future release. App Store Connect no longer supports setting build info until after build processing has completed, which is when build info is updated by default
     * */
    updateBuildInfoOnUpload?: any;
    /**
     * Provide the 'Uses Non-Exempt Encryption' for export compliance. This is used if there is 'ITSAppUsesNonExemptEncryption' is not set in the Info.plist
     * */
    usesNonExemptEncryption: boolean;
    /**
     * Should the build be distributed to external testers?
     * */
    distributeExternal: any;
    /**
     * Should notify external testers?
     * */
    notifyExternalTesters: any;
    /**
     * The version number of the application build to distribute. If the version number is not specified, then the most recent build uploaded to TestFlight will be distributed. If specified, the most recent build for the version number will be distributed
     * */
    appVersion?: string;
    /**
     * The build number of the application build to distribute. If the build number is not specified, the most recent build is distributed
     * */
    buildNumber?: string;
    /**
     * Should expire previous builds?
     * */
    expirePreviousBuilds: any;
    /**
     * The tester's first name
     * */
    firstName?: string;
    /**
     * The tester's last name
     * */
    lastName?: string;
    /**
     * The tester's email
     * */
    email?: string;
    /**
     * Path to a CSV file of testers
     * */
    testersFilePath?: string;
    /**
     * Associate tester to one group or more by group name / group id. E.g. `-g "Team 1","Team 2"`
     * */
    groups?: string[];
    /**
     * The ID of your App Store Connect team if you're in multiple teams
     * */
    teamId?: any;
    /**
     * The name of your App Store Connect team if you're in multiple teams
     * */
    teamName?: string;
    /**
     * The short ID of your team in the developer portal, if you're in multiple teams. Different from your iTC team ID!
     * */
    devPortalTeamId?: string;
    /**
     * The provider short name to be used with the iTMSTransporter to identify your team. This value will override the automatically detected provider short name. To get provider short name run `pathToXcode.app/Contents/Applications/Application\ Loader.app/Contents/itms/bin/iTMSTransporter -m provider -u 'USERNAME' -p 'PASSWORD' -account_type itunes_connect -v off`. The short names of providers should be listed in the second column
     * */
    itcProvider?: string;
    /**
     * Interval in seconds to wait for App Store Connect processing
     * */
    waitProcessingInterval: any;
    /**
     * **DEPRECATED!** No longer needed with the transition over to the App Store Connect API - Use version info from uploaded ipa file to determine what build to use for distribution. If set to false, latest processing or any latest build will be used
     * */
    waitForUploadedBuild?: any;
    /**
     * Expire previous if it's 'waiting for review'
     * */
    rejectBuildWaitingForReview: any;
  }): Promise<any> {
    const convertedOptions = {
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
      expire_previous_builds: options.expirePreviousBuilds,
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

    const out = await this.doAction("upload_to_testflight", convertedOptions);
    return out;
  }
  /** Validate that the Google Play Store `json_key` works
   */
  async validatePlayStoreJsonKey(options: {
    /**
     * The path to a file containing service account JSON, used to authenticate with Google
     * */
    jsonKey?: string;
    /**
     * The raw service account JSON data used to authenticate with Google
     * */
    jsonKeyData?: string;
    /**
     * Root URL for the Google Play API. The provided URL will be used for API calls in place of https://www.googleapis.com/
     * */
    rootUrl?: string;
    /**
     * Timeout for read, open, and send (in seconds)
     * */
    timeout?: any;
  }): Promise<any> {
    const convertedOptions = {
      json_key: options.jsonKey,
      json_key_data: options.jsonKeyData,
      root_url: options.rootUrl,
      timeout: options.timeout,
    };

    const out = await this.doAction(
      "validate_play_store_json_key",
      convertedOptions
    );
    return out;
  }
  /** Able to verify various settings in ipa file
   */
  async verifyBuild(options: {
    /**
     * Required type of provisioning
     * */
    provisioningType?: string;
    /**
     * Required UUID of provisioning profile
     * */
    provisioningUuid?: string;
    /**
     * Required team identifier
     * */
    teamIdentifier?: string;
    /**
     * Required team name
     * */
    teamName?: string;
    /**
     * Required app name
     * */
    appName?: string;
    /**
     * Required bundle identifier
     * */
    bundleIdentifier?: string;
    /**
     * Explicitly set the ipa path
     * */
    ipaPath?: string;
    /**
     * Explicitly set the ipa, app or xcarchive path
     * */
    buildPath?: string;
  }): Promise<any> {
    const convertedOptions = {
      provisioning_type: options.provisioningType,
      provisioning_uuid: options.provisioningUuid,
      team_identifier: options.teamIdentifier,
      team_name: options.teamName,
      app_name: options.appName,
      bundle_identifier: options.bundleIdentifier,
      ipa_path: options.ipaPath,
      build_path: options.buildPath,
    };

    const out = await this.doAction("verify_build", convertedOptions);
    return out;
  }
  /** Verifies all keys referenced from the Podfile are non-empty
   */
  async verifyPodKeys(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("verify_pod_keys", convertedOptions);
    return out;
  }
  /** Verifies that the Xcode installation is properly signed by Apple
   */
  async verifyXcode(options: {
    /**
     * The path to the Xcode installation to test
     * */
    xcodePath: string;
  }): Promise<any> {
    const convertedOptions = { xcode_path: options.xcodePath };

    const out = await this.doAction("verify_xcode", convertedOptions);
    return out;
  }
  /** Increment or set the version in a podspec file
   */
  async versionBumpPodspec(options: {
    /**
     * You must specify the path to the podspec file to update
     * */
    path: string;
    /**
     * The type of this version bump. Available: patch, minor, major
     * */
    bumpType: string;
    /**
     * Change to a specific version. This will replace the bump type value
     * */
    versionNumber?: string;
    /**
     * Change version appendix to a specific value. For example 1.4.14.4.1 -> 1.4.14.5
     * */
    versionAppendix?: string;
    /**
     * true by default, this is used for non CocoaPods version bumps only
     * */
    requireVariablePrefix: boolean;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      bump_type: options.bumpType,
      version_number: options.versionNumber,
      version_appendix: options.versionAppendix,
      require_variable_prefix: options.requireVariablePrefix,
    };

    const out = await this.doAction("version_bump_podspec", convertedOptions);
    return out;
  }
  /** Receive the version number from a podspec file
   */
  async versionGetPodspec(options: {
    /**
     * You must specify the path to the podspec file
     * */
    path: string;
    /**
     * true by default, this is used for non CocoaPods version bumps only
     * */
    requireVariablePrefix: any;
  }): Promise<any> {
    const convertedOptions = {
      path: options.path,
      require_variable_prefix: options.requireVariablePrefix,
    };

    const out = await this.doAction("version_get_podspec", convertedOptions);
    return out;
  }
  /** Archives the project using `xcodebuild`
   */
  async xcarchive(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xcarchive", convertedOptions);
    return out;
  }
  /** Builds the project using `xcodebuild`
   */
  async xcbuild(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xcbuild", convertedOptions);
    return out;
  }
  /** Cleans the project using `xcodebuild`
   */
  async xcclean(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xcclean", convertedOptions);
    return out;
  }
  /** Exports the project using `xcodebuild`
   */
  async xcexport(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xcexport", convertedOptions);
    return out;
  }
  /** Make sure a certain version of Xcode is installed
   */
  async xcodeInstall(options: {
    /**
     * The version number of the version of Xcode to install
     * */
    version: string;
    /**
     * Your Apple ID Username
     * */
    username: string;
    /**
     * The ID of your team if you're in multiple teams
     * */
    teamId?: string;
  }): Promise<string> {
    const convertedOptions = {
      version: options.version,
      username: options.username,
      team_id: options.teamId,
    };

    const out = await this.doAction("xcode_install", convertedOptions);
    return out;
  }
  /** Change the xcode-path to use. Useful for beta versions of Xcode
   */
  async xcodeSelect(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xcode_select", convertedOptions);
    return out;
  }
  /** Downloads Xcode Bot assets like the `.xcarchive` and logs
   */
  async xcodeServerGetAssets(options: {
    /**
     * IP Address/Hostname of Xcode Server
     * */
    host: string;
    /**
     * Name of the Bot to pull assets from
     * */
    botName: string;
    /**
     * Optionally you can override which integration's assets should be downloaded. If not provided, the latest integration is used
     * */
    integrationNumber?: any;
    /**
     * Username for your Xcode Server
     * */
    username?: string;
    /**
     * Password for your Xcode Server
     * */
    password?: string;
    /**
     * Relative path to a folder into which to download assets
     * */
    targetFolder?: string;
    /**
     * Whether to keep all assets or let the script delete everything except for the .xcarchive
     * */
    keepAllAssets?: any;
    /**
     * Whether to trust self-signed certs on your Xcode Server
     * */
    trustSelfSignedCerts?: any;
  }): Promise<any> {
    const convertedOptions = {
      host: options.host,
      bot_name: options.botName,
      integration_number: options.integrationNumber,
      username: options.username,
      password: options.password,
      target_folder: options.targetFolder,
      keep_all_assets: options.keepAllAssets,
      trust_self_signed_certs: options.trustSelfSignedCerts,
    };

    const out = await this.doAction(
      "xcode_server_get_assets",
      convertedOptions
    );
    return out;
  }
  /** Use the `xcodebuild` command to build and sign your app
   */
  async xcodebuild(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xcodebuild", convertedOptions);
    return out;
  }
  /** Nice code coverage reports without hassle
   */
  async xcov(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xcov", convertedOptions);
    return out;
  }
  /** Runs tests on the given simulator
   */
  async xctest(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xctest", convertedOptions);
    return out;
  }
  /** Run tests using xctool
   */
  async xctool(options: {}): Promise<any> {
    const convertedOptions = {};

    const out = await this.doAction("xctool", convertedOptions);
    return out;
  }
  /** Select an Xcode to use by version specifier
   */
  async xcversion(options: {
    /**
     * The version of Xcode to select specified as a Gem::Version requirement string (e.g. '~> 7.1.0')
     * */
    version: string;
  }): Promise<any> {
    const convertedOptions = { version: options.version };

    const out = await this.doAction("xcversion", convertedOptions);
    return out;
  }
  /** Compress a file or folder to a zip
   */
  async zip(options: {
    /**
     * Path to the directory or file to be zipped
     * */
    path: string;
    /**
     * The name of the resulting zip file
     * */
    outputPath?: string;
    /**
     * Enable verbose output of zipped file
     * */
    verbose?: boolean;
    /**
     * Encrypt the contents of the zip archive using a password
     * */
    password?: string;
    /**
     * Store symbolic links as such in the zip archive
     * */
    symlinks?: boolean;
  }): Promise<string> {
    const convertedOptions = {
      path: options.path,
      output_path: options.outputPath,
      verbose: options.verbose,
      password: options.password,
      symlinks: options.symlinks,
    };

    const out = await this.doAction("zip", convertedOptions);
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
