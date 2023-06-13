const Routes = {
  setupUserData: {
    schoolSelect: 'SchoolSelect',
    profileSelect: {
      select: 'ProfileSelect',
      create: 'ProfileCreateScreen',
      created: 'ProfileCreatedScreen',
    },
  },
  home: 'HomeScreen',
  quickAccess: {
    newSession: 'QuickNewSessionScreen',
    stats: 'QuickStatsScreen',
  },
  pendingSessions: 'PendingSessions',
  teacher: {
    teacher: 'TeacherScreen',
    create: 'TeacherCreateScreen',
    created: 'TeacherCreatedScreen',
    sessionViewer: 'SessionViewerScreen',
    observationViewer: 'ObservationViewerScreen',
    feedbackViewer: 'FeedbackViewerScreen',
    competenceStats: 'CompetenceStatsScreen',
  },
  splash: 'SplashScreen',
  settings: {
    settings: 'SettingsScreen',
    changeLanguage: 'ChangeLanguageScreen',
  },
  classObservation: {
    observationCompleted: 'ObservationCompleted',
    formConfirmation: 'FormObservationConfirmation',
    about: 'ClassObservationAbout',
    onboarding: 'ClassOnboarding',
    setup: 'SetupObservation',
    form: 'FormObservation',
  },

  feedback: {
    mentoringSection: 'MentoringSectionScreen',
    feedbackPreparation: 'FeedbackPrepartionScreen',
    defineActions: 'DefineActionsScreen',
    feedbackCompleted: 'FeedbackCompletedScreen',
  },
};

export default Routes;
