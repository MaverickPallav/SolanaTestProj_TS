import {PublicKey, Connection, LAMPORTS_PER_SOL} from "@solana/web3.js"
import dotenv from 'dotenv';

dotenv.config();

export const airdrop = async (address: string, amount: number) => {
    const publickey = new PublicKey(address)
    const conn = new Connection(process.env.CONNECTIONURL, "confirmed")
    const signature = await conn.requestAirdrop(publickey, amount * LAMPORTS_PER_SOL)
    await conn.confirmTransaction(signature)
}