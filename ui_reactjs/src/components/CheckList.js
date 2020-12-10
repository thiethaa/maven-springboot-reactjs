import React, { useState } from 'react'
import { Button, Form,Row,Col } from 'react-bootstrap';
import axios from 'axios';

const CheckList = (props) => {
    const [id,setId] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg,setErrMsg] =useState('');
    const [sendQuestionnaire, setQuestionnareStatus] = useState(false);
    const [createHubPage, setHubPageStatus] = useState(false);
    const [scheduleDeepDive, setDeepDiveStatus] = useState(false);
    console.log("schedule " ,scheduleDeepDive);
    const [determineCustomer, setDetermineCustomerStatus] = useState(false);
    const [disscussAddons, setDisscussAddonsStatus] =useState(false);
    console.log("addons ",disscussAddons);
    const [proxySetting,setProxySettingStatus] = useState(false);
    console.log("proxy ",proxySetting);
    const [trendExport,setTrendExportStatus] = useState(false);
    const [explainCloudMigrationTool,SetExplainCloudMigrationToolStatus] = useState(false);
    const [networking,setNetworkingStatus] = useState(false);
    const [changeCloud,setChangeCloudStatus] = useState(false);
    console.log("cloud ",changeCloud);
    const [actionUi,setActionUiStatus] = useState(false);
    const [patching,setPatchingStatus] = useState(false);
    const [siteBuilder,setSideBuilederStatus] = useState(false);
    console.log("siteBuilder ",siteBuilder);
    const [workArounds,setWorkArroundsStatus] = useState(false);
    console.log("workArounds ",workArounds);
    const [sourceTrees,setSourceTreesStatus] = useState(false);
    const [gap,setGapStatus] = useState(false);
    const [coming,setComingStatus] = useState(false);
    const [passwordNotify,setpasswordNotifyStatus] = useState(false);
    const [methodToMinimize,setMethodTominimizestatus] = useState(false);
    const [determineNetworking,setDetermineNetworkingStatus] = useState(false);
    const [changeRoute,setChangeRouteStatus] = useState(false);
    console.log("route ",changeRoute);
    const [testingValidation,setTestingValidationStatus] = useState(false);
    const [targetDates,setTargetDatesStatus] = useState(false);
    const [addMember,setAddMemberStatus] = useState(false);

    const scheduleDeepDiveController = () => {
        setDeepDiveStatus(!scheduleDeepDive);
        resetChildValue();
    }
    const resetChildValue = () => {
        setDetermineCustomerStatus(false);
        setDisscussAddonsStatus(false);
        setProxySettingStatus(false);
        setTrendExportStatus(false);
        SetExplainCloudMigrationToolStatus(false);
        setNetworkingStatus(false);
        setChangeCloudStatus(false);
        setActionUiStatus(false);
        setPatchingStatus(false);
        setSideBuilederStatus(false);
        setWorkArroundsStatus(false);
        setSourceTreesStatus(false);
        setGapStatus(false);
        setComingStatus(false);
        setpasswordNotifyStatus(false);
        setMethodTominimizestatus(false);
        setDetermineNetworkingStatus(false);
        setChangeRouteStatus(false);
        setTestingValidationStatus(false);
        setTargetDatesStatus(false);
    }
    const resetParentValue = () => {
        setQuestionnareStatus(false);
        setHubPageStatus(false);
        setDeepDiveStatus(false);
        setAddMemberStatus(false);
    }

    const reset = () => {
        resetParentValue();
        resetChildValue();
    }

    const submit = (e) =>{
        e.preventDefault();
        const newData = {
            id: id,
            sendQuestionnaire,
            createHubPage,
            scheduleDeepDiveMeeting: scheduleDeepDive,
            determineCustomer,
            disscussAddons,
            proxySetting,
            trendExport,
            explainCloudMigrationTool,
            networking,
            changeCloud,
            actionUi,
            patching,
            siteBuilder,
            workArounds,
            sourceTrees,
            gap,
            coming,
            passwordNotify,
            methodToMinimize,
            determineNetworking,
            changeRoute,
            testingValidation,
            targetDates,
            addmember:addMember,
        }
        console.log(newData);

        if(id !== '' || null){
            axios.post('http://localhost:7070/add-meeting',newData)
                .then(response => {
                    alert("Data Saved Successfully!")
                    props.history.push("/")
                })
        }else{
            setErrMsg ("Meeting Id is Required!!!")
        }

    }
    return (
        <div>
            <fieldset style={{width:'700px',marginLeft:'200px',marginTop:'50px'}}>
                <h5>Deep Dive Meeting</h5>
                <Form className="p-4">

                    <div style={{color:'green',textAlign:'center'}}>{successMsg}</div>
                    <div style={{color:'Red',textAlign:'center'}}>{errMsg}</div>
                    <div style={{background:'rgb(221,52,68)', width:'700px',padding:'10px',paddingTop:'25px',marginBottom:'15px'}}>
                        <Form.Group as={Row} controlId="meetingId">
                            <Form.Label className="text text-white" column sm="2">
                                Meeting ID
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    value={id}
                                    onChange={(e)=> {
                                        setId(e.target.value);
                                        setSuccessMsg('');
                                        setErrMsg('')
                                    }}
                                    placeholder="Meeting ID" required/>
                            </Col>
                        </Form.Group>
                    </div>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check
                            type="checkbox"
                            value={sendQuestionnaire}
                            onClick={()=>setQuestionnareStatus(!sendQuestionnaire)}
                            label="Send Questionnaire" />
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check
                            type="checkbox"
                            value={createHubPage}
                            onClick={()=>setHubPageStatus(!createHubPage)}
                            label="Create Hub page with answers from questionnaire" />
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check
                            type="checkbox"
                            value={scheduleDeepDive}
                            onClick={scheduleDeepDiveController}
                            label="Schedule Deep Dive and Planning meeting with system manager"/>
                    </Form.Group>

                    { scheduleDeepDive ?
                        <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    checked={determineCustomer}
                                    value={determineCustomer}
                                    onClick={()=>setDetermineCustomerStatus(!determineCustomer)}
                                    label="Determine customer name" />
                                <Form.Check
                                    type="checkbox"
                                    checked={disscussAddons}
                                    value={disscussAddons}
                                    onClick={()=>setDisscussAddonsStatus(!disscussAddons)}
                                    label="Disscuss all addons and ensure compatibility" />
                            </Form.Group>
                        </div>
                        :
                        <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={determineCustomer}
                                    onClick={()=>setDetermineCustomerStatus(!determineCustomer)}
                                    label="Determine customer name" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={disscussAddons}
                                    onClick={()=>setDisscussAddonsStatus(!disscussAddons)}
                                    label="Disscuss all addons and ensure compatibility" />
                            </Form.Group>
                        </div>
                    }
                    { scheduleDeepDive && disscussAddons ?
                        <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    checked={proxySetting}
                                    value={proxySetting}
                                    onClick={()=>setProxySettingStatus(!proxySetting)}
                                    label="Proxy settings" />
                                <Form.Check
                                    type="checkbox"
                                    checked={trendExport}
                                    value={trendExport}
                                    onClick={()=>setTrendExportStatus(!trendExport)}
                                    label="Trend Export" />
                            </Form.Group>
                        </div>
                        :
                        <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={proxySetting}
                                    onClick={()=>setProxySettingStatus(!proxySetting)}
                                    label="Proxy settings" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={trendExport}
                                    onClick={()=>setTrendExportStatus(!trendExport)}
                                    label="Trend Export" />
                            </Form.Group>
                        </div>
                    }
                    {scheduleDeepDive ?
                        <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    checked={explainCloudMigrationTool}
                                    value={explainCloudMigrationTool}
                                    onClick={()=>SetExplainCloudMigrationToolStatus(!explainCloudMigrationTool)}
                                    label="Explain cloud migration tool" />
                                <Form.Check
                                    type="checkbox"
                                    checked={networking}
                                    value={networking}
                                    onClick={()=>setNetworkingStatus(!networking)}
                                    label="Networking" />
                                <Form.Check
                                    type="checkbox"
                                    checked={changeCloud}
                                    value={changeCloud}
                                    onClick={()=>setChangeCloudStatus(!changeCloud)}
                                    label="Change in the cloud" />
                            </Form.Group>
                        </div>
                        :
                        <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={explainCloudMigrationTool}
                                    onClick={()=>SetExplainCloudMigrationToolStatus(!explainCloudMigrationTool)}
                                    label="Explain cloud migration tool" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={networking}
                                    onClick={()=>setNetworkingStatus(!networking)}
                                    label="Networking" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={changeCloud}
                                    onClick={()=>setChangeCloudStatus(!changeCloud)}
                                    label="Change in the cloud" />
                            </Form.Group>
                        </div>
                    }

                    { scheduleDeepDive && changeCloud ?
                        <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    checked={actionUi}
                                    value={actionUi}
                                    onClick={()=>setActionUiStatus(!actionUi)}
                                    label="Actions in UI are same on-prem and cloud" />
                                <Form.Check
                                    type="checkbox"
                                    checked={patching}
                                    value={patching}
                                    onClick={()=>setPatchingStatus(!patching)}
                                    label="No longer patching" />
                                <Form.Check
                                    type="checkbox"
                                    checked={siteBuilder}
                                    value={siteBuilder}
                                    onClick={()=>setSideBuilederStatus(!siteBuilder)}
                                    label="SiteBuilder - No direct Sitebuilder" />
                            </Form.Group>
                        </div>
                        :
                        <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={actionUi}
                                    onClick={()=>setActionUiStatus(!actionUi)}
                                    label="Actions in UI are same on-prem and cloud" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={patching}
                                    onClick={()=>setPatchingStatus(!patching)}
                                    label="No longer patching" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={siteBuilder}
                                    onClick={()=>setSideBuilederStatus(!siteBuilder)}
                                    label="SiteBuilder - No direct Sitebuilder" />
                            </Form.Group>
                        </div>
                    }
                    {scheduleDeepDive && changeCloud && siteBuilder ?
                        <div className="thirdChildBox" style={{paddingLeft:'150px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    checked={workArounds}
                                    value={workArounds}
                                    onClick={()=>setWorkArroundsStatus(!workArounds)}
                                    label="Workarounds: clippings" />
                                <Form.Check
                                    type="checkbox"
                                    checked={sourceTrees}
                                    value={sourceTrees}
                                    onClick={()=>setSourceTreesStatus(!sourceTrees)}
                                    label="Source Trees" />
                                <Form.Check
                                    type="checkbox"
                                    checked={gap}
                                    value={gap}
                                    onClick={()=>setGapStatus(!gap)}
                                    label="Gap: Network tree – can use clippings" />
                                <Form.Check
                                    type="checkbox"
                                    checked={coming}
                                    value={coming}
                                    onClick={()=>setComingStatus(!coming)}
                                    label="Coming: Admin tool to pull replicant and make backups" />
                            </Form.Group>
                        </div>
                        :
                        <div className="thirdChildBox" style={{paddingLeft:'150px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={workArounds}
                                    onClick={()=>setWorkArroundsStatus(!workArounds)}
                                    label="Workarounds: clippings" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={sourceTrees}
                                    onClick={()=>setSourceTreesStatus(!sourceTrees)}
                                    label="Source Trees" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={gap}
                                    onClick={()=>setGapStatus(!gap)}
                                    label="Gap: Network tree – can use clippings" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={coming}
                                    onClick={()=>setComingStatus(!coming)}
                                    label="Coming: Admin tool to pull replicant and make backups" />
                            </Form.Group>
                        </div>
                    }

                    {scheduleDeepDive ?
                        <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    checked={passwordNotify}
                                    value={passwordNotify}
                                    onClick={()=>setpasswordNotifyStatus(!passwordNotify)}
                                    label="Notify that all passwords will change and need to be reset" />
                                <Form.Check
                                    type="checkbox"
                                    checked={methodToMinimize}
                                    value={methodToMinimize}
                                    onClick={()=>setMethodTominimizestatus(!methodToMinimize)}
                                    label="Methods to minimize time of outage - bigger trend buffers" />
                                <Form.Check
                                    type="checkbox"
                                    checked={determineNetworking}
                                    value={determineNetworking}
                                    onClick={()=>setDetermineNetworkingStatus(!determineNetworking)}
                                    label="Determine networking requirements (Tosibox or SC Hub)" />
                            </Form.Group>
                        </div>
                        :
                        <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={passwordNotify}
                                    onClick={()=>setpasswordNotifyStatus(!passwordNotify)}
                                    label="Notify that all passwords will change and need to be reset" />
                                <Form.Check
                                    disabled
                                    value={methodToMinimize}
                                    onClick={()=>setMethodTominimizestatus(!methodToMinimize)}
                                    label="Methods to minimize time of outage - bigger trend buffers" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={determineNetworking}
                                    onClick={()=>setDetermineNetworkingStatus(!determineNetworking)}
                                    label="Determine networking requirements (Tosibox or SC Hub)" />
                            </Form.Group>
                        </div>
                    }

                    {scheduleDeepDive && determineNetworking ?
                        <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    checked={changeRoute}
                                    value={changeRoute}
                                    onClick={()=>setChangeRouteStatus(!changeRoute)}
                                    label= "Can devices change default route or add static routes?"/>
                            </Form.Group>
                        </div>
                        :
                        <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={changeRoute}
                                    onClick={()=>setChangeRouteStatus(!changeRoute)}
                                    label= "Can devices change default route or add static routes?"/>
                            </Form.Group>
                        </div>
                    }

                    {scheduleDeepDive ?
                        <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    checked={testingValidation}
                                    value={testingValidation}
                                    onClick={()=>setTestingValidationStatus(!testingValidation)}
                                    label="May have some programs to pre-load for migration validation testing" />
                                <Form.Check
                                    type="checkbox"
                                    checked={targetDates}
                                    value={targetDates}
                                    onClick={()=>setTargetDatesStatus(!targetDates)}
                                    label="Determine target dates for upgrading to 8.0 and for migration" />
                            </Form.Group>
                        </div>
                        :
                        <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={testingValidation}
                                    onClick={()=>setTestingValidationStatus(!testingValidation)}
                                    label="May have some programs to pre-load for migration validation testing" />
                                <Form.Check
                                    type="checkbox"
                                    disabled
                                    value={targetDates}
                                    onClick={()=>setTargetDatesStatus(!targetDates)}
                                    label="Determine target dates for upgrading to 8.0 and for migration" />
                            </Form.Group>
                        </div>
                    }

                    <Form.Group id="formGridCheckbox">
                        <Form.Check
                            type="checkbox"
                            value={addMember}
                            onClick={()=>setAddMemberStatus(!addMember)}
                            label="Add members and start Conversation in Teams" />
                    </Form.Group>
                    <div style={{marginLeft:'30%'}}>
                        <Button type="submit" onClick={submit} variant="success" style={{width:'200px',margin:'5px'}}>Submit</Button>
                        <Button type="reset" onClick={reset} variant="danger" style={{width:'200px',margin:'5px'}}>Reset</Button>
                    </div>
                </Form>
            </fieldset>
        </div>
    )
}

export default CheckList
