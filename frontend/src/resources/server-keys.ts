
const ServerKeys = {
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
  REMEMBER: 'remember',
  FULL_NAME: 'fullName',
  PROJECT_NAME: 'projectName',
  PROJECT_ID: 'projectId',
} as const;

type ServerKeys = typeof ServerKeys[keyof typeof ServerKeys];
export default ServerKeys;