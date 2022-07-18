import { GetUsers } from "../../wailsjs/go/ipc/Channel";
import { ipc } from "../../wailsjs/go/models";

class OrganizationService {
  static users: ipc.User[]

  static getUsers = async (): Promise<ipc.User[]> => {
    const usersResponse = await GetUsers()
    OrganizationService.users = usersResponse
    return usersResponse
  }
}

export default OrganizationService