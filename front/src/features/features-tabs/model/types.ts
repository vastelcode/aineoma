export type TabType = {
  id:string;
  title:string;
  description:string;
  image:string;
}

export type FeaturesTabsProps = {
  tabs: TabType[];
};