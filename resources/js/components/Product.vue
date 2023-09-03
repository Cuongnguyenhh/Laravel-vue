<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">Product Table</h2>
            <button type="button" class="btn btn-primary p-1 float-sm-right" data-toggle="modal"
                data-target="#ProductModal">Add new product</button>
        </div>

        <div class="card-body">
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product-one</td>
                        <td>Category-one</td>
                        <td>20$</td>
                        <td>323</td>
                    </tr>
                    <tr>
                        <td>Product-two</td>
                        <td>Categort-two</td>
                        <td>20$</td>
                        <td>323</td>
                    </tr>
                 
                </tbody>
          
            </table>
        </div>
 

    </div>


    <!-- modal add product -->
    <div class="modal fade" id="ProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="ProductName">Name</label>
                            <input type="email" class="form-control" 
                                placeholder="Enter name of product">
                         
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Price</label>
                            <input type="text" class="form-control" placeholder="Enter Price">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Quantity</label>
                            <input type="password" class="form-control"  placeholder="Enter Quantity">
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
    </div>
</div></template>