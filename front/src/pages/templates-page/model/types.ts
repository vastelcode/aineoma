export type categoriesType = 'content' | 'site' | 'marketing' | 'social';

export type templateType = {
  header: string;
  text: string;
}

export type ColorVariant = 'default' | 'yellow' | 'green' | 'red';

export interface CategoryTab {
  text:string;
  color: ColorVariant;
};

export type CategoryTabs = {
  [k in categoriesType]:CategoryTab
};
