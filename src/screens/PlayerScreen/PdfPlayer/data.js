export const pdfPlayerConfig = {
  context: {
    mode: 'play',
    partner: [],
    pdata: {
      id: 'dev.sunbird.portal',
      ver: '5.2.0',
      pid: 'sunbird-portal',
    },
    contentId: 'do_21374910251798528014586',
    sid: '6d1898db-d783-4f83-8b92-4a36636e0d2f',
    uid: 'anonymous',
    timeDiff: -0.089,
    channel: '01269878797503692810',
    tags: ['01269878797503692810'],
    did: '3ca74a4c5fbce6b7b7f5cd12cebb1682',
    contextRollup: { l1: '01269878797503692810' },
    objectRollup: {},
    userData: { firstName: 'Guest', lastName: '' },
  },
  config: {
    showEndPage: false,
    endPage: [{ template: 'assessment', contentType: ['SelfAssess'] }],
    showStartPage: true,
    host: '',
    overlay: { showUser: false },
    splash: {
      text: '',
      icon: '',
      bgImage: 'assets/icons/splacebackground_1.png',
      webLink: '',
    },
    apislug: '/action',
    repos: ['/sunbird-plugins/renderer'],
    plugins: [
      { id: 'org.sunbird.iframeEvent', ver: 1, type: 'plugin' },
      { id: 'org.sunbird.player.endpage', ver: 1.1, type: 'plugin' },
    ],
    sideMenu: {
      showShare: false,
      showDownload: false,
      showExit: false,
      showPrint: false,
      showReplay: true,
    },
  },
  metadata: {},
  data: {},
};
