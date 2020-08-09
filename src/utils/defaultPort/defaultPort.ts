const defaultPort = (): number => (process?.env?.PORT ? +process.env.PORT : 4002);

export default defaultPort;
