export type Environment = {
  baseUrl: string;
  basicAuth: {
    username: string;
    password: string;
  };
}

export const ProductionEnvironment: Environment = {
  baseUrl: "https://prod.tafmobile.de",
  basicAuth: {
    username: "lpe",
    password: "JpaP8eYLDtB1lgBA1wAc"
  }
}

export const StagingEnvironment: Environment = {
  ...ProductionEnvironment,
  baseUrl: "https://staging.tafmobile.de"
}

export const TestingEnvironment: Environment = {
  baseUrl: "https://test.tafmobile.de",
  basicAuth: {
    username: "lpe",
    password: "paWlipAcYvyBSyEU"
  }
}

export const DevelopmentEnvironment: Environment = {
  baseUrl: "https://dev.tafmobile.de",
  basicAuth: {
    username: "lpe",
    password: "lpesecret"
  }
}
