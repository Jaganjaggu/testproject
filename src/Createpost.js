import topicicon2 from "./images/topic-icon2.png";
import voiceimage from "./images/voice-image.jpg";
import musicgray from "./images/musicgray-icon.png";
import musicpost from "./images/music-post.png" ;
import redstopicon from "./images/red-stop-icon.png";
import choose from "./images/choose.png";

import React from 'react';
import './Style.css'


function Createpost () {
    return (
        <div>
            <div class="modal fade" id="createPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
                    <div class="modal-content p-4">
                        <div class="modal-header border-bottom-0">
                            <h5 class="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" class=" btn close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                        </div>
                        <div class="modal-body">
                            <h5 class="text-center title mb-2">Create Post</h5>
                            {/* <!-- form --> */}
                            <form>
                                <div class="form-group mt-5">
                                    {/* <!-- <select class="form-control">
                                    <option data-thumbnail="images/topic-icon2.png"> Choose a topic</option>
                                    <option>Choose a topic</option>
                                    <option>Choose a topic</option>
                                    </select> --> */}
                                    <select id="id_select2_example" class="form-control">
                                        <option data-img_src={topicicon2}> Choose a topic</option>
                                        <option data-img_src={topicicon2}> Choose a topic</option>
                                        <option data-img_src={topicicon2}> Choose a topic</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="" class="form-control" placeholder="Title (Max 50 Characters)"/>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" placeholder="Labels (Ex: #kerala)"></textarea>
                                </div>
                                <div class="form-group">
                                    <h5 class="form-heading-post pt-2 pb-2">Audio</h5>
                                    <a href="#"><img src={voiceimage} class="img-fluid mb-2"/></a>
                                </div>
                                <div class="form-group mb-4">
                                    <div class="row float-right pr-3 pt-1">
                                        <a href="#"><div class="btn btn-round btn-outline-primary font-12  pl-4 pr-4 ">REMOVE</div></a>
                                    </div>
                                </div>
                                <div class="form-group"> 
                                    <div class="row mt-5 mb-5 pt-2">
                                            <div class="col-4 box-positionnn">
                                                <div class="card-box-dotted p-4 text-center">
                                                    <a href=""><img src={musicgray} class="img-fluid"/></a>   
                                                    <div>
                                                        <small><span class="text-primary"><u>Upload</u></span> your audio here</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="pt-3 imgrecord">
                                                    <a href="#"><img src={musicpost} class="img-fluid"/></a>
                                                    <h6 class="text-center pt-2">Record</h6>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="pt-3 imgstop">
                                                    <a href="#"><img src={redstopicon} class="img-fluid"/></a> 
                                                    <h6 class="text-center pt-2">Stop</h6>
                                                </div>  
                                            </div>
                                            <div class="col-4">
                                                <div class="btn-dropdawn">
                                                    <div class="audio-language mt-5">
                                                        <button type="button" class="btn btn-languages dropdown-toggle" data-toggle="dropdown"> 
                                                            Audio Language &nbsp; &nbsp;  <i class="fa fa-angle-down fa-lg " aria-hidden="true"></i>
                                                        </button>
                                                        <div class="dropdown-menu langaugeee">
                                                            <a class="dropdown-item pb-2" href="#">Hindi</a>
                                                            <a class="dropdown-item pb-2" href="#">English </a>
                                                            <a class="dropdown-item" href="#">Tamil </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="form-group">
                                        <h5 class="form-heading-post pt-2">Images</h5>
                                        <div class="col-12 mt-0 pt-0">
                                            <label for="exampleFormControlTextarea1"></label>
                                            <div class="card-box-dotted p-5 text-center"> <a href=""><img src={choose} class="img-fluid mb-4"/></a>
                                                <div><label>Drag & Drop Images OR Upload <br/>( MAX 4 Images )</label> 
                                                    {/* <!-- <a class='btn btn-outline-primary btn-round font-12' href='javascript:;'> Choose File...
                                                    <input type="file" style={{position:"absolute","z-index":2,top:0,left:0,filter: "alpha(opacity=0)","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",opacity:0,"background-color","transparent",color:"transparent"}} name="file_source" size="40"  onchange='$("#upload-file-info").html($(this).val());'/>
                                                    </a> &nbsp; <span class='label label-info' id="upload-file-info"></span> --> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <h5 class="form-heading-post pt-2">Text</h5>
                                        <label for="comment" class="pt-2 pb-1">What's on Your mind?</label><br/>                                    
                                        <textarea class="form-control" rows="5" id="comment"></textarea>
                                    </div>
                                    <div class="form-group row">
                                    <div class="col-6">
                                        <div class="form-check-inline mt-3">
                                            <div class="custom-control custom-checkbox pmd-checkbox">
                                                <input class="custom-control-input" type="checkbox" value="" id="customCheckbox1" checked />
                                                    <label class="custom-control-label pmd-checkbox-ripple-effect" for="customCheckbox1"> Lock Comments <br/>
                                                    <small class="font-blue"> Comments will be disabled for your post.</small> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                    <div class="mt-4 float-right">
                                        <button type="button" class="btn prm-btn btn-round font-12 mr-1">POST</button>
                                        <button type="button" class="btn btn-outline-primary btn-round font-12"><b>SAVE DRAFT</b></button>
                                    </div>
                                </div>
                                </div>
                            </form>
                            {/* <!--//--> */}
                    
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}
    
export default Createpost;