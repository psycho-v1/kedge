# kedge

Local page for chain 1404. Vacates one confirmed-account slot when a send
never leaves the wallet view.

Not a clone of the usual “same nonce + higher gas + speed-up” helpers.

## Method

1. Majority head-lock: each community RPC must share chain id 1404 and the
   same block hash at the lowest common height before any write.
2. Slot is `eth_getTransactionCount(addr, latest)` only. Pending count is a
   gap detector, never the nonce source.
3. Cap/tip from `eth_feeHistory` reward percentiles, not `gasPrice * n`.
4. Wallet broadcasts first (`eth_sendTransaction` on the injected provider).
   The same signed payload is then re-injected to the community set.
5. Presence matrix: `eth_getTransactionByHash` on every endpoint after send.
6. No speed-up path. No original-hash loader. One vacate per run.

RPC set is fixed in `AGREEMENT.md`. bdagscan is refused.

## Files

`index.html` · `AGREEMENT.md` · `NOTICE.md` · `LICENSE`
