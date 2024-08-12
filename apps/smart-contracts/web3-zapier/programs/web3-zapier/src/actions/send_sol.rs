use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    program::invoke,
    pubkey::Pubkey,
    system_instruction,
};

pub fn send_sol(accounts: &[AccountInfo], amount: u64) -> ProgramResult {
    let from = &accounts[0];
    let to = &accounts[1];

    let transfer_instruction = system_instruction::transfer(from.key, to.key, amount);
    invoke(&transfer_instruction, accounts)?;

    Ok(())
}
