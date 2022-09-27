<template>
  <div>
    Purchase Order : {{ order_details }}

    <div class="flex-between">
      <div>
        <label>PO No.</label>
        <span class="text-xl">
          {{ order_details.date.split('-')[0].substring(2, 4) }}/{{
            order_details.id
          }}
        </span>
      </div>
      <div>
        <label> Type </label>
        {{ order_details.type }}
      </div>

      <div>
        <label>PO Date</label>
        {{ order_details.date }}
      </div>
      <div>
        <label>Quote/Ref</label>
        {{ order_details.quote_ref }}
      </div>
      <div>
        <label>Quote/Ref Date</label>
        {{ order_details.quote_ref_date }}
      </div>
    </div>

    <div class="flex-between">
      <div>
        <label>From</label>
        {{ order_details.company }}
      </div>
      <div>
        <label>To</label>
        {{ order_details.party }}
      </div>

      <div>
        <label>TVA Amount (Rate : {{ order_details.tva_rate }}%)</label>
        {{ order_details.tva_amount }}
      </div>

      <div>
        <label>Discount Type</label>
        {{ order_details.discount_type }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic_details',
  props: ['order_details'],
  // data() {
  //   return {
  //     order_details: {},
  //   }
  // },
}
</script>
