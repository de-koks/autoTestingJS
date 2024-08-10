




<!DOCTYPE html>
<html class="with-top-bar" lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<title>module-2/app/numbers-validator.js · master · Dzmitry Shaplyka / JS ATM program · GitLab</title>
<link rel="preload" href="/assets/application_utilities-3bec0ef667aa2d798d0e668d99e91d11b71b60a67b1b0bdef92ecb433390f72c.css" as="style" type="text/css" nonce="1/6kLxeuNSs00muPRBDw+g==">
<link rel="preload" href="/assets/application-bada36d178d3db075d85c6e2bf2a094b8519c2551d4569a2c2cb8b5b2b07247c.css" as="style" type="text/css" nonce="1/6kLxeuNSs00muPRBDw+g==">
<link rel="preload" href="/assets/highlight/themes/white-8ded44488c9b4c1cbea299cc42721314d16f00a228733ce59c08194a7994a650.css" as="style" type="text/css" nonce="1/6kLxeuNSs00muPRBDw+g==">

<meta content="IE=edge" http-equiv="X-UA-Compatible">
<script nonce="iGLCyjMka0VkFXGDVisgIg==">
//<![CDATA[
var gl = window.gl || {};
gl.startup_calls = null;
gl.startup_graphql_calls = [{"query":"query getBlobInfo(\n  $projectPath: ID!\n  $filePath: String!\n  $ref: String!\n  $shouldFetchRawText: Boolean!\n) {\n  project(fullPath: $projectPath) {\n    __typename\n    id\n    repository {\n      __typename\n      empty\n      blobs(paths: [$filePath], ref: $ref) {\n        __typename\n        nodes {\n          __typename\n          id\n          webPath\n          name\n          size\n          rawSize\n          rawTextBlob @include(if: $shouldFetchRawText)\n          fileType\n          language\n          path\n          blamePath\n          editBlobPath\n          gitpodBlobUrl\n          ideEditPath\n          forkAndEditPath\n          ideForkAndEditPath\n          codeNavigationPath\n          projectBlobPathRoot\n          forkAndViewPath\n          environmentFormattedExternalUrl\n          environmentExternalUrlForRouteMap\n          canModifyBlob\n          canCurrentUserPushToBranch\n          archived\n          storedExternally\n          externalStorage\n          externalStorageUrl\n          rawPath\n          replacePath\n          pipelineEditorPath\n          simpleViewer {\n            fileType\n            tooLarge\n            type\n            renderError\n          }\n          richViewer {\n            fileType\n            tooLarge\n            type\n            renderError\n          }\n        }\n      }\n    }\n  }\n}\n","variables":{"projectPath":"Dzmitry_Shaplyka/js-atm-program","ref":"master","filePath":"module-2/app/numbers-validator.js","shouldFetchRawText":true}}];

if (gl.startup_calls && window.fetch) {
  Object.keys(gl.startup_calls).forEach(apiCall => {
   gl.startup_calls[apiCall] = {
      fetchCall: fetch(apiCall, {
        // Emulate XHR for Rails AJAX request checks
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        // fetch won’t send cookies in older browsers, unless you set the credentials init option.
        // We set to `same-origin` which is default value in modern browsers.
        // See https://github.com/whatwg/fetch/pull/585 for more information.
        credentials: 'same-origin'
      })
    };
  });
}
if (gl.startup_graphql_calls && window.fetch) {
  const headers = {"X-CSRF-Token":"3YKvQ6GABhhbKjcGqO1Ww1y2QK8_3EYOc-_iIT-eIePpLA52G4cyUwlIUfrm8DL7XZ_KcoAZGak49ZfrlIDhPQ","x-gitlab-feature-category":"source_code_management"};
  const url = `https://git.epam.com/api/graphql`

  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    }
  };

  gl.startup_graphql_calls = gl.startup_graphql_calls.map(call => ({
    ...call,
    fetchCall: fetch(url, {
      ...opts,
      credentials: 'same-origin',
      body: JSON.stringify(call)
    })
  }))
}


//]]>
</script>

<link rel="prefetch" href="/assets/webpack/monaco.a135b329.chunk.js">
<link rel="shortcut icon" type="image/png" href="/uploads/-/system/appearance/favicon/1/epam_favicon_new2.png" id="favicon" data-original-href="/uploads/-/system/appearance/favicon/1/epam_favicon_new2.png" />
<link rel="stylesheet" media="screen" href="/assets/themes/theme_light_gray-bf48d91471b52b5791f6235a7e87814ec04609e09a3a12e71fdb718dadb341b2.css" />

