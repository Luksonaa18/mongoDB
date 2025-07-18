import bcrypt from "bcrypt";
export const hashString = async (str: string) => await bcrypt.hash(str, 10);
/**
 *
 * @param str
 * @param hash
 * @returns boolean
 */
export const compare = async (str: string, hash: string) =>
  await bcrypt.compare(str, hash);
