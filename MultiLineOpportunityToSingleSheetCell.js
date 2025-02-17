if(input.amount) {
    var amount = input.amount.replace(/,\$/gm,"\n$");
}
if(input.amount_id) {
    var amount_id = input.amount_id.replace(/,/gm,"\n");
}
if(input.amount_kind) {
    var amount_kind = input.amount_kind.replace(/,/gm,"\n");
}

return { Amount: amount, ID: amount_id, Kind: amount_kind};
