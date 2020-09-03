CREATE TABLE POST(
post_id int not null auto_increment,
user_name varchar(255),
tag varchar(255),
post_content_id int null,
PRIMARY KEY (post_id),
CONSTRAINT FK_CONTENT_ID FOREIGN KEY(post_content_id) REFERENCES POSTCONTENT(post_content_id)
);

CREATE TABLE POSTCONTENT(
post_content_id int not null auto_increment,
text_input TEXT, 
data_input TEXT,
image_key varchar(255),
PRIMARY KEY(post_content_id));