<link rel="stylesheet" media="all" href="/assets/application-bada36d178d3db075d85c6e2bf2a094b8519c2551d4569a2c2cb8b5b2b07247c.css" />
<link rel="stylesheet" media="all" href="/assets/page_bundles/tree-86a16f68ea7bde025a5a521d3a1332e85e8484bad7d4c52e0bd04f0ed1b3571f.css" />
<link rel="stylesheet" media="all" href="/assets/application_utilities-3bec0ef667aa2d798d0e668d99e91d11b71b60a67b1b0bdef92ecb433390f72c.css" />


<link rel="stylesheet" media="all" href="/assets/fonts-33e47afb978961ec1c985ca8e1384d98d7edd9c0e5c5e6df83f8ccaceb9837ff.css" />
<link rel="stylesheet" media="all" href="/assets/highlight/themes/white-8ded44488c9b4c1cbea299cc42721314d16f00a228733ce59c08194a7994a650.css" />


<script nonce="iGLCyjMka0VkFXGDVisgIg==">
//<![CDATA[
window.gon={};gon.api_version="v4";gon.default_avatar_url="https://git.epam.com/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png";gon.max_file_size=2;gon.asset_host=null;gon.webpack_public_path="/assets/webpack/";gon.relative_url_root="";gon.user_color_scheme="white";gon.markdown_surround_selection=true;gon.markdown_automatic_lists=true;gon.recaptcha_api_server_url="https://www.recaptcha.net/recaptcha/api.js";gon.recaptcha_sitekey="";gon.gitlab_url="https://git.epam.com";gon.revision="b06c2e5fedd";gon.feature_category="source_code_management";gon.gitlab_logo="/assets/gitlab_logo-2957169c8ef64c58616a1ac3f4fc626e8a35ce4eb3ed31bb0d873712f2a041a0.png";gon.secure=true;gon.sprite_icons="/assets/icons-b8c5a9711f73b1de3c81754da0aca72f43b0e6844aa06dd03092b601a493f45b.svg";gon.sprite_file_icons="/assets/file_icons/file_icons-6489590d770258cc27e4698405d309d83e42829b667b4d601534321e96739a5a.svg";gon.emoji_sprites_css_path="/assets/emoji_sprites-e1b1ba2d7a86a445dcb1110d1b6e7dd0200ecaa993a445df77a07537dbf8f475.css";gon.gridstack_css_path="/assets/lazy_bundles/gridstack-f9e005145f1f29d3fd436ec6eda8b264c017ee47886472841ed47e32332518ff.css";gon.test_env=false;gon.disable_animations=null;gon.suggested_label_colors={"#cc338b":"Magenta-pink","#dc143c":"Crimson","#c21e56":"Rose red","#cd5b45":"Dark coral","#ed9121":"Carrot orange","#eee600":"Titanium yellow","#009966":"Green-cyan","#8fbc8f":"Dark sea green","#6699cc":"Blue-gray","#e6e6fa":"Lavender","#9400d3":"Dark violet","#330066":"Deep violet","#36454f":"Charcoal grey","#808080":"Gray"};gon.first_day_of_week=1;gon.time_display_relative=true;gon.ee=false;gon.jh=false;gon.dot_com=false;gon.uf_error_prefix="UF";gon.pat_prefix="";gon.diagramsnet_url="https://embed.diagrams.net";gon.version="16.1.6";gon.current_user_id=97453;gon.current_username="denis_kosun";gon.current_user_fullname="Denis Kosun";gon.current_user_avatar_url="/uploads/-/system/user/avatar/97453/avatar.png";gon.use_new_navigation=true;gon.features={"usageDataApi":true,"securityAutoFix":false,"sourceEditorToolbar":false,"vscodeWebIde":true,"unbatchGraphqlQueries":false,"commandPalette":false,"removeMonitorMetrics":true,"gitlabDuo":false,"highlightJs":true,"explainCodeChat":false};
//]]>
</script>




