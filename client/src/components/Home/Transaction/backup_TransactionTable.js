import React from 'react'
import './TransactionTable.css'

function TransactionTable() {
    return (
        <div>
            <div class="trx-wrapper rounded">
                <nav class="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start"> <a class="navbar-brand" href="#">Transactions <p class="text-muted pl-1">Welcome to your transactions</p> </a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-lg-auto">
                            <li class="nav-item"> <a class="nav-link" href="#"><span class="fa fa-bell-o font-weight-bold"></span> <span class="notify">Notifications</span> </a> </li>
                            <li class="nav-item "> <a href="#"><span class="fa fa-search"></span></a> <input type="search" class="dark" placeholder="Search" /></li>
                        </ul>
                    </div>
                </nav>
                <br />
                <div class="row mt-2 pt-2">
                    <div class="col-md-6" id="income">
                        <div class="d-flex justify-content-start align-items-center">
                            <p class="fa fa-long-arrow-down"></p>
                            <p class="text mx-3">Income</p>
                            <p class="text-white ml-4 money">$9,758.23</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-md-end align-items-center">
                            <div class="fa fa-long-arrow-up"></div>
                            <div class="text mx-3">Expense</div>
                            <div class="text-white ml-4 money">$961.23</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <ul class="nav nav-tabs w-75">
                        <li class="nav-item"> <a class="nav-link active" href="#history">History</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#">Reports</a> </li>
                    </ul> <button class="btn btn-primary">New Transaction</button>
                </div>
                <div class="table-responsive mt-3">
                    <table class="table table-dark table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Activity</th>
                                <th scope="col">Mode</th>
                                <th scope="col">Date</th>
                                <th scope="col" class="text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row"> <span class="fa fa-briefcase mr-1"></span> Coorg Trip </td>
                                <td><span class="fa fa-cc-mastercard"></span></td>
                                <td class="text-muted">12 Jul 2020, 12:30 PM</td>
                                <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $52.9 </td>
                            </tr>
                            <tr>
                                <td scope="row"> <span class="fa fa-bed mr-1"></span> Hotel Leela Palace </td>
                                <td><span class="fa fa-cc-mastercard"></span></td>
                                <td class="text-muted">11 Jul 2020, 2:00 PM</td>
                                <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $18.9 </td>
                            </tr>
                            <tr>
                                <td scope="row"> <span class="fa fa-exchange mr-1"></span> Monthly Salary </td>
                                <td><span class="fa fa-cc-visa"></span></td>
                                <td class="text-muted">10 Jul 2020, 8:30 PM</td>
                                <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-down mr-1"></span> $9,765.00 </td>
                            </tr>
                            <tr>
                                <td scope="row"> <span class="fa fa-exchange mr-1"></span> Xbox Purchase </td>
                                <td><span class="fa fa-cc-mastercard"></span></td>
                                <td class="text-muted">12 May 2020, 4:30 PM</td>
                                <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $198.90 </td>
                            </tr>
                            <tr>
                                <td scope="row"> <span class="fa fa-cutlery mr-1"></span> Dinner Party </td>
                                <td><span class="fa fa-cc-visa"></span></td>
                                <td class="text-muted">11 May 2020, 5:30 PM</td>
                                <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $12.90 </td>
                            </tr>
                            <tr>
                                <td scope="row"> <span class="fa fa-briefcase mr-1"></span> Nandini Hills Ride </td>
                                <td><span class="fa fa-cc-mastercard"></span></td>
                                <td class="text-muted">10 May 2020, 01:30 PM</td>
                                <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $97.9 </td>
                            </tr>
                            <tr>
                                <td scope="row"> <span class="fa fa-briefcase mr-1"></span> Goa Beach Party </td>
                                <td><span class="fa fa-cc-visa"></span></td>
                                <td class="text-muted">09 May 2020, 01:30 PM</td>
                                <td class="d-flex justify-content-end align-items-center"> <span class="fa fa-long-arrow-up mr-1"></span> $97.9 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-between align-items-center results"> <span class="pl-md-3">Showing<b class="text-white"> 1-7 0f 200 </b> trasactions</span>
                    <div class="pt-3">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item disabled"> <a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&lt;</span> </a> </li>
                                <li class="page-item"> <a class="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&gt;</span> </a> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionTable