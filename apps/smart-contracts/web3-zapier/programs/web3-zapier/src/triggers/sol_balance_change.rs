use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};

pub fn check_balance_change(accounts: &[AccountInfo]) -> ProgramResult {
    let account = &accounts[0];
    let previous_balance = account.lamports();
    let new_balance = account.lamports();  // Fetch the balance here

    if new_balance != previous_balance {
        msg!("Balance has changed from {} to {}", previous_balance, new_balance);
    }

    Ok(())
}
