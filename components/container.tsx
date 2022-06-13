import LayoutProps from "../types/layoutprops";

const Container = ({ children }: LayoutProps) => {
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container;