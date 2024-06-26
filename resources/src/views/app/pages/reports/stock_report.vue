<template>
  <div class="main-content">
    <breadcumb :page="$t('stock_report')" :folder="$t('Reports')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="reports"
        @on-page-change="onPageChange"
        @on-per-page-change="onPerPageChange"
        @on-sort-change="onSortChange"
        @on-search="onSearch"
        :search-options="{
        placeholder: $t('Search_this_table'),
        enabled: true,
      }"
        :pagination-options="{
        enabled: true,
        mode: 'records',
        nextLabel: $t('Next'),
        prevLabel: $t('Prev'),
      }"
        styleClass="tableOne table-hover vgt-table mt-3"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <router-link title="Report" :to="'/app/reports/detail_stock/'+props.row.id">
              <b-button variant="primary">{{$t('Reports')}}</b-button>
            </router-link>
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>


<script>
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Stock Report"
  },
  data() {
    return {
      isLoading: true,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      limit: "10",
      search: "",
      totalRows: "",
      reports: [],
      report: {}
    };
  },

  computed: {
    columns() {
      return [
        {
          label: this.$t("ProductCode"),
          field: "code",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Name_product"),
          field: "name",
          tdClass: "text-left",
          thClass: "text-left",
          sortable: false
        },
        {
          label: this.$t("Categorie"),
          field: "category",
          tdClass: "text-left",
          thClass: "text-left",
          sortable: false
        },
        {
          label: this.$t("Cost"),
          field: "cost",
          type: "decimal",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Price"),
          field: "price",
          type: "decimal",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Current_stock"),
          field: "quantity",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Action"),
          field: "actions",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
          sortable: false
        }
      ];
    }
  },

  methods: {
    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Stock_Report(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Stock_Report(1);
      }
    },

    //---- Event on Sort Change
    onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Stock_Report(this.serverParams.page);
    },

    //---- Event on Search

    onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Stock_Report(this.serverParams.page);
    },

    //------------------------------Formetted Numbers -------------------------\\
    formatNumber(number, dec) {
      const value = (typeof number === "string"
        ? number
        : number.toString()
      ).split(".");
      if (dec <= 0) return value[0];
      let formated = value[1] || "";
      if (formated.length > dec)
        return `${value[0]}.${formated.substr(0, dec)}`;
      while (formated.length < dec) formated += "0";
      return `${value[0]}.${formated}`;
    },

    //--------------------------- Get Customer Report -------------\\

    Get_Stock_Report(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "report/stock?page=" +
            page +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&limit=" +
            this.limit
        )
        .then(response => {
          this.reports = response.data.report;
          this.totalRows = response.data.totalRows;
          // Complete the animation of theprogress bar.
          NProgress.done();
          this.isLoading = false;
        })
        .catch(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    }
  }, //end Methods

  //----------------------------- Created function------------------- \\

  created: function() {
    this.Get_Stock_Report(1);
  }
};
</script>