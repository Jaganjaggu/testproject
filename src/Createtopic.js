import React from 'react';
import './Style.css'
import choose from "./images/choose.png";

function Createtopic () {
    return (
        <div>
            {/* <!-- Modal section -->  */}
            {/* <!-- Modal createTopic--> */}
            <div class="modal fade" id="createTopic" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header border-bottom-0">
                            <h5 class="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" class=" btn close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                            </div>
                            <div class="modal-body pt-0 p-5">
                                <h5 class="text-center title">Create Topic</h5>
                                <form>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholnder="Topic (Max 50 Characters)"/>
                                </div>
                                <label for="selectOption">Select Categories for the topic</label>
                                <div class=" pb-2 pt-2">
                                    <select name="states" id="example" class="form-control multiselect"  multiple="multiple" style={{display: "none"}}>
                                    <option selected value="Arts" class="pb-2">Arts</option>
                                    <option value="AutomotiveVehicle" class="pb-2">Automotive & Vehicle </option>
                                    <option value="BusinessIndustrial" class="pb-2">Business & Industrial</option>
                                    <option value="Carrers">Career</option>
                                    <option value="Comedy">Comedy</option>
                                    <option selected value="Education">Education</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Family & Parenting">Family & Parenting</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Goverment">Government</option>
                                    <option value="Health">Health & Fitness</option>
                                    <option value="History">History</option>
                                    <option value="Hobbies">Hobbies & Interest</option>
                                    <option value="HomeGarden">Home & Garden</option>
                                    <option value="News">News</option>
                                    <option value="Pets">Pets</option>
                                    <option selected value="Music">Music</option>
                                    <option value="Religion">Religion & Spirituality</option>
                                    <option value="Science">Science</option>
                                    <option value="Society">Society & Culture</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Style">Style & Fashion</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Travel">Travel</option>
                                    <option>
                                    <button type="button" class="btn prm-btn btn-round"> Save </button>
                                    </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your text topic (Max 60 Characters)"></textarea>
                                </div>
                                {/* <!----> */}
                                <div class="form-group row">
                                    <div class="col-6">
                                    <label for="exampleFormControlTextarea1">Add topic image</label>
                                    <div class="card-box-dotted p-5 text-center"> <a href=""><img src={choose} class="img-fluid mb-4"/></a>
                                        <div> <a class='btn btn-outline-primary btn-round font-12' href='javascript:;'> Choose File...
                                        <input type="file" style={{position:"absolute",zIndex:2, top:0, left:0, filter: "alpha(opacity=0)", "-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)", opacity:0, "background-color":"transparent", color:"transparent"}} name="file_source" size="40"  onchange='$("#upload-file-info").html($(this).val());'/>
                                        </a> &nbsp; <span class='label label-info' id="upload-file-info"></span> </div>
                                    </div>
                                    <div class="form-check-inline mt-3">
                                        <div class="custom-control custom-checkbox pmd-checkbox">
                                        <input class="custom-control-input" type="checkbox" value="" id="customCheckbox1" checked />
                                        <label class="custom-control-label pmd-checkbox-ripple-effect" for="customCheckbox1"> Lock Topic <br/>
                                            <small class="font-blue"> Other users cannot post on your topic.</small> </label>
                                        </div>
                                        
                                        {/* <!-- <label class="form-check-label">
                                        <input selected type="checkbox" class="form-check-input" value="">
                                        Lock Topic <br>
                                        <small class="font-blue"> Other users can not post on your topic.</small> </label> -->  */}
                                    </div>
                                    </div>
                                    <div class="col-6">
                                    <label for="exampleFormControlTextarea1">Labels <span class="font-blue">(Ex: #kochimetro #kochi)</span> </label>
                                    <div class="card-box p-5 text-center bg-skyblue" style={{"min-height": "212px"}}> </div>
                                    <div class="mt-4 float-right">
                                        <a href=""><button type="button" class="btn prm-btn btn-round font-12 mr-1">CREATE</button></a>
                                        <a href=""><button type="button" class="btn btn-outline-primary btn-round font-12"><b>SAVE DRAFT</b></button></a>
                                    </div>
                                    </div>
                                </div>
                                {/* <!--//--> */}
                                
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>

        </div>
    );
}

export default Createtopic;