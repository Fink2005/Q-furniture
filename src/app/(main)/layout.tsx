import Main from "@/app/templates/Main";

export default async function Layout(props: { children: React.ReactNode }) {
  return <Main>{props.children}</Main>;
}
