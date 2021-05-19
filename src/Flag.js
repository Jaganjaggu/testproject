function Flag () {
    return (
        <div>
            {/* <!-- flag Model --> 
                    <!-- The Modal --> */}
                    <div className="modal fade" id="myflag1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content"> 
                        
                        {/* <!-- Modal Header --> */}
                        <div className="modal-header border-0 p-0">
                            <h4 className="modal-title m-auto "></h4>
                            <button type="button" className="btn bg-white bg-whiteee pb-0 mb-0 mt-1 mr-1" data-dismiss="modal">&times;</button>
                        </div>
                        {/* <!--  <hr style="border-bottom: 4px solid #ea3cdc;width: 80px;margin: 0px 0px 0px 163px;"> -->  */}
                        
                        {/* <!-- Modal body --> */}
                        <div className="modal-body mt-1 pt-0">
                            <h4 className="modal-title m-auto modal-sec-heading text-center mt-0 pt-0">Report Inappropriate</h4>
                            <form action="/action_page.php" className="pt-5 p-3 radiobtn">
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" defaultChecked/>
                                <label className="form-check-label selected-label" for="radio1">Intellectual Property </label>  
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label" for="radio2">Threatening Violence </label>
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label" for="radio3">Fraud or Scam </label>
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio4" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label" for="radio4">Mocking Victims </label>
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label" for="radio5">Bullying </label>
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label"for="radio6" >Child Abuse  </label>
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label" for="radio7">Hate Speech </label>
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label" for="radio8">Promoting Drug Use </label>
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option2" value="option2"/>
                                <label className="form-check-label selected-label" for="radio9">Sexually Explicit Material </label>
                            </div>
                            
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio10" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label" for="radio10">Harassment </label>
                            </div>
                            <div className="form-check pb-3">
                                <input type="radio" className="form-check-input" id="radio11" name="optradio" value="option2"/>
                                <label className="form-check-label selected-label" for="radio11">Others </label>
                            </div>
                            
                            </form>
                            <div className="d-flex justify-content-center">
                            <div className="text-center m-2"> <a href=""> <a>
                                <div className="btn btn-round prm-btn font-12">REPORT</div>
                                </a></a> </div>
                            <div className="text-center m-2" id="radio-btn-border"> <a href="#">
                                <div className="btn btn-outline-primary btn-round font-12">CANCEL</div>
                                </a> </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                            </div>
                        
    );
}

export default Flag;