<script src="/assets/webpack/runtime.2cae77e4.bundle.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/main.002c1727.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/graphql.f59c5022.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-IssuablePopoverBundle-pages.admin.application_settings-pages.admin.application_settings.ci_c-23658ca3.3807fd4f.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.groups.new-pages.import.gitlab_projects.new-pages.import.manifest.new-pages.projects.n-4e5d09f9.d8883737.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.search.show-super_sidebar.8d260bf8.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/super_sidebar.6cdf0da8.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/shortcutsBundle.71b66232.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.groups.boards-pages.groups.details-pages.groups.show-pages.projects-pages.projects.act-dd192c29.93ba7fab.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.admin.runners.show-pages.groups.achievements-pages.groups.crm.contacts-pages.groups.cr-b40f8453.f5442616.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.edit-pages.projects.sni-dd84f7c7.551817ca.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.show-pages.projects.tre-25c821a4.f636e494.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.groups.show-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.27ecec63.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.forks.new-pages.projects.show-pages.projects.tree.show.29a89755.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.show-pages.projects.tree.show.b58135bd.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/commons-pages.projects.blob.show-pages.projects.tree.show-treeList.48c8e779.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script src="/assets/webpack/pages.projects.blob.show.675024dd.chunk.js" defer="defer" nonce="iGLCyjMka0VkFXGDVisgIg=="></script>
<script nonce="iGLCyjMka0VkFXGDVisgIg==">
//<![CDATA[
window.uploads_path = "/Dzmitry_Shaplyka/js-atm-program/uploads";



//]]>
</script>
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="module-2/app/numbers-validator.js · master · Dzmitry Shaplyka / JS ATM program · GitLab" property="og:title">
<meta content="EPAM GitLab" property="og:description">
<meta content="https://git.epam.com/assets/twitter_card-570ddb06edf56a2312253c5872489847a0f385112ddbcd71ccfa1570febab5d2.jpg" property="og:image">
<meta content="64" property="og:image:width">
<meta content="64" property="og:image:height">
<meta content="https://git.epam.com/Dzmitry_Shaplyka/js-atm-program/-/blob/master/module-2/app/numbers-validator.js" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="module-2/app/numbers-validator.js · master · Dzmitry Shaplyka / JS ATM program · GitLab" property="twitter:title">
<meta content="EPAM GitLab" property="twitter:description">
<meta content="https://git.epam.com/assets/twitter_card-570ddb06edf56a2312253c5872489847a0f385112ddbcd71ccfa1570febab5d2.jpg" property="twitter:image">

<meta content="EPAM GitLab" name="description">
<link href="/-/manifest.json" rel="manifest">
<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
<meta content="#666" name="theme-color">
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="Jz_-zFzyD-pTI8JN8mG0RcwoMhDOVt4I4KfxQkS_gjETkV_55vU7oQFBpLG8fNB9zQG4zXGTga-rvYSI76FC7w" />
<meta name="csp-nonce" content="iGLCyjMka0VkFXGDVisgIg==" />
<meta name="action-cable-url" content="/-/cable" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/apple-touch-icon-b049d4bc0dd9626f31db825d61880737befc7835982586d015bded10b4435460.png" />
<link href="/search/opensearch.xml" rel="search" title="Search GitLab" type="application/opensearchdescription+xml">




</head>

<body class="ui-light-gray tab-width-8 gl-browser-chrome gl-platform-mac" data-find-file="/Dzmitry_Shaplyka/js-atm-program/-/find_file/master" data-namespace-id="18821" data-page="projects:blob:show" data-page-type-id="master/module-2/app/numbers-validator.js" data-project="js-atm-program" data-project-id="128174">

<script nonce="iGLCyjMka0VkFXGDVisgIg==">
//<![CDATA[
gl = window.gl || {};
gl.client = {"isChrome":true,"isMac":true};


//]]>
</script>



<style>
  body {
    --header-height: 0px;
  }
