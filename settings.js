'use strict';


/**
 * This section is managed by scripts/reconfigure_spinnaker.sh
 * If hand-editing, only add comment lines that look like
 * '// var VARIABLE = VALUE'
 * and let scripts/reconfigure manage the actual values.
 */
// BEGIN reconfigure_spinnaker

// var gateUrl = ${services.deck.gateUrl};
var gateUrl = 'http://localhost:8084';
// var authEnabled = ${services.deck.auth.enabled};
var authEnabled = false;
// var defaultTimeZone = ${services.deck.timezone};
var defaultTimeZone = 'America/Los_Angeles';
// var awsDefaultRegion = ${providers.aws.defaultRegion};
var awsDefaultRegion = 'us-west-2';
// var awsPrimaryAccount = ${providers.aws.primaryCredentials.name};
var awsPrimaryAccount = 'default';
// var googleDefaultRegion = ${providers.google.defaultRegion};
var googleDefaultRegion = 'us-central1';
// var googleDefaultZone = ${providers.google.defaultZone};
var googleDefaultZone = 'us-central1-f';
// var googlePrimaryAccount = ${providers.google.primaryCredentials.name};
var googlePrimaryAccount = 'my-google-account';
// var azureDefaultRegion = ${providers.azure.defaultRegion};
var azureDefaultRegion = 'westus';
// var azurePrimaryAccount = ${providers.azure.primaryCredentials.name};
var azurePrimaryAccount = 'my-azure-account';
// var cfDefaultRegion = ${providers.cf.defaultOrg};
var cfDefaultRegion = 'spinnaker-cf-org';
// var cfDefaultZone = ${providers.cf.defaultSpace};
var cfDefaultZone = 'spinnaker-cf-space';
// var cfPrimaryAccount = ${providers.cf.primaryCredentials.name};
var cfPrimaryAccount = 'my-cf-account';
// var titanDefaultRegion = ${providers.titan.defaultRegion};
var titanDefaultRegion = 'us-east-1';
// var titanPrimaryAccount = ${providers.titan.primaryCredentials.name};
var titanPrimaryAccount = 'my-titan-account';
// var kubernetesDefaultNamespace = ${providers.kubernetes.primaryCredentials.namespace};
var kubernetesDefaultNamespace = 'default';
// var kubernetesPrimaryAccount = ${providers.kubernetes.primaryCredentials.name};
var kubernetesPrimaryAccount = 'my-kubernetes-account';
// var emailEnabled = ${services.echo.notifications.mail.enabled};
var emailEnabled = false;
// var hipchatEnabled = ${services.echo.notifications.hipchat.enabled};
var hipchatEnabled = false;
// var hipchatBotName = ${services.echo.notifications.hipchat.botName};
var hipchatBotName = '';
// var smsEnabled = ${services.echo.notifications.sms.enabled};
var smsEnabled = false;
// var slackEnabled = ${services.echo.notifications.slack.enabled};
var slackEnabled = false;
// var slackBotName = ${services.echo.notifications.slack.botName};
var slackBotName = '';
// var fiatEnabled = ${services.fiat.enabled};
var fiatEnabled = false;
// var chaosEnabled = ${services.chaos.enabled};
var chaosEnabled = false;
// var openstackPrimaryAccount = ${providers.openstack.primaryCredentials.name};
var openstackPrimaryAccount = 'my-openstack-account';
// var openstackDefaultRegion = ${providers.openstack.defaultRegion};
var openstackDefaultRegion = 'RegionOne';
// var appenginePrimaryAccount = ${providers.appengine.primaryCredentials.name};
var appenginePrimaryAccount = 'my-appengine-account';

// END reconfigure_spinnaker
/**
 * Any additional custom var statements can go below without
 * being affected by scripts/reconfigure_spinnaker.sh
 */

window.spinnakerSettings = {
  gateUrl: gateUrl,
  bakeryDetailUrl: gateUrl + '/bakery/logs/global/{{context.status.id}}',
  authEndpoint: gateUrl + '/auth/user',
  pollSchedule: 30000,
  defaultTimeZone: defaultTimeZone, // see http://momentjs.com/timezone/docs/#/data-utilities/
  providers: {
    azure: {
      defaults: {
        account: azurePrimaryAccount,
        region: azureDefaultRegion
      },
    },
    gce: {
      defaults: {
        account: googlePrimaryAccount,
        region: googleDefaultRegion,
        zone: googleDefaultZone,
      },
      associatePublicIpAddress: true,
    },
    aws: {
      defaults: {
        account: awsPrimaryAccount,
        region: awsDefaultRegion
      },
      useAmiBlockDeviceMappings: false,
    },
    cf: {
      defaults: {
        account: cfPrimaryAccount,
        region: cfDefaultRegion
      },
    },
    titan: {
      defaults: {
        account: titanPrimaryAccount,
        region: titanDefaultRegion
      },
    },
    kubernetes: {
      defaults: {
        account: kubernetesPrimaryAccount,
        namespace: kubernetesDefaultNamespace,
        proxy: 'localhost:8001'
      },
    },
    openstack: {
      defaults: {
        account: openstackPrimaryAccount,
        region: openstackDefaultRegion
      }
    },
    appengine: {
      defaults: {
        account: appenginePrimaryAccount,
        editLoadBalancerStageEnabled: false,
      }
    },
  },
  notifications: {
    email: {
      enabled: emailEnabled
    },
    hipchat: {
      enabled: hipchatEnabled,
      botName: hipchatBotName
    },
    sms: {
      enabled: smsEnabled
    },
    slack: {
      enabled: slackEnabled,
      botName: slackBotName
    }
  },
  authEnabled: authEnabled,
  feature: {
    pipelines: true,
    notifications: false,
    fastProperty: false,
    vpcMigrator: false,
    clusterDiff: false,
    roscoMode: true,
    netflixMode: false,
    fiatEnabled: fiatEnabled,
    chaosMonkey: chaosEnabled,
  },
};
