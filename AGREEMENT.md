# User agreement — kedge

Effective 6 September 2026.

kedge is a static page. It reads community JSON-RPC, asks your wallet to
sign one 0-value self-transfer, and re-injects that payload. It does not
hold assets or keys.

## Endpoints used

- https://rpc.blockdag.engineering/
- https://rpc.welshdag.trade/
- https://rpc.capedag.com/
- https://rpc.bdag-us.org/
- https://rpc.dvdmining.com/

Project hostnames such as rpc.bdagscan.com are excluded.

## You accept

Confirmed nonce only. Pending rows that exist solely in a wallet pointed
at another ledger cannot be vacated.

Head-lock failure (RPCs disagree on a block hash) aborts the write.

Fees follow feeHistory percentiles and may still be rejected by a node cap.

No warranty. No fiduciary duty. No money transmission.

Clicking I agree stores a digest of this text in this browser only.