</style>
<div class="layout-page hide-when-top-nav-responsive-open page-with-super-sidebar">
<aside class="js-super-sidebar super-sidebar super-sidebar-loading" data-force-desktop-expanded-sidebar="" data-root-path="/" data-sidebar="{&quot;current_menu_items&quot;:[{&quot;id&quot;:&quot;project_overview&quot;,&quot;title&quot;:&quot;Project overview&quot;,&quot;icon&quot;:&quot;project&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project rspec-project-link&quot;,&quot;is_active&quot;:false},{&quot;title&quot;:&quot;Manage&quot;,&quot;icon&quot;:&quot;users&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/activity&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;activity&quot;,&quot;title&quot;:&quot;Activity&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/activity&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project-activity&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;members&quot;,&quot;title&quot;:&quot;Members&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/project_members&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;labels&quot;,&quot;title&quot;:&quot;Labels&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/labels&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;title&quot;:&quot;Plan&quot;,&quot;icon&quot;:&quot;planning&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/issues&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;project_issue_list&quot;,&quot;title&quot;:&quot;Issues&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/issues&quot;,&quot;pill_count&quot;:&quot;0&quot;,&quot;link_classes&quot;:&quot;shortcuts-issues has-sub-items&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;boards&quot;,&quot;title&quot;:&quot;Issue boards&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/boards&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-issue-boards&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;milestones&quot;,&quot;title&quot;:&quot;Milestones&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/milestones&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_wiki&quot;,&quot;title&quot;:&quot;Wiki&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/wikis/home&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-wiki&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;title&quot;:&quot;Code&quot;,&quot;icon&quot;:&quot;code&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/merge_requests&quot;,&quot;is_active&quot;:true,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;project_merge_request_list&quot;,&quot;title&quot;:&quot;Merge requests&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/merge_requests&quot;,&quot;pill_count&quot;:&quot;0&quot;,&quot;link_classes&quot;:&quot;shortcuts-merge_requests&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;files&quot;,&quot;title&quot;:&quot;Repository&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/tree/master&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-tree&quot;,&quot;is_active&quot;:true},{&quot;id&quot;:&quot;branches&quot;,&quot;title&quot;:&quot;Branches&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/branches&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;commits&quot;,&quot;title&quot;:&quot;Commits&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/commits/master?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-commits&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;tags&quot;,&quot;title&quot;:&quot;Tags&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/tags&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;graphs&quot;,&quot;title&quot;:&quot;Repository graph&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/network/master?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-network&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;compare&quot;,&quot;title&quot;:&quot;Compare revisions&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/compare?from=master\u0026to=master&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;project_snippets&quot;,&quot;title&quot;:&quot;Snippets&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/snippets&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-snippets&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;title&quot;:&quot;Build&quot;,&quot;icon&quot;:&quot;rocket&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/pipelines&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;pipelines&quot;,&quot;title&quot;:&quot;Pipelines&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/pipelines&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-pipelines&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;jobs&quot;,&quot;title&quot;:&quot;Jobs&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/jobs&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;pipeline_schedules&quot;,&quot;title&quot;:&quot;Pipeline schedules&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/pipeline_schedules&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;artifacts&quot;,&quot;title&quot;:&quot;Artifacts&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/artifacts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-builds&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;title&quot;:&quot;Deploy&quot;,&quot;icon&quot;:&quot;deployments&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/releases&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;releases&quot;,&quot;title&quot;:&quot;Releases&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/releases&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-deployments-releases&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;packages_registry&quot;,&quot;title&quot;:&quot;Package Registry&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/packages&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-container-registry&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;title&quot;:&quot;Operate&quot;,&quot;icon&quot;:&quot;cloud-pod&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/environments&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;environments&quot;,&quot;title&quot;:&quot;Environments&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/environments&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-environments&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;infrastructure_registry&quot;,&quot;title&quot;:&quot;Terraform modules&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/infrastructure_registry&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;title&quot;:&quot;Monitor&quot;,&quot;icon&quot;:&quot;monitor&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/incidents&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;incidents&quot;,&quot;title&quot;:&quot;Incidents&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/incidents&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;service_desk&quot;,&quot;title&quot;:&quot;Service Desk&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/issues/service_desk&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false}],&quot;separated&quot;:false},{&quot;title&quot;:&quot;Analyze&quot;,&quot;icon&quot;:&quot;chart&quot;,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/value_stream_analytics&quot;,&quot;is_active&quot;:false,&quot;pill_count&quot;:null,&quot;items&quot;:[{&quot;id&quot;:&quot;cycle_analytics&quot;,&quot;title&quot;:&quot;Value stream analytics&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/value_stream_analytics&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-project-cycle-analytics&quot;,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;contributors&quot;,&quot;title&quot;:&quot;Contributor statistics&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/graphs/master?ref_type=heads&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;ci_cd_analytics&quot;,&quot;title&quot;:&quot;CI/CD analytics&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/pipelines/charts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:null,&quot;is_active&quot;:false},{&quot;id&quot;:&quot;repository_analytics&quot;,&quot;title&quot;:&quot;Repository analytics&quot;,&quot;icon&quot;:null,&quot;link&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/graphs/master/charts&quot;,&quot;pill_count&quot;:null,&quot;link_classes&quot;:&quot;shortcuts-repository-charts&quot;,&quot;is_active&quot;:false}],&quot;separated&quot;:false}],&quot;current_context_header&quot;:{&quot;title&quot;:&quot;JS ATM program&quot;,&quot;avatar&quot;:null,&quot;id&quot;:128174},&quot;name&quot;:&quot;Denis Kosun&quot;,&quot;username&quot;:&quot;denis_kosun&quot;,&quot;avatar_url&quot;:&quot;/uploads/-/system/user/avatar/97453/avatar.png&quot;,&quot;has_link_to_profile&quot;:true,&quot;link_to_profile&quot;:&quot;https://git.epam.com/denis_kosun&quot;,&quot;logo_url&quot;:&quot;/uploads/-/system/appearance/header_logo/1/epam_login_logo.png&quot;,&quot;status&quot;:{&quot;can_update&quot;:true,&quot;busy&quot;:null,&quot;customized&quot;:null,&quot;availability&quot;:&quot;&quot;,&quot;emoji&quot;:null,&quot;message&quot;:null,&quot;clear_after&quot;:null},&quot;settings&quot;:{&quot;has_settings&quot;:true,&quot;profile_path&quot;:&quot;/-/profile&quot;,&quot;profile_preferences_path&quot;:&quot;/-/profile/preferences&quot;},&quot;user_counts&quot;:{&quot;assigned_issues&quot;:0,&quot;assigned_merge_requests&quot;:0,&quot;review_requested_merge_requests&quot;:0,&quot;todos&quot;:0,&quot;last_update&quot;:1723275601094},&quot;can_sign_out&quot;:true,&quot;sign_out_link&quot;:&quot;/users/sign_out&quot;,&quot;issues_dashboard_path&quot;:&quot;/dashboard/issues?assignee_username=denis_kosun&quot;,&quot;todos_dashboard_path&quot;:&quot;/dashboard/todos&quot;,&quot;create_new_menu_groups&quot;:[{&quot;name&quot;:&quot;In this project&quot;,&quot;items&quot;:[{&quot;text&quot;:&quot;New issue&quot;,&quot;href&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/issues/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;new_issue&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-qa-selector&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;new_issue&quot;}}]},{&quot;name&quot;:&quot;In GitLab&quot;,&quot;items&quot;:[{&quot;text&quot;:&quot;New project/repository&quot;,&quot;href&quot;:&quot;/projects/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;general_new_project&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-qa-selector&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;general_new_project&quot;}},{&quot;text&quot;:&quot;New group&quot;,&quot;href&quot;:&quot;/groups/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;general_new_group&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-qa-selector&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;general_new_group&quot;}},{&quot;text&quot;:&quot;New snippet&quot;,&quot;href&quot;:&quot;/-/snippets/new&quot;,&quot;component&quot;:null,&quot;extraAttrs&quot;:{&quot;data-track-label&quot;:&quot;general_new_snippet&quot;,&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-property&quot;:&quot;nav_create_menu&quot;,&quot;data-qa-selector&quot;:&quot;create_menu_item&quot;,&quot;data-qa-create-menu-item&quot;:&quot;general_new_snippet&quot;}}]}],&quot;merge_request_menu&quot;:[{&quot;name&quot;:&quot;Merge requests&quot;,&quot;items&quot;:[{&quot;text&quot;:&quot;Assigned&quot;,&quot;href&quot;:&quot;/dashboard/merge_requests?assignee_username=denis_kosun&quot;,&quot;count&quot;:0,&quot;userCount&quot;:&quot;assigned_merge_requests&quot;,&quot;extraAttrs&quot;:{&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-label&quot;:&quot;merge_requests_assigned&quot;,&quot;data-track-property&quot;:&quot;nav_core_menu&quot;,&quot;class&quot;:&quot;dashboard-shortcuts-merge_requests&quot;}},{&quot;text&quot;:&quot;Review requests&quot;,&quot;href&quot;:&quot;/dashboard/merge_requests?reviewer_username=denis_kosun&quot;,&quot;count&quot;:0,&quot;userCount&quot;:&quot;review_requested_merge_requests&quot;,&quot;extraAttrs&quot;:{&quot;data-track-action&quot;:&quot;click_link&quot;,&quot;data-track-label&quot;:&quot;merge_requests_to_review&quot;,&quot;data-track-property&quot;:&quot;nav_core_menu&quot;,&quot;class&quot;:&quot;dashboard-shortcuts-review_requests&quot;}}]}],&quot;projects_path&quot;:&quot;/dashboard/projects&quot;,&quot;groups_path&quot;:&quot;/dashboard/groups&quot;,&quot;support_path&quot;:&quot;https://support.epam.com/esp/ess.do?orderitem=caSupportEPAMGITrepositories&quot;,&quot;display_whats_new&quot;:true,&quot;whats_new_most_recent_release_items_count&quot;:9,&quot;whats_new_version_digest&quot;:&quot;e38e216cb55bf07f1b4188684ef9d47945ad0247c1bb6314fe03f2b99a0c7145&quot;,&quot;show_version_check&quot;:false,&quot;gitlab_version&quot;:{&quot;major&quot;:16,&quot;minor&quot;:1,&quot;patch&quot;:6,&quot;suffix_s&quot;:&quot;&quot;},&quot;gitlab_version_check&quot;:{&quot;latest_stable_versions&quot;:[&quot;17.2.2&quot;,&quot;17.1.4&quot;,&quot;17.0.6&quot;],&quot;latest_stable_version_of_minor&quot;:&quot;16.1.7&quot;,&quot;latest_version&quot;:&quot;17.2.2&quot;,&quot;severity&quot;:&quot;danger&quot;,&quot;critical_vulnerability&quot;:false,&quot;details&quot;:&quot;&quot;},&quot;gitlab_com_but_not_canary&quot;:false,&quot;gitlab_com_and_canary&quot;:false,&quot;canary_toggle_com_url&quot;:&quot;https://next.gitlab.com&quot;,&quot;current_context&quot;:{&quot;namespace&quot;:&quot;projects&quot;,&quot;item&quot;:{&quot;id&quot;:128174,&quot;name&quot;:&quot;JS ATM program&quot;,&quot;namespace&quot;:&quot;Dzmitry Shaplyka / JS ATM program&quot;,&quot;webUrl&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program&quot;,&quot;avatarUrl&quot;:null}},&quot;context_switcher_links&quot;:[{&quot;title&quot;:&quot;Your work&quot;,&quot;link&quot;:&quot;/&quot;,&quot;icon&quot;:&quot;work&quot;},{&quot;title&quot;:&quot;Explore&quot;,&quot;link&quot;:&quot;/explore&quot;,&quot;icon&quot;:&quot;compass&quot;}],&quot;search&quot;:{&quot;search_path&quot;:&quot;/search&quot;,&quot;issues_path&quot;:&quot;/dashboard/issues&quot;,&quot;mr_path&quot;:&quot;/dashboard/merge_requests&quot;,&quot;autocomplete_path&quot;:&quot;/search/autocomplete&quot;,&quot;search_context&quot;:{&quot;project&quot;:{&quot;id&quot;:128174,&quot;name&quot;:&quot;JS ATM program&quot;},&quot;project_metadata&quot;:{&quot;mr_path&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/merge_requests&quot;,&quot;issues_path&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/issues&quot;},&quot;code_search&quot;:true,&quot;ref&quot;:&quot;master&quot;,&quot;scope&quot;:null,&quot;for_snippets&quot;:null}},&quot;pinned_items&quot;:[&quot;project_issue_list&quot;,&quot;project_merge_request_list&quot;],&quot;panel_type&quot;:&quot;project&quot;,&quot;update_pins_url&quot;:&quot;https://git.epam.com/-/users/pins&quot;,&quot;is_impersonating&quot;:false,&quot;stop_impersonation_path&quot;:&quot;/admin/impersonation&quot;,&quot;shortcut_links&quot;:[{&quot;title&quot;:&quot;Milestones&quot;,&quot;href&quot;:&quot;/dashboard/milestones&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-milestones&quot;},{&quot;title&quot;:&quot;Snippets&quot;,&quot;href&quot;:&quot;/dashboard/snippets&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-snippets&quot;},{&quot;title&quot;:&quot;Activity&quot;,&quot;href&quot;:&quot;/dashboard/activity&quot;,&quot;css_class&quot;:&quot;dashboard-shortcuts-activity&quot;},{&quot;title&quot;:&quot;Create a new issue&quot;,&quot;href&quot;:&quot;/Dzmitry_Shaplyka/js-atm-program/-/issues/new&quot;,&quot;css_class&quot;:&quot;shortcuts-new-issue&quot;}]}" data-toggle-new-nav-endpoint="https://git.epam.com/-/profile/preferences"></aside>
<div data-version-digest="e38e216cb55bf07f1b4188684ef9d47945ad0247c1bb6314fe03f2b99a0c7145" id="whats-new-app"></div>

