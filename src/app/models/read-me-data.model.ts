export interface skillModel {
  name: string;
  svgPath: string;
}
export interface ReadMeDataModel extends skillModel {
  titlePrefix: string;
  name: string;
  subtitle: string;
  currentWork: string;
  curentWorkProject: string;
  collaboration: string;
  collaborationProject: string;
  funFact: string;
  funFactProject: string;
  skills: skillModel[];
}
