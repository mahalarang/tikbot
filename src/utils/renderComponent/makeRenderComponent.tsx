import { FC, ReactNode, Suspense, lazy, useMemo } from "react";

interface RenderComponentProps {
  path: string;
  fallback: ReactNode;
}

const makerenderComponent = ({ rootPath }: { rootPath: string }) => {
  const clearRootPath = rootPath.replace(/\/$/, "");

  const RenderComponent: FC<RenderComponentProps> = ({ path, fallback }) => {
    const Component = useMemo(() => {
      return lazy(() => import(clearRootPath + "/" + path));
    }, [path]);

    return (
      <Suspense fallback={fallback}>
        <Component />
      </Suspense>
    );
  };

  return { RenderComponent };
};

export default makerenderComponent;
