<template>
    <div class="author-panel dashboard-wrap">
        <div class="row">
            <div class="col-sm-3">
                <div class="dashboard-box dashboard-box-1">
                    <div class="white-block-content">
                        <img src="/images/dashboard/dash-1.png">
                        <div class="dashboard-body">
                            <h5>Free Submission</h5>
                            <h5 class="dash-value infinity"><i class="aficon-repeat"></i></h5>
                        </div>
                        <h5 class="dash-footer">
                            Account submission type
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="dashboard-box dashboard-box-2">
                    <div class="white-block-content">
                        <img src="/images/dashboard/dash-2.png">
                        <div class="dashboard-body">
                            <h5>Submitted Ads</h5>
                            <h5 class="dash-value">2</h5>
                        </div>
                        <h5 class="dash-footer">
                            Number of submitted ads
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="dashboard-box dashboard-box-3">
                    <div class="white-block-content">
                        <img src="/images/dashboard/dash-3.png">
                        <div class="dashboard-body">
                            <h5>Your Rating</h5>
                            <h5 class="dash-value">4.5 / 5.00</h5>
                        </div>
                        <h5 class="dash-footer">
                            Based on all your ads
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="dashboard-box dashboard-box-4">
                    <div class="white-block-content">
                        <img src="/images/dashboard/dash-4.png">
                        <div class="dashboard-body">
                            <h5>Favorite Ads</h5>
                            <h5 class="dash-value">2</h5>
                        </div>
                        <h5 class="dash-footer">
                            Number of ads you like
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <h5>Visits Chart</h5>
                <div class="white-block dasboard-chart">
                    <div class="white-block-title">
                        <div class="flex-wrap flex-center">
                            <div class="styled-select margin-above">
                                <select class="advert-chart" disabled="disabled">
                                    <option value="">- Select -</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="white-block-content">
                        <div class="alert-info to-remove no-margin">Select an ad to show data</div>
                        <canvas id="dashboard-chart"></canvas>
                        <div class="alert-info hidden no-data no-margin">No data to show for this ad yet</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Author",
    middleware: 'authenticated',
    layout: 'author',
    head() {
        return {
            title: this.authorName
        }
    },
    computed: {
        authorName() {
            return this.$store.state.auth.data.username
        }
    }
}
</script>

<style scoped>

</style>