<div class="content-wrapper">
<div class="mobile-overlay"></div>

<div class="alert-wrapper gl-force-block-formatting-context">























<div class="top-bar-fixed container-fluid">
<div class="top-bar-container gl-display-flex gl-align-items-center">
<button class="gl-button btn btn-icon btn-md btn-default btn-default-tertiary js-super-sidebar-toggle-expand super-sidebar-toggle gl-ml-n3 gl-mr-2" title="Expand sidebar" aria-controls="super-sidebar" aria-expanded="false" aria-label="Navigation sidebar" type="button"><svg class="s16 gl-icon gl-button-icon " data-testid="sidebar-icon"><use href="/assets/icons-b8c5a9711f73b1de3c81754da0aca72f43b0e6844aa06dd03092b601a493f45b.svg#sidebar"></use></svg>

</button>
<nav aria-label="Breadcrumbs" class="breadcrumbs" data-qa-selector="breadcrumb_links_content" data-testid="breadcrumb-links">
<ul class="list-unstyled breadcrumbs-list js-breadcrumbs-list">
<li><a href="/Dzmitry_Shaplyka">Dzmitry Shaplyka</a><svg class="s8 breadcrumbs-list-angle" data-testid="chevron-lg-right-icon"><use href="/assets/icons-b8c5a9711f73b1de3c81754da0aca72f43b0e6844aa06dd03092b601a493f45b.svg#chevron-lg-right"></use></svg></li> <li><a href="/Dzmitry_Shaplyka/js-atm-program"><span class="breadcrumb-item-text js-breadcrumb-item-text">JS ATM program</span></a><svg class="s8 breadcrumbs-list-angle" data-testid="chevron-lg-right-icon"><use href="/assets/icons-b8c5a9711f73b1de3c81754da0aca72f43b0e6844aa06dd03092b601a493f45b.svg#chevron-lg-right"></use></svg></li>

