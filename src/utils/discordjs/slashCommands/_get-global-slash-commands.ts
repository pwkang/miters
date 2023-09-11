import type { ApplicationCommand, Client } from "discord.js";
import { Routes } from "discord.js";
import { djsRestClient } from "./client";

export interface IGetGlobalSlashCommands {
  client: Client<true>;
}

export const getGlobalSlashCommands = async ({
  client,
}: IGetGlobalSlashCommands): Promise<ApplicationCommand[]> => {
  try {
    const data = await djsRestClient.get(
      Routes.applicationCommands(client.user.id),
    );

    return data as ApplicationCommand[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
