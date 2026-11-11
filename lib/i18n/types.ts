export type Language = 'en' | 'es';

export interface MilestoneTranslation {
  year: string;
  title: string;
  description: string;
}

export interface TeamMemberTranslation {
  name: string;
  role: string;
  description: string;
}

export interface SponsorTranslation {
  name: string;
  tier: string;
  description: string;
}

export interface GameTranslation {
  title: string;
  status: string;
  stage: string;
  tagline: string;
  hook: string;
  tags: string[];
}

export interface Translations {
  navbar: {
    home: string;
    games: string;
    story: string;
    team: string;
    sponsors: string;
  };
  hero: {
    titleLine1: string;
    titleLine2Pre: string;
    titleLine2Highlight: string;
    description: string;
    badge: string;
    explore: string;
    playPrototype: string;
  };
  games: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
    statusLabel: string;
    viewGame: string;
    playPrototype: string;
    layer8: GameTranslation;
  };
  about: {
    title: string;
    subtitle: string;
    milestones: MilestoneTranslation[];
  };
  team: {
    title: string;
    subtitle: string;
    viewInfo: string;
    members: Record<string, TeamMemberTranslation>;
  };
  sponsors: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
    viewInfo: string;
    partners: Record<string, SponsorTranslation>;
  };
  footer: {
    founderRole: string;
    emailLabel: string;
  };
  kernelKeeper: {
    boot: { lines: string[]; skip: string };
    ui: {
      home: string;
      settingsLabel: string;
      fx: string;
      legibleFont: string;
      on: string;
      off: string;
      photosensitivity: string;
      minimize: string;
      restore: string;
      close: string;
      taskbarLabel: string;
      memLabel: string;
      scrollTop: string;
      artPending: string;
    };
    hero: {
      status: string;
      tagline: string;
      genre: string;
      play: string;
      beta: string;
      mobileNotice: string;
    };
    story: { window: string; title: string; lines: string[] };
    layer7: {
      window: string;
      tag: string;
      title: string;
      intro: string;
      hint: string;
      zones: { id: string; name: string; file: string; line: string }[];
      hydra: { name: string; file: string; text: string; warning: string };
    };
    howToPlay: { window: string; title: string; items: { title: string; desc: string }[] };
    dilemma: { pre: string; question: string };
    locked: { window: string; title: string; text: string; detail: string; retry: string };
    signup: {
      window: string;
      title: string;
      prompt: string;
      emailLabel: string;
      placeholder: string;
      submit: string;
      loading: string;
      success: string;
      invalid: string;
      error: string;
    };
    credits: {
      window: string;
      title: string;
      command: string;
      members: { name: string; role: string }[];
      studio: string;
    };
    footer: { tagline: string; location: string; contactLabel: string; followLabel: string };
    bsod: { title: string; lines: string[]; dismiss: string };
  };
  switch: {
    ariaLabel: string;
    enTitle: string;
    esTitle: string;
  };
  notFound: {
    description: string;
    respawn: string;
  };
}