<li data-qa-selector="breadcrumb_current_link" data-testid="breadcrumb-current-link">
<a href="/Dzmitry_Shaplyka/js-atm-program/-/blob/master/module-2/app/numbers-validator.js">Repository</a>
</li>
</ul>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Dzmitry Shaplyka","item":"https://git.epam.com/Dzmitry_Shaplyka"},{"@type":"ListItem","position":2,"name":"JS ATM program","item":"https://git.epam.com/Dzmitry_Shaplyka/js-atm-program"},{"@type":"ListItem","position":3,"name":"Repository","item":"https://git.epam.com/Dzmitry_Shaplyka/js-atm-program/-/blob/master/module-2/app/numbers-validator.js"}]}

</script>
</nav>


</div>
</div>

</div>
<div class="container-fluid container-limited project-highlight-puc">
<main class="content" id="content-body" itemscope itemtype="http://schema.org/SoftwareSourceCode">
<div class="flash-container flash-container-page sticky" data-qa-selector="flash_container">
</div>




<div class="js-signature-container" data-signatures-path="/Dzmitry_Shaplyka/js-atm-program/-/commits/705d89b98d60090f958725e5cf557999af1c2e12/signatures?limit=1"></div>

<div class="tree-holder" id="tree-holder">
<div class="nav-block">
<div class="tree-ref-container">
<div class="tree-ref-holder">
<div data-project-id="128174" data-project-root-path="/Dzmitry_Shaplyka/js-atm-program" data-ref="master" data-ref-type="" id="js-tree-ref-switcher"></div>
</div>
<ul class="breadcrumb repo-breadcrumb">
<li class="breadcrumb-item">
<a href="/Dzmitry_Shaplyka/js-atm-program/-/tree/master">js-atm-program
</a></li>
<li class="breadcrumb-item">
<a href="/Dzmitry_Shaplyka/js-atm-program/-/tree/master/module-2">module-2</a>
</li>
<li class="breadcrumb-item">
<a href="/Dzmitry_Shaplyka/js-atm-program/-/tree/master/module-2/app">app</a>
</li>
<li class="breadcrumb-item">
<a href="/Dzmitry_Shaplyka/js-atm-program/-/blob/master/module-2/app/numbers-validator.js"><strong>numbers-validator.js</strong>
</a></li>
</ul>
</div>
<div class="tree-controls gl-children-ml-sm-3"><a class="gl-button btn btn-default shortcuts-find-file" rel="nofollow" href="/Dzmitry_Shaplyka/js-atm-program/-/find_file/master">Find file
</a><a class="gl-button btn btn-default js-blob-blame-link" href="/Dzmitry_Shaplyka/js-atm-program/-/blame/master/module-2/app/numbers-validator.js">Blame</a><a class="gl-button btn btn-default" href="/Dzmitry_Shaplyka/js-atm-program/-/commits/master/module-2/app/numbers-validator.js">History</a><a class="gl-button btn btn-default js-data-file-blob-permalink-url" href="/Dzmitry_Shaplyka/js-atm-program/-/blob/cf8d268bdcde41b51af5bf580af7f5d616ea053c/module-2/app/numbers-validator.js">Permalink</a></div>
</div>

