export function AdminMainMenu() {
    return (
        <main class="flex flex-col w-full h-full px-4 md:px-2 py-4 md:py-6 items-center justify-between">
            <div class="stats bg-neutral shadow w-full h-auto md:h-1/2">

                <div class="stat place-items-center">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">From January 1st to February 1st</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>

            <div class="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[40%] mt-4 md:mt-6">

                <div class="stats bg-primary text-primary-content w-full md:w-1/2 h-auto md:h-full p-4 md:p-6">

                    <div class="stat">
                        <div class="stat-title">Account balance</div>
                        <div class="stat-value">$89,400</div>
                        <div class="stat-actions">
                            <button class="btn btn-sm btn-success">Add funds</button>
                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Current balance</div>
                        <div class="stat-value">$89,400</div>
                        <div class="stat-actions">
                            <button class="btn btn-sm">Withdrawal</button>
                            <button class="btn btn-sm">Deposit</button>
                        </div>
                    </div>

                </div>

                <div class="stats shadow w-full md:w-1/2 h-auto md:h-full p-4 md:p-6">

                    <div class="stat">
                        <div class="stat-title">Total Page Views</div>
                        <div class="stat-value">89,400</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                </div>

            </div>
        </main>
    );
}
