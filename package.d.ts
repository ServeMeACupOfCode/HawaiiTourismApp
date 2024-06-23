interface PackageJson {
  name: string;
  version: string;
  private: boolean;
  scripts: {
    [key: string]: string;
  };
  dependencies: {
    [key: string]: string;
  };
  devDependencies: {
    [key: string]: string;
  };
  engines: {
    node: string;
  };
  customData: {
    categoryData: {id: number; name: string}[];
    slidesData: {
      image: string;
      title: string;
      description: string;
    }[];
  };
}

declare const packageJson: PackageJson;

export default packageJson;