<div class="info-well d-none d-sm-block">
<div class="well-segment">
<ul class="blob-commit-info">
<li class="commit flex-row js-toggle-container" id="commit-705d89b9">
<div class="avatar-cell d-none d-sm-block">
<a href="/Oleksandr_Halichenko"><img alt="Oleksandr Halichenko&#39;s avatar" src="/uploads/-/system/user/avatar/16640/avatar.png?width=40" class="avatar s40 d-none d-sm-inline-block" title="Oleksandr Halichenko"></a>
</div>
<div class="commit-detail flex-list gl-display-flex gl-justify-content-space-between gl-align-items-flex-start gl-flex-grow-1 gl-min-w-0">
<div class="commit-content" data-qa-selector="commit_content">
<a class="commit-row-message item-title js-onboarding-commit-item " href="/Dzmitry_Shaplyka/js-atm-program/-/commit/705d89b98d60090f958725e5cf557999af1c2e12">updated module-2 adding new methods</a>
<span class="commit-row-message d-inline d-sm-none">
&middot;
705d89b9
</span>
<div class="committer">
<a class="commit-author-link js-user-link" data-user-id="16640" href="/Oleksandr_Halichenko">Oleksandr Halichenko</a> authored <time class="js-timeago" title="Oct 3, 2022 9:13am" datetime="2022-10-03T09:13:43Z" data-toggle="tooltip" data-placement="bottom" data-container="body">Oct 03, 2022</time>
</div>

