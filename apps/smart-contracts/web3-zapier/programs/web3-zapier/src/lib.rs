pub mod triggers;
pub mod actions;

use triggers::sol_balance_change::*;
use actions::send_sol::*;

// Define entry points for your triggers and actions
#[program]
mod web3_zapier {
    use super::*;
    
    pub fn handle_balance_change(ctx: Context<BalanceChangeTrigger>) -> Result<()> {
        sol_balance_change(ctx)
    }
    
    pub fn handle_send_sol(ctx: Context<SendSolAction>) -> Result<()> {
        send_sol(ctx)
    }
    
    // Add more entry points as needed
}
