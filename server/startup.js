/**
 * Created by matthewmckay on 4/16/15.
 */
if (Meteor.isServer) {
    if (Rooms.find().count()==0 || Courses.find().count()==0 || Teacher.find().count()==0 || Waypoint.find().count()==0){
        Meteor.startup(function () {
            if (Rooms.find().count() == 0) {
                //----------------------------- creates Rooms database on startup
                Rooms.insert({
                    building: 'LOCKETT',
                    roomNum: 'B16',
                    latitude: '30.41345',
                    longitude: '-91.18187',
                    roomID: 'LOCKETTB16'
                });//B16
                Rooms.insert({
                    building: 'LOCKETT',
                    roomNum: 'B10',
                    latitude: '30.41351',
                    longitude: '-91.18176',
                    roomID: 'LOCKETTB10'
                });//B10
                Rooms.insert({
                    building: 'LOCKETT',
                    roomNum: 'B6',
                    latitude: '30.41346',
                    longitude: '-91.18165',
                    roomID: 'LOCKETTB6'
                });//B6
                Rooms.insert({
                    building: 'LOCKETT',
                    roomNum: 'B2',
                    latitude: '30.41332',
                    longitude: '-91.18176',
                    roomID: 'LOCKETTB2'
                });//B2
                Rooms.insert({
                    building: 'LOCKETT',
                    roomNum: 'B5',
                    latitude: '30.4132',
                    longitude: '-91.18165',
                    roomID: 'LOCKETTB15'
                });//B15
                Rooms.insert({
                    building: 'LOCKETT',
                    roomNum: 'B9',
                    latitude: '30.41313',
                    longitude: '-91.18176',
                    roomID: 'LOCKETTB9'
                });//B9
                Rooms.insert({
                    building: 'LOCKETT',
                    roomNum: 'B15',
                    latitude: '30.41319',
                    longitude: '-91.18186',
                    roomID: 'LOCKETTB15'
                });//B15
                Rooms.insert({
                    building: 'LOCKETT',
                    roomNum: 'STORAGE',
                    latitude: '30.41341',
                    longitude: '-91.18176',
                    roomID: 'LOCKETTSTORAGE'
                });//STORAGE
            }
            //------------------------------ END ROOM DB
            if (Courses.find().count() == 0) {
                //------------------------------ creates Course database on startup
                Courses.insert({
                    department: 'CSC',
                    course: '1254',
                    section: '001',
                    m: 'true',
                    t: 'false',
                    w: 'true',
                    th: 'false',
                    f: 'true',
                    time: '0730-0830',
                    teacherID: 'TEACH123',
                    courseID: 'CSC1254001',
                    roomID: 'LOCKETTB10'
                });
                Courses.insert({
                    department: 'ART',
                    course: '1001',
                    section: '001',
                    m: 'true',
                    t: 'false',
                    w: 'true',
                    th: 'false',
                    f: 'true',
                    time: '0730-0830',
                    teacherID: 'TEACH124',
                    courseID: 'ART1001001',
                    roomID: 'LOCKETTB16'
                });
                Courses.insert({
                    department: 'ART',
                    course: '3001',
                    section: '012',
                    m: 'false',
                    t: 'true',
                    w: 'false',
                    th: 'true',
                    f: 'false',
                    time: '0730-0830',
                    teacherID: 'TEACH125',
                    courseID: 'ART3001012',
                    roomID: 'LOCKETTB5'
                });
                Courses.insert({
                    department: 'MATH',
                    course: '2290',
                    section: '003',
                    m: 'true',
                    t: 'true',
                    w: 'true',
                    th: 'true',
                    f: 'true',
                    time: '0900-1000',
                    teacherID: 'TEACH126',
                    courseID: 'MATH2290003',
                    roomID: 'LOCKETTB6'
                });
                Courses.insert({
                    department: 'EE',
                    course: '3304',
                    section: '002',
                    m: 'true',
                    t: 'true',
                    w: 'true',
                    th: 'false',
                    f: 'false',
                    time: '1000-1100',
                    teacherID: 'TEACH127',
                    courseID: 'EE3304002',
                    roomID: 'LOCKETTB2'
                });
                Courses.insert({
                    department: 'CSC',
                    course: '3501',
                    section: '001',
                    m: 'false',
                    t: 'true',
                    w: 'false',
                    th: 'true',
                    f: 'false',
                    time: '930-1100',
                    teacherID: 'TEACH128',
                    courseID: 'CSC3501001',
                    roomID: 'LOCKETTB15'
                });
                Courses.insert({
                    department: 'CSC',
                    course: '4243',
                    section: '002',
                    m: 'false',
                    t: 'true',
                    w: 'false',
                    th: 'true',
                    f: 'false',
                    time: '930-1100',
                    teacherID: 'TEACH129',
                    courseID: 'CSC4243002',
                    roomID: 'LOCKETTB9'
                });
            }
            //------------------------------ END COURSE DB
            if (Teacher.find().count() == 0) {
                //--------------------------- TEACHER DB
                Teacher.insert({
                    name: 'BOBBY BOY',
                    roomID: 'LOCKETTSTORAGE',
                    teacherID: 'TEACH123'
                });
                Teacher.insert({
                    name: 'MR DREDS',
                    roomID: 'LOCKETTSTORAGE',
                    teacherID: 'TEACH124'
                });
                Teacher.insert({
                    name: 'BILL NI',
                    roomID: 'LOCKETTSTORAGE',
                    teacherID: 'TEACH125'
                });
                Teacher.insert({
                    name: 'ELVIS',
                    roomID: 'LOCKETTSTORAGE',
                    teacherID: 'TEACH126'
                });
                Teacher.insert({
                    name: 'HOBO HUE',
                    roomID: 'LOCKETTSTORAGE',
                    teacherID: 'TEACH127'
                });
                Teacher.insert({
                    name: 'PHIL COLINS',
                    roomID: 'LOCKETTSTORAGE',
                    teacherID: 'TEACH128'
                });
                Teacher.insert({
                    name: 'JUDGE DRED',
                    roomID: 'LOCKETTSTORAGE',
                    teacherID: 'TEACH129'
                });
            }
            //------------------------------ END TEACHER DB
            if (Waypoint.find().count() == 0) {
                Waypoint.insert({//west entrance
                    latitude: '30.41332',
                    longitude: '-91.18191',
                    waypointID: '30.41332-91.18191',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41337-91.18191',
                        '30.41326-91.18191',
                        '30.41332-91.18186'
                    ]
                });//we done
                Waypoint.insert({//B16se
                    latitude: '30.41337',
                    longitude: '-91.18191',
                    waypointID: '30.41337-91.18191',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18191',//we
                        '30.41345-91.18187'//B16
                    ]
                });//b16se done
                Waypoint.insert({//b15ne
                    latitude: '30.41326',
                    longitude: '-91.18191',
                    waypointID: '30.41326-91.18191',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18191',//we
                        '30.41319-91.18186'//B15
                    ]
                });//b15ne done need b15
                Waypoint.insert({//wi
                    latitude: '30.41332',
                    longitude: '-91.18186',
                    waypointID: '30.41332-91.18186',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18191',
                        '30.41335-91.18187',//nwrro
                        '30.41329-91.18186',//swrro
                        '30.41332-91.18185'//b2we
                    ]
                });//wi done
                Waypoint.insert({//b2we
                    latitude: '30.41332',
                    longitude: '-91.18185',
                    waypointID: '30.41332-91.18185',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18186',//wi
                        '30.41332-91.18176',//b2
                    ]
                });//b2we done
                Waypoint.insert({//nwrro
                    latitude: '30.41335',
                    longitude: '-91.18187',
                    waypointID: '30.41335-91.18187',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18186',//wi
                        '30.41336-91.18187',//nwbe
                        '30.41343-91.18179',//nnwi
                        '30.4134-91.18183'//b16se
                    ]
                });//nwrro done
                Waypoint.insert({//swrro
                    latitude: '30.41329',
                    longitude: '-91.18186',
                    waypointID: '30.41329-91.18186',//srro
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18186',//wi
                        '30.41327-91.18187',//swbe
                        '30.41324-91.18183',//b15nee
                        '30.41321-918178'//sswi
                    ]
                });//swrro done
                Waypoint.insert({//B16se
                    latitude: '30.4134',
                    longitude: '-91.18183',
                    waypointID: '30.4134-91.18183',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41335-91.18187',//nwrro
                        '30.41345-91.18187'//b16
                    ]
                });//b16se done
                Waypoint.insert({//nnwi
                    latitude: '30.41343',
                    longitude: '-91.18179',
                    waypointID: '30.41343-91.18179',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41335-91.18187',//nwrro
                        '30.41345-91.1818',//B10swe
                        '30.4134-91.18183',//b16se
                        '30.41343-91.18173',//nnei
                        '30.41342-91.18176'//storage
                    ]
                });//nnwi done
                Waypoint.insert({//nnei
                    latitude: '30.41343',
                    longitude: '-91.18173',
                    waypointID: '30.41343-91.18173',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41343-91.18179',//nnwi
                        '30.41351-91.18187',//b10
                        '30.41342-91.18176',//storage
                        '30.4134-91.18169',//b6swe
                        '30.41335-91.18166'//nei
                    ]
                });//nnei done
                Waypoint.insert({//B10w
                    latitude: '30.41345',
                    longitude: '-91.1818',
                    waypointID: '30.41345-91.1818',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41343-91.18179',//nnwi
                        '30.41351-91.18187'//b10
                    ]
                });//b10w done
                Waypoint.insert({//b10e
                    latitude: '30.41346',
                    longitude: '-91.18173',
                    waypointID: '30.41346-91.18173',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41351-91.18187',//b10
                        '30.41343-91.18173',//nnei
                    ]
                });//b10e done
                Waypoint.insert({//storageE
                    latitude: '30.41342',
                    longitude: '-91.18176',
                    waypointID: '30.41342-91.18176',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41343-91.18173',//nnei
                        '30.41343-91.18179'//nnwi
                    ]
                });//storage done
                Waypoint.insert({//b6swe
                    latitude: '30.4134',
                    longitude: '-91.18169',
                    waypointID: '30.4134-91.18169',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41343-91.18173',//nnei
                        '30.41335-91.18166'//nei
                    ]
                }); //b6swe done
                Waypoint.insert({//nei
                    latitude: '30.41335',
                    longitude: '-91.18166',
                    waypointID: '30.41335-91.18166',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41343-91.18173',//nnei
                        '30.4134-91.18169',//b6swe
                        '30.41337-91.18165',//nebe
                        '30.41332-91.18166'//ei
                    ]
                });//nei done
                Waypoint.insert({//ei
                    latitude: '30.41332',
                    longitude: '-91.18166',
                    waypointID: '30.41332-91.18166',//ei
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18161',//ee
                        '30.41335-91.18166',//nei
                        '30.41329-91.18161',//sei
                        '30.41332-91.18167',//b2ee
                    ]
                });//ei done
                Waypoint.insert({//b2ee
                    latitude: '30.41332',
                    longitude: '-91.18167',
                    waypointID: '30.41332-91.18167',//b2ee
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18166',//ei
                        '30.41332-91.18176',//b2
                    ]
                });//b2ee done
                Waypoint.insert({//ee
                    latitude: '30.41332',
                    longitude: '-91.18161',
                    waypointID: '30.41332-91.18161',//ee
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41338-91.18161',//b6se
                        '30.41327-91.18161',//b5ne
                        '30.41332-91.18166'//ei
                    ]
                });//ee done
                Waypoint.insert({//B6se
                    latitude: '30.41338',
                    longitude: '-91.18161',
                    waypointID: '30.41338-91.18161',//b6se
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18161',//ee
                        '30.41346-91.18165',//b6
                    ]
                });//b6se done
                Waypoint.insert({//B5ne
                    latitude: '30.41327',
                    longitude: '-91.18161',
                    waypointID: '30.41327-91.18161',//b5ne
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18165',//b5
                        '30.41332-91.18161'//ee

                    ]
                });//b5ne done
                Waypoint.insert({//sei
                    latitude: '30.41329',
                    longitude: '-91.18166',
                    waypointID: '30.41329-91.18161',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18166',//ei
                        '30.41328-91.18165',//sebe
                        '30.41321-91.18173',//ssei
                        '30.41324-91.18169'//b5swe
                    ]
                });//sei done
                Waypoint.insert({//sebe
                    latitude: '30.41328',
                    longitude: '-91.18165',
                    waypointID: '30.41328-91.18165',//sebe
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41329-91.18161',//sei
                        '30.41328-91.18163',//seb
                    ]
                });//sebe done
                Waypoint.insert({//B6swe
                    latitude: '30.41324',
                    longitude: '-91.18169',
                    waypointID: '30.4134-91.18169',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41343-91.18173',//nnei
                        '30.41346-91.18165'//b6
                    ]
                });//b6swe done
                Waypoint.insert({//B5nwe
                    latitude: '30.41324',
                    longitude: '-91.18169',
                    waypointID: '30.41324-91.18169',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41321-91.18173',//ssei
                        '30.41346-91.18165'//b5
                    ]
                });//b5nwe done
                Waypoint.insert({//ssei
                    latitude: '30.41321',
                    longitude: '-91.18173',
                    waypointID: '30.41321-91.18173',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41329-91.18161',//sei
                        '30.41321-918178',//sswi
                        '30.41318-91.18172',//b9ee
                        '30.41324-91.18169',//b5nwe
                        '30.41324-91.18173',//b2see
                        '30.41332-91.18176',//sev
                    ]
                });//ssei done
                Waypoint.insert({//B2see
                    latitude: '30.41324',
                    longitude: '-91.18173',
                    waypointID: '30.41324-91.18173',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41321-91.18173',//ssei
                        '30.41332-91.18176',//b2
                    ]
                });//b2see done
                Waypoint.insert({//b9nee
                    latitude: '30.41318',
                    longitude: '-91.18172',
                    waypointID: '30.41318-91.18172',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41313-91.18165',//b9
                        '30.41321-91.18173',//ssei
                    ]
                });//b9nee done
                Waypoint.insert({//sswi
                    latitude: '30.41321',
                    longitude: '-91.18178',
                    waypointID: '30.41321-918178',
                    isEntrance: 'false',
                    isTurn: 'true',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41329-91.18186',//srro
                        '30.41324-91.18183',// b15nee
                        '30.41324-91.18178',//b2swe
                        '30.41332-91.18176',//sev
                        '30.41318-91.18179',//b9we
                        '30.41321-91.18173'//ssei
                    ]
                });//sswi done
                Waypoint.insert({//B2swe
                    latitude: '30.41324',
                    longitude: '-91.18178',
                    waypointID: '30.41324-91.18178',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18176',//b2
                        '30.41321-918178'//sswi
                    ]
                });//b2swe done
                Waypoint.insert({//B9nwe
                    latitude: '30.41318',
                    longitude: '-91.18179',
                    waypointID: '30.41318-91.18179',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41313-91.18165',//b9
                        '30.41321-918178'//sswi
                    ]
                });//b15nwe done
                Waypoint.insert({//B15nee
                    latitude: '30.41324',
                    longitude: '-91.18183',
                    waypointID: '30.41324-91.18183',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41319-91.18186',//b15
                        '30.41329-91.18186'//srro
                    ]
                });//b15nee done
                Waypoint.insert({//swbe
                    llatitude: '30.41327',
                    longitude: '-91.18187',
                    waypointID: '30.41327-91.18187',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41329-91.18186',//swrro
                        '30.41328-91.18189'//swb
                    ]
                });//swbe done
                Waypoint.insert({//swb
                    latitude: '30.41328',
                    longitude: '-91.18189',
                    waypointID: '30.41328-91.18189',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'true',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41327-91.18187'//swb
                    ]
                });//swb done
                Waypoint.insert({//nwbe
                    latitude: '30.41336',
                    longitude: '-91.18187',
                    waypointID: '30.41336-91.18187',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41335-91.18187',//nwrro
                        '30.41336-91.18189'//nwb
                    ]
                });//nwbe done
                Waypoint.insert({//nwb
                    latitude: '30.41336',
                    longitude: '-91.18189',
                    waypointID: '30.41336-91.18189',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'true',
                    neighbors: [
                        '30.41336-91.18187',//nwbe
                    ]
                });//nwb done
                Waypoint.insert({//nebe
                    latitude: '30.41337',
                    longitude: '-91.18165',
                    waypointID: '30.41337-91.18165',
                    isEntrance: 'true',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41335-91.18166',//nei
                        '30.41336-91.18163'//neb
                    ]
                });//nebe done
                Waypoint.insert({//neb
                    latitude: '30.41336',
                    longitude: '-91.18163',
                    waypointID: '30.41336-91.18163',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'true',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41337-91.18165'//nebe
                    ]
                });//neb done
                Waypoint.insert({//seb
                    latitude: '30.41328',
                    longitude: '-91.18163',
                    waypointID: '30.41328-91.18163',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'true',
                    neighbors: [
                        '30.41328-91.18165'//sebe
                    ]
                });//seb done
                Waypoint.insert({//sev
                    latitude: '30.41332',
                    longitude: '-91.18176',
                    waypointID: '30.41332-91.18176',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'false',
                    isVending: 'true',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41321-91.18173',//ssei
                        '30.41321-918178'//sswi
                    ]
                });//sev done
                Waypoint.insert({//b16
                    latitude: '30.41345',
                    longitude: '-91.18187',
                    waypointID: '30.41345-91.18187',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'true',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.4134-91.18183',//b16see
                        '30.41337-91.18191'//b16se
                    ]
                });//b16done
                Waypoint.insert({//b10
                    latitude: '30.41351',
                    longitude: '-91.18176',
                    waypointID: '30.41351-91.18187',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'true',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41345-91.1818',//b10we
                        '30.41343-91.18179'//b10ee
                    ]
                });//b10 done
                Waypoint.insert({//b6
                    latitude: '30.41346',
                    longitude: '-91.18165',
                    waypointID: '30.41346-91.18165',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'true',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41338-91.18161',//b6se
                        '30.4134-91.18169'//b6swe
                    ]
                });//b6 done
                Waypoint.insert({//b2
                    latitude: '30.41332',
                    longitude: '-91.18176',
                    waypointID: '30.41332-91.18176',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'true',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41332-91.18185',//b2we
                        '30.41332-91.18167',//b2ee
                        '30.41324-91.18173',//b2see
                        '30.41324-91.18178'//b2swe
                    ]
                });//b2 done
                Waypoint.insert({//b5
                    latitude: '30.4132',
                    longitude: '-91.18165',
                    waypointID: '30.41332-91.18165',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'true',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41327-91.18161',//b5ne
                        '30.41324-91.18169',//b5swe
                    ]
                });//b5 done
                Waypoint.insert({//b9
                    latitude: '30.41313',
                    longitude: '-91.18176',
                    waypointID: '30.41313-91.18165',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'true',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41318-91.18179',
                        '30.41318-91.18172'
                    ]
                });//b9done
                Waypoint.insert({//b15
                    latitude: '30.41319',
                    longitude: '-91.18186',
                    waypointID: '30.41319-91.18186',
                    isEntrance: 'false',
                    isTurn: 'false',
                    isRoom: 'true',
                    isVending: 'false',
                    isMRestroom: 'false',
                    isFRestroom: 'false',
                    neighbors: [
                        '30.41337-91.18191',
                        '30.41324-91.18183'
                    ]
                });//b15done
            }
            //------------------------------ END WAYPOINT
        });
    }
}