</div>
<div class="commit-actions flex-row">

<div class="js-commit-pipeline-status" data-endpoint="/Dzmitry_Shaplyka/js-atm-program/-/commit/705d89b98d60090f958725e5cf557999af1c2e12/pipelines?ref=master"></div>
<div class="commit-sha-group btn-group d-none d-sm-flex">
<div class="label label-monospace monospace">
705d89b9
</div>
<button class="btn gl-button btn btn-default btn-icon" data-toggle="tooltip" data-placement="bottom" data-container="body" data-clipboard-text="705d89b98d60090f958725e5cf557999af1c2e12" type="button" title="Copy commit SHA" aria-label="Copy commit SHA" aria-live="polite"><svg class="s16 gl-icon" data-testid="copy-to-clipboard-icon"><use href="/assets/icons-b8c5a9711f73b1de3c81754da0aca72f43b0e6844aa06dd03092b601a493f45b.svg#copy-to-clipboard"></use></svg></button>

</div>
</div>
</div>
</li>

</ul>
</div>

</div>
<div class="blob-content-holder js-per-page" data-blame-per-page="1000" id="blob-content-holder">
<div data-blob-path="module-2/app/numbers-validator.js" data-original-branch="master" data-project-path="Dzmitry_Shaplyka/js-atm-program" data-resource-id="gid://gitlab/Project/128174" data-target-branch="master" data-user-id="gid://gitlab/User/97453" id="js-view-blob-app">
<div class="gl-spinner-container" role="status"><span aria-label="Loading" class="gl-spinner gl-spinner-md gl-spinner-dark gl-vertical-align-text-bottom!"></span></div>
</div>
</div>

</div>

<script nonce="iGLCyjMka0VkFXGDVisgIg==">
//<![CDATA[
  window.gl = window.gl || {};
  window.gl.webIDEPath = '/-/ide/project/denis_kosun/js-atm-program/edit/master/-/module-2/app/numbers-validator.js'


//]]>
</script>

</main>
</div>


</div>
</div>



<script nonce="iGLCyjMka0VkFXGDVisgIg==">
//<![CDATA[
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img.lazy').forEach(img => {
    img.loading = 'lazy';
    let imgUrl = img.dataset.src;
    // Only adding width + height for avatars for now
    if (imgUrl.indexOf('/avatar/') > -1 && imgUrl.indexOf('?') === -1) {
      const targetWidth = img.getAttribute('width') || img.width;
      imgUrl += `?width=${targetWidth}`;
    }
    img.src = imgUrl;
    img.removeAttribute('data-src');
    img.classList.remove('lazy');
    img.classList.add('js-lazy-loaded');
    img.dataset.qa_selector = 'js_lazy_loaded_content';
  });
}

//]]>
</script>
<script nonce="iGLCyjMka0VkFXGDVisgIg==">
//<![CDATA[
gl = window.gl || {};
gl.experiments = {};


//]]>
</script>

</body>
</html>

